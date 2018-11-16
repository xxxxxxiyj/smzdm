/**
 * 路由认证中间件
 * 部分API需要限制用户登录后才能请求
 */
export default async function(ctx, next) {
	if (ctx.session.user) {
		return next()
	} else {
		return ctx.body = { ok: false, msg: '请登录' }
	}
}