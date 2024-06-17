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

function salvarImagem() {
        alert('Erro ao salvar a imagem. Verifique o console para mais detalhes.');
}



