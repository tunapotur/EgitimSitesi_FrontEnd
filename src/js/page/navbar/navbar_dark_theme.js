import { elements, eNavbar } from '../../elements';

// src\scss\base\_animations.scss
// transition for color theme
const trans = () => {
  elements.root.classList.add('transition');

  window.setTimeout(() => {
    elements.root.classList.remove('transition');
  }, 550);
};

const set_currentTheme = theme => {
  elements.root.setAttribute('data-theme', theme);
  localStorage.setItem('theme', theme);

  const rotate = 'transform: rotate(180deg);';

  theme === 'dark'
    ? eNavbar.btnDarkLight.setAttribute('style', rotate)
    : eNavbar.btnDarkLight.removeAttribute('style', rotate);
};

// Her sayfa yenilemesinde sayfanin dark/light durumu kontrol ediliyor
let pageTheme = localStorage.getItem('theme');

pageTheme === null || pageTheme === 'light' ? set_currentTheme('light') : set_currentTheme('dark');

eNavbar.btnDarkLight.addEventListener('click', () => {
  trans();
  pageTheme = localStorage.getItem('theme');
  pageTheme === 'light' ? set_currentTheme('dark') : set_currentTheme('light');
});
