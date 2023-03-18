import { Cliente } from "../cliente/cliente";
import { Veiculo } from "./veiculo";

export class CarroIndividual implements Veiculo {
  constructor(public nome: string, private readonly cliente: Cliente) {}
  pegar(): void {
    console.log(
      `O carro individual ${this.nome} está buscando ${this.cliente.nome}`
    );
  }
}
