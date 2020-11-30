import axios from "axios";
import { JSDOM } from "jsdom";

test("rastreio", async (done) => {
    const config = {
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        responseEncoding: 'latin1'
    };
    const params = new URLSearchParams();
    params.append('objetos', 'OL541904724BR');
    let res = await axios.post("https://www2.correios.com.br/sistemas/rastreamento/resultado.cfm", params, config);

    let historico: any = [];

    const dom = new JSDOM(res.data);
    const document = dom.window.document;
    const tables = document.querySelectorAll(".listEvent");
    tables.forEach(table => {
        const columns = table.querySelectorAll("td");
        let evento = { data: '', local: '', situacao: '', descricao: '' };
        columns.forEach((column, index) => {
            if (column != null) {
                switch (index) {
                    case 0: // Data/Local
                        const dataLocal = column.textContent!.split(" ")!.join("")!.split('\n').filter(value => value !== "" && value !== " ");
                        evento.data = `${dataLocal[0]} ${dataLocal[1]}`;
                        evento.local = dataLocal[2];
                        break;

                    case 1: // Situação/Descrição
                        const sitDescr = column.textContent!.split('\t').join("")!.split('\n').filter(value => value !== "" && value !== " ");
                        evento.situacao = sitDescr[0];
                        sitDescr.splice(0, 1);
                        evento.descricao = sitDescr.reduce((previousValue, currentValue) => previousValue += ` ${currentValue}`, "").replace(" ", "").split("  ").join(" ");
                        break;
                }
            }
        });

        historico.push(evento);
    });

    console.log(historico.reverse());
    done();
})