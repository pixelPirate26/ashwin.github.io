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
        "opacity": { 
            "value": 0.5, 
            "random": true,
            "anim": {
                "enable": false,
                "speed": 0.2,
                "opacity_min": 0,
                "sync": false
            } 
        },
        "size": { 
            "value": 2.8, 
            "random": true, 
            "anim": {
                "enable": false,
                "speed": 40,
                "size_min": 0.1,
                "sync": false
            }
        },
        "line_linked": {
            "enable": true,
            "distance": 200,
            "color": "#4caf50",
            "opacity": 0.4,
            "width": 1
        },
        "move": {
            "enable": true,
            "speed": 6,
            "direction": "none",
            "random": false,
            "straight": false,
            "out_mode": "out",
            "bounce": false,
            "attract": {
                "enable": true,
                "rotateX": 600,
                "rotateY": 1200
            }
        }
    },
    "interactivity": {
        "detect_on": "window", // Change from "canvas" to "window"
        "events": {
            "onhover": { 
                "enable": true, 
                "mode": "bubble" 
            },
            "onclick": { 
                "enable": true, 
                "mode": "repulse" 
            },
            "resize": true
        },
        "modes": {
            "bubble": { 
                "distance": 400, 
                "size": 36, 
                "duration": 2, 
                "opacity": 0.5 
            },
            "repulse": { 
                "distance": 250, 
                "duration": 0.4 
            }
        }
    },
    "retina_detect": true
});

// Additional CSS to ensure full page coverage
const particlesStyle = document.createElement('style');
particlesStyle.textContent = `
    #particles-js {
        position: fixed;
        width: 100%;
        height: 100%;
        top: 0;
        left: 0;
        z-index: 1;
        pointer-events: none; /* Allows interaction with content underneath */
    }
`;
document.head.appendChild(particlesStyle);

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
