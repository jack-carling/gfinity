<template>
	<section>
		<table ref="types" class="menu">
			<tbody @click="handleMenu('types')">
				<tr>
					<td>
						<span class="callout-small-dark-bold">Type</span>
					</td>
					<td>
						<span class="callout-small-dark-reg">
							{{ selectedType }}
						</span>
					</td>
					<td>
						<img
							:class="open === 'types' ? 'open' : 'close'"
							src="@/assets/images/gf-caret-down.png"
							alt=""
						/>
					</td>
				</tr>
			</tbody>
			<tbody v-for="(option, i) in types" :key="i">
				<tr class="option" @click="handleClick('types', i)">
					<td></td>
					<td>
						<span class="callout-small-dark-reg">{{ option }}</span>
					</td>
					<td></td>
				</tr>
			</tbody>
		</table>

		<table ref="gameModes" class="menu">
			<tbody @click="handleMenu('gameModes')">
				<tr>
					<td>
						<span class="callout-small-dark-bold">Gamemode</span>
					</td>
					<td>
						<span class="callout-small-dark-reg">
							{{ selectedGameMode }}
						</span>
					</td>
					<td>
						<img
							:class="open === 'gameModes' ? 'open' : 'close'"
							src="@/assets/images/gf-caret-down.png"
							alt=""
						/>
					</td>
				</tr>
			</tbody>
			<tbody v-for="(option, i) in gameModes" :key="i">
				<tr class="option" @click="handleClick('gameModes', i)">
					<td></td>
					<td>
						<span class="callout-small-dark-reg">{{ option }}</span>
					</td>
					<td></td>
				</tr>
			</tbody>
		</table>

		<table ref="lobbies" class="menu">
			<tbody @click="handleMenu('lobbies')">
				<tr>
					<td>
						<span class="callout-small-dark-bold">
							Lobby Status
						</span>
					</td>
					<td>
						<span class="callout-small-dark-reg">
							{{ selectedLobby }}
						</span>
					</td>
					<td>
						<img
							:class="open === 'lobbies' ? 'open' : 'close'"
							src="@/assets/images/gf-caret-down.png"
							alt=""
						/>
					</td>
				</tr>
			</tbody>
			<tbody v-for="(option, i) in lobbies" :key="i">
				<tr class="option" @click="handleClick('lobbies', i)">
					<td></td>
					<td>
						<span class="callout-small-dark-reg">{{ option }}</span>
					</td>
					<td></td>
				</tr>
			</tbody>
		</table>

		<div class="placeholder"></div>
	</section>
</template>

<script>
export default {
	data() {
		return {
			open: null,
			selectedType: 'Competitive',
			selectedGameMode: 'Squad Battles',
			selectedLobby: 'Invite Only',
			types: ['Friendly'],
			gameModes: [
				'Ultimate Team',
				'Kick Off',
				'Skill Games',
				'Practice Arena'
			],
			lobbies: ['Public']
		}
	},
	watch: {
		open() {
			const element = this.open
			this.initializePositions()
			if (!element) return
			const size = this[element].length * 50
			this.$refs[element].style.transform = `translateY(-${size}px)`
			if (element === 'gameModes') {
				this.$refs.types.style.transform = `translateY(-${size}px)`
			} else if (element === 'lobbies') {
				this.$refs.types.style.transform = `translateY(-${size}px)`
				this.$refs.gameModes.style.transform = `translateY(-${size}px)`
			}
		}
	},
	mounted() {
		this.initializePositions()
	},
	methods: {
		handleMenu(element) {
			if (element === this.open) return (this.open = null)
			this.open = element
		},
		initializePositions() {
			this.$refs.types.style.top = '0px'
			this.$refs.gameModes.style.top = '50px'
			this.$refs.lobbies.style.top = '100px'
			this.$refs.types.style.transform = ''
			this.$refs.gameModes.style.transform = ''
			this.$refs.lobbies.style.transform = ''
		},
		handleClick(target, index) {
			let selected
			switch (target) {
				case 'types':
					selected = this.selectedType
					this.selectedType = this[target][index]
					break
				case 'gameModes':
					selected = this.selectedGameMode
					this.selectedGameMode = this[target][index]
					break
				case 'lobbies':
					selected = this.selectedLobby
					this.selectedLobby = this[target][index]
					break
			}
			this[target].splice(index, 1)
			this[target].unshift(selected)
			this.initializePositions()
			this.open = null
		}
	}
}
</script>

<style lang="scss" scoped>
section {
	margin: 0 1rem;
	position: relative;
	div.placeholder {
		height: 150px;
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
