import { IPedido } from "../Interfaces/IPedido";

export class AbstractAlimento implements IPedido {
  constructor(
    private tipoAlimento: string,
    private nome: string,
    private preco: number
  ) {}

  getPreco(): number {
    return this.preco;
  }


}
