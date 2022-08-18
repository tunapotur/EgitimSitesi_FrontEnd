import { visible_xCardsCount, screenSizeChange } from './cards_shared';
import ifCorrectPage_DOMContentLoaded from '../../functions/ifCorrectPage_DOMContentLoaded';

const all_xCardsGroup_window = Array.from(document.querySelectorAll('.xCards-group__window')),
  all_xCardsGroup_buttonLeft = Array.from(document.querySelectorAll('.xCards-group__button--left')),
  all_xCardsGroup_buttonRight = Array.from(document.querySelectorAll('.xCards-group__button--right'));

const element_width = e => e.getBoundingClientRect().width;
const viewableCarouselCount = e => element_width(e.firstElementChild) / element_width(e);
const scrolled = e => e.scrollLeft % element_width(e);

const getAll_xCardsGroup_carouselGroupIcon = e =>
  Array.from(e.parentElement.querySelector('.xCards-group__carousel-group-icons').children);

const activeIconPosition = el =>
  getAll_xCardsGroup_carouselGroupIcon(el).indexOf(
    el.parentElement.querySelector('.xCards-group__carousel-group-icon--active')
  );

const removeActiveIcon = el =>
  el.parentElement
    .querySelector('.xCards-group__carousel-group-icon--active')
    .classList.remove('xCards-group__carousel-group-icon--active');

const setActiveIcon = (el, position) => {
  removeActiveIcon(el);
  getAll_xCardsGroup_carouselGroupIcon(el)[position].classList.add('xCards-group__carousel-group-icon--active');
  xCardsButtons_config(el);
};

const addAll_xCardsGroupCarousel_paddingRightValue = () => {
  all_xCardsGroup_window.forEach(e => {
    // Her Ekran responsiveBreakPoint geçişlerinde wrapper scrollunu en başa getir
    e.scrollLeft = 0;

    /**
     * xCardsWrapper'da bulunan tüm kartların sayısı. Örneğin 12
     * Tüm karların sayısı görüntülenen kartların sayısına göre modu alınıyor,
     * remainder_xCards_count sayısı bulunuyor
     * Örneğin Tüm Kartlar 12, görüntülenen 5, 12 % 5 = 2
     * remainder_xCards_count = 2
     */
    const remainder_xCards_count = e.firstElementChild.childElementCount % visible_xCardsCount();

    /**
     * Eğer kalan yoksa yani remainder_xCards_count = 0 ise
     * boşluğu dolduracak kart sayısı 0 hesaplanıyor
     * kalan 0 değilse görüntülenen kart sayısından kalan kart sayısı çıkartılarak
     * boşluğu dolduracak kart sayısı hesaplanıyor
     * örneğin: 5 - 2 = 3
     */
    const filler_xCards_count = remainder_xCards_count === 0 ? 0 : visible_xCardsCount() - remainder_xCards_count;

    // xcards__carousel için gereken padding right değeri giriliyor
    e.firstElementChild.style.paddingRight = `${
      filler_xCards_count * element_width(document.querySelector('.xCard').parentElement)
    }px`;
  });
};

const render_xCardsGroup_carouselGroupIcons = async el => {
  // const xCardsCarouselLocation = el.nextElementSibling.nextElementSibling;
  // yerine alttaki kullanılabilir. Önce parent'e çık sonra gereken elementi ara
  const xCardsGroup_carouselGroupIcons = el.parentElement.querySelector('.xCards-group__carousel-group-icons');

  // önceden bulunan tüm li.xCards-group__carousel-group-icon elemenleri kaldırılıyor
  await Promise.all(Array.from(xCardsGroup_carouselGroupIcons.children).map(e => e.remove()));

  // görüntülenen kart grubu 1'den çoksa xCards_carouselGroupIcon'ları render et
  if (viewableCarouselCount(el) > 1) {
    xCardsGroup_carouselGroupIcons.style.display = 'flex';

    // carousel grubu kadar ikon bastırılıyor
    for (let i = 0; i < viewableCarouselCount(el); i++) {
      xCardsGroup_carouselGroupIcons.insertAdjacentHTML(
        'afterbegin',
        '<li class="xCards-group__carousel-group-icon"></li>'
      );
    }

    // Sayfa açıldığında tüm cardlar en başa ayarlı olduğu için ilk carousel grubu active edilir
    xCardsGroup_carouselGroupIcons.firstElementChild.classList.add('xCards-group__carousel-group-icon--active');
  } else {
    xCardsGroup_carouselGroupIcons.style.display = 'none';
  }
};

