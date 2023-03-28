import { IPedidoCompraState } from "./IPedidoCompraState";
import { PedidoAprovado } from "./PedidoAprovado";
import { PedidoCompra } from "./PedidoCompra";
import { PedidoPendente } from "./PedidoPendente";

export class PedidoRejeitado implements IPedidoCompraState {
  private nome: string = "Pedido rejeitado";

  constructor(private pedido: PedidoCompra) {}

  getNome(): string {
    return this.nome;
  }

  aprovarPagamento(): void {
    console.log("Pagamento já se encontra no estado rejeitado");
  }
  rejeitarPagamento(): void {
    console.log("Pagamento já se encontra no estado rejeitado");
  }
  aguardandoPagamento(): void {
    console.log("Pagamento já se encontra no estado rejeitado");
  }
  enviarProduto(): void {
    console.log("O pagamento foi rejeitado...");
  }
}
