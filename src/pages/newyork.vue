<template>
      <div id="newyork">
            <section class="dv1">
                  <h1>{{ $t('media.city.newyork') }}</h1>
                  <div class="desc">
                        <p>Date: October 27, 2019</p>
                        <p>Location: The Brooklyn Stuy Dome</p>
                  </div>
            </section>
            <section class="dv">
                  <div class="main">
                        <div class="left">
                              <h2>{{ $t('video') }}</h2>
					<span class="split-line"></span>
					<div class="video-box">
						<video src="./../assets/video3.mp4" controls="controls" preload="preload"></video>
					</div>
                        </div>
                        <div class="right">
                              <h2>{{ $t('news') }}</h2>
                              <span class="split-line"></span>
                              <h2>
                                    [Hoop Battle 3x3 New York] <span>Get ready for more basketball action! Hoopbattle 3x3 NYC 2019 will be held at the Brooklyn Stuydome, located at 312 Kosciuszko St, Brooklyn, NY. Register now before it's too late!<br/>E-mail Registration: hoopbattlenyc@gmail.com</span>
                              </h2>
                        </div>
                        
                  </div>
                  <img src="./../assets/newyork-img.jpg" alt="">
            </section>
      </div>
</template>
<script>
export default {
      
}
</script>
<style lang="less" scoped>
#newyork{
      width: 100%;
      .dv{
            .main{
                  width: 100%;
                  display: flex;
                  background-color: #f3f3f3;
                  padding: 50px 15%;
                  justify-content: space-between;
                  .left{
                        width: 48%;
                        .video-box{
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
                        .split-line{
                              width: 30px;
                              display: block;
                              height: 2px;
                              background-color: #000;
                              margin-top: 20px;
                        }
                  }
                  .right{
                        width: 48%;
                        h2{
                              width: 100%;
                              span{
                                    font-weight: normal;
                                    color: #333;
                                    font-size: 18px;
                              }
                        }
                        .split-line{
                              width: 30px;
                              display: block;
                              height: 2px;
                              background-color: #000;
                              margin-top: 20px;
                        }
                  }
            }
            img{
                  width: 70%;
                  display: block;
                  margin: 0 auto;
            }
      }
      .dv1{
            width: 100%;
            height: 551px;
            display: flex;
            justify-content: center;
            align-items: center;
            flex-direction: column;
            color: #fff;
            background-image: url('./../assets/banner4.png');
            background-position: top center;
            background-size: 100% 100%;
            background-repeat: no-repeat;
            .desc{
                  margin-bottom: 60px;
                  p{
                        text-align: center;
                        font-size: 35px;

                  }
            }
            h1{
                  font-size: 60px;
                  margin: 0;
            }
      }
}
@media screen and(max-width: 700px){
      #newyork{
            .dv{
                  .main{
                        flex-wrap: wrap;
                        justify-content: center;
                        padding: 10px 30px;
                        .right{
                              width: 100%;
                              h2{
                                    margin: 20px auto;
                                    font-size: 16px;
                                    span{
                                          font-size: 14px;
                                    }
                              }
                        }
                        .left{
                              width: 100%;
                              h2{
                                    margin: 20px auto;
                                    font-size: 16px;
                                    span{
                                          font-size: 14px;
                                    }
                              }
                        }
                  }
                  
                  
                  img{
                        width: 100%;
                        display: block;
                  }
            }
            .dv1{
                  height: 109px;
                  padding-top: 40px;
                  h1{
                        font-size: 14px;
                        margin: 0;
                  }
                  .desc{
                        margin-bottom: 0;
                        p{
                              font-size: 12px;
                              margin: 0;
                        }
                  }
            }
      }
}
</style>
