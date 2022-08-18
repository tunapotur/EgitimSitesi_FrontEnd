import ifCorrectPage from '../../functions/ifCorrectPage';
import { slideDown, slideUp, isVisible } from 'slide-anim';
import { toggle_rowPositionMenuManage_icon } from './rowPositionMenu';

const tutorialHeader = document.querySelector('.tutorial-title');

ifCorrectPage(tutorialHeader, () => {
  //   const tutorialHeader_openSubTitles = document.querySelector('.tutorial-title__open-sub-titles');

  tutorialHeader.addEventListener('click', cliced_el => {
    const clicked_tutorialHeader_openSubTitles = cliced_el.target.closest('.tutorial-title__open-sub-titles');

    if (cliced_el.target.matches('.tutorial-title__open-sub-titles, .tutorial-title__open-sub-titles *')) {
      // Açık rowPositionMenu varsa kapanıyor
      document.querySelectorAll('.rowPositionMenu__list').forEach(list_el => {
        if (!list_el.classList.contains('rowPositionMenu__list--hide')) {
          list_el.classList.add('rowPositionMenu__list--hide');
          toggle_rowPositionMenuManage_icon(list_el.parentElement.firstChild);
        }
      });

      const tutorialHeader_editTitle = clicked_tutorialHeader_openSubTitles.parentElement.parentElement,
        tutorialHeader_subTitle = tutorialHeader_editTitle.nextElementSibling,
        openSubTitle_icon = clicked_tutorialHeader_openSubTitles.firstElementChild;

      if (isVisible(tutorialHeader_subTitle)) {
        slideUp(tutorialHeader_subTitle);
        tutorialHeader_subTitle.style.borderTop = 'none';
        openSubTitle_icon.setAttributeNS('http://www.w3.org/1999/xlink', 'xlink:href', 'img/svg/icons.svg#folder');
      } else {
        tutorialHeader_subTitle.style.borderTop = '';
        openSubTitle_icon.setAttributeNS('http://www.w3.org/1999/xlink', 'xlink:href', 'img/svg/icons.svg#folder-open');
        slideDown(tutorialHeader_subTitle);
      }
    }
  });
});
