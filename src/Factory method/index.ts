import { CarroFactory } from "./factories/carro-factory";

const carroFactory = new CarroFactory();

const fusca = carroFactory.getVeiculo("Fusca");

fusca.transportar("Gabriel");
fusca.parar();
