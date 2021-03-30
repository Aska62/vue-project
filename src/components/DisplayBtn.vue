<template>
	<button type="button" class="search-btn" id="top">
		Display
	</button>
</template>

<script>
export default {
  name: 'DisplayBtn'
}
</script>

<style scoped>
  .search-btn {
    background-color: palevioletred;
    color: white;
    width: 100px;
    height: 30px;
    border: none;
    border-radius: 5px;
    margin: 5px auto 10px auto;
  }

  .search-btn:hover {
    cursor: pointer;
    color: yellowgreen;
  }

  .search-btn:focus {
    outline: none;
  }
</style>