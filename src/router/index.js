import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/home/home'
import NewsDetail from '@/components/news-detail/news-detail'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      name: 'News',
      path: '/news/:id',
      component: NewsDetail
    }
  ]
})
