<template>
      <div id="play">
            <section class="dv">
                  <h1>{{ $t('intro.title') }}</h1>      
            </section>
            <section class="dv1 padding334">
                  <div class="left">
                        <h3>Hoop Battle 3x3</h3>
                        <span></span>
                  </div>
                  <div class="right">
                        <p>
                              {{ $t('intro.desc1') }}
                        </p>
                        <p>
                              {{ $t('intro.desc2') }}
                        </p>  
                  </div>
            </section>
            <ul class="dv2 padding334">
                  <li> 
                        <div class="img-box">
                              <img src="./../assets/icon1-play.png" alt="">  
                        </div>
                        
                        <div class="text">
                              <h5>{{ $t('intro.regist') }}</h5>
                              <span>
                                    <span @click.self="downLoadPdf_3" class="down">
                                          {{ $t('intro.learnmore') }}
                                    </span>
                                    
                                    <i>
                                          <font-awesome-icon icon="long-arrow-alt-right" />
                                    </i>  
                              </span>
                        </div> 
                  </li>
                  <li> 
                        <div class="img-box">
                              <img src="./../assets/icon2-play.png" alt="">
                        </div>
                          
                        <div class="text">
                              <h5>{{ $t('intro.disclaimer') }}</h5>
                              <span>
                                    <span @click.self="downLoadPdf_2" class="down">
                                          {{ $t('intro.learnmore') }}
                                    </span>
                                    <i>
                                          <font-awesome-icon icon="long-arrow-alt-right" />
                                    </i>  
                              </span>
                        </div>
                  </li>
                  <li> 
                        <div class="img-box">
                              <img src="./../assets/icon3-play.png" alt="">  
                        </div>
                        <div class="text">
                              <h5>{{ $t('intro.competition') }}</h5>
                              <span>
                                    <span @click.self="downLoadPdf_1" class="down">
                                          {{ $t('intro.learnmore') }}
                                    </span>
                                    <i>
                                          <font-awesome-icon icon="long-arrow-alt-right" />
                                    </i>  
                              </span>
                        </div>      
                  </li>
            </ul>
            <div class="section1">
                  <div class="img-box">
                        <h5>{{ $t('photo') }}</h5>
                  </div>
            </div>
            <section class="dv3">
                  <img class="image" v-for="(image, i) in imgUrl" :src="image" :key="i" @click="index = i">
                  <vue-gallery-slideshow :images="imgUrl" :index="index" @close="index = null"></vue-gallery-slideshow>
            </section>

            <!-- 插件 -->
          
            <section class="dv5">

            </section>
            
      </div>
</template>
<script>
import axios from 'axios';

import VueGallerySlideshow from 'vue-gallery-slideshow';
import img01 from '@/assets/img01.jpg'
import img02 from '@/assets/img02.jpg'
import img03 from '@/assets/img03.jpg'
import img04 from '@/assets/img04.jpg'
import img05 from '@/assets/img05.jpg'
import img06 from '@/assets/img06.jpg'
import img07 from '@/assets/img07.jpg'
import img08 from '@/assets/img08.jpg'
import img09 from '@/assets/img09.jpg'
export default {
      components: {
            VueGallerySlideshow
      },
      data(){
            return{
                  imgUrl:[
                        img01,
                        img02,
                        img03,
                        img04,
                        img05,
                        img06,
                        img07,
                        img08,
                        img09
                  ],
                  index:null
            }
      },
      computed:{
           
      },
      methods:{
            
            downLoadPdf_1() {
                  let purl = '3' + this.$i18n.locale + '.pdf';
                  document.querySelector(".dv5").innerHTML = '';
                  axios.get(purl,{
                        responseType: 'blob', //重要
                  }).then(response => {
                        const url = window.URL.createObjectURL(new Blob([response.data]));      
                        let fname = 'rules.pdf';
                        const link = document.createElement('a');
                        link.href = url;
                        link.setAttribute('download', fname);
                        document.querySelector(".dv5").appendChild(link);
                        link.click();
                        window.URL.revokeObjectURL(url);
                  })
            },
            downLoadPdf_2() {
                  let purl = '2' + this.$i18n.locale + '.pdf';
                  document.querySelector(".dv5").innerHTML = '';
                  axios.get(purl,{
                        responseType: 'blob', //重要
                  }).then(response => {
                        const url = window.URL.createObjectURL(new Blob([response.data]));      
                        let fname = 'disclaimer.pdf';
                        const link = document.createElement('a');
                        link.href = url;
                        link.setAttribute('download', fname);
                        document.querySelector(".dv5").appendChild(link);
                        link.click();
                        window.URL.revokeObjectURL(url);
                  })
            },
            downLoadPdf_3() {
                  let purl = '1' + this.$i18n.locale + '.pdf';
                  document.querySelector(".dv5").innerHTML = '';
                  axios.get(purl,{
                        responseType: 'blob', //重要
                  }).then(response => {
                        const url = window.URL.createObjectURL(new Blob([response.data]));      
                        let fname = 'registration requirements.pdf';
                        const link = document.createElement('a');
                        link.href = url;
                        link.setAttribute('download', fname);
                        document.querySelector(".dv5").appendChild(link);
                        link.click();
                        window.URL.revokeObjectURL(url);
                  })
            },
            initSwiper(){
                 
            }
    },

      mounted(){
            
      }
}
</script>
<style lang="less" scoped>

