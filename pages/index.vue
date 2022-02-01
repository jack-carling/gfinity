<template>
	<main>
		<div class="background-image"></div>
		<section class="header flex mx-4 py-4">
			<img
				src="@/assets/images/gf-arrow-left.svg"
				class="cursor-pointer"
				alt=""
			/>
			<span class="callout-medium-dark ml-8">Matchmaking Lobby</span>
		</section>
		<section class="title flex p-4">
			<h1 class="title-large-dark m-0">{{ renderLobbyText() }}</h1>
			<img src="@/assets/images/gf-lock.svg" class="ml-4" alt="lock" />
		</section>
	</main>
</template>

<script>
export default {
	head() {
		return {
			title: 'Gfinity - Matchmaking Lobby'
		}
	},
	data() {
		return {
			user: 'steveroesler'
		}
	},
	methods: {
		renderLobbyText() {
			const user = this.user
			const s = user.charAt(user.length - 1) === 's' ? "'" : "'s"
			return user + s + ' lobby'
		}
	}
}
</script>

<style lang="scss" scoped>
div.background-image {
	position: absolute;
	width: 375px;
	height: 696px;
	top: 0;
	right: 0;
	background-image: url('~@/assets/images/fifa19-ronaldo-fg-lg.png');
	background-position: 170px -310px;
	background-repeat: no-repeat;
	z-index: -999;
}
section.header {
	border-bottom: 1px solid #cfd1c7;
}
</style>
