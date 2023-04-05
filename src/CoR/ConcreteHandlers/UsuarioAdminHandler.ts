import { Usuario } from "../Classes/Usuario";
import { UsuarioHandler } from "../Handler/UsuarioHandler";

export class UsuarioAdminHandler extends UsuarioHandler {
  handle(): Usuario {
    if (this.usuario.isAdmin()) {
      console.log("Usuário administrador");
      return super.handle("Admin");
    }
    return this.usuario;
  }
}
