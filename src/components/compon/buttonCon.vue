<template>
  <div :class="{
  button:true,
  background:hafe
  }" @click="onclickone">
    <slot></slot>
  </div>
</template>

<script>
    export default {
        name: "buttonCon",
      data(){
         return{
           hafe1:this.hafe
         }
      },
      props:{
          hafe:Boolean,
      },
      methods:{
          onclickone(){
            console.log(123)
                if(this.hafe){
                  this.$store.commit("increment");
                  this.$router.go(-1);
                  console.log($store.state.login)
                }
                else{


                  return
                }
          }

      }
      // methods:{
      //   buttonGo(){
      //
      //
      //
      //   }
      // }
    }
</script>

<style scoped>
  .button{
    width:100%;
    border-radius:1rem;
    background: #ffd0bd;
    height:60px;
    text-align: center;
    line-height:60px;
    color:#ffffff;
  }
  .background{
    background: var(--backgroundColor);
  }

</style>
