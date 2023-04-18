import { IForma } from "../Component/IForma";

export class Retangulo implements IForma {
  constructor(
    private x: number,
    private y: number,
    private altura: number,
    private largura: number
  ) {}

  public desenhar(): void {
    console.log(
      `Desenhando o retânguo em (${this.x}, ${this.y}) com altura ${this.altura} e largura ${this.largura}`
    );
  }
}
