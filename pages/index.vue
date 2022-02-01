<template>
	<main>
		<img
			class="background-image"
			src="@/assets/images/fifa19-ronaldo-fg-lg.png"
			alt=""
		/>
	</main>
</template>

<script>
export default {
	head() {
		return {
			title: 'Gfinity - Matchmaking Lobby'
		}
	}
}
</script>

<style lang="scss" scoped>
img.background-image {
	position: absolute;
	top: -310px;
	right: -175px;
	z-index: -999;
}
</style>
