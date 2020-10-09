<template>
<div class="perindex">
  <h1>您好</h1>
  <p class="pertext">欢迎你来到消防连采销平台 请注册</p>
  <div class="permain">
    <input type="text" placeholder="请输入用户名/手机号/邮箱" v-model="value1">
    <input type="text" placeholder="请输入密码" v-model="value2" @input="buttonXin">
    <!--<div>{{this.$store.state.login}}</div>-->
  </div>
  <buttonCon :hafe="hafe">
    <span>登录</span>
  </buttonCon>
</div>
</template>

<script>
  import buttonCon from "@/components/compon/buttonCon"
  import headerCom from "@/components/compon/headTabbar"
    export default {
        name: "index",
      data(){
          return {
            value1:'',
            value2:'',
            hafe:false,
          }
      },
      components:{
        buttonCon,
        headerCom
      },
      methods:{
        buttonXin(){
          if(this.value1.length>0&&this.value2.length>0){
            this.hafe=true;
          }
          else{
            this.hafe=false;
          }

        },

      }
    }


</script>

<style scoped>
  .perindex{
    padding:4rem 1.2rem;
    min-height:700px;
    position:relative;
    z-index:999;
    background: var(--beijingse)
  }
  h1{
    font-size:2.6rem;
  }
  .pertext{
    font-size:1.2rem;
  }
  .permain{
    width:98%;
    margin:0 auto;
    padding:4rem 0;
  }

  .permain input{
    border:0;
    margin:1rem 0;
    width:100%;
    height:2.4rem;
    box-sizing:border-box;
    background: var(--beijingse);
    font-size:1.2rem;
    color:#b6b6b6;

  }
</style>
