import { Cliente } from "../cliente/cliente";
import { ClienteIndividual } from "../cliente/cliente-individual";
import { CarroIndividual } from "../veiculo/carro-individual";
import { Veiculo } from "../veiculo/veiculo";

export class CriarVeiculoClienteIndividual {
  criarCliente(nomeCliente: string): Cliente {
    return new ClienteIndividual(nomeCliente);
  }
  criarVeiculo(nomeCarro: string, nomeCliente: string): Veiculo {
    const cliente = this.criarCliente(nomeCliente);
    return new CarroIndividual(nomeCarro, cliente);
  }
}
