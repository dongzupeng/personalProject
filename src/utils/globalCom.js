//需要全局化的组件
import swiperCom from "@/components/swiper-com";
import hotNews from "@/components/hot-news";
import login from "@/components/login";
import goTop from "@/components/go-top"
import waterfallFlow from "@/components/water-fallflow"
import dialogPic from "@/components/dialog-picture"
import sentencesCom from "@/components/sentences-com"
import haokanvideoCom from "@/components/haokanvideo-com"

const components = [
    swiperCom,
    hotNews,
    login,
    goTop,
    waterfallFlow,
    dialogPic,
    sentencesCom,
    haokanvideoCom
]
let mycomponents = {
    install(Vue) {
        components.forEach((item,index) =>{
            Vue.component(item.name,item)
        }) 
    },
};
export default mycomponents;