import tippy from 'tippy.js';

import { eSidebar, sSidebar } from '../../elements';
import { fadeIn, fadeOut } from '../../animation/fade';
import { slideDown, slideUp, isVisible } from 'slide-anim';
import scrollTo from '../../animation/scrollTo';
import css_transition from '../../animation/css_transition';
import limitTitle from '../../functions/limitTitle';

class SidebarOparations {
  constructor() {
    //Variables
    /*eslint-disable */
    this._simpleBar = new SimpleBar(eSidebar.sidebarLinks);
    /*eslint-enable */

    // Sidebar metinleri kısaltılıyor
    this.textOutOfBounds(eSidebar.sbTitleText, 35);
    eSidebar.all_sbLinksGroupText.forEach(groupText => this.textOutOfBounds(groupText, 32));
    eSidebar.all_sbLinkText.forEach(linkText => this.textOutOfBounds(linkText, 45));

    // Butonlar üzerindeki tooltip açıklamalarını göster
    tippy('[data-tippy-content]', { delay: [1000, null], touch: ['hold', 1000] });

    // Aktif linke göre sidebar set edeliyor
    this.activeLink_setPosition();
  }

  get simpleBartScrollElement() {
    return this._simpleBar.getScrollElement();
  }

  //   get sbLinksGroupActive_height() {
  //     // Aktif linkin bulunduğu sbLinksGroup title uzunluğu ve linklerin toplam uzunluğu toplanıyor
  //     // Atif sbLinksGroup altındaki linklerin sayısı
  //     // 1 adet link(o da aktif link) uzunluğuna çarpılarak
  //     // linklerin toplam uzunluğu bulunuyor
  //     return this._sbLinksActive.childElementCount * this.heights.sbLinkHrefActive + this.heights.sbLinksGroupTitleActive;
  //   }

  //   get sbLinkActive_index() {
  //     return Array.from(this._sbLinksActive.children).findIndex(element =>
  //       element.firstElementChild.classList.contains(this._sbLinkHrefActiveClass)
  //     );
  //   }

  // Sidebar üzerinde bulunan metinleri kısaltan fonksiyon
  textOutOfBounds = (element, limit) => {
    const elementText = element.innerHTML;

    if (elementText.replaceAll(' ', '').length > limit) {
      tippy(element, {
        content: elementText,
        placement: 'right',
      });

      element.innerHTML = limitTitle(element.innerHTML, limit);
    }
  };

  sbLinksGroupTitleIcon_rotate = (element, duration = 0) => {
    // Tıklanan başlığın ikonu aşağıya doğru döndürülüyor
    element.classList.toggle('sb-links-group__icon--rotate');

    if (duration > 0)
      css_transition(element, {
        property: 'transform',
        duration: `${duration}ms`,
        timingFunction: 'ease-in-out',
      });
  };

  sbLinksGroupTitle_toggle = async (element, slideDuration = 0, rotateDuration = 0) => {
    this.sbLinksGroupTitleIcon_rotate(element.firstElementChild, slideDuration, rotateDuration);

    // Tıklanan grup title elmenti kardeş olan link grubu açılıyor
    isVisible(element.nextElementSibling)
      ? await slideUp(element.nextElementSibling, { duration: slideDuration })
      : await slideDown(element.nextElementSibling, {
          display: 'flex',
          duration: slideDuration,
        });
  };

  btnSidebarScrollTop_show = () => {
    const btnSidebarScrollTop_display = eSidebar.btnSidebarScrollTop.style.display;

    // console.log('Scroll: ', this.simpleBartScrollElement.scrollTop);

    if (this.simpleBartScrollElement.scrollTop >= 15) {
      if (btnSidebarScrollTop_display != 'flex')
        fadeIn(eSidebar.btnSidebarScrollTop, {
          duration: 400,
          opacity: 0.5,
          timing: 'easeIn',
          display: 'flex',
        });
    } else {
      if (btnSidebarScrollTop_display === 'flex')
        fadeOut(eSidebar.btnSidebarScrollTop, { duration: 500, timing: 'easeOut' });
    }
  };

