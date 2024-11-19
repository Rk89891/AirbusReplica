// JavaScript to rotate through the slides in the hero section
// Script to handle slideshow functionality
let slideIndex = 0;
const slides = document.querySelectorAll('.slide');

function showSlides() {
    slides.forEach((slide, index) => {
        slide.style.opacity = (index === slideIndex) ? '1' : '0';
    });
    slideIndex = (slideIndex + 1) % slides.length;
}

// Change slide every 4 seconds
setInterval(showSlides, 4000);
// Handle form submission and redirect to the message sent page
document.getElementById("contactForm").addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent the default form submission behavior
    window.location.href = "message_sent.html"; // Redirect to confirmation page
});

