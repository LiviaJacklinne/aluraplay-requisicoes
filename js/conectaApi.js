async function listaVideos() { 
    const conexao = await fetch("http://localhost:3000/videos");
    // console.log(conexao); // retorna o objeto inteiro

    const conexaoConvertida = await conexao.json();
    // console.log(conexaoConvertida); // mostra o conteúdo dentro do objeto

    return conexaoConvertida;
}

async function criaVideo(titulo, descricao, url, imagem) {
    const conexao = await fetch("http://localhost:3000/videos", {
        method: "POST",
        headers: {
            "Content-type": "application/json"
        },
        body: JSON.stringify({
            titulo: titulo,
            descricao: `${descricao} mil visualizações`,
            url: url,
            imagem: imagem
        })
    });
    if (!conexao.ok) {
        throw new Error("Não foi possível enviar o vídeo");
    }

    const conexaoConvertida = await conexao.json();
    return conexaoConvertida;
}

async function buscaVideo(busca) {
    const conexao = await fetch(`http://localhost:3000/videos?q=${busca}`);
    const conexaoConvertida = await conexao.json();
    return conexaoConvertida;
}

export const conectaApi = {
    listaVideos,
    criaVideo,
    buscaVideo
}