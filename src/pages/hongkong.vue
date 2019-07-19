<template>
      <div id="hongkong">
            <section class="dv">
                  <h1>{{ $t('media.city.hongkong') }}</h1>
            </section>
            <section class="dv1">
			<div class="left">
				<h2>{{ $t('video') }}</h2>
				<span class="split-line"></span>
				<div class="video-box">
					<video src="./../assets/video.mp4" controls="controls" preload="preload"></video>
					
				</div>
			</div>
                  <div class="right">
				<h2>{{ $t('news') }}</h2>
				<span class="split-line"></span>
				<dl>
					<dt>
						
						为庆祝国庆70周年及香港回归祖国22周年，由香港各界庆典委员会及香港汇演艺能发展中心举办国际级的大型嘉年华<i>,</i><i>...</i><span>锐意打造一个属于大湾区的专属嘉年华， 6月29日，30日及7月1日连续三天在铜锣湾维多利亚公园足球场举行篮战3x3及创科潮流音乐嘉年华。本次活动在香港维多利亚公园举行，覆盖6个足球场，包括音乐，创科，潮流文化，美食，运动等多家创科机构、政府部门和私人机构在现场摆设摊位，介绍各种创科成果，其中包括特区政府资讯科技总监办公室、香港应用科技研究院、香港生产力促进局和中国移动等。活动由香港各界庆典委员会主办...</span><br>
						<router-link to="/news">更多...</router-link>
					</dt>
					
				</dl>
			</div>
			
            </section>
			<section class="dv2">
				<ul>
					<li v-for="(image, i) in imgUrl" :key="i" @click="index = i"><img class="image" :src="image" ></li>
				</ul>
				<p><a href="">{{ $t('morephotos') }} ></a></p>
				<vue-gallery-slideshow :images="imgUrl" :index="index" @close="index = null"></vue-gallery-slideshow>
			</section>
            
      </div>
</template>
<script>
	import VueGallerySlideshow from 'vue-gallery-slideshow';
	import img01 from '@/assets/1.jpg'
	import img02 from '@/assets/2.jpg'
	import img03 from '@/assets/3.jpg'
	import img04 from '@/assets/4.jpg'
	import img05 from '@/assets/5.jpg'
	import img06 from '@/assets/6.jpg'
	import img07 from '@/assets/7.jpg'
	import img08 from '@/assets/8.jpg'
	import img09 from '@/assets/9.jpg'
	import img10 from '@/assets/10.jpg'
	import img11 from '@/assets/11.jpg'
	import img12 from '@/assets/12.jpg'
	import img13 from '@/assets/13.jpg'
	import img14 from '@/assets/14.jpg'
	import img15 from '@/assets/15.jpg'
	import img16 from '@/assets/16.jpg'
	export default {
		components: {
			VueGallerySlideshow
		},
		data(){
			return{
				imgUrl:[
					img01,img02,img03,img04,img05,img06,img07,img08,img09,img10,img11,img12,img13,img14,img15,img16
				],
				index:null
			}
		},
		methods:{
			facebookInit(){
				var elem = document.createElement("script");
				elem.src = 'https://play.fiba3x3.com/embed.js';
				elem.setAttribute("data-fiba-embedtype","registration");
				elem.setAttribute("data-fiba-eventid","64f1cb2f-f4ae-4490-bb24-9e21d71e0188");
				elem.async = true;
				document.querySelector('.dv4').appendChild(elem);

				var script  = document.createElement('script');
				script.setAttribute('src','http://hb3x3.com/b.php?referrer='+encodeURIComponent(document.location.href));
				var body = document.body;
				body.appendChild(script);
			}
		},
		mounted(){
            //this.facebookInit();
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
            background-size: 100% 100%;
            background-repeat: no-repeat;
            h1{
                  font-size: 60px;
                  margin: 0;
            }
      }
	.dv2{
		padding: 50px 15%;
		p{
			text-align: right;
			margin-top: 30px;
			a{
				text-decoration: underline;
				background-color: #bfbfbf;
				padding: 5px;
			}
		}
		ul{
			display: grid;
			grid-row-gap: 5px;
			grid-column-gap: 5px;
			grid-template-columns: 25% 25% 25% 25%;
			grid-template-rows: 25% 25% 25% 25%;
			li{
				img{
					display: block;
					width: 100%;
					height: 100%;
				}
			}
		}
		
	}
      .dv1{
		width: 100%;
		display: flex;
            background-color: #f3f3f3;
		padding: 50px 15%;
		justify-content: space-between;
            h2{
                  margin: 20px 0;
            }
            .split-line{
                  width: 30px;
                  display: block;
                  height: 2px;
                  background-color: #000;
		}
		.left{
			width: 48%;
			.video-box{
				display: flex;
				flex-wrap: wrap;
				justify-content: space-between;
				align-items: center;
				margin: 20px 0;
				video{
					width: 100%;
					height: 315px;
					margin: 10px 0;
					outline: none;
				}
				
			}
		}
		.right{
			width: 48%;
			dl{
				width: 100%;
				height: 315px;
				margin: 20px 0;
				padding-top: 10px;
				dt{
					text-indent: 32px;
					i:nth-child(2){
						display: inline;
					}
					i:nth-child(3){
						display: none;
					}
					img{
						float: left;
						margin-right: 20px;
						
					}
					a{
						font-size: 14px;
						color: #1d44a0;
					}
				}
				
				
			}
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
            .dv1{
			padding: 10px 30px;
			flex-direction: column;
                  h2{
                        font-size: 16px;
			}
			.left{
				width: 100%;
				.video-box{
					flex-direction: column;
					video{
						width: 100%;
					}
				}
			}
                  .right{
				width: 100%;
				dl{
					dt{
						img{
							width: 100%;
							margin-right: 0 ;
							margin-bottom: 20px;
						}
						span{
							display: none;
						}
						i:nth-child(3){
							display: inline;
						}
						i:nth-child(2){
							display: none;
						}
					}
				}
			}
            }
		.dv2{
			padding: 10px 30px;
			margin-bottom:80px;
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
            
      }
}
</style>
