<template>
  <div id="app">
    <router-view class="view"></router-view>
    <div class="nav">
        <footer>
         <a href="/">
          <i class="iconfont">&#xe61e;</i>
          <span>今日特卖</span>
          </a>
          
          <a href="#/Tejia">
          <i class="iconfont">&#xe61b;</i>
          <span>淘特价</span>
          </a>
          
          <a href="/Pintuan">
          <i class="iconfont">&#xe645;</i>
          <span>拼团</span>
          </a>
          
          <a href="#/Cart">
          <i class="iconfont">&#xe67f;</i>
          <span>购物车</span>
          </a>

          <a href="#/Mine">
          <i class="iconfont">&#xe6b3;</i>
          <span>我的</span>
          </a>
       </footer>
    </div>
  </div>
</template>

<script>
export default {
  name: 'app'
}
</script>

<style>
*{
  padding:0;
  margin:0;
}
a{
  text-decoration: none
}
#app{
  height: 100%;
  display: flex;
  flex-direction: column;
}
.view{
  flex: 1
}

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
.nav{
  display: flex;
  min-height: 1.5rem;
}
.nav footer {
    width: 100%;
    min-height: 1.5rem;
    display: flex;
    justify-content: space-around;
    border-top: 1px solid #ccc; }
.nav footer a i {
      display: block;
      font-size: 22px;
      text-align: center; }
/*.nav footer a:nth-of-type(1) i {
      color: #007AFF; }
.nav footer a:nth-of-type(1) span {
      color: #007AFF; }*/
</style>
