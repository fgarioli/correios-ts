import FormatoEncomendaEnum from "../enums/FormatoEncomendaEnum";
import SimNaoEnum from "../enums/SimNaoEnum";
import Servico from "./Servico";

class CorreiosRequest {
  private nCdEmpresa: string = "";
  private sDsSenha: string = "";
  private nCdServico: Array<Servico> = [];
  private sCepOrigem: string;
  private sCepDestino: string;
  private nVlPeso: string;
  private nCdFormato: FormatoEncomendaEnum = FormatoEncomendaEnum.CAIXA_PACOTE;
  private nVlComprimento: number;
  private nVlAltura: number;
  private nVlLargura: number;
  private nVlDiametro: number;
  private sCdMaoPropria: SimNaoEnum = SimNaoEnum.NAO;
  private nVlValorDeclarado: number = 0;
  private sCdAvisoRecebimento: SimNaoEnum = SimNaoEnum.NAO;

  public addServico(servico: Servico): void {
    this.nCdServico.push(servico);
  }

  /**
   * Seu código administrativo junto à ECT. O código está disponível no corpo do contrato firmado com os Correios.
   *
   * Getter nCdEmpresa
   * @return {string}
   */
  public get $nCdEmpresa(): string {
    return this.nCdEmpresa;
  }

  /**
   * Senha para acesso ao serviço, associada ao seu código administrativo. A senha inicial corresponde aos 8 primeiros dígitos do CNPJ informado no contrato.
   *
   * Getter $sDsSenha
   * @return {string}
   */
  public get $sDsSenha(): string {
    return this.sDsSenha;
  }

  /**
   * Para clientes sem contrato: utilizar CodigoServicoEnum;
   * Para clientes com contrato: consultar os códigos no seu contrato.
   *
   * Getter $nCdServico
   * @return {Array<Servico>}
   */
  public get $nCdServico(): Array<Servico> {
    return this.nCdServico;
  }

  /**
   * CEP de Origem sem hífen.Exemplo: 05311900
   *
   * Getter $sCepOrigem
   * @return {string}
   */
  public get $sCepOrigem(): string {
    return this.sCepOrigem;
  }

  /**
   * CEP de Destino sem hífen
   *
   * Getter $sCepDestino
   * @return {string}
   */
  public get $sCepDestino(): string {
    return this.sCepDestino;
  }

  /**
   * Peso da encomenda, incluindo sua embalagem. O peso deve ser informado em quilogramas. Se o formato for Envelope, o valor máximo permitido será 1 kg.
   *
   * Getter $nVlPeso
   * @return {string}
   */
  public get $nVlPeso(): string {
    return this.nVlPeso;
  }

  /**
   * Formato da encomenda (incluindo embalagem).
   *
   * Getter $nCdFormato
   * @return {FormatoEncomendaEnum}
   */
  public get $nCdFormato(): FormatoEncomendaEnum {
    return this.nCdFormato;
  }

  /**
   * Comprimento da encomenda (incluindo embalagem), em centímetros.
   *
   * Getter $nVlComprimento
   * @return {number}
   */
  public get $nVlComprimento(): number {
    return this.nVlComprimento;
  }

  /**
   * Altura da encomenda (incluindo embalagem), em centímetros. Se o formato for envelope, informar zero (0).
   *
   * Getter $nVlAltura
   * @return {number}
   */
  public get $nVlAltura(): number {
    return this.nVlAltura;
  }

  /**
   * Largura da encomenda (incluindo embalagem), em centímetros.
   *
   * Getter $nVlLargura
   * @return {number}
   */
  public get $nVlLargura(): number {
    return this.nVlLargura;
  }

  /**
   * Diâmetro da encomenda (incluindo embalagem), em centímetros.
   *
   * Getter $nVlDiametro
   * @return {number}
   */
  public get $nVlDiametro(): number {
    return this.nVlDiametro;
  }

  /**
   * Indica se a encomenda será entregue com o serviço adicional mão própria.
   *
   * Getter $sCdMaoPropria
   * @return {SimNaoEnum}
   */
  public get $sCdMaoPropria(): SimNaoEnum {
    return this.sCdMaoPropria;
  }

