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

// Depoimentos: grid de miniaturas + overlay de player
(() => {
    const depoVideos = [
        {src: 'source/vds/Camila Guerra - depoimento.mp4', title: 'Camila Guerra'},
        {src: 'source/vds/Leticia Cajal - depoimento.mp4', title: 'Leticia Cajal'}
    ];

    const grid = document.getElementById('depoimentos-grid');
    const overlay = document.getElementById('video-overlay');
    const overlayBackdrop = document.getElementById('video-overlay-backdrop');
    const overlayClose = document.getElementById('video-overlay-close');
    const overlayVideo = document.getElementById('overlay-video');

    if (!grid || !overlay || !overlayVideo) return;

    const createThumb = (video) => {
        const wrap = document.createElement('div');
        wrap.className = 'depo-thumb';
        wrap.tabIndex = 0;
        wrap.setAttribute('role', 'button');
        wrap.setAttribute('aria-label', `Abrir depoimento de ${video.title}`);

        const label = document.createElement('div');
        label.className = 'thumb-label';
        label.textContent = video.title;

        const playWrap = document.createElement('div');
        playWrap.className = 'play-wrap';
        const btn = document.createElement('button');
        btn.className = 'play-btn';
        btn.innerHTML = '<i class="fas fa-play"></i>';
        btn.type = 'button';
        playWrap.appendChild(btn);

        wrap.appendChild(playWrap);
        wrap.appendChild(label);

        // Click / teclado
        const open = () => {
            overlay.classList.add('open');
            overlay.removeAttribute('hidden');
            overlay.setAttribute('aria-hidden', 'false');
            overlayVideo.src = video.src;
            overlayVideo.currentTime = 0;
            overlayVideo.play().catch(()=>{});
            // focus no botão fechar
            setTimeout(() => overlayClose && overlayClose.focus(), 60);
        };

        wrap.addEventListener('click', open);
        wrap.addEventListener('keydown', (e) => {
            if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); open(); }
        });

        return wrap;
    };

    depoVideos.forEach(v => grid.appendChild(createThumb(v)));

    const closeOverlay = () => {
        overlay.classList.remove('open');
        overlay.setAttribute('aria-hidden', 'true');
        overlay.setAttribute('hidden', '');
        try { overlayVideo.pause(); } catch(e){}
        try { overlayVideo.removeAttribute('src'); overlayVideo.load(); } catch(e){}
    };

    overlayBackdrop && overlayBackdrop.addEventListener('click', closeOverlay);
    overlayClose && overlayClose.addEventListener('click', closeOverlay);
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && overlay && !overlay.hidden) closeOverlay();
    });
})();
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
    const fadeDurationMs = 500;
    setInterval(() => {
        imgElement.classList.add('is-sliding');
        setTimeout(() => {
            index = (index + 1) % images.length;
            imgElement.src = images[index];
            imgElement.classList.remove('is-sliding');
        }, fadeDurationMs);
    }, intervalMs);
}

// Podcast e auditório agora usam grade estática de imagens no HTML para evitar trocas com timer.

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
