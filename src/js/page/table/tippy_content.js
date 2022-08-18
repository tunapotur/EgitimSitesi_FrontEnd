import tippy from 'tippy.js';

const rsTable_wrapper = document.querySelectorAll('.rsTable-wrapper');

if (rsTable_wrapper.length >= 1) {
  rsTable_wrapper.forEach(el => {
    el.querySelectorAll('[data-tippy-content]').forEach(e => {
      tippy(e, { delay: [2000, null], touch: false });
    });
  });
}
