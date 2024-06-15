import { NegociacaoController } from "./controllers/negociacao-controller.js";
const negociacao = new NegociacaoController();
const form = document.querySelector('.form');
if (form) {
    form.addEventListener('submit', event => {
        event.preventDefault();
        negociacao.adiciona();
    });
}
else {
    throw Error('Não foi possivel inicializar a aplicação. Verifique se o formulário ta de cutcharraz');
}
const botaoImporta = document.querySelector('#botao-importa');
if (botaoImporta) {
    botaoImporta.addEventListener('click', () => {
        negociacao.importaDados();
    });
}
else {
    throw Error('Botão importar não encontrado.');
}
