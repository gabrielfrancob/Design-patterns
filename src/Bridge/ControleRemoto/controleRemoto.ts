import { IDispositivo } from "../Dispositivo/dispositivo";

export class ControleRemoto {
  constructor(protected dispositivo: IDispositivo) {}

  toggleLigado(): void {
    this.dispositivo.setLigado(!this.dispositivo.getLigado());
    if (this.dispositivo.getLigado())
      console.log(`${this.dispositivo.getNome()} está ligado`);
    if (!this.dispositivo.getLigado())
      console.log(`${this.dispositivo.getNome()} está desligado`);
  }
}
