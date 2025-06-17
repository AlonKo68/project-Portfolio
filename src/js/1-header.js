//logo
const logoText = document.querySelector('.logo-text-js');
const text = logoText.textContent.trim();
logoText.innerHTML = '';
function createMarkup (arr) {
  return [...arr].map((letter) => 
    `<span class="letter-js">${letter}</span>`
  ).join('');
}
logoText.insertAdjacentHTML('afterbegin', createMarkup(text));

//nav menu
const headerNavBtn =document.querySelector('.header-nav-btn');
headerNavBtn.addEventListener('click', handleOpenMenu);

let closeDelay;
function handleOpenMenu(e) {
  let menu;
  if (e.target.tagName === 'SPAN') {
    menu = document.querySelector('.nav-menu-list');
    console.log(menu);
    closeDelay = setTimeout(() => {
      menu.classList.toggle('menu-visible');
    }, 5000);
  } else {
    menu = document.querySelector('.mobile-menu');
    menu.addEventListener('click', handleCloseMenuMobile);
  }
  menu.classList.toggle('menu-visible');
}

// Закриття мобільного меню через кнопку (хрестик)
function handleCloseMenuMobile(e) {
  if (!e.target.classList.contains('menu-visible')) {
    e.currentTarget.classList.toggle('menu-visible');
    e.currentTarget.removeEventListener('click', handleCloseMenuMobile);
  }
}

