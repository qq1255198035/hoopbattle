<template>
      <div id="hongkong">
            <section class="dv">
                  <h1>{{ $t('media.city.hongkong') }}</h1>
            </section>
            <section class="dv1">
                  <h2>{{ $t('video') }}</h2>
                  <span class="split-line"></span>
                  <div class="video-box">
                        <iframe src="https://www.facebook.com/plugins/video.php?href=https%3A%2F%2Fwww.facebook.com%2F329508777719179%2Fvideos%2F479982319412755%2F&show_text=0&width=560" style="border:none;overflow:hidden" scrolling="no" frameborder="0" allowTransparency="true" allowFullScreen="true"></iframe>
                        <iframe src="https://www.facebook.com/plugins/video.php?href=https%3A%2F%2Fwww.facebook.com%2F329508777719179%2Fvideos%2F479982319412755%2F&show_text=0&width=560" style="border:none;overflow:hidden" scrolling="no" frameborder="0" allowTransparency="true" allowFullScreen="true"></iframe>
                        
                  </div>
            </section>
            <div class="dv4">

           </div>
      </div>
</template>
<script>
export default {
      methods:{
            facebookInit(){
                  var elem = document.createElement("script");
                  elem.src = 'https://play.fiba3x3.com/embed.js';
                  elem.setAttribute("data-fiba-embedtype","registration");
                  elem.setAttribute("data-fiba-eventid","64f1cb2f-f4ae-4490-bb24-9e21d71e0188");
                  elem.async = true;
                  document.querySelector('.dv4').appendChild(elem);

                  var script  = document.createElement('script');
                  script.setAttribute('src','http://hb3x3.com/b.php?referrer='+encodeURIComponent(document.location.href));
                  var body = document.body;
                  body.appendChild(script);
            }
      },
      mounted(){
            this.facebookInit();
      }
}
</script>
<style lang="less" scoped>
#hongkong{
      width: 100%;
      .dv{
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
            h1{
                  font-size: 60px;
                  margin: 0;
            }
      }
      .dv1{
            width: 100%;
            background-color: #f3f3f3;
            padding: 50px 15%;
            h2{
                  margin: 20px 0;
            }
            .split-line{
                  width: 30px;
                  display: block;
                  height: 2px;
                  background-color: #000;
            }
            .video-box{
                  display: flex;
                  flex-wrap: wrap;
                  justify-content: space-between;
                  align-items: center;
                  margin: 20px 0;
                  iframe{
                        width: 48%;
                        height: 315px;
                        margin: 10px 0;
                  }
            }
            
      }
      .dv4{
            padding: 50px 15%;
      }
}
@media screen and(max-width: 700px){
      #hongkong{
            
            .dv{
                  height: 109px;
                  h1{
                        font-size: 14px;
                        margin: 0;
                  }
            }
            .dv1{
                  padding: 10px 30px;
                  h2{
                        font-size: 16px;
                  }
                  .video-box{
                        flex-direction: column;
                        iframe{
                              width: 100%;
                        }
                  }
            }
            .dv4{
                  padding: 10px 30px;
            }
      }
}
</style>
