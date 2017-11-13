'use strict';

const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const db = require('../db');

const UserSchema = new Schema({
  accessToken: String,
  name: String,
  id: Number,
  email: String,
  picture: String,
});

const QuestionSchema = new Schema({
  question:'String',
});

const AnswerSchema = new Schema({
  answer:'String',
  questionId:{
    type: Schema.Types.ObjectId,
    ref:'Question'
  }
});

const User = mongoose.model('User', UserSchema);
const Question = mongoose.model('Question', QuestionSchema);
const Answer = mongoose.model('Answer', AnswerSchema);

module.exports = {
  User,
  Question,
  Answer
};
