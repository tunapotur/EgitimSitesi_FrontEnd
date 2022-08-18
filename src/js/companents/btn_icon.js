import ifCorrectPage from '../functions/ifCorrectPage';
import css_transition from '../animation/css_transition';

ifCorrectPage(document.querySelector('.btn-icon'), () => {
  const all_rotateIcon = document.querySelectorAll('.btn-icon--rotate-180');

  all_rotateIcon.forEach(iconWrapper => {
    const icon = iconWrapper.firstElementChild;

    iconWrapper.addEventListener('click', () => {
      !icon.classList.contains('btn-icon__icon--rotate-180')
        ? icon.classList.add('btn-icon__icon--rotate-180')
        : icon.classList.remove('btn-icon__icon--rotate-180');

      css_transition(icon, {
        property: 'transform',
        dutation: '200ms',
        timingFunction: 'ease-in-out',
      });
    });
  });
});
