import { DVD } from "../Classes/DVD";
import { Livro } from "../Classes/Livro";

export interface IProdutoVisitor {
  visitDVD(produto: DVD): void;
  visitLivro(produto: Livro): void;
}
