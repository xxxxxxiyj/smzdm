<template>
	<nav>
		<div class="container">
			<router-link to="/" exact>首页</router-link>
			<div class="pull-right">
				<template v-if="user && user.ok">
					<router-link to="/user">{{ user.user.username }}</router-link>
					<router-link v-if="user && user.user && user.user.isAdmin" to="/admin/categories">管理</router-link>
					<a href="#" @click="logout">退出</a>
				</template>
				<template v-else>
					<a href="#" @click="showModal=true; showLogin=true">登录</a>
					<a href="#" @click="showModal=true; showLogin=false">注册</a>
				</template>
			</div>
		</div>
		<!-- 使用 modal 组件，并绑定 close 方法 -->
	</nav>
</template>

<script>
export default {
	data() {
		return {
			showModal: false,
			showLogin: true,

			signEmail: '',
			signinPassword: '',

			signupUsername: '',
			signupEmail: '',
			signupPassword: '',
			signupRepassword: ''
		}
	},
	computed: {
		user() {
			// 通过 store 中定义的 getters 获取用户信息
			return this.$store.getters.currentUser
		}
	},
	methods: {
		async signin() {
			let user = {
				email: this.signinEmail,
				password: this.signinPassword
			}
			// 通过 store dispatch 触发 action
			await this.$store.dispatch({
				type: 'signin',
				user: user
			})
			this.showModal = false
		},
		async signup() {
			let user = {
				username: this.signupUsername,
				email: this.signupEmail,
				password: this.signupPassword,
				repassword: this.signupRepassword,
			}
			await this.$store.dispatch({
				type: 'signup',
				user: user
			})
			this.showModal = false
		},
		logout() {
			this.$store.dispath({ type: 'logout' })
		}
	},
}
</script>

<style scoped>
nav {
	color: #fff;
	background: #333;
}
.container {
	font-size: 0;
	& a {
		display: inline-block;
		padding: 10px 24px;
		color: #fff;
		font-size: 14px;
		text-align: center;

		&.active,
		&:hover,
		&:focus {
			background: #464646;
			text-decoration: none;
		}
	}
}
</style>