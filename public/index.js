




  
document.addEventListener('DOMContentLoaded', function() {
    var links = document.querySelectorAll('.navbar a');
    var menuIcon = document.querySelector('#menu-icon');
var navbar = document.querySelector('.navbar');
    links.forEach(function(link) {
      link.addEventListener('click', function() {
        links.forEach(function(link) {
          link.classList.remove('active');
        });
  
        this.classList.add('active');
      });
    });
    menuIcon.addEventListener('click', function() {
        console.log("hi there")
        menuIcon.classList.toggle('bx-menu');
        menuIcon.classList.toggle('bxl-xing');
        navbar.classList.toggle('active');
        
          });
  });
  
  window.addEventListener('scroll', function() {
    var sections = document.querySelectorAll('section');
    var navigationLinks = document.querySelectorAll('.navbar a');
    var menuIcon = document.querySelector('#menu-icon');
var navbar = document.querySelector('.navbar');
    sections.forEach(function(section) {
      var sectionTop = section.offsetTop;
      var sectionHeight = section.offsetHeight;
      var scrollPosition = window.scrollY;
  
      if (
        scrollPosition >= sectionTop - 50 &&
        scrollPosition < sectionTop + sectionHeight - 50
      ) {
    
        navigationLinks.forEach(function(link) {
          link.classList.remove('active');
        });
  
        navigationLinks.forEach(function(link) {
          if (link.getAttribute('href') === '#' + section.id) {
            link.classList.add('active');
          }
        });
      }
    });
    let header = document.querySelector('header');
    header.classList.toggle('sticky',window.scrollY>100)
    
    menuIcon.classList.remove('bxl-xing');
    menuIcon.classList.add('bx-menu');
    navbar.classList.remove('active');

  });
  
/* Scroll Reveal */ 

ScrollReveal({
    reset:true,
    distance:'80px',
    duration:2000,
    delay:100
});
ScrollReveal().reveal('.home-content,.titleText',{origin:'top'});
ScrollReveal().reveal('.image,.projects-container,.project-item,.contact form',{origin:'bottom'});
ScrollReveal().reveal('.home-content h1,.about-img',{origin:'left'});
ScrollReveal().reveal('.home-content p,.about-content',{origin:'right'});

/* Type js */
const typed = new Typed('.typing', {
    strings: ['Full-Stack Developer', 'Freelancer', 'Content Creater'],
    typeSpeed: 100,
    backSpeed: 60,
    backdelay:1000,
    loop: true

})