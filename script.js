// Scroll suave
function scrollToSection(sectionId){
    document.getElementById(sectionId).scrollIntoView({ behavior:'smooth' });
}

// Fade-in nas seções
const faders = document.querySelectorAll('.fade-in');
const options = { threshold:0.1 };
const appearOnScroll = new IntersectionObserver(function(entries, observer){
    entries.forEach(entry=>{
        if(entry.isIntersecting){
            entry.target.style.opacity = 1;
            entry.target.style.transform = 'translateY(0)';
            observer.unobserve(entry.target);
        }
    });
}, options);
faders.forEach(fader => appearOnScroll.observe(fader));

// Carrossel simples
let current = 0;
const imgs = document.querySelectorAll('.carousel-img');
setInterval(()=>{
    imgs[current].classList.remove('active');
    current = (current+1)%imgs.length;
    imgs[current].classList.add('active');
},4000);

// Hamburger menu
const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.nav-links');
hamburger.addEventListener('click',()=> navLinks.classList.toggle('show'));
