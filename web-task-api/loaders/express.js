const bodyParser = require('body-parser');
const cors = require('cors');

const newsRouter = require('../routes/news');
const fansRouter = require('../routes/fans');

async function loadingApp(app) {
  app.get('/status', (req, res) => {
    res.status(200).end();
  });
  app.head('/status', (req, res) => {
    res.status(200).end();
  });
  app.enable('trust proxy');

  app.use(cors());
  app.use(bodyParser.json());

  app.use(cors());
  app.use(bodyParser.json());
  app.use('/news', newsRouter);
  app.use('/fans', fansRouter);

  return app;
}

module.exports = loadingApp;
