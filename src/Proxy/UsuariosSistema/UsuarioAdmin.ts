import { IUsuario } from "./IUsuario";
import { IUsuarioEndereco } from "./IUsuarioEndereco";

export class UsuarioAdmin implements IUsuario {
  public nome: string;
  public userName: string;

  constructor(nome: string, userName: string) {
    this.nome = nome;
    this.userName = userName;
  }

  async getEnderecos(): Promise<IUsuarioEndereco[]> {
    return new Promise((resolve) => {
      return setTimeout(
        () =>
          resolve([
            {
              rua: "General Canabarro",
              numero: 485,
            },
            {
              rua: "Av. Maracanã",
              numero: 229,
            },
          ]),
        3000
      );
    });
  }
}
