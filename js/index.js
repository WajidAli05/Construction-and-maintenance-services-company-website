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



// Select the scroll-to-top button
const scrollTopButton = document.querySelector('.scroll-top');

// Add a scroll event listener
window.addEventListener('scroll', () => {
    if (window.scrollY > 500) { // Adjust the scroll distance as needed
        scrollTopButton.classList.add('active');
    } else {
        scrollTopButton.classList.remove('active');
    }
});

// Add a click event listener to scroll to the top
scrollTopButton.addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});




// Select the Contact Us button
const contactUsButton = document.querySelector('.contact-us');

// Add a click event listener for the Contact Us button
contactUsButton.addEventListener('click', () => {
    // Open the modal (replace '#contactModal' with your modal ID if different)
    const contactModal = new bootstrap.Modal(document.getElementById('contactModal'));
    contactModal.show();
});


// Initialize EmailJS
emailjs.init('B9S6B0gvG9Y0zoBlm'); // Replace with your EmailJS public key

// Handle Form Submission
document.getElementById('contactForm').addEventListener('submit', function (e) {
    e.preventDefault();

    // Collect form data
    const formData = {
        name: document.getElementById('name').value,
        phone: document.getElementById('phone').value,
        email: document.getElementById('email').value,
        address: document.getElementById('address').value,
        details: document.getElementById('details').value,
    };

    // Send email via EmailJS
    emailjs.send('service_rq5kqa9', 'template_4nun0m5', formData)
        .then(() => {
            alert('Your message has been sent successfully!');
            // Clear form fields
            document.getElementById('contactForm').reset();
            // Close modal
            const modal = bootstrap.Modal.getInstance(document.getElementById('contactModal'));
            modal.hide();
        })
        .catch((error) => {
            console.error('EmailJS Error:', error);
            alert('There was an error sending your message. Please try again.');
        });
});
