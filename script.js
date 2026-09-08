const menu=document.querySelector('.menu'),nav=document.querySelector('#nav');
if(menu)menu.addEventListener('click',()=>nav.classList.toggle('open'));
document.querySelectorAll('#nav a').forEach(a=>a.addEventListener('click',()=>nav.classList.remove('open')));
const form=document.querySelector('#contact-form');
if(form)form.addEventListener('submit',e=>{e.preventDefault();const d=new FormData(form);const msg=`Hola, JK Company Service.%0A%0ANombre: ${d.get('nombre')}%0AMotocicleta: ${d.get('moto')}%0AServicio o falla: ${d.get('mensaje')}`;window.open(`https://wa.me/573142774766?text=${encodeURIComponent(msg)}`,'_blank')});