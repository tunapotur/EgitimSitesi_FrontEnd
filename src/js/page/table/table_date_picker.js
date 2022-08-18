const tableQuery_filter = document.querySelector('.table-query__filter'),
  tableQuery_files = document.querySelector('.table-query__files');

if (tableQuery_filter && tableQuery_files) {
  const filterDateRange_created = document.getElementById('filterDateCreatedRange'),
    filterDateRange_updated = document.getElementById('filterDateUpdatedRange');

  const options = {
    clearBtn: 1,
    todayBtn: 1,
    calendarWeeks: 1,
    allowOneSidedRange: 1,
    format: 'dd/mm/yyyy',
    orientation: 'bottom auto',
    language: 'tr',
  };

  /*eslint-disable */
  const datePicker_filterDateRange_created = new DateRangePicker(filterDateRange_created, options);
  const datePicker_filterDateRange_updated = new DateRangePicker(filterDateRange_updated, options);
  /*eslint-enable */
}
