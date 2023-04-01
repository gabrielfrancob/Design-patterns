export interface IDispositivo {


  getNome(): string;

  setLigado(isLigado: boolean): void;

  getLigado(): boolean;

  setVolume(volume: number): void;

  getVolume(): number;
}
