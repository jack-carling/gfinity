export const state = () => ({
	mode: 'Squad Battles'
})

export const mutations = {
	update(state, mode) {
		state.mode = mode
	}
}
