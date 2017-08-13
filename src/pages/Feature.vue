<template>
  <div>
    <swiper :aspect-ratio="248/621" auto loop>
      <swiper-item class="swiper-demo-img" v-for="(item, index) in banner_list" :key="index"><img :src="item.picUrl"></swiper-item>
    </swiper>
    <divider class="hot-title">精选歌单</divider>
    <panel :list="list" :type="type"></panel>
<!--     <flexbox>
      <flexbox-item>
      <div class="flex-demo">
        <img src="https://y.gtimg.cn/music/photo_new/T002R300x300M000000ZZedJ2PCeVg.jpg?max_age=2592000">
        <span>试剂盒就好啊的</span>
      </div>
      </flexbox-item>
      <flexbox-item>
      <div class="flex-demo">
        <img src="https://y.gtimg.cn/music/photo_new/T002R300x300M000000ZZedJ2PCeVg.jpg?max_age=2592000">
        <span>经典事就好啊的</span>
      </div>
      </flexbox-item>
    </flexbox> -->
  </div>
</template>

<script>
import {Swiper, SwiperItem,Flexbox, FlexboxItem,Panel,Divider} from 'vux'
import {getFeature} from 'api/feature'
import {statusCode} from 'api/config'

export default {
  components: {
    Swiper, SwiperItem,Flexbox, FlexboxItem,Panel,Divider
  },
  data () {
    return {
      banner_list: [],
      type: '1',
      list: [{
        src: 'http://placeholder.qiniudn.com/60x60/3cc51f/ffffff',
        title: '标题一',
        desc: '由各种物质组成的巨型球状天体，叫做星球。星球有一定的形状，有自己的运行轨道。',
        url: '/component/cell'
      }, {
        src: 'http://placeholder.qiniudn.com/60x60/3cc51f/ffffff',
        title: '标题二',
        desc: '由各种物质组成的巨型球状天体，叫做星球。星球有一定的形状，有自己的运行轨道。',
        url: {
          path: '/component/radio',
          replace: false
        }
    },{
        src: 'http://placeholder.qiniudn.com/60x60/3cc51f/ffffff',
        title: '标题一',
        desc: '由各种物质组成的巨型球状天体，叫做星球。星球有一定的形状，有自己的运行轨道。',
        url: '/component/cell'
      },{
        src: 'http://placeholder.qiniudn.com/60x60/3cc51f/ffffff',
        title: '标题一',
        desc: '由各种物质组成的巨型球状天体，叫做星球。星球有一定的形状，有自己的运行轨道。',
        url: '/component/cell'
      },{
        src: 'http://placeholder.qiniudn.com/60x60/3cc51f/ffffff',
        title: '标题一',
        desc: '由各种物质组成的巨型球状天体，叫做星球。星球有一定的形状，有自己的运行轨道。',
        url: '/component/cell'
      },{
        src: 'http://placeholder.qiniudn.com/60x60/3cc51f/ffffff',
        title: '标题一',
        desc: '由各种物质组成的巨型球状天体，叫做星球。星球有一定的形状，有自己的运行轨道。',
        url: '/component/cell'
      }]
  }
  },
  created(){
    this._getFeature()
  },
  methods:{
    _getFeature(){
      getFeature().then((res)=>{
        if (res.code == statusCode) {
          this.banner_list = res.data.slider
          // console.log(this.banner_list)
        }
      })
    }
  }
}
</script>

<style scoped lang="less">
.hot-title{
  margin-top: 13px !important;
}
.swiper-demo-img img {
  width: 100%;
}
.flex-demo {
  text-align: center;
  background-color: #eee;
  margin-top: 20px;
  img{
    max-width:100%;
  }
}
</style>
