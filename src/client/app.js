import 'babel-polyfill'
// 引入 element-ui 的css
import 'element-ui/lib/theme-default/index.css'
// 引入 element-ui 的组件
import ElementUI from 'element-ui'
import Vue from 'vue'
import VueHead from 'vue-head'

import App from './components/app.vue'
import router from './router'
import store from './store'
// 引入 modal 组件
import modal from './components/modal.vue'

Vue.use(VueHead)
// 注册 modal 组件
Vue.component('modal', modal)

// 创建 vue 实例，并渲染组件
// 渲染app.vue到#app
const app = new Vue({
	el: '#app',
	store,
	router,  // 传入router给Vue app
	render: h => h(App)
})