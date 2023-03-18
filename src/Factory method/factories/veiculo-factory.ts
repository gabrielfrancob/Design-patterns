import { Veiculo } from "../veiculo/veiculo";

export abstract class VeiculoFactory {
  abstract getVeiculo(nomeVeiculo: string): Veiculo;

  transportar(nomePassageiro: string, nomeVeiculo: string): Veiculo {
    const carro = this.getVeiculo(nomeVeiculo);
    carro.transportar(nomePassageiro);
    return carro;
  }
}
