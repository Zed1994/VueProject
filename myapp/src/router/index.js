import Vue from 'vue'
import Router from 'vue-router'
import Temai from '@/components/Temai'
import Tejia from '@/components/Tejia'
import Pintuan from '@/components/Pintuan'
import Cart from '@/components/Cart'
import Mine from '@/components/Mine'
import Search from '@/components/Search'
import VueResource from 'vue-resource'
import Login from '@/components/Login'
Vue.use(Router)
Vue.use(VueResource)
Vue.http.options.emulateJSON = true;
export default new Router({
  routes: [
   
    {
      path: '/',
      name: 'Temai',
      component: Temai
    },
     {
      path: '/tejia',
      name: 'Tejia',
      component: Tejia
    },
     {
      path: '/pintuan',
      name: 'Pintuan',
      component: Pintuan
    },
     {
      path: '/cart',
      name: 'Cart',
      component: Cart
    },
     {
      path: '/mine',
      name: 'Mine',
      component: Mine
    },
    {
      path: '/search',
      name: 'Search',
      component: Search
    },
     {
      path: '/login',
      name: 'Login',
      component: Login
    }
  ]
})
