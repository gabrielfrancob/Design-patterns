import { AlimentoBuilder } from "./Classes/AlimentoBuilder";

const alimentoBuilder = new AlimentoBuilder();

// Cria os alimentos e armazena
alimentoBuilder.criarRefeicao();

// Retorna o objeto com os alimentos cadastrados
console.log(alimentoBuilder.getRefeicao());

// Retorna o preço total do pedido
console.log(alimentoBuilder.getPreco());
