<template>
  <div class="faxian">
  <div class="header">
			<router-link to="/">&lt;</router-link>
			购物车
		</div>
  <div class="list" v-if="local" v-for=" (item,index ) in list">
  		<img :src="item.src"/>
  		<span class="name">{{item.name}}</span>
  		<span class="price">价格：￥<span class="num">{{item.price}}</span></span>
  		<div class="option">
  			<span class="counter">数量：</span>
  			<button class="reduce" @click="decrease(index)">-</button>
  			<span id="count">{{item.count}}</span>
  			<button class="add"  @click="increase(index)">+</button>  			
  		</div>
  		<a href="javascript:;" class="delete" @click="deleteList(item.id)">删除</a>
  		<span class="total">总计：￥<span class="money">{{item.price*item.count}}</span></span>
  		<button class="buy">立即购买</button>
  </div>
  
  <div class="list" v-else="local">
    <div id="empty">
        <img class="img1" src="//i0.tuanimg.com/ms/zhe800h5/dist/img/cart_list_count/icon_cart.png">
        <p class="p1">您的购物车是空的，请先登录</p>
        <div class="d1"><a href="#/login">登录</a></div>
    </div>
  </div>
	</div>
</template>

<script>

import { Toast } from 'mint-ui';
export default {
  name: 'cart',
  data () {
    return {
       local:false,
       list:[],
			 total:'',

			 
    }
  },
  mounted:function(){
  	if(this.$cookie.get('name')){
  		this.local = true;
  	}else{
  		this.local = false;
  	};
  	if(this.local = true){
	  	this.$http.post('/zhe800/api/shop_cart/cartlist', {						
						}).then(response => {
							console.log(response)						
							this.list = response.body.goods_info;
						}, response => {
							// error callback	
						})  		
  	};

  },
  methods:{
  	increase:function(idx){
//		  console.log(this.list[idx])
				this.list[idx]['count']++;    //['count']属性选择器				
  	},
  	decrease:function(idx){
				this.list[idx].count--;
				if(this.list[idx].count < 1){
					this.list[idx].count = 1
				}
  	},
		deleteList:function(idx){
				this.$http.post('/zhe800/api/shop_cart/deleteList', {		
							deleteIdx:idx
						}).then(response => {
							console.log(response);
							console.log(idx)
							if(response.body=="删除成功"){
								Toast({
									message: '删除成功',
									position: 'bottom',
									duration: 3000
								});		
								this.$http.post('/zhe800/api/shop_cart/cartlist', {						
						}).then(response => {
							console.log(response)						
							this.list = response.body.goods_info;
						}, response => {
							// error callback	
						})  
							}
						}, response => {
							// error callback	
						})  	
		}

  },	 
  components:{
  }
 
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
$ui-width:750px;
@function px2rem($px) {
	@return $px/$ui-width*7.5rem
}

@font-face {
  font-family: 'iconfont';
  src: url('../../static/font/iconfont.eot');
  src: url('../../static/font/iconfont.eot?#iefix') format('embedded-opentype'),
  url('../../static/font/iconfont.woff') format('woff'),
  url('../../static/font/iconfont.ttf') format('truetype'),
  url('../../static/font/iconfont.svg#iconfont') format('svg');
}

.iconfont{
  font-family:"iconfont" !important;
  font-size:16px;font-style:normal;
  -webkit-font-smoothing: antialiased;
  -webkit-text-stroke-width: 0.2px;
  -moz-osx-font-smoothing: grayscale;
}


.header {
		width: 100%;
		height: px2rem(110px);
		line-height: px2rem(110px);
		background: #F8F8F8;
		border-bottom: 1px solid #D5D5D5;
		text-align: center;
		font-size: 20px;
		position: relative;
		a {
			position: absolute;
			left: .3rem;
			font-size: 32px;
		}
	}
	.list{
		width: 100%;
		height: 3.5rem;
		position: relative;
		padding: .2rem .2rem;
		background: white;
		border-bottom: 1px dashed #ccc;
		img{
			display: inline-block;
			width: 2rem;
			height: 2rem;
			vertical-align: top;
			
		}
		.name{
			display: inline-block;
			width: 5rem;
			height: 1rem;
			line-height: 1rem;
			
		}
		.price{
			display: inline-block;
			position: absolute;
	    left: 2.25rem;
	    top: 1.1rem;
	    color: #e9305d;
		}
		.option{
			display: inline-block;
	    position: absolute;
	    left: 2.28rem;
	    top: 1.6rem;
			
		}
		.delete{
			display: inline-block;
	    position: absolute;
	    left: 6rem;
	    top: 1.65rem;
	    color: #999;
		}
		.total{
			display: inline-block;
			width: 3rem;
			height: 1rem;
			line-height: 1rem;
			font-size:20px;
			position: absolute;
			left: .2rem;
			bottom:.6rem;
			color: #e9305d;
			.money{
				font-size: 23px;
			}
		}
		.buy{
			width: 2rem;
	    height: .8rem;
	    line-height: .8rem;
	    background: #f90;
	    position: absolute;
	    right: .7rem;
	    bottom: .6rem;
	    border: none;
	    font-size: 18px;
	    color: white;
		}
		
		#empty{
			width:100%;
			height:12.34rem;
			overflow:hidden;
			.img1{
				margin-top:1rem;
				margin-left:2.7rem;
			}
			.p1{
				font-size: 14px;
				width:100%;
				text-align: center;
			}
			.d1{
				width: 2.2rem;
				height: 0.8rem;
				margin:0 auto;
				margin-top:1rem;
				text-align: center;
				line-height: 0.8rem;
				font-size: 18px;
				border:1px solid #ccc;
			}
		}

	}
</style>


//                       _oo0oo_
//                      o8888888o
//                      88" . "88
//                      (| -_- |)
//                      0\  =  /0
//                    ___/`---'\___
//                  .' \\|     |// '.
//                 / \\|||  :  |||// \
//                / _||||| -:- |||||- \
//               |   | \\\  -  /// |   |
//               | \_|  ''\---/''  |_/ |
//               \  .-\__  '-'  ___/-. /
//             ___'. .'  /--.--\  `. .'___
//          ."" '<  `.___\_<|>_/___.' >' "".
//         | | :  `- \`.;`\ _ /`;.`/ - ` : | |
//         \  \ `_.   \_ __\ /__ _/   .-` /  /
//     =====`-.____`.___ \_____/___.-`___.-'=====
//                       `=---='
//
//
//     ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
//
//               佛祖保佑         永无BUG