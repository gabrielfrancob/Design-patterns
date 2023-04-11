import { IProdutoVisitor } from "../Interfaces/IProdutoVisitor";
import { DVD } from "./DVD";
import { Livro } from "./Livro";

export class DescontoVisitor implements IProdutoVisitor {
  private total: number = 0;

  public visitDVD(produto: DVD): void {
    this.total += produto.getPreco() * 0.75;
  }

  public visitLivro(produto: Livro): void {
    if (produto.getAutor() === "GOF") {
      this.total += produto.getPreco() * 0.5;
    } else {
      this.total += produto.getPreco();
    }
  }

  public getTotal(): number {
    return Number(this.total.toFixed(2));
  }
}
