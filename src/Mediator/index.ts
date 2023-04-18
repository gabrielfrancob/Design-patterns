import { Dialog } from "./Classes/Dialog";

const dialog = new Dialog();

dialog.open();

dialog.notify(dialog.button, "click");
dialog.notify(dialog.input, "click");
