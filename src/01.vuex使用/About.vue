<template>
  <div>
    <h1>{{username}}</h1>
  </div>
</template>

<script>
import {mapState} from 'vuex'
export default {
    data(){
      return{

      }
    },
    computed:{
      ...mapState('user',['username'])
    },
    mounted(){
      
    }
}
</script>

<style>

</style>