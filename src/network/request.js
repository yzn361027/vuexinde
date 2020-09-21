import axios from 'axios'


export function request(config){
  const instance=axios.create({
    baseURL:"http://123.207.32.32:8000/",
    timeout:5000,
    method:"get",
    headers: {
      'Content-Type': 'application/json;charset=UTF-8'
    },
  });
  // 发送请求拦截 可以添加请求成功或者失败的
  instance.interceptors.request.use(config=>{
   console.log(config);
   return config;
  },
err=>{
    console.log(2222)
  }
);
  //相应拦截
  instance.interceptors.response.use(res =>{
   return res

  },
    err=>{

  }

  )
return instance(config);
}
// export function request(config){
//   return new Promise((resolve,reject) => {
//     const instance = axios.create({
//       baseURL: 'http://123.207.32.32:8000',
//       timeout: 5000
//     });
//   return instance(config)
// }

export function request2(config){
  return new Promise((resolve,reject) => {
    const instance=axios.create({
      baseURL:"http://192.168.0.198:8080/wemall/wap/cg/",
      timeout:5000,
      method:"post",
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8'
      },
    });
    instance(config).then(res =>{
      resolve(res)
    })
  })
}

