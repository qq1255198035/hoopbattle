<template>
      <div id="tokyo">
            <section class="dv">
                  <h1>MEDIA - TOKYO</h1>
            </section>
            
      </div>
</template>
<script>
export default {
      
}
</script>
<style lang="less" scoped>
#tokyo{
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
      }
}
</style>
