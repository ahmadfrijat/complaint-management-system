'use strict';

require('dotenv').config();
// Start up DB Server
const mongoose = require('mongoose');
const options = {
  useNewUrlParser: true,
//   useCreateIndex: true,
  useUnifiedTopology: true,
};
mongoose.connect(process.env.MONGODB_URI, options)
.then(() => {
  require('./src/server.js').start(process.env.PORT);
})
.catch((e) => {
      console.log('__CONNECTION ERROR__', e.message);
    });
// Start the web server