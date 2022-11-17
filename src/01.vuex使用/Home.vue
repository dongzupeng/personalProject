<template>
  <div>
    <!-- 第一种方式使用 -->
    <!-- <h1 @click="toAbout">{{$store.state.user.username}}</h1> -->
    <!-- 第二种方式使用 配合辅助函数 -->
    <h1 @click="toAbout">{{username}}</h1>
    <button @click="changeUserName1">修改username 使用mutations</button>
    <button @click="changeUserName2">修改username 使用actions</button>

    姓名:{{getUserName}}
  </div>
</template>

<script>
import { mapState, mapMutations, mapActions, mapGetters} from 'vuex'
export default {
    data(){
      return {

      }
    },
    methods:{
      toAbout(){
        this.$router.push("/about")
      },
      //使用mutations 和 actions时要加上模块名称
      changeUserName1(){
        this.$store.commit('user/SET_USER_NAME',"小废物")
      },
      changeUserName2(){
        this.$store.dispatch('user/setUserName',"学废了")
      }
    },
    computed:{
      // user为模块名称  state 和 getters 第二个参数为数组
      ...mapState('user',['username']),
      ...mapGetters('user',['getUserName']),
  
    }
}
</script>

<style>

</style>