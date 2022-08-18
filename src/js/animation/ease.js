export const linear = t => t;
export const easeIn = t => Math.pow(t, 2);
export const easeOut = t => 1 - Math.pow(1 - t, 2);
export const easeInOut = t => 0.5 * (Math.sin((t - 0.5) * Math.PI) + 1);

export const getTiming = fn => {
  switch (fn) {
    default:
      return easeInOut;
    case 'linear':
      return linear;
    case 'easeIn':
      return easeIn;
    case 'easeOut':
      return easeOut;
    case 'easeInOut':
      return easeInOut;
  }
};

// C:\Users\tuna\Kodlama\20200912_EgitimSitesi\src\js\functions.js

/*
// https://gist.github.com/andjosh/6764939
export function scrollTo(element, to = 0, duration = 750) {
    const start = element.scrollTop,
        change = to - start,
        increment = 20;

    let currentTime = 0;

    
      // t = current time
      // b = start value
      // c = change in value
      // d = duration
    
    const easeInOutQuad = (t, b, c, d) => {
      t /= d / 2;

      if (t < 1) return c / 2 * t * t + b;
      t--;
      return -c / 2 * (t * (t - 2) - 1) + b;
  };

  const animateScroll = () => {
      currentTime += increment;
      let val = easeInOutQuad(currentTime, start, change, duration);
      element.scrollTop = val;
      if (currentTime < duration) {
          setTimeout(animateScroll, increment);
      }
  };
  animateScroll();
};

export function scrollAnimation(overlayScroll, scrollTop) {
  let duration;
  if (scrollTop < 1000)
      duration = 500;
  else if (scrollTop >= 1000 && scrollTop < 2000)
      duration = 1000;
  else if (scrollTop >= 2000 && scrollTop < 3000)
      duration = 1500;
  else if (scrollTop >= 3000)
      duration = 2000;

  overlayScroll.scroll({ x: 0, y: 0 }, duration, "easeInOutQuint");
};
 */
