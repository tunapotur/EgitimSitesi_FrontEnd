import ifCorrectPage from '../../functions/ifCorrectPage';

const tableCardTransition = document.querySelector('.table-card-transition');

ifCorrectPage(tableCardTransition, () => {
  tableCardTransition.addEventListener('click', () => {
    const table = document.querySelector('.table-card-transition__table'),
      cards = document.querySelector('.table-card-transition__cards'),
      grTable = document.querySelector('.grTable'),
      class_grTable_card = 'grTable--card',
      classHide = 'table-card-transition--icon-hide',
      table_display = getComputedStyle(table).display === 'block' ? true : false,
      cards_display = getComputedStyle(cards).display === 'block' ? true : false;

    if (table_display) {
      table.classList.add(classHide);
      cards.classList.remove(classHide);
      grTable.classList.remove(class_grTable_card);
    } else if (cards_display) {
      table.classList.remove(classHide);
      cards.classList.add(classHide);
      grTable.classList.add(class_grTable_card);
    }
  });
});
