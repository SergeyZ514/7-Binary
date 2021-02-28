// WEBP

function testWebP(callback) {
   var webP = new Image();
   webP.onload = webP.onerror = function () {
      callback(webP.height == 2);
   };
   webP.src =
      'data:image/webp;base64,UklGRjoAAABXRUJQVlA4IC4AAACyAgCdASoCAAIALmk0mk0iIiIiIgBoSygABc6WWgAA/veff/0PP8bA//LwYAAA';
}

testWebP(function (support) {
   if (support == true) {
      document.querySelector('body').classList.add('webp');
   } else {
      document.querySelector('body').classList.add('no-webp');
   }
});

// .ibg

function ibg() {
   let ibg = document.querySelectorAll('.ibg');
   for (var i = 0; i < ibg.length; i++) {
      if (ibg[i].querySelector('img')) {
         ibg[i].style.backgroundImage =
            'url(' + ibg[i].querySelector('img').getAttribute('src') + ')';
      }
   }
}
ibg();

// HAMBURGER
let hamburger = document.querySelector('.hamburger');
let menu = document.querySelector('.menu');

hamburger.addEventListener('click', () => {
   hamburger.classList.toggle('active');
   menu.classList.toggle('active');
   if (hamburger.classList.contains('active')) {
      document.body.style.overflow = 'hidden';
   } else {
      document.body.style.overflow = 'auto';
   }
});

// MENU
let menuLink = document.querySelectorAll('.menu__link');
menuLink.forEach((element) => {
   element.addEventListener('click', () => {
      if (menu.classList.contains('active')) {
         menu.classList.remove('active');
         hamburger.classList.remove('active');
         document.body.style.overflow = 'auto';
      }
   });
});

// SLIDING MENU
window.addEventListener('scroll', () => {
   scroll();
});

let home = document.getElementById('home');
let about = document.getElementById('about');
let portfolio = document.getElementById('portfolio');
let contact = document.getElementById('contact');
let sections = [home, about, portfolio, contact];

function scroll() {
   sections.forEach((element) => {
      let top = element.offsetTop - 100;
      let bottom = top + element.offsetHeight;
      let id = element.getAttribute('id');
      let windowScroll = window.pageYOffset;
      if (windowScroll > top && windowScroll < bottom) {
         menuLink.forEach((element) => {
            element.classList.remove('active');
         });
         let activeRef = menu.querySelector('a[href="#' + id + '"]');
         activeRef.classList.add('active');
      }
   });
}

// STICKY MENU

window.onscroll = function () {
   stickyMenu();
};
let navbar = document.getElementById('menu');

let sticky = navbar.offsetTop;

function stickyMenu() {
   if (
      window.pageYOffset >= sticky &&
      document.documentElement.clientWidth > 576
   ) {
      navbar.classList.add('sticky');
   } else {
      navbar.classList.remove('sticky');
   }
}

// TABS

window.addEventListener('DOMContentLoaded', function () {
   'use strict';
   let tabNavs = document.querySelectorAll('.portfolio__tab');
   let tabPanels = document.querySelectorAll('.portfolio__item');

   for (let i = 0; i < tabNavs.length; i++) {
      tabNavs[i].addEventListener('click', function (e) {
         e.preventDefault();
         let activeTabAttr = e.target.getAttribute('data-tab');

         if (!e.target.classList.contains('active')) {
            tabNavs.forEach((element) => {
               element.classList.remove('active');
            });
            e.target.classList.add('active');
         }
         tabPanels.forEach((element) => {
            let contentAttr = element.getAttribute('data-tab-content');
            if (activeTabAttr === contentAttr && activeTabAttr !== 'all') {
               element.classList.add('active');
            } else if (activeTabAttr === 'all') {
               element.classList.add('active');
            } else {
               element.classList.remove('active');
            }
         });
      });
   }
});

// SMOOTH SCROLL

const anchors = document.querySelectorAll('a[href*="#"]');

for (let anchor of anchors) {
   anchor.addEventListener('click', function (e) {
      e.preventDefault();

      const blockID = anchor.getAttribute('href').substr(1);

      document.getElementById(blockID).scrollIntoView({
         behavior: 'smooth',
         block: 'start',
      });
   });
}
