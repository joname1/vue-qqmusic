<template>
  <div id="rankpage">
<!--<div class="singer-photo">
      <img :src="this.singer.avatar">
    </div>-->
    <div class="header-bar dark">
      <div class="back-button">
        <div class="back-icon" @click="goback">
          <img src="../assets/back.svg">
        </div>
      </div>
    </div> 
    <blur :blur-amount=20 :url="pbbg">
      <p class="singer_info">
        <img :src="this.singer.avatar">
        <p class="singer_name">{{this.singer.name}}</p>
      </p>
    </blur>
<!--<div id="singer-header" class="header border-1px border-1px-after">
      <div class="header-warp">
         <div class="singer-info">
          <h3 class="singer-name" style="color:white;">{{this.singer.name}}</h3>
        </div>
        <div class="play-button">
          <img src="../assets/play.png">
        </div>
      </div>
    </div>-->
    <div class="list">
      <ul>
        <li class="border-1px border-1px-after" v-for="(item,index) in songlist" @click="selectItem(song,index)">
          <div class="music-index">{{index+1}}</div>
          <div class="music-info">
            <div class="music-name">
              {{item.name}}
            </div>
            <div class="music-singer">
              <span>{{item.album}}</span>
            </div>
          </div>
<!--      <div class="action-button">
            <img src="../assets/more.png">
          </div> -->
        </li>
      </ul>
    </div>
    <div class="loading" v-show="!songlist.length">
      <loading></loading>
    </div>
  </div>
</template>

<script>
import {Blur} from 'vux'
import {durl} from 'api/singer'
import {createSong} from 'api/song'
import {mapGetters} from 'vuex'
import loading from '@/components/loading'

  export default {
    components:{
      Blur,loading
    },
    data () {
      return {
        songlist: [],
        index: this.index,
        pbbg: 'http://ww3.sinaimg.cn/large/0060lm7Tgy1fizayto3x1j30dw0dwmxy.jpg'
      }
    },
    computed: {
      ...mapGetters([
        'singer'
      ])
    },
    created() {
        this._getsingerDetail()
    },
    methods: {
      _getsingerDetail() {
        if (!this.singer.id) {
          this.$router.push('/singer')
        }
        this.$http.jsonp(durl, {
          params: {
            g_tk: 274524505,
            hostUin: 0,
            format: 'jsonp',
            inCharset: 'uft8',
            outCharset: 'uft-8',
            notice: 0,
            platform: 'yqq',
            needNewCode: 0,
            singermid: this.singer.id,
            order: 'listen',
            begin: 0,
            num: 100,
            songstatus: 1
          },
          jsonp: 'jsonpCallback'
        }).then((res) => {
          this.songlist = this._normalizeSongs(res.data.data.list)
        })
      },
      _normalizeSongs(list) {
        let ret = []
        list.forEach((item) => {
          let {musicData} = item
          if (musicData.songid && musicData.albummid) {
            ret.push(createSong(musicData))
          }
        })
        return ret
      },
      goback() {
        this.$router.back()
      }
    }
  }
</script>

