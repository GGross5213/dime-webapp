import Koa from 'koa'
import bodyParser from 'koa-bodyparser'
import logger from 'koa-logger'
import serve from 'koa-static'
import views from 'koa-views'
import convert from 'koa-convert'
import session from 'koa-session'
import router from './middleware/index'
import {requireAuth} from './middleware/auth'

const app = new Koa();


app.use(views(`${__dirname}/views`, {
    map: {
        html: 'nunjucks'
    }
}));
app.use(logger());
app.use(bodyParser());
app.use(convert(session(app)));
app.use(serve('static/bin'));
app.keys = ['secret_key'];
app.use(requireAuth());
app.use(router.routes())
    .use(router.allowedMethods());


export default app
