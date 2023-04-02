import { IPedido } from "../Interfaces/IPedido";

export class Pedido implements IPedido {
  private readonly children: IPedido[] = [];


  getPreco(): number {
    return this.children.reduce(
      (soma, alimento) => soma + alimento.getPreco(),
      0
    );
  }

  adicionar(...comidas: IPedido[]): void {
    comidas.forEach((comida) => {
      this.children.push(comida);
    });
  }


}
