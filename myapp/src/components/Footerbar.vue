 <template>

    <div class="nav">
       <footer>
         <router-link to="/Pintuan" active-class="active" exact>
          <i class="iconfont">&#xe6cd;</i>
          <span>首页</span>
          </router-link>
          
          <router-link to="/Search" active-class="active" exact>
          <i class="iconfont">&#xe6f5;</i>
          <span>搜索</span>
          </router-link>
          
          <router-link to="/Mine" active-class="active" exact>
          <i class="iconfont">&#xe656;</i>
          <span>我的</span>
          </router-link>
          
          
       </footer>
       
	</div>
</template>

<script>
export default {
  name: 'footerbar',
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
 .active{
 	color:#e60044
 } 
</style>
 