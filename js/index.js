document.addEventListener("DOMContentLoaded", function () {
    const cards = document.querySelectorAll(".flip-card");

    const observer = new IntersectionObserver(
        (entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    entry.target.classList.add("is-visible");
                }
            });
        },
        {
            threshold: 0.2, // Trigger animation when 20% of the card is visible
        }
    );

    cards.forEach((card) => observer.observe(card));
});



document.addEventListener("DOMContentLoaded", () => {
    const elements = document.querySelectorAll('.animate-on-scroll');

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                observer.unobserve(entry.target); // Stop observing after animation
            }
        });
    }, { threshold: 0.2 }); // Trigger when 10% of the element is visible

    elements.forEach(el => observer.observe(el));
});
