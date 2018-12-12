import Vue from 'vue'
import Router from 'vue-router'
import Home from "./views/Home"
import Index from "./views/Index"
import NotFound from "./views/NotFound"
import Login from "./views/Login"
import Products from "./views/Products"
import List from "./views/List"
import Details from "./views/Details"
Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {path:"/",redirect:"/home"},
    {path: '/home',component:Home,children:[
      {path:"/home",component:Index},
      {path:"/home/products",component:Products},
      {path:"/home/list",component:List},
      {path:"/home/details/:lid",component:Details,props:true}
    ]},
    {path:"/login",component:Login},
    {path:"/*",component:NotFound}
  ]
})
