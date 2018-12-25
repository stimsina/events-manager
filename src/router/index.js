import Vue from 'vue'
import Router from 'vue-router'
import MainPanel from '@/components/MainPanel'
import EventList from '@/components/EventList'
import CreateEvent from '@/components/CreateEvent'
import EditEvent from '@/components/EditEvent'

Vue.use(Router)

export default new Router({
  mode:'history',
  routes: [
    {
      path: '/',
      name: 'MainPanel',
      component: MainPanel
    },
    {
      path:'/event-list',
      name:'EventList',
      component:EventList
    },
    {
      path:'/create-event',
      name:'CreateEvent',
      component:CreateEvent
    },
    {
      path:'/editEvent/:eventId&:id',
      name:'EditEvent',
      component:EditEvent

    }
  ]
})
