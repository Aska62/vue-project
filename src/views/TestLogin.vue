<template>
	<div class="container">
    <h1>Login Test</h1>
    <form @submit="login()" class="login-form">
      <div class="form-element">
        <label>Username</label>
        <input type="text" v-model="input.username" name="username" placeholder="Input Username" class="input-field" />
      </div>
      <div class="form-element">
        <label>Password</label>
        <input type="text" v-model="input.password" name="password" placeholder="Input Password" class="input-field" />
      </div>
      <input type="submit" value="Log In" class="btn" />
    </form>
  </div>
</template>

<script>
export default {
  name: 'Test',
  data() {
    return {
      input: {
				username: '',
				password: ''
			},
      users: {
					"username": "brad",
					"password": "brad1brad"
			}
    }
  },
  // mounted() {
  //   fetch('http://localhost:3000/users')
  //     .then(res => res.json())
  //     .then(data => this.users = data)
  //     .catch(err => console.log(err.message))
  // },
  methods: {
    // onClick() {
    //   console.log(this.users[0])
    // },
		login() {
			console.log('login btn clicked!')
			if(this.input.username != "" && this.input.password != "") {
					if(this.input.username == this.users.username && this.input.password == this.users.password) {
							this.$emit("authenticated", true);
							this.$router.replace("/secure");
							console.log('atuthentication success!');
					} else {
							alert("The username and / or password is incorrect");
					}
			} else {
					alert("A username and password are required");
			}
		},
  }
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
  background-color: lavender;
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
		width: 280px;
		height: 34px;
		border: none;
		border-radius: 5px;
	}

	.input-field:focus {
		outline: none;
	}

	.btn {
		width: 120px;
		height: 40px;
		border: none;
		border-radius: 5px;
		background-color: pink;
		font-size: 20px;
	}

	.btn:hover {
		cursor: pointer;
	}

	.btn:focus {
		outline: none;
	}
</style>
