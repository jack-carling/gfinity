<template>
	<article class="card flex flex-col">
		<div class="avatar"></div>
		<span class="footnote-lightgray pt-3">Team Player /</span>
		<div class="invite cursor-pointer flex items-center pt-1">
			<span class="callout-medium-dark">Invite Player</span>
			<img
				src="@/assets/images/gf-caret-right.png"
				class="ml-2"
				alt="caret right"
			/>
		</div>
	</article>
</template>

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
}
div.invite {
	img {
		height: 70%;
	}
	&:hover {
		img {
			animation: bounce infinite 1s linear;
		}
	}
}
@keyframes bounce {
	0%,
	100% {
		transform: translateX(0);
	}
	50% {
		transform: translateX(25%);
	}
}
</style>
