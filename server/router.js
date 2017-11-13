const Router = require('koa-router');
const controller = require('./controller/controllers')

const router = new Router;

router.post('/', controller.saveUser);
//router.get('/', controller.getHandler);

module.exports = router;
