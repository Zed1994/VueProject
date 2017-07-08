<template>
	<div class="pintuan">
		<header>
			<span>推荐</span>
			<div class="swiper-container">
				<div class="swiper-wrapper">
					<div class="swiper-slide">
						<a href="javascript:;">女装</a>
						<a href="javascript:;">美食</a>
						<a href="javascript:;">居家</a>
						<a href="javascript:;">男装</a>
						<a href="javascript:;">内衣</a>

					</div>
					<div class="swiper-slide">
						<a href="javascript:;">鞋包</a>
						<a href="javascript:;">美妆</a>
						<a href="javascript:;">运动</a>
					</div>
				</div>
			</div>
		</header>

		<main>
			<div id="banner">
				<div class="swiper-container">
					<div class="swiper-wrapper">
						<div class="swiper-slide">
							<a href="javascript:;">
								<img src="../../static/image/拼团/banner (1).jpg">
							</a>
						</div>
						<div class="swiper-slide">
							<a href="javascript:;">
								<img src="../../static/image/拼团/banner (2).jpg">
							</a>
						</div>
					</div>
					<!-- Add Pagination -->
					<div class="swiper-pagination"></div>
				</div>
			</div>

			<div id="promotion">
				<a href="javascript:;">
					<img src="../../static/image/拼团/pic (4).png" alt="" />
					<span>拼团秒杀</span>
				</a>
				<a href="javascript:;">
					<img src="../../static/image/拼团/pic (7).png" alt="" />
					<span>今日上新</span>
				</a>
				<a href="javascript:;">
					<img src="../../static/image/拼团/pic (8).png" alt="" />
					<span>好货榜单</span>
				</a>
				<a href="javascript:;">
					<img src="../../static/image/拼团/pic (9).png" alt="" />
					<span>9块9</span>
				</a>
				<a href="javascript:;">
					<img src="../../static/image/拼团/pic (6).png" alt="" />
					<span>1元试用</span>
				</a>
			</div>

			<section>
					<img src="https://z11.tuanimg.com/imagev2/pin/600x300.69b99e44f4cf1fe484ec9b30ef72fb5f.700x.jpg.webp" alt="" />
					<span class="sales">限量100件</span>
					<p>丝飘3层300张30包纯木浆抽纸面巾纸餐巾纸妇婴适用卫生纸软抽纸巾</p>
					<div class="msg">
						<span>拼团价￥</span>
						<span>29.9</span>
						<span>￥32.9</span>
						<img src="../../static/image/拼团/pintuan.png"/>
					</div>
			</section>
			

			<section>
					<img src="http://z11.tuanimg.com/imagev2/pin/750x375.a9f3afaab219dcbb367e1a8f72ed8640.700x.jpg.webp" alt="" />
					<span class="sales">已拼192件</span>
					<p>夏天磨毛空调被夏凉被单人宿舍夏被夏季双人被芯春秋儿童薄被芯子</p>
					<div class="msg">
						<span>拼团价￥</span>
						<span>8.7</span>
						<span>￥18.7</span>
						
						<img src="../../static/image/拼团/pintuan.png"/>
					</div>
			</section>
			
			<section>
					<img src="https://z12.tuanimg.com/imagev2/pin/750x375.a53edce77b8664187b93abfdd7f2c111.700x.jpg.webp" alt="" />
					<span class="sales">已拼3955件</span>
					<p>广西芒果贵妃芒5斤/8斤 单果80-150克 坏果包赔</p>
					<div class="msg">
						<span>拼团价￥</span>
						<span>14.9</span>
						<span>￥17.9</span>
						
						<img src="../../static/image/拼团/pintuan.png"/>
					</div>
			</section>
			
			<section>
					<img src="https://z11.tuanimg.com/imagev2/pin/800x400.04917af838db91f290c19c0bb90a7cd0.700x.jpg.webp" alt="" />
					<span class="sales">已拼1212件</span>
					<p>【床单+枕套】亲肤磨毛床单三件套斜纹简约亲肤磨毛床单四季通用</p>
					<div class="msg">
						<span>拼团价￥</span>
						<span>19.9</span>
						<span>￥26.9</span>
						
						<img src="../../static/image/拼团/pintuan.png"/>
					</div>
			</section>
			<section>
					<img src="https://z11.tuanimg.com/imagev2/pin/750x375.16aeebb18d0f2d474d32ccae76e5159f.700x.jpg.webp" alt="" />
					<span class="sales">已拼3.5万件</span>
					<p>【竹浆本色纸】无漂白 不含荧光剂】妇婴适用 竹浆本色纸抽纸 纸巾卫生纸 【每包3层300张】10/20/27包装可选</p>
					<div class="msg">
						<span>拼团价￥</span>
						<span>13.9</span>
						<span>￥17.9</span>
						
						<img src="../../static/image/拼团/pintuan.png"/>
					</div>
			</section>
		</main>
		
		<Navbar></Navbar>
	</div>
