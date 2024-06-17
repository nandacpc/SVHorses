function mudarImagem(nomeArquivo) {
    document.getElementById('horsebig').src = `img/${nomeArquivo}`;
    document.getElementById('horse').src = `img/${nomeArquivo}`;
    // Não esconde a sela ou o overlay quando muda o cavalo
}

function mudarSela(nomeSela) {
    var sela = document.getElementById('saddle');
    sela.src = `img/${nomeSela}`;
    sela.style.display = 'block'; // Garante que a sela é mostrada

    var selabig = document.getElementById('saddlebig');
    selabig.src = `img/${nomeSela}`;
    selabig.style.display = 'block';
}

function togglePrismaticOverlay() {
    var overlay = document.getElementById('prismaticOverlay');
    if (document.getElementById('prismaticCheckbox').checked) {
        overlay.style.display = 'block'; // Mostra o overlay
    } else {
        overlay.style.display = 'none'; // Esconde o overlay
    }

    var overlaybig = document.getElementById('prismaticOverlaybig');
    if (document.getElementById('prismaticCheckbox').checked) {
        overlaybig.style.display = 'block'; // Mostra o overlay
    } else {
        overlaybig.style.display = 'none'; // Esconde o overlay
    }
}

function salvarImagem() {
    // Seleciona o contêiner de captura
    var captureContainer = document.querySelector(".capture");
    
    // Garante que a opacity é ajustada apenas durante a captura
    captureContainer.style.opacity = 1; // Torna o contêiner visível apenas para captura

    html2canvas(captureContainer, {
        scale: 1,
        width: 224,  // Largura desejada para captura
        height: 128, // Altura desejada para captura
        onclone: function(clonedDocument) {
            // Ajusta a opacity no documento clonado
            var clonedContainer = clonedDocument.querySelector(".capture");
            clonedContainer.style.opacity = 1;
        }
    }).then(canvas => {
        // Cria um link para download da imagem
        var link = document.createElement('a');
        link.download = 'cavalo_personalizado.png';
        link.href = canvas.toDataURL('image/png');
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);

        // Restaura a opacity original após a captura
        captureContainer.style.opacity = 0;
    }).catch(error => {
        console.error('Erro ao salvar a imagem:', error);
        alert('Erro ao salvar a imagem. Verifique o console para mais detalhes.');
    });
}
