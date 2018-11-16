/**
 * vuex 是 Vue 的官方状态管理模式
 * 它采用集中式存储管理把所有组件的状态都保存到一个单一的对象中，
 * 在实际应用中这个对象会变得比较大，所以通常把 store 分割成模块(modules),
 * 每个模块都有自己的 state、getters、mutations 以及 actions
 *
 * state: 用于存储状态数据
 * getters: 可以对state中的数据进行一些处理，类似于 Vue 组件中的计算属性
 * mutations: 定义更改状态数据的方法，必须是同步函数， 
 * 			  更改store中数据的唯一方法是提交 mutation。
 * actions: 和 mutations类似， 但是 action 是通过提交 mutation 更改数据的，
 * 			而且 action 可以包含异步操作，所以请求 API 是在 action 中完成的
 * 			而不是mutation。
 */
import * as types from '../mutation-types'
import { fetch, user as userUrls } from '../../api'

const state = {
	data: {}
}

const getters = {
	currentUser: state => state.data
}

const mutations = {
	// 使用 ES6 的计算属性命名功能来使用一个常量作为函数名
	[types.SIGN_USER](state, { data }) {
		state.data = data
	}
}

const actions = {
	// 获取当前登录的用户
	async getUser({ commit }) {
		let res = await fetch.get(userUrls.getUser)

		commit({
			type: types.SIGN_USER,
			data: res.data
		})
	},
	// 用户登录
	async signin({ commit }, { user }) {
		let res = await fetch.post(userUrls.signin, user)

		commit({
			type: types.SIGN_USER,
			data: res.data
		})
	},
	// 用户注册
	async signup({ commit }, { user }) {
		let res = await fetch.post(userUrls.signup, user)

		commit({
			type: type.SIGN_USER,
			data: res.data
		})
	},
	// 退出登录
	async logout({ commit }) {
		let res = await fetch.get(userUrls.logout)

		commit({
			type: types.SIGN_USER,
			data: {}
		})
	}
}

export default {
	state,
	getters,
	mutations,
	actions
}