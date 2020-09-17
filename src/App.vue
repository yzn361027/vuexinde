

<template>
  <div id="app">
    <div>
      <div class="index-main">
        <router-view></router-view>
      </div>

      <div class="flexMain">
        <taber path="/home">
          <p slot="text">首页</p>
        </taber>
        <taber path="/MyOffer">
          <p slot="text">我的报价</p>
        </taber>
        <taber path="/Person">
          <p slot="text">个人中心</p>
        </taber>
        <!--<router-link to="/" tag="div"  @click.native="switchForm" >首页</router-link>-->
        <!--<router-link to="/MyOffer" tag="div">我的报价</router-link>-->
        <!--<router-link to="/Person" tag="div">个人中心</router-link>-->

      </div>
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
  padding:.5rem;
  height:44px;
  background:#ffffff;
  width:100%;
  bottom:0;
}

  .index-main{
    width:94%;
    margin-top:.5rem;
  }
</style>
