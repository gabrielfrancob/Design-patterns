import { IForma } from "../Component/IForma";

export class Grupo implements IForma {
  private formas: IForma[] = [];

  public adicionarForma(...forma: IForma[]): void {
    this.formas.push(...forma);
  }

  public desenhar(): void {
    console.log("Desenhando um grupo de objetos");
    this.formas.forEach((forma) => forma.desenhar());
  }
}
