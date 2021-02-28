// HAMBURGER
let hamburger = document.querySelector('.hamburger');
let menu = document.querySelector('.header__menu');

hamburger.addEventListener('click', () => {
   hamburger.classList.toggle('active');
   menu.classList.toggle('active');
   scroll_stop();
});

function scroll_stop() {
   if (document.body.style.overflow !== 'hidden') {
      document.body.style.overflow = 'hidden';
   } else {
      document.body.style.overflow = 'auto';
   }
}