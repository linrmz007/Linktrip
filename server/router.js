const Router = require('koa-router');
const controller = require('./controller/controllers')

const router = new Router;

router.post('/user', controller.saveUser);
//router.post('/answer', controller.createAnswer);
//router.post('/', controller.createUser);
//router.get('/', controller.getHandler);

module.exports = router;
