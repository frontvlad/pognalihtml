/* Проверка поддержки webp, добавление класса webp или no-webp для HTML */
export function isWebp() {
  // Проверка поддержки webp
  function testWebP(callback) {
    let webP = new Image();
    webP.onload = webP.onerror = function () {
      callback(webP.height == 2);
    };
    webP.src = "data:image/webp;base64,UklGRjoAAABXRUJQVlA4IC4AAACyAgCdASoCAAIALmk0mk0iIiIiIgBoSygABc6WWgAA/veff/0PP8bA//LwYAAA";
  }
  // Добавление класса _webp или _no-webp для HTML
  testWebP(function (support) {
    let className = support === true ? 'webp' : 'no-webp';
    document.documentElement.classList.add(className);
  });
}

// Меню бургер
const iconMenu = document.querySelector('.button-menu__toggle');
const mainHeader = document.querySelector('.header');
const menuBody = document.querySelector('.nav');
if (iconMenu) {
  iconMenu.addEventListener("click", function () {
    document.body.classList.toggle('_lock');
    menuBody.classList.toggle('header__nav--active');
    iconMenu.classList.toggle('button-menu__toggle--active');
    mainHeader.classList.toggle('header--active');
    ;
  });
}

//Попап
const open = document.querySelector('.profil__button')
const popup = document.querySelector('.profil__popup')
const close = document.querySelector('.profil__popup--close-button')
const visen = document.querySelector('.profil__preview')

if (open) {
  open.addEventListener('click', function () {
    popup.style.transform = 'translateY(0)';
  })


  close.addEventListener('click', function () {
    popup.style.transform = 'translateY(-120%)';
  })
}

//Фильтер

const filterOpenButton = document.querySelector('.filter-location__button');
const filterCloseButton = document.querySelector('.filter-location__close-button');


if (filterOpenButton) {
  filterOpenButton.addEventListener('click', function () {
    filterOpenButton.classList.toggle('filter-location__button--open')

    if (filterOpenButton.classList.contains('filter-location__button--open')) {
      document.querySelector('.filter-location').classList.add('filter-location--open')
    } else {
      document.querySelector('.filter-location').classList.remove('filter-location--open')
    }
  })

  filterCloseButton.addEventListener('click', function() {
    document.querySelector('.filter-location').classList.remove('filter-location--open')
    filterOpenButton.classList.remove('filter-location__button--open')
  }, 0)
}


//Аккордион

const accordion = document.querySelector('.accordion');

if (accordion) {
  accordion.addEventListener('click', function(evt) {
    const header = evt.target.closest('.accordion__header')
  
    if (!header) {
      return
    }
  
    header.closest('.accordion__item').classList.toggle('accordion__item--active')
  })
}




//Меню

document.addEventListener('scroll', function() {
  if (window.pageYOffset > (document.querySelector('.header').offsetHeight + 20)) {
    document.querySelector('.header').classList.add('header--scroll')
  } else {
    document.querySelector('.header').classList.remove('header--scroll')
  }
});
