<template>
    <div class="picture-box">
        <div class="dialog">
            <img :src="imgUrl" alt="" />
            <svg-icon
                icon-class="guanbi"
                className="guanbi-icon"
                @click="closeDialog"
            ></svg-icon>
        </div>
        <!-- 遮罩层 -->
        <div class="mask" @click="closeDialog"></div>
    </div>
</template>

<script>
import { mapState, mapMutations, mapActions, mapGetters } from "vuex";
export default {
    name: "dialogPic",
    data() {
        return {};
    },
    methods: {
        //关闭大图显示
        closeDialog() {
            this.$store.commit("user/SET_PICTURE_DIALOG", {
                dialogPicture: false,
                imgUrl: "",
            });
        },
    },
    computed: {
        // user为模块名称  state 和 getters 第二个参数为数组
        ...mapState("user", ["imgUrl"]),
    },
};
</script>

<style lang="less" scoped>
.picture-box {
    box-sizing: border-box;
    width: 100%;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    .dialog {
        width: 90%;
        height: 80%;
        border-radius: 10px;
        text-align: center;
        background-color: #f0f0f0;
        position: fixed;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        z-index: 9999;
        display: flex;
        justify-content: center;
        img {
        }
        .guanbi-icon {
            position: absolute;
            width: 50px;
            height: 50px;
            background-color: #fff;
            border-radius: 50%;
            padding: 10px;
            bottom: -80px;
        }
    }
    .mask {
        position: fixed;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        background-color: #000;
        opacity: 0.5;
    }
}
</style>>
