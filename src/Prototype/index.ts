import { Circulo } from "./Circulo";
import { Formato } from "./Formato";
import { Retangulo } from "./Retangulo";

const formatos: Formato[] = [];

const circulo = new Circulo(10);
const retangulo = new Retangulo(10, 20);

const circuloClone = circulo.clone();
const retanguloClone = retangulo.clone();

formatos.push(circuloClone, retanguloClone);

formatos.forEach(x => console.log(x))