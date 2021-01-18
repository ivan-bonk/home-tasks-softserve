const mongoose = require('mongoose');
require('dotenv').config();
const database = process.env.DATABASE_URL

async function connectDB() {
  const connection = await mongoose.connect(database, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });
  return connection.connection.db;
}
module.exports = connectDB;
