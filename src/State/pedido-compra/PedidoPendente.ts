import { IPedidoCompraState } from "./IPedidoCompraState";
import { PedidoAprovado } from "./PedidoAprovado";
import { PedidoCompra } from "./PedidoCompra";
import { PedidoRejeitado} from "./PedidoRejeitado";

export class PedidoPendente implements IPedidoCompraState {
  private name = "Pedido pendente";

  constructor(private pedido: PedidoCompra) {}

  getNome(): string {
    return this.name;
  }
  aprovarPagamento(): void {
    this.pedido.setState(new PedidoAprovado(this.pedido));
  }
  rejeitarPagamento(): void {
    this.pedido.setState(new PedidoRejeitado(this.pedido));
  }
  aguardandoPagamento(): void {
    console.log("Pedido já se encontra no estado pagamento pendente");
  }
  enviarProduto(): void {
    console.log("Aguardando pagamento para envio...")
  }
}
