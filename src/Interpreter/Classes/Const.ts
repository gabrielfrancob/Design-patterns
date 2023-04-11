import { ExpressaoAbstract } from "./ExpressaoAbstract";

export class Const extends ExpressaoAbstract {
  private valor: number;

  constructor(valor: number) {
    super();
    this.valor = valor;
  }

  public interpret(): number {
    return this.valor;
  }
}
