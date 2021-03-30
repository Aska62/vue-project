<template>
	<a href="#top">
		<div class="page-top">
			<div class="arrow">
				<div class="triangle"></div>
				<div class="triangle-cover"></div>
			</div>
			<span class="top">TOP</span>
		</div>
	</a>
</template>

<script>
export default {
	name: 'TopBtn'
}
</script>

<style scoped>
.page-top {
    width: 50px;
    height: 50px;
    border-radius: 50%;
    background-color: #757575;
    z-index: 1;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    position: fixed;
    right: 50px;
    bottom: 50px;
}

.arrow {
    position: relative;
}
.triangle {
    width: 0px;
    height: 0px;
    background: transparent;
    border-bottom: 14px solid white;
    border-radius: 10px;
    border-left: 14px solid transparent;
    border-right: 14px solid transparent;
    z-index: 2;
}

.triangle-cover {
    width: 0px;
    height: 0px;
    background: transparent;
    border-bottom: 14px solid #757575;
    border-left: 14px solid transparent;
    border-right: 14px solid transparent;
    position: absolute;
    top: 2px;
    z-index: 2;
}

.top {
    color: white;
    font-size: 10px;
    margin-top: 5px;
    z-index: 2;
}

</style>