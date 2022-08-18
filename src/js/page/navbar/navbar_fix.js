// Eski tarayicilarda ResizeObserver metodu işe yaramayabilir.
/**
 * Bu yuzden;
 * css-element-queries kutuphanesi kurulup alttaki kod kullanilabilir
 * npm install css-element-queries --save
 * http://marcj.github.io/css-element-queries/
 * https://stackoverflow.com/questions/16018520/is-it-possible-to-keep-the-width-of-the-parent-element-when-position-fixed-is-a/42884671
 * Kutuphane eklendikten sonra alttaki iki siniftan biri secilmeli
 * ResizeSensor
 * ElementQueries
 */
/* 
  const CssElementQueries = require('css-element-queries');
  new CssElementQueries.ResizeSensor(elements.contentWrapper, () => {
    const parentElementWidth = elements.contentWrapper.getBoundingClientRect().width + 'px';
    document.querySelector('.navbar-wrapper--fixed').style.width = parentElementWidth;

    console.log('Changed to ' + elements.contentWrapper.clientWidth);
  });
 */

// ResizeObserver() işlemine dikkat et!
/**
 * ResizeObserver() işlemi dinamik ve anlık çalışıtğı için
 * ilgili element için her hangi bir yerde
 * window.setTimeout işlemi uygulamamak gerekir
 * yaptığımız çalışmada navbar fixed yapıldığında genişlik bozuluyor
 * ResizeObserver() ile navbar genişilği dinamik bir şekilde ayarlanıyor
 * yapılan çalışmada örneğin slide sidebar işleminde
 * navbar üzerinde window.setTimeout fonksiyonu çalıştırılınca
 * navbar boyutu dinamik şekilde ayarlanamıyor.
 * Bu yüzden sidebar slayt işlemi için transition efekti
 * css üzerinden elementlere atandı.
 * Javascript ile dinamik bir şekilde verilmedi.
 */

import { elements, eNavbar } from '../../elements';

const resize_navbar = new ResizeObserver(entries => {
  let parentWidth;

  for (let entry of entries) {
    parentWidth = entry.target.getBoundingClientRect().width + 'px';
    eNavbar.wrapper.style.width = parentWidth;
  }
});

// Gerekirse diye bırakıldı
/*eslint-disable */
const static_navbar = () => {
  localStorage.setItem('navbar_position', 'static');
  eNavbar.wrapper.classList.remove('navbar-wrapper--fixed');
  eNavbar.wrapper.classList.remove('navbar-wrapper--absolute');
  eNavbar.wrapper.style.width = null;
  resize_navbar.unobserve(elements.contentWrapper);
};
/*eslint-enable */

const fix_navbar = () => {
  eNavbar.wrapper.classList.remove('navbar-wrapper--absolute');
  eNavbar.wrapper.classList.add('navbar-wrapper--fixed');
  localStorage.setItem('navbar_position', 'fixed');
};

const absolute_navbar = () => {
  eNavbar.wrapper.classList.remove('navbar-wrapper--fixed');
  eNavbar.wrapper.classList.add('navbar-wrapper--absolute');
  localStorage.setItem('navbar_position', 'absolute');
};

// Her sayfa yenilemesinde sayfanin fixed durumu kontrol ediliyor
let navbar_position = localStorage.getItem('navbar_position');

resize_navbar.observe(elements.contentWrapper);

if (!navbar_position) absolute_navbar();
else if (navbar_position === 'absolute') absolute_navbar();
else if (navbar_position === 'fixed') fix_navbar();

eNavbar.btnFixNavbar.addEventListener('click', () => {
  navbar_position = localStorage.getItem('navbar_position');
  navbar_position === 'absolute' ? fix_navbar() : absolute_navbar();
});
