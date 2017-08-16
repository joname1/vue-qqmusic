<template>
  <div>
    <tab>
      <tab-item selected>
        <router-link to="/feature" tag="div">精选</router-link>
      </tab-item>
      <tab-item>
        <router-link to="/singer" tag="div">歌手</router-link>
      </tab-item>
      <tab-item>
        <router-link to="/rank" tag="div">排行榜</router-link>
      </tab-item>
      <tab-item>
        <router-link to="/search" tag="div">搜索</router-link>
      </tab-item>      
    </tab>
  </div>
</template>

<script>
import {Tab,TabItem,Swiper,SwiperItem} from 'vux'

export default {
  components: {
    Tab,TabItem,Swiper,SwiperItem
  },
  data () {
    return {

    }
  },
  methods: {
    onItemClick (index) {
    }
    }
}
</script>

<style lang="less" scoped>
@import '~vux/src/styles/1px.less';
@import '~vux/src/styles/center.less';
.box {
  padding: 15px;
}
.active-6-1 {
  color: rgb(252, 55, 140) !important;
  border-color: rgb(252, 55, 140) !important;
}
.active-6-2 {
  color: #04be02 !important;
  border-color: #04be02 !important;
}
.active-6-3 {
  color: rgb(55, 174, 252) !important;
  border-color: rgb(55, 174, 252) !important;
}
.tab-swiper {
  background-color: #fff;
  height: 100px;
}
</style>