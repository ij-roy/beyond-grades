const navToggle = document.querySelector('.nav-toggle');
const navLinks = document.querySelector('.nav-links');
if (navToggle && navLinks) navToggle.addEventListener('click', () => { const open = navLinks.classList.toggle('is-open'); navToggle.setAttribute('aria-expanded', String(open)); });
const items = document.querySelectorAll('.reveal');
if (window.matchMedia('(prefers-reduced-motion: reduce)').matches || !('IntersectionObserver' in window)) items.forEach((item) => item.classList.add('is-visible'));
else { const observer = new IntersectionObserver((entries) => entries.forEach((entry) => { if (entry.isIntersecting) { entry.target.classList.add('is-visible'); observer.unobserve(entry.target); } }), {threshold:.15}); items.forEach((item) => observer.observe(item)); }
items.forEach((item) => item.classList.add('is-visible'));
