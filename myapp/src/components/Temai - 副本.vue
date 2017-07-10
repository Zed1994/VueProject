<template>
  <div id="ele">
    <div id="banner">
      <img src="https://i0.tuanimg.com/ms/zhe800m/dist/img/passport/m_banner_01.png">
    </div>

    <div id="btn">
      <div class="ttt"><span><a href="#/login">短信验证登陆</a></span><span><a href="#/login">帐号密码登录</a></span></div>
    </div>

    <div id="ipt">
      <div class="one">
        <input type="text" >
      </div>
      <div class="two">
        <input type="password" >
      </div>
    </div>

  </div>

</template>

<script>
  import Swiper from '../../static/swiper.min.js'   
export default {
  name: 'temai',
  data () {
    return {
      
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
    padding: px2rem(20px) px2rem(80px);

  }
}
</style>
