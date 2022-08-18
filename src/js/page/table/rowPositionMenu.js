import ifCorrectPage_DOMContentLoaded from '../../functions/ifCorrectPage_DOMContentLoaded';

export const toggle_rowPositionMenuManage_icon = manage_el => {
  manage_el.children.forEach(child => {
    child.classList.contains('rowPositionMenu__icon--hide')
      ? child.classList.remove('rowPositionMenu__icon--hide')
      : child.classList.add('rowPositionMenu__icon--hide');
  });
};

const closeAllOpened_rowPositionMenu__list = clickedList_el => {
  document.querySelectorAll('.rowPositionMenu__list').forEach(list_el => {
    if (clickedList_el !== list_el && !list_el.classList.contains('rowPositionMenu__list--hide')) {
      list_el.classList.add('rowPositionMenu__list--hide');
      toggle_rowPositionMenuManage_icon(list_el.parentElement.firstChild);
    }
  });
};

// Tüm Icon geçişleri için .rowPositionMenu__manage elementine animasyon ekleniyor
// Eğer bu animasyon css ile açılışta eklenseydi sayfa yenilemede kötü görünecekti
const setAllAnimation_rowPositionMenu_manage = () => {
  document.querySelectorAll('.rowPositionMenu__manage').forEach(manage_el => {
    const duration = 0.4;
    const transition_style = `transition: opacity ${duration}s, transform ${duration}s !important;`;

    manage_el.firstElementChild.setAttribute('style', transition_style);
    manage_el.lastElementChild.setAttribute('style', transition_style);
  });
};

const setAllAnimation_rowPositionMenu_list = () => {
  document.querySelectorAll('.rowPositionMenu__list').forEach(list_el => {
    const duration = 0.3;

    const transition_style = `
      transition-duration: ${duration}s;
      transition-timing-function: cubic-bezier(0.8, 0, 0.07, 1);
      transition-property: width, grid-gap, padding;`;

    list_el.setAttribute('style', transition_style);
  });
};

const tutorial_title = document.querySelector('.tutorial-title');

ifCorrectPage_DOMContentLoaded(tutorial_title, () => {
  // Animasyonlar yükleniyor
  setAllAnimation_rowPositionMenu_manage();
  setAllAnimation_rowPositionMenu_list();

  tutorial_title.addEventListener('click', cliced_el => {
    const rowPositionMenu_Manage = cliced_el.target.closest('.rowPositionMenu__manage');

    if (cliced_el.target.matches('.rowPositionMenu__manage, .rowPositionMenu__manage *')) {
      const rowPositionMenu_list = rowPositionMenu_Manage.parentElement.lastChild;

      // tıklanan dışında açık olan menüler kapanıyor
      closeAllOpened_rowPositionMenu__list(rowPositionMenu_list);

      // ikon menüsünün butonu değiştiriliyor
      toggle_rowPositionMenuManage_icon(rowPositionMenu_Manage);

      // liste açılıp kapanıyor
      rowPositionMenu_list.classList.contains('rowPositionMenu__list--hide')
        ? rowPositionMenu_list.classList.remove('rowPositionMenu__list--hide')
        : rowPositionMenu_list.classList.add('rowPositionMenu__list--hide');
    }
  });
});
