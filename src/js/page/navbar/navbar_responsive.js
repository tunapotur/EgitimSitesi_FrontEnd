import { eResponsive, eNavbar, sNavbar, strings } from '../../elements';
import { fadeIn, fadeOut } from '../../animation/fade';

class ResponsiveNavbarOperations {
  constructor(transition_time, duration) {
    this._transition_time = !transition_time ? 250 : transition_time;
    this._duration = !duration ? 0.4 : duration;

    // * elements
    // navbar
    this._navbar = eNavbar.navbar; // get
    this._navbarResponsive = eNavbar.responsive;
    this._overlay = eNavbar.overlay;

    // forms
    this._responsiveSearchForm = eNavbar.responsiveSearch.lastElementChild;
    this._responsiveSearchInput = eNavbar.responsiveSearch.lastElementChild.firstElementChild; // get

    // icons
    this._iconHideString = sNavbar.navbarResponsiveIcon_hide;
    this._navIcons = eNavbar.responsiveOpen.firstElementChild;
    this._searchIcons = eNavbar.responsiveSearch.firstElementChild;
    this._searchIconDefault = eNavbar.responsiveSearch.firstElementChild.firstElementChild;

    // * Constants
    //"all 0s ease 0s" Default transition değeri
    this._transitionDefault = strings.transitionDefault;

    // Gerekli değerler alınıyor
    this.responsiveNavbarAnimation();
  }

  get responsiveSearchInput() {
    return this._responsiveSearchInput;
  }

  get navbar() {
    return this._navbar;
  }

  // Responsive Navbar Iconlarına Animasyon ekleme fonksiyonu
  addChildrenAnimation = (element, duration) =>
    element.children.forEach(child => {
      if (window.getComputedStyle(child).transition === this._transitionDefault)
        child.setAttribute('style', `transition: opacity ${duration}s, transform ${duration}s !important;`);
    });

  // Sayfa Yüklendiğinde transition efekti atanıyor.
  /**
   * getComputedStyle ile kontrol yapılması sayfanın yüklenmesi ile alakalı
   * getComputedStyle fonksiyonu sayfanını css stillerinin yülenmesini bekliyor
   * eğer elementte transition yoksa ilgili elemente bir defalık transition ekliyor
   */
  responsiveNavbarAnimation = () => {
    if (window.getComputedStyle(this._navbar).transition === this._transitionDefault)
      // Navbar'ın Açılıp kapanma animasyonu navbar'a ekleniyor
      this._navbar.setAttribute('style', `transition: margin  ${this._transition_time}ms ease-in-out !important;`);

    // Responsive Navbar Uzerindeki Navbar Acma Butonu Animasyonları Ekleniyor
    this.addChildrenAnimation(this._navIcons, this._duration);
    this.addChildrenAnimation(this._searchIcons, this._duration);
  };

  // Kapama iconuna ve normal icona gecis
  iconTransition = element =>
    element.children.forEach(child => {
      child.classList.contains(this._iconHideString)
        ? child.classList.remove(this._iconHideString)
        : child.classList.add(this._iconHideString);
    });

  // ********* Responsive Navbar Open ********* //
  navbarOpen = () => {
    this._navbar.style.marginRight = '0';
    fadeIn(this._overlay, { duration: this._transition_time });

    this.iconTransition(this._navIcons);
  };

  navbarClose = () => {
    this._navbar.style.marginRight = '-' + window.getComputedStyle(this._navbar).width;
    fadeOut(this._overlay, { duration: this._transition_time });

    this.iconTransition(this._navIcons);
  };

  // ********* Responsive Navbar Search ********* //
  // search formunun input alanının genişliği hesaplanıyor
  calc_SearchInput_width = () => {
    let size = 0;

    size += parseFloat(getComputedStyle(this._navbarResponsive).width);
    size -= parseFloat(getComputedStyle(this._navbarResponsive).paddingLeft);
    size -= parseFloat(getComputedStyle(this._navbarResponsive).paddingRight);

    size -= parseFloat(getComputedStyle(this._responsiveSearchForm).right);

    return size;
  };

  open_SearchInput = () => {
    // Dinamik olarak search form genisligi hesaplanarak ataniyor.
    // this.responsiveSearchInput.style.width = 300 + 'px';
    this._responsiveSearchInput.style.width = this.calc_SearchInput_width() + 'px';

    // Kapama ikonu geçişi
    this.iconTransition(this._searchIcons);
  };

  close_SearchInput = () => {
    if (this._searchIconDefault.classList.contains(this._iconHideString)) {
      this._responsiveSearchInput.value = '';
      this._responsiveSearchInput.style.width = '';

      // Arama ikonu geçişi
      this.iconTransition(this._searchIcons);
    }
  };

  close_SearchInput_OutOfBounds = element => {
    if (!element.target.matches(sNavbar.navbarSearchElements)) this.close_SearchInput();
  };
}

// ********* Responsive Navbar  Operation ********* //
const rspNavOp = new ResponsiveNavbarOperations();

// Responsive Navbar
eNavbar.responsiveOpen.addEventListener('click', () => {
  window.getComputedStyle(rspNavOp.navbar).marginRight === '0px' ? rspNavOp.navbarClose() : rspNavOp.navbarOpen();
});
eNavbar.overlay.addEventListener('click', rspNavOp.navbarClose);

// Responsive Search
eNavbar.responsiveSearch.addEventListener('click', e => {
  if (e.target.matches(sNavbar.navbarIcons))
    rspNavOp.responsiveSearchInput.style.width === '' ? rspNavOp.open_SearchInput() : rspNavOp.close_SearchInput();
});

/**
 * Sadece Telefon(600px ve altı) ekranında
 * close_SearchInput_OutOfBounds
 * için event listener ekleniyor
 * diğer ekranlarda(600px ve üstü)
 * event listener çıkartılıyor
 */
const screenSizeCheck = element => {
  element.matches
    ? document.addEventListener('click', rspNavOp.close_SearchInput_OutOfBounds)
    : document.removeEventListener('click', rspNavOp.close_SearchInput_OutOfBounds);
};

/**
 * acilista ekran 600px altindaysa sidebar kapatiliyor.
 * screenSizeCheck açılışta çalıştırılıyor
 */
screenSizeCheck(eResponsive.phone);

/**
 * sayfa boyutu için event listener ekleniyor.
 * sayfa değiştirildiğinde screenSizeCheck çalıştırılıyor
 */
eResponsive.phone.addEventListener('change', screenSizeCheck);
