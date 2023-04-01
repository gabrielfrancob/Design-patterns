import { ControleRemoto } from "./ControleRemoto/controleRemoto";
import { ControleRemotoDeVolume } from "./ControleRemoto/controleRemotoDeVolume";
import { Radio } from "./Dispositivo/radio";
import { Televisao } from "./Dispositivo/televisao";

function handle(abstracao: ControleRemoto | ControleRemotoDeVolume): void {
  abstracao.toggleLigado();
  abstracao.toggleLigado();

  if (!("aumentarVolume" in abstracao)) return;

  abstracao.aumentarVolume();
  abstracao.aumentarVolume();
  abstracao.aumentarVolume();
}

const tv = new Televisao();
const raido = new Radio();
const controleRemotoRadio = new ControleRemotoDeVolume(raido);
handle(controleRemotoRadio);
