// Reveal animation on scroll
document.addEventListener('DOMContentLoaded', function() {
  const elements = document.querySelectorAll('.reveal-text, .reveal-element');

  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('active');
      }
    });
  }, { threshold: 0.1 });

  elements.forEach(el => observer.observe(el));
});

// Smooth scrolling for menu links
document.querySelectorAll('a[href^="#"]').forEach(link => {
  link.addEventListener('click', function(e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      window.scrollTo({
        top: target.offsetTop - 80, // Adjust for sticky header
        behavior: 'smooth'
      });
    }
  });
});

// Optional: Subscribe form behavior
const subscribeForm = document.querySelector('.subscribe-form');

if (subscribeForm) {
  subscribeForm.addEventListener('submit', function(e) {
    e.preventDefault();
    alert('Thank you for subscribing! You will receive updates by email.');
    subscribeForm.reset();
  });
}
