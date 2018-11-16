<template>
	<layout-component>
		<div slot="body">home</div>
	</layout-component>
</template>

<script>
import layout from '../components/layout.vue'

export default {
	components: {
		'layout-component': layout
	},
	head: {
		title: {
			inner: '首页'
		}
	}
}
</script>
