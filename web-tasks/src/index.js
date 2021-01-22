import fans from './js/fans';
import admin from './js/admin';
import news from './js/news';
import { isOnline, savePost } from './js/common';

window.addEventListener('online', () => {
  const fanPosts = JSON.parse(localStorage.getItem('fans'));
  const newPosts = JSON.parse(localStorage.getItem('news'));

  fanPosts && fanPosts.forEach(post => savePost('fans', post));
  newPosts && newPosts.forEach(post => savePost('news', post));

  localStorage.removeItem('news');
  localStorage.removeItem('fans')
});

const online = isOnline();

fans(online);
admin(online);
news(online);