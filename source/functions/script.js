// FAQ interativo (harmonizado visual)
document.querySelectorAll('.faq-pergunta').forEach(btn => {
    btn.addEventListener('click', () => {
        const item = btn.parentElement;
        // Fecha outros
        document.querySelectorAll('.faq-item.active').forEach(i => {
            if (i !== item) i.classList.remove('active');
        });
        item.classList.toggle('active');
    });
});



// Menu hamburguer responsivo
const hamburger = document.getElementById('navbar-hamburger');
const mobileMenu = document.getElementById('navbar-mobile-menu');
if (hamburger && mobileMenu) {
    hamburger.addEventListener('click', () => {
        mobileMenu.classList.toggle('open');
    });
    // Fecha o menu ao clicar em um link
    mobileMenu.querySelectorAll('a').forEach(link => {
        link.addEventListener('click', () => {
            mobileMenu.classList.remove('open');
        });
    });
}

document.addEventListener("DOMContentLoaded", () => {
    // Função para abrir/fechar os cards de serviços detalhados
    const cards = document.querySelectorAll(".servico-detalhado-card");
    let activeCard = null;

    cards.forEach(card => {
        card.addEventListener("click", (event) => {
            // Não fazer nada se clicou em um link
            if (event.target.closest('a')) {
                return;
            }

            // Fechar o card ativo se for diferente do clicado
            if (activeCard && activeCard !== card) {
                activeCard.classList.remove("active");
            }

            // Toggle do card clicado
            card.classList.toggle("active");
            
            // Atualizar a referência do card ativo
            activeCard = card.classList.contains("active") ? card : null;
        });
    });
});
const marquee = document.querySelector('.marquee-content');
  let normal = true;
  marquee.addEventListener('click', () => {
    marquee.style.animationDirection = normal ? 'reverse' : 'normal';
    normal = !normal;
  });
// Formulário de lead (simulação de envio)
const leadForm = document.querySelector('.lead-form form');

if (leadForm) {
    leadForm.addEventListener('submit', function(e) {
        e.preventDefault();
        alert('Obrigado! Sua mensagem foi enviada.');
        this.reset();
    });
}

// Formulário de contato para a Reinvente entrar em contato
const contatoFormReinvente = document.querySelector('.contato-form-reinvente');

if (contatoFormReinvente) {
    contatoFormReinvente.addEventListener('submit', function(e) {
        e.preventDefault();
        alert('Recebemos sua solicitação! A Reinvente entrará em contato em breve.');
        this.reset();
    });
}

// Carousel for podcasts
const podcastImages = [
    "source/imgs/podcast 1.jpg",
    "source/imgs/podcast 2.jpg",
    "source/imgs/podcast 3.jpg",
    "source/imgs/podcast 4.jpg"
];
let podcastIndex = 0;
const podcastImg = document.querySelector("#podcast-carousel img");
if (podcastImg) {
    setInterval(() => {
        podcastImg.style.opacity = 0;
        setTimeout(() => {
            podcastIndex = (podcastIndex + 1) % podcastImages.length;
            podcastImg.src = podcastImages[podcastIndex];
            podcastImg.style.opacity = 1;
        }, 500);
    }, 4000);
}

// Carousel for auditorio
const auditorioImages = [
    "source/imgs/estudio 1.jpg",
    "source/imgs/estudio 2.jpg",
    "source/imgs/estudio 3.jpg",
    "source/imgs/estudio 4.jpg"
];
let auditorioIndex = 0;
const auditorioImg = document.querySelector("#auditorio-carousel img");
if (auditorioImg) {
    setInterval(() => {
        auditorioImg.style.opacity = 0;
        setTimeout(() => {
            auditorioIndex = (auditorioIndex + 1) % auditorioImages.length;
            auditorioImg.src = auditorioImages[auditorioIndex];
            auditorioImg.style.opacity = 1;
        }, 500);
    }, 4000);
}
