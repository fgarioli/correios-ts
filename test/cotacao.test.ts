import { CotacaoService } from "../src/index";
import Servico from "../src/models/Servico";
import CorreiosRequest from "../src/models/CorreiosRequest";

test("Simulação Correios", async (done) => {
  const request = new CorreiosRequest();
  request.$nCdEmpresa = "08082650";
  request.$sDsSenha = "564321";
  request.addServico(Servico.PAC());
  request.addServico(Servico.SEDEX());
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
