import { IUsuarioEndereco } from "./IUsuarioEndereco";

export interface IUsuario {
  nome: string;
  userName: string;

  getEnderecos(): Promise<IUsuarioEndereco[]>;
}
