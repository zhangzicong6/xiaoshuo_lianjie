const router = require('koa-router')()
var NovelTransferModel = require('../model/NovelTransfer');

router.get('/:randomID', async (ctx, next) => {
	let novel= await NovelTransferModel.findOne({randomID:ctx.params.randomID})
	if(novel){
		let url = 'http://erji.rrdtjj.top/novel_transfer/' + novel._id;
		ctx.response.redirect(url);
	}else{
		ctx.body= 'no url translate'
	}
})

module.exports = router
