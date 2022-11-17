<template>
    <div class="home">
        <!-- 头部 -->
        <!-- <navTop/> -->
        <!-- 轮播图 -->
        <swiperCom></swiperCom>
        <!-- 名言 -->
        <sentencesCom></sentencesCom>
    </div>
</template>

<script>
export default {
    name: "index",
    inject: ["reload"],
    data() {
        return {
            imgList: [],
        };
    },
    created() {},
    methods: {},
};
</script>

<style lang="less" scoped>
.home::-webkit-scrollbar {
    display: none;
}
</style>