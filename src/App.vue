<template>
    <div id="app">
        <!-- 页面强制刷新 -->
        <router-view v-if="isRouterAlive" />
    </div>
</template>

<script>
export default {
    name: "App",
    provide() {
        return {
            reload: this.reload,
        };
    },
    data() {
        return {
            isRouterAlive: true,
        };
    },
    methods: {
        reload() {
            this.isRouterAlive = false;
            this.$nextTick(() => {
                this.isRouterAlive = true;
            });
        },
    },
};
</script>

<style>
</style>
