//Concrete Observable
var InputObservable = /** @class */ (function () {
    function InputObservable(element) {
        this.element = element;
        this.inputDependents = [];
    }
    InputObservable.prototype.subscribe = function () {
        var _this = this;
        var observers = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            observers[_i] = arguments[_i];
        }
        observers.forEach(function (observer) {
            if (!_this.inputDependents.includes(observer))
                _this.inputDependents.push(observer);
        });
    };
    InputObservable.prototype.unsubscribe = function (observer) {
        var observerIndex = this.inputDependents.indexOf(observer);
        if (observerIndex != -1) {
            this.inputDependents.splice(observerIndex, 1);
        }
    };
    InputObservable.prototype.update = function () {
        var _this = this;
        this.inputDependents.forEach(function (observer) { return observer.update(_this); });
    };
    return InputObservable;
}());
// Concrete Observer
var ParagrafoObservable = /** @class */ (function () {
    function ParagrafoObservable(element) {
        this.element = element;
    }
    ParagrafoObservable.prototype.update = function (observable) {
        if (observable instanceof InputObservable) {
            this.element.innerText = observable.element.value;
        }
    };
    return ParagrafoObservable;
}());
function criarInput() {
    var input = document.createElement("input");
    document.body.appendChild(input);
    return input;
}
function criarParagrafo() {
    var p = document.createElement("p");
    document.body.appendChild(p);
    p.innerText = "Hardcoded";
    return p;
}
var input = new InputObservable(criarInput());
var p1 = new ParagrafoObservable(criarParagrafo());
input.subscribe(p1);
input.element.addEventListener("keyup", function () {
    input.update();
});
