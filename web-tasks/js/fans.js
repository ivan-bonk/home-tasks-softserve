const user = document.getElementById('user');
const feedback = document.getElementById('feedback');
const submit = document.querySelector('.send-btn');

let userName = '';
let titleIsEmpty = true

const validate = (e) => {
  const value = e.target.value;
  if (value.length > 0) {
    titleIsEmpty = false;
    user.classList.remove('empty');
  } else {
    titleIsEmpty = true;
    user.classList.add('empty');
  }
  userName = value;
}

const postFeedback = (e) => {
  e.preventDefault();

  if (!titleIsEmpty) {
    console.log(userName);
  }
}

user.addEventListener('input', validate);

submit.addEventListener('click', postFeedback)