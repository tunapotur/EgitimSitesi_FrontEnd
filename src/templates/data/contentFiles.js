module.exports = {
  tableHeader: {
    newFile: {
      tooltip: {
        radio: 'Dosya yükleme butonuna tıklamadan önce dosya tipini seçin',
        button: 'Dosyaları Yüklemek İçin Tıklayın',
      },
      radio: {
        fileType: 'Dosya Türü',
        image: 'Resim',
        file: 'Dosya',
        video: 'Video',
      },
    },
    text: {
      content: 'Javascript',
      header: 'Dosyalar Tablosu',
      text: 'Yeni dosya yüklemek için öncelikle soldaki dosya tipini seçin. Sonrasında dosya yükleme butonuna tıklayın.',
      link: '/tutorial.html',
    },
    tableCardTransition_tooltip: 'İçerik tablosunun tablo kart geçişi için tıklayın',
    searchInput: 'Başlıklarda ara...',
    searchIcon_tooltip: 'Başlıklarda aramak için tıklayın',
    subMenuIcon_tooltip: 'Filtreleme ve Sıralama menüsü için alt menüyü açmak için tıklayın',
    editContent_tooltip: 'İçerik Düzenle',
    editContentHeader_tooltip: 'İçerik Başlığını Düzenle',
    editContent_link: '/tutorial_titles.html',
    editContentHeader_link: '/createEditContentTitle.html',
  },
  select: {
    header: 'Seçili Dosyaları Sil',
    selectAllFile: { text: 'Tüm dosyarı', btn: 'Seç' },
    unSelectFile: { text: 'Tüm seçimi', btn: 'Kaldır' },
    selectOtherFile: { text: 'Diğer dosyaları', btn: 'Seç' },
    deleteSelectedFile: { text: 'Seçilen dosyaları', btn: 'Sil' },
  },
  filter: {
    header: 'Filtrele',
    id: 'id',
    getIdBtn: 'Getir',
    selectContentType: { contentType: 'İçerik Türü', article: 'Makale', news: 'Haber', tutorial: 'Ders' },
    selectPublishType: { publishType: 'Yayın Durumu', draft: 'Taslak', published: 'Yayında', archive: 'Arşiv' },
    createdDate: ['Oluşturma Tarihi Başlangıç', 'Oluşturma Tarihi Bitiş'],
    updatedDate: ['Güncelleme Tarihi Başlangıç', 'Güncelleme Tarihi Bitiş'],
    btnFilter: 'Filtrele',
  },
  sort: {
    header: 'Sıralama',
    id: 'id',
    byHeaders: 'Başlık Adı',
    byContentType: 'Yayın Türü',
    byPublishingType: 'Yayın Durumu',
    byCreatedDate: 'Oluşturma Tarihi',
    byUpdatedDate: 'Güncelleme Tarihi',
    btnSort: 'Sırala',
  },
};