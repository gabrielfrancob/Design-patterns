import { Usuario } from "../Classes/Usuario";
import { UsuarioHandler } from "../Handler/UsuarioHandler";

export class UsuarioLogadoHandler extends UsuarioHandler {

  handle(): Usuario {
      if(this.usuario.senha === 123){
        console.log("Usuario logado")
        return super.handle("Logado")
      }
      return this.usuario
  }
}
