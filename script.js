const menu=document.querySelector('.menu-btn');
const nav=document.querySelector('#nav');
if(menu) menu.addEventListener('click',()=>nav.classList.toggle('open'));
document.querySelectorAll('#nav a').forEach(a=>a.addEventListener('click',()=>nav.classList.remove('open')));

const form=document.querySelector('#contact-form');
if(form){
  form.addEventListener('submit',(e)=>{
    e.preventDefault();
    const fd=new FormData(form);
    const text=`Hola, JK Company Service.%0A%0ANombre: ${fd.get('nombre')}%0ATeléfono: ${fd.get('telefono')}%0AMotocicleta: ${fd.get('moto')}%0AServicio o falla: ${fd.get('mensaje')}`;
    window.open(`https://wa.me/573142774766?text=${encodeURIComponent(text)}`,'_blank');
  });
}
