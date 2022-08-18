//https://stackoverflow.com/questions/3900701/onclick-go-full-screen
import { eNavbar } from '../../elements';

const fullScreen = () => {
  if (
    (document.fullScreenElement && document.fullScreenElement !== null) ||
    (!document.mozFullScreen && !document.webkitIsFullScreen)
  ) {
    if (document.documentElement.requestFullScreen) document.documentElement.requestFullScreen();
    else if (document.documentElement.mozRequestFullScreen) document.documentElement.mozRequestFullScreen();
    else if (document.documentElement.webkitRequestFullScreen)
      document.documentElement.webkitRequestFullScreen(Element.ALLOW_KEYBOARD_INPUT);
  } else {
    if (document.cancelFullScreen) document.cancelFullScreen();
    else if (document.mozCancelFullScreen) document.mozCancelFullScreen();
    else if (document.webkitCancelFullScreen) document.webkitCancelFullScreen();
  }
};

eNavbar.btnFullScreen.addEventListener('click', () => {
  Array.from(eNavbar.btnFullScreen.children).forEach(child => {
    child.classList.toggle('nav-icons__icon--none');
  });

  fullScreen();
});
