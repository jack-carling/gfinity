<template>
	<footer class="p-4 flex items-center justify-between">
		<span class="callout-small-light-bold">Play Now</span>
		<Counter />
		<NuxtLink to="/search">
			<img
				class="cursor-pointer"
				src="@/assets/images/gf-arrow-right.svg"
				alt=""
			/>
		</NuxtLink>
	</footer>
</template>

<script>
import Counter from './Counter.vue'

export default {
	components: {
		Counter
	}
}
</script>

<style lang="scss" scoped>
footer {
	height: 90px;
	background-color: #293894;
	position: relative;
	z-index: 1;
}
</style>
