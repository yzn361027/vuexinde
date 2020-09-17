import Vue from 'vue'
import Router from 'vue-router'
// const Person=()=>import("@/components/Person");
const Home=()=>import("@/components/Home");
const MyOffer=()=>import('@/components/MyOffer/index');
const Person=()=>import('@/components/Person/index');

Vue.use(Router)

export default new Router({
  mode:"history",
  routes: [
    {
      path:"",
      redirect:'/home'
    },

    {
      path:"/home",
      name:'Home',
      component:Home
    },
    {
      path:'/Myoffer',
      name:"Myoffer",
      component:MyOffer
    },
    {
      path:'/Person',
      name:"Person",
      component:Person
    },

  ]
})