  activeLink_setPosition = async () => {
    if (eSidebar.sbLinkHrefActive) {
      // Aktif linkin bulunduğu sbLinksGroup elementi
      const sbLinksGroupActive = eSidebar.sbLinkHrefActive.parentElement.parentElement.parentElement;

      // link görüntüsü aktif hale getiriliyor
      eSidebar.sbLinkHrefActive.classList.add(sSidebar.sbLinkHrefActive.replace('.', ''));

      // Aktif linkin grubu başlığı ikonu döndürülüyor. Bu işlem sürecinde diğer kodlar bekletiliyor.
      await this.sbLinksGroupTitle_toggle(sbLinksGroupActive.firstElementChild);

      eSidebar.sbLinkHrefActive.scrollIntoView({ behavior: 'smooth', block: 'center' });

      /** Eski daha zor olan çözüm. Linkin bulunduğu başlık en başa getiriliyor
       * // Bu tanımların await işleminden sonra yapılması gerek
       * // Tüm linklerin olduğu sidebarLinks uzunluğu
       * const sidebarLinksHeight = eSidebar.sidebarLinks.getBoundingClientRect().height,
       * // Aktif linkin bulunduğu grup uzunluğu
       * sbLinksGroupActiveHeight = sbLinksGroupActive.getBoundingClientRect().height;
       * sidebarLinksHeight > sbLinksGroupActiveHeight
       * ? sbLinksGroupActive.firstElementChild.scrollIntoView({ behavior: 'smooth', block: 'start' })
       * : eSidebar.sbLinkHrefActive.scrollIntoView({ behavior: 'smooth', block: 'center' });
       */
    }
  };

  sbLinksGroupTitle_click = e => {
    // Sidebar Links içinde tıklanan alan içinde bulunan sidebar group title elementi alanıyor
    const sbLinksGroupTitle_clicked = e.target.closest(sSidebar.sbLinksGroupTitle);

    // Eğer tıklama sidebar grup title ve altındaki elementler(icon, text) üzerinde yapıldıysa
    if (e.target.matches(sSidebar.sbLinksGroupTitleAll))
      this.sbLinksGroupTitle_toggle(sbLinksGroupTitle_clicked, 400, 250);
  };

  sidebarLinks_open = async () => {
    scrollTo(this.simpleBartScrollElement);

    await Promise.all(
      eSidebar.all_sbLinksGroupLinks.map(async sbLinksGroupLinks => {
        // Eğer sbLinksGroupLinks kapalıysa aç
        if (!isVisible(sbLinksGroupLinks)) {
          this.sbLinksGroupTitleIcon_rotate(sbLinksGroupLinks.previousElementSibling.firstElementChild, 400);
          await slideDown(sbLinksGroupLinks, { display: 'flex', duration: 500 });
        }
      })
    );
  };

  sidebarLinks_close = async () => {
    scrollTo(this.simpleBartScrollElement);

    await Promise.all(
      eSidebar.all_sbLinksGroupLinks.map(async sbLinksGroupLinks => {
        // Eğer sbLinksGroupLinks açıksa kapat
        if (isVisible(sbLinksGroupLinks)) {
          this.sbLinksGroupTitleIcon_rotate(sbLinksGroupLinks.previousElementSibling.firstElementChild, 400);
          await slideUp(sbLinksGroupLinks, { duration: 500 });
        }
      })
    );
  };

  sidebarLinks_default = async () => {
    await this.sidebarLinks_close();
    this.activeLink_setPosition();
  };

