<template>
  <h1 class="title">{{ title }}</h1>
</template>

<script>
export default {
	name: 'Header',
	data() {
		return {
			title: 'Cat photos from Unsplash',
		}
	}
}

</script>

<style scoped>
	.title {
		font-size: 35px;
	}
</style>