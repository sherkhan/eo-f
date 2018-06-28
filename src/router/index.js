import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import Markets from '@/components/Markets'
import Overview from '@/components/Overview'
import Activity from '@/components/History/Activity'
import Deposits from '@/components/History/Deposits'
import Rewards from '@/components/History/Rewards'
import Withdraws from '@/components/History/Withdraws'
import AddFunds from '@/components/AddFunds'
import Rounds from '@/components/Rounds'
import Orders from '@/components/Orders'
import Settings from '@/components/Settings'
import Cashout from '@/components/Cashout'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },{
      path: '/markets',
      name: 'Markets',
      component: Markets
    },
    {
      path: '/overview',
      name: 'Overview',
      component: Overview
    },
    {
      path: '/addfunds',
      name: 'AddFunds',
      component: AddFunds
    },
    {
      path: '/rounds',
      name: 'Rounds',
      component: Rounds
    },
    {
      path: '/orders',
      name: 'Orders',
      component: Orders
    },
    {
      path: '/settings',
      name: 'Settings',
      component: Settings
    },
    {
      path: '/cashout',
      name: 'Cashout',
      component: Cashout
    },
    {
      path: '/history/activity',
      component: Activity
    },
    {
      path: '/history/deposits',
      component: Deposits
    },
    {
      path: '/history/rewards',
      component: Rewards
    },
    {
      path: '/history/withdraws',
      component: Withdraws
    }


  ]
})
