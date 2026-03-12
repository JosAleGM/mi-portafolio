// Este script añade un suave efecto de aparición (fade-in) 
// a las tarjetas de proyectos cuando haces scroll hacia abajo.

document.addEventListener("DOMContentLoaded", () => {
    const cards = document.querySelectorAll(".project-card");

    // Configuración del Intersection Observer
    const observerOptions = {
        threshold: 0.1, // Se activa cuando el 10% de la tarjeta es visible
        rootMargin: "0px 0px -50px 0px"
    };

    const cardObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                // Si la tarjeta entra en la pantalla, le quitamos la transparencia y la subimos a su posición
                entry.target.style.opacity = 1;
                entry.target.style.transform = "translateY(0)";
                // Dejamos de observarla para que no se repita el efecto al volver a hacer scroll
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    // Preparar el estado inicial de cada tarjeta antes de que aparezcan
    cards.forEach(card => {
        card.style.opacity = 0;
        card.style.transform = "translateY(30px)";
        card.style.transition = "opacity 0.7s ease-out, transform 0.7s ease-out";
        cardObserver.observe(card);
    });
});
