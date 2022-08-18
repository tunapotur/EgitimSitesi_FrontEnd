import ifCorrectPage from '../functions/ifCorrectPage';

ifCorrectPage(document.querySelector('.meter'), () => {
  document.querySelectorAll('.meter').forEach(el => {
    // elements
    const el_bar = el.firstElementChild,
      el_value = el_bar.firstElementChild;

    // Css color variables
    const colorRed = getComputedStyle(document.documentElement).getPropertyValue('--color-red'),
      colorOrange = getComputedStyle(document.documentElement).getPropertyValue('--color-orange');

    //Usage data
    let data_usage = Math.round(parseFloat(el_bar.getAttribute('data-usage')));

    // 0'dan küçük 100'den büyük değerlerin kontrolü yapılıyor
    if (data_usage <= 0) {
      el_bar.setAttribute('data-usage', '0');
      el_value.style.width = 0 + '%';
    } else if (data_usage >= 100) {
      el_bar.setAttribute('data-usage', '100');
      el_value.style.width = 100 + '%';
    } else {
      el_bar.setAttribute('data-usage', data_usage);
      el_value.style.width = data_usage + '%';
    }

    // Recheck data
    data_usage = Math.round(parseFloat(el_bar.getAttribute('data-usage')));

    if (data_usage >= 50 && data_usage < 75) el_value.style.backgroundColor = colorOrange;
    else if (data_usage >= 75 && data_usage <= 100) el_value.style.backgroundColor = colorRed;
  });
});
