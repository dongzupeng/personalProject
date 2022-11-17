<template>
    <div class="header">
        <ul>
            <template>
                <li
                    @click="toggleTab(item)"
                    :class="{ activeClass: item.path === $route.path }"
                    v-for="item in dataList"
                    :key="item.id"
                >
                    {{ item.name }}
                </li>
            </template>
            <li>
                <input
                    class="search"
                    type="text"
                    v-model="keyWords"
                    placeholder="搜搜看吧"
                />
                <svg-icon
                    icon-class="sousuo"
                    className="sousuo-icon"
                ></svg-icon>
            </li>
            <li class="register" @click="showRegisterDialog">注册</li>
            <li class="login" @click="showLoginDialog">登录</li>
        </ul>
        <router-view />
        <!--登录弹窗  -->
        <login v-if="loginDialog"></login>
        <!-- <goTop></goTop> -->
    </div>
</template>

<script>
import { mapState, mapMutations, mapActions, mapGetters } from "vuex";
export default {
    name: "navTop",
    props: {},
    data() {
        return {
            keyWords: "",

            dataList: [
                {
                    id: 1,
                    path: "/index",
                    name: "首页",
                },
                {
                    id: 2,
                    path: "/wallpaper",
                    name: "美图壁纸",
                },
                {
                    id: 3,
                    path: "/video",
                    name: "好看视频",
                },
            ],
        };
    },
    methods: {
        // 切换tab
        toggleTab(v) {
            this.$router.push(v.path);
        },
        //点击注册
        showRegisterDialog() {
            console.log("@@@", this.$store);
            this.$store.commit("user/SET_LOGIN_DIALOG", true);
        },
        showLoginDialog() {
            this.$store.commit("user/SET_LOGIN_DIALOG", true);
        },
    },
    computed: {
        // user为模块名称  state 和 getters 第二个参数为数组
        ...mapState("user", ["loginDialog", "dialogPicture"]),
    },
};
</script>

<style lang="less">
.header {
    width: 100%;
    height: 80px;
    background-color: #ffffff;
    position: sticky;
    top: 0;
    min-width: 700px;
    z-index: 999;
    box-shadow: 1px 1px 10px #f0f0f0;

    ul {
        width: 60%;
        margin: 0 auto;
        padding: 10px 100px;
        display: flex;
        justify-content: space-around;
        text-align: center;
        position: relative;

        .activeClass {
            color: #38ecdd;
            transform: scale(1.2);
        }

        li {
            height: 50px;
            line-height: 50px;
            padding: 0 10px;
            cursor: pointer;
            position: relative;

            .search {
                background-color: #f0f0f0;
                border-radius: 20px;
                width: 200px;
                height: 40px;
                padding: 0 15px;
            }

            .sousuo-icon {
                width: 20px;
                height: 20px;
                position: absolute;
                top: 15px;
                left: 200px;
            }

            &.register {
                margin: 10px;
                width: 60px;
                height: 30px;
                line-height: 30px;
                border: 1px solid #ccc;
                border-radius: 15px;
                font-size: 12px;
            }

            &.login {
                margin: 10px;
                width: 60px;
                height: 30px;
                line-height: 30px;
                border-radius: 15px;
                font-size: 12px;
                color: #fff;
                border: 1px solid #2ed9cb;
                background-color: #2ed9cb;
                position: absolute;
                right: 30px;
                margin-left: 20px;
            }
        }
    }
}
</style>