<template>
  <div class="player" v-show="playlist.length>0">
  	<!-- 窗口最大化后 -->
    <div class="normal_player" v-show="maximize">
    <div class="wrap">
		<div class="main_box">
		<div class="slider">
			<div class="slider_item">
				<!-- 头部信息 -->
				<div class="flex_box">
					<x-header :left-options="{backText: ''}" style="background-color:rgba(0, 0, 0, 0);">set empty back text</x-header>
					<div class="song_info">
						<span class="album_cover js-imgbox"><img class="album_cover__img" src="https://y.gtimg.cn/music/photo_new/T002R150x150M0000001n7a82gh6IY.jpg?max_age=2592000"></span>
						<div class="song_info__flex">
							<h1 class="song_name"><span class="song_name__text" id="songname">像我这样的人 (Live)</span></h1>
							<p class="singer_name"><span class="singer_name__text" id="singername">毛不易</span></p>
						</div>
						<img class="icon_play" src="../assets/pause.svg" />
					</div>
					<!-- 歌词部分 -->
					<div class="flex_item">
						<div class="lyric" id="lyric">
							<div class="lyric__box" id="lyric_txt">
								<div class="lyric__text" id="lyricDiv">
									<p id="line_0" class="lyric__item--current">像我这样的人 (Live) - 毛不易</p>
									<p id="line_1">词：毛不易</p>
									<p id="line_2">曲：毛不易</p>
									<p id="line_0">东方化工很反感和低功耗低功耗</p>
									<p id="line_1">豆腐干地方符号化横幅广告个人头也让</p>
									<p id="line_2">热特热规范化风格化股份股东分红毛不易</p>
									<p id="line_0">像我这样的人大概热高热儿歌有意见人毛不易</p>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>

	<!-- 功能区域 -->
	<div class="control">
		<div class="operate operate--left">
				<img src="../assets/playlist.svg" class="icon_play_list" />
		</div>
		<div class="operate operate--right">
				<img src="../assets/favorite.svg" class="icon_like" />
		</div>

		<!-- 进度区域 -->
		<div class="progress">
			<div class="progress__bar progress--no_dot">
				<div class="progress__box">
					<div class="progress__bg"></div>
					<div class="progress__load" style="-webkit-transform:translateX(100%);"></div>
					<div class="progress__play" id="js-progress" style="transform: translateX(6.05628%); transition-duration: 1s;"></div>
				</div>
			</div>
			<span class="progress__start js-time-start">00:10</span>
			<span class="progress__end js-time-total">02:51</span>
		</div>

		<div class="btns">
			<a class="btn_download js-download" href="javascript:;">下载这首歌</a>
		</div>
	</div>

	<!-- 背景模糊 -->
	<div class="bg blur" id="bg" style="background-image: url('https://y.gtimg.cn/music/photo_new/T002R300x300M0000001n7a82gh6IY.jpg?max_age=2592000')"></div>
	<div class="bg_mask" style="opacity:0.6;"></div>

	<!-- 播放列表滑出层 -->
	<div class="actionsheet">
		<div class="mod_list_box">
			<h6 class="list_box__tit">播放队列<span class="list_box__count js-playlist-num">(50首)</span></h6>
			<div class="list_box__cont" id="js-playlist-scroll" style="overflow: hidden;">
				<ul class="mod_play_list js-playlist-box" style="transition-property: -webkit-transform; transform-origin: 0px 0px 0px; transition-timing-function: cubic-bezier(0.33, 0.66, 0.66, 1); transform: translate3d(0px, 0px, 0px); transition-duration: 0ms;">
					<li class="" data-index="0">
						<span class="play_list__song ">借 (Live)</span>
						<b class="play_list__line">-</b>
						<span class="play_list__singer">毛不易</span>
					</li>
					<li data-index="1">
						<span class="play_list__song ">消愁 (Live)</span>
						<b class="play_list__line">-</b>
						<span class="play_list__singer">毛不易</span>
					</li>
					<li data-index="2" class="play_list__item--current">
						<span class="play_list__song ">像我这样的人 (Live)</span>
						<b class="play_list__line">-</b>
						<span class="play_list__singer">毛不易</span>
					</li>
				</ul>
			</div>
			<a class="list_box__close js-close-playlist" href="javascript:;">关闭</a>
		</div>
	</div>
</div>
</div>

