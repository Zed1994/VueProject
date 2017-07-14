<template>
	<div id="ele">

		<div class="header">
			<router-link to="/Mine">&lt;</router-link>
			注册
		</div>
		<div class="one">
			<i class="iconfont">&#xe6ae;</i>
			<input type="text" placeholder="手机号" v-model="tel" v-on:blur="checkTel">
		</div>
		<div class="two">
			<i class="iconfont">&#xe619;</i>
			<input type="password" placeholder="密码" v-model="psw">
		</div>


		<button v-on:click="regist">确认</button>

	</div>

</template>

<script>
//import 'https://unpkg.com/mint-ui/lib/index.js'	
//import Vue from 'vue'
import { Toast } from 'mint-ui';

//	Vue.use(Toast);
	export default {
		name: 'regist',
		data() {
			return {
				tel: '',
				psw: '',
				isExist: false,
				isValid: false
			}
		},
		methods: {
			checkTel: function() {
				var reg = /^1(3|4|5|7|8)\d{9}$/;
				var flag = reg.test(this.tel);

				if(flag) {
					console.log("手机号有效");
					this.isValid = true;
				} else {
					Toast({
						message: '手机号码格式不正确',
						position: 'bottom',
						duration: 5000
					});
					this.isValid = false;
				}
				if(this.isValid) {
					this.$http.post('/zhe800/api/user/checkUser', {
						tel: this.tel,
					}).then(response => {
						console.log(response)

					}, response => {
						// error callback

					})
				}else{
					
				}
			},
			regist: function() {
				
				this.$http.post('/zhe800/api/user/register', {
					tel: this.tel,
					psw: this.psw
				}).then(response => {
					console.log(response)
					if(response.body == "注册成功") {
						alert("注册成功")
						this.$router.push({
							path: '/Mine'
						});
						//							location.hash="/Mine"
					} else {
						alert("注册失败")

					}
				}, response => {
					// error callback

				})

			}

		}
	}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
	body {
		background: white;
	}
	
	html,body {
		height: 100%;
	}
	

</style>
<style scoped lang='scss'>
	$ui-width:750px;
	@function px2rem($px) {
		@return $px/$ui-width*7.5rem
	}
	
	@font-face {
		font-family: 'iconfont';
		src: url('../../static/font/iconfont.eot');
		src: url('../../static/font/iconfont.eot?#iefix') format('embedded-opentype'), url('../../static/font/iconfont.woff') format('woff'), url('../../static/font/iconfont.ttf') format('truetype'), url('../../static/font/iconfont.svg#iconfont') format('svg');
	}
	
	.iconfont {
		font-family: "iconfont" !important;
		font-size: 16px;
		font-style: normal;
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
	
	.one {
		width: 100%;
		height: px2rem(112px);
		font-size: 12px;
		i {
			display: inline-block;
			box-sizing: border-box;
			height: 1.12rem;
			width: 0.5rem;
			padding-top: 0.15rem;
			line-height: 1.12rem;
			margin-left: .5rem;
			vertical-align: top;
		}
		input {
			display: inline-block;
			box-sizing: border-box;
			height: 100%;
			width: 6rem;
			margin-top: .15rem;
			border: none;
			outline: none;
			border-bottom: 1px solid #F5F5F5;
		}
	}
	
	.two {
		width: 100%;
		height: px2rem(112px);
		font-size: 12px;
		i {
			display: inline-block;
			box-sizing: border-box;
			height: 1.12rem;
			width: 0.5rem;
			padding-top: 0.15rem;
			line-height: 1.12rem;
			margin-left: .5rem;
			vertical-align: top;
		}
		input {
			display: inline-block;
			box-sizing: border-box;
			height: 100%;
			width: 6rem;
			margin-top: .15rem;
			border: none;
			outline: none;
			border-bottom: 1px solid #F5F5F5;
		}
	}
	
	button {
		width: 90%;
		margin-left: 5%;
		background: #ef4949;
		height: px2rem(90px);
		line-height: px2rem(90px);
		text-align: center;
		outline: none;
		border: none;
		margin-top: .6rem;
		color: white;
	}
</style>