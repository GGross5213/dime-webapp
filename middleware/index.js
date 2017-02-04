import router from 'koa-router'

router.get('/', async (ctx) => {
  await render('index.html');
})

export default router
