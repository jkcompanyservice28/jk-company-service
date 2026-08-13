const menuButton = document.querySelector('.menu-toggle');
const nav = document.querySelector('#main-nav');

menuButton.addEventListener('click', () => {
  nav.classList.toggle('open');
});

document.querySelectorAll('#main-nav a').forEach(link => {
  link.addEventListener('click', () => nav.classList.remove('open'));
});

document.querySelector('#year').textContent = new Date().getFullYear();

document.querySelector('#contact-form').addEventListener('submit', (event) => {
  event.preventDefault();
  const name = document.querySelector('#name').value.trim();
  const phone = document.querySelector('#phone').value.trim();
  const message = document.querySelector('#message').value.trim();

  // Para activar WhatsApp, reemplaza 573000000000 por el número real
  // del taller, incluyendo código de país, sin + ni espacios.
  const whatsappNumber = '573000000000';

  const text = `Hola, soy ${name}. Mi teléfono es ${phone}.%0A%0ANecesito: ${message}`;
  const url = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(text)}`;

  if (whatsappNumber !== '573000000000') {
    window.open(url, '_blank');
  } else {
    document.querySelector('#form-note').textContent =
      'Formulario listo. Para enviar por WhatsApp, cambia el número de ejemplo en script.js por el número real del taller.';
  }
});
