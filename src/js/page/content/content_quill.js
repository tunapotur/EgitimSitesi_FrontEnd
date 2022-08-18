// require('./quill.js');
// window.Quill = require('Quill');

//https://stackoverflow.com/questions/55539701/import-quill-js-into-laravel-using-mix-webpack

import Quill from 'Quill';
import 'quill/dist/quill.core.css';
import 'quill/dist/quill.snow.css';
import htmlEditButton from 'quill-html-edit-button';
import 'highlight.js/styles/monokai-sublime.css';

import sampleQuillContent from './sample_quill_content.js';

if (document.querySelector('.enter')) {
  let BlockEmbed = Quill.import('blots/block/embed');

  class DividerBlot extends BlockEmbed {}
  DividerBlot.blotName = 'divider';
  DividerBlot.tagName = 'hr';

  Quill.register(DividerBlot);
  Quill.register({
    'modules/htmlEditButton': htmlEditButton,
  });

  const quill = new Quill('#editor-container', {
    modules: {
      htmlEditButton: {},
      history: {
        delay: 2000,
        maxStack: 500,
        userOnly: true,
      },
      syntax: true,
      toolbar: {
        container: '#toolbar-container',
        handlers: {
          undo: () => quill.history.undo(),
          redo: () => quill.history.redo(),
        },
      },
    },
    placeholder: 'Compose an epic...',
    theme: 'snow',
    // bounds: '#standalone-container',
    // scrollingContainer: '#standalone-container',
  });

  // Herhangi bir html üzerinden kopyalanan metni sadece plaintext olarak yapıştırma
  // https://stackoverflow.com/questions/41237486/how-to-paste-plain-text-in-a-quill-based-editor
  quill.clipboard.addMatcher(Node.ELEMENT_NODE, function (node, delta) {
    const plaintext = node.innerText;
    const Delta = Quill.import('delta');
    return new Delta().insert(plaintext);
  });

  quill.setContents(sampleQuillContent);

  // quill.container.firstElementChild.innerHTML = `<iframe width="560" height="315" src="https://www.youtube.com/embed/E-ZbVkvOYmQ" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`;

  document.getElementById('getContent').addEventListener('click', () => {
    console.log(quill.getContents());
    // console.log(quill.root.innerHTML);
  });

  document.getElementById('divider-button').addEventListener('click', () => {
    let range = quill.getSelection(true);
    quill.insertText(range.index, '\n', Quill.sources.USER);
    quill.insertEmbed(range.index + 1, 'divider', true, Quill.sources.USER);
    quill.setSelection(range.index + 2, Quill.sources.SILENT);
  });

  document.getElementById('html-button').addEventListener('click', () => {
    const userContent = prompt('Yazdirilacak Veriyi Gir');
    // console.log(text);

    // const contentLoad = document.querySelector('.ql-editor');

    const quill = new Quill('#editor-container', {});
    const delta = quill.clipboard.convert(userContent);

    // quill.container.firstElementChild.innerHTML = userContent;
    // contentLoad.insertAdjacentHTML('beforeend', text);
    quill.setContents(delta, 'silent');
  });
}

// x^2 + (y - \sqrt[3]{x^2})^2 = 1
