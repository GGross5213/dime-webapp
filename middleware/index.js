import Router from 'koa-router'
import * as auth from './auth'
import * as charity from './charities'
import * as transaction from './transactions'

const router = new Router();

router.get('/login', auth.getLogin);
router.post('/login', auth.postLogin);
router.get('/signup', auth.getSignUp);
router.post('/signup', auth.postSignUp);
router.get('/user', auth.getUser);
router.get('/charity', charity.getCharities)
router.post('/charity/:charityId', charity.addCharity);
router.delete('/charity/:charityId', charity.removeCharity);
router.post('/balance', transaction.updateBalance);
router.post('/accessToken', transaction.getUserAccessToken);
router.get('/transaction', transaction.getTransactions);

router.get('/*', async (ctx) => {
  console.log('In catch all')
  await ctx.render('index.html');
})

export default router
