<template>
	<div class="container">
		<div class="login-msg">
			<h2 class="h2">Welcome to</h2>
			<h1 class="h1">My Vue App!</h1>
		</div>
    <button @click="login" class="btn">Login by Google</button>
	</div>
</template>

<script>
import firebase from 'firebase'

export default {
	name: 'Login',
	asyncData () {
		return {
			isAuth: false,
		}
  },
  mounted() {
		firebase.auth().onAuthStateChanged((user) => {
			if (user) {
				this.isAuth = true;
				this.$emit("authenticated", true)
				this.$emit("passUid", user.uid)
				this.$router.replace("/home");
			}
		})
	},
  methods: {
		login() {
      const provider = new firebase.auth.GoogleAuthProvider()
      firebase.auth().signInWithRedirect(provider)
    },
  },
}
</script>

<style scoped>
	@media screen and (min-width: 768px) {
		.container {
			width: 90%;
			max-width: 600px;
			height: 300px;
		}
	}
	@media screen and (max-width: 767px) {
		.container {
			width: 86%;
			max-width: 500px;
		}
	}
	.container {
		height: 300px;
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		background-color:pink;
		border-radius: 10px;
		margin: 80px auto 0 auto;
	}

	.login-msg {
		width: 90%;
		height: 40%;
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
	}

	.h1, .h2 {
		margin: 0;
	}
	.btn {
		width: 120px;
		height: 50px;
		font-size: 20px;
		border: none;
		border-radius: 5px;
		background-color: rgb(245, 233, 233);
	}

	.btn:hover {
		cursor: pointer;
    background-color: #44be9c;
    color: rgb(245, 233, 233);
	}

	.btn:focus {
		outline: none;
	}
</style>
