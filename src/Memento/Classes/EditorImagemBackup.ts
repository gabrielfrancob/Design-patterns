import { Memento } from "../Interface/Memento";
import { EditorImagem } from "./EditorImagem";

export class EditorImagemBackup {
  private mementos: Memento[] = [];

  constructor(private readonly editorImagem: EditorImagem) {}

  backup(): void {
    console.log(`[Backup] Salvando o estado do Editor de imagem `);
    this.mementos.push(this.editorImagem.salvar());
  }

  desfazer(): void {
    const memento = this.mementos.pop();

    if (!memento) {
      console.log("[Backup] Sem mementos");
      return;
    }

    this.editorImagem.resturar(memento);
    console.log(`[Backup] ${memento.getNome()} foi restaurado com sucesso`);
  }

  mostrarMementos(): void {
    for (let memento of this.mementos) {
      console.log(memento);
    }
  }
}
