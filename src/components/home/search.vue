<template>
  <div class="serch">
    <!--<input type="text" class="input" placeholder="订单号搜索" v-model="serchId">-->
    <slot name="search"></slot>
  </div>

</template>

<script>
    export default {
        name: "search",
      data(){
          return{
            serchId:''
          }
      },
      methods:{
          addStyle(){


          }
      }
    }
</script>

<style scoped>
  .serch{
    width:70%;
    display:flex;
    /*!*设置子元素排列方向为从上到下*!*/
    /*flex-direction:column;*/
    /*设置子元素的排列方式为剧中*/
    justify-content: center;

    margin:1em auto;
  }
  .serch input{
    width:100%;
    height:100%;
    border-radius:1rem;
    box-shadow: 4px 4px 10px #f0e7e4;
    padding:.4rem .2rem;
    border:0;
    background:#ffffff;
    text-align: center;
  }

</style>
