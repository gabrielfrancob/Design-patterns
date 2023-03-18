interface Observable {
  subscribe(...observers: Observer[]): void;
  unsubscribe(observer: Observer): void;
  update(): void;
}

interface Observer {
  update(...args: unknown[]): void;
}

//Concrete Observable
class InputObservable implements Observable {
  private inputDependents: Observer[] = [];

  constructor(public element: HTMLInputElement) {}

  subscribe(...observers: Observer[]): void {
    observers.forEach((observer) => {
      if (!this.inputDependents.includes(observer))
        this.inputDependents.push(observer);
    });
  }
  unsubscribe(observer: Observer): void {
    const observerIndex = this.inputDependents.indexOf(observer);

    if (observerIndex != -1) {
      this.inputDependents.splice(observerIndex, 1);
    }
  }
  update(): void {
    this.inputDependents.forEach((observer) => observer.update(this));
  }
}

// Concrete Observer
class ParagrafoObservable implements Observer {
  constructor(public element: HTMLParagraphElement) {}

  update(observable: InputObservable): void {
    if (observable instanceof InputObservable) {
      this.element.innerText = observable.element.value;
    }
  }
}

function criarInput(): HTMLInputElement {
  const input = document.createElement("input");
  document.body.appendChild(input);
  return input;
}

function criarParagrafo(): HTMLParagraphElement {
  const p = document.createElement("p");
  document.body.appendChild(p);
  p.innerText = "Hardcoded";
  return p;
}

const input = new InputObservable(criarInput());
const p1 = new ParagrafoObservable(criarParagrafo());

input.subscribe(p1);

input.element.addEventListener("keyup", () => {
  input.update();
});
