const mongoose = require('mongoose');
mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost/database', {
  useMongoClient: true
});

mongoose.connection.on('error', () => {
  console.log('Something went wrong, Error!');
})
mongoose.connection.once('open', () => {
  console.log('Mongoose connected!');
})
