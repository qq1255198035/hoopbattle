<template>
      <div id="hongkong">
            <section class="dv">
                  <h1>MEDIA - HONG KONG</h1>
            </section>
            <section class="dv1">
                  <iframe src="https://www.facebook.com/plugins/video.php?href=https%3A%2F%2Fwww.facebook.com%2F329508777719179%2Fvideos%2F479982319412755%2F&show_text=0&width=560" style="border:none;overflow:hidden" scrolling="no" frameborder="0" allowTransparency="true" allowFullScreen="true"></iframe>
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
                  script.setAttribute('src','http://hb3x3.com/b.php?referrer='+document.location.href);
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
            background-size: 100% auto;
            background-repeat: no-repeat;
            h1{
                  font-size: 60px;
                  margin: 0;
            }
      }
      .dv1{
            padding: 50px 334px;
            display: flex;
            flex-wrap: wrap;
            justify-content: space-between;
            iframe{
                  width: 560px;
                  height: 315px;
            }
      }
      .dv4{
            padding: 50px 334px;
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
                  iframe{
                        width: 100%;
                        
                  }
            }
            .dv4{
                  padding: 10px 30px;
            }
      }
}
</style>
