export interface IProdutoECommerce {
  nome: string;
  preco: number;
}

export class CarrinhoECommerce {
  private produtos: IProdutoECommerce[] = [];
  private descontoStrategy: DescontoStrategy = new DescontoStrategy();
  AdicionarProduto(...produtos: IProdutoECommerce[]): void {
    produtos.forEach((produto) => this.produtos.push(produto));
  }

  getProdutos(): IProdutoECommerce[] {
    return this.produtos;
  }

  getTotal(): number {
    return this.produtos.reduce((soma, produto) => soma + produto.preco, 0);
  }

  getTotalComDesconto(): number {
    return this.descontoStrategy.getDiscount(this);
  }
}

export class DescontoStrategy {
  protected desconto: number = 0;

  getDiscount(carrinho: CarrinhoECommerce): number {
    return carrinho.getTotal();
  }
}

export class DescontoPadrao extends DescontoStrategy {
  protected desconto: number = 0;

  getDiscount(carrinho: CarrinhoECommerce): number {
    const total = carrinho.getTotal();

    if (total >= 100 && total < 200) {
      this.desconto = 10;
    } else if (total >= 200 && total < 300) {
      this.desconto = 20;
    } else if (total >= 300) {
      this.desconto = 30;
    }

    return total - total * (this.desconto / 100);
  }
}

const carrinhoDeCompras = new CarrinhoECommerce();
carrinhoDeCompras.AdicionarProduto({ nome: "Produto 1", preco: 50 });
carrinhoDeCompras.AdicionarProduto({ nome: "Produto 2", preco: 50 });
console.log(carrinhoDeCompras.getTotal());
console.log(carrinhoDeCompras.getTotalComDesconto());
