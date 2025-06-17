import Accordion from 'accordion-js';
import Swiper from 'swiper';
import { Keyboard, Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';

document.addEventListener('DOMContentLoaded', () => {
  const abme_accordion = new Accordion('.about-me-accordion-list', {
    duration: 400,
    showMultiple: true,
    elementClass: 'js-acc-item', //ac
    triggerClass: 'js-toggle-btn', //ac-toggle
    panelClass: 'js-accordion-content-wrap', //ac-content-wrap
    activeClass: 'js-ac-content-open', //is-active
  });
  abme_accordion.open(0);
});

// swiper
const arrSkills = ['HTML/CSS', 'JavaScript', 'React', 'Node.js', 'React Native', 'Soft Skills', 'MySQL'];
const swiperList = document.querySelector('.js-swiper-list');

function createMarkup(arr) {
  return arr.map((skill, i) => 
    `<li class="swiper-slide">
            <p class="js-slide-text">
              ${skill}
            </p>
     </li>`
  ).join('');
}
swiperList.insertAdjacentHTML('afterbegin', createMarkup(arrSkills))

const swiperSkills = new Swiper('.js-about-me-swiper-wrapper', {
  modules: [Keyboard, Navigation],
  containerModifierClass: 'js-',
  slideActiveClass: 'js-slide-active',
  loop: true,
  loopedSlides: 12,
  slidesPerView: 2,
  simulateTouch: true,
  touchRatio: 1,
  watchSlidesProgress: true,
  navigation: {
    nextEl: '.js-next-slide-btn',
  },
  keyboard: {
    enabled: true,
    onlyInViewport: true,
  },
  breakpoints: {
    768: {
      slidesPerView: 3,
    },
    1440: {
      slidesPerView: 6,
    },
  },
});
