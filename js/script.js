"use strict";

var burger = document.querySelector('.icon_menu');
var menu = document.querySelector('.nav');
var content = document.querySelector(".feedbacks .cards_container");
var next = document.querySelector(".feedbacks .next_control");
var prev = document.querySelector(".feedbacks .prev_control");
var body = document.querySelector("body");
var current_year = document.querySelector(".current_year");
current_year.textContent = new Date().getFullYear();
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
  grabCursor: true,
  speed: 950,
  freeMode: {
    enabled: true,
    sticky: true
  },
  autoplay: {
    delay: 5000
  },
  breakpoints: {
    // when window width is >= 320px
    320: {
      slidesPerView: 1.3,
      spaceBetween: 40
    },
    // when window width is >= 605px
    605: {
      slidesPerView: 2.3,
      spaceBetween: 20
    },
    // when window width is >= 993px
    993: {
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
var swiper2 = new Swiper('.swiper2', {
  parallax: true,
  spaceBetween: 300,
  loop: true,
  grabCursor: true,
  speed: 700,
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
      spaceBetween: 800
    }
  }
});
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
      anim_item.classList.add("animated");
    } else {
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

var videoLinks = document.querySelectorAll('.video_item');

for (var i = 0; i < videoLinks.length; i++) {
  videoLinks[i].addEventListener('click', function (e) {
    BigPicture({
      el: e.target,
      vidSrc: e.target.getAttribute('vidSrc'),
      animationStart: function animationStart() {
        if (window.innerWidth > document.body.clientWidth) {
          document.querySelector("body").style.paddingRight = "17px";
        }

        document.documentElement.style.overflow = 'hidden';
      },
      onClose: function onClose() {
        document.documentElement.style.overflow = 'auto';
        document.querySelector("body").style.paddingRight = "0px";
      }
    });
  });
}