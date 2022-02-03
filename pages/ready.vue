<template>
	<main>
		<section class="wrapper">
			<section class="content">
				<Back />
				<h2 class="callout-medium-light py-8 px-4">
					Matchmaking Lobby
				</h2>
				<h1 class="title-super-light px-4">
					A match has been found for you!
				</h1>
				<p class="body-light px-4 py-8">
					We've found a compatible opponent for you to play
					{{ mode }} with in FIFA 19
				</p>
				<div class="info flex items-center ml-4">
					<span class="caption-small-light">Lobby</span>
					<Avatar />
				</div>
				<div class="info flex items-center ml-4">
					<div>
						<div class="rectangle"></div>
					</div>
					<span class="footnote-light mr-8">
						By tapping accept, you agree to play a match that may
						last for up to 30 minutes.
					</span>
				</div>
			</section>
		</section>
		<section class="menu flex items-center justify-between px-8">
			<span class="callout-small-light-bold">Accept</span>
			<div class="flex">
				<span class="callout-small-light-reg">{{ time }}</span>
				<img
					class="ml-8 cursor-pointer"
					src="@/assets/images/gf-arrow-right.svg"
					alt=""
				/>
			</div>
		</section>
	</main>
</template>

<script>
import Back from '~/components/Back.vue'
import Avatar from '~/components/Avatar.vue'

export default {
	layout: 'lobby',
	components: {
		Back,
		Avatar
	},
	data() {
		return {
			timer: 60
		}
	},
	computed: {
		time() {
			return (
				'-' + new Date(this.timer * 1000).toTimeString().substring(3, 9)
			)
		},
		mode() {
			return this.$store.state.mode
		}
	},
	head() {
		return {
			title: 'Gfinity - Ready'
		}
	},
	mounted() {
		setInterval(() => {
			if (this.timer === 0) this.$router.push('/search')
			this.timer--
		}, 1000)
	}
}
</script>

<style lang="scss" scoped>
section.wrapper {
	width: calc(100% - 2rem);
	height: 100%;
	position: relative;
}
section.wrapper::before {
	content: '';
	position: absolute;
	top: 0;
	right: 0;
	left: 0;
	bottom: 0;
	background: #1b1b1b;
	mix-blend-mode: multiply;
	z-index: 0;
}
section.content {
	position: relative;
	z-index: 1;
}
div.info {
	padding-bottom: 2rem;
	> :first-child {
		width: 75px;
	}
	div.rectangle {
		height: 2px;
		width: 12px;
		background-color: #fff;
	}
	&:last-child {
		padding-bottom: 6rem;
	}
}
section.menu {
	width: calc(100% - 80px);
	height: 90px;
	background-color: #293894;
	position: relative;
	top: -45px;
	left: 80px;
}
</style>
