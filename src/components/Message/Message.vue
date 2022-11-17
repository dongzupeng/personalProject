<template>
    <div class="message-box">
        <div class="message-success" v-if="type === 'success'">
            <svg-icon
                icon-class="chenggong"
                className="chenggong-icon"
            ></svg-icon>
            {{ content }}
        </div>
        <div class="message-error" v-if="type === 'error'">
            <svg-icon icon-class="shibai" className="guanbi-icon"></svg-icon>
            {{ content }}
        </div>
    </div>
</template>

<script>
export default {
    name: "Message",
    data() {
        return {
            type: "", // 接收一个参数，显示不同的消息框
            content: "", // 将要显示消息内容
            duration: 3000, // 消息框显示时间
        };
    },
    mounted() {
        // 消息框定时隐藏
        setTimeout(() => {
            // 隐藏时卸载掉dom
            this.$destroy(true);
            this.$el.parentNode.removeChild(this.$el);
        }, this.duration);
    },
};
</script>

<style scoped lang="less">
/* 消息框的样式，采用fixed定位 */
.message-box {
    display: flex;
    align-items: center;
    justify-content: center;
    position: fixed;
    top: 100px;
    left: 0;
    right: 0;
    color: #fff;
    z-index: 99999;
    width: 30%;
    margin: 0 auto;
    .message-success {
        width: 100%;
        height: 40px;
        line-height: 40px;
        border-radius: 5px;
        text-align: center;
        background-color: #9df1a1;
        border: 1px solid #10ec1b;
        opacity: 0.5;
        color: #10ec1b;
        position: relative;
        .chenggong-icon {
            position: absolute;
            top: 5px;
            left: 20px;
            width: 30px;
            height: 30px;
            color: #10ec1b;
        }
    }
    .message-error {
        width: 100%;
        height: 40px;
        line-height: 40px;
        border-radius: 5px;
        text-align: center;
        background-color: #eca6a6;
        border: 1px solid #f04211;
        opacity: 0.5;
        color: #e30f0f;
        position: relative;
        .guanbi-icon {
            position: absolute;
            top: 5px;
            left: 20px;
            width: 30px;
            height: 30px;
            color: #e30f0f;
        }
    }
}
</style>