#play{
      width: 100%;
      .section1{
            display: flex;
            justify-content: center;
            .img-box{
                  display: flex;
                  justify-content: center;
                  align-items: center;
                  width: 380px;
                  height: 271px;
                  background-image: url('./../assets/bg01.png');
                  background-position: top center;
                  background-size: 100% 100%;
                  background-repeat: no-repeat;
                  h5{
                        font-size: 25px;
                  }
            }
            
      }
      .padding334{
            padding: 50px 15%;
      }
      .dv{
            width: 100%;
            height: 551px;
            display: flex;
            justify-content: center;
            align-items: center;
            flex-direction: column;
            color: #fff;
            background-image: url('./../assets/banner2.png');
            background-position: top center;
            background-size: 100% 100%;
            background-repeat: no-repeat;
            h1{
                  font-size: 60px;
                  margin: 0;
            }
            p{
                  font-size: 24px;
            }
      }
      .dv1{
            display: flex;
            width: 100%;
            background-color: #f2f2f2;
            > div{
                  width: 50%;
            }
            .left{
                  h3{
                        font-size: 24px;
                        color: #333;
                  }
                  span{
                        width: 30px;
                        height: 2px;
                        display: block;
                        background-color: #333;
                  }
            }
            .right{
                  p{
                        color: #333;
                        font-size: 18px;
                  }
            }
      }
      .dv2{
            background-color: #fff;
            display: flex;
            width: 100%;
            justify-content: space-between;
            padding: 150px 15% 50px;
            li{
                  width: 30%;
                  display: flex;
                  justify-content: flex-start;
                  align-items: flex-start;
                  
                  .text{
                        margin-left: 10%;
                        display: flex;
                        flex-direction: column;
                        .down{
                              cursor: pointer;
                        }
                        
                        h5{
                              height: 54px;
                              font-weight: normal;
                              font-size: 21px;
                              margin: 0;
                        }
                        span{
                              font-weight: bold;
                              margin: 10px 0;
                              i{
                                    margin-left: 20px;
                                    font-size: 20px;
                              }
                        }
                  }
                  
            }
      }
      .dv3{
            width: 100%;
            overflow: hidden;
            display: flex;
            img{
                  width: calc(100% /6);
                  width: -webkit-calc(100% /6);
                  height: 100%;
                  
            }
           
      }
      .dv4{
            padding: 50px 15%;
      }
}
@media screen and(max-width: 700px){
      #play{
            .dv{
                  height: 109px;
                  h1{
                        font-size: 14px;
                        margin: 0;
                  }
                  p{
                        font-size: 12px;
                        margin: 0;
                  }
            }
            .dv1{
                  flex-direction: column;
                  padding: 10px 20px;
                  > div{
                        width: 100%;
                  }
                  .right{
                        p{
                              font-size: 12px;
                        }
                  }
            }
            .dv2{
                  padding: 10px 30px;
                  flex-direction: column;
                  li{
                        width: 100%;
                        margin: 10px 0;
                        padding-left: 10%;
                        .text{
                              h5{
                                    font-size: 14px;
                                    margin: 5px 0;
                                    height: auto;
                              }
                              p{
                                    font-size: 12px;
                                    margin: 5px 0;
                              }
                              span{
                                    font-size: 14px;
                                    margin: 0;
                              }
                        }
                  }
            }
            .dv3{
                 flex-direction: column;
                 overflow: auto;
                  
                  img{
                        width: 100%;
                        
                  }
            }
            .dv4{
                  padding: 10px 30px;
            }
            .section1{
                  .img-box{
                        width: 280px !important;
                        height: 171px !important;
                  }
            }
      }
}
</style>
