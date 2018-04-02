const Koa = require('koa');
const app = new Koa();
const bodyParser = require('koa-bodyparser');
const cors = require('koa-cors');
const router = require('./router');
const db = require('./db');


app.use(cors())
app.use(bodyParser())
app.use(router.routes())
app.use(router.allowedMethods())

app.listen(4000, () => {
  console.log('listening on port 4000!');
});
