 <template>

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
          
          <a href="#/Pintuan">
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

 Add "scoped" attribute to limit CSS to this component only 
<style  lang="scss">
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
  
</style>
 