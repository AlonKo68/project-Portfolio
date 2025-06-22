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
const navItems = ['About me', 'Benefits', 'Projects', 'FAQ'];
const listNavMenu =document.querySelector('.nav-menu-list-js');
function createMarkupMenu(arr) {
  return arr.map((item) => 
  ` <li class="nav-menu-item-js">
        <a class="nav-menu-link-js" 
          href="#${item.toLowerCase().replace(/\s+/g, '')}" 
          aria-label="go to ${item.toLowerCase()} section">
            ${item}
        </a>
    </li>`
).join('')
}
listNavMenu.insertAdjacentHTML('afterbegin', createMarkupMenu(navItems))

// open menu/nav
const headerNavBtn =document.querySelector('.header-nav-btn');
headerNavBtn.addEventListener('click', handleOpenMenu);

let closeDelay = null;
function handleOpenMenu(e) {
  let menu;
  if (e.target.tagName === 'SPAN') {
    menu = document.querySelector('.nav-menu-list-js');
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


