module.exports = {
  title: {
    text: 'Python Programlama',
    link: '/tutorial.html',
  },
  linkSearchPlaceholder: 'Başlık ara...',
  sidebarButtons: {
    openAllSidebarLinks: { label: 'Aç', info: 'Link Gruplarını Aç' },
    closeAllSidebarLinks: { label: 'Kapat', info: 'Link Gruplarını Kapat' },
    defaultSidebarLinks: { label: 'Yenile', info: 'Link Gruplarını İlk Duruma Getir' },
    editSidebarLinks: { label: 'Düzenle', info: 'Dersi Düzenle' },
  },
  editLinks: { label: 'Düzenle', info: 'Linkleri Düzenle' },
  newLinks: { label: 'Yeni', info: 'Yeni Link Grubu Oluştur' },
  linkGroup: [
    {
      title: 'Group Title',
      links: [
        { text: 'Header Link', link: '#' },
        { text: 'Header Link', link: '#' },
        { text: 'Header Link', link: '#' },
      ],
    },
    {
      title: 'Editor & Test',
      links: [
        { text: 'Ender Content', link: '/editor_enter_content.html' },
        { text: 'Load Content', link: '/editor_load_content.html' },
        { text: 'Fade & Slide Test', link: '/test_fade_slide.html' },
      ],
    },

    {
      title: 'Bu Kitap Hakkında',
      links: [
        { text: 'Bu Kitaptan Nasıl Yararlanabilirim?', link: '#' },
        { text: 'Nereden Yardım Alabilirim?', link: '#' },
        { text: 'Projeye Nasıl Yardımcı Olabilirim?', link: '#' },
        { text: 'Kullanım Koşulları', link: '#' },
      ],
    },
    {
      title: 'Python Hakkında',
      links: [
        { text: 'Python Nedir?', link: '#' },
        { text: 'Neden Programlama Öğrenmek İsteyeyim?', link: '#' },
        { text: 'Neden Python?', link: '#' },
        { text: 'Python Nasıl Telaffuz Edilir?', link: '#' },
        { text: 'Platform Desteği', link: '#' },
        { text: 'Farklı Python Sürümleri', link: '#' },
        { text: 'Hangi Seriyi Öğrenmeliyim?', link: '#' },
      ],
    },
    {
      title: 'Python Nasıl Kurulur?',
      links: [
        { text: 'GNU/Linux Kullanıcıları', link: '#' },
        { text: 'Kurulu Python Sürümü', link: '#' },
        { text: 'Paket Deposundan Kurulum', link: '#' },
        { text: 'Kaynaktan Kurulum', link: '#' },
        { text: 'root Hakları İle Kurulum', link: '#' },
        { text: 'Yetkisiz Kullanıcı Olarak Kurulum', link: '#' },
        // { text: 'Windows Kullanıcıları', link: '#' },
        // { text: 'Python Kurulum ve Çalışma Dizini', link: '#' },
      ],
    },
    {
      title: 'Python Nasıl Çalıştırılır?',
      links: [
        { text: 'GNU/Linux Kullanıcıları', link: '#' },
        { text: 'Kurulu Python3’ü Kullananlar', link: '#' },
        { text: 'Python3’ü Depodan Kuranlar', link: '#' },
        { text: 'Python3’ü root Olarak Derleyenler', link: '#' },
        { text: 'Çok Önemli Bir Uyarı', link: '#' },
        // { text: 'Python3’ü Ev Dizinine Kuranlar', link: '#' },
        // { text: 'GNU/Linux’ta Farklı Sürümleri Birlikte Kullanmak', link: '#' },
        // { text: 'Windows Kullanıcıları', link: '#' },
        // { text: 'Windows’ta Farklı Sürümleri Birlikte Kullanmak', link: '#' },
        // { text: 'Hangi Komut Hangi Sürümü Çalıştırıyor?', link: '#' },
        // { text: 'Sistem Komut Satırı ve Python Komut Satırı', link: '#' },
      ],
    },
    {
      title: 'Etkileşimli Python',
      links: [
        { text: 'Etkileşimli Kabukta İlk Adımlar', link: '#' },
        { text: 'Karakter Dizilerine Giriş', link: '#' },
        { text: 'Sayılara Giriş', link: '#' },
        { text: 'Değişkenler', link: '#' },
        { text: 'Değişken Adı Belirleme Kuralları', link: '#' },
        // { text: 'Uygulama Örnekleri', link: '#' },
        // { text: 'Değişkenlere Dair Bazı İpuçları', link: '#' },
        // { text: 'Aynı Değere Sahip Değişkenler Tanımlama', link: '#' },
        // { text: 'Değişkenlerin Değerini Takas Etme', link: '#' },
        // { text: 'Etkileşimli Kabuğun Hafızası', link: '#' },
      ],
    },
    {
      title: 'print Fonksiyonu',
      links: [
        { text: 'Nedir, Ne İşe Yarar?', link: '#' },
        { text: 'Nasıl Kullanılır?', link: '#' },
        { text: 'Bir Fonksiyon Olarak print', link: '#' },
        { text: 'print Fonksiyonunun Parametreleri', link: '#' },
        { text: 'sep', link: '#' },
        // { text: 'end', link: '#' },
        // { text: 'file', link: '#' },
        // { text: 'flush', link: '#' },
        // { text: 'Birkaç Pratik Bilgi', link: '#' },
        // { text: 'Yıldızlı Parametreler', link: '#' },
        // { text: 'sys.stdout’u Kalıcı Olarak Değiştirmek', link: '#' },
      ],
    },
    {
      title: 'Only Title',
      links: [],
    },
    // {
    //   title: 'Programları Kaydetme ve Çalıştırma',
    //   links: [
    //     { text: 'GNU/Linux', link: '#' },
    //     { text: 'Windows', link: '#' },
    //   ],
    // },
    // {
    //   title: 'Çalışma Ortamı Tavsiyesi',
    //   links: [
    //     { text: 'Windows Kullanıcıları', link: '#' },
    //     { text: 'GNU/Linux Kullanıcıları', link: '#' },
    //     { text: 'Metin Düzenleyici Ayarları', link: '#' },
    //     { text: 'MS-DOS Komut Satırı Ayarları', link: '#' },
    //     { text: 'Program Örnekleri', link: '#' },
    //   ],
    // },
    // {
    //   title: 'Yorum ve Açıklama Cümleleri',
    //   links: [
    //     { text: 'Yorum İşareti', link: '#' },
    //     { text: 'Yorum İşaretinin Farklı Kullanımları', link: '#' },
    //     { text: 'Etkisizleştirme Amaçlı', link: '#' },
    //     { text: 'Süsleme Amaçlı', link: '#' },
    //   ],
    // },
    // {
    //   title: 'Kullanıcıdan Bilgi Almak',
    //   links: [
    //     { text: 'input Fonksiyonu', link: '#' },
    //     { text: 'Tip Dönüşümleri', link: '#' },
    //     { text: 'int', link: '#' },
    //     { text: 'str', link: '#' },
    //     { text: 'float', link: '#' },
    //     { text: 'complex', link: '#' },
    //     { text: 'eval ve exec Fonksiyonları', link: '#' },
    //     { text: 'format Metodu', link: '#' },
    //   ],
    // },
    // {
    //   title: 'Koşullu Durumlar',
    //   links: [
    //     { text: 'Koşul Deyimleri', link: '#' },
    //     { text: 'if', link: '#' },
    //     { text: 'elif', link: '#' },
    //     { text: 'else', link: '#' },
    //     { text: 'Örnek Uygulama', link: '#' },
    //   ],
    // },
    // {
    //   title: 'İşleçler',
    //   links: [
    //     { text: 'Aritmetik İşleçler', link: '#' },
    //     { text: 'Karşılaştırma İşleçleri', link: '#' },
    //     { text: 'Bool İşleçleri', link: '#' },
    //     { text: 'Değer Atama İşleçleri', link: '#' },
    //     { text: 'Aitlik İşleçleri', link: '#' },
    //     { text: 'Kimlik İşleçleri', link: '#' },
    //     { text: 'Uygulama Örnekleri', link: '#' },
    //     { text: 'Basit Bir Hesap Makinesi', link: '#' },
    //     { text: 'Sürüme Göre İşlem Yapan Program', link: '#' },
    //   ],
    // },
    // {
    //   title: 'Döngüler (Loops)',
    //   links: [
    //     { text: 'while Döngüsü', link: '#' },
    //     { text: 'for Döngüsü', link: '#' },
    //     { text: 'İlgili Araçlar', link: '#' },
    //     { text: 'range Fonksiyonu', link: '#' },
    //     { text: 'pass Deyimi', link: '#' },
    //     { text: 'break Deyimi', link: '#' },
    //     { text: 'continue Deyimi', link: '#' },
    //     { text: 'Örnek Uygulamalar', link: '#' },
    //     { text: 'Karakter Dizilerinin İçeriğini Karşılaştırma', link: '#' },
    //     { text: 'Dosyaların İçeriğini Karşılaştırma', link: '#' },
    //     { text: 'Karakter Dizisindeki Karakterleri Sayma', link: '#' },
    //     { text: 'Dosya içindeki Karakterleri Sayma', link: '#' },
    //   ],
    // },
    // {
    //   title: 'Hata Yakalama',
    //   links: [
    //     { text: 'Hata Türleri', link: '#' },
    //     { text: 'try... except...', link: '#' },
    //     { text: 'try... except... as...', link: '#' },
    //     { text: 'try... except... else...', link: '#' },
    //     { text: 'try... except... finally...', link: '#' },
    //     { text: 'raise', link: '#' },
    //     { text: 'Bütün Hataları Yakalamak', link: '#' },
    //     { text: 'Örnek Uygulama', link: '#' },
    //   ],
    // },
    // {
    //   title: 'Karakter Dizileri',
    //   links: [
    //     { text: 'Karakter Dizilerinin Öğelerine Erişmek', link: '#' },
    //     { text: 'Karakter Dizilerini Dilimlemek', link: '#' },
    //     { text: 'Karakter Dizilerini Ters Çevirmek', link: '#' },
    //     { text: 'Karakter Dizilerini Alfabe Sırasına Dizmek', link: '#' },
    //     { text: 'Karakter Dizileri Üzerinde Değişiklik Yapmak', link: '#' },
    //     { text: 'Üç Önemli Fonksiyon', link: '#' },
    //     { text: 'dir', link: '#' },
    //     { text: 'enumerate', link: '#' },
    //     { text: 'help', link: '#' },
    //     { text: 'Notlar', link: '#' },
    //   ],
    // },
    // {
    //   title: 'Karakter Dizilerinin Metotları',
    //   links: [
    //     { text: 'replace', link: '#' },
    //     { text: 'split, rsplit, splitlines', link: '#' },
    //     { text: 'lower', link: '#' },
    //     { text: 'upper', link: '#' },
    //     { text: 'islower, isupper', link: '#' },
    //     { text: 'endswith', link: '#' },
    //     { text: 'startswith', link: '#' },
    //     { text: 'capitalize', link: '#' },
    //     { text: 'title', link: '#' },
    //     { text: 'swapcase', link: '#' },
    //     { text: 'casefold', link: '#' },
    //     { text: 'strip, lstrip, rstrip', link: '#' },
    //     { text: 'join', link: '#' },
    //     { text: 'count', link: '#' },
    //     { text: 'index, rindex', link: '#' },
    //     { text: 'find, rfind', link: '#' },
    //     { text: 'center', link: '#' },
    //     { text: 'rjust, ljust', link: '#' },
    //     { text: 'zfill', link: '#' },
    //     { text: 'partition, rpartition', link: '#' },
    //     { text: 'encode', link: '#' },
    //     { text: 'expandtabs', link: '#' },
    //     { text: 'str.maketrans, translate', link: '#' },
    //     { text: 'isalpha', link: '#' },
    //     { text: 'isdigit', link: '#' },
    //     { text: 'isalnum', link: '#' },
    //     { text: 'isidentifier', link: '#' },
    //     { text: 'isnumeric', link: '#' },
    //     { text: 'isspace', link: '#' },
    //     { text: 'isprintable', link: '#' },
    //     { text: 'isdecimal', link: '#' },
    //   ],
    // },
    // {
    //   title: 'Karakter Dizilerini Biçimlendirmek',
    //   links: [
    //     { text: '% İşareti ile Biçimlendirme (Eski Yöntem)', link: '#' },
    //     { text: 'Biçimlendirme Karakterleri', link: '#' },
    //     { text: 'format Metodu ile Biçimlendirme (Yeni Yöntem)', link: '#' },
    //   ],
    // },
    // {
    //   title: 'f-string',
    //   links: [{ text: 'Kullanım', link: '#' }],
    // },
    // {
    //   title: 'Listeler ',
    //   links: [
    //     { text: 'Listeler', link: '#' },
    //     { text: 'Liste Tanımlamak', link: '#' },
    //     { text: 'list Fonksiyonu', link: '#' },
    //     { text: 'Listelerin Öğelerine Erişmek', link: '#' },
    //     { text: 'Listelerin Öğelerini Değiştirmek', link: '#' },
    //     { text: 'Listeye Öğe Eklemek', link: '#' },
    //     { text: 'Listeleri Birleştirmek', link: '#' },
    //     { text: 'Listeden Öğe Çıkarmak', link: '#' },
    //     { text: 'Listeleri Silmek', link: '#' },
    //     { text: 'Listeleri Kopyalamak', link: '#' },
    //     { text: 'Liste Üreteçleri (List Comprehensions)', link: '#' },
    //     { text: 'Örnek Program: X.O.X Oyunu', link: '#' },
    //   ],
    // },
    // {
    //   title: 'Demetler',
    //   links: [
    //     { text: 'Demet Tanımlamak', link: '#' },
    //     { text: 'Tek Öğeli bir Demet Tanımlamak', link: '#' },
    //     { text: 'Demetlerin Öğelerine Erişmek', link: '#' },
    //     { text: 'Demetlerle Listelerin Birbirinden Farkı', link: '#' },
    //     { text: 'Demetlerin Kullanım Alanı', link: '#' },
    //   ],
    // },
  ],
};
