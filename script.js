// ==================== SHOW MENU ====================

const showMenu = (toggleId, navId) =>{
    const toggle = document.getElementById(toggleId),
          nav = document.getElementById(navId)
 
    toggle.addEventListener('click', () =>{
        // Add show-menu class to nav menu
        nav.classList.toggle('show-menu')
 
        // Add show-icon to show and hide the menu icon
        toggle.classList.toggle('show-icon')
    })
 }
 
 showMenu('nav-toggle','nav-menu')

 // ==================== СЛАЙДЕР ====================

 const mainSwiper = new Swiper('.main-swiper', {
  loop: true,
  slidesPerView: 1,
  spaceBetween: 0,
  pagination: {
    el: '.main-pagination',
    clickable: true,
  },
  navigation: {
    nextEl: '.main-next',
    prevEl: '.main-prev',
  },
});


 // ==================== МОДАЛКА ====================

// Получаем модальное окно
const modal = document.getElementById("modal");

// Получаем элемент <span> для закрытия модального окна
const span = document.getElementsByClassName("close")[0];

// Инициализируем внутренний слайдер
const modalSwiper = new Swiper('.modal-swiper', {
  navigation: {
    nextEl: '.modal-next',
    prevEl: '.modal-prev',
  },
});

// Добавляем обработчик события для всех слайдов
document.querySelectorAll('.main-swiper .swiper-slide').forEach(slide => {
  slide.onclick = () => {
    if (window.innerWidth <= 1024) {
      const beforeImg = slide.querySelector('.before').src;
      const afterImg = slide.querySelector('.after').src;

      document.getElementById('modal-before').src = beforeImg;
      document.getElementById('modal-after').src = afterImg;

      modal.style.display = "flex"; // Открываем модальное окно
      modalSwiper.update(); // Обновляем внутренний слайдер
      modalSwiper.slideTo(0, 0); // Переходим на первый слайд
    }
  };
});

// Когда пользователь нажимает на <span> (x), закрываем модальное окно
span.onclick = () => {
  modal.style.display = "none";
};

// Когда пользователь нажимает в любом месте вне изображения, закрываем модальное окно
modal.onclick = event => {
  if (event.target === modal) {
    modal.style.display = "none";
  }
};


// ==================== UNIT PRICES ====================

const icons = [
  { name: 'Диван', price: '1000 руб', icon: '/icon/unit/sofa2.svg', description: '2 посадочных (100-120 см)' },
  { name: 'Диван', price: '1500 руб', icon: '/icon/unit/sofa3.svg', description: '3 посадочных (150-180 см)' },
  { name: 'Диван', price: '2500 руб', icon: '/icon/unit/sofa3cut.svg', description: '3 посадочных места + угол' },
  { name: 'Диван', price: '2700 руб', icon: '/icon/unit/4sofa.svg', description: '4 посадочных места + угол' },
  { name: 'Диван', price: '3500 руб', icon: '/icon/unit/p-sofa.svg', description: '6 посадочных (П-образный)' },
  { name: 'Посадочное место', price: '500 руб', icon: '/icon/unit/sofa-seat.svg', description: '(50-60см)' },
  { name: 'Спальное место', price: '1000 руб', icon: '/icon/unit/sleep-place.svg', description: 'Стандартное' },
  { name: 'Посадочное место', price: '600 руб', icon: '/icon/unit/sofa-antivandal.svg', description: 'С антивандальной тканью' },
  { name: 'Посадочное место', price: '1200 руб', icon: '/icon/unit/sofa-viscoza.svg', description: 'С обивкой из шелка, вискозы ...' },
  { name: 'Кресла', price: '500 руб', icon: '/icon/unit/armchair.svg', description: '(50-60 см)' },
  { name: 'Стулья', price: '200 руб', icon: '/icon/unit/chair.svg', description: 'Без мягкой спинки' },
  { name: 'Стулья', price: '300 руб', icon: '/icon/unit/chair-soft.svg', description: 'С мягкой спинкой' },
  { name: 'Кухонный уголок', price: '1300 руб', icon: '/icon/unit/kitchen.svg', description: 'Стандартный' },
  { name: 'Изголовье кровати', price: '1500 руб', icon: '/icon/unit/bed.svg', description: 'Стандартное' },
  { name: 'Выведение запахов', price: '500 руб', icon: '/icon/unit/aerosol.svg', description: 'Дополнительно' },
  { name: 'Сильные загрязнения', price: '20 %', icon: '/icon/unit/mud.svg', description: 'Дополнительно' },
];

function generateIconsHTML(icons) {
  const container = document.querySelector('.prices-unit');
  icons.forEach(icon => {
    const iconElement = document.createElement('div');
    iconElement.classList.add('icon-item');
    iconElement.innerHTML = `
      <img src="${icon.icon}" alt="${icon.name}">
      <p>${icon.name}</p>
      <p>${icon.description}</p>
      <p>${icon.price}</p>
    `;
    container.appendChild(iconElement);
  });
}

// Вызов функции для генерации HTML
generateIconsHTML(icons);

// Кнопка вызвать мастера
function openTelegram() {
  window.open("https://t.me/superclean34", "_blank");
}

// Кнопка вызвать мастера при скроле

document.addEventListener('DOMContentLoaded', function() {
  window.addEventListener('scroll', function() {
      const floatingButton = document.querySelector('.floating-button');
        if (window.scrollY > 300) { 
            floatingButton.style.display = 'block';
        } else {
            floatingButton.style.display = 'none';
        }
  });
});