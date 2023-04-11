import { IProduto } from "../Interfaces/IProduto";
import { IProdutoVisitor } from "../Interfaces/IProdutoVisitor";

export class DVD implements IProduto {
  private titulo: string;
  private produtor: string;
  private preco: number;

  constructor(titulo: string, produtor: string, preco: number) {
    this.titulo = titulo;
    this.produtor = produtor;
    this.preco = preco;
  }

  public accept(visitor: IProdutoVisitor): void {
    visitor.visitDVD(this);
  }

  public getPreco(): number {
    return this.preco;
  }

  public getTitulo(): string {
    return this.titulo;
  }

  public getProdutor(): string {
    return this.produtor;
  }
}
