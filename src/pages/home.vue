<template>
      <div id="home">
            
            <div class="banner-box">
                  <myswiper :imgUrl="changeBanners()"/>
            </div>
            <div class="section">
                  <p></p>
                  <!-- <iframe src="https://www.facebook.com/plugins/video.php?href=https%3A%2F%2Fwww.facebook.com%2Fnba%2Fvideos%2F2712587355443005%2F&show_text=0&width=476" style="border:none;overflow:hidden" scrolling="no" frameborder="0" allowTransparency="true" allowFullScreen="true"></iframe> -->
                  <div class="video-box">
				<video src="https://video-1253858660.cos.ap-chengdu.myqcloud.com/video/HOOPBATTLE%20TOKYO%202019%20video.mp4" controls="controls" preload="preload"></video>
			</div>
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
            <div class="section3">
                  <p></p>
                  <div class="img-box">
                        <h3>{{$t('toronto')}}</h3>
                        <img src="./../assets/sponsor-01.png" alt="">
                        <img src="./../assets/sponsor-02.png" alt="">
                        <img src="./../assets/sponsor-03.png" alt="">
                        <img src="./../assets/sponsor-04.png" alt="">
                        <img src="./../assets/sponsor-05.png" alt="">
                        <img src="./../assets/sponsor-06.png" alt="">
                        <img src="./../assets/sponsor-07.png" alt="">
                        <img src="./../assets/sponsor-08.png" alt="">
                        <img src="./../assets/sponsor-09.png" alt="">
                        <img src="./../assets/sponsor-10.png" alt="">
                        <img src="./../assets/sponsor-11.png" alt="">
                  </div>
                  <div class="img-box">
                        <h3>{{$t('hongkong')}}</h3>
                        <img src="./../assets/1.png" alt="">
                        <img src="./../assets/2.png" alt="">
                        <img src="./../assets/3.png" alt="">
                        <img src="./../assets/4.png" alt="">
                        <img src="./../assets/5.png" alt="">
                        <img src="./../assets/6.png" alt="">
                        <img src="./../assets/7.png" alt="">
                        <img src="./../assets/8.png" alt="">
                        <img src="./../assets/9.png" alt="">
                        <img src="./../assets/10.png" alt="">
                        <img src="./../assets/11.png" alt="">
                        <img src="./../assets/12.png" alt="">
                        <img src="./../assets/13.png" alt="">
                        <img src="./../assets/14.png" alt="">
                        <img src="./../assets/15.png" alt="">
                  </div>
                  <div class="img-box" style="padding-top: 60px;justify-content: flex-start;">
                        <h3>Japan <br/>Supporting companies </h3>
                        <img src="./../assets/japan-supporting01.jpg" style="width: 15%;"/>
                        <img src="./../assets/japan-supporting02.jpg" style="width: 15%;"/>
                  </div>
                  <div class="img-box" style="padding-top: 30px;">
                        <h3>Cooperative companies</h3>
                        <img src="./../assets/coop01.jpg" style="width: 15%;"/>
                        <img src="./../assets/coop02.png" style="width: 15%;"/>
                        <img src="./../assets/coop04.png" style="width: 15%;"/>
                        <img src="./../assets/coop03.png" style="width: 15%;"/>
                        <img src="./../assets/coop05.jpg" style="width: 15%;"/>
                  </div>
            </div>
      </div>
</template>
<script>
import myswiper from '@/components/swiper/swiper'
import bannerNew1 from '@/assets/HBTokyoposter.jpg'
import bannerNew2 from '@/assets/HBTokyoposter.jpg'
import bannerNew3 from '@/assets/banner-hongkong-en.png'
import bannerNew4 from '@/assets/banner-toronto-en.jpg'
export default {
      components:{
            myswiper
      },
      data(){
            return{
                 
            }
      },
      mounted(){
            
      },
	methods:{
		changeBanners(){
			if(this.$i18n.locale == 'zh_CN'){
				return [bannerNew1,bannerNew3,bannerNew4]
			}else if(this.$i18n.locale == 'en_US'){
				return [bannerNew2,bannerNew3,bannerNew4]
			}
		}
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
            .section3{
                  p{
                        width: 235px;
                        height: 30px;
                        background-image: url('./../assets/partner-cn.png');
                        background-position: top center;
                        background-size: 100% 100%;
                        background-repeat: no-repeat;
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
            .section3{
                  p{
                        width: 300px;
                        height: 40px;
                        background-image: url('./../assets/partner-en.png');
                        background-position: top center;
                        background-size: 100% 100%;
                        background-repeat: no-repeat;
                  }
            }
      }   
}
#home{
      width: 100%;
      .banner-box{
            width: 100%;
            background-color: #000;
            padding-top: 100px;
            img{
                  display: block;
                  width: 100%;
            }
      }
      .section{
            width: 100%;
            padding: 60px 15%;
            display: flex;
            flex-wrap: wrap;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            background-image: url('./../assets/video-bg.png');
            background-position: top center;
            background-size: 100% 100%;
            background-repeat: no-repeat;
            p{
                  margin-bottom: 40px;
            }
            .video-box{
                  width: 60%;
                  display: flex;
                  flex-wrap: wrap;
                  justify-content: flex-start;
                  align-items: center;
                  margin: 20px 0;
                  video{
                        width: 100%;
                        margin: 10px 0;
                        outline: none;
                  }
                  
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
                        background-size: 100% 100%;
                        background-repeat: no-repeat;
                        &:hover{
                              transform: scale(1.1);
                              transition: all 0.5s ease;     
                        }
                  }
                  
            }
      }
      .section3{
            width: 100%;
            padding: 60px 15%;
            display: flex;
            flex-wrap: wrap;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            background-color: #000;
            h3{
                  color: #fff;
            }
            p{
                  margin-bottom: 40px;
            }
            .img-box{
                  display: flex;
                  align-items: center;
                  justify-content: center;
                  flex-wrap: wrap;
                  position: relative;
                  padding-top: 15px;
                  h3{
                        position: absolute;
                        left: 0;
                        top: 0;
                  }
                  img{
                        margin: 20px;
                        width: 10%;
                  }
            }
      }
}
@media screen and (max-width: 700px){
      #home{
            .banner-box{
                  padding-top: 40px;
            }
            .section{
                  padding: 20px 30px;
                  p{
                        width: 130px;
                        height: 20px;
                        margin-bottom: 20px;
                        img{
                              width: 40%;
                        }
                  }
                  .video-box{
                        width: 100%;
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
            .section3{
                  padding: 20px 30px;
                  p{
                        width: 130px;
                        height: 20px;
                        margin-bottom: 20px;
                  }
                  .img-box{
                        flex-direction: column;
                        img{
                              width: 50% !important;
                              margin: 20px 0;
                        }
                  }
            }
      }
}   
</style>
