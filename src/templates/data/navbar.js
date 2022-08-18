module.exports = {
  brand: ['Kaynak', 'Ders'],

  searchPlaceholder: 'Sitede ara...',

  links: [
    { text: 'Haberler', link: '/news.html' },
    { text: 'Makaleler', link: '/articles.html' },
    { text: 'Dersler', link: '/tutorials.html' },
    { text: 'Sunumlar', link: '#', disabled: true },
    { text: 'Yazarlar', link: '/authors.html' },
  ],

  user: {
    btnLabel: 'Hesabım',
    fullName: 'Ahmet Tuna POTUR',
    email: 'tunapotur@yahoo.com',
    content: {
      header: 'İçeriklerim',
      links: [
        { text: 'İçerik Üret', link: '/createContent.html' },
        { text: 'Haberlerim', link: '/news.html' },
        { text: 'Makalelerim', link: 'articles.html' },
        { text: 'Derslerim', link: '/tutorials.html' },
        { text: 'Sunumlarım', link: '#', disabled: true },
      ],
    },
    follow: {
      header: 'Takip Ettiklerim',
      links: [
        { text: 'Makaleler', link: 'articles.html' },
        { text: 'Dersler', link: '/tutorials.html' },
        { text: 'Sunumlar', link: '#', disabled: true },
        { text: 'Yazarlar', link: '/authors.html' },
      ],
    },
    notification: { text: 'Bildirimler', link: '#', count: 3, disabled: true },
    message: { text: 'Mesajlar', link: '#', count: 5, disabled: true },
    help: { text: 'Yardım', link: '#', disabled: true },
    config: { text: 'Hesap Ayarları', link: '/userConfig.html' },
    signOut: { text: 'Oturumu Kapat', link: '/index_noUser.html' },
  },

  noUser: {
    loginBtn: 'Giriş',
    signUpBtn: 'Kayıt',
  },
};
