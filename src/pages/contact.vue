<template>
      <div id="contact">
            <section class="dv">
                  <h1>{{ $t('contact.contactus') }}</h1>
                  
            </section>

            <section class="dv2 padding334">
                  <h2>General Enquiries: <span>hbc3on3@gmail.com</span></h2>
                  <ul>
                        <li>
                              <div class="content">
                                    <h3>{{ $t('city.hongkong') }}</h3>
                                    <p><i><font-awesome-icon icon="phone" flip="horizontal"/></i>+(852)2777 0807</p>
                                    <p><i><font-awesome-icon :icon="['far', 'envelope']" /></i>helen@hillensports.com</p>
                              </div>
                        </li>
                        <li>
                              <div class="content">
                                    <h3>{{ $t('city.toronto') }}</h3>
                                    <p><i><font-awesome-icon icon="phone" flip="horizontal"/></i>+1(647)297-6876</p>
                                    <p><i><font-awesome-icon :icon="['far', 'envelope']" /></i>hoopbattletoronto@gmail.com</p>
                              </div>
                        </li>
                        <li>
                              <div class="content">
                                    <h3>{{ $t('city.tokyo') }}</h3>
                                    <p>{{ $t('commingsoon') }}</p>
                              </div>
                        </li>
                        <li>
                              <div class="content">
                                    <h3>{{ $t('city.newyork') }}</h3>
                                    <p>{{ $t('commingsoon') }}</p>
                              </div>
                        </li>
                  </ul>
            </section>
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
            h2{
                  text-align: center;
                  span{
                        font-weight: normal;
                  }
            }
            > ul{
                  display: flex;
                  width: 100%;
                  margin-top: 50px;
                  flex-wrap: wrap;
                  justify-content: space-between;
                  
                  li{
                        width: 50%; 
                        display: flex;
                        justify-content: center;
                        margin: 15px 0;
                        .content{
                              width: 60%;
                              h3{
                                    font-weight: normal;
                                    font-size: 20px;
                                    margin: 0;
                              }
                              p{
                                    color: #333;
                                    width: 100%;
                                    i{
                                          font-size: 15px;
                                          margin-right: 4%;
                                    }
                              }
                        }
                        
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
                  h2{
                        font-size: 16px;
                        span{
                              font-weight: normal;
                        }
                  }
                  > ul{
                        width: 100%;
                        margin-top: 10px;
                        justify-content: center;
                        flex-direction: column;
                        align-items: center;
                        li{
                              width: 100%;
                              margin: 10px 0;
                              display: flex;
                              flex-direction: column;
                              align-items: center;
                              .content{
                                    width: 100%;
                                    h3{
                                          width:100%;
                                          font-size: 14px;
                                          font-weight: bold;
                                          text-align: center;
                                          margin-bottom: 10px;
                                    }
                                    p{
                                          font-size: 14px;
                                          margin: 2px 0;
                                          text-align: center;
                                          width: 100%;
                                          i{
                                                font-size: 10px;
                                          }
                                    }
                              }
                              
                              
                        }
                  }
                  
            }
      }
}
</style>
