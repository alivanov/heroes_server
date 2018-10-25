const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const mongoose = require('mongoose');
const config = require('./config').get(process.env.NODE_ENV);

// Express on
const app = express();

// Set mongoose promise
mongoose.Promise = global.Promise;

// Connect to DB
mongoose
  .connect(
    config.DB,
    { useNewUrlParser: true },
  )
  .then(() => {
    console.log(`Connected to DB with url:${config.DB}`);
  });

app.use(cors());
app.use(bodyParser.json());
app.use(cookieParser());

require('./routes')(app);

app.listen(config.PORT, () => {
  console.log(`SERVER:${config.PORT}`);
});

module.exports = { app };
