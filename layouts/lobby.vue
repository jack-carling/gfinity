<template>
	<div class="background">
		<Header />
		<Nuxt />
	</div>
</template>

<script>
import Header from '@/components/Header.vue'

export default {
	layout: 'lobby',
	components: {
		Header
	}
}
</script>

<style lang="scss" scoped>
div.background {
	background-image: url('~@/assets/images/fifa19-ronaldo-fg-lg.png');
	background-position: top 80px right -40px;
	background-repeat: no-repeat;
}
</style>
