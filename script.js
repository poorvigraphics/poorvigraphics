const menuBtn=document.getElementById('menuBtn');
const navMenu=document.getElementById('navMenu');
menuBtn.addEventListener('click',()=>navMenu.classList.toggle('show'));
document.querySelectorAll('nav a').forEach(a=>a.addEventListener('click',()=>navMenu.classList.remove('show')));
