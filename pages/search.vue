<template>
	<main>
		<section class="wrapper">
			<section class="content">
				<Back />
				<h2 class="callout-medium-light py-8 px-4">
					Matchmaking Lobby
				</h2>
				<h1 class="title-super-light px-4">
					Searching for compatible opponents
				</h1>
				<p class="body-light px-4 py-8">
					We're searching our database of players to pair you with an
					opponent of similar skill
				</p>
				<div class="info flex items-center ml-4">
					<span class="caption-small-light">Lobby</span>
					<div class="avatar">
						<img src="@/assets/images/gf-avatar-01.png" alt="" />
					</div>
				</div>
			</section>
		</section>
	</main>
</template>

<script>
import Back from '~/components/Back.vue'

export default {
	layout: 'lobby',
	components: {
		Back
	},
	data() {
		return {
			title: 'Gfinity - Searching'
		}
	},
	head() {
		return {
			title: this.title
		}
	},
	mounted() {
		setInterval(() => {
			if (this.title === 'Gfinity - Searching...')
				return (this.title = 'Gfinity - Searching')
			this.title += '.'
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
	background: #293894;
	mix-blend-mode: multiply;
	z-index: 0;
}
section.content {
	position: relative;
	z-index: 1;
}
div.info {
	padding-bottom: 3rem;
	span {
		width: 75px;
	}
	div.avatar {
		border: 2px solid #fff;
		border-radius: 50%;
		padding: 5px;
		position: relative;
		img {
			width: 48px;
			border-radius: 50%;
		}
		&:after {
			content: '';
			border: 2px solid #fff;
			border-radius: 50%;
			position: absolute;
			top: 0;
			right: 0;
			bottom: 0;
			left: 0;
			animation: ping 2s cubic-bezier(0, 0, 0.2, 1) infinite;
		}
	}
}

@keyframes ping {
	75%,
	100% {
		transform: scale(2);
		opacity: 0;
	}
}
</style>
