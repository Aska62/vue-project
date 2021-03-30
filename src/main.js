import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import axios from 'axios'
import VueAxios from 'vue-axios'
import firebase from 'firebase'

createApp(App).use(router).use(VueAxios, axios).mount('#app')

var firebaseConfig = {
    apiKey: "AIzaSyAgkWdePn5ArQDMatgS_eqBhjlR4yOVw_Q",
    authDomain: "my-vue-project-4505f.firebaseapp.com",
    projectId: "my-vue-project-4505f",
    storageBucket: "my-vue-project-4505f.appspot.com",
    messagingSenderId: "998414460560",
    appId: "1:998414460560:web:b296f40a66473d1ecdda15",
    measurementId: "G-70L46REV50"
};

firebase.initializeApp(firebaseConfig);
firebase.analytics();