  /**
   * Indica se a encomenda será entregue com o serviço adicional valor declarado. Neste campo deve ser apresentado o valor declarado desejado, em Reais.
   *
   * Getter $nVlValorDeclarado
   * @return {number}
   */
  public get $nVlValorDeclarado(): number {
    return this.nVlValorDeclarado;
  }

  /**
   * Indica se a encomenda será entregue com o serviço adicional aviso de recebimento.
   *
   * Getter $sCdAvisoRecebimento
   * @return {SimNaoEnum}
   */
  public get $sCdAvisoRecebimento(): SimNaoEnum {
    return this.sCdAvisoRecebimento;
  }

  /**
   * Seu código administrativo junto à ECT. O código está disponível no corpo do contrato firmado com os Correios.
   *
   * Setter $nCdEmpresa
   * @param {string} value
   */
  public set $nCdEmpresa(value: string) {
    this.nCdEmpresa = value;
  }

  /**
   * Senha para acesso ao serviço, associada ao seu código administrativo. A senha inicial corresponde aos 8 primeiros dígitos do CNPJ informado no contrato.
   *
   * Setter $sDsSenha
   * @param {string} value
   */
  public set $sDsSenha(value: string) {
    this.sDsSenha = value;
  }

  /**
   *
   * Setter $nCdServico
   * @param {Array<Servico>} value
   */
  public set $nCdServico(value: Array<Servico>) {
    this.nCdServico = value;
  }

  /**
   * CEP de Origem sem hífen.Exemplo: 05311900
   *
   * Setter $sCepOrigem
   * @param {string} value
   */
  public set $sCepOrigem(value: string) {
    this.sCepOrigem = value;
  }

  /**
   * CEP de Destino sem hífen
   *
   * Setter $sCepDestino
   * @param {string} value
   */
  public set $sCepDestino(value: string) {
    this.sCepDestino = value;
  }

  /**
   * Peso da encomenda, incluindo sua embalagem. O peso deve ser informado em quilogramas. Se o formato for Envelope, o valor máximo permitido será 1 kg.
   *
   * Setter $nVlPeso
   * @param {string} value
   */
  public set $nVlPeso(value: string) {
    this.nVlPeso = value;
  }

  /**
   * Formato da encomenda (incluindo embalagem).
   *
   * Setter $nCdFormato
   * @param {FormatoEncomendaEnum} value
   */
  public set $nCdFormato(value: FormatoEncomendaEnum) {
    this.nCdFormato = value;
  }

  /**
   * Comprimento da encomenda (incluindo embalagem), em centímetros.
   *
   * Setter $nVlComprimento
   * @param {number} value
   */
  public set $nVlComprimento(value: number) {
    this.nVlComprimento = value;
  }

  /**
   * Altura da encomenda (incluindo embalagem), em centímetros. Se o formato for envelope, informar zero (0).
   *
   * Setter $nVlAltura
   * @param {number} value
   */
  public set $nVlAltura(value: number) {
    this.nVlAltura = value;
  }

  /**
   * Largura da encomenda (incluindo embalagem), em centímetros.
   *
   * Setter $nVlLargura
   * @param {number} value
   */
  public set $nVlLargura(value: number) {
    this.nVlLargura = value;
  }

  /**
   * Diâmetro da encomenda (incluindo embalagem), em centímetros.
   *
   * Setter $nVlDiametro
   * @param {number} value
   */
  public set $nVlDiametro(value: number) {
    this.nVlDiametro = value;
  }

  /**
   * Indica se a encomenda será entregue com o serviço adicional mão própria.
   *
   * Setter $sCdMaoPropria
   * @param {SimNaoEnum} value
   */
  public set $sCdMaoPropria(value: SimNaoEnum) {
    this.sCdMaoPropria = value;
  }

  /**
   * Indica se a encomenda será entregue com o serviço adicional valor declarado. Neste campo deve ser apresentado o valor declarado desejado, em Reais.
   *
   * Setter $nVlValorDeclarado
   * @param {number} value
   */
  public set $nVlValorDeclarado(value: number) {
    this.nVlValorDeclarado = value;
  }

  /**
   * Indica se a encomenda será entregue com o serviço adicional aviso de recebimento.
   *
   * Setter $sCdAvisoRecebimento
   * @param {SimNaoEnum} value
   */
  public set $sCdAvisoRecebimento(value: SimNaoEnum) {
    this.sCdAvisoRecebimento = value;
  }
}

export default CorreiosRequest;
