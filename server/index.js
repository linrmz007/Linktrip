const Koa = require('koa'); // npm install EVERYTHIING
const app = new Koa();
const bodyParser = require('koa-bodyparser');
const cors = require('koa-cors');

const router = require('./router');
const db = require('./db');

app
  .use(cors())
  .use(bodyParser())
  .use(router.routes())
  .use(router.allowedMethods())

app.listen(4000, () => {
  console.log('listening on port 4000!');
});
