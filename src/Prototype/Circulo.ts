import { Formato } from "./Formato";

export class Circulo implements Formato {
  public raio: number;

  constructor(raio: number) {
    this.raio = raio;
  }

  clone(): Formato {
    return new Circulo(this.raio);
  }

  
}
