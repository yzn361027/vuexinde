<template>
  <div class="main">
    <div class="left">
      <slot name="one"></slot>
      <slot name="two"></slot>
      <slot name="three"></slot>
     <slot name="four"></slot>
    </div>
    <div class="right">
     <!--<input type="text" class="input_large" v-model="priceData">-->
      <slot name="inputmian"></slot>
    </div>
  </div>

</template>

<script>
    export default {
        name: "baojialist",
      data(){
          return{
            priceData:this.price
          }
      },
      props:{
          price:Number
      },
      methods:{

      }
    }
</script>

<style scoped>
  .main{
    background: #ffffff;
    display:flex;
    box-sizing: border-box;
    padding:.5rem 1rem;
    box-shadow: 2px 2px 8px #f0e7e4;
  }
  .main .left{
    width:70%;
  }
  .main .right{
    width:30%;
    position:relative;
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
