import { RetanguloAdapter } from "./RetanguloAdapter";
import { RetanguloIncompativel } from "./RetanguloIncompativel";

const retanguloIncompativel = new RetanguloIncompativel(5, 10, 15, 20);
const retanguloAdapter = new RetanguloAdapter(retanguloIncompativel);
retanguloAdapter.desenhar(25, 30, 35, 40);