const xCardsButtons_config = el => {
  const xCardsGroupButtons = el.parentElement.querySelector('.xCards-group__buttons');

  if (viewableCarouselCount(el) > 1) {
    xCardsGroupButtons.style.display = 'flex';
    if (el.scrollLeft === 0) {
      xCardsGroupButtons.firstElementChild.style.display = 'none';
      xCardsGroupButtons.lastElementChild.style.display = 'flex';
    } else if (el.scrollLeft === element_width(el.firstElementChild) - element_width(el)) {
      xCardsGroupButtons.firstElementChild.style.display = 'flex';
      xCardsGroupButtons.lastElementChild.style.display = 'none';
    } else {
      xCardsGroupButtons.firstElementChild.style.display = 'flex';
      xCardsGroupButtons.lastElementChild.style.display = 'flex';
    }
  } else {
    xCardsGroupButtons.style.display = 'none';
  }
};

const config_page = async () => {
  addAll_xCardsGroupCarousel_paddingRightValue();

  all_xCardsGroup_window.forEach(async e => {
    await render_xCardsGroup_carouselGroupIcons(e);
    xCardsButtons_config(e);
  });
};

// ** Events

ifCorrectPage_DOMContentLoaded(document.querySelector('.xCards-group'), async () => {
  await config_page();
  let firstScrollPosition = 0;

  // Scroll işlemlerinde yapılan event
  all_xCardsGroup_window.forEach(el => {
    // .xcards__carousel-group-icon'ları üzerinde yapılan tıklamalar
    el.parentElement.addEventListener('click', element => {
      if (element.target.matches('.xCards-group__carousel-group-icon, .xCards-group__carousel-group-icon *'))
        el.scrollLeft = getAll_xCardsGroup_carouselGroupIcon(el).indexOf(element.target) * element_width(el);
    });

    el.addEventListener('scroll', () => {
      /* 
       scroll hareketi olduğunda;
       scroll pozisyonu bir carusel uzunluğuna bölünüyor
       tam sayı olduğunda ileri bir carusel hareketi yapılmış oluyor
       */
      const scroll_position = el.scrollLeft / element_width(el),
        floor_scroll_position = Math.floor(scroll_position),
        ceil_scroll_position = Math.ceil(scroll_position);

      // ilgili 'li.xcards__carousel-group-icon' aktif ediliyor
      if (firstScrollPosition < scroll_position) {
        if (floor_scroll_position !== activeIconPosition(el)) {
          setActiveIcon(el, floor_scroll_position);
        }
      } else {
        if (ceil_scroll_position !== activeIconPosition(el)) {
          setActiveIcon(el, ceil_scroll_position);
        }
      }

      firstScrollPosition = scroll_position;
    });
  });

  // Ekran değiştiğinde çalışan eventler
  screenSizeChange(config_page);

  // Sol tıklama butonu
  all_xCardsGroup_buttonLeft.forEach(e => {
    e.addEventListener('click', () => {
      const xCardsWrapper = e.parentElement.previousElementSibling;
      scrolled(xCardsWrapper) === 0
        ? (xCardsWrapper.scrollLeft -= element_width(xCardsWrapper))
        : (xCardsWrapper.scrollLeft -= scrolled(xCardsWrapper));
    });
  });

  // Sağ tıklama butonu
  all_xCardsGroup_buttonRight.forEach(e => {
    e.addEventListener('click', () => {
      const xCardsWrapper = e.parentElement.previousElementSibling;
      xCardsWrapper.scrollLeft += element_width(xCardsWrapper) - scrolled(xCardsWrapper);
    });
  });
});
