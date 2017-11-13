const mongoose = require('mongoose');

mongoose.Promise = global.Promise;
mongoose.connect('mongodb://afrocode:twentythousanddollars@ds155315.mlab.com:55315/linktrip', {useMongoClient: true});
mongoose.connection.once('open', () => {
  console.log('Mongoose connected!');
})

mongoose.connection.on('error', () => {
  console.log('Something went wrong, Error!');
})

//MongoError: Authentication failed.
