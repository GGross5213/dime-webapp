import Router from 'koa-router'
import * as auth from './auth'

const router = new Router();

router.get('/login', auth.getLogin);
router.post('/login', auth.postLogin);
router.get('/signUp', auth.getSignUp);
router.post('/signUp', auth.postSignUp);

router.get('/*', async (ctx) => {
  await ctx.render('index.html');
})

export default router
