import { conectaApi } from './conectaApi.js';

const formulario = document.querySelector('[data-formulario]');

async function criarVideo(evento) {
    // previne o comportamento padrão do submit que é recarregar a página
    evento.preventDefault();

    // o value pega o valor do input que o usuario preencheu
    const imagem = document.querySelector('[data-imagem]').value;
    const url = document.querySelector('[data-url]').value;
    const titulo = document.querySelector('[data-titulo]').value;
    const descricao = Math.floor(Math.random() * 10).toString();

    await conectaApi.criaVideo(titulo, descricao, url, imagem)
        .then(() => {
            window.location.href = '../pages/envio-concluido.html';
        })
        .catch(erro => {
            console.log(erro);
            alert('Ocorreu um erro ao criar o vídeo. Tente novamente.');
        });
}

formulario.addEventListener('submit', (evento) => criarVideo(evento));