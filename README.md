# correios-ts

Biblioteca para cotação de frete e rastreamento de encomendas para os Correios

## Features

- Realizar cotação de Encomendas
- Realizar rastreio de encomendas

## Installing

Using npm:

```bash
$ npm install correios-ts
```

## Example

### Simular uma cotação de frete

```js
import { CotacaoService } from 'correios-ts';
import ServicoEnum from 'correios-ts/dist/enums/ServicoEnum';
import CotacaoRequest from 'correios-ts/dist/models/CotacaoRequest';

const request = new CotacaoRequest();
request.$nCdEmpresa = "08082650";
request.$sDsSenha = "564321";
request.addServico(ServicoEnum.PAC);
request.addServico(ServicoEnum.SEDEX);
request.$sCepOrigem = "70002900";
request.$sCepDestino = "01021200";
request.$nVlPeso = "0.5";
request.$nVlComprimento = 20;
request.$nVlAltura = 30;
request.$nVlLargura = 40;
request.$nVlDiametro = 0;

const service = new CotacaoService();
const res = await service.realizarCotacao(request);
```

### Rastrear uma encomenda

```js
import { RastreioService } from 'correios-ts';

const eventos = await RastreioService.rastrear('OL541904724BR');
```

## License

[MIT](LICENSE)