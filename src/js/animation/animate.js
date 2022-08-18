const animate = ({ duration, operation, timing, cancelOperation = null }) => {
  return new Promise(resolve => {
    let time_start;
    // rAF fonksiyonu durdurulmak isteniyorsa kullanılacak değişken
    let globalID;

    requestAnimationFrame(function step(time_stamp) {
      // ilk anda başlangıç zamanı (time_start) tanımsız olduğundan
      // anlık zaman (time_stamp) başlangıç zamanına eşitleniyor
      // time_stamp time_star'dan daha ileride
      // time_stamp rAF'den gelen performs.Now() metodunu ürettiği zaman değerini alıyor
      if (time_start === undefined) time_start = time_stamp;

      // ilk duruda (başlangıçta) geçen süre 0
      let time_elapsed = time_stamp - time_start;

      // sürenin(duration) tamamlanma kesri(time_fraction)
      // sürenin kaçta kaçının kaldığını veriyor
      // 1 olduğunda sürenin %100'üne ulaştığı anlaşılıyor
      let time_fraction = Math.min(time_elapsed / duration, 1);

      // Kalan süreye göre timing fonksiyonuyla ease animasyonu hesaplanıyor
      let progress = timing(time_fraction);

      // alınan progress değeriyle işlemler çalıştırılıyor
      operation(progress); // operation it

      time_fraction < 1 ? (globalID = requestAnimationFrame(step)) : resolve();

      // Eğer animate işleminde durdurma yapılacaksa kullanılacak fonksiyon
      if (typeof cancelOperation === 'function') cancelOperation(globalID);
    });
  });
};

/*
const animate_eski = ({ duration, operation, timing }) => {
  let time_start;

  requestAnimationFrame(function step(time_stamp) {
    // ilk anda başlangıç zamanı (time_start) tanımsız olduğundan
    // anlık zaman (time_stamp) başlangıç zamanına eşitleniyor
    // time_stamp time_star'dan daha ileride
    // time_stamp rAF'den gelen performs.Now() metodunu ürettiği zaman değerini alıyor
    if (time_start === undefined) time_start = time_stamp;

    // ilk duruda (başlangıçta) geçen süre 0
    let time_elapsed = time_stamp - time_start;

    // sürenin(duration) tamamlanma kesri(time_fraction)
    // sürenin kaçta kaçının kaldığını veriyor
    // 1 olduğunda sürenin %100'üne ulaştığı anlaşılıyor
    let time_fraction = Math.min(time_elapsed / duration, 1);

    // Kalan süreye göre timing fonksiyonuyla ease animasyonu hesaplanıyor
    let progress = timing(time_fraction);

    // alınan progress değeriyle işlemler çalıştırılıyor
    operation(progress); // operation it

    if (time_fraction < 1) requestAnimationFrame(step);
  });
};
 */

export default animate;
