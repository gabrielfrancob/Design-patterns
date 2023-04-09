import { EditorImagem } from "./Classes/EditorImagem";
import { EditorImagemBackup } from "./Classes/EditorImagemBackup";

const editorImg = new EditorImagem("/exemplo/imagem.png", "png");
const gerenciadorBackup = new EditorImagemBackup(editorImg);

gerenciadorBackup.backup();
editorImg.converterPara("gif");

gerenciadorBackup.backup();
editorImg.converterPara("bmp");

gerenciadorBackup.backup();
editorImg.converterPara("jpg");

console.log(editorImg);
gerenciadorBackup.desfazer();
console.log(editorImg);
