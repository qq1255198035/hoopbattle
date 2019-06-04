<template>
      <div id="home">
            <swiper :imgUrl="imgURL"></swiper>
            <div class="section1">
                  <div class="img-box">
                        <img src="./../assets/img1-home.png" alt="">
                  </div>
            </div>
            <ul class="section2">
                  <li>
                        <router-link to="/hongkong">
                              <div class="desc">
                                    <p class="opicaty">{{ $t('more') }} >></p>
                                    
                              </div>
                              
                        </router-link>
                  </li>
                  <li>
                        <router-link to="/tokyo">
                              <div class="desc">
                                    <p class="opicaty">{{ $t('more') }} >></p>
                                    
                              </div>
                        </router-link> 
                  </li>
                  <li>
                        <router-link to="/toronto">
                              <div class="desc">
                                    <p class="opicaty">{{ $t('more') }} >></p>
                                    
                              </div>
                        </router-link> 
                        
                  </li>
                  <li>
                        <router-link to="/newyork">
                              <div class="desc">
                                    <p class="opicaty">{{ $t('more') }} >></p>
                                    
                              </div>
                        </router-link> 
                        
                  </li>
                  <li>
                        <router-link to="/vancoucer">
                              <div class="desc">
                                    <p class="opicaty">{{ $t('more') }} >></p>
                                   
                              </div>
                        </router-link>
                        
                  </li>
            </ul>
      </div>
</template>
<script>
import swiper from '@/components/swiper/swiper'
import banner1 from '@/assets/banner1.png'
export default {
      components:{
            swiper
      },
      data(){
            return{
                  imgURL:[
                        banner1,
                        banner1,
                        banner1
                  ]
            }
      },
      mounted(){
            
      }
}
</script>
<style lang="less" scoped>
#home{
      width: 100%;
      .section1{
            background-color: #f3f3f3;
            display: flex;
            justify-content: center;
            padding: 10px 0;
            .img-box{
                  width: 28%;
                  img{
                        width: 100%;
                  }
            }
      }
      .section2{
            display: flex;
            width: 100%;
            justify-content: center;
            flex-wrap: wrap;
            background-color: #000;
            li{
                  width: 33.333333%;
                  height: 302px;
                  overflow: hidden;
                  background-color: #000;
                  p{
                        color: #fff;
                        margin: 0;
                        border: 1px solid #fff;
                        font-size: 14px;
                        padding: 5px 20px;
                  }
                  &:nth-child(1){
                        
                        a{
                              background-image: url('./../assets/img2-home.png');
                              padding-left: 80px;
                              .desc{
                                    display: flex;
                                    .opicaty{
                                          color: #fff;
                                          opacity: 0.8;
                                    }
                                    .second{
                                          margin-top: 60px;
                                          display: flex;
                                          span{
                                                margin-left: 20px;
                                          }
                                    }
                              }
                        }
                  }
                  &:nth-child(2){

                        a{
                              background-image: url('./../assets/img3-home.png');
                              padding-left: 63px;
                              .desc{
                                    display: flex;
                                    .opicaty{
                                          color: #fff;
                                          opacity: 0.8;
                                    }
                                    .second{
                                          margin-top: 38px;
                                          display: flex;
                                          span{
                                                margin-right: 20px;
                                          }
                                    }
                              }
                        }
                  }
                  &:nth-child(3){
                        a{
                              background-image: url('./../assets/img4-home.png');
                              padding-right: 20px;
                              .desc{
                                    display: flex;
                                    justify-content: center;
                                    .opicaty{
                                          color: #fff;
                                          opacity: 0.8;
                                    }
                                    .second{
                                          margin-top: 38px;
                                          
                                          span{
                                                margin-right: 20px;
                                          }
                                    }
                              }
                        }
                  }
                  &:nth-child(4){
                        a{
                              background-image: url('./../assets/img5-home.png');
                              padding-left: 377px;
                              .desc{
                                    display: flex;
                                    .opicaty{
                                          color: #fff;
                                          opacity: 0.8;
                                    }
                                    .second{
                                          margin-top: 60px;
                                          display: flex;
                                          span{
                                                margin-left: 20px;
                                          }
                                    }
                              }
                        }
                  }
                  &:nth-child(5){
                        a{
                              background-image: url('./../assets/img6-home.png');
                              
                              .desc{
                                    display: flex;
                                    justify-content: center;
                                    .opicaty{
                                          color: #fff;
                                          opacity: 0.8;
                                    }
                                    .second{
                                          margin-top: 38px;
                                          display: flex;
                                          span{
                                                margin-left: 20px;
                                          }
                                    }
                              }
                        }
                  }
                  a{
                        display: block;
                        width: 100%;
                        height: 100%;
                        padding-top: 140px;
                        background-position: top center;
                        background-size: 100% auto;
                        background-repeat: no-repeat;
                        &:hover{
                                    transform: scale(1.1);
                                    transition: all 0.5s ease;     
                        }
                  }
                  
            }
      }
}
@media screen and (max-width: 700px){
      #home{
            .section2{
                  li{
                        width: 100%;
                        height: 178px;
                        p{
                              padding: 5px 10px;
                        }
                        &:nth-child(1){
                              a{
                                    padding-left: 46px;
                                    .desc{
                                          .opicaty{
                                                color: #fff;
                                                opacity: 0.8;
                                          }
                                    }
                              }
                        }
                        &:nth-child(2){
                              a{
                                    padding-left: 36px;
                                    .desc{
                                          .opicaty{
                                                color: #fff;
                                                opacity: 0.8;
                                          }
                                          .second{
                                                margin-top: 20px;
                                                display: flex;
                                          }
                                    }
                              }
                        }
                        &:nth-child(3){
                              a{
                                    
                                    .desc{
                                          .opicaty{
                                                color: #fff;
                                                opacity: 0.8;
                                          }
                                          .second{
                                                margin-top: 15px;
                                               
                                          }
                                    }
                              }
                        }
                        &:nth-child(4){
                              a{
                                    padding-left: 224px;
                                    padding-top: 90px;
                                    .desc{
                                          .opicaty{
                                                color: #fff;
                                                opacity: 0.8;
                                          }
                                          .second{
                                                margin-top: 15px;
                                               
                                          }
                                    }
                              }
                        }
                        &:nth-child(5){
                              a{
                                    
                                    .desc{
                                          .opicaty{
                                                color: #fff;
                                                opacity: 0.8;
                                          }
                                          .second{
                                                margin-top: 15px;
                                               
                                          }
                                    }
                              }
                        }
                        a{
                              padding-top: 75px;
                              p{
                                    font-size: 14px;
                              }
                        }
                  }
            }
      }
}   
</style>
