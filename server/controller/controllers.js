const Model = require('../model/model');
const {
  User,
  Answer,
  Question,
} = Model;

exports.saveUser = async (ctx, next) => {

  // ctx.status = 201;
  // ctx.body = {
  //   message:'Created successfully!',
  //   user: ' ctx.body',
  // };


  const userData = ctx.request.body;
  console.log('Step 1+++++++++++++++++++++++');

  let user = User.findOne({ id: userData.id });
  console.log('Step 2////////////////////',user);
  if(!user) {
    let user = new User();
    console.log('Step 3-------------------');

    user.accessToken = userfbData.accessToken;
    user.name = userfbData.name;
    user.email = userfbData.email;
    user.picture = userfbData.picture.url;

    const newUser = await user.save()
      .then((user) => {
        ctx.status = 201;
        let message = 'User Created Successfully';
        return user;

      }).catch(error => {
        ctx.status = 500;
        let message = 'Something went wrong!';
      });

      ctx.body = {
        message: message,
        user: newUser,
      }
  } else {
    ctx.status = 200;
    ctx.body = {
      message: 'Old User returned',
      user: user,
    }
  }
}


exports.createUser = async (ctx, next) => {
  const user = new User();
  const userfbData = ctx.request.body;
  user.accessToken = userfbData.accessToken;
  user.name = userfbData.name;
  user.email = userfbData.email;
  user.picture = userfbData.picture.url;
  await user.save()
  .then(() => {
    ctx.status(201).json({
      message:'Created successfully!',
      user:ctx.body,
    })
  })
  .catch(error => next.status(500).json({
    message:'Something went wrong!'
  }))
}
