export default function (online) {
  const newsBlock = document.querySelector('.latest-news');

  if (newsBlock) {

    if (online) {
      fetch('http://localhost:8080/news')
        .then((res) => res.json())
        .then((data) => { renderPosts(data) })
    } else {
      renderPosts(JSON.parse(localStorage.getItem('news')) || []);
    }

    function renderPosts(data) {
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
}