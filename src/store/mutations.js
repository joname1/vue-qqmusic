import * as types from './mutation-types'

const mutations = {
	[types.SET_SINGER](state, singer) {
		state.singer = singer
	},
	[types.SET_PLAYING](state, flag) {
		state.playing = flag
	},
	[types.SET_MAXIMIZE](state, flag) {
		state.maximize = flag
	},
	[types.SET_PLAY_LIST](state, list) {
		state.playlist = list
	},
	[types.SET_SEQUENCE_LIST](state, list) {
		state.sequencelist = list
	},
	[types.SET_PLAY_MODE](state, mode) {
		state.mode = mode
	},
	[types.SET_CURRENT_INDEX](state, index){
		state.currenIndex = index
	}
}

export default mutations