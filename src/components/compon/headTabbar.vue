<template>
  <div>
    <div class="index">
      <div class="after" @click="go"><</div>
      <div class="after2"><slot></slot></div>
    </div>
  </div>
</template>

<script>
    export default {
        name: "head-tabbar",
      methods:{
          go(){
            this.$router.go(-1);
          }
      }
    }

</script>

<style scoped>
  .index{
    width:100%;
    height:44px;
    background-color: white;
    position:relative;
    text-align: center;
    line-height:44px;
  }
  .index .after{
    width:12%;
    line-height:44px;
    text-align: center;
    position:absolute;
    top:0;
    left:0;
  }
  /*.index .after2{*/
    /*width:88%;*/
    /*line-height:44px;*/
    /*text-align: center;*/
  /*}*/

</style>
