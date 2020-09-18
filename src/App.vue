

<template>
  <div id="app">
    <index></index>

  </div>
</template>

<script>
  import index from '@/components/index';

export default {
  name: 'App',
  components:{
    index

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
