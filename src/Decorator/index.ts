import { Camiseta } from "./produto/camiseta";
import { EstampaProdutoDecorator } from "./produto/estampa-produto-decorator";
import { ProdutoCustomizadoDecorator } from "./produto/produto-customizado-decorator";

const camiseta = new Camiseta();
const camisetaEstampada = new EstampaProdutoDecorator(camiseta);
const camisetaCustomizada = new ProdutoCustomizadoDecorator(camiseta);

console.log(`[Nome: ${camiseta.getNome()}| Preço: R$${camiseta.getPreco()}]`);

console.log(
  `[Nome: ${camisetaEstampada.getNome()}| Preço: R$${camisetaEstampada.getPreco()}]`
);

console.log(
  `[Nome: ${camisetaCustomizada.getNome()}| Preço: R$${camisetaCustomizada
    .getPreco()
    .toFixed(2)}]`
);
