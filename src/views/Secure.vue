<template>
    <div id="secure">
        <h1>Secure Area</h1>
        <p>This is a secure area</p>
		<button @click="signOut">Logout</button>
    </div>
</template>

<script>
	import firebase from 'firebase'

	export default {
		name: 'Secure',
		methods: {
			signOut: function() {
				firebase.auth().signOut()
				this.$router.replace("/testlogin");
			}
		},
	}
</script>

<style scoped>
    #secure {
        background-color: #FFFFFF;
        border: 1px solid #CCCCCC;
        padding: 20px;
        margin-top: 10px;
    }
</style>