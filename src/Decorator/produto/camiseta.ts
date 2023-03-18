import { IProduto } from "./produto-interface";

export class Camiseta implements IProduto {
  protected nome: string = "Camiseta";
  protected preco: number = 49.99;

  getNome(): string {
    return this.nome;
  }

  getPreco(): number {
    return this.preco;
  }
}
