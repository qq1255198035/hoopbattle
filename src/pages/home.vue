<template>
      <div id="home">
            <swiper :imgUrl="imgURL"></swiper>
            <div class="section">
                  <p>
                        
                  </p>
                  <iframe src="https://www.facebook.com/plugins/video.php?href=https%3A%2F%2Fwww.facebook.com%2Fnba%2Fvideos%2F2712587355443005%2F&show_text=0&width=476" style="border:none;overflow:hidden" scrolling="no" frameborder="0" allowTransparency="true" allowFullScreen="true"></iframe>
            </div>
            <div class="section1">
                  <div class="img-box">
                        
                  </div>
            </div>
            <ul class="section2">
                  <li>
                        <router-link to="/hongkong">
                              
                        </router-link>
                  </li>
                  <li>
                        <router-link to="/tokyo">
                             
                        </router-link> 
                  </li>
                  <li>
                        <router-link to="/toronto">
                              
                        </router-link> 
                        
                  </li>
                  <li>
                        <router-link to="/newyork">
                              
                        </router-link> 
                        
                  </li>
                  <li>
                        <router-link to="/vancouver">
                              
                        </router-link>
                        
                  </li>
            </ul>
      </div>
</template>
<script>
import swiper from '@/components/swiper/swiper'
import banner1 from '@/assets/banner.jpg'
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
            
      },
      computed:{
            
      },
      watch:{
            
      }
}
</script>
<style lang="less" scoped>
html[lang=zh-CN]{
      #home{
            .section{
                  p{
                        width: 178px;
                        height: 33px;
                        background-image: url('./../assets/video-title-cn.png');
                        background-position: top center;
                        background-size: 100% 100%;
                        background-repeat: no-repeat;
                  }
            }
            .section1{
                  .img-box{
                        width: 380px;
                        height: 271px;
                        background-image: url('./../assets/media-cn.png');
                        background-position: top center;
                        background-size: 100% 100%;
                        background-repeat: no-repeat;
                  }
            }
            .section2{
                  li{
                        &:nth-child(1){
                              a{
                                    background-image: url('./../assets/img1-cn-home.jpg');
                              }
                        }
                        &:nth-child(2){
                              a{
                                    background-image: url('./../assets/img2-cn-home.jpg');
                              }
                        }
                        &:nth-child(3){
                              a{
                                    background-image: url('./../assets/img3-cn-home.jpg');
                              }
                        }
                        &:nth-child(4){
                              a{
                                    background-image: url('./../assets/img4-cn-home.jpg');
                              }
                        }
                        &:nth-child(5){
                              a{
                                    background-image: url('./../assets/img5-cn-home.jpg');
                              }
                        }   
                  }
            }
      }   
}
html[lang=en]{
      #home{
            .section{
                  p{
                        width: 231px;
                        height: 31px;
                        background-image: url('./../assets/video-title-en.png');
                        background-position: top center;
                        background-size: 100% 100%;
                        background-repeat: no-repeat;
                  }
            }
            .section1{
                  .img-box{
                        width: 380px;
                        height: 271px;
                        background-image: url('./../assets/media-en.png');
                        background-position: top center;
                        background-size: 100% 100%;
                        background-repeat: no-repeat;
                  }
            }
            .section2{
                  li{
                        &:nth-child(1){
                              a{
                                    background-image: url('./../assets/img1-en-home.jpg');
                              }
                        }
                        &:nth-child(2){
                              a{
                                    background-image: url('./../assets/img2-en-home.jpg');
                              }
                        }
                        &:nth-child(3){
                              a{
                                    background-image: url('./../assets/img3-en-home.jpg');
                              }
                        }
                        &:nth-child(4){
                              a{
                                    background-image: url('./../assets/img4-en-home.jpg');
                              }
                        }
                        &:nth-child(5){
                              a{
                                    background-image: url('./../assets/img5-en-home.jpg');
                              }
                        }   
                  }
            }
      }   
}
#home{
      width: 100%;
      .section{
            width: 100%;
            padding: 100px 334px;
            display: flex;
            flex-wrap: wrap;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            background-image: url('./../assets/video-bg.png');
            background-position: top center;
            background-size: 100% 100%;
            background-repeat: no-repeat;
            
            iframe{
                  width: 800px;
                  height: 555px;
            }
      }
      .section1{
            background-color: #f3f3f3;
            display: flex;
            justify-content: center;
      }
      .section2{
            display: flex;
            width: 100%;
            justify-content: center;
            flex-wrap: wrap;
            background-color: #1e1e1e;
            li{
                  width: 33.333333%;
                  height: 302px;
                  overflow: hidden;
                  background-color: #000;
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
      html[lang=en]{
            #home{
                  .section{
                        p{
                              width: 130px;
                              height: 20px;
                        }
                  }
            }
      }
      html[lang=zh-CN]{
            #home{
                  .section{
                        p{
                              width: 130px;
                              height: 20px;
                        }
                  }
            }
      }
      #home{
            .section{
                  padding: 20px 30px;
                  p{
                        margin-bottom: 20px;
                        img{
                              width: 40%;
                        }
                  }
                  iframe{
                        width: 100%;
                        height: auto;
                  }
            }
            .section1{
                  .img-box{
                        width: 280px !important;
                        height: 171px !important;
                  }
            }
            .section2{
                  li{
                        width: 100%;
                        height: 178px;
                  }
            }
      }
}   
</style>
