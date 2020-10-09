import Vue from 'vue'
import Router from 'vue-router'
// const Person=()=>import("@/components/Person");
const Home=()=>import("@/components/Home");
const MyOffer=()=>import('@/components/MyOffer/index');
const Person=()=>import('@/components/Person/index');
const ListComContect=()=>import('@/components/home/ListComContect');
const PersonIndex=()=>import('@/components/Person/person');

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
      component:Home,
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
    {
      path:"/ListComContect",
      component:ListComContect,
      name:"ListComContect"
    },
    {
      path:"/PersonIndex",
      component:PersonIndex,
      name:"PersonIndex"
    }


  ]
})
