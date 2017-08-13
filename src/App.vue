<template>
  <div id="app">
  	<mheader></mheader>
    <tabnav></tabnav>
    <keep-alive>
    	<router-view></router-view>
	</keep-alive>
  </div>
</template>

<script>
import tabnav from "@/common/tabnav"
import mheader from "@/common/header"
export default {
  name: 'app',
  components: {
  	mheader,
  	tabnav
  }
}
</script>

<style lang="less">
@import '~vux/src/styles/reset.less';

body {
  background-color: #fbf9fe;
}
</style>