</template>

<script>
	import Navbar from './Navbar'
	import Swiper from '../../static/swiper.min.js'
	export default {
		name: 'pintuan',
		data() {
			return {

			}
		},
		components:{
			Navbar
		},

		mounted: function() {
			this.slider()

		},
		methods: {
			slider() {
				var topswiper = new Swiper('header .swiper-container', {
					slidesPerView: 1,

				})
				var swiper = new Swiper('#banner .swiper-container', {
					pagination: '.swiper-pagination',
					paginationClickable: true,
					slidesPerView: 1,
					loop: true,
					slidesPerView: 'auto',
					autoplay: 3000,
					autoplayDisableOnInteraction: false
				});
			}
		}

	}
</script>

<style>
	body {
		background: white;
	}
	
	html,
	body {
		height: 100%;
	}
</style>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
	$ui-width: 750px;
	@function px2rem($px) {
		@return $px/$ui-width*7.5rem;
	}
.pintuan{
		height: 100%;
		display: flex;	
		flex-direction: column;
	header {
		display: flex;
		height: px2rem(80px);
		font-size: 15px;
		span {
			display: inline-block;
			box-sizing: border-box;
			height: 0.5rem;
			line-height: 0.5rem;
			padding: 0 0.2rem 0;
			margin-top: 0.13rem;
			border-right: 1px solid #CCCCFF;
			vertical-align: top;
			color: #e60044;
		}
		.swiper-container {
			display: inline-block;
			height: px2rem(80px);
			width: px2rem(550px);
			margin-left: px2rem(40px);
			.swiper-slide {
				white-space: nowrap
			}
			.swiper-slide a {
				display: inline-block;
				box-sizing: border-box;
				padding: px2rem(16px) px2rem(50px) 0 0;
			}
		}
	}
	
	main {
		flex: 1;
		overflow-y:auto;
			.swiper-container {
				height: px2rem(300px);
				img {
					display: block;
					height: px2rem(300px);
				}
			}
		
		#promotion {
			height: px2rem(168px);
			display: flex;
			justify-content: space-around;
			a {
				height: px2rem(168px);
				box-sizing: border-box;
				padding-top: px2rem(20px);
				text-align: center;
				img {
					display: block;
					height: px2rem(80px);
					width: px2rem(80px);
					margin: auto;
				}
				span {
					display: block;
				}
			}
			a:hover {
				color: #e60044;
			}
		}
		
		section{
			height: px2rem(532px);
			margin-top: px2rem(20px);
			position: relative;
			img{
				display: block;
				height: px2rem(360px);
				position: relative;
				
			}
			
			.sales{
				display: inline-block;
				width: px2rem(160px);
				height: px2rem(52px);
				line-height:px2rem(52px);
				text-align: center;
				background: white;
				border-top-right-radius:px2rem(32px) ;
				border-bottom-right-radius:px2rem(32px) ;
				position: absolute;
				top: 50%;
				
			}
			p{
				height: px2rem(40px);
				line-height: px2rem(40px);
				margin: px2rem(18px) px2rem(20px) px2rem(20px);
				color:#27272f;
				overflow: hidden;
			}
			.msg{
				height: px2rem(62px);
				line-height: px2rem(62px);
				span:nth-of-type(1){
					color:#e60044;
					font-size: 12px;
					margin-left: px2rem(20px);
				}
				span:nth-of-type(2){
					font-size:18px;
					color: #e60044;
				}
				span:nth-of-type(3){
					color: #999;
					font-size:12px;
					text-decoration: line-through;
				}
			img{
				display: inline-block;
				width: px2rem(184px);
				height: px2rem(56px);
				vertical-align: middle;
				float: right;
				margin-right: px2rem(20px);
			}	
			}
		}
		section::before{
					  content: '';
						position: absolute;
				    background:#000;
				    opacity: .04;
				    left: 0;
				    top: 0;
				    width: 100%;
				    height: px2rem(360px);
				    z-index: 20;
				    display:block;
				    
				}
	}

	}
</style>