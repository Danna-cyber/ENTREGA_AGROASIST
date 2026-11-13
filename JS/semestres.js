
// AGROASIST - MENU Y ANIMACIONES

const menuBtn = document.getElementById("menuBtn");
const nav = document.getElementById("nav");

// Abrir y cerrar menú en celulares
menuBtn.addEventListener("click", () => {
  nav.classList.toggle("open");
});

// Cerrar menú al seleccionar una sección
nav.querySelectorAll("a").forEach(link => {
  link.addEventListener("click", () => {
    nav.classList.remove("open");
  });
});

// Mostrar elementos al desplazarse por la página
const elementos = document.querySelectorAll(
  ".section, .semester-card, .info-card, .evolution-grid article"
);

const observador = new IntersectionObserver((entradas) => {
  entradas.forEach(entrada => {
    if (entrada.isIntersecting) {
      entrada.target.classList.add("visible");
      observador.unobserve(entrada.target);
    }
  });
}, { threshold: 0.12 });

elementos.forEach(elemento => {
  elemento.classList.add("reveal");
  observador.observe(elemento);
});
