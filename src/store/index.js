import Vue from "vue"
import Vuex from "vuex"
Vue.use(Vuex);

// 请注意一定要大写new Vuex.Store
const store =new Vuex.Store({
state:{
  login:false,
  stutent:[
    {name:"刘伊飞",age:10},
    {name:"哈哈",age:20},
    {name:"擦",age:30},
    {name:"3",age:40},
    {name:"刘伊",age:4},
    {name:"哈22哈",age:6},
    {name:"擦3123",age:22},
    {name:"1233",age:125}
  ],
  idName:1

},
  mutations:{
  increment(state){
    state.login=true

  },

    idtiao(state,count){
    // return function(idnum){
    //   state.idName=idnumcd L
    // }
      state.idName=count;

    }

  },
  getters:{
  more20(state){
    return state.stutent.filter(s =>{
      return s.age>20;
    })
  },
    more20length(state,getters){
      return getters.more20.length
    },

    searchID(state){
    return function(num){
      return state.stutent.filter(text =>{
        return text.age>num
      })

    }
    }


  }

})

export default store;
