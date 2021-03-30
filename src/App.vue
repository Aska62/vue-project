<template>
  <div id="nav" class="nav">
    <router-link v-if="authenticated" to="/login" v-on:click="logout()" replace>Logout</router-link>
  </div>
  <router-view @authenticated="setAuthenticated"/>
</template>

<script>
import firebase from 'firebase'

export default {
  name: 'App',
  data() {
    return {
      authenticated: false,
    }
  },
  mounted() {
    if(!this.authenticated) {
      this.$router.replace('/login');
    }
  },
  methods: {
    setAuthenticated(status) {
      this.authenticated = status;
    },
    logout() {
      firebase.auth().signOut()
      this.authenticated = false;
			this.$router.replace("/testlogin");
		},
  }
}

</script>


<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  display: flex;
  flex-direction: column;
  align-items: center;
}

#nav {
  padding: 30px;
  position: fixed;
  right: 20px;
  top: 60px;
  z-index: 1;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}

</style>
