import { Mediator } from "../Interface/Mediator";
import { Component } from "./Component";

export class Button extends Component {
  constructor(mediator: Mediator) {
    super(mediator);
  }

  public click(): void {
    console.log("Clique no botão");
    this.mediator.notify(this, "click");
  }
}
