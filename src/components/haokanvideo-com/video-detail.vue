<template>
    <div class="detail">
        <div class="title">{{ detailObj.title }}</div>
        <video
            muted
            :src="detailObj.playUrl"
            controls
            autoplay
            preload
            duration
            currentTime
        ></video>
        <div class="goback" @click="goBack">返回</div>
        <div class="user-info">
            <img :src="detailObj.userPic" alt="" />
            <div class="name">{{ detailObj.userName }}</div>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            detailObj: {},
        };
    },
    mounted() {
        //获取解析
        this.detailObj = JSON.parse(this.$route.query.detail);
        console.log(this.detailObj);
    },
    methods: {
        //返回
        goBack() {
            this.$router.go(-1);
        },
    },
};
</script>

<style lang="less" scoped>
.detail {
    width: 100%;
    padding: 100px;
    box-sizing: border-box;
    position: relative;
    .title {
        text-align: center;
        margin-bottom: 10px;
    }
    video {
        position: absolute;
        left: 50%;
        transform: translate(-50%);
        width: 1200px;
    }
    .goback {
        position: absolute;
        left: 50%;
        transform: translate(-50%);
        top: 850px;
        width: 100px;
        height: 40px;
        border-radius: 10px;
        text-align: center;
        line-height: 40px;
        font-size: 20px;
        color: #fff;
        background-color: #2ed9cb;
        cursor: pointer;
    }
    .user-info {
        margin-left: 10px;
        position: absolute;
        left: 380px;
        top: 120px;
        img {
            display: block;
            width: 50px;
            border-radius: 50%;
            margin: 20px auto;
        }
        .name {
            text-align: center;
            font-size: 12px;
            color: #fff;
        }
    }
}
</style>