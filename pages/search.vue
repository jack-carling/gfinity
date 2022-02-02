<template>
	<main></main>
</template>

<script>
export default {
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

<style lang="scss" scoped></style>
