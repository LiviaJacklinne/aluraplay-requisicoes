async function listaVideos() { 
    const conexao = await fetch("http://localhost:3000/videos");
    // console.log(conexao); // retorna o objeto inteiro

    const conexaoConvertida = await conexao.json();
    // console.log(conexaoConvertida); // mostra o conteúdo dentro do objeto

    return conexaoConvertida;
}

export const conectaApi = {
    listaVideos
}