<!-- 窗口最小化后 -->
    <div class="mini_player" style="background-color: #795548;" v-show="!maximize">
    	<div class="song_info">
    		<span class="album_cover js-imgbox">
    			<img style="width:50px;border-radius:50%;" class="album_cover__img" src="https://y.gtimg.cn/music/photo_new/T002R150x150M0000001n7a82gh6IY.jpg?max_age=2592000">
    		</span>
    		<div class="song_info__flex">
    			<p class="song_name"><span class="song_name__text" id="songname">像我这样的人</span></p>
    			<p class="singer_name"><span class="singer_name__text" id="singername">毛不易</span></p>
    		</div>
    		<!-- <img class="icon_play" src="../assets/pause.svg" /> -->
    		<div class="icon_play" style='width:40px;height:40px;'>
    			<x-circle :percent="percent1" :stroke-width="5" stroke-color="#04BE02">
    				<span><img src="../assets/pause1.svg" style="width: 12px;"></span>
    			</x-circle>
    		</div>
    	</div>
    </div>
  </div>
</template>

<script>
import {XHeader,XCircle} from 'vux'
import {mapGetters} from 'vuex'
export default {
  components: {
    XHeader,XCircle
  },
  data () {
    return {
    	percent1: 80
    }
  },
  computed: {
  	...mapGetters([
  		'maximize',
  		'playlist'
  	])
  }
}
</script>
<style scoped>
.wrap {
	margin-bottom:100px
}
.wrap {
	position:absolute;
	top:0;
	bottom:0;
	width:100%;
	margin-bottom:0;
	overflow:hidden
}
.qq_browser .wrap {
	bottom:40px
}
.main_box {
	position:absolute;
	top:0;
	bottom:154px;
	z-index:3;
	width:100%
}
.slider {
	width:200%;
	height:100%;
	overflow:hidden
}
.slider_item {
	position:relative;
	float:left;
	width:50%;
	height:100%;
	overflow:hidden
}
.slider_index {
	position:absolute;
	bottom:-20px;
	z-index:2;
	width:100%;
	font-size:0;
	text-align:center
}
.slider_index__item {
	display:inline-block;
	width:5px;
	height:5px;
	margin:0 4px;
	background:#fff;
	border-radius:999px;
	opacity:.5
}
.slider_index__item--current {
	opacity:1
}
.flex_box {
	display:-webkit-box;
	-webkit-box-orient:vertical;
	position:absolute;
	top:0;
	bottom:0;
	left:0;
	width:100%;
	overflow:hidden
}
.flex_item {
	-webkit-box-flex:1;
	position:relative
}
.song_info {
	position:relative;
	display:-webkit-box;
	padding:15px 80px 15px 15px;
	background:rgba(0,0,0,.1)
}
.song_info__flex {
	-webkit-box-flex:1;
	display:-webkit-box;
	-webkit-box-orient:vertical;
	-webkit-box-pack:center;
	position:relative;
	overflow:hidden
}
.album_cover {
	position:relative;
	display:block;
	width:80px;
	margin-right:15px;
	overflow:hidden;
	border-radius: 50%;
}
.album_cover::after {
	content:"";
	display:block;
	padding-top:100%
}
.album_cover__img {
	position:absolute;
	top:0;
	left:0;
	z-index:2;
	width:100%;
	background-size:cover
}
.song_name {
	position:relative;
	height:30px;
	overflow:hidden;
	font-size:18px;
	font-weight:normal;
	color:#fff
}
.song_name__text {
	position:absolute;
	top:0;
	bottom:0;
	left:0;
	display:-webkit-box;
	-webkit-box-align:center;
	white-space:nowrap
}
.singer_name {
	height:21px;
	overflow:hidden;
	white-space:nowrap;
	text-overflow:ellipsis;
	font-size:14px;
	color:#fff
}
.song_info__mv {
	display:block;
	width:40px;
	padding:5px 0
}
.lyric {
	display:-webkit-box;
	-webkit-box-align:center;
	position:absolute;
	top:0;
	bottom:0;
	width:100%
}
.lyric__box {
	position:relative;
	width:100%;
	height:336px;
	overflow:hidden
}
.lyric__text {
	position:absolute;
	left:10px;
	right:10px;
	overflow:hidden
}
.lyric__text p,.lyric__item {
	height:42px;
	line-height:42px;
	overflow:hidden;
	text-overflow:ellipsis;
	white-space:nowrap;
	font-size:16px;
	color:rgba(255,255,255,.6);
	text-align:center
}
.lyric__text {
	min-height:150px
}
.lyric__text .lyric__item--current {
	color:#31c27c
}
.lyric__text .lyric__loading {
	position:absolute;
	top:0;
	bottom:0;
	left:0;
	right:0;
	display:-webkit-box;
	-webkit-box-align:center;
	-webkit-box-pack:center;
	height:auto;
	line-height:inherit
}
.control {
	position:absolute;
	bottom:0;
	left:0;
	z-index:3;
	width:100%;
	height:154px
}
.operate {
	position:absolute;
	bottom:114px;
	overflow:hidden
}
.operate--left {
	left:15px
}
.operate--right {
	right:15px
}
.operate__item {
	float:left;
	width:40px;
	height:40px;
	margin-left:5px
}
.icon_like,.icon_kg,.icon_bgmusic,.icon_play_list {
	display:block;
	margin:0 auto;
	overflow:hidden;
	line-height:999px
}
.icon_like {
	width:25px;
	height:21px;
	margin-top:10px
}
.icon_like--active {
	background-position:0 -30px
}
.icon_bgmusic {
	width:26px;
	height:23px;
	margin-top:8px;
	background-position:0 -60px
}
.icon_bgmusic--active {
	background-position:0 -90px
}
.icon_kg {
	width:21px;
	height:22px;
	margin-top:9px;
	background-position:0 -120px
}
.icon_play_list {
	width:24px;
	height:18px;
	margin-top:11px;
	background-position:0 -240px
}
.progress {
	position:absolute;
	bottom:74px;
	width:100%;
	height:40px
}
.progress__bar {
	position:absolute;
	top:0;
	left:55px;
	right:47px;
	height:40px;
	overflow:hidden
}
.progress__box {
	position:absolute;
	top:0;
	left:8px;
	right:8px;
	z-index:2;
	height:40px
}
.progress__bg,.progress__load,.progress__play {
	position:absolute;
	top:19px;
	width:100%;
	height:2px;
	-webkit-transition:all 1s linear
}
.progress__bg {
	left:0;
	z-index:3;
	background-color:rgba(0,0,0,.1)
}
.progress__load {
	left:-100%;
	z-index:4;
	background-color:rgba(255,255,255,.2)
}
.progress__play {
	left:-100%;
	z-index:5;
	width:100%;
	background-color:#31c27c
}
.progress__play::before {
	content:"";
	position:absolute;
	top:0;
	left:-8px;
	z-index:7;
	width:8px;
	height:2px;
	background-color:#31c27c
}
.progress__dot {
	position:absolute;
	top:-19px;
	right:-20px;
	width:40px;
	height:40px
}
.progress__dot::before {
	content:"";
	display:block;
	width:16px;
	height:16px;
	margin:12px auto;
	border-radius:999px;
	background-color:#31c27c
}
.progress--no_dot {
	right:55px
}
.progress--no_dot .progress__dot {
	display:none
}
.progress--no_dot .progress__box {
	left:0;
	right:0
}
.progress__start,.progress__end {
	position:absolute;
	top:0;
	z-index:1;
	width:55px;
	line-height:40px;
	text-align:center
}
.progress__start {
	left:0
}
.progress__end {
	right:0
}
.bg {
	position:absolute;
	top:0;
	bottom:0;
	left:0;
	z-index:1;
	width:100%;
	background-size:cover;
	background-position:bottom center
}
.blur {
	-webkit-filter:blur(15px);
	-webkit-transform:scale(1.15)
}
.bg_mask {
	position:absolute;
	top:0;
	bottom:0;
	left:0;
	z-index:2;
	width:100%;
	background-color:#000
}.btns {
	position:absolute;
	bottom:0;
	width:100%;
	height:65px
}
.btn_qrcode {
	position:absolute;
	left:0;
	top:0;
	width:50px;
	height:45px
}
.btn_qrcode::after {
	content:"";
	position:absolute;
	left:50%;
	top:50%;
	-webkit-transform:translate(-50%,-50%);
	width:25px;
	height:25px;
	background-image:url(data:image/png;
	base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAD6SURBVGhD7dVBjsMgEETR3P/SHil68kjThAwkKLZTfwfVLvQXhtu2kNsfbC/heiLOegsqH4pYvgWVEemiMiIjqIxIF5XHEhE3MVIQD4uImxgpiCNyx0hBHJEWRgriiNwxUhBHpIWRgvi5yAwqh0VmUBmRLiojMoLKiHRR+RmRFThrx/YSriMSQujjX1mCI3ZsT6GiID7PraWiIP7MgziDioI4Il1UXl/EsiBuYqQgPo/IM75HRNzESEH8vSIvoTsiLcQRmUL3IUTEQ6I+OeatZfkvfHKed8RI6bCMSBeVwyIzqIxIF5URGUHlr8gKnLVj+6GIeIqLiGzbD5Nl6sw5MAwMAAAAAElFTkSuQmCC);
	background-repeat:no-repeat;
	background-size:100%
}
.btn_qrcode span {
	opacity:0
}
.btn_download {
	position:relative;
	display:block;
	height:45px;
	line-height:45px;
	margin:0 50px;
	padding:0 55px;
	overflow:hidden;
	white-space:nowrap;
	font-size:20px;
	color:#fff;
	border-radius:999px;
	background-color:#31c27c;
	text-align:center
}
.btn_download::before {
	content:"";
	position:absolute;
	top:6px;
	left:6px;
	width:33px;
	height:33px;
	background-position:0 -300px
}
.icon_play {
	position:absolute;
	top:50%;
	right:25px;
	width:43px;
	height:43px;
	margin-top:-22px;
	opacity:.6
}
</style>