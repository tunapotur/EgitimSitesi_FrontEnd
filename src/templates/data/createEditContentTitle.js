module.exports = {
  nav: {
    header: 'Başlık İşlemler',
    list: ['İçerik Başlığı', 'Başlık Resmi', 'Bir Sonraki Adım', 'Başlık Silme'],
  },
  info: {
    header: 'İçerik Başlığı',
    id: 'Id',
    title: 'Başlık',
    selectContentType: { default: 'İçerik Türü', article: 'Makale', news: 'Haber', tutorial: 'Ders' },
    selectPublishType: { default: 'Yayın Durumu', draft: 'Taslak', published: 'Yayında', archive: 'Arşiv' },
    button: 'Kaydet',
  },
  image: {
    heater: 'Başlık Resmi',
    text: 'Resim dosyasını tıklayarak seçin veya sürükleyerek bu alana bırakın',
    previewHeader: 'Ön Gösterim',
    previewText: 'Üstte ayarladığınız resminiz site içinde alttaki gibi görüntülenecek',
    button: 'Kaydet',
  },
  nextStep: {
    header: 'Bir Sonraki Adım',
    text: [
      'Makale ve haber tipi içerikler için <strong>&#34;İçerik Oluşturma Editörüne&#34;</strong> geçilir.',
      'Ders tipi içerik için <strong>&#34;Ders Başlıkları Tablosuna&#34;</strong> geçilir.',
    ],
    button: 'İleri',
  },
  delete: {
    header: 'Başlık Silme',
    text: [
      'Eğer başlığın altında tanımlı bir içerik yoksa başlık silinir.',
      'Eğer başlığın altında tanımlı bir içerik varsa içerik durumu <strong>&#34;Arşiv&#34;</strong>olarak belirlenir.',
      'İçeriği tamamen silmek için öncelikle başlık altında bulunan tüm içeriklerin temizlenmesi gerekir.',
    ],
    check: 'Başlığı Silmek İstiyorum',
    button: 'Sil',
  },
};
