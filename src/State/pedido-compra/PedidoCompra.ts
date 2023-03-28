import { IPedidoCompraState } from "./IPedidoCompraState";
import { PedidoPendente } from "./PedidoPendente";

export class PedidoCompra {
  private state: IPedidoCompraState = new PedidoPendente(this);

  getState(): IPedidoCompraState {
    return this.state;
  }

  setState(state: IPedidoCompraState): void {
    this.state = state;
    console.log(`O estado do pedido agora é ${this.getNomeState()}`);
  }

  getNomeState(): string {
    return this.state.getNome();
  }

  aprovarPagamento(): void {
    this.state.aprovarPagamento();
  }
  rejeitarPagamento(): void {
    this.state.rejeitarPagamento();
  }
  aguardandoPagamento(): void {
    this.state.aguardandoPagamento();
  }

  enviarPedido(): void {
    this.state.enviarProduto();
  }
}
