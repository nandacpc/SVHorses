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
    html2canvas(document.querySelector(".horse-image-container")).then(canvas => {
        var link = document.createElement('a');
        link.download = 'cavalo_personalizado.png';
        link.href = canvas.toDataURL('image/png');
        document.body.appendChild(link); // Adiciona o link ao corpo do documento temporariamente
        link.click(); // Simula o clique para iniciar o download
        document.body.removeChild(link); // Remove o link após o download
    }).catch(error => {
        console.error('Erro ao salvar a imagem:', error);
        alert('Erro ao salvar a imagem. Verifique o console para mais detalhes.');
    });
}



