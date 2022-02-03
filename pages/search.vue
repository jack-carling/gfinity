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
					<Avatar />
				</div>
				<div class="info flex items-center ml-4">
					<div>
						<div class="rectangle"></div>
					</div>
					<Counter />
				</div>
			</section>
		</section>
		<section class="menu flex items-center justify-between px-8">
			<span class="callout-small-light-bold">{{ searching }}</span>
			<div class="flex">
				<span class="callout-small-light-reg">{{ time }}</span>
				<NuxtLink to="/">
					<img
						class="ml-8 cursor-pointer"
						src="@/assets/images/gf-close.svg"
						alt=""
					/>
				</NuxtLink>
			</div>
		</section>
	</main>
</template>

<script>
import Back from '~/components/Back.vue'
import Avatar from '~/components/Avatar.vue'
import Counter from '~/components/Counter.vue'

export default {
	layout: 'lobby',
	components: {
		Back,
		Avatar,
		Counter
	},
	data() {
		return {
			searching: 'Searching',
			timer: 0,
			randomTime: this.randomInterval(10, 15)
		}
	},
	computed: {
		title() {
			return 'Gfinity - ' + this.searching
		},
		time() {
			return new Date(this.timer * 1000).toTimeString().substring(3, 9)
		}
	},
	head() {
		return {
			title: this.title
		}
	},
	mounted() {
		setInterval(() => {
			this.timer++
			if (this.searching === 'Searching...')
				return (this.searching = 'Searching')
			this.searching += '.'
		}, 1000)
	},
	methods: {
		randomInterval(min, max) {
			return Math.floor(Math.random() * (max - min + 1) + min)
		}
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
	background-color: #1b1b1b;
	position: relative;
	top: -45px;
	left: 80px;
}
</style>
