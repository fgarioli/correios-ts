import { CotacaoService } from "../src/index";
import ServicoEnum from "../src/enums/ServicoEnum";
import CotacaoRequest from "../src/models/CotacaoRequest";

test("Simulação Correios", async (done) => {
  const request = new CotacaoRequest();
  request.$nCdEmpresa = "08082650";
  request.$sDsSenha = "564321";
  request.addServico(ServicoEnum.PAC);
  request.addServico(ServicoEnum.SEDEX);
  request.$sCepOrigem = "70002900";
  request.$sCepDestino = "29304655";
  request.$nVlPeso = "0.5";
  request.$nVlComprimento = 20;
  request.$nVlAltura = 30;
  request.$nVlLargura = 40;
  request.$nVlDiametro = 0;

  const service = new CotacaoService();
  const res = await service.realizarCotacao(request);
  console.log(res);
  done();
});
