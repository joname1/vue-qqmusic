import jsonp from 'base/jsonp'
import {commonparams,options} from 'api/config'
import axios from 'axios'

export function getBannerlist(){
	const url = 'https://c.y.qq.com/musichall/fcgi-bin/fcg_yqqhomepagerecommend.fcg'

	const data = Object.assign({}, commonparams, {
		platform: 'h5',
		uin: 0,
		needNewCode: 1
	})
	return jsonp(url, data, options)
}

export function getDisclist(){
	const url = '/api/getDisclist'

	const data = Object.assign({}, commonparams, {
		platform: 'yqq',
		hostUin: 0,
		sin: 0,
		ein: 29,
		sortId: 5,
		needNewCode: 0,
		rnd: Math.random(),
		categoryId: 10000000,
		format: 'json'
	})
	return axios.get(url, {
		params: data
	}).then((res) => {
		return Promise.resolve(res.data)
	})
}

export const furl = 'https://c.y.qq.com/splcloud/fcgi-bin/fcg_get_diss_by_tag.fcg'