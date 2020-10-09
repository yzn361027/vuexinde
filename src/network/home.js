import {request,request2,xiangqing} from './request'
//import传递过来两个值必须接受两个，否则就报错。
export function getHomeMultidata(){
  return request2({
    url:"/wap/cg/purchaseOrderlist.htm",
  })
}

export function getMyOffer(){
  return request({
    url:"home/multidata"
  })
}


export function getxiangqing(){
  return xiangqing({
    url:purchaseOrderDetail.htm
  })

}
