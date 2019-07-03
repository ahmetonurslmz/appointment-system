// FOR NOT-LOGGED-IN USERS
import './user-system/register-login'

// FOR LOGGED-IN USERS
import Vue from 'vue'
import VueRouter from 'vue-router'
import VueResource from 'vue-resource'

import * as VueGoogleMaps from 'vue2-google-maps'
 
Vue.use(VueGoogleMaps, {
  load: {
    key: 'AIzaSyDm_7sH1kdehWqYPdKVuoL9xxeDJHNNAmI',
  }
})

import App from './App.vue'
import Routes from './router/router'
import {store} from './store/store'



// Middlewares
Vue.use(VueResource);
Vue.use(VueRouter);



const moment = require('moment')



Vue.use(require('vue-moment'), {
    moment
})

import moments from 'moment-timezone';
moments.tz.setDefault('Europe/Istanbul');


//define vue config
Vue.config.productionTip=false


// Router setup
const router = new VueRouter({
    routes: Routes,
    mode: 'history',
  })

router.afterEach(() => {
    window.scrollTo(0,0); 
  })

// Turn off vue's production tip
Vue.config.productionTip = false

// Render if #app is present
if (document.querySelector('#app')) {
new Vue({
  el: '#app',
  render: h => h(App),
  router
})
}





