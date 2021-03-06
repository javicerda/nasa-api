import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import vuetify from './plugins/vuetify';
import Firebase from 'firebase'
import firebaseConfig from '../config/firebase.js'

Vue.config.productionTip = false

Firebase.initializeApp(firebaseConfig)

let app = ''
Firebase.auth().onAuthStateChanged(()=>{
 if(!app){
  app = new Vue({
   vuetify,  
   router,
   store,
   render: h => h(App)
  }).$mount('#app')
 } 
})