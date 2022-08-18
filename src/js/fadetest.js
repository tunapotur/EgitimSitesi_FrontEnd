import './fadetest.scss';

import { fadeIn, fadeOut, fadeToggle } from './animation/fade';

const bigbox = document.getElementById('bigbox');

const btnFadeIn = document.getElementById('fadein');
const btnFadeOut = document.getElementById('fadeout');
const btnFadeToggle = document.getElementById('fadetoggle');

// * Fade
if (btnFadeIn)
  btnFadeIn.addEventListener('click', async () => {
    await fadeIn(bigbox, {
      duration: 500,
      opacity: 0.75,
    });
    // console.log('Fade In Done');
  });

if (btnFadeOut)
  btnFadeOut.addEventListener('click', async () => {
    await fadeOut(bigbox, {
      duration: 500,
    });
    // console.log('Fade Out Done');
  });

if (btnFadeToggle)
  btnFadeToggle.addEventListener('click', async () => {
    await fadeToggle(bigbox, {
      opacity: 0.75,
    });
    // console.log('Fade Toggle Done');
  });
