

<template>
    <div>
        <router-view></router-view>
      <div class="flexMain" >
        <taber path="/home" class="center">
          <img slot="imgz" src="../assets/img/tabHome.png"  class="img_main">
          <img slot="imgw" src="../assets/img/tabHomeh.png"  class="img_main">
          <p slot="text">首页</p>
        </taber>
        <taber path="/MyOffer" class="center">
          <img slot="imgz" src="../assets/img/tabPerson.png"  class="img_main">
          <img slot="imgw" src="../assets/img/tabPersonh.png"  class="img_main">
          <p slot="text">我的报价</p>
        </taber>
        <taber path="/PersonIndex" class="center">
          <img slot="imgz" src="../assets/img/tabWen.png"  class="img_main">
          <img slot="imgw" src="../assets/img/tabWenh.png"  class="img_main">
          <p slot="text">个人中心</p>
        </taber>

      </div>
    </div>
</template>

<script>
  import taber from '@/components/taber/index';

  export default {
    name: 'App',
    components:{
      taber,

    },
  }
</script>

<style>
  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }
  .flexMain{
    display:flex;
    position:fixed;
    padding:.5rem 0;
    height:4rem;
    background:#ffffff;
    width:100%;
    bottom:0;
    box-sizing: border-box;
    font-size: .6rem;

  }

  .index-main{
    width:94%;
    margin-top:.5rem;
  }
  .img_main{
    width:26%;
  }
  .center{
    text-align: center;
  }
</style>
