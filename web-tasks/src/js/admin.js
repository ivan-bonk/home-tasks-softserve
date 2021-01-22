import {
  toogleBtn,
  validateInput,
  savePost
} from './common';

export default function (online) {
  const title = document.getElementById('new-title');
  const text = document.getElementById('new-text');
  const submit = document.getElementById('new-submit');
  const upload = document.getElementById('file-upload');

  let imageSource = '';

  if (title && text && submit) {

    upload.addEventListener('change', (e) => {
      let files = e.target.files;
      let reader = new FileReader();

      reader.onload = (function () {
        return function (e) {
          const dest = document.querySelector('.drop-down');
          imageSource = e.target.result;
          const div = document.createElement('div');
          div.innerHTML = `
            <img src="${imageSource}" alt="image" height="250" width="250"/>
          `;
          dest.append(div);
          toogleBtn((imageSource && title.value && text.value), submit);
        };
      })(files[0]);
      reader.readAsDataURL(files[0]);
    })

    title.addEventListener('input', (e) => {
      const input = e.target.value;
      validateInput(title, input)
      toogleBtn((imageSource && title.value && text.value), submit);
    });

    text.addEventListener('input', (e) => {
      const input = e.target.value;
      validateInput(text, input)
      toogleBtn((imageSource && title.value && text.value), submit);
    })

    submit.addEventListener('click', (e) => {
      e.preventDefault();
      if ((imageSource && title.value && text.value)) {
        createPost(imageSource, title.value, text.value)
        title.value = '';
        text.value = '';
        imageSource = '';
        toogleBtn((imageSource && title.value && text.value), submit);
      }
    })
  }

  function createPost(img, title, text) {
    if (online) {
      savePost('news', {
        img,
        title,
        text
      })
    } else {
      const existing = localStorage.getItem('news');
      window.localStorage.setItem('news', existing
        ? JSON.stringify([...JSON.parse(existing), { img, title, text }])
        : JSON.stringify([{ img, title, text }]));
    }
  }

};




