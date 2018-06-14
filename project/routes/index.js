const router = require('koa-router')()
const conf = require('../conf/pro.json')

router.get('/', async (ctx, next) => {
  await ctx.render('index', {
    title: 'Hello Koa 2!'
  })
})

router.get('/url', async (ctx, next) => {
  ctx.redirect(conf.url)
})

router.get('/json', async (ctx, next) => {
  ctx.body = {
    title: 'koa2 json'
  }
})

module.exports = router
