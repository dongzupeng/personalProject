<template>
    <div id="swipercom">
        <div class="swiper-container" id="swiperIndex">
            <div class="swiper-wrapper">
                <div class="swiper-slide" v-for="(item, i) in imgs" :key="i">
                    <img
                        v-if="item.pic !== 'undefined'"
                        :src="item.pic ? item.pic : ''"
                        alt=""
                    />
                </div>
            </div>
            <!-- 换页器 -->
            <div class="swiper-pagination"></div>
            <!-- 前进后退 -->
            <div class="swiper-button-next"></div>
            <div class="swiper-button-prev"></div>
            <!-- 滚动条 -->
            <!-- <div class="swiper-scrollbar"></div> -->
        </div>
    </div>
</template>

<script>
import "swiper/css/swiper.css"; //引入swiper样式
import Swiper from "swiper"; //引入swiper
export default {
    name: "swiperCom",
    data() {
        return {
            imgs: [
                {
                    pic: "https://pic.netbian.com/uploads/allimg/220111/002720-16418320408c00.jpg",
                },
                {
                    pic: "https://pic.netbian.com/uploads/allimg/210812/234309-1628782989eba1.jpg",
                },
                {
                    pic: "https://pic.netbian.com/uploads/allimg/210317/001935-1615911575642b.jpg",
                },
                {
                    pic: "https://pic.netbian.com/uploads/allimg/200102/193708-15779650287a6a.jpg",
                },
                {
                    pic: "https://pic.netbian.com/uploads/allimg/210316/231107-16159074679442.jpg",
                },
            ],
        };
    },
    mounted() {
        var mySwiper = new Swiper("#swiperIndex", {
            //配置分页器内容
            slidesPerView: 3,
            centeredSlides: true,
            centeredSlidesBounds: true,
            effect: "coverflow",
            autoplay: true, //设置自动切换
            loop: true, // 循环模式选项
            coverflowEffect: {
                rotate: 30,
                stretch: 10,
                depth: 60,
                modifier: 2,
                slideShadows: true,
            },
            pagination: {
                el: ".swiper-pagination", //换页器与哪个标签关联
                clickable: true, //分页器是否可以点击
            },
            // 如果需要前进后退按钮
            navigation: {
                nextEl: ".swiper-button-next",
                prevEl: ".swiper-button-prev",
            },
            //如果需要滚动条
            scrollbar: {
                el: ".swiper-scrollbar",
            },
        });
    },
};
</script>

<style lang="less">
#swipercom {
    width: 100%;
    min-width: 700px;
    #swiperIndex.swiper-container {
        width: 90%;
        height: 600px;
        padding: 40px 0;
        display: flex;
        justify-content: center;
        align-items: center;
        border-radius: 4px;
        .swiper-slide img {
            width: 100%;
            height: 100%;
            border-radius: 10px;
            object-fit: cover;
        }
        .swiper-pagination-bullet {
            margin: 10px;
        }
        .swiper-pagination-bullet-active {
            background-color: #2ed9cb;
            margin: 10px;
        }
        .swiper-button-next,
        .swiper-button-prev {
            color: #2ed9cb;
        }
    }
}
</style>
