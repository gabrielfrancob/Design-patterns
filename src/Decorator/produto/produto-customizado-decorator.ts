import { ProdutoDecorator } from "./produto-decorator";

export class ProdutoCustomizadoDecorator extends ProdutoDecorator {
  getNome(): string {
    return this.produto.getNome() + " customizada";
  }

  getPreco(): number {
    return this.produto.getPreco() + 50;
  }
}
