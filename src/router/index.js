import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router);

import HomePage from '../view/home/HomePage.vue'
import User from '../view/user/User.vue'
import UserAlumnus from '../view/userDetails/UserAlumnus.vue'
import UserDepartment from '../view/userDetails/UserDepartment.vue'
import UserGroup from '../view/userDetails/UserGroup.vue'
import UserLabel from '../view/userDetails/UserLabel.vue'
import ArticleDetail from '../view/detail/ArticleDetail.vue'
import Hr from '../view/hr/Hr.vue'
import Forum from '../view/forum/Forum.vue'
import Graduate from '../view/graduate/Graduate.vue'
import StartPage from '../view/StartPage.vue'

export default new Router({
  routes: [
    {
      path: '/',
      redirect: '/homepage'
    },
    {
      path: '/start',
      name: 'start',
      component: StartPage
    },
    {
      path: '/homepage',
      name: 'homepage',
      component: HomePage
    },
    {
      path: '/user',
      name: 'user',
      component: User
    },
    {
      path: '/userAlumnus',
      name: 'userAlumnus',
      component: UserAlumnus
    },
    {
      path: '/userDepartment',
      name: 'userDepartment',
      component: UserDepartment
    },
    {
      path: '/userGroup',
      name: 'userGroup',
      component: UserGroup
    },
    {
      path: '/userLabel',
      name: 'userLabel',
      component: UserLabel
    },
    {
      path: '/hr',
      name: 'hr',
      component: Hr
    },
    {
      path: '/graduate',
      name: 'graduate',
      component: Graduate
    },
    {
      path: '/forum',
      name: 'forum',
      component: Forum
    },
    {
      path: '/articleDetail',
      name: 'articleDetail',
      component: ArticleDetail
    }
  ]
})
