export class RetanguloIncompativel {
  constructor(
    public xA: number,
    public xB: number,
    public yA: number,
    public yB: number
  ) {}

  desenhar(): void{
    console.log(`Retangulo incompativel: ${this.xA}, ${this.yA}, ${this.xB}, ${this.yB}`)
  }
}
