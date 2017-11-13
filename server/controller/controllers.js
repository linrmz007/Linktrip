const Model = require('../model/model');
const {
  User,
  Answer,
  Question,
} = Model;

exports.saveUser = async (req, res) => {
  const user = new User();
  await user.save(req.body)
  .then(() => {
    res.status(201).json({
      message:'Created successfully!',
      user:req.body,
    })
  })
  .catch(error => res.status(500).json({
    message:'Something went wrong!'
  }));
};

// exports.saveQuestion = async (req, res) => {
//   const events = await eventsModel.saveEvents();
//   res.send(events);
// }

//seperate controllers && models for each Schema
