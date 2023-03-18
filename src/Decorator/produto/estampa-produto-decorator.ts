import { ProdutoDecorator } from "./produto-decorator";

export class EstampaProdutoDecorator extends ProdutoDecorator {
  getNome(): string {
    return this.produto.getNome() + " estampada";
  }

  getPreco(): number {
    return this.produto.getPreco() + 10;
  }
}
