import ifCorrectPage from '../../functions/ifCorrectPage';
import { slideDown, slideUp, isVisible } from 'slide-anim';

const tableContentManage = document.querySelector('.table-header');

ifCorrectPage(tableContentManage, () => {
  const tableContentManage_openSubMenu_icon = document.querySelector('.table-header__open-sub-menu.btn-icon'),
    table_query = document.querySelector('.table-query');

  tableContentManage_openSubMenu_icon.addEventListener('click', () => {
    !isVisible(table_query)
      ? slideDown(table_query, {
          display: 'grid',
        })
      : slideUp(table_query);
  });
});
