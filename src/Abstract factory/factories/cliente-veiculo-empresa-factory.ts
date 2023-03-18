import { Cliente } from "../cliente/cliente";
import { ClienteEmpresa } from "../cliente/cliente-empresa";
import { CarroEmpresa } from "../veiculo/carro-empresa";
import { Veiculo } from "../veiculo/veiculo";

export class CriarVeiculoClienteEmpresa {
  criarCliente(nomeClinte: string): Cliente {
    return new ClienteEmpresa(nomeClinte);
  }
  criarVeiculo(nomeCarro: string, nomeCliente: string): Veiculo {
    const cliente = this.criarCliente(nomeCliente);
    return new CarroEmpresa(nomeCarro, cliente);
  }
}
