class Evento {
    private data: string;
    private local: string;
    private situacao: string;
    private descricao: string;

    /**
     * Getter $data
     * @return {string}
     */
    public get $data(): string {
        return this.data;
    }

    /**
     * Getter $local
     * @return {string}
     */
    public get $local(): string {
        return this.local;
    }

    /**
     * Getter $situacao
     * @return {string}
     */
    public get $situacao(): string {
        return this.situacao;
    }

    /**
     * Getter $descricao
     * @return {string}
     */
    public get $descricao(): string {
        return this.descricao;
    }

    /**
     * Setter $data
     * @param {string} value
     */
    public set $data(value: string) {
        this.data = value;
    }

    /**
     * Setter $local
     * @param {string} value
     */
    public set $local(value: string) {
        this.local = value;
    }

    /**
     * Setter $situacao
     * @param {string} value
     */
    public set $situacao(value: string) {
        this.situacao = value;
    }

    /**
     * Setter $descricao
     * @param {string} value
     */
    public set $descricao(value: string) {
        this.descricao = value;
    }

}

export default Evento;