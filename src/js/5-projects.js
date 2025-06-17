import Swiper from 'swiper';
import 'swiper/css';
import { Keyboard, Navigation } from 'swiper/modules';

// slide-content-item
const tags = ['#react', '#js', '#node js', '#git'];
const description = 'Programming Across Borders: Ideas, Technologies, Innovations';
const link ='https://zakhar-t.github.io/TeamProject_Portfolio_PG7/'
const linkText = 'See project';
const slidesContent = document.querySelectorAll('.projects-slide-content-js');

function createMarkup(tags, description, link, linkText) {
  const tagsMarkup = tags.map(tag => 
      `<li class="slide-content-item-js">
          <p>${tag}</p>
       </li>`).join('');
  return `
    <ul class="slide-content-list-js">${tagsMarkup}</ul>
    <p class="slide-content-text-js">${description}</p>
    <a class="slide-content-link-js" href="${link}" target="_blank" rel="noopener noreferrer">
      ${linkText}
    </a>`;
}
slidesContent.forEach(content => {
  content.insertAdjacentHTML('afterbegin', createMarkup(tags, description, link, linkText))
});

// swiper
const nextBtn = document.querySelector('.swiper-btn-right-js');
const prevBtn = document.querySelector('.swiper-btn-left-js');
const swiper = new Swiper('.projects-swiper-js', {
  direction: 'horizontal',
  simulateTouch: true,
  speed: 1200,
  slidesPerView: 1,
  spaceBetween: 20,
  modules: [Keyboard, Navigation],
  navigation: {
    nextEl: nextBtn,
    prevEl: prevBtn,
  },
  keyboard: {
    enabled: true,
    onlyInViewport: true,
    pageUpDown: false,
  },
  on: {
    reachEnd: () => {
      nextBtn.disabled = true;
    },
    reachBeginning: () => {
      prevBtn.disabled = true;
    },
    fromEdge: () => {
      nextBtn.disabled = false;
      prevBtn.disabled = false;
    },
  },
});
