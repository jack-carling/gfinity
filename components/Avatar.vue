<template>
	<div class="avatar">
		<img src="@/assets/images/gf-avatar-01.png" alt="" />
	</div>
</template>

<style lang="scss" scoped>
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

@keyframes ping {
	75%,
	100% {
		transform: scale(2);
		opacity: 0;
	}
}
</style>
