'use strict';

const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/database');

const Schema = mongoose.Schema;
const db = require('../db');

const UserSchema = new Schema({
  accessToken: String,
  name: String,
  email: String,
  picture: String,
  answers:[{
    type: Schema.Types.ObjectId,
    ref: 'Answer'
  }],
});

const QuestionSchema = new Schema({
  question: String,
  options:[]
});

const AnswerSchema = new Schema({
  answer: String,
  questionId:{
    type: Schema.Types.ObjectId,
    ref:'Question'
  },
  owner:{
    id: Number,
    type: Schema.Types.Mixed,
    ref: 'User'
  }
});

const User = mongoose.model('User', UserSchema);
const Question = mongoose.model('Question', QuestionSchema);
const Answer = mongoose.model('Answer', AnswerSchema);

User.createUser = (data) => {
  const user = new User({
    accessToken: data.accessToken,
    name: data.name,
    id: data.id,
    email: data.email,
    img: data.picture.data.url,
  });
  return user.save();
}

Answer.createAnswer = (data) => {
  const answer = new Answer({
    answer:data.answer
  });
  return answer.save();
}

module.exports = {
  User,
  Question,
  Answer
};

const user = new User({
  accessToken: String,
  name: String,
  id: Number,
  email: String,
  img: String,
});
console.log(user);
user.save().then().catch(e => console.error(e));
//.then().catch(e=> console.error(e));

const answer = new Answer({
  answer:String,
});
console.log(answer);
answer.save().then().catch(e=> console.error(e));
