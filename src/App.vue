<template>
  <div id="app">
  	<mheader></mheader>
    <tabnav></tabnav>
    <keep-alive>
    	<router-view></router-view>
    </keep-alive>
    <player></player>
  </div>
</template>

<script>
import tabnav from "@/components/tabnav"
import mheader from "@/components/header"
import player from "@/components/player"
export default {
  name: 'app',
  components: {
  	mheader,
  	tabnav,
    player
  }
}
</script>

<style lang="less">
@import '~vux/src/styles/reset.less';

body {
  background-color: #fbf9fe;
}
</style>
