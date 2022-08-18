// Eski tip ekran cozunurlugu cozumu
/* 
  const screenSizeCheck = () => {
    window.innerWidth <= 900
      ? elements.pageWrapper.classList.add('sidebar-closed')
      : elements.pageWrapper.classList.remove('sidebar-closed');
  };
  
  ['DOMContentLoaded', 'resize'].forEach(event => window.addEventListener(event, screenSizeCheck));
 */
import { eResponsive, eSidebar, elements } from '../../elements';
import css_transition from '../../animation/css_transition';
import { fadeIn, fadeOut } from '../../animation/fade';

let tab_port;
const screenSizeCheck = element => {
  element.matches
    ? elements.pageWrapper.classList.add('page-wrapper--sidebar-closed')
    : elements.pageWrapper.classList.remove('page-wrapper--sidebar-closed');

  tab_port = element.matches ? true : false;
};

const slideSidebar = () => {
  elements.pageWrapper.classList.toggle('page-wrapper--sidebar-closed');

  // Eğer sidebar kapalıysa overlay açılacak açıksa kapanacak
  if (tab_port)
    elements.pageWrapper.classList.contains('page-wrapper--sidebar-closed')
      ? fadeOut(elements.overlay, { duration: 400 })
      : fadeIn(elements.overlay, { duration: 250 });

  // eSidebar.sidebarWrapper, elements.contentWrapper için margin.
  // eSidebar.sidebarIcon için transform animasyonu ekleniyor ve çıkartılıyor
  // kod tekrarı olmaması için gerekmesede tüm elementlere margin ve transform animasyonu eklenip ve çıkartılıyor
  [eSidebar.sidebarWrapper, elements.contentWrapper, eSidebar.sidebarIcon].forEach(e =>
    css_transition(e, {
      property: 'margin transform',
      dutation: '250ms',
      timingFunction: 'ease-in-out',
    })
  );
};

// Sidebar kullaniliyorsa calistirilacak kodlar
if (elements.pageWrapper.classList.contains('page-wrapper__has-sidebar')) {
  // Sidebar Toggle Butonu ve Overlay icin tiklama eventi
  [eSidebar.btnToggleSidebar, elements.overlay].forEach(element => element.addEventListener('click', slideSidebar));

  // sayfa 900px altına duserse sidebar kapaniyor
  eResponsive.tab_port.addEventListener('change', screenSizeCheck);

  // acilista sayfa 900px altindaysa sidebar kapatiliyor
  screenSizeCheck(eResponsive.tab_port);
}
