import request from '@/utils/request'
//https://cn.bing.com/HPImageArchive.aspx?format=js&idx=0&n=100
//获取好看视频
export function getHaoKanVideoList(params){
  /* 记得return啊！！！ */
  return request({
    url:'/api/getHaoKanVideo',
    method:"get",
    params
  })
}
//获取图片接口
export function getPictureList(params){
  return request({
    url:'/api/getImages',
    method:"get",
    params
  })
}
//获取名言
export function getSentences(params) {
  return request({
    url:'/api/sentences',
    method:"get",
    params
  })
}