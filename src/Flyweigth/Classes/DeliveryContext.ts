import { FactoryDelivery } from "./FactoryDelivery";

export const deliveryContext = function (
  factory: FactoryDelivery,
  nome: string,
  numero: string,
  rua: string,
  cidade: string
): void {
  const localidade = factory.criarLocalizacao({ rua, cidade });
  localidade.entrega(nome, numero);
};
