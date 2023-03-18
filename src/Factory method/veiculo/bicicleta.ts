import { Veiculo } from "./veiculo";

export class Bicicleta implements Veiculo {
  constructor(private nomeCarro: string) {}

  transportar(nomePassageiro: string): void {
    console.log(`${this.nomeCarro} está buscando ${nomePassageiro}`);
  }

  parar(): void {
    console.log(`${this.nomeCarro} parou`);
  }
}
