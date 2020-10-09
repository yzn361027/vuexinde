<template>
  <div class="body">
    <LunBo></LunBo>
    <serch >
      <input type="text" class="input" placeholder="订单号搜索" slot="search" @click=" one()">
    </serch>
    <ListCom :serchId="serchId"></ListCom>

  </div>
</template>

<script>
  import LunBo from '@/components/home/LunBo';
  import serch from "@/components/home/search";
  import ListCom from "@/components/home/ListCom"
  import {getHomeMultidata,getMyOffer} from "@/network/home"
    export default {
        name: "home",
      components:{
          LunBo,
        serch,
        ListCom
      },
      data(){
          return {
            shuju:"",
            // serchId:0
          }
      },
      methods:{
          one(){
            console.log(this.$store.getters.more20)
          }
      },
      created(){
          getHomeMultidata().then(res => {
            const arrer=JSON.stringify(res.data.data);
            const arrerNew=JSON.parse(arrer);
            this.shuju=arrerNew;

          })

      },
      mounted(){

      },
    }
</script>

<style scoped>
  .body{
    padding:0 0 5rem 0;
  }


</style>
