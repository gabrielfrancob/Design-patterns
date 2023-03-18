import { Bicicleta } from "../veiculo/bicicleta";
import { Veiculo } from "../veiculo/veiculo";
import { VeiculoFactory } from "./veiculo-factory";

export class BicicletaFactory extends VeiculoFactory {
  getVeiculo(nomeVeiculo: string): Veiculo {
    return new Bicicleta(nomeVeiculo);
  }
}
