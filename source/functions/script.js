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
    // 1. Aplica o listener a TODOS os cards (abrangendo toda a área)
    const cards = document.querySelectorAll(".servico-detalhado-card");
    let ativo = null;

    cards.forEach(card => {
        card.addEventListener("click", (event) => {
            // 2. Verifica se o elemento clicado é um link (<a>) ou um botão
            //    Se for um link/botão, IGNORA o resto da função (deixa o link funcionar)
            if (event.target.tagName === 'A' || event.target.tagName === 'BUTTON') {
                return; 
            }
            
            // 3. Verifica se o clique foi na área do conteúdo (para ignorar cliques na área aberta)
            //    Para manter o comportamento intuitivo, vamos focar no cabeçalho
            const titleOrIcon = event.target.closest('.servico-detalhado-title, .servico-detalhado-icon');
            
            // Se o clique não foi no título, no ícone, ou no próprio card, ignora.
            // Para simplificar, focaremos apenas em evitar links:
            
            // Lógica do Acordeão
            if (ativo && ativo !== card) {
                ativo.classList.remove("active");
            }

            card.classList.toggle("active");
            ativo = card.classList.contains("active") ? card : null;

            // Se o conteúdo está fechado e o card era ativo, ele precisa ser 'null'
            if (!card.classList.contains("active")) {
                ativo = null;
            }
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
