import { ExpressaoAbstract } from "./ExpressaoAbstract";

export class Expressao extends ExpressaoAbstract {
  private expressao: ExpressaoAbstract | undefined;
  private termo: ExpressaoAbstract;

  constructor(termo: ExpressaoAbstract, expressao?: ExpressaoAbstract) {
    super();
    this.termo = termo;
    this.expressao = expressao;
  }

  public interpret(): number {
    if (this.expressao === undefined) {
      return this.termo.interpret();
    } else return this.expressao.interpret() + this.termo.interpret();
  }
}
