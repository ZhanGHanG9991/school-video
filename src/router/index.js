import Vue from 'vue'
import Router from 'vue-router'
import EndLogin from '../components/login_module/EndLogin'
import Main from '../components/Main'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'EndLogin',
      component: EndLogin
    }, {
      path: '/main',
      name: 'Main',
      component: Main
    }
  ],
  mode: 'history'
})
