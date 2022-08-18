import css_transition from '../../animation/css_transition';

const all_frmGroup_slide = document.querySelectorAll('.frmGroup-slider');

if (all_frmGroup_slide)
  all_frmGroup_slide.forEach(el => {
    const frmGroup_slide = el,
      frmGroup_slide__buttons = frmGroup_slide.firstChild,
      frmGroup_slide__overlay = frmGroup_slide__buttons.children[0],
      frmGroup_slide__left_btn = frmGroup_slide__buttons.children[1],
      frmGroup_slide__right_btn = frmGroup_slide__buttons.children[2],
      frmGroup_slide__carousel = frmGroup_slide.lastElementChild;

    const duration = 500;

    frmGroup_slide__left_btn.addEventListener('click', () => {
      frmGroup_slide__overlay.classList.remove('frmGroup-slider__overlay--transition');
      frmGroup_slide__carousel.classList.remove('frmGroup-slider__carousel--transition');

      css_transition(frmGroup_slide__overlay, {
        property: 'transform',
        duration: `${duration}ms`,
        timingFunction: 'ease-in-out',
      });

      css_transition(frmGroup_slide__carousel, {
        property: 'transform',
        duration: `${duration}ms`,
        timingFunction: 'ease-in-out',
      });
    });

    frmGroup_slide__right_btn.addEventListener('click', () => {
      frmGroup_slide__overlay.classList.add('frmGroup-slider__overlay--transition');
      frmGroup_slide__carousel.classList.add('frmGroup-slider__carousel--transition');

      css_transition(frmGroup_slide__overlay, {
        property: 'transform',
        duration: `${duration}ms`,
        timingFunction: 'ease-in-out',
      });

      css_transition(frmGroup_slide__carousel, {
        property: 'transform',
        duration: `${duration}ms`,
        timingFunction: 'ease-in-out',
      });
    });

    document.addEventListener('DOMContentLoaded', () => {
      const form1_height = frmGroup_slide__carousel.children[0].getBoundingClientRect().height;
      const form2_height = frmGroup_slide__carousel.children[1].getBoundingClientRect().height;

      // prettier-ignore
      const formHeight =
        form1_height === form2_height ? form1_height 
        : form1_height >= form2_height ? form1_height 
        : form2_height;

      const frmGroup_slide_height =
        frmGroup_slide__buttons.getBoundingClientRect().height +
        parseInt(getComputedStyle(frmGroup_slide__buttons).marginBottom) +
        formHeight;

      frmGroup_slide.style.height = Math.ceil(frmGroup_slide_height) + 'px';
    });
  });
