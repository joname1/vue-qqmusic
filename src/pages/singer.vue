<template>
	<div>
		<singerList @select="singerview"></singerList>
		<router-view></router-view>
	</div>
</template>

<script>
import singerList from '@/components/singerList'

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
  	}
  }
}
</script>
<style>
	
</style>