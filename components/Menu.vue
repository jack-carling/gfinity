<template>
	<section>
		<table
			v-for="(menu, index) in data"
			:key="index"
			:ref="'menu' + index"
			class="menu"
		>
			<tbody @click="handleMenu(index)">
				<tr>
					<td>
						<span class="callout-small-dark-bold">
							{{ menu.name }}
						</span>
					</td>
					<td>
						<span class="callout-small-dark-reg">
							{{ menu.selected }}
						</span>
					</td>
					<td>
						<img
							:class="open === index ? 'open' : 'close'"
							src="@/assets/images/gf-caret-down.png"
							alt=""
						/>
					</td>
				</tr>
			</tbody>
			<tbody
				v-for="(option, optionIndex) in menu.options"
				:key="optionIndex"
			>
				<tr class="option" @click="handleClick(index, optionIndex)">
					<td></td>
					<td>
						<span class="callout-small-dark-reg">{{ option }}</span>
					</td>
					<td></td>
				</tr>
			</tbody>
		</table>

		<div ref="placeholder" class="placeholder"></div>
	</section>
</template>

<script>
export default {
	data() {
		return {
			data: [
				{
					name: 'Type',
					selected: 'Competitive',
					options: ['Cooperative']
				},
				{
					name: 'Gamemode',
					selected: 'Squad Battles',
					options: [
						'Ultimate Team',
						'Kick Off',
						'Skill Games',
						'Practice Arena'
					]
				},
				{
					name: 'Lobby Status',
					selected: 'Invite Only',
					options: ['Public']
				}
			],
			open: null
		}
	},
	watch: {
		open() {
			this.initializePositions()
			const index = this.open
			if (index === null) return
			const size = this.data[index].options.length * 50
			this.data.some((_, i) => {
				const [element] = this.$refs['menu' + i]
				element.style.transform = `translateY(-${size}px)`
				return i === index
			})
		}
	},
	mounted() {
		const height = this.data.length * 50
		this.$refs.placeholder.style.height = `${height}px`
		this.initializePositions()
	},
	methods: {
		handleMenu(index) {
			if (index === this.open) return (this.open = null)
			this.open = index
		},
		initializePositions() {
			let position = 0
			this.data.forEach((_, i) => {
				const [element] = this.$refs['menu' + i]
				element.style.top = `${position}px`
				element.style.transform = ''
				position += 50
			})
		},
		handleClick(menuIndex, optionIndex) {
			const prevValue = this.data[menuIndex].selected
			const newValue = this.data[menuIndex].options[optionIndex]
			this.data[menuIndex].options.splice(optionIndex, 1, prevValue)
			this.data[menuIndex].selected = newValue
			if (menuIndex === 1) this.updateGameMode(newValue)
			this.initializePositions()
			this.open = null
		},
		updateGameMode(value) {
			this.$store.commit('update', value)
		}
	}
}
</script>

<style lang="scss" scoped>
section {
	margin: 0 1rem;
	position: relative;
	div.placeholder {
		pointer-events: none;
	}
	table.menu {
		cursor: pointer;
		transition: all 0.2s linear;
		background-color: #dfe0d9;
		width: 100%;
		table-layout: fixed;
		border-top: 1px solid #cfd1c7;
		position: absolute;
		tr {
			height: 50px;
		}
		td:nth-child(3) {
			width: 16px;
		}
		&:nth-child(2) {
			top: 50px;
		}
		tr.option:hover {
			text-decoration: underline;
		}
	}
	img {
		&.open {
			transform: rotate(-180deg);
		}
		&.close {
			transform: rotate(0deg);
		}
		transition: transform 0.2s linear;
	}
}
</style>