<style scoped lang="less">
.loading {
  position: absolute;
  width: 100%;
  text-align: center;
  top: 60%;
}
  .tab-swiper {
    background-color: #fff;
    height: 100px;
  }
  .border-1px {
    position: relative;
  }
  .border-1px-after:after {
    border-top: 1px solid rgba(255, 255, 255, .15);
    content: ' ';
    display: block;
    width: 100%;
    position: absolute;
    left: 0;
  }
  .border-1px-before:before {
    border-top: 1px solid rgba(255, 255, 255, .15);
    content: ' ';
    display: block;
    width: 100%;
    position: absolute;
    left: 0;
  }
  .border-1px:before {
    top: 0;
  }
  .border-1px:after {
    bottom: 0;
  }
  @media (-webkit-min-device-pixel-ratio: 1.5), (min-device-pixel-ratio: 1.5) {
    .border-1px:after, .border-1px:before {
      -webkit-transform: scaleY(.7);
      -webkit-transform-origin: 0 0;
      transform: scaleY(.7);
    }
    .border-1px:after {
      -webkit-transform-origin: left bottom;
    }
  }
  @media (-webkit-min-device-pixel-ratio: 2), (min-device-pixel-ratio: 2) {
    .border-1px:after, .border-1px:before {
      -webkit-transform: scaleY(.5);
      transform: scaleY(.5);
    }
  }
  #rankpage {
    display: flex;
    flex-direction: column;
    width: 100%;
    max-width: 68vh;
    min-height: 100%;
    overflow-x: hidden;
    position: absolute;
    top: 0;
    background: #fff;
    z-index: 2;
  }
  .singer-photo {
    position: fixed;
    width: 100%;
    max-width: 68vh;
    height: 100vw;
    max-height: 68vh;

  img {
    width: 100%;
    max-width: 68vh;
    height: 100vw;
    max-height: 68vh;
  }
}
  .header-bar {
    position: fixed;
    top: 0;
    height: 50px;
    width: 100%;
    max-width: 68vh;
    z-index: 2;
  }
  .header-bar .back-button {
    height: 25px;
    margin: 12.5px;
    margin-left: 5px;
    float: left;
    cursor:pointer;
  }
  .header-bar .back-button .back-icon {
    width: 25px;
    height: 25px;
    float: left;
  }
  .header-bar .back-button .back-icon img {
    width: 25px;
  }
  .header-bar .back-button .back-text {
    line-height: 25px;
    float: left;
  }
  .header {
    width: 100%;
    max-width: 68vh;
    height: 100vw;
    max-height: 68vh;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    position: absolute;
    top: 130px;
  }
  .header-blank {
    display: flex;
    flex-grow: 1;
  }
  .header-warp {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    padding: 10px;
  }
  .header-warp .play-button {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 50px;
    height: 50px;
    border-radius: 50%;
    border: 1px solid #eee;
    background: rgba(255, 255, 255, 0.43);
  }
  .header-warp .play-button img {
    display: inline-block;
    width: 25px;
    height: 25px;
  }
  .list {
    z-index: 1;
    padding-bottom: 50px;
  }
  .list .list-title {
    text-align: center;
    line-height: 40px;
  }
  .list ul {
    list-style: none;
    padding-left: 10px;

    li {
    display: flex;
    display: -webkit-flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    height: 60px;
    margin-left:44px;
    cursor:pointer;
    border-bottom: 1px solid #eee;
  }
}
  .list ul li .music-index{
    margin-left: -50px;
    width: 50px;
    text-align: center;
  }
  .list ul li .music-info {
    display: flex;
    flex-direction: column;
    flex-grow: 1;
    overflow: hidden;
  }
  .list ul li .music-info .music-name {
    width: 100%;
    color: #000;
    line-height: 22px;
    text-overflow: ellipsis;
    overflow: hidden;
    white-space: nowrap;
  }
  .dark {
    color: #fff !important;
  }
  .list ul li .music-info .music-singer {
    color: #aaa;
    font-size: 14px;
    line-height: 22px;
    text-overflow: ellipsis;
    overflow: hidden;
    white-space: nowrap;
  }
  .list ul li .action-button {
    width: 25px;
    height: 25px;
    margin-right: 10px;
  }
  .list ul li .action-button img {
    width: 25px;
    height: 25px;
  }
  .list .singer-brief {
    font-size: 14px;
    padding: 10px;
  }
  .singer_info {
  text-align: center;
  padding-top: 20px;
  color: #fff;
  font-size: 18px;

  img {
  width: 100px;
  height: 100px;
  border-radius: 50%;
  border: 4px solid #ececec;
  }
}
.singer_name {
  text-align: center;
  color: white;
}
</style>