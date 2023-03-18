import { Cliente } from "./cliente";

export class ClienteIndividual implements Cliente {
  constructor(public nome: string) {}
}
