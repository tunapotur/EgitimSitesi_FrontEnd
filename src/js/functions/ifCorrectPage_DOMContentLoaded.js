const ifCorrectPage_DOMContentLoaded = (el, fn) => {
  if (el) window.addEventListener('DOMContentLoaded', fn);
};

export default ifCorrectPage_DOMContentLoaded;
