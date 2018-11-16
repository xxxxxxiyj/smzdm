import Vue from 'vue'
import VueRouter from 'vue-router'

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
		}, {
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

export default router