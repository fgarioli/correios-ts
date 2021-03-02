import axios, { AxiosResponse } from "axios";
import CorreiosRequest from "../models/CotacaoRequest";
import Cotacao from "../models/Cotacao";
import { parseStringPromise } from "xml2js";
import ServicoEnum from "../enums/ServicoEnum";
import SimNaoEnum from "../enums/SimNaoEnum";

class CotacaoService {
    public async realizarCotacao(
        request: CorreiosRequest
    ): Promise<Cotacao[]> {
        // Realiza uma requisição para cada serviço quando não possui os dados abaixo
        if (request.$nCdEmpresa == "" || request.$sDsSenha == "") {
            let promises = this.getPromises(request);
            const res = await axios.all(promises);

            let ret = [];
            for (let i = 0; i < res.length; i++) {
                ret.push(await this.parseResponse(res[i].data));
            }

            return ret.flat();
        } else {
            const res = await this.calcPrecoPrazo(request);
            return await this.parseResponse(res.data);
        }
    }

    private getPromises(correiosRequest: CorreiosRequest): Promise<AxiosResponse<any>>[] {
        let promises: Promise<AxiosResponse<any>>[] = [];
        correiosRequest.$nCdServico.forEach((value: ServicoEnum) => {
            let request: CorreiosRequest = Object.assign(
                new CorreiosRequest(),
                correiosRequest
            );
            request.$nCdServico = [value];
            promises.push(this.calcPrecoPrazo(request));
        });

        return promises;
    }

    private async calcPrecoPrazo(
        correiosRequest: CorreiosRequest
    ): Promise<AxiosResponse<any>> {
        const nCdServico = correiosRequest.$nCdServico.join(",");
        const request: any = { ...correiosRequest };
        request.nCdServico = nCdServico;

        return axios.get("http://ws.correios.com.br/calculador/CalcPrecoPrazo.asmx/CalcPrecoPrazo", {
            params: request,
            timeout: 3000
        });
    }

    private async parseXml(xml: string): Promise<any[]> {
        let response: any = await parseStringPromise(xml, { explicitArray: false });
        response = response.cResultado.Servicos.cServico;

        return Array.isArray(response) ? response : [response];
    }

    private async parseResponse(xml: string): Promise<Cotacao[]> {
        const response = await this.parseXml(xml);
        let lista: Cotacao[] = [];

        response.forEach((res: {
            Codigo: string;
            Valor: string;
            PrazoEntrega: string;
            ValorMaoPropria: string;
            ValorAvisoRecebimento: string;
            ValorValorDeclarado: string;
            EntregaDomiciliar: string;
            EntregaSabado: string;
            Erro: string;
            MsgErro: string;
            ValorSemAdicionais: string;
            obsFim: string;
        }) => {
            if (res.Erro !== "0") {
                throw new Error(res.MsgErro);
            }

            const formataValor = (valor: string): number => {
                return parseFloat(valor.replace(".", "").replace(",", "."));
            };

            let cotacao = new Cotacao();
            res.Codigo = res.Codigo.length < 5 ? `0${res.Codigo}` : res.Codigo;
            cotacao.$Codigo = this.enumFromValue(res.Codigo, ServicoEnum);
            cotacao.$Valor = formataValor(res.Valor);
            cotacao.$PrazoEntrega = parseInt(res.PrazoEntrega);
            cotacao.$ValorMaoPropria = formataValor(res.ValorMaoPropria);
            cotacao.$ValorAvisoRecebimento = formataValor(res.ValorAvisoRecebimento);
            cotacao.$ValorValorDeclarado = formataValor(res.ValorValorDeclarado);
            cotacao.$EntregaDomiciliar = this.enumFromValue(res.EntregaDomiciliar, SimNaoEnum);
            cotacao.$EntregaSabado = this.enumFromValue(res.EntregaSabado, SimNaoEnum);
            cotacao.$ValorSemAdicionais = formataValor(res.ValorSemAdicionais);
            cotacao.$obsFim = res.obsFim;

            lista.push(cotacao);
        });

        return lista;
    }

    private enumFromValue = <T extends Record<string, string>>(val: string, _enum: T) => {
        const enumName = (Object.keys(_enum) as Array<keyof T>).find(k => _enum[k] === val)
        if (!enumName) throw Error('Invalid value for enum') // here fail fast as an example
        return _enum[enumName]
    }
}

export default CotacaoService;