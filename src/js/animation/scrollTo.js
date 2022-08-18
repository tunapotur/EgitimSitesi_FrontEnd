import animate from './animate';
import { getTiming } from './ease';

const scrollTo = async (element, args) => {
  const defaults = { duration: null, scrollTo: 0 },
    params = { ...defaults, ...args };

  let scrollDuration,
    position = element.scrollTop;

  // Eğer duration atanmamışsa
  if (!params.duration) {
    if (position < 1000) scrollDuration = 500;
    else if (position >= 1000 && position < 2000) scrollDuration = 750;
    else if (position >= 2000 && position < 3000) scrollDuration = 1000;
    else if (position >= 3000) scrollDuration = 1250;
  } else {
    scrollDuration = params.duration;
  }

  // root element
  document.documentElement.setAttribute('style', 'scroll-behavior:auto;');

  await animate({
    duration: scrollDuration,
    timing: getTiming('easeInOut'),
    operation: function (progress) {
      element.scrollTop = position - parseInt(progress * (position - params.scrollTo), 10);
    },
  });

  document.documentElement.removeAttribute('style', 'scroll-behavior:auto;');
};

export default scrollTo;
