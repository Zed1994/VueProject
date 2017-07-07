<template>
   <div id="app">
    <router-view class="view"></router-view>
    <div class="nav">
        <footer>
          <a href="/">
          <i class="iconfont">&#xe639;</i>
          <span>外卖</span>
          </a>
          
          <a href="#/Faxian">
          <i class="iconfont">&#xe608;</i>
          <span>发现</span>
          </a>
          
          <a href="#/Login">
          <i class="iconfont">&#xe62f;</i>
          <span>订单</span>
          </a>
          
          <a href="#/Regist">
          <i class="iconfont">&#xe64f;</i>
          <span>我的</span>
          </a>
       </footer>
    </div>
  </div>
</template>

<script>
export default {
  name: 'navbar',
  data () {
    return {
      
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
@font-face {
  font-family: 'iconfont';
  src: url('../static/font/iconfont.eot');
  src: url('../static/font/iconfont.eot?#iefix') format('embedded-opentype'),
  url('../static/font/iconfont.woff') format('woff'),
  url('../static/font/iconfont.ttf') format('truetype'),
  url('../static/font/iconfont.svg#iconfont') format('svg');
}

.iconfont{
  font-family:"iconfont" !important;
  font-size:16px;font-style:normal;
  -webkit-font-smoothing: antialiased;
  -webkit-text-stroke-width: 0.2px;
  -moz-osx-font-smoothing: grayscale;
}
</style>
