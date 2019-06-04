<template>
      <div id="swiper">
            <div class="swiper-container">
                  <div class="swiper-wrapper">
                        <div class="swiper-slide" v-for="(item,index) in imgUrl" :key="index">
                              <img :src="item" alt="banner">
                        </div>
                  </div>
                  <div class="swiper-pagination"></div>
                  <div class="swiper-button-prev"></div>
                  <div class="swiper-button-next"></div>
            </div>
      </div>
</template>
<script>
import Swiper from "swiper"
export default {
      data(){
            return{}
      },
      props: {
            imgUrl: {
                  type: Array,
                  required: true,
            }
    },
      methods:{
            initSwiper(){
                  new Swiper ('.swiper-container', {
                        loop: true,
                        autoplay:true,
                        pagination: {
                              el: '.swiper-pagination'
                        },
                        navigation: {
                              nextEl: '.swiper-button-next',
                              prevEl: '.swiper-button-prev',
                        },
                        
                  })        
            }
      },
      created(){
            
      },
      mounted(){
            this.initSwiper();
      }
}
</script>

<style lang="less">
@import './../../../node_modules/swiper/dist/css/swiper.css';
.swiper-pagination{
      span.swiper-pagination-bullet{
            background-color: #fff;
      }
      span.swiper-pagination-bullet-active{
            background-color: #3254a4;
      }
}
.swiper-slide{
     img{
           display: block;
           width: 100%;
     }
}
@media screen and (max-width: 700px){
      .swiper-button-prev,.swiper-button-next{
            display: none;
      }
}
</style>
