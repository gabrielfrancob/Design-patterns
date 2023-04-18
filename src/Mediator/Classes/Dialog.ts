import { Mediator } from "../Interface/Mediator";
import { Button } from "./Button";
import { Input } from "./Input";

export class Dialog implements Mediator {
  public button: Button;
  public input: Input;

  constructor() {
    this.button = new Button(this);
    this.input = new Input(this);
  }

  notify(sender: object, event: string): void {
    if (sender === this.button && event === "click") {
      console.log("Clicando no botão no diálogo");
      this.input.click();
    } else if (sender === this.input && event === "click") {
      console.log("Clicando no input no diálogo");
    } else if (sender === this.input && event === "keypress") {
      console.log("Tecla pressionada no dialog");
    }
  }

  public open(): void {
    console.log("Diálogo aberto");
  }

}
