document.addEventListener('DOMContentLoaded', function() {
    const testimonials = document.querySelectorAll('#testimonials .testimonial-box');
    const observerOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0.1
    };
    let delay = 0;

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                setTimeout(() => {
                    entry.target.classList.add('visible');
                    observer.unobserve(entry.target);
                }, delay);
                delay += 1000; // Incrementa el retraso para cada elemento
            }
        });
    }, observerOptions);

    testimonials.forEach(testimonial => {
        observer.observe(testimonial);
    });
});

