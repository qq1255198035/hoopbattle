<template>
      <div id="newyork">
            <section class="dv">
                  <h1>{{ $t('media.city.newyork') }}</h1>
                  <h3>{{ $t('commingsoon') }}</h3>
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
      
}
@media screen and(max-width: 700px){
      #newyork{
            .dv{
                  height: 109px;
                  padding-top: 40px;
                  h1{
                        font-size: 14px;
                        margin: 0;
                  }
                  h3{
                        font-size: 12px;
                  }
            }
      }
}
</style>
