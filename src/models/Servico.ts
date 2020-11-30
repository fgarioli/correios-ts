class Servico {
  private codigo: string;
  private label: string;

  constructor(codigo: string, label: string) {
    this.codigo = codigo;
    this.label = label;
  }

  public static PAC(): Servico {
    return new Servico("04510", "PAC");
  }

  public static SEDEX(): Servico {
    return new Servico("04014", "Sedex");
  }

  public static SEDEX_10(): Servico {
    return new Servico("04790", "Sedex 10");
  }

  public static SEDEX_12(): Servico {
    return new Servico("04782", "Sedex 12");
  }

  public static SEDEX_HOJE(): Servico {
    return new Servico("04804", "Sedex Hoje");
  }

  /**
   * Getter $codigo
   * @return {string}
   */
  public get $codigo(): string {
    return this.codigo;
  }

  /**
   * Getter $label
   * @return {string}
   */
  public get $label(): string {
    return this.label;
  }

  /**
   * Setter $codigo
   * @param {string} value
   */
  public set $codigo(value: string) {
    this.codigo = value;
  }

  /**
   * Setter $label
   * @param {string} value
   */
  public set $label(value: string) {
    this.label = value;
  }
}

export default Servico;
