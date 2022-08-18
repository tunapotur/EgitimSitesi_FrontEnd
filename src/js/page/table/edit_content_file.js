import ifCorrectPage from '../../functions/ifCorrectPage';

const tableHeader_filesUpload = document.querySelector('.table-header__files-upload');

ifCorrectPage(tableHeader_filesUpload, () => {
  const grTable = document.querySelector('.grTable');

  let title, titleLink, titleLink_text, titleLink_href, titleTextarea;

  grTable.addEventListener('click', el => {
    const btnGrTable_edit = el.target.closest('.grTable__edit > .btn-icon'),
      btnGrTable_saveCloseEdit = el.target.closest('.grTable__save-close-edit > .btn-icon'),
      btnGrTable_delete = el.target.closest('.grTable__delete > .btn-icon');

    // Edit butonuna tıklandığında
    if (el.target.matches('.grTable__edit .btn-icon, .grTable__edit .btn-icon *')) {
      const grTable_edit = btnGrTable_edit.parentElement,
        grTable_saveCloseEdit = grTable_edit.nextElementSibling;

      // edit butonundan save butonuna geçiliyor
      if (grTable_saveCloseEdit.style.display === 'none') {
        grTable_edit.style.display = 'none';
        grTable_saveCloseEdit.style.display = '';
      }

      title = grTable_edit.parentElement.querySelector('.grTable__title');
      titleLink = title.firstElementChild;
      titleLink_text = titleLink.innerText;
      titleLink_href = titleLink.href;

      titleLink.remove();
      title.insertAdjacentHTML(
        'afterbegin',
        `<textarea class="grTable__title-edit" name="search">${titleLink_text}</textarea>`
      );

      titleTextarea = title.firstElementChild;
      title.classList.add('grTable__title--edit');
    }

    // Save butonuna tıklandığında
    if (el.target.matches('.grTable__save-close-edit .btn-icon, .grTable__save-close-edit .btn-icon *')) {
      const grTable_saveCloseEdit = btnGrTable_saveCloseEdit.parentElement,
        grTable_edit = grTable_saveCloseEdit.previousElementSibling;

      // save butonundan edit butonuna geçiliyor
      if (grTable_edit.style.display === 'none') {
        grTable_edit.style.display = '';
        grTable_saveCloseEdit.style.display = 'none';
      }

      titleTextarea.remove();
      title.classList.remove('grTable__title--edit');
      title.insertAdjacentHTML(
        'afterbegin',
        `<a class="grTable__link" href="${titleLink_href}">${titleTextarea.value}</a>`
      );
    }

    // Delete butonuna tıklandığında
    if (el.target.matches('.grTable__delete .btn-icon, .grTable__delete .btn-icon *')) {
      btnGrTable_delete.parentElement.parentElement.remove();
    }
  });
});
