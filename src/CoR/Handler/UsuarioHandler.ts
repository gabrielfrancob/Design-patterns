import { Usuario } from "../Classes/Usuario";

export abstract class UsuarioHandler {
  protected proximo: UsuarioHandler | null = null;

  constructor(protected usuario: Usuario) {}

  proximoHandler(_proximo: UsuarioHandler): UsuarioHandler {
    this.proximo = _proximo;
    return _proximo;
  }

  handle(resp?: string): Usuario {
    if (this.proximo) return this.proximo.handle(resp);
    return this.usuario;
  }
}
