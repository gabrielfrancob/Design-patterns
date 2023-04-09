import { Memento } from "../Interface/Memento";

export class ConcreteMemento implements Memento {
  constructor(
    private nome: string,
    private data: Date,
    private caminho: string,
    private formato: string
  ) {}

  getNome(): string {
    return this.nome;
  }

  getData(): Date {
    return this.data;
  }

  getCaminho(): string {
    return this.caminho;
  }

  getFormato(): string {
    return this.formato;
  }
}
