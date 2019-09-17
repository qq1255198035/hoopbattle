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
            <div class="dv3">
                  <h2>{{ $t('news') }}</h2>
			<span class="split-line"></span>
                  <h3>{{ $t('news2.title') }}</h3>
                  <p>{{ $t('news2.p1') }}<router-link to="news2" style="color: blue">{{ $t('more') }}...</router-link></p>
            </div>
            <section class="dv2">
                  <h2>{{ $t('photo') }}</h2>
			<span class="split-line"></span>
			<ul>
				<li v-for="(image, i) in imgUrl" :key="i" @click="index = i"><img class="image" :src="image" ></li>
			</ul>
			<p><a href="https://www.facebook.com/pg/hoopbattle3x3/photos/?tab=album&album_id=369312803738776">{{ $t('morephotos') }} ></a></p>
			<vue-gallery-slideshow :images="imgUrl" :index="index" @close="index = null"></vue-gallery-slideshow>
		</section>
            <div class="dv6"></div>
      </div>
</template>
<script>
import axios from 'axios';
import VueGallerySlideshow from 'vue-gallery-slideshow';

export default {
      components: {
            VueGallerySlideshow
      },
      data(){
            return{
                  imgUrl:[
                        
                        'https://img-1253858660.cos.ap-chengdu.myqcloud.com/001.jpg',
                        'https://img-1253858660.cos.ap-chengdu.myqcloud.com/002.jpg',
                        'https://img-1253858660.cos.ap-chengdu.myqcloud.com/003.jpg',
                        'https://img-1253858660.cos.ap-chengdu.myqcloud.com/004.jpg',
                        'https://img-1253858660.cos.ap-chengdu.myqcloud.com/005.jpg',
                        'https://img-1253858660.cos.ap-chengdu.myqcloud.com/006.jpg',
                        'https://img-1253858660.cos.ap-chengdu.myqcloud.com/007.jpg',
                        'https://img-1253858660.cos.ap-chengdu.myqcloud.com/008.jpg',
                        'https://img-1253858660.cos.ap-chengdu.myqcloud.com/009.jpg',
                        'https://img-1253858660.cos.ap-chengdu.myqcloud.com/010.jpg',
                        'https://img-1253858660.cos.ap-chengdu.myqcloud.com/011.jpg',
                        'https://img-1253858660.cos.ap-chengdu.myqcloud.com/012.jpg',
                        'https://img-1253858660.cos.ap-chengdu.myqcloud.com/013.jpg',
                        'https://img-1253858660.cos.ap-chengdu.myqcloud.com/014.jpg',
                        'https://img-1253858660.cos.ap-chengdu.myqcloud.com/015.jpg',
                        'https://img-1253858660.cos.ap-chengdu.myqcloud.com/toronto-1.jpg',
                        'https://img-1253858660.cos.ap-chengdu.myqcloud.com/toronto-2.jpg',
                        'https://img-1253858660.cos.ap-chengdu.myqcloud.com/toronto-3.jpg',
                        'https://img-1253858660.cos.ap-chengdu.myqcloud.com/toronto-4.jpg',
                        'https://img-1253858660.cos.ap-chengdu.myqcloud.com/toronto-5.jpg'
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
            p{
			text-align: right;
			margin-top: 30px;
			a{
				text-decoration: underline;
				background-color: #bfbfbf;
				padding: 5px;
			}
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
                  grid-template-rows: 20% 20% 20% 20% 20%;
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
      .dv3{
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
                  .desc{
                        margin-bottom: 0;
                        p{
                              font-size: 12px;

                        }
                  }
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
                  padding-bottom:100px;
                  h2{
                        font-size: 16px;
			}
			ul{
				grid-template-columns: 100%;
				grid-template-rows: repeat(20, 5%);
				li{
					img{
						width: 100%;
						height: 100%;
					}
				}
			}
			
            }
            .dv3{
                  padding: 10px 30px;
                  
                  h2{
                        font-size: 16px;
                  }
                  h3{
                        font-size: 14px;
                  }
                  p{
                        font-size: 12px;
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
