import Servico from "./Servico";

class CotacaoResponse {
  private Codigo: Servico;
  private Valor: number;
  private PrazoEntrega: number;
  private ValorMaoPropria: number;
  private ValorAvisoRecebimento: number;
  private ValorValorDeclarado: number;
  private EntregaDomiciliar: boolean;
  private EntregaSabado: boolean;
  private ValorSemAdicionais: number;
  private obsFim: string;

  constructor(
    servico: Servico,
    response: {
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
    }
  ) {
    const formataValor = (valor: string): number => {
      return parseFloat(valor.replace(".", "").replace(",", "."));
    };

    this.Codigo = servico;
    this.Valor = formataValor(response.Valor);
    this.PrazoEntrega = parseInt(response.PrazoEntrega);
    this.ValorMaoPropria = formataValor(response.ValorMaoPropria);
    this.ValorAvisoRecebimento = formataValor(response.ValorAvisoRecebimento);
    this.ValorValorDeclarado = formataValor(response.ValorValorDeclarado);
    this.EntregaDomiciliar = response.EntregaDomiciliar === "S" ? true : false;
    this.EntregaSabado = response.EntregaSabado === "S" ? true : false;
    this.ValorSemAdicionais = formataValor(response.ValorSemAdicionais);
    this.obsFim = response.obsFim;
  }

  /**
   * Getter $Codigo
   * @return {Servico}
   */
  public get $Codigo(): Servico {
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
   * @return {boolean}
   */
  public get $EntregaDomiciliar(): boolean {
    return this.EntregaDomiciliar;
  }

  /**
   * Getter $EntregaSabado
   * @return {boolean}
   */
  public get $EntregaSabado(): boolean {
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
   * @param {Servico} value
   */
  public set $Codigo(value: Servico) {
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
   * @param {boolean} value
   */
  public set $EntregaDomiciliar(value: boolean) {
    this.EntregaDomiciliar = value;
  }

  /**
   * Setter $EntregaSabado
   * @param {boolean} value
   */
  public set $EntregaSabado(value: boolean) {
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

export default CotacaoResponse;
