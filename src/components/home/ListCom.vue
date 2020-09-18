

<template>
  <div >
    <router-view></router-view>
    <div class="main size" v-for="data in person" @click="go()">
      <div class="children1">
        <p class="p2">{{data.title}}</p>
        <p class="p1">2020-09-07 00:17</p>
        <div class="div2 p1" ><span class="span1">置顶</span>编号：412302203201230</div>
      </div>
      <div class="children2">
        <p class="p1">距离截止报价日期</p>
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
    export default {
    axios,
        name: "list-com",
      data(){
          return{
            large:50+"%",
            person:''
          }
      },
      created(){
      request({
        url:"/home/multidata"
      }).then(res => {
        const str=JSON.stringify(res.data.data.banner.list);
            const newResult=JSON.parse(str);
            this.person=newResult;
      });
      // request({
      //   url:"/home/multidata"
      // }).then(res => {
      //   console.log(res)
      // })
      //   axios({
      //     url:"http://123.207.32.32:8000/home/multidata",
      //   })
      //     .then(results=>{
      //       // 深浅拷贝
      //       const str=JSON.stringify(results.data.data.banner.list);
      //
      //      this.person=JSON.parse(str);
      //
      //      this.person[0].height=200;
      //      // 修改对象就是在修改引用类型，所以这里需要进行转换
      //      console.log(results.data.data.banner.list[0].height)
      //
      //      console.log(results);
      //      console.log(this.person);
      //
      // })

        // const instance1 =axios.create({
        //   baseURL:"http://123.207.32.32:8000/",
        //   timeout:5000
        // });
        //
        // instance1({
        // url:"home/multidata"
        //
        // })
        //   .then(result=>{
        //     const str=JSON.stringify(result.data.data.banner.list);
        //     const newResult=JSON.parse(str);
        //     this.person=newResult;
        //
        // });
        // console.log(request);
      //   request({
      //     url:"home/multidata"
      //   }).then(result=>{
      //   //   const str=JSON.stringify(result.data.data.banner.list);
      //   // const newResult=JSON.parse(str);
      //   // this.person=newResult;
      //     console.log(result);
      // })

      },
      methods:{
      go(){
        this.$router.push('ListComContect')
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
    margin-top:1rem;
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
