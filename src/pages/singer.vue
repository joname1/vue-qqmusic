<template>
	<div>
	<div class="list-wrapper">
		<singerList @select="singerview"></singerList>
	</div>
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
  			path: `/singerDetails/${singer.id}`
  		})
  	}
  }
}
</script>
<style>
	
</style>