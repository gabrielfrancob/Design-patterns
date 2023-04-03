import { UsuarioProxy } from "./UsuariosSistema/UsuarioProxy";

// Proxy virtual

async function codigoIndex(): Promise<void> {
  const usuario = new UsuarioProxy("Gabriel", "gabrielF");
  console.log("Levará 3 segundos...");
  console.log(await usuario.getEnderecos());

  console.log("A partir daqui, não haverá demora");
  for (let i = 0; i < 5; i++) {
    console.log(await usuario.getEnderecos());
  }
}

codigoIndex();
