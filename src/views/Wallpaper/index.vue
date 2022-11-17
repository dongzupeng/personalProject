<template>
    <div>
        <!-- 瀑布流 -->
        <waterfallFlow></waterfallFlow>
        <!--图片弹窗 -->
        <dialogPic v-if="dialogPicture"></dialogPic>
    </div>
</template>

<script>
import { mapState } from "vuex";
export default {
    name: "wallpaper",
    data() {
        return {};
    },
    computed: {
        // user为模块名称  state 和 getters 第二个参数为数组
        ...mapState("user", ["loginDialog", "dialogPicture"]),
    },
    mounted() {},
};
</script>

<style>
</style>