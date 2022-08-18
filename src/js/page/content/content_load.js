import { QuillDeltaToHtmlConverter } from 'quill-delta-to-html';
import sampleQuillContent from './sample_quill_content.js';
import hljs from 'highlight.js';
import katex from 'katex';
// import 'highlight.js/styles/monokai-sublime.css';

const contentLoad = document.querySelector('.content-load');

if (contentLoad) {
  const cfg = {};

  const converter = new QuillDeltaToHtmlConverter(sampleQuillContent.ops, cfg);

  const html = converter.convert();

  contentLoad.insertAdjacentHTML('afterbegin', html);

  document.addEventListener('DOMContentLoaded', event => {
    document.querySelectorAll('pre').forEach(block => {
      hljs.highlightBlock(block);
    });
  });

  const math = document.getElementsByClassName('ql-formula');

  for (let i = 0; i < math.length; i++) {
    katex.render(math[i].textContent, math[i]);
  }
}
