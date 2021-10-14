"use strict";

var burger = document.querySelector('.icon_menu');
var menu = document.querySelector('.nav');
var content = document.querySelector(".feedbacks .cards_container");
var next = document.querySelector(".feedbacks .next_control");
var prev = document.querySelector(".feedbacks .prev_control");
var body = document.querySelector("body");
burger.addEventListener('click', function (e) {
  burger.classList.toggle('active');
  menu.classList.toggle('active');

  if (burger.classList.contains('active')) {
    body.style.position = "fixed";
  } else {
    body.style.position = "static";
  }
});
var swiper = new Swiper('.swiper', {
  // Optional parameters
  direction: 'horizontal',
  loop: true,
  autoplay: {
    delay: 5000
  },
  breakpoints: {
    // when window width is >= 320px
    320: {
      slidesPerView: 1,
      spaceBetween: 40
    },
    // when window width is >= 505px
    605: {
      slidesPerView: 2,
      spaceBetween: 20
    },
    // when window width is >= 992px
    992: {
      slidesPerView: 3,
      spaceBetween: 30
    }
  },
  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev'
  }
});
/*let direction = 0;

next.addEventListener("click", () => {
  direction = -1;
  const cardWidth = document.querySelector(".cards_container .card ").offsetWidth + 15;
  
  if(document.documentElement.clientWidth <= 581) {
   content.style.transform = `translateY(-${cardWidth + 65}px)`;
  }else {
   content.style.transform = `translateX(-${cardWidth}px)`;
 }
});

prev.addEventListener("click", () => {
 direction = 1;
 const cardWidth = document.querySelector(".cards_container .card").offsetWidth + 15;
  
 if(document.documentElement.clientWidth <= 581) {
   content.style.transform = `translateY(${cardWidth + 65}px)`;
  }else {
   content.style.transform = `translateX(${cardWidth}px)`;
 }
});


content.addEventListener("transitionend", () => {
    if(direction === -1) {
       console.log(direction);
       console.log(content.firstElementChild)
     content.appendChild(content.firstElementChild);
    }else if(direction === 1){
     content.prepend(content.lastElementChild);
    }
   
  content.style.transition = "none";
  content.style.transform = "translate(0)";
  setTimeout(function() {
   content.style.transition = "all 0.5s ease-in-out";
  })
});
*/