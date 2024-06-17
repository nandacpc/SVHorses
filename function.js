function mudarImagem(nomeArquivo) {
    document.getElementById('horse').src = `img/${nomeArquivo}`;
    // Não esconde a sela ou o overlay quando muda o cavalo
}

function mudarSela(nomeSela) {
    var sela = document.getElementById('saddle');
    sela.src = `img/${nomeSela}`;
    sela.style.display = 'block'; // Garante que a sela é mostrada
}

function togglePrismaticOverlay() {
    var overlay = document.getElementById('prismaticOverlay');
    if (document.getElementById('prismaticCheckbox').checked) {
        overlay.style.display = 'block'; // Mostra o overlay
    } else {
        overlay.style.display = 'none'; // Esconde o overlay
    }
}

function gerarImagem() {
    html2canvas(document.querySelector(".horse-image-container"), {scale: 1}).then(canvas => {
        var imgElement = document.getElementById('imagemVisualizacao');
        imgElement.src = canvas.toDataURL('image/png');
        document.getElementById('imagemResultante').style.display = 'block'; // Mostra o contêiner com a imagem
    }).catch(error => {
        console.error('Erro ao gerar a imagem:', error);
        alert('Erro ao gerar a imagem. Por favor, verifique o console para mais detalhes.');
    });
}


