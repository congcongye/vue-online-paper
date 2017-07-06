import Vue from 'vue'
import Router from 'vue-router'
import Hello from '@/components/Hello'
import Paperlist from '@/pages/Paperlist.vue'
import Table from '@/components/Table.vue'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Hello',
      component: Hello
    },
    {
      path: '/paperlist',
      name: 'Paperlist',
      component: Paperlist
    },
    {
      path: '/table',
      name: 'Table',
      component: Table
    }

  ]
})
