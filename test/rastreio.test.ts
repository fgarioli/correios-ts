import { RastreioService } from "../src/index";

test("rastreio", async (done) => {
    const eventos = await RastreioService.rastrear('OL541904724BR');
    console.log(eventos);
    done();
})