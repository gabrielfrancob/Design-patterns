import { IProduto } from "../Interfaces/IProduto";
import { IProdutoVisitor } from "../Interfaces/IProdutoVisitor";

export class Livro implements IProduto {
  private titulo: string;
  private autor: string;
  private preco: number;

  constructor(titulo: string, autor: string, preco: number) {
    this.titulo = titulo;
    this.autor = autor;
    this.preco = preco;
  }

  public accept(visitor: IProdutoVisitor): void {
    visitor.visitLivro(this);
  }

  public getPreco(): number {
    return this.preco;
  }

  public getTitulo(): string {
    return this.titulo;
  }

  public getAutor(): string {
    return this.autor;
  }
}
