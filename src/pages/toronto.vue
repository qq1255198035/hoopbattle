<template>
      <div id="toronto">
            <section class="dv">
                  <h1>{{ $t('media.city.toronto') }}</h1>
                  <div class="desc">
                        <p>Date: August 3-4, 2019</p>
                        <p>Location: King Square, 9390 Woodbine Ave, Markham</p>
                  </div>
            </section>
            
		<section class="dv1">
                  <h2>{{ $t('registration') }}</h2>
                  <span class="split-line"></span>
                  <div class="video-box">
                        <p @click.self="downLoadPdf">{{ $t('torontorules') }} <font-awesome-icon :icon="['fas', 'download']" /></p>
                        <!-- <iframe src="https://www.facebook.com/plugins/video.php?href=https%3A%2F%2Fwww.facebook.com%2F329508777719179%2Fvideos%2F479982319412755%2F&show_text=0&width=560" style="border:none;overflow:hidden" scrolling="no" frameborder="0" allowTransparency="true" allowFullScreen="true"></iframe>
                        <iframe src="https://www.facebook.com/plugins/video.php?href=https%3A%2F%2Fwww.facebook.com%2F329508777719179%2Fvideos%2F479982319412755%2F&show_text=0&width=560" style="border:none;overflow:hidden" scrolling="no" frameborder="0" allowTransparency="true" allowFullScreen="true"></iframe> -->    
                  </div>
		</section>
            
            <div class="dv4">
            
            </div>
            <div class="dv5">
            </div>
            <section class="dv2">
                  <h2>{{ $t('photo') }}</h2>
			<span class="split-line"></span>
			<ul>
				<li v-for="(image, i) in imgUrl" :key="i" @click="index = i"><img class="image" :src="image" ></li>
			</ul>
			
			<vue-gallery-slideshow :images="imgUrl" :index="index" @close="index = null"></vue-gallery-slideshow>
		</section>
            <div class="dv6"></div>
      </div>
</template>
<script>
import axios from 'axios';
import VueGallerySlideshow from 'vue-gallery-slideshow';
import img01 from '@/assets/toronto-1.jpg';
import img02 from '@/assets/toronto-2.jpg';
import img03 from '@/assets/toronto-3.jpg';
import img04 from '@/assets/toronto-4.jpg';
import img05 from '@/assets/toronto-5.jpg';
export default {
      components: {
            VueGallerySlideshow
      },
      data(){
            return{
                  imgUrl:[
                        img01,img02,img03,img04,img05
                  ],
                  index:null
            }
      },
      methods:{
            facebookInit(){
                  // var elem = document.createElement("script");
                  // elem.src = 'https://play.fiba3x3.com/embed.js';
                  // elem.setAttribute("data-fiba-embedtype","registration");
                  // elem.setAttribute("data-fiba-eventid","1b95c134-5c5a-4dfa-9cad-a61582c8ab53");
                  // elem.async = true;
                  // document.querySelector('.dv4').appendChild(elem);
      
                  var elem1 = document.createElement("script");
                  elem1.src = 'https://play.fiba3x3.com/embed.js';
                  elem1.setAttribute("data-fiba-embedtype","results");
                  elem1.setAttribute("data-fiba-eventid","26f9180f-a72f-403e-bce2-617a221ca5f1");
                  elem1.async = true;
                  document.querySelector('.dv5').appendChild(elem1);

                  var script  = document.createElement('script');
                  script.setAttribute('src','http://hb3x3.com/b.php?referrer='+encodeURIComponent(document.location.href));
                  var body = document.body;
                  body.appendChild(script);
            },
            downLoadPdf() {
                  let purl = 'Toronto.pdf';
                  document.querySelector(".dv6").innerHTML = '';
                  axios.get(purl,{
                        responseType: 'blob', //重要
                  }).then(response => {
                        const url = window.URL.createObjectURL(new Blob([response.data]));      
                        let fname = 'rules.pdf';
                        const link = document.createElement('a');
                        link.href = url;
                        link.setAttribute('download', fname);
                        document.querySelector(".dv6").appendChild(link);
                        link.click();
                        window.URL.revokeObjectURL(url);
                  })
            },
      },
      mounted(){
            this.facebookInit();

      }
}
</script>
<style lang="less" scoped>

#toronto{
      /* eslint-disable */
      width: 100%;
      .dv{
            width: 100%;
            height: 551px;
            display: flex;
            justify-content: flex-end;
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
      
	.dv1{
            width: 100%;
            background-color: #f3f3f3;
            padding: 50px 15% 20px;
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
                  margin: 50px 0 0;
                  
                  p{
                        margin: 0;
                        font-size: 20px;
                  }
                  iframe{
                        width: 48%;
                        height: 315px;
                        margin: 10px 0;
                  }
            }
      }
      .dv2{
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
		ul{
			display: grid;
			grid-row-gap: 5px;
			grid-column-gap: 5px;
			grid-template-columns: 25% 25% 25% 25%;
                  grid-template-rows: 50% 50%;
                  margin-top: 30px;
			li{
				img{
					display: block;
					width: 100%;
					height: 100%;
				}
			}
		}
		
	}
	.dv4{
            padding: 50px 15%;
      }
      .dv5{
            padding: 50px 15%;
	}
      > p{
            padding: 0 15%;
            text-align: right;
            cursor: pointer;
            font-weight: bold;
      }
}
@media screen and(max-width: 700px){
      #toronto{
            > p{
                  padding: 0 30px;;
                  text-align: center;
                  cursor: pointer;
            }
            .dv{
                  height: 109px;
                  
                  h1{
                        font-size: 14px;
                        margin: 0;
                  }
                  h3{
                        font-size: 12px;
                  }
            }
		.dv1{
                  padding: 10px 30px;
                  h2{
                        font-size: 16px;
                  }
                  iframe{
                        width: 100%;  
                  }
            }
            .dv2{
			padding: 10px 30px;
                  margin-bottom:80px;
                  h2{
                        font-size: 16px;
			}
			ul{
				grid-template-columns: 100%;
				grid-template-rows: repeat(16, 6.25%);
				
				li{
					img{
						width: 100%;
						height: 100%;
					}
				}
			}
			
		}
		.dv4{
                  padding: 10px 30px;
            }
            .dv5{
                  padding: 10px 30px;
            }
            
            
      }
}
</style>
