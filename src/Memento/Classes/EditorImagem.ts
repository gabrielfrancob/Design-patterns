import { Memento } from "../Interface/Memento";
import { ConcreteMemento } from "./ConcreteMemento";

export class EditorImagem {
  constructor(private caminho: string, private formato: string) {}

  converterPara(formato: string) {
    this.formato = formato;
    this.caminho = this.caminho.split(".").slice(0, -1).join("");
    this.caminho = "." + formato;
  }

  salvar(): Readonly<Memento> {
    const data = new Date();

    return new ConcreteMemento(
      data.toISOString(),
      data,
      this.caminho,
      this.formato
    );
  }

  resturar(memento: Memento): void {
    const concreteMemento = memento as ConcreteMemento;
    this.caminho = concreteMemento.getCaminho();
    this.formato = concreteMemento.getFormato();
  }
}
