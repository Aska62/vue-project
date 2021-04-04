import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import axios from 'axios'
import VueAxios from 'vue-axios'
import firebase from 'firebase'
import 'firebase/auth'

createApp(App).use(router).use(VueAxios, axios).mount('#app')

var firebaseConfig = {
    apiKey: process.env.VUE_APP_API_KEY,
    authDomain: process.env.VUE_APP_AUTH_DOMAIN,
    projectId: process.env.VUE_APP_PROJECT_ID,
    storageBucket: process.env.VUE_APP_STORAGE_BUCKET,
    messagingSenderId: process.env.VUE_APP_MESSAGEING_SENDER_ID,
    appId: process.env.VUE_APP_APP_ID
};

firebase.initializeApp(firebaseConfig);
