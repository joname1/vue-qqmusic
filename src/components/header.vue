<template>
  <div>
    <x-header style="background-color:#31c27c;" :left-options="{showBack: false}">vue-musique<a slot="right" class="mcenter">个人中心</a></x-header>
  </div>
</template>

<script>
import { XHeader, Actionsheet, TransferDom, ButtonTab, ButtonTabItem } from 'vux'
export default {
  directives: {
    TransferDom
  },
  components: {
    XHeader,
    Actionsheet,
    ButtonTab,
    ButtonTabItem
  },
  data () {
    return {
      showMenus: false
    }
  }
}
</script>

<style scoped>
.overwrite-title-demo {
  margin-top: 5px;
}
.mcenter{
  color: white !important;
}
</style>