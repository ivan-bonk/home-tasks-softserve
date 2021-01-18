const expressLoader = require('./express');
const mongooseLoader = require('./mongoose');

async function connecting(expressApp) {
  await mongooseLoader();
  console.log('MongoDB Intialized');
  await expressLoader(expressApp);
  console.log('Express Intialized');
}

module.exports = connecting;
