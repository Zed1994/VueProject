<template>

    <div class="nav">
       <footer>
         <router-link to="/" active-class="active" exact>
          <i class="iconfont">&#xe61e;</i>
          <span>今日特卖</span>
          </router-link>
          
          <router-link to="/Tejia" active-class="active" exact>
          <i class="iconfont">&#xe61b;</i>
          <span>淘特价</span>
          </router-link>
          
          <router-link to="/Pintuan" active-class="active" exact>
          <i class="iconfont">&#xe645;</i>
          <span>拼团</span>
          </router-link>
          
          <router-link to="/Lazy" active-class="active" exact>
          <i class="iconfont">&#xe67f;</i>
          <span>购物车</span>
          </router-link>

          <router-link to="/Mine" active-class="active" exact>

          <i class="iconfont">&#xe6b3;</i>
          <span>我的</span>
          </router-link>
       </footer>

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


<style scoped lang="scss">
$ui-width: 750px;
@function px2rem($px) {
	@return $px/$ui-width*7.5rem;
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

 .active{
 	color:#e60044
 } 
</style>
 
