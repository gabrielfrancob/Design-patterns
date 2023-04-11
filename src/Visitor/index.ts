import { DVD } from "./Classes/DVD";
import { DescontoVisitor } from "./Classes/DescontoVisitor";
import { Livro } from "./Classes/Livro";
import { IProduto } from "./Interfaces/IProduto";

const produtos: IProduto[] = [
  new Livro("Padrões de Projeto", "GOF", 59.9),
  new DVD("Shrek 3", "DreamWorks", 19.9),
  new Livro("Use a cabeça!", "Eric Freeman", 20),
  new DVD("Hush", "Mike Flanagan", 15),
];

const descontoVisitor = new DescontoVisitor();

produtos.forEach((produto) => produto.accept(descontoVisitor));

console.log(`Preço total: R$${descontoVisitor.getTotal()}`);
