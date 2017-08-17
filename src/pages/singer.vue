<template>
	<div class="list-wrapper">
		<div class="indexlist">
			<ul class="indexlist_content">
				<li v-for="group in singers">
					<p class="indexlist_title"><span>{{group.title}}</span></p>
						<a @click="singerview" v-for="item in group.items">
							<div class="singer_info">
								<img class="singer_avatar" v-lazy="item.avatar"></img>
								<span class="singer_name">{{item.name}}</span>
							</div>
						</a>
				</li>
			</ul>
		</div>
	<router-view></router-view>
	</div>
</template>

<script>
import {getSingerlist} from 'api/singer'
import {statusCode} from 'api/config'

export default {
  components: {
  },
  data () {
    return {
    	singers: []
    }
  },
  created(){
  	this._getSingerlist()
  },
  methods:{
  	_getSingerlist: function(){
  		getSingerlist().then((res) => {
  			if (res.code == statusCode) {
  			this.singers = this._normalize(res.data.list)
  			}
  		})
  	},
  	_normalize(list) {
  	let map = { }
  	list.forEach((item) => {
  	const key = item.Findex
  	if (!map[key]) {
  		map[key] = {
  			title: key,
  			items: []
  		}
  	}
  	map[key].items.push({
  		id: item.Fsinger_mid,
  		name: item.Fsinger_name,
  		avatar: `https://y.gtimg.cn/music/photo_new/T001R90x90M000${item.Fsinger_mid}.jpg?max_age=2592000`
  	})
  })
  	let rat = []
  	for (let key in map) {
  		let val = map[key]
  		if (val.title.match(/[a-zA-Z]/)) {
  			rat.push(val)
  		}
  	}
  	rat.sort((a, b) =>{
  		return a.title.charCodeAt(0) - b.title.charCodeAt(0)
  	})
  	return rat.concat()
  },
  singerview(singer) {
  	this.$router.push({
  		path: `/singer/${singer.id}`
  	})
  }
}
}
</script>
<style scoped>
.list-wrapper {
    width: 100%;
}
.indexlist {
    width: 100%;
    position: relative;
    overflow: hidden
}
.indexlist_content {
	height: 576px;
	overflow: auto;
	-webkit-overflow-scrolling: touch;
}
.indexlist_title {
    background-color: #e5e5e5;
    padding-left: 15px;
    font-weight: bold;
}
.singer_info {
	border-bottom: 1px solid #efeff4;
    background-origin: content-box;
    -webkit-box-align: center;
        -ms-flex-align: center;
            align-items: center;
    box-sizing: border-box;
    display: flex;
    font-size: 15px;
    line-height: 3;
    min-height: inherit;
    overflow: hidden;
    padding: 0 20px;
    width: 100%;
}
.singer_avatar {
	height: 3.333333rem;
	width: 3.333333rem;
	border-radius: 50%;
}
.singer_name{
	color: black;
	margin: 10px 12px;
}
</style>