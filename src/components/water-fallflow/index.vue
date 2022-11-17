<template>
    <div class="waterfall wf-wrap" ref="waterfall" @scroll="onScroll">
        <div class="type-list">
            <li
                @click="toggleTab(item)"
                :class="{ activeClass: item.active }"
                v-for="item in typeList"
                :key="item.type"
            >
                {{ item.name }}
            </li>
        </div>
        <template v-if="waterfallList.length > 0">
            <li
                v-for="(item, index) in waterfallList"
                :key="index"
                class="wf-item"
                :style="{
                    top: item.top + 'px',
                    left: item.left + 'px',
                    width: item.width + 'px',
                    height: item.height + 'px',
                }"
            >
                <img
                    v-lazyload
                    :src="item.src"
                    :title="item.title"
                    @click="openDialogPicture(item.src)"
                />
            </li>
        </template>
    </div>
</template>
<script>
import { getPictureList } from "@/api/getSource.js";

export default {
    name: "waterfallFlow",
    inject: ["reload"],
    data() {
        return {
            //瀑布流数据
            waterfallList: [],
            //显示列数
            waterfallCol: 4,
            //每列宽度
            colWidth: 236,
            marginRight: 10,
            marginBottom: 10,
            //收集每列高度
            colHeights: [],
            //分页参数
            listQuery: {
                page: 1,
                size: 10,
                type: "animal",
            },
            typeList: [
                {
                    active: true,
                    type: "animal",
                    name: "动物壁纸",
                },
                {
                    active: false,
                    type: "beauty",
                    name: "美女壁纸",
                },
                {
                    active: false,
                    type: "car",
                    name: "豪车壁纸",
                },
                {
                    active: false,
                    type: "comic",
                    name: "动漫壁纸",
                },
                {
                    active: false,
                    type: "food",
                    name: "美食壁纸",
                },
                {
                    active: false,
                    type: "game",
                    name: "游戏壁纸",
                },
                {
                    active: false,
                    type: "movie",
                    name: "电影壁纸",
                },
                {
                    active: false,
                    type: "person",
                    name: "个性壁纸",
                },
                {
                    active: false,
                    type: "phone",
                    name: "手机壁纸",
                },
                {
                    active: false,
                    type: "scenery",
                    name: "风景壁纸",
                },
            ],
            //加载状态
            loading: false,
        };
    },
    mounted() {
        //初始化
        this.init();
        window.addEventListener("resize", this.init, true);
    },
    methods: {
        // 切换tab
        toggleTab(v) {
            if (this.listQuery.type == v.type) return;
            console.log("@@@");
            this.waterfallList = [];
            this.typeList.map((item) => {
                item.active = false;
            });
            v.active = true;
            this.listQuery.page = 1;
            this.listQuery.type = v.type;
            this.init();
        },
        init() {
            this.waterfallList = [];
            // 初始化时，每栏高度都为0
            this.colHeights = new Array(this.waterfallCol);
            for (let i = 0; i < this.colHeights.length; i++) {
                this.colHeights[i] = 0;
            }
            this.colWidth =
                (this.$refs.waterfall.clientWidth -
                    (this.waterfallCol - 1) * this.marginRight) /
                this.waterfallCol;
            // setTimeout(() => {

            // }, 1000);
            this.loadImgs();
        },
        //加载图片
        loadImgs() {
            this.loading = true;
            let images = [];
            // 从api获取数据
            getPictureList(this.listQuery).then((res) => {
                images = res.result.list;
                let promiseAll = [];
                let imgs = [];
                let total = images.length;

                for (let i = 0; i < total; i++) {
                    promiseAll[i] = new Promise((resolve) => {
                        imgs[i] = new Image();
                        imgs[i].src = images[i].url;
                        imgs[i].onload = () => {
                            let imgData = {};
                            imgData.height =
                                (imgs[i].height * this.colWidth) /
                                imgs[i].width;
                            imgData.width = this.colWidth;
                            imgData.src = images[i].url;
                            imgData.title = images[i].title;
                            this.waterfallList.push(imgData);
                            this.rankImgs(imgData);
                            resolve(imgs[i]);
                        };
                    });
                }
                Promise.all(promiseAll).then(() => {
                    this.loading = false;
                    this.listQuery.page++;
                    this.loadMore();
                });
            });
        },
        //加载更多
        loadMore() {
            if (
                this.$refs.waterfall.clientHeight +
                    this.$refs.waterfall.scrollTop >
                    this.filterMin().minHeight &&
                this.loading == false
            ) {
                this.loading = true;
                setTimeout(() => {
                    this.listQuery.page++;
                    this.loadImgs();
                }, 200);
            }
        },
        //处理图片top left 、列高度
        rankImgs(imgData) {
            let min = this.filterMin();
            imgData.top = min.minHeight;
            imgData.left = min.minIndex * (this.colWidth + this.marginRight);
            this.colHeights[min.minIndex] += imgData.height + this.marginBottom;
        },
        //获取最小高度以及索引
        filterMin() {
            let minHeight = Math.min.apply(null, this.colHeights);
            return {
                minHeight: minHeight,
                minIndex: this.colHeights.indexOf(minHeight),
            };
        },
        //触发下拉获取数据
        onScroll() {
            this.$debounce(this.loadMore(), 1000);
        },
        //点击图片显示大图
        openDialogPicture(imgUrl) {
            this.$store.commit("user/SET_PICTURE_DIALOG", {
                dialogPicture: true,
                imgUrl,
            });
        },
    },
    beforeDestroy() {
        window.removeEventListener("resize", this.init, true);
    },
};
</script>

<style lang="less" scoped>
.wf-wrap::-webkit-scrollbar {
    display: none;
}

li {
    list-style: none;
}

.wf-wrap {
    position: relative;
    width: 80%;
    margin: 20px auto;
    height: calc(100vh - 10px);
    overflow-y: scroll;

    .type-list {
        width: 100%;
        height: 200px;
        line-height: 200px;
        font-size: 20px;
        display: flex;

        li {
            height: 100%;
            margin: 10px;
            cursor: pointer;
        }

        .activeClass {
            color: #38ecdd;
            transform: scale(1.2);
        }
    }

    .wf-item {
        position: absolute;
        height: 100%;
        margin-top: 200px;
        display: flex;
        img {
            width: 100%;
            display: block;
            height: auto;
            cursor: pointer;
            border: 1px solid #f0f0f0;
            border-radius: 10px;
        }
    }
}
</style>