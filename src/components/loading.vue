<template>
	<div>
		<div class="loading">
			<img src="../assets/loading.svg">
			<p>{{title}}</p>
		</div>
	</div>
</template>
<script>
	export default {
		props: {
			title: {
				type: String,
				default: '加载中..'
			}
		}
	}
</script>
<style lang="less">
	.loading {
		width: 100%;
		text-align: center;
		top: 60%;

		img {
			 width: 50px;
			 height: 50px;
		}

		p {
			line-height: 20px;
			color: #999;
			font-size: 14px;
		}
	}
</style>