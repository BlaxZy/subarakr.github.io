const menuBtn = document.querySelector('.header__menu_burger');
const menu = document.querySelector('.header__content');
const dialog = document.querySelector('dialog');
const showButton = document.querySelector('.modal');
const closeButton = document.querySelector('dialog button');

menuBtn.addEventListener('click', () => {
  menu.classList.toggle('active');
  menuBtn.classList.toggle('active__icon');
});

showButton.addEventListener('click', () => {
  dialog.showModal();
});

closeButton.addEventListener('click', () => {
  dialog.close();
});

document.addEventListener("DOMContentLoaded", function() {
  var scrollToTopBtn = document.getElementById("scrollToTopBtn");

  window.addEventListener("scroll", function() {
      if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
          scrollToTopBtn.style.display = "block";
      } else {
          scrollToTopBtn.style.display = "none";
      }
  });

  scrollToTopBtn.addEventListener("click", function() {
      document.body.scrollTop = 0;
      document.documentElement.scrollTop = 0;
  });
});
