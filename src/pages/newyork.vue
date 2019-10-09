<template>
      <div id="newyork">
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
            padding-top: 100px;
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
      
}
@media screen and(max-width: 700px){
      #newyork{
            .dv{
            text-align: center;
            padding-top: 40px;
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
      }
}
</style>
