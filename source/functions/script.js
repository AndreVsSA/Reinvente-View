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

    const closeCard = (card) => {
        card.classList.remove("active");
        card.setAttribute("aria-expanded", "false");
    };

    const toggleCard = (card) => {
        if (activeCard && activeCard !== card) {
            closeCard(activeCard);
        }

        const shouldOpen = !card.classList.contains("active");
        card.classList.toggle("active", shouldOpen);
        card.setAttribute("aria-expanded", shouldOpen ? "true" : "false");
        activeCard = shouldOpen ? card : null;
    };

    cards.forEach(card => {
        card.addEventListener("click", (event) => {
            // Não fazer nada se clicou em um link
            if (event.target.closest('a')) {
                return;
            }
            toggleCard(card);
        });

        card.addEventListener("keydown", (event) => {
            if (event.key === "Enter" || event.key === " ") {
                event.preventDefault();
                toggleCard(card);
            }
        });
    });
});
const marquee = document.querySelector('.marquee-content');
if (marquee) {
        let normal = true;
        marquee.addEventListener('click', () => {
                marquee.style.animationDirection = normal ? 'reverse' : 'normal';
                normal = !normal;
        });
}
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

function setupSlideCarousel(imgElement, images, intervalMs) {
    if (!imgElement || !Array.isArray(images) || images.length < 2) {
        return;
    }

    let index = 0;
    setInterval(() => {
        imgElement.classList.add('is-sliding');
        setTimeout(() => {
            index = (index + 1) % images.length;
            imgElement.src = images[index];
            imgElement.classList.remove('is-sliding');
        }, 360);
    }, intervalMs);
}

// Carousel for podcasts
const podcastImages = [
    "source/imgs/podcast 1.jpg",
    "source/imgs/podcast 2.jpg",
    "source/imgs/podcast 3.jpg",
    "source/imgs/podcast 4.jpg"
];
const podcastImg = document.querySelector("#podcast-carousel img");
setupSlideCarousel(podcastImg, podcastImages, 4500);

// Carousel for auditorio
const auditorioImages = [
    "source/imgs/estudio 1.jpg",
    "source/imgs/estudio 2.jpg",
    "source/imgs/estudio 3.jpg",
    "source/imgs/estudio 4.jpg"
];
const auditorioImg = document.querySelector("#auditorio-carousel img");
setupSlideCarousel(auditorioImg, auditorioImages, 4500);

// Carousel de prints de depoimentos
const depoimentoPrints = [
    "source/imgs/1.png",
    "source/imgs/2.png",
    "source/imgs/3.png",
    "source/imgs/4.png",
    "source/imgs/5.png",
    "source/imgs/6.png",
    "source/imgs/7.png",
    "source/imgs/8.png",
    "source/imgs/9.png"
];
const depoimentosImg = document.querySelector("#depoimentos-carousel img");
setupSlideCarousel(depoimentosImg, depoimentoPrints, 3500);

document.addEventListener("DOMContentLoaded", () => {
    const tabButtons = Array.from(document.querySelectorAll(".solucoes-tab-btn"));
    const tabPanels = Array.from(document.querySelectorAll(".solucoes-tab-panel"));
    const cardLinks = Array.from(document.querySelectorAll(".solucoes-card-link"));
    const explorerSection = document.getElementById("detalhes-servicos");

    if (!tabButtons.length || !tabPanels.length) {
        return;
    }

    const activateService = (service) => {
        tabButtons.forEach((button) => {
            const isActive = button.dataset.service === service;
            button.classList.toggle("active", isActive);
            button.setAttribute("aria-selected", isActive ? "true" : "false");
        });

        tabPanels.forEach((panel) => {
            const isActive = panel.dataset.service === service;
            panel.classList.toggle("active", isActive);
            panel.hidden = !isActive;
        });
    };

    tabButtons.forEach((button) => {
        button.addEventListener("click", () => {
            activateService(button.dataset.service);
        });
    });

    cardLinks.forEach((linkButton) => {
        linkButton.addEventListener("click", () => {
            const targetService = linkButton.dataset.service;
            activateService(targetService);

            if (explorerSection) {
                explorerSection.scrollIntoView({ behavior: "smooth", block: "start" });
            }
        });
    });
});
