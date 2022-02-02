<template>
	<header class="flex justify-between">
		<NuxtLink to="/">
			<div class="logo p-5 flex">
				<img
					src="@/assets/images/gfinity-logo.svg"
					alt="gfinity-logo"
				/>
			</div>
		</NuxtLink>
		<div class="menu flex items-center">
			<span class="flex-none callout-small-dark-bold">FIFA 19</span>
			<img
				src="@/assets/images/gf-nav-def.svg"
				class="m-6 cursor-pointer"
				alt="navigation"
			/>
		</div>
	</header>
</template>

<style lang="scss" scoped>
div.logo {
	background-color: #1b1b1b;
	width: 105px;
	height: 105px;
}
</style>
