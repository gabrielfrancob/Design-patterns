import { Retangulo } from "./Retangulo";
import { RetanguloIncompativel } from "./RetanguloIncompativel";

export class RetanguloAdapter implements Retangulo {
  constructor(private retanguloIncompativel: RetanguloIncompativel) {}

  public desenhar(x: number, y: number, altura: number, largura: number): void {
    const xA = x;
    const xB = x + largura;
    const yA = y;
    const yB = y + altura;
    this.retanguloIncompativel.xA = xA;
    this.retanguloIncompativel.xB = xB;
    this.retanguloIncompativel.yA = yA;
    this.retanguloIncompativel.yB = yB;
    this.retanguloIncompativel.desenhar();
  }
}
