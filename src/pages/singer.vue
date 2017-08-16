<template>
	<div>
		<div class="singerlist-wrapper">
			<div class="indexlist">
				<ul class="indexlist-content">
					<li v-for="item in singers">
						<p class="list_title">A</p>
							<ul>
								<a href="javascript:;">
									<div class="singer_info">
										<img class="singer_avatar" src="http://p.qpic.cn/music_cover/NJjuMOxtdpFtqDEZIb8Ne00SiapRE3KS6gTZVlDQd0oicic0GxyHZicAwQ/600?n=1"></img>
										<span class="singer_name">{{item.Fsinger_name}}</span>
									</div>
								</a>
							</ul>
					</li>
				</ul>
				</div>
				<div class="indexlist-nav">
					<ul class="indexlist-navlist">
						<li class="indexlist-navitem">A</li>
						<li class="indexlist-navitem">B</li>
						<li class="indexlist-navitem">C</li>
						<li class="indexlist-navitem">D</li>
						<li class="indexlist-navitem">E</li>
						<li class="indexlist-navitem">F</li>
						<li class="indexlist-navitem">G</li>
						<li class="indexlist-navitem">H</li>
						<li class="indexlist-navitem">I</li>
						<li class="indexlist-navitem">J</li>
						<li class="indexlist-navitem">K</li>
						<li class="indexlist-navitem">L</li>
						<li class="indexlist-navitem">N</li>
						<li class="indexlist-navitem">M</li>
						<li class="indexlist-navitem">O</li>
						<li class="indexlist-navitem">P</li>
						<li class="indexlist-navitem">Q</li>
						<li class="indexlist-navitem">R</li>
						<li class="indexlist-navitem">S</li>
						<li class="indexlist-navitem">T</li>
						<li class="indexlist-navitem">U</li>
						<li class="indexlist-navitem">V</li>
						<li class="indexlist-navitem">W</li>
						<li class="indexlist-navitem">X</li>
						<li class="indexlist-navitem">Y</li>
						<li class="indexlist-navitem">Z</li>
						<li class="indexlist-navitem">#</li>
					</ul>
				</div>
			</div>
		</div>
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
  			this.singers = res.data.list
  			}
  		})
  	}
  }
}
</script>
<style>
.singer_avatar {
	height: 50px;
	width: 50px;
	border-radius: 50%;
}
.singer_name{
	color: black;
	margin: 10px 15px;
}
.singerlist-wrapper {
    width: 100%;
}
.indexlist {
    width: 100%;
    position: relative;
    overflow: hidden
}
.indexlist-nav {
	height: 576px;
	line-height: 15px;
    position: absolute;
    top: 5.6rem;
    bottom: 0;
    right: 0;
    margin: 0;
    background-color: #fff;
    border-left: solid 1px #ddd;
    text-align: center;
    max-height: 100%;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-orient: vertical;
    -webkit-box-direction: normal;
        -ms-flex-direction: column;
            flex-direction: column;
    -webkit-box-pack: center;
        -ms-flex-pack: center;
            justify-content: center
}
.indexlist-navlist {
    padding: 0;
    margin: 0;
    list-style: none;
    max-height: 100%;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-orient: vertical;
    -webkit-box-direction: normal;
        -ms-flex-direction: column;
            flex-direction: column
}
.indexlist-navitem {
    padding: 2px 6px;
    font-size: 12px;
    -webkit-user-select: none;
       -moz-user-select: none;
        -ms-user-select: none;
            user-select: none;
    -webkit-touch-callout: none
}
.list_title {
    margin: 0;
    background-color: #ececec;
    padding-left: 15px;
    font-weight: bold;
}
.indexlist-content {
	overflow: auto;
	height: 576px;
	margin: 0;
	padding: 0; 
}
.singer_info {
    background-size: 120% 1px;
    background-repeat: no-repeat;
    background-position: top left;
    background-origin: content-box;
    -webkit-box-align: center;
        -ms-flex-align: center;
            align-items: center;
    box-sizing: border-box;
    display: flex;
    font-size: 16px;
    line-height: 3;
    min-height: inherit;
    overflow: hidden;
    padding: 0 20px;
    width: 100%;
}
.mint-cell-title {
    -webkit-box-flex: 1;
        -ms-flex: 1;
            flex: 1;
}
</style>