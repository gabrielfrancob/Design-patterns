import { FlyweightDelivery } from "../Interfaces/FlyweightDelivery";
import {
  DadosLocalizacaoDelivery,
  DicionarioDeliveryLocalidade,
} from "../Types/tiposDelivery";
import { LocalidadeDelivery } from "./LocalidadeDelivery";

export class FactoryDelivery {
  private localidades: DicionarioDeliveryLocalidade = {};

  private criarId(dado: DadosLocalizacaoDelivery): string {
    return Object.values(dado)
      .map((item: string) => item.replace(/\s+/, "").toLowerCase())
      .join("_");
  }

  criarLocalizacao(
    estadoCompartilhado: DadosLocalizacaoDelivery
  ): FlyweightDelivery {
    const id = this.criarId(estadoCompartilhado).toLowerCase();

    if (id in this.localidades) return this.localidades[id];

    this.localidades[id] = new LocalidadeDelivery(estadoCompartilhado);

    return this.localidades[id];
  }

  getLocalidades(): DicionarioDeliveryLocalidade {
    return this.localidades;
  }
}
