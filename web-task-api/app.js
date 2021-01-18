const loaders = require('./loaders');
const express = require('express');

let port = process.env.PORT;

async function startServer() {
  const app = express();

  await loaders(app);

  app.get('/', (req, res) => {
    res.send('This is Home page')
  })

  app.listen(port, err => {
    if (err) {
      console.log(err);
      return;
    }
    console.log('Your server is ready');
  });
}

startServer();
