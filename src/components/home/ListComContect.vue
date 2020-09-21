<template>
  <div class="contorl">
  <headTabbar>
    <p><b>我的产品</b></p>
  </headTabbar>
    <div class="main size">
      <h3 class="h1">基础信息</h3>
      <p>项目名称：</p>
      <p>询价单号：</p>
      <p>收货地址：</p>
      <p>发票种类：</p>
      <p>询价时间：</p>
      <p>采购单位：</p>
      <p>联系方式：</p>
      <p>报价截止时间：</p>
      <h3 class="h1">对供应商的要求</h3>
      <p>送货时间：</p>
      <p>预付：</p>
      <h3 class="h1">采购单</h3>

    </div>
    <div class="div_2">
      <baojialist>
        <p slot="one"><b>项目</b></p>
        <p slot="two">项目</p>
        <p slot="three">项目</p>
        <p slot="four">项目</p>
      </baojialist>
    </div>




  </div>

</template>

<script>
  import headTabbar from "@/components/compon/headTabbar"
  import baojialist from "@/components/home/baojialist"
    export default {
        name: "list-com-contect",
      components:{
          headTabbar,
        baojialist
      }
    }
</script>

<style scoped>
 .contorl{
   position:relative;
   z-index:999;
   background:var( --beijingse);
   padding:0 0 2rem 0;
   min-height:800px;
 }
  .main{
    margin-top:.8rem;
    line-height:2rem;
  }
  .h1{
    margin-top:.5rem;
  }
  .div_2{
    width:96%;
    margin:0 auto;
  }
</style>
