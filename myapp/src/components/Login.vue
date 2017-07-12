<template>
  <div id="ele">
    <div id="banner">
      <img src="https://i0.tuanimg.com/ms/zhe800m/dist/img/passport/m_banner_01.png">
    </div>

    <div id="btn">
      <div class="ttt"><span><a class="mm1" href="javascript:;" @click="login1()">短信验证登陆</a></span><span><a href="javascript:;" @click="login1()">帐号密码登录</a></span></div>
    </div>

    <div id="ipt" v-if="local">
      <div class="one">
        <i class="iconfont">&#xe6ae;</i>
        <input type="text" placeholder="帐号" ref="tel">
      </div>
      <div class="two">
        <i class="iconfont">&#xe619;</i>
        <input type="password" placeholder="密码" ref="psw">
      </div>
    </div>
    <div id="ipt" v-else="local">
      <div class="one">
        <i class="iconfont">&#xe6ae;</i>
        <input type="text" placeholder="手机号/用户名/邮箱" ref="tel">
      </div>
      <div class="two">
        <i class="iconfont">&#xe619;</i>
        <input type="password" placeholder="密码" ref="psw">
      </div>
    </div>

    <button v-on:click="login">登录</button>

    <div id="ks" v-if="local"><span class="l"><a href="#">快速注册</a></span><span class="r"><a href="#">忘记密码</a></span></div>

     <div id="ks1" v-else="local">收不到短信<span><a href="javascript:;">使用语音验证码</a></span></div>
    <div id="qita"><span class="l"></span>其他帐号直接登录<span class="r"></span></div>
    <div id="qqw"><a href="#" ></a><a href="#" class="qqa"></a></div>

  </div>

</template>

<script>
 
export default {
  name: 'login',
  data () {
    return {
     local:true
    }
  },
  methods:{
    login1:function(){
      if(this.local!==true){
          this.local=true
      }else{
         this.local=false
      }
    },
    login:function(){
    	this.$http.post('/zhe800/api/user/login',{
		  		tel:this.$refs.tel.value,
		  		psw:this.$refs.psw.value
		  	}).then(response => {
						console.log(response)
						if(response.body=="登录成功"){							
							alert("登录成功")
							this.$router.push({path: '/Mine'});
						};
						if(response.body.status==0){
							console.log(response.body.status)
							alert("登陆失败，请检查您的手机号和密码")
							
						}
					}, response => {
						// error callback
//						console.log(response.body.status)
//						if(response.body.status==0){
//							alert("登陆失败，请检查您的手机号和密码")							
//						}
			});
    }
  }
}
</script>



<!-- Add "scoped" attribute to limit CSS to this component only -->
<style >

  body {
  background: white; }

html, body {
  height: 100%; }

</style>
<style scoped lang='scss'>
$ui-width:750px;
@function px2rem($px){
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

#banner{
  height: px2rem(256px);
  width: 100%;
  img{
    width: 100%;
    height: 100%;
  }
}
#btn{
  height: px2rem(110px);
  width: 100%;
  text-align: center;
  line-height: px2rem(110px);
  font-size: px2rem(30px);
  border-bottom: 1px solid #fff;
  background: url("https://i0.tuanimg.com/ms/zhe800m/dist/img/passport/m_banner_02.jpg") no-repeat center;
  background-size: 100% px2rem(110px);
  span{
    display: inline-block;
    width: 50%;
    height: 100%;
    a:hover{
      display: inline-block;
      height: 100%;
      color: #f00;
      border-bottom: 1px solid #f00;
    } 
  }
}


#ipt{
  width: 100%;
  div{
    height: px2rem(60px);
    padding:px2rem(40px) px2rem(80px) 0;
    input{
      display: inline-block;
      height: px2rem(40px);
      border:0;
      border-bottom: 1px solid #eee;
      width: 90%;
      background-color:#fff;
    }

  }
}
button{
  width: 70%;
  margin:px2rem(40px) 15%;
  height: px2rem(80px);
  background: #e63b53;
  color:#fff;
  border:0;
}
#ks{
  height: px2rem(40px);
  padding: 0 10%;
  a{
    color: #ccc;
  }
}
#qita{
  padding-top: px2rem(40px);
  height: px2rem(40px);
  text-align: center;
  line-height: px2rem(40px);
  span{
    width: px2rem(200px);
    height:px2rem(20px);
    border-bottom:1px solid #ccc;
    margin: 0 px2rem(25px);
  }
}
#qqw{
  height: px2rem(92px);
  width: 100%;
  text-align: center;
  padding-top: px2rem(20px);
  a{
    display: inline-block;
    width: px2rem(92px);
    height: px2rem(92px);
    padding: 0 px2rem(40px);
    background: #f00;
    background: url(https://status.tuanimg.com/statics/mz/common/img/icon_all.png) no-repeat px2rem(40px) px2rem(-327px);
  }
  .qqa{
    background: url(https://status.tuanimg.com/statics/mz/common/img/icon_all.png) no-repeat px2rem(40px) px2rem(-450px);
  }
}
#ks1{text-align:center}
#ks1 a{color:blue;text-decoration:underline;}

</style>