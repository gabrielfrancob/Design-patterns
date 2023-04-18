import { Mediator } from "../Interface/Mediator";

export class Component {
  constructor(protected mediator: Mediator) {}

  public click(): void {
    console.log("Clicado no componente!");
    this.mediator.notify(this, "click");
  }
}
