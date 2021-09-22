import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'
import './firebase'
import { firestorePlugin, rtdbPlugin } from 'vuefire'
import EditAthlete from "./components/EditAthlete.vue";
import AddAthlete from "./components/AddAthlete.vue";
import Home from "./components/Home.vue";


// Import Bootstrap an BootstrapVue CSS files (order is important)
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

Vue.use(BootstrapVue)
Vue.use(IconsPlugin)

Vue.config.productionTip = false
Vue.use(rtdbPlugin)
Vue.use(firestorePlugin)
Vue.use(VueRouter)



export const router = new VueRouter({
  routes: [
    { path: '/', component: Home, name:"home" },
    { path: '/add', component: AddAthlete, name:"add" },
    { path: '/edit', component: EditAthlete, name:"edit" },
  ]
})

new Vue({
  router,
  render: h => h(App),

}).$mount('#app')
