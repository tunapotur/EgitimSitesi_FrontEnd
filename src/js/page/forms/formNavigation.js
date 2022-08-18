import { eResponsive } from '../../elements';

const all_frmNav__link = Array.from(document.querySelectorAll('.frmNav__link')),
  frmNav__forward = document.querySelector('.frmNav__btn-forward'),
  frmNav__backward = document.querySelector('.frmNav__btn-backward');
// frmGroup_wrapper = document.querySelector('.frmGroup-wrapper');

const setElementActiveLink = el => {
  const frmNavLink_active = document.querySelector('.frmNav__link--active');
  if (frmNavLink_active) frmNavLink_active.classList.remove('frmNav__link--active');
  el.classList.add('frmNav__link--active');
};

const setActiveLink = () => {
  // Eğer url üzerinde hiçbir hash değeri yoksa listenin en başındaki elementi aktif yap
  if (!window.location.hash) all_frmNav__link[0].classList.add('frmNav__link--active');
  else
    all_frmNav__link.forEach(el => {
      if (el.hash === window.location.hash) el.classList.add('frmNav__link--active');
    });
};

// Navigasyon linlerinin renklerinin değişimi phone ekran düzeninde çalışmasın
const screenSizeCheck = element => {
  if (element.matches) {
    document.removeEventListener('DOMContentLoaded', setActiveLink);
    all_frmNav__link.forEach(el => el.removeEventListener('click', setElementActiveLink.bind(null, el)));
  } else {
    document.addEventListener('DOMContentLoaded', setActiveLink);
    all_frmNav__link.forEach(el => el.addEventListener('click', setElementActiveLink.bind(null, el)));
  }
};

if (document.querySelector('.frmNav')) {
  let formPosition = 0;

  // Tıklanan navigasyon elementinin konumu alınıyor
  all_frmNav__link.forEach(el =>
    el.addEventListener('click', element => {
      formPosition = all_frmNav__link.indexOf(element.target);
    })
  );

  frmNav__backward.addEventListener('click', () => {
    --formPosition;
    // sınır 0
    if (formPosition < 0) formPosition = 0;

    all_frmNav__link[formPosition].click();
  });

  frmNav__forward.addEventListener('click', () => {
    ++formPosition;
    // sınır en son eleman
    if (formPosition > all_frmNav__link.length - 1) formPosition = all_frmNav__link.length - 1;

    all_frmNav__link[formPosition].click();
  });

  screenSizeCheck(eResponsive.phone);

  eResponsive.phone.addEventListener('change', screenSizeCheck);
}

// * Scroll edildiğinde menü elemanlarının rengini değiştiren kod
/*
  const setElementPosition = el => {
    document.querySelector('.frmNav__link--position').classList.remove('frmNav__link--position');
    el.classList.add('frmNav__link--position');
  };

  document.addEventListener('scroll', () => {
    all_frmNav__link.forEach(el => {
      const relatedElement = document.getElementById(el.hash.replace('#', '')),
        relatedElement_offsetTop = relatedElement.offsetTop;

      if (document.documentElement.scrollTop >= relatedElement_offsetTop) {
        setElementPosition(el);
      }
    });
  });
 */
