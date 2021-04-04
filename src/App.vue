<template>
  <p v-if="authenticated" class="uid">UID: {{uid}}</p>
  <div id="nav" class="nav">
    <router-link v-if="authenticated" to="/login" v-on:click="logout()" replace>Logout</router-link>
    </div>
  <router-view @authenticated="setAuthenticated" @passUid="setUid"/>
</template>

<script>
import firebase from 'firebase'

export default {
  name: 'App',
  data() {
    return {
      authenticated: false,
      uid: '',
    }
  },
  mounted() {
    if(!this.authenticated) {
      this.$router.replace('/login');
    }
  },
  methods: {
    setAuthenticated(status) {
      console.log('setting authenticate status')
      this.authenticated = status;
    },
    setUid(uid) {
      console.log('setting uid')
      this.uid = uid
      console.log(`uid set as ${uid}`)
    },
    logout() {
      firebase.auth().signOut()
      this.authenticated = false;
			this.$router.replace('/login');
      this.uid='';
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
.uid {
  width: 100%;
  height: 30px;
  background-color: gold;
  margin: 0;
  z-index: 5;
  position: fixed;
  bottom: 0;
  left: 5;
  display: flex;
  justify-content: center;
  align-items: center;
}

</style>
