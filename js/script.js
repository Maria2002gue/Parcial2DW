// Inicializa los tooltips de Bootstrap
var tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'))
var tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
  return new bootstrap.Tooltip(tooltipTriggerEl)
})

// Inicializa ScrollReveal
ScrollReveal().reveal('.animate__animated', { 
  delay: 200, 
  origin: 'bottom', 
  distance: '20px',
  easing: 'ease-out',
  interval: 100 
});