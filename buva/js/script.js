"use strict";

var animItems = document.querySelectorAll(".anim_item");

if (animItems.length > 0) {
  window.addEventListener("scroll", animOnScroll);
  setTimeout(function () {
    animOnScroll();
  }, 1000);
}

function animOnScroll() {
  for (var i = 0; i < animItems.length; i++) {
    var anim_item = animItems[i];
    var animItemHeight = anim_item.offsetHeight;
    var animItemOffset = offset(anim_item).top;
    var animStart = 4;
    var animItemPoint = window.innerHeight - animItemHeight / animStart;

    if (animItemHeight > window.innerHeight) {
      animItemPoint = window.innerHeight - window.innerHeight / animStart;
    }

    if (pageYOffset > animItemOffset - animItemPoint && pageYOffset < animItemOffset + animItemHeight) {
      console.log(anim_item);
      anim_item.classList.add("animated");
    } else {
      console.log(anim_item);

      if (!anim_item.classList.contains("anim_no_hide")) {
        anim_item.classList.remove("animated");
      }
    }
  }
}

function offset(el) {
  var rect = el.getBoundingClientRect();
  var scrollLeft = window.pageXOffset || document.documentElement.scrollLeft;
  var scrollTop = window.pageYOffset || document.documentElement.scrollTop;
  return {
    top: rect.top + scrollTop,
    left: rect.left + scrollLeft
  };
}

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
    // when window width is >= 605px
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
}); //const carousel = document.querySelector(".hero_carousel");

var carouselItems = document.querySelectorAll(".carousel_item");
var swiper2 = new Swiper('.swiper2', {
  parallax: true,
  spaceBetween: 300,
  loop: true,
  autoplay: {
    delay: 5000
  },
  navigation: {
    nextEl: '.swiper-button-next2',
    prevEl: '.swiper-button-prev2'
  },
  breakpoints: {
    // when window width is >= 1500px
    1500: {
      slidesPerView: 1,
      spaceBetween: 400
    }
  }
}); // swiper2.on('slideChange', function () {
//   console.log('slide changed');
//   if(carouselItems.length > 0) {
//     for(let i = 0; i < carouselItems.length; i++) {
//       let item = carouselItems[i];
//       console.log(item);
//        if(item.classList.contains("swiper-slide-duplicate-active") || item.classList.contains("swiper-slide-active")){
//       item.classList.add("animated");
//        }else{
//          if(item.classList.contains("animated")){
//           item.classList.remove("animated");
//          }
//        }
//         //   console.log(item.children);
//       //     for (let j = 0; j < item.children.length; j++) {
//       //         item.children[j].classList.add("animated");
//       //       }
//       // }else {
//       //     for (let j = 0; j < item.children.length; j++) {
//       //         item.children[j].classList.remove("animated");
//       //       }
//       // }
//   }
//   }
// });