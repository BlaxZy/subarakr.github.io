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
