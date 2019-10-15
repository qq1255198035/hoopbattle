<template>
      <div id="newyork">
            <section class="dv1">
                  <h1>{{ $t('media.city.newyork') }}</h1>
                  <div class="desc">
                        <p>Date: October 26, 2019</p>
                        <p>Location: The Brooklyn Stuy Dome</p>
                  </div>
            </section>
            <section class="dv2">
                  <h2>{{ $t('news') }}
                        <span class="split-line"></span>
                  </h2>
			
            </section>
            <section class="dv">
                  <h2>
                        [Hoop Battle 3x3 New York] <span>Get ready for more basketball action! Hoopbattle 3x3 NYC 2019 will be held at the Brooklyn Stuydome, located at 312 Kosciuszko St, Brooklyn, NY. Register now before it's too late!</span>
                  </h2>
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
            
            h2{
                  width: 60%;
                  margin: 50px auto;
                  span{
                        font-weight: normal;
                        color: #333;
                        font-size: 18px;
                  }
            }
            img{
                  width: 80%;
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
      .dv2{
            h2{
                  margin: 20px auto;
                  width: 60%;
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
@media screen and(max-width: 700px){
      #newyork{
            .dv{
                  text-align: center;
                  
                  h2{
                        width: 80%;
                        margin: 20px auto;
                        font-size: 16px;
                        span{
                              font-size: 14px;
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
            .dv2{
                  h2{
                        margin: 20px auto;
                        font-size: 16px;
                        width: 80%;
                  }
                  .split-line{
                        width: 30px;
                        display: block;
                        height: 2px;
                        background-color: #000;
                  }
            }
      }
}
</style>
