<template>
	<div class="container">
    <h1>Welcome to My Vue App!</h1>
    <button @click="login" class="btn">Signin by Google</button>
  </div>
</template>

<script>
import firebase from 'firebase'

export default {
  name: 'TestLogin',
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
				console.log('authenticated!')
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
.container {
  width: 90%;
  max-width: 600px;
  height: 360px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
  background-color:pink;
  border-radius: 10px;
}

	.login-form {
		width: 90%;
		height: 260px;
		max-width: 500px;
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: space-around;
		font-size: 20px;
	}

	.form-element {
		width: 95%;
		max-width: 400px;
		display: flex;
		flex-direction: row;
		justify-content: space-between;
	}

	.input-field {
		width: 250px;
		height: 34px;
		border: none;
		border-radius: 5px;
    margin: 0 0 0 5px;
	}

	.input-field:focus {
		outline: none;
	}

	.btn {
		width: 120px;
		height: 50px;
		border: none;
		border-radius: 5px;
		background-color: rgb(245, 233, 233);
		font-size: 20px;
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
