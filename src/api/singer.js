import jsonp from 'base/jsonp'
import {commonparams, options} from 'api/config'

export const durl = 'https://c.y.qq.com/v8/fcg-bin/fcg_v8_singer_track_cp.fcg'

export function getSingerlist(){
	const url = 'https://c.y.qq.com/v8/fcg-bin/v8.fcg'

	const data = Object.assign({}, commonparams, {
		channel: 'singer',
		page: 'list',
		key: 'all_all_all',
		pagesize: 100,
		pagenum: 1,
		hostUin: 0,
		needNewCode: 0,
		platform: 'yqq',
		g_tk: 638971093
	})

	return jsonp(url, data, options)
}