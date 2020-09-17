<template>
  <div class="body">
    <LunBo></LunBo>
    <serch>
      <input type="text" class="input" placeholder="订单号搜索" v-model="serchId" slot="search">
    </serch>
    <ListCom></ListCom>

  </div>
</template>

<script>
  import LunBo from '@/components/home/LunBo';
  import serch from "@/components/home/search";
  import ListCom from "@/components/home/ListCom"
    export default {
        name: "home",
      components:{
          LunBo,
        serch,
        ListCom
      },
    }
</script>

<style scoped>
  .body{
    padding:0 0 5rem 0;
  }


</style>
