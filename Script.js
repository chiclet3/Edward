document.addEventListener('DOMContentLoaded', () => {
    // Efeito de máquina de escrever no subtítulo
    const subtituloElement = document.querySelector('.subtitulo');
    const textoCompleto = subtituloElement.textContent;
    subtituloElement.textContent = '';
    
    let i = 0;
    const velocidade = 75;

    function typeWriter() {
        if (i < textoCompleto.length) {
            subtituloElement.textContent += textoCompleto.charAt(i);
            i++;
            setTimeout(typeWriter, velocidade);
        }
    }

    typeWriter();

    // Animação da imagem ao passar o mouse
    const imagem = document.querySelector('.intro-image');
    imagem.addEventListener('mouseenter', () => {
        imagem.style.transform = 'scale(1.05) rotate(2deg)';
    });
    imagem.addEventListener('mouseleave', () => {
        imagem.style.transform = 'scale(1) rotate(0deg)';
    });
});

