import {playMode} from 'base/config'

const state = {
	singer: {},
	playing: false,
	maximize: false,
	playlist: [],
	sequencelist: [],
	mode: playMode.sequence,
	currentIndex: -1,
}

export default state