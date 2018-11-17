import Vue from 'vue'
import VueRouter from 'vue-router'
import store from '../store'
import admin from './admin'

// 使用import()引入组年，webpack会为其按需加载
const home = () => import ('../pages/home.vue')
const notFound = () => import('../pages/notFound.vue')

Vue.use(VueRouter)

const router = new VueRouter({
	mode: 'history',
	linkActiveClass: 'active', // 用于指定当前路由与<router-link>匹配时给其添加的class值
	routes: [
		{
			path: '/',
			component: home
		}, 
		// 添加admin路由
		...admin,
		{
			path: '*',
			component: notFound
		}
	],
	scrollBehavior(to, from, savedPosition) {  // 控制页面的滚动，即每次切换了路由之后都需要把页面滚动到最顶端
		if (savedPosition) {
			return savedPosition
		}
		return {x: 0, y: 0}
	}
})

router.beforeEach(async (to, from, next) => {
	await store.dispatch({ type: 'getUser' })

	let data = store.state.user.data
	let logedIn = false
	let user = {}

	if (data) {
		logedIn = data.ok
		user = data.user
	}

	if (to.matched.some(record => record.meta.requiresLogin)) {
		// 对于需要登录才能访问的页面
		// 判断是否登录，未登录则跳转至首页
		if (!logedIn) {
			next({
				path: '/'
			})
		} else {
			next()
		}
	} else if (to.matched.some(record => record.meta.requiresAdmin)) {
		// 对于只有管理员才能访问的页面
		// 判断是否是管理员，不是则跳转至首页
		if (logedIn && user.isAdmin) {
			next()
		} else {
			next({
				path: '/'
			})
		}
	} else {
		next()
	}
})

export default router