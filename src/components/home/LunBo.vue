<template>
   <div class="main size">
     <div class="font-left"><h2>消防连采销平台</h2></div>
     <div class="font-left"><p>销售销售销售销售销售销售销售销售</p></div>
   </div>

</template>

<script>
    export default {
        name: "lun-bo"
    }
</script>

<style scoped>
  .main{
    height:7rem;
    border-radius:.3rem;
    background-image:linear-gradient(to right, #ff8e61 , #ff6528);
    display:flex;
    /*设置子元素排列方向为从上到下*/
    flex-direction:column;
    /*设置子元素的排列方式为剧中*/
    justify-content: center;
    color:#ffffff;
    margin-top:.6rem
  }
  .font-left{
    padding-left:1rem;
    text-align: left;
    width:100%;
    box-sizing: border-box;
  }


</style>
