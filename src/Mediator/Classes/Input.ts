import { Mediator } from "../Interface/Mediator";
import { Component } from "./Component";

export class Input extends Component {
  constructor(mediator: Mediator) {
    super(mediator);
  }

  public keypress(): void {
    console.log("Tecla pressionada no input");
    this.mediator.notify(this, "keypress");
  }
}
