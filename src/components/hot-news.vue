<template>
  <div class="container">
    <div class="hot">
      <!-- <div class="hot-title">美图show</div> -->
      <div class="hot-item">
        <!-- <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div> -->
        <!-- <button v-hasRole="'admin'">添加</button>
        <button v-hasRole="'admin'">删除</button> -->
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "hotNews",
}
</script>

<style lang="less" scoped>
.container {
  width: 100%;
  min-width: 700px;
  box-shadow: 1px 10px 10px 3px #f0f0f0;
  .hot {
    width: 100%;
    margin: 0 auto;
    display: flex;
    justify-content: space-between;
    padding: 100px;
    box-sizing: border-box;
    &-title {
      font-size: 30px;
      font-weight: bold;
      padding: 0 100px;
    }
    &-item {
      font-size: 16px;
      display: flex;
      div {
        margin: 0 20px;
      }
    }
  }
}
</style>>

