import { Usuario } from "./Classes/Usuario";
import { UsuarioAdminHandler } from "./ConcreteHandlers/UsuarioAdminHandler";
import { UsuarioLogadoHandler } from "./ConcreteHandlers/UsuarioLogadoHandler";

const usuario = new Usuario("Gabriel", 21, 1123, false);
const handler = new UsuarioLogadoHandler(usuario);
handler.proximoHandler(new UsuarioAdminHandler(usuario))
handler.handle()

