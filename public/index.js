var r = document.querySelector(':root');


function changetheme(lite) {
  if (getComputedStyle(r).getPropertyValue('--clr-primary-1') == 'hsl(109, 100%, 51%)'&&lite==1) { // light theme
    r.style.setProperty('--clr-primary-1', 'hsl(180, 100%, 56%)');
    r.style.setProperty('--clr-primary-5', 'hsl(0, 0%, 100%)');
    r.style.setProperty('--clr-primary-10', 'hsl(180, 50%, 5%)');
    r.style.setProperty('--clr-grey-1', 'hsl(0, 0%, 100%)');

    localStorage.setItem('theme', 'light');
  } else { // dark theme
    r.style.setProperty('--clr-primary-1', 'hsl(109, 100%, 51%)');
    r.style.setProperty('--clr-primary-10', 'hsl(0, 0%, 100%)');
    r.style.setProperty('--clr-primary-5', 'hsl(180, 50%, 5%)');
    r.style.setProperty('--clr-grey-1', 'hsl(210, 9%, 13%)');

    localStorage.setItem('theme', 'dark');
  }
}

// Check if the theme is stored in local storage
if (localStorage.getItem('theme') === 'light') {
  changetheme(lite=1);
} else if (localStorage.getItem('theme') === 'dark') {
  changetheme(lite=0);
}



document.addEventListener('DOMContentLoaded', function () {
  var links = document.querySelectorAll('.navbar a');
  var menuIcon = document.querySelector('#menu-icon');
  var navbar = document.querySelector('.navbar');
  var theme = document.querySelector('#theme')
  links.forEach(function (link) {
    link.addEventListener('click', function () {
      links.forEach(function (link) {
        link.classList.remove('active');
      });
      
      this.classList.add('active');
    });
  });

  menuIcon.addEventListener('click', function () {
    menuIcon.classList.toggle('bx-menu');
    menuIcon.classList.toggle('bxl-xing');
    navbar.classList.toggle('active');
  });
  theme.addEventListener('click',function(){
    changetheme(lite=1);
  });
});

window.addEventListener('scroll', function () {
  var sections = document.querySelectorAll('section');
  var navigationLinks = document.querySelectorAll('.navbar a');
  var menuIcon = document.querySelector('#menu-icon');
  var navbar = document.querySelector('.navbar');
  sections.forEach(function (section) {
    var sectionTop = section.offsetTop;
    var sectionHeight = section.offsetHeight;
    var scrollPosition = window.scrollY;

    if (
      scrollPosition >= sectionTop - 50 &&
      scrollPosition < sectionTop + sectionHeight - 50
    ) {
      navigationLinks.forEach(function (link) {
        link.classList.remove('active');
      });

      navigationLinks.forEach(function (link) {
        if (link.getAttribute('href') === '#' + section.id) {
          link.classList.add('active');
        }
      });
    }
  });
  let header = document.querySelector('header');
  header.classList.toggle('sticky', window.scrollY > 100);

  menuIcon.classList.remove('bxl-xing');
  menuIcon.classList.add('bx-menu');
  navbar.classList.remove('active');
});

/* Scroll Reveal */

ScrollReveal({
  reset: true,
  distance: '80px',
  duration: 2000,
  delay: 100,
});
ScrollReveal().reveal('.home-content,.titleText', { origin: 'top' });
ScrollReveal().reveal(
  '.image,.projects-container,.project-item,.contact form',
  { origin: 'bottom' }
);
ScrollReveal().reveal('.home-content h1,.about-img,.skill-item p', {
  origin: 'left',
});
ScrollReveal().reveal('.home-content p,.about-content', { origin: 'right' });
ScrollReveal().reveal('.skill-item i', {
  origin: 'left',
  delay: 200,
  interval: 400,
  easing: 'easeInOutBack',
  reset:false
});

/* Type js */
const typed = new Typed('.typing', {
  strings: ['Full-Stack Developer', 'Freelancer', 'Content Creater'],
  typeSpeed: 100,
  backSpeed: 60,
  backdelay: 1000,
  loop: true,
});
