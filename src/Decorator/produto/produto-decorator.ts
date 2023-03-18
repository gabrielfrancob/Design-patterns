import { IProduto } from "./produto-interface";

export class ProdutoDecorator implements IProduto {
  constructor(protected produto: IProduto) {}

  getNome(): string {
    return this.produto.getNome();
  }

  getPreco(): number {
    return this.produto.getPreco();
  }
}
