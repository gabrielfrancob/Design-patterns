import { ExpressaoAbstract } from "./ExpressaoAbstract";

export class Termo extends ExpressaoAbstract {
  private termo: ExpressaoAbstract | undefined;
  private const: ExpressaoAbstract;

  constructor(_const: ExpressaoAbstract, termo?: ExpressaoAbstract) {
    super();
    this.const = _const;
    this.termo = termo;
  }

  public interpret(): number {
    if (this.termo == undefined) {
      return this.const.interpret();
    }
    return this.termo?.interpret() * this.const.interpret();
  }
}
