<template>
	<main>
		<section class="content">
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
				<h1 class="title-large-dark m-0">
					{{ renderLobbyText() }}
				</h1>
				<img
					src="@/assets/images/gf-lock.svg"
					class="ml-4"
					alt="lock"
				/>
			</section>
			<div class="flag mx-4 caption-small-light p-1">FIFA 19</div>
			<section class="cards p-4">
				<TeamLeader :user="user" />
				<TeamPlayer />
			</section>
		</section>
		<section class="menu">
			<Menu />
			<Footer />
		</section>
	</main>
</template>

<script>
import TeamLeader from '~/components/cards/TeamLeader.vue'
import TeamPlayer from '~/components/cards/TeamPlayer.vue'
import Menu from '~/components/Menu.vue'
import Footer from '~/components/Footer.vue'

export default {
	components: {
		TeamLeader,
		TeamPlayer,
		Menu,
		Footer
	},
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
main {
	min-height: calc(100% - 105px);
	max-height: 100%;
	display: flex;
	flex-direction: column;
	justify-content: space-between;
	overflow-y: hidden;
}
div.background-image {
	position: absolute;
	width: 375px;
	height: 696px;
	top: 0;
	right: 0;
	background-image: url('~@/assets/images/fifa19-ronaldo-fg-lg.png');
	background-position: 170px -315px;
	background-repeat: no-repeat;
	z-index: -999;
}
section.header {
	border-bottom: 1px solid #cfd1c7;
}
div.flag {
	background-color: #1b1b1b;
	width: max-content;
	border-radius: 0 999px 999px 0;
}
section.cards {
	display: flex;
	flex-wrap: wrap;
	gap: 1rem;
}
</style>
