<template>
    <div class="video-list">
        <div class="video">
            <div
                class="video-item"
                v-for="item in videoList"
                :key="item.id"
                @click="toDetail(item)"
            >
                <div class="time">{{ item.duration }}</div>
                <div class="title">{{ item.title }}</div>
                <div class="name">{{ item.userName }}</div>
                <svg-icon
                    icon-class="bofang"
                    className="bofang-icon"
                ></svg-icon>
                <img :src="item.coverUrl" alt="" />
            </div>
        </div>
        <Pager
            @changePage="jumpPage"
            :totalCount="totalCount"
            :pageNumber="queryParams.page"
            :pageSize="queryParams.size"
        ></Pager>
    </div>
</template>

<script>
import Pager from "@/components/pager";
import { getHaoKanVideoList } from "@/api/getSource.js";
export default {
    components: {
        Pager,
    },
    name: "haokanvideoCom",
    data() {
        return {
            videoList: [],
            active: false,
            totalCount: 0,
            queryParams: {
                size: 8,
                page: 1,
            },
        };
    },
    created() {
        //获取跳转之前的页码
        let currentPage = sessionStorage.getItem("currentPage");
        if (currentPage != null) {
            this.queryParams.page = Number(currentPage);
        }
        this.getHaoKanVideo();
    },
    methods: {
        // 获取视频
        async getHaoKanVideo() {
            let res = await getHaoKanVideoList(this.queryParams);
            if (res.code == 200) {
                this.videoList = res.result.list;
                this.totalCount = res.result.total;
            }
        },
        //切换分页
        jumpPage(e) {
            //保存当前页码
            sessionStorage.setItem("currentPage", e.currentPage);
            this.queryParams.page = e.currentPage;
            this.queryParams.size = e.currentSize;
            // 调用接口获取列表数据
            this.getHaoKanVideo();
        },
        //点击跳转详情
        toDetail(item) {
            //转换格式
            let detail = JSON.stringify(item);
            this.$router.push({
                path: "/video-detail",
                query: {
                    detail,
                },
            });
        },
    },
};
</script>

<style lang="less" scoped>
.video-list {
    padding: 50px;
    .video {
        margin: 0 auto;
        box-sizing: border-box;
        display: grid;
        justify-content: space-evenly;
        grid-template-columns: 400px 400px 400px 400px;

        &-item:hover .bofang-icon {
            display: block;
            cursor: pointer;
            opacity: 0.8;
        }

        &-item {
            height: 200px;
            border-radius: 10px;
            margin: 40px 20px;
            position: relative;

            .time {
                color: #fff;
                position: absolute;
                right: 10px;
                bottom: 10px;
            }

            .title {
                position: absolute;
                top: 210px;
                height: 40px;
                font-size: 16px;
            }

            .name {
                position: absolute;
                top: 10px;
                left: 10px;
                font-size: 14px;
                color: #fff;
            }

            img {
                width: 100%;
                height: 100%;
                border-radius: 10px;
                cursor: pointer;
            }

            .bofang-icon {
                position: absolute;
                left: 50%;
                top: 50%;
                transform: translate(-50%, -50%);
                width: 100px;
                display: none;
            }
        }
    }
}
</style>