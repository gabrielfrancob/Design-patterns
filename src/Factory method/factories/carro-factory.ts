import { Carro } from "../veiculo/carro";
import { Veiculo } from "../veiculo/veiculo";
import { VeiculoFactory } from "./veiculo-factory";

export class CarroFactory extends VeiculoFactory {
  getVeiculo(nomeVeiculo: string): Veiculo {
    return new Carro(nomeVeiculo);
  }
}
