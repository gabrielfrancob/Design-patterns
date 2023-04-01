import { IDispositivo } from "./dispositivo";

export class Televisao implements IDispositivo {
  private volume: number = 0;
  private isLigado: boolean = false;
  private nome = "Televisão";

  setLigado(_isLigado: boolean): void {
    this.isLigado = _isLigado;
  }

  getLigado(): boolean {
    return this.isLigado;
  }

  getNome(): string {
    return this.nome;
  }

  setVolume(_volume: number): void {
    if (_volume < 0) return;
    if (_volume > 100) return;
    this.volume = _volume;
  }

  getVolume(): number {
    return this.volume;
  }
}
