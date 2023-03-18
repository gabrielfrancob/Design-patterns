import { Cliente } from "../cliente/cliente";
import { Veiculo } from "../veiculo/veiculo";

export interface CriarVeiculoCliente {
  criarCliente(nomeClinte: string): Cliente;
  criarVeiculo(nomeCarro: string, nomeCliente: string): Veiculo;
}
