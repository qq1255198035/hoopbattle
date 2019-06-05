<template>
      <div id="basic-layout">
            <top-bar></top-bar>
            <myheader></myheader>
            <router-view></router-view>
            <myfooter></myfooter>
      </div>
</template>
<script>
import topBar from '@/components/topBar/topBar'
import myheader from '@/components/header/header'
import myfooter from '@/components/footer/footer'
export default {
      components:{
            topBar,
            myheader,
            myfooter
      },
      mounted(){
            
            
      }
}
</script>
<style lang="less" scoped>

</style>

