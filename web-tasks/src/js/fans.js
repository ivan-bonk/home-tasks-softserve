import {
  getFormatedTime,
  toogleBtn,
  validateInput
} from './common';

export default function (online){
  const user = document.getElementById('user');
  const feedback = document.getElementById('feedback');
  const submit = document.querySelector('.send-btn');
  let data = [];

  if(online) {
    console.log(data);
  } else {
    data = JSON.parse(localStorage.getItem('fans')) || [];
  }


  if(user && feedback && submit) {

    data.forEach((el) => {
      createPost(el.userName, el.post, el.time)
    })

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
      if((user.value && feedback.value)) {
        savePost(user.value, feedback.value)
        user.value = '';
        feedback.value = '';
        toogleBtn((user.value && feedback.value), submit);
      }
    });

    function savePost(userName, post) {
      const time = getFormatedTime();
      if(online) {
        console.log(userName, post, time);
      } else {
        const existing = localStorage.getItem('fans');
        window.localStorage.setItem('fans', existing 
          ? JSON.stringify([...JSON.parse(existing), {userName, post, time}]) 
          : JSON.stringify([{userName, post, time}]));
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




