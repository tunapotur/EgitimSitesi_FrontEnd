module.exports = {
  navHeader: {
    header: 'Kullanıcı Bilgileri',
    userPhoto: 'Kullanıcı Profil Fotoğrafı',
    userBackground: 'Kullanıcı Arkafon Fotoğrafı',
    personalInfo: 'Kişisel Bilgiler',
    eMail: 'E-Posta Değiştir',
    pass: 'Şifre Değiştir',
    notification: 'Bildirimler',
  },

  fotoInput: {
    userPhotoHeader: 'Profil Fotoğrafı',
    userBackgroundHeader: 'Arkafon Fotoğrafı',
    inputText: 'Resim dosyasını tıklayarak seçin veya sürükleyerek bu alana bırakın',
    previewHeader: 'Ön Gösterim',
    previewText: 'Üstte ayarladığınız resminiz site içinde alttaki gibi görüntülenecek',
    button: 'Kaydet',
  },

  signUp: {
    frmGroup__header: 'Kayıt',
    name: 'Ad',
    surname: 'Soyad',
    email: 'E-posta adresi',
    password: 'Şifre',
    passwordCheck: 'Şifre kontrolü',
    text: [
      'Kullanacağınız şifre minumum 8 karakterli, bir büyük harf, bir sayı ve özel karakter içerecek şekilde olmalı. Ör: eGit_im39',
      'Sitemize üye olduğunuzda, sitemizin çerez kullanımını onaylamış oluyorsunuz.',
      'Gelişmelerden haberdar olmak için e-posta almak istiyorum.',
    ],
    checkMessage: ['Geçersiz Şifre', 'Geçerli Şifre', 'Şifre Eşleşmiyor'],
    formBtn: 'Kayıt',
  },

  logIn: {
    frmGroup__header: 'Giriş',
    username: 'E-posta adresi',
    password: 'Şifre',
    chkBox: 'Beni Hatırla',
    forgotPass: { text: 'Şifremi Unuttum', link: '/forgot_password.html' },
    formBtn: 'Giriş Yapın',
  },

  forgotPass: {
    frmGroup__header: 'Şifremi Unuttum',
    text: 'Şifre yenileme bağlantısını göndereceğimiz e-posta adresinizi giriniz.',
    email: 'E-posta adresi',
    formBtn: 'Gönder',
  },

  resetPass: {
    frmGroup__header: 'Yeni Şifre Belirle',
    text:
      'Kullanacağınız şifre minumum 8 karakterli, bir büyük harf, bir sayı ve özel karakter içerecek şekilde olmalı. Ör: eGit_im39',
    password: 'Şifre',
    passwordCheck: 'Şifre kontrolü',
    formBtn: 'Şifreyi Yenile',
    checkMessage: ['Geçersiz Şifre', 'Geçerli Şifre', 'Şifre Eşleşmiyor'],
  },

  userConfig: {
    frmGroup__header: ['Kişisel Bilgiler', 'E-posta Değiştir', 'Şifre Değişikilği', 'Bildirimler', 'Fotoğraf'],
    name: 'Ad',
    surname: 'Soyad',
    title: 'Ünvan',
    infoText: 'Açıklama Metni',
    text: [
      'Öğretmen, Tasarımcı veya Mühendis gibi profesyonel bir ünvan ekleyin',
      'Kendinizi tanımlayan kısa açıklamanızı yazınız.',
      'E-posta değişkiliği için şifrenizi giriniz',
      'Gelişmelerden haberdar olmak için e-posta almak istiyorum.',
      'Kullanacağınız şifre minumum 8 karakterli, bir büyük harf, bir sayı ve özel karakter içerecek şekilde olmalı. Ör: eGit_im39',
    ],
    email: ['E-posta adresi', 'Yeni E-posta adresi'],
    password: ['Şifre', 'Mevcut Şifre', 'Şifre kontrolü'],
    formBtn: 'Kaydet',
    checkMessage: ['Geçersiz Şifre', 'Geçerli Şifre', 'Şifre Eşleşmiyor'],
  },
};
