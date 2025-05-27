import { conectaApi } from "./conectaApi.js"; // importando a classe em si
import constroiCard from "./mostrarVideos.js"; // importando uma função especifica

async function buscaVideo(evento) { 
    
    evento.preventDefault();

    const dadosDePesquisa = document.querySelector("[data-pesquisa]").value;
    const busca = await conectaApi.buscaVideo(dadosDePesquisa);
    const lista = document.querySelector("[data-lista]");
    
    while (lista.firstChild) {
        lista.removeChild(lista.firstChild);
    }

    try {
        // const listaApi = await conectaApi.buscaVideo(busca);
        busca.forEach(elemento => lista.appendChild(
            constroiCard(elemento.titulo, elemento.descricao, elemento.url, elemento.imagem)));
    } catch (erro) {
        console.error("Erro ao buscar vídeos:", erro);
        alert("Ocorreu um erro ao buscar os vídeos. Tente novamente.");
    }
}

const botaoDePesquisa = document.querySelector("[data-botao-pesquisa]");
botaoDePesquisa.addEventListener("click", evento => buscaVideo(evento));