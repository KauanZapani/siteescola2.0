// Menu Mobile Toggle
const menuToggle = document.getElementById('menuToggle');
const mobileNav = document.getElementById('mobileNav');

menuToggle.addEventListener('click', () => {
    mobileNav.classList.toggle('active');
    const menuIcon = menuToggle.querySelector('.menu-icon');
    menuIcon.textContent = mobileNav.classList.contains('active') ? '✕' : '☰';
});

// Fechar menu mobile ao clicar em um link
const mobileLinks = document.querySelectorAll('.nav-link-mobile');
mobileLinks.forEach(link => {
    link.addEventListener('click', () => {
        mobileNav.classList.remove('active');
        const menuIcon = menuToggle.querySelector('.menu-icon');
        menuIcon.textContent = '☰';
    });
});

// Smooth scroll para links de navegação
const navLinks = document.querySelectorAll('.nav-link, .nav-link-mobile');
navLinks.forEach(link => {
    link.addEventListener('click', (e) => {
        e.preventDefault();
        const targetId = link.getAttribute('href').substring(1);
        const targetSection = document.getElementById(targetId);
        
        if (targetSection) {
            const headerHeight = document.querySelector('.header').offsetHeight;
            const targetPosition = targetSection.offsetTop - headerHeight;
            
            window.scrollTo({
                top: targetPosition,
                behavior: 'smooth'
            });
        }
    });
});

// Formulário de Contato
const contactForm = document.getElementById('contactForm');

contactForm.addEventListener('submit', (e) => {
    e.preventDefault();
    
    // Pegar valores do formulário
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const phone = document.getElementById('phone').value;
    const message = document.getElementById('message').value;
    
    // Aqui você pode adicionar a lógica para enviar o formulário
    // Por enquanto, vamos apenas mostrar uma mensagem de sucesso
    alert(`Obrigado, ${name}! Sua mensagem foi enviada com sucesso. Entraremos em contato em breve.`);
    
    // Limpar o formulário
    contactForm.reset();
});

// Animação ao scroll (elementos aparecem quando visíveis)
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Adicionar animação aos cards
const animatedElements = document.querySelectorAll('.course-card, .news-card, .differential-item');
animatedElements.forEach(el => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(20px)';
    el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    observer.observe(el);
});

// Destacar link ativo na navegação ao fazer scroll
window.addEventListener('scroll', () => {
    const sections = document.querySelectorAll('section[id]');
    const scrollPosition = window.scrollY + 100;
    
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.offsetHeight;
        const sectionId = section.getAttribute('id');
        
        if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
            // Remove active de todos os links
            document.querySelectorAll('.nav-link, .nav-link-mobile').forEach(link => {
                link.classList.remove('active');
            });
            
            // Adiciona active ao link correspondente
            document.querySelectorAll(`a[href="#${sectionId}"]`).forEach(link => {
                link.classList.add('active');
            });
        }
    });
});

// Adicionar estilo para link ativo
const style = document.createElement('style');
style.textContent = `
    .nav-link.active,
    .nav-link-mobile.active {
        color: #bfdbfe !important;
        font-weight: bold;
    }
`;
document.head.appendChild(style);

console.log('Site do Colégio Estadual São Cristóvão carregado com sucesso! 🎓');
