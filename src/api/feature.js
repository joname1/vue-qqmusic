import jsonp from 'base/jsonp'
import {commonparams,options} from 'api/config'
import axios from 'axios'
import Resource from 'vue-resource'

export function getBannerlist(){
	const url = 'https://c.y.qq.com/musichall/fcgi-bin/fcg_yqqhomepagerecommend.fcg'

	const data = Object.assign({}, commonparams, {
		platform: 'h5',
		uin: 0,
		needNewCode: 1
	})
	return jsonp(url, data, options)
}

// export function getDisclist(){
// 	const url = '/api/getDisclist'

// 	const data = Object.assign({}, commonparams, {
// 		platform: 'yqq',
// 		hostUin: 0,
// 		sin: 0,
// 		ein: 29,
// 		sortId: 5,
// 		needNewCode: 0,
// 		rnd: Math.random(),
// 		categoryId: 10000000,
// 		format: 'json'
// 	})
// 	return axios.get(url, {
// 		params: data
// 	}).then((res) => {
// 		return Promise.resolve(res.data)
// 	})
// }

export function getDisclist() {
	$http.jsonp('https://c.y.qq.com/splcloud/fcgi-bin/fcg_get_diss_by_tag.fcg', {
        params: {
          rnd: Math.random(),
          g_tk: 621402643,
          hostUin: 0,
          format: 'jsonp',
          inCharset: 'uft-8',
          outCharset: 'uft-8',
          notice: 0,
          platform: 'yqq',
          needNewCode: 0,
          categoryId: 10000000,
          sortId: 5,
          sin: 0,
          ein: 29
        },
          jsonp: 'jsonpCallback'
      });
}