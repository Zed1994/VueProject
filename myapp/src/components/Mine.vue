<template>
  <div class="wode">
      <div id="header">
        <div class="one">
            <p class="p1"><a href="#/tejia">&lt;</a></p>
           <h1> 个人中心</h1>
        </div>
        <div class="two">
          <div class="login">
            <a href="javascript:;"> 登录 | 注册 </a>
          </div>
        </div>      
      </div>
      <div id="mess">
        <p class="p2">我的订单</p>
        <p class="p3">查看全部></p>
      </div>
      <div id="mess1">
        <ul class="u1">
          <li class="l1">
            <a href="javascript:;"> 
              <i class="iconfont">&#xe683;</i>
              <span>待付款</span>
            </a>
          </li>
          <li class="l1">
            <a href="javascript:;"> 
              <i class="iconfont">&#xe602;</i>
              <span>待发货</span>
            </a>
          </li>
          <li class="l1">
            <a href="javascript:;"> 
              <i class="iconfont">&#xe658;</i>
              <span>待收货</span>
            </a>
          </li>
          <li class="l1">
            <a href="javascript:;"> 
              <i class="iconfont">&#xe610;</i>
              <span>待评价</span>
            </a>
          </li>
          <li class="l1">
            <a href="javascript:;"> 
              <i class="iconfont">&#xe601;</i>
              <span>退款</span>
            </a>
          </li>
        </ul>
      </div>
      <div id="down">
        <div class="cart">
          <p class="p4">购物车</p>
          <p class="p5">></p>
        </div>
        <div class="juan">
          <p class="p4">优惠券</p>
          <p class="p5">></p>
        </div>
        <div class="juan">
          <p class="p4">收藏夹</p>
          <p class="p5">></p>
        </div>
         <div class="juan">
          <p class="p4">足迹</p>
          <p class="p5">></p>
        </div>
         <div class="juan">
          <p class="p4">帮助与客服</p>
          <p class="p5">></p>
        </div>
         <div class="juan">
          <p class="p4">下载折800APP</p>
          <p class="p5">></p>
        </div>
      </div>
    <Navbar></Navbar>
  </div>
</template>

<script>
import Navbar from './Navbar'
export default {
  name: 'mine',
  data () {
    return {
      
    }
  },
  components:{
    Navbar
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
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
  font-size:22px;font-style:normal;
  -webkit-font-smoothing: antialiased;
  -webkit-text-stroke-width: 0.2px;
  -moz-osx-font-smoothing: grayscale;
}
#header{height:2.54rem;width:100%;background:#ff4545;}
#header .one{width:100%;height:1rem;line-height: 1rem;display: flex;flex-direction: row;}
#header .one .p1{font-size: 25px;color:#fff;width:1rem;padding-left: 0.3rem;}
#header .one h1{text-align: center;flex: 1;padding-right: 1.2rem;font-size:20px;color:#fff;}
#header .two {width:2.94rem;height:0.74rem;line-height: 0.74rem;text-align: center;margin:0.2rem auto;border:2px solid #fff;border-radius: 20px;}
#header .two a{color:#fff;font-size: 16px;}
#mess{width:100%;height:0.9rem;display: flex;flex-direction: row;justify-content: space-between;background: #fff;}
#mess .p2{height: 0.9rem;line-height: 0.9rem;padding-left: 0.3rem;}
#mess .p3{height: 0.9rem;line-height: 0.9rem;padding-right: 0.3rem;}

#mess1{width:100%;height:1.28rem;background: #fff;}
#mess1 .u1{width:100%;height:1.28rem;display: flex;flex-direction: row;justify-content: space-around;}
#mess1 .u1 .l1{display: flex;flex-direction: column;height:1.28rem;}
#mess1 .u1 .l1 a{display: block;display: flex;flex-direction: column;}
#mess1 .u1 .l1 a i{text-align: center;}
#mess1 .u1 .l1 a span{font-size: 10px;}

#down{height:6.7rem;background:#f6f6f6;margin-top: 0.3rem;}
#down .cart,#down .juan{width: 100%;display: flex;flex-direction: row;justify-content: space-between;height:0.9rem;line-height: 0.9rem;padding-left:0.3rem;padding-right:0.3rem;color:#000;box-sizing:border-box;font-size:14px;background: #fff;}

</style>
