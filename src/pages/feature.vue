<template> 
  <div>
    <swiper :aspect-ratio="248/621" auto loop>
      <swiper-item class="swiper_img" v-for="(item, index) in banner_list" :key="index"><img :src="item.picUrl"></swiper-item>
    </swiper>
    <divider class="hot-title" v-text="sub_title"></divider>
    <div class="discs">
        <a href="javascript:;" class="disc_items" v-for="item in disc_list">
            <div class="disc_img">
                <img v-lazy="item.imgurl">
            </div>
            <div class="disc_bottom">
              <img class="icont-playnum" src="../assets/playnum.svg" />
              <span>{{item.listennum}}</span>
              <img class="icont-playbtn" src="../assets/playbtn.svg" />
            </div>
            <span class="disc_title" v-text="item.dissname"></span>
            <span class="disc_author">by {{item.creator.name}}</span>
        </a>
    </div>
    <div class="loading" v-show="!disc_list.length">
      <loading></loading>
    </div>  
  </div>
</template>

<script>
import loading from '@/components/loading'
import {Swiper,SwiperItem,Divider} from 'vux'
import {getBannerlist,getDisclist} from 'api/feature'
import {statusCode} from 'api/config'

export default {
  components: {
    Swiper,SwiperItem,Divider,loading
  },
  data () {
    return {
      sub_title: '精选歌单',
      banner_list: [],
      disc_list:[]
    }
  },
  created(){
    this._getBannerlist()

    setTimeout(() => {
      this._getDisclist()
    },1000)
  },
  methods:{
    _getBannerlist(){
      getBannerlist().then((res) => {
        if (res.code == statusCode) {
          this.banner_list = res.data.slider
        }
      })
    },
    _getDisclist() {
      this.$http.jsonp('https://c.y.qq.com/splcloud/fcgi-bin/fcg_get_diss_by_tag.fcg', {
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
      }).then((res) => {
        this.disc_list = res.data.data.list
      })
    }
  }
}
</script>

<style scoped lang="less">
.hot-title{
  margin-top: 13px !important;
}

.swiper_img img {
  width: 100%;
}

.loading {
  position: absolute;
  width: 100%;
  text-align: center;
  top: 60%;
}

.discs {
    position: relative;
    overflow: hidden;
}

.disc_items {
    position: relative;
    float: left;
    padding: 15px 10px;
    width: 100% / 2;
    box-sizing: border-box;

    &:active {
        background-color: #ececec;
    }

    &:before {
    content: " ";
    position: absolute;
    right: 0;
    top: 0;
    width: 1px;
    bottom: 0;
    border-right: 1px solid #d9d9d9;
    color: #d9d9d9;
    transform-origin: 100% 0;
    transform: scaleX(0.5);
    }
}

.disc_img {
    margin: 0 auto;
    img {
        display: block;
        width: 100%;
        height: 100%;
    }

    & + .disc_title{
        margin-top: 5px;
    }
}

.disc_bottom {
  position: relative;
  bottom: 25px;
  color: white;
  background-color: rgba(0, 0, 0, 0.73);
  width: 100%;

  span {
    margin-left: 24px;
  }
}
.icont-playnum,.icont-playbtn{
  position: absolute;
  width: 1.0rem;
  height: 1.0rem;
}
.icont-playbtn {
  right: 0;
  margin: 5px 5px;
}

.icont-playnum{
    margin: 4px 0px 0px 5px;
}

.disc_title {
    display: block;
    color: #000000;
    font-size: 13.5px;
    white-space: nowrap;
    text-overflow: ellipsis;
    overflow: hidden;
    margin-top: -15px;

    &:after {
    content: "";
    position: absolute;
    left: 0;
    bottom: 0;
    right: 0;
    height: 1px;
    border-bottom: 1px solid #d9d9d9;
    color: #d9d9d9;
    transform-origin: 0 100%;
    transform: scaleY(0.5);
    }
}

.disc_author {
  font-size: 12px;
  display: block;
  color: #999;
  white-space: nowrap;
  text-overflow: ellipsis;
  overflow: hidden;
}
</style>