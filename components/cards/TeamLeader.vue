<template>
	<article class="card flex flex-col">
		<div class="avatar"></div>
		<span class="footnote-lightgray pt-3">Team Leader /</span>
		<span class="callout-medium-dark pt-1">{{ user }}</span>
		<div class="stats flex mt-4">
			<div class="ready caption-small-dark p-1 mr-2">READY</div>
			<div class="score flex">
				<img class="p-1" src="@/assets/images/gf-pts-g.svg" alt="" />
				<span class="caption-small-dark">74</span>
			</div>
		</div>
	</article>
</template>

<script>
export default {
	props: {
		user: String
	}
}
</script>

<style lang="scss" scoped>
article.card {
	border-radius: 6px;
	width: 140px;
}
div.avatar {
	border: 1px solid #cfd1c7;
	width: 100%;
	height: 187px;
	border-radius: 6px;
	background-position: center;
	background-image: url('~@/assets/images/gf-avatar-01.png');
}
div.ready {
	border: 1px solid #1b1b1b;
	line-height: initial;
}
div.score {
	span {
		color: #e94235;
		letter-spacing: -0.5px;
	}
}
</style>
