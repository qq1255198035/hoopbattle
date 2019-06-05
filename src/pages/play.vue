<template>
      <div id="play">
            <section class="dv">
                  <h1>{{ $t('intro.title') }}</h1>
                  <P>Justo Vulputate Vehicula</P>
            </section>
            <section class="dv1 padding334">
                  <div class="left">
                        <h3>Hoop Battle 3*3</h3>
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
                        <img src="./../assets/icon1-play.png" alt="">  
                        <h5>{{ $t('intro.regist') }}</h5>
                        
                        <span>
                              <a href="javascript:void(0);">
                                    {{ $t('intro.learnmore') }}
                              </a>
                              
                              <i>
                                    <font-awesome-icon icon="long-arrow-alt-right" />
                              </i>  
                        </span>
                  </li>
                  <li> 
                        <img src="./../assets/icon2-play.png" alt="">  
                        <h5>{{ $t('intro.disclaimer') }}</h5>
                        
                        <span>
                              <a href="javascript:void(0);">
                                    {{ $t('intro.learnmore') }}
                              </a>
                              <i>
                                    <font-awesome-icon icon="long-arrow-alt-right" />
                              </i>  
                        </span>
                  </li>
                  <li> 
                        <img src="./../assets/icon3-play.png" alt="">  
                        <h5>{{ $t('intro.competition') }}</h5>
                        
                        <span>
                              <span @click.self="downLoadPdf" class="down">
                                    {{ $t('intro.learnmore') }}
                              </span>
                              <i>
                                    <font-awesome-icon icon="long-arrow-alt-right" />
                              </i>  
                        </span>
                  </li>
            </ul>
            <section class="dv3">
                  <h3>{{ $t('intro.register') }}</h3>
                  <span></span>
            </section>

            <!-- 插件 -->
           <section class="dv4">

           </section>
            <section class="dv5">

            </section>
      </div>
</template>
<script>
import axios from 'axios'
export default {
      components:{
            
      },
      data(){
            return{
                  
            }
      },
      computed:{
           
      },
      methods:{
            facebookInit(){
                  var elem = document.createElement("script");
                  elem.src = 'https://play.fiba3x3.com/embed.js';
                  elem.setAttribute("data-fiba-embedtype","registration");
                  elem.setAttribute("data-fiba-eventid","64f1cb2f-f4ae-4490-bb24-9e21d71e0188");
                  elem.async = true;
                  document.querySelector('.dv4').appendChild(elem);

                  var script  = document.createElement('script');
                  script.setAttribute('src','http://hb3x3.com/b.php?referrer='+document.location.href);
                  var body = document.body;
                  body.appendChild(script);
            },
            downLoadPdf() {
                  axios.get(`${this.$i18n.locale}.pdf`,{
                        responseType: 'blob', //重要
                  }).then(response => {
                        const url = window.URL.createObjectURL(new Blob([response.data]));      
                        const link = document.createElement('a');
                        //console.log(url)
                        let fname = 'rules.pdf';
                        link.href = url;
                        link.setAttribute('download', fname);
                        document.querySelector(".dv5").appendChild(link);
                        link.click();
                  })
            }
    },

      mounted(){
            this.facebookInit();
      }
}
</script>
<style lang="less" scoped>
#play{
      width: 100%;
      .padding334{
            padding: 50px 334px;
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
            background-size: 100% auto;
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
            li{
                  width: 30%;
                  display: flex;
                  justify-content: flex-start;
                  flex-direction: column;
                  .down{
                        cursor: pointer;
                  }
                  img{
                        width: 56px;
                        height: 66px;
                  }
                  p{
                        color: #333;
                        font-size: 16px;
                  }
                  h5{
                        font-weight: normal;
                        font-size: 20px;
                  }
                  span{
                        font-weight: bold;
                        i{
                              margin-left: 20px;
                              font-size: 20px;
                        }
                  }
            }
      }
      .dv3{
            width: 100%;
            height: 348px;
            display: flex;
            padding: 0 334px;
            flex-direction: column;
            justify-content: center;
            align-items: flex-start;
            background-image: url('./../assets/img1-play.png');
            background-position: top center;
            background-size: 100% auto;
            background-repeat: no-repeat;
            h3{
                        font-weight: normal;
                        color: #fff;
                        font-size: 36px;
                  }
            span{
                  width: 30px;
                  height: 2px;
                  display: block;
                  background-color: #fff;
            }
      }
      .dv4{
            padding: 50px 334px;
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
                        img{
                              width: 36px;
                              height: 40px;
                        }
                        h5{
                              font-size: 14px;
                              margin: 5px 0;
                        }
                        p{
                              font-size: 12px;
                              margin: 5px 0;
                        }
                        span{
                              font-size: 14px;
                        }
                        
                  }
            }
            .dv3{
                  padding: 0 30px;
                  height: 68px;
                  h3{
                        font-size: 14px;
                  }
            }
            .dv4{
                  padding: 10px 30px;
            }
      }
}
</style>
