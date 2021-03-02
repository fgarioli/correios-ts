import ServicoEnum from "../enums/ServicoEnum";
import SimNaoEnum from "../enums/SimNaoEnum";

class Cotacao {
  private Codigo: ServicoEnum;
  private Valor: number;
  private PrazoEntrega: number;
  private ValorMaoPropria: number;
  private ValorAvisoRecebimento: number;
  private ValorValorDeclarado: number;
  private EntregaDomiciliar: SimNaoEnum;
  private EntregaSabado: SimNaoEnum;
  private ValorSemAdicionais: number;
  private obsFim: string;

  /**
   * Getter $Codigo
   * @return {ServicoEnum}
   */
  public get $Codigo(): ServicoEnum {
    return this.Codigo;
  }

  /**
   * Getter $Valor
   * @return {number}
   */
  public get $Valor(): number {
    return this.Valor;
  }

  /**
   * Getter $PrazoEntrega
   * @return {number}
   */
  public get $PrazoEntrega(): number {
    return this.PrazoEntrega;
  }

  /**
   * Getter $ValorMaoPropria
   * @return {number}
   */
  public get $ValorMaoPropria(): number {
    return this.ValorMaoPropria;
  }

  /**
   * Getter $ValorAvisoRecebimento
   * @return {number}
   */
  public get $ValorAvisoRecebimento(): number {
    return this.ValorAvisoRecebimento;
  }

  /**
   * Getter $ValorValorDeclarado
   * @return {number}
   */
  public get $ValorValorDeclarado(): number {
    return this.ValorValorDeclarado;
  }

  /**
   * Getter $EntregaDomiciliar
   * @return {SimNaoEnum}
   */
  public get $EntregaDomiciliar(): SimNaoEnum {
    return this.EntregaDomiciliar;
  }

  /**
   * Getter $EntregaSabado
   * @return {SimNaoEnum}
   */
  public get $EntregaSabado(): SimNaoEnum {
    return this.EntregaSabado;
  }

  /**
   * Getter $ValorSemAdicionais
   * @return {number}
   */
  public get $ValorSemAdicionais(): number {
    return this.ValorSemAdicionais;
  }

  /**
   * Getter $obsFim
   * @return {string}
   */
  public get $obsFim(): string {
    return this.obsFim;
  }

  /**
   * Setter $Codigo
   * @param {ServicoEnum} value
   */
  public set $Codigo(value: ServicoEnum) {
    this.Codigo = value;
  }

  /**
   * Setter $Valor
   * @param {number} value
   */
  public set $Valor(value: number) {
    this.Valor = value;
  }

  /**
   * Setter $PrazoEntrega
   * @param {number} value
   */
  public set $PrazoEntrega(value: number) {
    this.PrazoEntrega = value;
  }

  /**
   * Setter $ValorMaoPropria
   * @param {number} value
   */
  public set $ValorMaoPropria(value: number) {
    this.ValorMaoPropria = value;
  }

  /**
   * Setter $ValorAvisoRecebimento
   * @param {number} value
   */
  public set $ValorAvisoRecebimento(value: number) {
    this.ValorAvisoRecebimento = value;
  }

  /**
   * Setter $ValorValorDeclarado
   * @param {number} value
   */
  public set $ValorValorDeclarado(value: number) {
    this.ValorValorDeclarado = value;
  }

  /**
   * Setter $EntregaDomiciliar
   * @param {SimNaoEnum} value
   */
  public set $EntregaDomiciliar(value: SimNaoEnum) {
    this.EntregaDomiciliar = value;
  }

  /**
   * Setter $EntregaSabado
   * @param {SimNaoEnum} value
   */
  public set $EntregaSabado(value: SimNaoEnum) {
    this.EntregaSabado = value;
  }

  /**
   * Setter $ValorSemAdicionais
   * @param {number} value
   */
  public set $ValorSemAdicionais(value: number) {
    this.ValorSemAdicionais = value;
  }

  /**
   * Setter $obsFim
   * @param {string} value
   */
  public set $obsFim(value: string) {
    this.obsFim = value;
  }
}

export default Cotacao;
