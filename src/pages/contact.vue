<template>
      <div id="contact">
            <section class="dv">
                  <h1>{{ $t('contact.contactus') }}</h1>
                  
            </section>
            <ul class="dv2 padding334">
                  <li> 
                        <i><font-awesome-icon icon="phone" flip="horizontal"/></i>  
                        <div class="text">
                              <h5>{{ $t('contact.hotline') }}</h5>
                              <span>
                                    010-53513817 
                              </span>
                        </div>
                  </li>
                  <li> 
                        <i><font-awesome-icon :icon="['far', 'envelope']" /></i> 
                        <div class="text">
                              <h5>{{ $t('contact.email') }}</h5>
                              <span>
                                    3x3hoopbattle@gmail.com
                              </span>
                        </div>
                  </li>
                  <li> 
                        <i><font-awesome-icon icon="paper-plane"/></i>  
                        <div class="text">
                              <h5>{{ $t('contact.location') }}</h5>
                              <span>
                                    View on map
                              </span>
                        </div>
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
            padding: 50px 15%;
      }
      #map{
            width: 100%;
      }
      .dv{
            width: 100%;
            height: 528px;
            display: flex;
            padding: 0 15%;
            justify-content: center;
            align-items: flex-start;
            flex-direction: column;
            color: #fff;
            background-image: url('./../assets/banner3.png');
            background-position: top center;
            background-size: 100% 100%;
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
            padding: 150px 10%;
            li{
                  width: 30%;
                  display: flex;
                  justify-content: center;
                  .text{
                        display: flex;
                        flex-direction: column;
                        margin-left: 10%;
                        justify-content: space-between;
                        h5{
                              font-weight: normal;
                              font-size: 25px;
                              margin: 0;
                        }
                  }
                  i{
                        font-size: 45px;
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
                         i{
                              font-size: 30px;
                        }
                        .text{
                              h5{
                              font-size: 14px;
                              margin: 5px 0;
                              }
                              span{
                                    font-size: 14px;
                              }
                        }    
                  }
            }
      }
}
</style>
