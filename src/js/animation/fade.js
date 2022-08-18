import animate from './animate';
import { getTiming } from './ease';

export const fadeOut = async (element, args) => {
  let defaults = { duration: 500, timing: 'easeOut' };
  const params = { ...defaults, ...args };

  // elementin mevcut opacity değerini al
  let opacity = parseFloat(element.style.opacity);

  // opacity değeri tanımlı değilse, opacity:1 olarak al
  if (!opacity) opacity = 1;

  if (element.style.display !== 'none') {
    await animate({
      duration: params.duration,
      timing: getTiming(params.timing),
      operation: function (progress) {
        progress = progress * opacity;
        element.style.opacity = opacity - progress;
        if (parseFloat(element.style.opacity) === 0) element.style.display = 'none';
      },
    });
  }
};

export const fadeIn = async (element, args) => {
  let defaults = {
    duration: 500,
    opacity: 1,
    display: 'block',
    timing: 'easeIn',
  };
  let params = { ...defaults, ...args };

  /**
   * Element görünür hale getirildikten sonra
   * elementin üzerinde yeniden fateIn fonksiyonunun
   * çalışması engelleniyor
   */
  if (parseFloat(element.style.opacity) !== params.opacity || element.style.display === 'none') {
    // element.setAttribute('style', `display:${params.display}`);
    element.style.display = params.display;

    await animate({
      duration: params.duration,
      timing: getTiming(params.timing),
      operation: function (progress) {
        element.style.opacity = progress * params.opacity;
      },
      // * Durdurma işlemine örnek
      // cancelOperation: function (globalID) {
      //   if (element.style.opacity >= 0.5) {
      //     console.log(element.style.opacity);
      //     cancelAnimationFrame(globalID);
      //   }
      // },
    });
  }
};

export const fadeToggle = async (element, args) => {
  let defaults = { duration: 500, opacity: 1, display: 'block' };
  let params = { ...defaults, ...args };

  element.style.display === 'none'
    ? await fadeIn(element, {
        duration: params.duration,
        opacity: params.opacity,
        display: params.display,
      })
    : await fadeOut(element, { duration: params.duration });
};
