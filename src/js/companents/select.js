import ifCorrectPage from '../functions/ifCorrectPage';

ifCorrectPage(document.querySelector('.frmGroup__select'), () => {
  const all_select = document.querySelectorAll('.frmGroup__select');

  all_select.forEach(select => {
    if (select.value == 'default') select.classList.add('frmGroup__select--default');

    select.addEventListener('change', () => {
      select.value == 'default'
        ? select.classList.add('frmGroup__select--default')
        : select.classList.remove('frmGroup__select--default');
    });
  });
});
