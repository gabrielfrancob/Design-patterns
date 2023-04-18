import { IForma } from "../Component/IForma";

export class Circulo implements IForma {
  constructor(private x: number, private y: number, private raio: number) {}

  public desenhar(): void {
    console.log(
      `Desenhando o círculo em (${this.x}, ${this.y}) com raio ${this.raio}`
    );
  }
}
