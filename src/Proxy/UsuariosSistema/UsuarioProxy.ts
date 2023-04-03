import { IUsuario } from "./IUsuario";
import { IUsuarioEndereco } from "./IUsuarioEndereco";
import { UsuarioAdmin } from "./UsuarioAdmin";

export class UsuarioProxy implements IUsuario {
  private usuario: IUsuario | null = null;
  private enderecoUsuario: IUsuarioEndereco[] | null = null;

  constructor(public nome: string, public userName: string) {}

  private criarUsuario(): IUsuario {
    if (this.usuario === null) {
      this.usuario = new UsuarioAdmin(this.nome, this.userName);
    }
    return this.usuario;
  }

  async getEnderecos(): Promise<IUsuarioEndereco[]> {
    this.usuario = this.criarUsuario();

    if (this.enderecoUsuario === null) {
      this.enderecoUsuario = await this.usuario.getEnderecos();
    }

    return this.enderecoUsuario;
  }
}
