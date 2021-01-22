import {
  getFormatedTime,
  toogleBtn,
  validateInput,
  savePost
} from './common';

export default function (online) {
  const user = document.getElementById('user');
  const feedback = document.getElementById('feedback');
  const submit = document.querySelector('.send-btn');

  if (user && feedback && submit) {

    function renderPosts(data) {
      data.forEach((el) => {
        createPost(el.userName, el.post, el.time)
      })
    }

    if (online) {
      fetch('http://localhost:8080/fans')
        .then((res) => res.json())
        .then((data) => { renderPosts(data) })
    } else {
      renderPosts(JSON.parse(localStorage.getItem('fans')) || []);
    }

    user.addEventListener('input', (e) => {
      const input = e.target.value;
      validateInput(user, input)
      toogleBtn((user.value && feedback.value), submit);
    });

    feedback.addEventListener('input', (e) => {
      const input = e.target.value;
      validateInput(feedback, input)
      toogleBtn((user.value && feedback.value), submit);
    })

    submit.addEventListener('click', (e) => {
      e.preventDefault();
      if ((user.value && feedback.value)) {
        saveFanPost(user.value, feedback.value)
        user.value = '';
        feedback.value = '';
        toogleBtn((user.value && feedback.value), submit);
      }
    });

    function saveFanPost(userName, post) {
      const time = getFormatedTime();
      if (online) {
        savePost('fans', {
          userName,
          post,
          time
        });
      } else {
        const existing = localStorage.getItem('fans');
        window.localStorage.setItem('fans', existing
          ? JSON.stringify([...JSON.parse(existing), { userName, post, time }])
          : JSON.stringify([{ userName, post, time }]));
      };

      createPost(userName, post, time)
    }

    function createPost(userName, post, time) {
      const fansBlock = document.querySelector('.fans-feedback');
      const div = document.createElement('div');

      const html = `
        <div class="text">${post}</div>
        <div class="feedback-info">
          <div class="create-time">${time}</div>
          <div class="create-by">${userName}</div>
        </div>
      `;
      div.classList.add('feedback');
      div.innerHTML = html
      fansBlock.append(div)
    }

  }

};




