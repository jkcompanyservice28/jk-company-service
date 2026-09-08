const menuButton=document.querySelector('.menu-toggle');
const nav=document.querySelector('#main-nav');
menuButton.addEventListener('click',()=>nav.classList.toggle('open'));
document.querySelectorAll('#main-nav a').forEach(a=>a.addEventListener('click',()=>nav.classList.remove('open')));
document.querySelector('#year').textContent=new Date().getFullYear();
const contactForm=document.querySelector('#contact-form');
if(contactForm){contactForm.addEventListener('submit',(event)=>{event.preventDefault();const name=contactForm.querySelector('input[type="text"]').value.trim();const phone=contactForm.querySelector('input[type="tel"]').value.trim();const message=contactForm.querySelector('textarea').value.trim();const text=`Hola, soy ${name}. Mi teléfono es ${phone}.\n\nNecesito: ${message}`;window.open(`https://wa.me/573142774766?text=${encodeURIComponent(text)}`,'_blank');});}
