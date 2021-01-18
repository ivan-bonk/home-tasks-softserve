export default function(online) {
  const newsBlock = document.querySelector('.latest-news');
  let data = [];

  if(online) {
    console.log(data);
  } else {
    data = JSON.parse(localStorage.getItem('news')) || [];
  }

  if(newsBlock) {
    data.forEach((el) => {
      const div = document.createElement('div');
      div.classList.add('news-card');
      
      div.innerHTML = `
        <div class="img-wrapper">
          <img class="image" src="${el.img}" alt="first new" />
        </div>
        <div class="card-content">
          <h2 class="title">${el.title}</h2>
          <p class="news-text">${el.text}</p>
        </div>
      `;
      
      newsBlock.append(div)
    })
  }
}