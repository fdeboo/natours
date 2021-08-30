const mongoose = require('mongoose');
require('dotenv').config({ path: './.env' });
const app = require('./app');

process.on('uncaughtException', (err) => {
  console.log('UNCAUGHT EXCEPTION! 💥 Shutting down...');
  console.log(`${err.name}: ${err.message}`);
  process.exit(1);
});

const DB = process.env.DB_CONNECTION_STR.replace(
  '<PASSWORD>',
  process.env.DB_PASSWORD
);

mongoose
  // .connect(process.env.DB_LOCAL, {
  .connect(DB, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useFindAndModify: false,
  })
  .then(() => console.log('DB connection successful'));

const port = process.env.PORT || 3000;
const server = app.listen(port, () => {
  console.log(`App running on port ${port}`);
});

process.on('unhandledRejection', (err) => {
  console.log(err.name);
  console.log(err.message);
  console.log('UNHANDLED REJECTION! 💥 Shutting down...');
  server.close(() => {
    process.exit(1);
  });
});
