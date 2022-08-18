export const responsiveBreakPoint = {
  phone_fold: 300,
  phone: 600,
  tab_port: 900,
  tab_land: 1200,
  big_desktop: 1800,
};

// ** e harfi element kelimesinin kısaltması
export const eResponsive = {
  phone_fold: window.matchMedia(`(max-width: ${responsiveBreakPoint.phone_fold}px)`),
  phone: window.matchMedia(`(max-width: ${responsiveBreakPoint.phone}px)`),
  tab_port: window.matchMedia(`(max-width: ${responsiveBreakPoint.tab_port}px)`),
  tab_land: window.matchMedia(`(max-width: ${responsiveBreakPoint.tab_land}px)`),
  regular: window.matchMedia(`(max-width: ${responsiveBreakPoint.big_desktop}px)`),
  big_desktop: window.matchMedia(`(min-width: ${responsiveBreakPoint.big_desktop}px)`),
};

// ** s harfi string kelimesinin kısatması
export const sNavbar = {
  navbarResponsiveIcon_hide: 'navbar-responsive__icon--hide',
  navbarSearchElements: '#responsiveNavbarSearch, #responsiveNavbarSearch *',
  navbarIcons: '.navbar-responsive__icons, .navbar-responsive__icons *',
};

export const eNavbar = {
  wrapper: document.getElementById('navbarWrapper'),
  navbar: document.getElementById('navbar'),
  overlay: document.getElementById('overlayNavbar'),
  userMenuWrapper: document.getElementById('userMenuWrapper'),
  userMenu: document.getElementById('userMenu'),
  responsive: document.querySelector('.navbar-responsive'),
  responsiveOpen: document.getElementById('responsiveNavbarOpen'),
  responsiveSearch: document.getElementById('responsiveNavbarSearch'),
  btnFullScreen: document.getElementById('fullScreen'),
  btnFixNavbar: document.getElementById('fixNavbar'),
  btnDarkLight: document.getElementById('darkLight'),
  navbarBottom: document.querySelector('.navbar-bottom'),
  navbarTop: document.querySelector('.navbar-top'),
};

export const sSidebar = {
  sbLinksGroupTitle: '.sb-links-group__title',
  sbLinksGroupTitleAll: '.sb-links-group__title, .sb-links-group__title *',
  sbLink: '.sb-link',
  sbLinkHref: '.sb-link__href',
  sbLinkHrefActive: '.sb-link__href--active',
  sbLinksGroupIcon: '.sb-links-group__icon',
};

export const eSidebar = {
  sidebarWrapper: document.getElementById('sidebarWrapper'),
  sidebar: document.querySelector('.sidebar'),
  sidebarHead: document.querySelector('.sidebar__head'),
  sidebarLinks: document.getElementById('sidebarLinks'),
  sidebarIcon: document.querySelector('.sidebar__icon'),

  // Açık olan sayfanın sidebar sidebar linki alınıyor
  // https://stackoverflow.com/questions/1034621/get-the-current-url-with-javascript
  // https://stackoverflow.com/questions/10572735/javascript-getelement-by-href
  sbLinkHrefActive: document.querySelector(`a.sb-link__href[href='${window.location.pathname}']`),

  // Butonlar
  // Sidebar Açma Kapama Butonu
  btnToggleSidebar: document.getElementById('toggleSidebar'),
  // Sidebar başına çık butonu
  btnSidebarScrollTop: document.getElementById('sidebar-scroll-top-btn'),
  // Sidebar Linkleri Üzerinde işlem yapan tüm butonları seç
  btnOpenAllLinks: document.getElementById('open-all-sidebar-links'),
  btnCloseAllLinks: document.getElementById('close-all-sidebar-links'),
  btnDefaultAllLinks: document.getElementById('default-sidebar-links'),

  // Sidebar Text Limit
  // Sidebar'in en üstündeki başlık
  sbTitleText: document.querySelector('.sb-title__text'),
  all_sbLinksGroupText: Array.from(document.querySelectorAll('.sb-links-group__text')),
  all_sbLinkText: Array.from(document.querySelectorAll('.sb-link__text')),

  // Sidebar link arama girişi
  sidebarLinkSearch: document.getElementById('sidebar-link-search'),
  all_sbLinksGroupLinks: Array.from(document.querySelectorAll('.sb-links-group__links')),
  all_sbLinksGroup: Array.from(document.querySelectorAll('.sb-links-group')),
  sidebarButtons: document.querySelector('.sidebar__buttons'),
};

export const elements = {
  root: document.documentElement,

  pageWrapper: document.getElementById('pageWrapper'),
  overlay: document.getElementById('overlay'),

  contentWrapper: document.getElementById('contentWrapper'),

  darkThemeSelected: window.matchMedia('(prefers-color-scheme: dark)').matches,

  contentScrollTop: document.getElementById('contentScrollTop'),
};

export const strings = {
  transitionDefault: 'all 0s ease 0s',
};
