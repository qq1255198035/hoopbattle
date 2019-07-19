<template>
      <div id="swiper">
            <div class="swiper-container">
                  <div class="swiper-wrapper">
                        <div class="swiper-slide" v-for="(item,index) in imgUrl" :key="index">
                              <img :src="item" alt="banner">
                              <button v-if="index == 2" class="toronto btn btn-7 btn-7a icon-arrow-right" @click="$router.push({path:'/toronto'})">{{ $t('intro.registernow') }}</button>
                              <button v-if="index == 1" class="hongkong btn btn-7 btn-7a icon-arrow-right" @click="$router.push({path:'/hongkong'})">{{ $t('intro.discovermore') }}</button>
                        </div>

                  </div>
                  <!-- <div class="swiper-pagination"></div> -->
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
                        // pagination: {
                        //       el: '.swiper-pagination'
                        // },
                        navigation: {
                              nextEl: '.swiper-button-next',
                              prevEl: '.swiper-button-prev',
                        },
                        
                  })        
            },
           
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
@import './../../assets/component.css';
.swiper-wrapper{
      position: relative;
      button{
            width: 230px;
            position: absolute;
            left: 50%;
            margin-left: -115px;
            padding: 10px;
            padding-left: 30px;
            color: #fff;
            border-width: 1px;
            cursor: pointer;
            outline: none;
      }
      .toronto{
            bottom: 50px;
      }
      .hongkong{
            bottom: 150px;
      }
}
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
      .swiper-wrapper{
            position: relative;
            button{
                  width: 170px;
                  font-size: 8px;
                  padding: 5px;
                  padding-left: 20px;
                  margin-left: -85px;
            }
            .toronto{
                  bottom: -8px;
            }
            .hongkong{
                  bottom: 20px;
            }
      }
}
</style>
