// Particles.js Configuration
particlesJS('particles-js', {
    "particles": {
        "number": { "value": 90, "density": { "enable": true, "value_area": 800 } },
        "color": { "value": "#4caf50" },
        "shape": {
            "type": "star",
            "stroke": { "width": 0.7, "color": "#bbdebd" },
            "polygon": { "nb_sides": 12 }
        },
        "opacity": { "value": 0.5, "random": true },
        "size": { "value": 2.8, "random": true },
        "line_linked": {
            "enable": true,
            "distance": 200,
            "color": "#4caf50",
            "opacity": 0.6,
            "width": 1
        },
        "move": {
            "enable": true,
            "speed": 6,
            "direction": "none",
            "random": false,
            "straight": false,
            "out_mode": "out"
        }
    },
    "interactivity": {
        "detect_on": "canvas",
        "events": {
            "onhover": { "enable": true, "mode": "bubble" },
            "onclick": { "enable": true, "mode": "repulse" },
            "resize": true
        },
        "modes": {
            "bubble": { "distance": 400, "size": 36, "duration": 2, "opacity": 0.5 },
            "repulse": { "distance": 250, "duration": 0.4 }
        }
    },
    "retina_detect": true
});

document.addEventListener('DOMContentLoaded', () => {
    const observerOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0.2
    };

    const animateOnScroll = (entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                entry.target.style.animationPlayState = 'running';
                observer.unobserve(entry.target);
            }
        });
    };

    const observer = new IntersectionObserver(animateOnScroll, observerOptions);

    // Select more elements for animation
    const animatedElements = document.querySelectorAll(
        '.section, .project-card, .publication-card, .hero-content, .instagram-embed, .contact-icons'
    );

    animatedElements.forEach(el => {
        el.style.animationPlayState = 'paused';
        observer.observe(el);
    });
});

// Smooth Scrolling 
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const targetElement = document.querySelector(this.getAttribute('href'));
        const navbarHeight = document.querySelector('.navbar').offsetHeight;
        const elementPosition = targetElement.getBoundingClientRect().top + window.scrollY;
        const offsetPosition = elementPosition - navbarHeight - 65; // Add extra 10px for spacing

        window.scrollTo({
            top: offsetPosition,
            behavior: 'smooth'
        });
    });
});
