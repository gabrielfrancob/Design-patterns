import { IPedidoCompraState } from "./IPedidoCompraState";
import { PedidoCompra } from "./PedidoCompra";
import { PedidoPendente } from "./PedidoPendente";
import { PedidoRejeitado } from "./PedidoRejeitado";

export class PedidoAprovado implements IPedidoCompraState {
  private nome: string = "Pedido aprovado";

  constructor(private pedido: PedidoCompra) {}

  getNome(): string {
    return this.nome;
  }

  aprovarPagamento(): void {
    console.log("Pagamento já se encontra no estado aprovado");
  }
  rejeitarPagamento(): void {
    this.pedido.setState(new PedidoRejeitado(this.pedido));
  }
  aguardandoPagamento(): void {
    this.pedido.setState(new PedidoPendente(this.pedido));
  }
  enviarProduto(): void {
    console.log("Enviado produto para o cliente...")
  }
}
