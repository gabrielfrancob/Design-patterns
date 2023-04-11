import { IProdutoVisitor } from "./IProdutoVisitor";

export interface IProduto {
  accept(visitor: IProdutoVisitor): void;
  getPreco(): number;
}
