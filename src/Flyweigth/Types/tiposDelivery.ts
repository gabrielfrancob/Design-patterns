import { LocalidadeDelivery } from "../Classes/LocalidadeDelivery";

export type DadosLocalizacaoDelivery = {
  readonly rua: string;
  readonly cidade: string;
};

export type DicionarioDeliveryLocalidade = { [k: string]: LocalidadeDelivery };
