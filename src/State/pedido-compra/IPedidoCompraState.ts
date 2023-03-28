export interface IPedidoCompraState {
  getNome(): string;

  aprovarPagamento(): void;
  rejeitarPagamento(): void;
  aguardandoPagamento(): void;
  enviarProduto(): void;
}
