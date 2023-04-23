import { Formato } from "./Formato";

export class Retangulo implements Formato {
  public altura: number;
  public largura: number;

  constructor(altura: number, largura: number) {
    this.altura = altura;
    this.largura = largura;
  }

  clone(): Formato {
    return new Retangulo(this.altura, this.largura);
  }
}
