import { Cliente } from "./cliente";

export class ClienteEmpresa implements Cliente {
  constructor(public nome: string) {}
}
