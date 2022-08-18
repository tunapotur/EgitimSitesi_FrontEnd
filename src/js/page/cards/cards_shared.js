import { eResponsive } from '../../elements';

export const visible_xCardsCount = () => {
  // prettier-ignore
  return eResponsive.phone_fold.matches ? 2
    : eResponsive.phone.matches ? 3
    : eResponsive.tab_port.matches ? 4
    : eResponsive.tab_land.matches ? 4
    : eResponsive.regular.matches ? 5
    : 6;
};

export const visible_aCardsCount = () => {
  // prettier-ignore
  return eResponsive.phone_fold.matches ? 1
    : eResponsive.phone.matches ? 1
    : eResponsive.tab_port.matches ? 2
    : eResponsive.tab_land.matches ? 3
    : eResponsive.regular.matches ? 4
    : 4;
};

export const screenSizeChange = fn => {
  eResponsive.big_desktop.addEventListener('change', fn);
  eResponsive.regular.addEventListener('change', fn);
  eResponsive.tab_land.addEventListener('change', fn);
  eResponsive.tab_port.addEventListener('change', fn);
  eResponsive.phone.addEventListener('change', fn);
  eResponsive.phone_fold.addEventListener('change', fn);
};

export const cards_list_lastElement_marginRight = (e, fn_visibleCardsCound) => {
  // tüm kartların sayısı. Örneğin 12
  const cards_list_childCount = e.childElementCount;

  // 1 satırda visibleCardsCound sayısı kadar kat gösterilecekse
  // örneğin 6 kart gösterilecekse bu fonksiyonu işletme
  if (cards_list_childCount > fn_visibleCardsCound()) {
    // 1 card genişliği
    const cardElementWidth = e.children[0].getBoundingClientRect().width;
    /**
     * Tüm karların sayısı görüntülenen kartların sayısına göre modu alınıyor,
     * remainder_cards_count sayısı bulunuyor
     * Örneğin Tüm Kartlar 12, görüntülenen 5, 12 % 5 = 2
     * remainder_cards_count = 2
     */
    const remainder_cards_count = cards_list_childCount % fn_visibleCardsCound();

    /**
     * Eğer kalan yoksa yani remainder_cards_count = 0 ise
     * boşluğu dolduracak kart sayısı 0 hesaplanıyor
     * kalan 0 değilse görüntülenen kart sayısından kalan kart sayısı çıkartılarak
     * boşluğu dolduracak kart sayısı hesaplanıyor
     * örneğin: 5 - 2 = 3
     */
    const filler_cards_count = remainder_cards_count === 0 ? 0 : fn_visibleCardsCound() - remainder_cards_count;

    // xCards_typePageList_lastElement için gereken margin right değeri giriliyor
    e.lastElementChild.style.marginRight = `${filler_cards_count * cardElementWidth}px`;
  }
};
