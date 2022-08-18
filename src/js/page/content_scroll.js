import { elements } from '../elements';
import { fadeIn, fadeOut } from '../animation/fade';
import scrollTo from '../animation/scrollTo';

// scroll top butonunun görünüp gizlenmesi
window.addEventListener('scroll', () => {
  const element = elements.contentScrollTop;
  const elementDisplay = elements.contentScrollTop.style.display;

  if (window.scrollY >= 100) {
    if (elementDisplay != 'flex') fadeIn(element, { duration: 400, opacity: 0.5, timing: 'easeIn', display: 'flex' });
  } else {
    if (elementDisplay === 'flex') fadeOut(element, { duration: 500, timing: 'easeOut' });
  }
});

// sayfanın en üstüne git
elements.contentScrollTop.addEventListener('click', () => {
  scrollTo(elements.root);
  // elements.root.scrollTop = 0;
});
