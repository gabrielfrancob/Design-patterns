import { Grupo } from "./Composite/Grupo";
import { Circulo } from "./Leafs/Circulo";
import { Retangulo } from "./Leafs/Retangulo";

const circulo1 = new Circulo(3, 5, 10);
const circulo2 = new Circulo(5, 9, 4);
const retangulo1 = new Retangulo(2, 2, 10, 20);
const retangulo2 = new Retangulo(6, 1, 5, 2);

const grupoFormas = new Grupo();
grupoFormas.adicionarForma(circulo1, retangulo1, circulo2, retangulo2);

// grupoFormas.desenhar();

const c3 = new Circulo(1, 2, 5);
const novoGrupoFormas = new Grupo();
novoGrupoFormas.adicionarForma(c3);
grupoFormas.adicionarForma(novoGrupoFormas);

console.log(grupoFormas);
grupoFormas.desenhar();
