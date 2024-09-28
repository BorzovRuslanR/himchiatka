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

 const swiper = new Swiper('.swiper-container', {
    loop: true,
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
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
document.querySelectorAll('.swiper-slide').forEach(slide => {
  slide.onclick = () => {
    const beforeImg = slide.querySelector('.before').src;
    const afterImg = slide.querySelector('.after').src;

    document.getElementById('modal-before').src = beforeImg;
    document.getElementById('modal-after').src = afterImg;

    modal.style.display = "block";
    modalSwiper.update(); // Обновляем внутренний слайдер
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