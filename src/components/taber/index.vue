<template>
  <div @click="atcive">
    <span v-if="jisuan">
      <slot name="imgz" ></slot>
    </span>
    <span v-else>
      <slot name="imgw"></slot>
    </span>


    <div :class="{text:jisuan}">
      <slot name="text"></slot>
    </div>
  </div>
</template>

<script>
    export default {
        name: "index",
      data:function(){
          return {
            panduan:''
          }
      },
      props:{
        path:String,
        color:String
      },
      methods:{
          atcive(){
            this.$router.push(this.path);
            console.log(this.$route);
            console.log(this.path);
          }
      },
      computed:{
          jisuan(){
            if(this.path.indexOf(this.$route.path)>-1){
              this.panduan=true;
            }
            else{
              this.panduan=false;
            }
            return this.panduan

          }

      }
    }
</script>

<style scoped>
  .text{
    color: var(--backgroundColor);
  }


</style>
