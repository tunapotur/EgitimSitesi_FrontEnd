import ifCorrectPage from '../../functions/ifCorrectPage';

const tableContentSearch = document.querySelector('.table-content-search');
const hideIconClass = 'table-content-search__icon--hide';

const toggle_tableContentSearch_icon = manage_el => {
  manage_el.children.forEach(child => {
    child.classList.contains(hideIconClass)
      ? child.classList.remove(hideIconClass)
      : child.classList.add(hideIconClass);
  });
};

// Eğer bu animasyon css ile açılışta eklenseydi sayfa yenilemede kötü görünecekti
const setAllAnimation_tableContentSearch_icon = () => {
  const duration = 0.4;
  const transition_style = `transition: opacity ${duration}s, transform ${duration}s !important;`;

  tableContentSearch.firstElementChild.firstElementChild.setAttribute('style', transition_style);
  tableContentSearch.firstElementChild.lastElementChild.setAttribute('style', transition_style);
};

const getWidth = el => el.getBoundingClientRect().width;

ifCorrectPage(tableContentSearch, () => {
  const tableHeader = document.querySelector('.table-header'),
    tableContentSearch = tableHeader.querySelector('.table-content-search'),
    tableContentSearchInput = document.querySelector('.table-content-search__input'),
    tableContentSearchIcon = document.querySelector('.table-content-search__icons');

  setAllAnimation_tableContentSearch_icon();

  const get_input_style = () => {
    let tableContentSearchInput_width = 0;

    tableContentSearchInput_width = getWidth(tableHeader) - getWidth(tableContentSearch);

    const tableContentSearchInput_Attribute = `
      padding-left: 1rem;
      width: ${tableContentSearchInput_width}px;
      border: 1px solid var(--black-200);`;

    return tableContentSearchInput_Attribute;
  };

  tableContentSearchIcon.addEventListener('click', () => {
    toggle_tableContentSearch_icon(tableContentSearch.firstElementChild);
    const tableContentSearchForm = document.querySelector('.table-content-search__form');

    const tableRows = Array.from(document.querySelectorAll('.grTable__row'));

    tableContentSearchForm.style.right = `${getWidth(tableContentSearch)}px`;

    if (getWidth(tableContentSearchInput) === 0) {
      tableContentSearchInput.setAttribute('style', get_input_style());
      tableContentSearchInput.focus();
    } else {
      tableContentSearchInput.removeAttribute('style', get_input_style());

      tableContentSearchInput.value = '';
      tableRows.forEach(el => {
        if (el.style.display === 'none') el.style.display = 'grid';
      });
    }
  });

  window.addEventListener('resize', () => {
    const tableRows = Array.from(document.querySelectorAll('.grTable__row'));

    if (getWidth(tableContentSearchInput) > 0) {
      tableContentSearch.firstElementChild.firstElementChild.classList.remove(hideIconClass);
      tableContentSearch.firstElementChild.lastElementChild.classList.add(hideIconClass);

      tableContentSearchInput.removeAttribute('style', get_input_style());

      tableContentSearchInput.value = '';
      tableRows.forEach(el => {
        if (el.style.display === 'none') el.style.display = 'grid';
      });
    }
  });

  tableContentSearchInput.addEventListener('keyup', e => {
    const inputText = e.target.value.toLowerCase();
    const tableRows = Array.from(document.querySelectorAll('.grTable__row'));

    // Başlık satırı kaldırılıyor
    tableRows.splice(0, 1);

    tableRows.forEach(el => {
      const titleText = el.querySelector('.grTable__title').firstElementChild.innerText.toLowerCase();

      if (titleText.indexOf(inputText) === -1) el.style.display = 'none';
      else el.style.display = 'grid';
    });
  });
});
