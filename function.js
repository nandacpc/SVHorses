var coll = document.getElementsByClassName("collapsible");
var i;

for (i = 0; i < coll.length; i++) {
  coll[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var content = this.nextElementSibling;
    if (content.style.display === "block") {
      content.style.display = "none";
    } else {
      content.style.display = "block";
    }
  });
}

function mudarImagem(nomeArquivo) {
    // Atualizar a imagem do cavalo
    document.getElementById('horsebig').src = `img/${nomeArquivo}`;
    document.getElementById('horse').src = `img/${nomeArquivo}`;

    // Remover a classe 'active-link' de todos os links
    document.querySelectorAll('.menu-link').forEach(function(link) {
        link.classList.remove('active-link');
    });

    // Adicionar a classe 'active-link' ao link clicado
    // 'this' refere-se ao elemento que disparou o evento, que é o <a> clicado
    event.currentTarget.classList.add('active-link');
}

function mudarSela(nomeSela) {
    var sela = document.getElementById('saddle');
    sela.src = `img/${nomeSela}`;
    sela.style.display = 'block'; // Garante que a sela é mostrada

    var selabig = document.getElementById('saddlebig');
    selabig.src = `img/${nomeSela}`;
    selabig.style.display = 'block';

    document.querySelectorAll('.menu-link').forEach(function(link) {
        link.classList.remove('active-link');
    });

    // Adicionar a classe 'active-link' ao link clicado
    // 'this' refere-se ao elemento que disparou o evento, que é o <a> clicado
    event.currentTarget.classList.add('active-link');
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
