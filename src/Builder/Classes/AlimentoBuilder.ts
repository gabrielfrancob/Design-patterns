import { IRefeicaoBuilder } from "../Builder/IRefeicaoBuilder";
import { AbstractAlimento } from "./AbstractAlimento";
import { Pedido } from "./Pedido";

export class AlimentoBuilder implements IRefeicaoBuilder {
  private refeicao: Pedido = new Pedido();

  reset(): this {
    this.refeicao = new Pedido();
    return this;
  }

  criarRefeicao(): this {
    // Mockado
    const arroz = new AbstractAlimento("Comida", "Arroz", 10);
    const feijao = new AbstractAlimento("Comida", "Feijão", 6);
    const carne = new AbstractAlimento("Comida", "Carne", 26);
    this.refeicao.adicionar(arroz, feijao, carne);
    return this;
  }

  getPreco(): number {
    return this.refeicao.getPreco();
  }

  getRefeicao(): Pedido {
    return this.refeicao;
  }

}