  sidebarLinks_search = async e => {
    const inputText = e.target.value.toLowerCase();
    scrollTo(this.simpleBartScrollElement);

    // Sırasıyla tüm sbLinksGroup(başlık ve linkler) elemenleri üzerinde işlemler yapılıyor
    await Promise.all(
      eSidebar.all_sbLinksGroup.map(async sbLinksGroup => {
        // Eğer sbLinksGroup linkleri kapalıysa aç
        if (!isVisible(sbLinksGroup.lastElementChild)) {
          // const sbLinksGroupIcon =  sbLinksGroup.firstElementChild.firstElementChild.classList.add('sb-links-group__icon--rotate');
          const sbLinksGroupIcon = sbLinksGroup.querySelector(sSidebar.sbLinksGroupIcon);
          sbLinksGroupIcon.classList.add('sb-links-group__icon--rotate');

          css_transition(sbLinksGroupIcon, {
            property: 'transform',
            duration: `${400}ms`,
            timingFunction: 'ease-in-out',
          });
          await slideDown(sbLinksGroup.lastElementChild, { display: 'flex', duration: 0 });
        }

        // sbLinksGroup altındaki tüm linler
        const links = sbLinksGroup.lastElementChild.children;
        let hidedLinkCount = 0;

        // linklerin tümünde işlemler başlatılıyor
        links.forEach(link => {
          const linkText = link.firstElementChild.lastElementChild.innerText.toLowerCase();

          // input alanına girilen text link textinde yoksa.
          // Texti gizle. Gizlenen links sayısını al
          if (linkText.indexOf(inputText) === -1) {
            link.style.display = 'none';
            hidedLinkCount++;
          } else {
            link.style.display = 'list-item';
          }

          // Eğer gizlenen link sayısı sbLinksGroup altındaki tüm linklerin sayısına eşitse
          // sbLinksGroup grubunu gizle
          hidedLinkCount === links.length
            ? // this.sbLinksGroupTitleIcon_rotate(sbLinksGroup.firstElementChild.firstElementChild, 0);
              (sbLinksGroup.style.display = 'none')
            : // this.sbLinksGroupTitleIcon_rotate(sbLinksGroup.firstElementChild.firstElementChild, 0);
              (sbLinksGroup.style.display = 'flex');
        });
      })
    );

    if (inputText.length <= 0) {
      await this.sidebarLinks_default();
      Array.from(eSidebar.sidebarButtons.children).forEach(button => {
        button.classList.remove('sb-button--disabled');
        button.disabled = false;
      });
    } else {
      Array.from(eSidebar.sidebarButtons.children).forEach(button => {
        button.classList.add('sb-button--disabled');
        button.disabled = true;
      });
    }
  };
}

// * Sidebar Operations
// sidebar bulunmayan sayflarda çalışmayacak
if (eSidebar.sidebarLinks) {
  // SidebarOpations sınıfından sb nesnesi örnekleniyor.
  // Örnekleme yapıldığında SimpleBar aktive ediliyor
  // Limit Title çalıştırılıyor
  // Sidebar Buttonlarının açıklamaları yükleniyor
  const sb = new SidebarOparations();

  // sbLinksGroupTitle tıklanınca açılıp kapanması
  eSidebar.sidebarLinks.addEventListener('click', sb.sbLinksGroupTitle_click);

  // btnSidebarScrollTop görünüyor ve gizleniyor
  sb.simpleBartScrollElement.addEventListener('scroll', sb.btnSidebarScrollTop_show);

  // Sidebar Tepesine cik
  eSidebar.btnSidebarScrollTop.addEventListener('click', scrollTo.bind(null, sb.simpleBartScrollElement));

  // Buttonlar
  eSidebar.btnOpenAllLinks.addEventListener('click', sb.sidebarLinks_open);
  eSidebar.btnCloseAllLinks.addEventListener('click', sb.sidebarLinks_close);
  eSidebar.btnDefaultAllLinks.addEventListener('click', sb.sidebarLinks_default);

  // Link Search
  eSidebar.sidebarLinkSearch.addEventListener('keyup', sb.sidebarLinks_search);
}
