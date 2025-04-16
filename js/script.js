
const menuToggle = document.getElementById("menuToggle");
const navLinks = document.getElementById("navLinks");

menuToggle.addEventListener("click", () => {
  navLinks.classList.toggle("show");
});

const ctaBtn = document.querySelector(".cta-btn");
ctaBtn.addEventListener("click", () => {
  alert(" Thank you for choosing Billy Beer! Cheers to bold taste.");
});

const cans = document.querySelectorAll(".float-can, .news-img");

const rotateIn = (el) => {
  el.style.transition = "transform 0.6s ease, opacity 0.6s ease, filter 0.6s ease";
  el.style.transform = "rotate(0deg) translateY(0) scale(1)";
  el.style.opacity = "1";
  el.style.filter = "drop-shadow(0 8px 20px rgba(0,0,0,0.3))";
};

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      rotateIn(entry.target);
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.4 });

cans.forEach((can) => {
  can.style.opacity = "0";
  can.style.transform = "rotate(-10deg) translateY(30px) scale(0.9)";
  can.style.filter = "grayscale(60%) blur(1px)";
  observer.observe(can);
});