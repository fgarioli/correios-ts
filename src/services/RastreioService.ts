import axios from "axios";
import { JSDOM } from "jsdom";
import dayjs from "dayjs";
import customParseFormat from "dayjs/plugin/customParseFormat";
import utc from "dayjs/plugin/utc";
import timezone from "dayjs/plugin/timezone";
import Evento from "../models/Evento";

dayjs.extend(customParseFormat);
dayjs.extend(utc);
dayjs.extend(timezone);

class RastreioService {
    
    public static async rastrear(codigo: string): Promise<Evento[]> {
        const data = await this.getData(codigo);
        return this.formatData(data);
    }

    private static async getData(codigo: string): Promise<string> {
        const config = {
            headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
            responseEncoding: 'latin1'
        };
        const params = new URLSearchParams();
        params.append('objetos', codigo);
        let res = await axios.post("https://www2.correios.com.br/sistemas/rastreamento/resultado.cfm", params, config);

        return res.data;
    }

    private static formatData(data: string): Evento[] {
        let historico: Evento[] = [];

        const dom = new JSDOM(data);
        const document = dom.window.document;
        const tables = document.querySelectorAll(".listEvent");
        tables.forEach(table => {
            const columns = table.querySelectorAll("td");
            let evento = new Evento();
            columns.forEach((column, index) => {
                if (column != null) {
                    switch (index) {
                        case 0: // Data/Local
                            const dataLocal = column.textContent!.split(" ")!
                                .join("")!.split(String.fromCharCode(194))!.join("")!
                                .split(String.fromCharCode(160))!.join("")!
                                .split('\n').filter(value => value !== "" && value !== " ");
                            evento.$data = dayjs(`${dataLocal[0]} ${dataLocal[1]}`, "DD/MM/YYYY HH:mm").tz('America/Sao_Paulo').format();
                            evento.$local = dataLocal[2];
                            break;

                        case 1: // Situação/Descrição
                            const sitDescr = column.textContent!
                                .split('\t')!.join("")!.split('\n')!
                                .filter(value => value !== "" && value !== " ");
                            evento.$situacao = sitDescr[0];
                            sitDescr.splice(0, 1);
                            evento.$descricao = sitDescr
                                .reduce((previousValue, currentValue) => previousValue += ` ${currentValue}`, "")
                                .replace(" ", "").split("  ").join(" ").split(" / ").join("/");
                            break;
                    }
                }
            });

            historico.push(evento);
        });

        return historico.reverse();
    }
}

export default RastreioService;