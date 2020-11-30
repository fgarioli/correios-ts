import axios, { AxiosResponse } from "axios";
import CodigoServico from "../models/Servico";
import CorreiosRequest from "../models/CorreiosRequest";
import CotacaoResponse from "../models/CotacaoResponse";
import Servico from "../models/Servico";
import { parseStringPromise } from "xml2js";

class CotacaoService {
    public async realizarCotacao(
        request: CorreiosRequest
    ): Promise<CotacaoResponse[]> {
        // Realiza uma requisição para cada serviço quando não possui os dados abaixo
        if (request.$nCdEmpresa == "" || request.$sDsSenha == "") {
            let promises = this.getPromises(request);
            const res = await axios.all(promises);

            let ret = [];
            for (let i = 0; i < res.length; i++) {
                ret.push(await this.parseResponse(request, res[i].data));
            }

            return ret.flat();
        } else {
            const res = await this.calcPrecoPrazo(request);
            return await this.parseResponse(request, res.data);
        }
    }

    private getPromises(correiosRequest: CorreiosRequest): Promise<AxiosResponse<any>>[] {
        let promises: Promise<AxiosResponse<any>>[] = [];
        correiosRequest.$nCdServico.forEach((value: CodigoServico) => {
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
        const nCdServico = correiosRequest.$nCdServico
            .map((value: CodigoServico) => {
                return value.$codigo;
            })
            .join(",");
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

    private async parseResponse(correiosRequest: CorreiosRequest, xml: string): Promise<CotacaoResponse[]> {
        const response = await this.parseXml(xml);
        let lista: CotacaoResponse[] = [];

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

            const servico = correiosRequest.$nCdServico.find(
                (value: CodigoServico) => value.$codigo.includes(res.Codigo)
            );

            lista.push(
                new CotacaoResponse(
                    servico == undefined
                        ? new Servico(res.Codigo, "")
                        : servico,
                    res
                )
            );
        });

        return lista;
    }
}

export default CotacaoService;