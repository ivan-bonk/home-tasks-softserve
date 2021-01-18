import fans from './js/fans';
import admin from './js/admin';
import news from './js/news';
import { isOnline } from './js/common';

window.addEventListener('online',  () => {
  console.log('ima online');
  localStorage.removeItem('news');
  localStorage.removeItem('fans')
});

const online = isOnline();

fans(online);
admin(online);
news(online);