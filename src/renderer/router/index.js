import Vue from 'vue'
import Router from 'vue-router'
import About from '../views/About.vue'
import Help from '../views/Help.vue'
import Home from '../views/Home.vue'

Vue.use(Router)

const router = new Router({
  routes: [
    {
      path: '/',
      redirect: '/home',
    },
    {
      path: '/home',
      meta: {
        title: 'SimHat',
      },
      component: Home,
    },
    {
      path: '/about',
      meta: {
        title: 'X-Plane 11',
      },
      component: About,
    },
    {
      path: '/help',
      meta: {
        title: 'P3D / FSX',
      },
      component: Help,
    },
    {
      path: '*',
      redirect: '/home',
    },
  ],
})

// dynamically set application title to current view
router.afterEach(to => {
  document.title = to.meta.title
})

export default router
