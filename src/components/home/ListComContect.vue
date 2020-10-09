<template>
  <div class="contorl">
  <headTabbar>
    <p><b>我的产品</b></p>
  </headTabbar>
    <div class="main size">
      <h3 class="h1">基础信息</h3>
      <p>项目名称：{{serson.data.data.purchaseCompany}}</p>
      <p>询价单号：{{serson.data.data.purchaseCompany}}</p>
      <p>收货地址：{{serson.data.data.adress}}</p>
      <p>发票种类：{{serson.data.data.invoiceType}}</p>
      <p>询价时间：{{serson.data.data.createTime}}</p>
      <p>采购单位：{{serson.data.data.purchaseCompany}}</p>
      <p>联系方式：{{serson.data.data.contactInfo}}</p>
      <p>报价截止时间：{{serson.data.data.createTime}}</p>
      <h3 class="h1">对供应商的要求</h3>
      <p>送货时间：{{serson.data.data.arrivalTime}}</p>
      <p>预付：{{serson.data.data.paymentMethod}}</p>
      <h3 class="h1">采购单</h3>

    </div>
    <div class="div_2" v-for="data in serson.data.data.list" >
      <baojialist>
        <p slot="one"><b>{{data.productTypeName}}</b></p>
        <p slot="two">单位：{{data.unit}}</p>
        <p slot="three">数量：{{data.specificationName}}</p>
        <p slot="four">技术参数：{{data.technicalParam}}</p>
        <input slot="inputmian" type="text" class="input_large" v-model="data.price">
      </baojialist>
    </div>
    <buttonCon1 @click.native="onblurOne">
      <p>确认提交</p>
    </buttonCon1>
  </div>

</template>

<script>
  import headTabbar from "@/components/compon/headTabbar"
  import baojialist from "@/components/home/baojialist"
  import axios from 'axios'
  import buttonCon1 from "@/components/compon/buttonCon1"
    export default {
      name: "list-com-contect",
      components:{
          headTabbar,
        baojialist,
        buttonCon1
      },
      data(){
        return {
          serson:''
        }

      },
      created(){
        axios({
          url:"http://192.168.0.22:8080/wap/cg/purchaseOrderDetail.htm",
          methods:'get',
          params:{
            id:this.$store.state.idName
          },
          headers: {
            'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8'
          },
        })
          .then( res=>{
            console.log(res);
            const valueNew=JSON.stringify(res);
            const valueXin=JSON.parse(valueNew);
            this.serson=valueXin;
        })
      },
      methods:{
        onblurOne(){
          console.log(this.serson.data.data.list);
        }
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
 .input_large{
   height:4rem;
   border:none;
   width:90%;
   color:var(--backgroundColor);
   position:absolute;
   top:50%;
   margin-top:-2rem;
   outline:none;
   font-size:1.4rem;
 }
</style>
