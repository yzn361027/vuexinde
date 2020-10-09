

<template>
  <div>
    <router-view></router-view>
    <!--<div class="main size" v-for="data in $store.getters.searchID(serchId)" @click="go()">-->
      <!--<div class="children1">-->
        <!--<p class="p2">{{data.name}}</p>-->
        <!--<p class="p1">{{data.age}}</p>-->
        <!--<div class="div2 p1" ><span class="span1">置顶</span>编号:{{data.id}}</div>-->
      <!--</div>-->
      <!--<div class="children2">-->
        <!--<p class="p1">{{serchId}}</p>-->
        <!--<p class="p2">3天21小时21分</p>-->
        <!--<div class="div1">-->
          <!--<div class="top" :style="-->
<!--{width:large}-->
<!--"></div>-->
        <!--</div>-->
        <!--<span></span>-->
      <!--</div>-->

    <!--</div>-->

    <div class="main size" v-for="data in person" @click="go(data.id)">
      <div class="children1">
        <p class="p2">{{data.programName}}</p>
        <p class="p1"></p>
        <div class="div2 p1" ><span class="span1">置顶</span>编号:</div>
      </div>
      <div class="children2">
        <p class="p1"></p>
        <p class="p2">3天21小时21分</p>
        <div class="div1">
          <div class="top" :style="
{width:large}
"></div>
        </div>
        <span></span>
      </div>


    </div>
  </div>

</template>

<script>

  import axios from 'axios'
  import {request,request2} from '@/network/request'
  import {getHomeMultidata,getMyOffer} from '@/network/home'
    export default {
    axios,
        name: "list-com",
      data(){
          return{
            large:50+"%",
            person:'',
            ssearch:"",
            idNum:''
          }
      },
      props:{
        serchId:Number,

      },
      mounted(){
      // console.log($store.getters.more20)
      },
      created(){
        // getMyOffer().then(res =>{
        //   console.log(res)
        // });
      //   getMyOffer().then(res => {
      //     console.log(res);
      //   // const str=JSON.stringify(res.data.data.banner.list);
      //   //     const newResult=JSON.parse(str);
      //   //     this.person=newResult;
      // });
        getHomeMultidata().then(res =>{
          console.log(res);
        const str=JSON.stringify(res.data.data);
        const newResult=JSON.parse(str);
        this.person=newResult;
        console.log(this.person)
        })
      },
      methods:{

      go(id){
        if(this.$store.state.login){
          this.$router.push('ListComContect');
          this.idNum=id;
          this.$store.commit("idtiao" ,this.idNum);
          console.log(this.$store.state.idName);
        }
        else{
          this.$router.push('Person')
        }

      }
      }

    }
</script>

<style scoped>
  .main{
    border-radius:.3rem;
    box-sizing: border-box;
    padding:.2rem;
    display:flex;
    height:7.4rem;
    background: #ffffff;
    margin-top:1.2rem;
    box-shadow: 2px 2px 8px #f0e7e4;
  }
  .main .children1{
   width:60%;
    box-sizing: border-box;
    padding:.5rem;
    position:relative;
  }
  .p2{
    font-weight:bold;
  }
 .p1{
    color:#797979;
    font-size:.8rem;
    margin-top:.3rem;
  }
  .main .children1 .div2{
    position:absolute;
    bottom:.7rem;
    height:1rem;
  }
  .span1{
    padding:.1rem;
    background-color: #ff7f4b;
    border-radius:.2rem;
    color:#ffffff;
    margin-right:.2rem;
    font-size:.6rem
  }
  .main .children2{
    width:40%;
    background:#fffaf8;
    display:flex;
    flex-direction:column;
    /*设置子元素的排列方式为剧中*/
    justify-content: center;
  }
  .div1{
    width:60%;
    margin:.1rem auto;
    background: #ffded1;
    border-radius:.2rem;
    position:relative;
    height:.8rem;
    overflow:hidden;

  }

  .div1 .top{
    position:absolute;
    top:0;
    left:0;
    background: var(--backgroundColor);
    height:100%;
  }


</style>
