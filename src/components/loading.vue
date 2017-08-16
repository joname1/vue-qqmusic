<template>
  <div>
    <spinner :type="types" slot="value" :size="'40px'"></spinner>
  </div>
</template>

<script>
import { Spinner } from 'vux'
export default {
  components: {
    Spinner
  },
  data () {
    return {
    	types: 'lines'
    }
  }
}
</script>
<style>

</style>