const contentData = [
  {
    insert: 'Örnek İçerik Sayfası',
  },
  {
    attributes: {
      header: 1,
    },
    insert: '\n',
  },
  {
    insert: 'Problem Çözme Teknikleri',
  },
  {
    attributes: {
      header: 2,
    },
    insert: '\n',
  },
  {
    insert:
      'Problem çözme tekniklerini içselleştirir ve düşünme sürecinizin bir parçası hâline getirebilirseniz herhangi bir problemin çözümü sizin için daha kolay olacaktır. Program yazmak çoğunlukla problemleri çözmektir. Problem çözme tekniklerini bilmek kolay ve iyi program yazmanızı sağlayacaktır.\nProblemi Küçük Parçalara Ayırın',
  },
  {
    attributes: {
      header: 2,
    },
    insert: '\n',
  },
  {
    insert:
      'Verilen problemi adımlara ya da bölümlere ayırmak, çözümü kolaylaştırır. Bir problemi iki bölüme ayırırsak çözümde yarı yarıya kolaylaşır. ',
  },
  {
    attributes: {
      bold: true,
    },
    insert: 'Örneğin',
  },
  {
    insert:
      ', elinizde 100 kişisel dosya olduğunu ve bu dosyaların alfabetik sıraya göre dizilmesi gerektiğini düşünelim. Önce bir dosya alıp sonra diğer dosyayı bir öncekine göre yerleştirebilirsiniz. Bu işi 100 dosya için tekrarladığınızı düşünün. Peki ya önce 100 dosyayı A-F, G-M, N-Ş ve T-Z olacak biçimde 4 gruba ayırırsanız işlemi daha kolay yapmaz mıydık?',
  },
  {
    attributes: {
      align: 'center',
    },
    insert: '\n',
  },
  {
    insert: 'Paragraf Özellikleri',
  },
  {
    attributes: {
      header: 2,
    },
    insert: '\n',
  },
  {
    attributes: {
      bold: true,
    },
    insert: 'Kalın',
  },
  {
    insert: ' yazım. ',
  },
  {
    attributes: {
      italic: true,
    },
    insert: 'İtalik ',
  },
  {
    insert: 'yazım. ',
  },
  {
    attributes: {
      italic: true,
      bold: true,
    },
    insert: 'Kalın italik',
  },
  {
    insert: ' yazım. ',
  },
  {
    attributes: {
      underline: true,
    },
    insert: 'Altı çizili',
  },
  {
    insert: ' yazım. ',
  },
  {
    attributes: {
      background: '#cce8cc',
    },
    insert: 'İşaretli(marker)',
  },
  {
    insert: ' yazım. ',
  },
  {
    attributes: {
      link: 'https://www.youtube.com/watch?v=hEdkTCNCVL0',
    },
    insert: 'Satır içi link.',
  },
  {
    attributes: {
      align: 'right',
    },
    insert: '\n',
  },
  {
    insert: 'Numaralı Liste Örneği',
  },
  {
    attributes: {
      header: 2,
    },
    insert: '\n',
  },
  {
    insert: 'This is a block-styled editor',
  },
  {
    attributes: {
      list: 'ordered',
    },
    insert: '\n',
  },
  {
    insert: 'Clean output data',
  },
  {
    attributes: {
      list: 'ordered',
    },
    insert: '\n',
  },
  {
    insert: 'Simple and powerful Api',
  },
  {
    attributes: {
      list: 'ordered',
    },
    insert: '\n',
  },
  {
    insert: 'Numarasız Liste Örneği(Unordered)',
  },
  {
    attributes: {
      header: 2,
    },
    insert: '\n',
  },
  {
    insert: 'This is a block-styled editor',
  },
  {
    attributes: {
      list: 'bullet',
    },
    insert: '\n',
  },
  {
    insert: 'Clean output data',
  },
  {
    attributes: {
      list: 'bullet',
    },
    insert: '\n',
  },
  {
    insert: 'Simple and powerful Api',
  },
  {
    attributes: {
      list: 'bullet',
    },
    insert: '\n',
  },
  {
    insert: 'Örnek Kod Eklemesi',
  },
  {
    attributes: {
      header: 2,
    },
    insert: '\n',
  },
  {
    insert: 'const animate = ({ duration, operation, timing, cancelOperation = null }) => {',
  },
  {
    attributes: {
      'code-block': true,
    },
    insert: '\n',
  },
  {
    insert: '  return new Promise(resolve => {',
  },
  {
    attributes: {
      'code-block': true,
    },
    insert: '\n',
  },
  {
    insert: '    let time_start;',
  },
  {
    attributes: {
      'code-block': true,
    },
    insert: '\n',
  },
  {
    insert: '    // rAF fonksiyonu durdurulmak isteniyorsa kullanılacak değişken',
  },
  {
    attributes: {
      'code-block': true,
    },
    insert: '\n',
  },
  {
    insert: '    let globalID;',
  },
  {
    attributes: {
      'code-block': true,
    },
    insert: '\n\n\n',
  },
  {
    insert: '    requestAnimationFrame(function step(time_stamp) {',
  },
  {
    attributes: {
      'code-block': true,
    },
    insert: '\n',
  },
  {
    insert: '      // ilk anda başlangıç zamanı (time_start) tanımsız olduğundan',
  },
  {
    attributes: {
      'code-block': true,
    },
    insert: '\n',
  },
  {
    insert: '      // anlık zaman (time_stamp) başlangıç zamanına eşitleniyor',
  },
  {
    attributes: {
      'code-block': true,
    },
    insert: '\n',
  },
  {
    insert: "      // time_stamp time_star'dan daha ileride",
  },
  {
    attributes: {
      'code-block': true,
    },
    insert: '\n',
  },
  {
    insert: "      // time_stamp rAF'den gelen performs.Now() metodunu ürettiği zaman değerini alıyor",
  },
  {
    attributes: {
      'code-block': true,
    },
    insert: '\n',
  },
  {
    insert: '      if (time_start === undefined) time_start = time_stamp;',
  },
  {
    attributes: {
      'code-block': true,
    },
    insert: '\n\n\n',
  },
  {
    insert: '      // ilk duruda (başlangıçta) geçen süre 0',
  },
  {
    attributes: {
      'code-block': true,
    },
    insert: '\n',
  },
  {
    insert: '      let time_elapsed = time_stamp - time_start;',
  },
  {
    attributes: {
      'code-block': true,
    },
    insert: '\n\n\n',
  },
  {
    insert: '      // sürenin(duration) tamamlanma kesri(time_fraction)',
  },
  {
    attributes: {
      'code-block': true,
    },
    insert: '\n',
  },
  {
    insert: '      // sürenin kaçta kaçının kaldığını veriyor',
  },
  {
    attributes: {
      'code-block': true,
    },
    insert: '\n',
  },
  {
    insert: "      // 1 olduğunda sürenin %100'üne ulaştığı anlaşılıyor",
  },
  {
    attributes: {
      'code-block': true,
    },
    insert: '\n',
  },
  {
    insert: '      let time_fraction = Math.min(time_elapsed / duration, 1);',
  },
  {
    attributes: {
      'code-block': true,
    },
    insert: '\n\n\n',
  },
  {
    insert: '      // Kalan süreye göre timing fonksiyonuyla ease animasyonu hesaplanıyor',
  },
  {
    attributes: {
      'code-block': true,
    },
    insert: '\n',
  },
  {
    insert: '      let progress = timing(time_fraction);',
  },
  {
    attributes: {
      'code-block': true,
    },
    insert: '\n\n\n',
  },
  {
    insert: '      // alınan progress değeriyle işlemler çalıştırılıyor',
  },
  {
    attributes: {
      'code-block': true,
    },
    insert: '\n',
  },
  {
    insert: '      operation(progress); // operation it',
  },
  {
    attributes: {
      'code-block': true,
    },
    insert: '\n\n\n',
  },
  {
    insert: '      time_fraction < 1 ? (globalID = requestAnimationFrame(step)) : resolve();',
  },
  {
    attributes: {
      'code-block': true,
    },
    insert: '\n\n\n',
  },
  {
    insert: '      // Eğer animate işleminde durdurma yapılacaksa kullanılacak fonksiyon',
  },
  {
    attributes: {
      'code-block': true,
    },
    insert: '\n',
  },
  {
    insert: "      if (typeof cancelOperation === 'function') cancelOperation(globalID);",
  },
  {
    attributes: {
      'code-block': true,
    },
    insert: '\n',
  },
  {
    insert: '    });',
  },
  {
    attributes: {
      'code-block': true,
    },
    insert: '\n',
  },
  {
    insert: '  });',
  },
  {
    attributes: {
      'code-block': true,
    },
    insert: '\n',
  },
  {
    insert: '};',
  },
  {
    attributes: {
      'code-block': true,
    },
    insert: '\n',
  },
  {
    insert: 'Alıntı Örneği',
  },
  {
    attributes: {
      header: 2,
    },
    insert: '\n',
  },
  {
    insert: 'Hayatta en hakiki mürşit ilimdir fendir. Mustafa Kemal Atatürk',
  },
  {
    attributes: {
      blockquote: true,
    },
    insert: '\n',
  },
  {
    insert: 'Link Örneği',
  },
  {
    attributes: {
      header: 2,
    },
    insert: '\n',
  },
  {
    attributes: {
      link: 'https://www.youtube.com/channel/UChEZ2psKMV0dei91gpDtI_A',
    },
    insert: 'Altın Gün',
  },
  {
    insert: '\n',
  },
  {
    attributes: {
      link: 'https://www.youtube.com/watch?v=QhDfOYn0118',
    },
    insert: 'https://www.youtube.com/watch?v=QhDfOYn0118',
  },
  {
    insert: '\n',
  },
];
