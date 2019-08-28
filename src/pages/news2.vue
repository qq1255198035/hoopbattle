<template>
      <div id="news2">
            <section class="dv">
                  <h1>{{ $t('news2.title') }}</h1>
            </section>
            <section class="dv2">
                  <h3>{{ $t('news2.span1') }}</h3>
                  <p>{{ $t('news2.p1') }}</p>
                  <p>{{ $t('news2.p2') }}</p>
                  <div class="img-box">
                        <img src="https://img-1253858660.cos.ap-chengdu.myqcloud.com/news2.png" alt="">
                        <span>《FCCM Summer Festival》</span>
                  </div>
                  
                  <p>{{ $t('news2.p3') }}</p>
                  <p>{{ $t('news2.p4') }}</p>
                  <div class="img-box">
                        <img src="https://img-1253858660.cos.ap-chengdu.myqcloud.com/news2-2.png" alt="">
                        <span>{{ $t('news2.span3') }}</span>
                  </div>
                  <p>{{ $t('news2.p5') }}</p>
                  <div class="img-box">
                        <img src="https://img-1253858660.cos.ap-chengdu.myqcloud.com/news2-3.png" alt="">
                        <span>{{ $t('news2.span4') }}</span>
                  </div>
                  <p>{{ $t('news2.p6') }}</p>
                  <div class="img-box">
                        <img src="https://img-1253858660.cos.ap-chengdu.myqcloud.com/news2-4.png" alt="">
                  </div>
                  <div class="img-box">
                        <img src="https://img-1253858660.cos.ap-chengdu.myqcloud.com/news2-5.png" alt="">
                  </div>
                  <p>{{ $t('news2.p7') }}</p>
                  <p>{{ $t('news2.span5') }}</p><p>For more information on Event: </p><p>Website : www.hb3x3.com</p>
            </section>
      </div>
</template>
<style lang="less" scoped>
#news2{
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
                        width: 60%;
                        text-align: center;
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
      #news2{
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
                              width: 100%;
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
