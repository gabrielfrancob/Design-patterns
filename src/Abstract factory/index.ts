import { CriarVeiculoClienteEmpresa } from "./factories/cliente-veiculo-empresa-factory";
import { CriarVeiculoClienteIndividual } from "./factories/cliente-veiculo-individual-factory";

const empresaFactory = new CriarVeiculoClienteEmpresa();
const individualFactory = new CriarVeiculoClienteIndividual();

const carro1 = empresaFactory.criarVeiculo("Fusca", "Gabriel");
const carro2 = individualFactory.criarVeiculo("Celta", "Stevan");

carro1.pegar();
carro2.pegar();
