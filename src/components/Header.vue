<template>
	<h1 class="title">{{ title }}</h1>
</template>

<script>
export default {
	name: 'Header',
	data() {
		return {
			title: 'Sports Articles from New York Times',
		}
	}
}

</script>

<style scoped>
	.title {
		font-size: 35px;
	}
</style>