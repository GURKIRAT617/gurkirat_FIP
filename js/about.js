
const menuToggle = document.getElementById("menuToggle");
const navLinks = document.getElementById("navLinks");

menuToggle.addEventListener("click", () => {
  navLinks.classList.toggle("show");
});

const editionCards = document.querySelectorAll(".edition-card");

const animateIn = (el) => {
  el.style.transition = "transform 0.6s ease, opacity 0.6s ease";
  el.style.opacity = "1";
  el.style.transform = "translateY(0) scale(1)";
};

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      animateIn(entry.target);
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.3 });

editionCards.forEach((card) => {
  card.style.opacity = "0";
  card.style.transform = "translateY(30px) scale(0.95)";
  observer.observe(card);
});