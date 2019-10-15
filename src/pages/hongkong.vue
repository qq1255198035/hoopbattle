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
						{{ $t('new.p1') }}<span>{{ $t('new.p14') }}...</span><br>
						<router-link to="/news">{{ $t('more') }}...</router-link>
					</dt>
					<dd>
						{{ $t('news3.p1') }}...<br>
						<router-link to="/news3">{{ $t('more') }}...</router-link>
					</dd>
				</dl>
			</div>
            </section>
		<section class="dv2">
			<h2>{{ $t('photo') }}</h2>
			<span class="split-line"></span>
			<ul>
				<li v-for="(image, i) in imgUrl" :key="i" @click="index = i"><img class="image" :src="image" ></li>
			</ul>
			<p><a href="https://www.facebook.com/pg/hoopbattle3x3/photos/?tab=album&album_id=350726265597430&__xts__%5B0%5D=68.ARAgPfG6KCibNzHiVVLDRdu5cmH1auV6JJD5UeKCNl9OVM_Fsomi06gRjGxGezt9WkjU5Jvc3-L3EzI5sSoU8guSNY6vZXYKGnXIR7YzwXy_MQROcg1_6cqcxaXWzXFDbTur-1qxPJrdOG4evnts0bvY1RWF9DSxCR5fW9XLxXN8hq3Kq8Ub1_CQaST27sXEH6wrmdJKhgixG04-sfr_RSg7Uxm3DOIdaoXg_PTlmDpQaTtLMGM6CZx88O2Rrn5Fp2-8VpFkRxvSXjGXXMLByP3Fow8ARlxez3uKgssN3Gt_F7xURM3E9A0DdhWylaJS4bNMwWFPWtsF2ine5-qYiMKmnQ2B9pOgh0HBiw3UfmlNDybzfj3dhlujMTfxvBEHjkmo0mRRkUaQPFPXmcVPMNH2tz4Ksz7o7ZcpvTe7g2yBVPj9vi7MrpgcGCeR1QTpn2vU1lE99PfggqxDhg&__tn__=-UC-R">{{ $t('morephotos') }} ></a></p>
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
			margin-top: 30px;
			li{
				img{
					display: block;
					width: 100%;
					height: 100%;
				}
			}
		}
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
				justify-content: flex-start;
				align-items: center;
				margin: 20px 0;
				video{
					width: 100%;
					margin: 10px 0;
					outline: none;
				}
				
			}
		}
		.right{
			width: 48%;
			dl{
				width: 100%;
				margin: 20px 0;
				display: flex;
				flex-wrap: wrap;
				justify-content: flex-start;
				align-items: center;
				dt{
					text-indent: 32px;
					margin: 10px 0;
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
				dd{
					text-indent: 32px;
					margin: 20px 0 0;
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
							height: auto;
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
            
      }
}
</style>
