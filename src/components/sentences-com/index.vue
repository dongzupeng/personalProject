<template>
    <div class="sentences-box">
        <div class="day">每日一句</div>
        <div class="name">{{ dataObj.name }}</div>
        <div class="from">&mdash;&mdash;&mdash;{{ dataObj.from }}</div>
    </div>
</template>

<script>
import { getSentences } from "@/api/getSource.js";
export default {
    name: "sentencesCom",
    data() {
        return {
            dataObj: {},
        };
    },
    created() {
        this.getSentencesList();
    },
    methods: {
        //获取名言数据
        async getSentencesList() {
            const data = await getSentences();
            console.log(data);
            this.dataObj = data.result;
        },
    },
};
</script>

<style lang="less" scoped>
.sentences-box {
    width: 100%;
    padding: 100px 200px;
    box-sizing: border-box;

    .day {
        font-size: 20px;
    }

    .name {
        text-indent: 100px;
        letter-spacing: 2px;
    }

    .from {
        text-align: right;
        letter-spacing: 2px;
    }
}
</style>