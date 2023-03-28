import { PedidoCompra } from "./pedido-compra/PedidoCompra";

const pedido = new PedidoCompra();

pedido.aprovarPagamento(); // Aprovado
pedido.aguardandoPagamento(); // Pendente
pedido.enviarPedido();
pedido.rejeitarPagamento(); // Não se altera mais o estado a partir daqui
pedido.aprovarPagamento();
