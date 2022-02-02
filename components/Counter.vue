<template>
	<div class="callout-small-light-reg">
		<transition name="fade" mode="out-in">
			<span :key="count">
				{{ count.toLocaleString('en-GB') }}
			</span>
		</transition>
		<span> in Queue</span>
	</div>
</template>

<script>
export default {
	data() {
		return {
			count: 4021
		}
	},
	mounted() {
		setInterval(() => {
			const random = Math.floor(Math.random() * 10) + 1
			const plusOrMinus = Math.random() < 0.5 ? -random : random
			this.count += plusOrMinus
		}, 5000)
	}
}
</script>

<style lang="scss" scoped>
.fade-enter-active,
.fade-leave-active {
	transition: all 0.3s ease;
}
.fade-enter,
.fade-leave-to {
	opacity: 0;
}
</style>
