<template>
	<div>
		<singerList @select="singerview"></singerList>
		<router-view></router-view>
	</div>
</template>

<script>
import singerList from '@/components/singerList'
import {mapMutations} from 'vuex'

export default {
  components: {
  	singerList
  },
  data () {
    return {
    	
    }
  },
  methods: {
  	singerview(singer) {
  		this.$router.push({
  			path: `/singer/${singer.id}`
  		})
  		this.setSinger(singer)
  	},
  	...mapMutations({
  		setSinger: 'SET_SINGER'
  	})
  }
}
</script>
<style>
	
</style>