import { FlyweightDelivery } from "../Interfaces/FlyweightDelivery";
import { DadosLocalizacaoDelivery } from "../Types/tiposDelivery";

export class LocalidadeDelivery implements FlyweightDelivery {
  constructor(private readonly estadoCompartilhado: DadosLocalizacaoDelivery) {}

  entrega(nome: string, numero: string): void {
    console.log(`Entrega para ${nome}`);
    console.log(
      `Endereço: ${this.estadoCompartilhado.cidade}, ${this.estadoCompartilhado.rua}`
    );
    console.log(`Número: ${numero}`);
    console.log();
  }
}
