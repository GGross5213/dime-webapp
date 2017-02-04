import Router from 'koa-router'
import * as auth from './auth'

const router = new Router();

router.get('/login', auth.getLogin);
router.post('/login', auth.postLogin);
router.get('/signup', auth.getSignUp);
router.post('/signup', auth.postSignUp);

router.get('/*', async (ctx) => {
  console.log('In catch all')
  await ctx.render('index.html');
})

export default router
