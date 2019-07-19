<template>
      <div id="news">
            <section class="dv">
                  <h1>{{ $t('new.title') }}</h1>
            </section>
            <section class="dv2">
                  <h3>{{ $t('new.h3') }}<br><span>{{ $t('new.span1') }}</span></h3>
                  <p>{{ $t('new.p1') }}</p>
                  <div class="img-box">
                        <img src="./../assets/new-img1.png" alt="">
                        <span>《Greater Bay Festival》</span>
                  </div>
                  <p>{{ $t('new.p2') }}</p>
                  <p>{{ $t('new.p3') }}</p>
                  <p>{{ $t('new.p4') }}</p>
                  <p>{{ $t('new.p5') }}</p>
                  <p>{{ $t('new.p6') }}</p>
                  <p>{{ $t('new.p7') }}</p>
                  <div class="img-box">
                        <img src="./../assets/news-img2.png" alt="">
                  </div>
                  <p>{{ $t('new.p8') }}</p>
                  <div class="img-box">
                        <img src="./../assets/news-img3.png" alt="">
                  </div>
                  <p>{{ $t('new.p9') }}</p>
                  <div class="img-box">
                        <img src="./../assets/news-img4.png" alt="">
                  </div>
                  <p>{{ $t('new.p10') }}</p>
                  <div class="img-box">
                        <img src="./../assets/news-img5.png" alt="">
                        <span>{{ $t('new.span2') }}</span>
                  </div>
                  <p>{{ $t('new.p11') }}</p>
                  <div class="img-box">
                        <img src="./../assets/news-img6.png" alt="">
                        <span>Dunk Kong (Sherman Su,Brandon Matano ）</span>
                  </div>
                  <div class="img-box">
                        <img src="./../assets/news-img7.png" alt="">
                        <span>{{ $t('new.span3') }}</span>
                  </div>
                  <div class="img-box">
                        <img src="./../assets/news-img8.png" alt="">
                        <span>{{ $t('new.span4') }}</span>
                  </div>
                  <p>{{ $t('new.p12') }}</p>
                  <p>{{ $t('new.p13') }}</p><p>For more information on Event: </p><p>Website : www.hb3x3.com</p>
            </section>
      </div>
</template>
<style lang="less" scoped>
#news{
      width: 100%;
      .dv{
            width: 100%;
            height: 551px;
            display: flex;
            justify-content: center;
            align-items: center;
            flex-direction: column;
            color: #fff;
            background-image: url('./../assets/news-banner.png');
            background-position: top center;
            background-size: 100% 100%;
            background-repeat: no-repeat;
            h1{
                  font-size: 50px;
                  margin: 0;
                  span{
                        font-size: 50px;
                        font-weight: normal;
                  }
            }
      }
      .dv2{
            padding: 50px 15%;
            .img-box{
                  display: flex;
                  flex-direction: column;
                  align-items: center;
                  justify-items: center;
                  margin: 40px 0;
                  
                  span{
                        color: #666;
                        font-size: 14px;
                        margin-top: 10px;
                  }
            }
            h3{
                  text-align: center;
                  span{
                        font-size: 14px;
                        font-weight: normal;
                  }
            }
            p{
                  font-size: 16px;
                  text-indent: 32px;
            }
      }
}
@media screen and(max-width: 700px){
      #news{
            .dv{
                  height: 109px;
                  h1{
                        font-size: 16px;
                        
                        
                  }
            }
            .dv2{
                  padding: 10px 30px;
                  .img-box{
                       
                        margin: 20px 0;
                        img{
                              width:100%;
                        }
                        span{
                              color: #666;
                              font-size: 12px;
                              margin-top: 10px;
                        }
                  }
                  h3{
                        font-size: 16px;
                        text-align: center;
                        padding: 0 20px;
                        span{
                              font-size: 12px;
                              font-weight: normal;
                        }
                  }
                  p{
                        font-size: 14px;
                        text-indent: 28px;
                  }
            }
      }
      
      
}
</style>
<script>
export default {
      
}
</script>
