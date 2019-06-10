<template>
      <div id="scores">
            <section class="dv">
                  <h1>{{ $t('scores.schedules') }}</h1>
                  
            </section>
            <section class="dv1">

            </section>
      </div>
</template>
<script>
export default {
      methods:{
            facebookInit(){
                  var elem = document.createElement("script");
                  elem.src = 'https://play.fiba3x3.com/embed.js';
                  elem.setAttribute("data-fiba-embedtype","results");
                  elem.setAttribute("data-fiba-eventid","64f1cb2f-f4ae-4490-bb24-9e21d71e0188");
                  elem.async = true;
                  document.querySelector('.dv1').appendChild(elem);    
            }
      },
      mounted(){
            this.facebookInit();
      }
}
</script>
<style lang="less" scoped>
#scores{
      width: 100%;
      .dv{
            width: 100%;
            height: 528px;
            display: flex;
            padding: 0 334px;
            justify-content: center;
            align-items: flex-start;
            flex-direction: column;
            color: #fff;
            background-image: url('./../assets/banner3.png');
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
            padding: 50px 334px;
      }
}
@media screen and(max-width: 700px){
      #scores{
            .dv{
                  height: 104px;
                  padding: 0;
                  padding-top: 10px;

                  align-items: center;
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
                  padding: 10px 30px;
            }
      }
}
</style>
