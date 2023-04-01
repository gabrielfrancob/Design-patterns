import { ControleRemoto } from "./controleRemoto";

export class ControleRemotoDeVolume extends ControleRemoto {

  aumentarVolume(): void {
    const volumeAtual = this.dispositivo.getVolume();
    this.dispositivo.setVolume(this.dispositivo.getVolume() + 5);

    console.log(
      `${this.dispositivo.getNome()} tinha o volume ${volumeAtual}, agora tem ${this.dispositivo.getVolume()}`
    );
  }
  
  diminuirVolume(): void {
    const volumeAtual = this.dispositivo.getVolume();
    this.dispositivo.setVolume(this.dispositivo.getVolume() + 5);
    console.log(
      `${this.dispositivo.getVolume()} tinha o volume ${volumeAtual}, agora tem ${this.dispositivo.getVolume()}`
    );
  }
}
