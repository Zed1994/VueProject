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
		<div class="three">
			<i class="iconfont">&#xe619;</i>
			<input type="text" placeholder="请输入验证码" id="vcode" v-model="checkcode" v-on:blur="checkCode" />
			<span class="code" title="看不清,换一张" @click="changeImg"></span>
		</div>
		<button v-on:click="regist">确认</button>

	</div>

</template>

<script>


import { Toast } from 'mint-ui';
	export default {
		name: 'regist',
		data() {
			return {
				tel: '',
				psw: '',
				checkcode:'',       //input框内输入的验证码
				code:'',		    //验证码
				isExist: false,     //号码是否存在
				isValid: false,     //手机号格式是否有效
				isRight:false       //验证码是否正确

			}
		},
		mounted:function(){
			this.changeImg()
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
						if(response.body.status ==0){
							this.isExist = false;
							//false表示手机号尚未注册，可以使用
						}else{
							this.isExist = true;
							Toast({
								message: '该手机号已注册',
								position: 'bottom',
								duration: 3000
							});
						}
					}, response => {
						// error callback

					})
				}else{
					
				}
			},
			changeImg:function(){
		        // 验证码组成库
		        var arrays=new Array(
		            '1','2','3','4','5','6','7','8','9','0',
		            'a','b','c','d','e','f','g','h','i','j',
		            'k','l','m','n','o','p','q','r','s','t',
		            'u','v','w','x','y','z',
		            'A','B','C','D','E','F','G','H','I','J',
		            'K','L','M','N','O','P','Q','R','S','T',
		            'U','V','W','X','Y','Z'
		        );
		        // 重新初始化验证码
		        this.code ='';
		        // 随机从数组中获取四个元素组成验证码
		        for(var i = 0; i<4; i++){
		            // 随机获取一个数组的下标
		            var r = parseInt(Math.random()*arrays.length);
		            this.code += arrays[r];
		        }
		        // 验证码写入span区域
				console.log(this.code);
		        document.getElementsByClassName("code")[0].innerText=this.code
		    },
			checkCode:function(){
	            // 获取用户输入的验证码
	            var codeInput =this.checkcode;
	
	            if(codeInput.toLowerCase() == this.code.toLowerCase()){
	                console.log('验证码正确');

	                this.isRight = true;
	
	            }else{
	               Toast({
						message: '验证码错误，请重新输入',
						position: 'bottom',
						duration: 3000
					});
	            }
	        
			},
			regist: function() {
				if((this.isValid ==true) &&(this.isExist == false)&&(this.isRight ==true)){
					this.$http.post('/zhe800/api/user/register', {
						tel: this.tel,
						psw: this.psw
					}).then(response => {
						console.log(response)
						if(response.body == "注册成功") {
							Toast({
								message: '注册成功',
								position: 'bottom',
								duration: 3000
							});
							this.$router.push({
								path: '/Mine'
//			     				location.hash="/Mine"
							});
						}else {
						   Toast({
								message: '注册失败',
								position: 'bottom',
								duration: 3000
							});
						}
					}, response => {
						// error callback
					})	
				}else{
					Toast({
						message: '注册失败，您提供的信息有误',
						position: 'bottom',
						duration: 3000
					});
				}
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
	
#mycanvas{
			    cursor: pointer;
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
		.three {
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
			width: 4rem;
			margin-top: .15rem;
			border: none;
			outline: none;
			border-bottom: 1px solid #F5F5F5;
		}
		.code{
			display: inline-block;
		    width: 2rem;
		    height: 0.8rem;
		    line-height: .8rem;
		    vertical-align: middle;
		    font-size: 20px;
		    background: antiquewhite;
		    border-radius: 10px;
		    text-align: center;
		    cursor: pointer;
		          
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

