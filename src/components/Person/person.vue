<template>
  <div>
    <div class="header">
      <div class="left leftxin">
        <img src="@/assets/logo.png" class="imgperson children">
      </div>
      <div class="left right">
        <h3 class="children" style="text-align:left; width:100%;">浪潮消防</h3>
        <p class="children" style="text-align:left; width:100%;">浪潮消防科技有限公司</p>
      </div>
    </div>
    <div class="header1" style="text-align: center">
      <div>
        <h3>122</h3>
        <p class="p1">报价</p>
      </div>
      <div>
        <h3>122</h3>
        <p class="p1">报价</p>
      </div>
      <div>
        <h3>122</h3>
        <p class="p1">报价</p>
      </div>
      <div>
        <h3>122</h3>
        <p class="p1">报价</p>
      </div>

    </div>
    <h2 style="text-align: center; padding:20px 0;">我的报价</h2>
    <div class="mainText">
      <com></com>
    </div>

    <h2 style="text-align: center; padding:20px 0;">我的报价</h2>
    <div class="mainText">
      <com></com>
    </div>
  </div>

</template>

<script>
  import com from '@/components/MyOffer/components'
    export default {
        name: "person",
      components:{
        com
      }

    }
</script>

<style scoped>
  .header{
    width:96%;
    margin:0 auto;
    display:flex;
    height:90px;
  }
  .header .left{
    display:flex;
    flex-direction:column;
    justify-content:center;

  }
  .header .left .children{
    align-self:center;
  }

  .main_header{
    display:flex;
  }
  .imgperson{
    width:70px;
  }
  .leftxin{
    width:30%;
  }
  .right{
    width:70%;
  }
  .textalign{

  }
  .mainText{
    width:100%;
    border-radius: 20px;
    background: #ffffff;
    padding:8px 8px 60px 8px;
    box-sizing: border-box;
    min-height:1000px;
  }

  .header1{
    display:flex;
    height:70px;
  }
  .p1{
    font-size:.8rem;
  }

</style>
