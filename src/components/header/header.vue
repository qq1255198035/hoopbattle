<template>
      <div id="header" :class="{fixed: isFixed}">
            <div class="header">
                  <div  class="logo">
                        <img src="@/assets/header-logo.png" alt="LOGO">
                  </div>
                  
                  <nav-bar></nav-bar>
            </div>
      </div>
</template>
<script>
import navBar from '@/components/header/navBar'
export default {
      components:{
            navBar
      },
      data(){
            return{
                  isFixed: false,
                  offsetTop:0

            }
      },
      mounted(){
            window.addEventListener('scroll',this.initHeight);
            this.$nextTick( () => {
                  this.offsetTop = document.querySelector('#header').offsetTop;
            })
      },
      methods:{
            initHeight () {
                  var scrollTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop
                  this.isFixed = scrollTop > this.offsetTop
            },
      },
      destroyed () {
            window.removeEventListener('scroll', this.initHeight)
      },
}
</script>
<style lang="less" scoped>
.fixed{
      position: fixed !important;
      left: 0 !important;
      top: 0 !important;
}
#header{
      width: 100%;
      position: absolute;
      top: 75px;
      left: 0;
      z-index: 999;
      .header{
            width: 100%;
            display: flex;
            justify-content: space-between;      
            align-items: center;
            background-color: rgba(0, 0, 0, 0.7);
            padding: 0 100px;
            .logo{
                  width: 122px;
                  height: 100px;
                  display: flex;
                  align-items: center;
                  justify-content: center;
                  img{
                        width: 100%;
                  }
            }
      }
}
@media screen and(max-width: 700px){
      #header{
            top: 40px;
            .header{
                  height: 40px;
                  padding: 0 15px;
                  .logo{
                        width: 62px;
                        height: 40px;
                        img{
                              width: 60%;
                        }
                  }
            }
            
      }
}     
</style>
