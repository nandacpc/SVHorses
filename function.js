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
    var images = document.querySelector(".capture").getElementsByTagName('img');
    var loaded = 0;
    for (let i = 0; i < images.length; i++) {
        if (images[i].complete && images[i].naturalHeight !== 0) {
            loaded++;
        } else {
            images[i].onload = () => {
                loaded++;
                if (loaded === images.length) {
                    captureImage();
                }
            };
            images[i].onerror = () => {
                alert("Erro ao carregar uma das imagens.");
            };
        }
    }
    if (loaded === images.length) {
        captureImage();
    }
}

function captureImage() {
    html2canvas(document.querySelector(".capture"), {
        scale: 1,
        width: 224,
        height: 128
    }).then(canvas => {
        var link = document.createElement('a');
        link.download = 'cavalo_personalizado.png';
        link.href = canvas.toDataURL('image/png');
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    }).catch(error => {
        console.error('Erro ao salvar a imagem:', error);
        alert('Erro ao salvar a imagem. Verifique o console para mais detalhes.');
    });
}