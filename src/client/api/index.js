/**
 * 使用 axios 作为请求API的工具
 * axios 是一个基于Promise的 http 客户端工具
 * 每一个 axios 都返回一个Promise
 */
import axios from 'axios'

// 创建 axios 实例
const fetch = axios.create({
	baseURL: '/api/',
	time: 1000,
	withCredentials: true  // 使请求时提供凭据， 也就是cookie
})

// 对应 Koa 中实现的API接口地址
const user = {
	getUser: 'user',
	signin: 'signin',
	signup: 'signup',
	logout: 'logout'
}

const category = {
	findAll: 'cates',
	add: 'cates/add',
	edit: 'cates/edit',
	remove: 'cates/delete'
}

export {
	fetch,
	user,
	category
}