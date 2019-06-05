<template>
      <div id="contact">
            <section class="dv">
                  <h1>{{ $t('contact.contactus') }}</h1>
                  <P>Get Intouch</P>
            </section>
            <ul class="dv2 padding334">
                  <li> 
                        <i><font-awesome-icon icon="phone" flip="horizontal"/></i>  
                        <h5>{{ $t('contact.hotline') }}</h5>
                        <p>Far far away,behind the word mountains,far from the countries Vakalia Consonantia,there live the blind texts. Separated they live.</p>
                        <span>
                              010-53513817 
                        </span>
                  </li>
                  <li> 
                        <i><font-awesome-icon :icon="['far', 'envelope']" /></i> 
                        <h5>{{ $t('contact.email') }}</h5>
                        <p>Far far away,behind the word mountains,far from the countries Vakalia Consonantia,there live the blind texts. Separated they live.</p>
                        <span>
                              xuanxiu@hoopbattle.com 
                        </span>
                  </li>
                  <li> 
                        <i><font-awesome-icon icon="paper-plane"/></i>  
                        <h5>{{ $t('contact.location') }}</h5>
                        <p>Far far away,behind the word mountains,far from the countries Vakalia Consonantia,there live the blind texts. Separated they live.</p>
                        <span>
                             View on map
                        </span>
                  </li>
            </ul>
            <section id="map">
                  <mapbox mapWidth="100%" mapHeight="300px"></mapbox>
            </section>
            
      </div>
</template>
<script>
import mapbox from "@/components/map/map";
export default {
      components:{
            mapbox
      },
      data(){
            return{
                  
            }
      },
      mounted(){
            //在mounted中执行地图方法，mapData为要展示的数据
            
      },
      methods:{
            
      }
}
</script>
<style lang="less" scoped>
#contact{
      width: 100%;
      .padding334{
            padding: 50px 334px;
      }
      #map{
            width: 100%;
      }
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
      .dv2{
            background-color: #fff;
            display: flex;
            width: 100%;
            justify-content: space-between;
            li{
                  width: 30%;
                  display: flex;
                  justify-content: flex-start;
                  flex-direction: column;
                  i{
                        font-size: 40px;
                  }
                  p{
                        color: #7f7f7f
                  }
                  h5{
                        font-weight: normal;
                        font-size: 20px;
                  }
            }
      }
      .dv3{
            width: 100%;
      }
}
@media screen and(max-width: 700px){
      #contact{
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
            .dv2{
                  padding: 10px 30px;
                  flex-direction: column;
                  li{
                        width: 100%;
                        margin: 10px 0;
                        img{
                              width: 36px;
                              height: 40px;
                        }
                        h5{
                              font-size: 14px;
                              margin: 5px 0;
                        }
                        p{
                              font-size: 12px;
                              margin: 5px 0;
                        }
                        span{
                              font-size: 14px;
                        }
                        
                  }
            }
      }
}
</style>
