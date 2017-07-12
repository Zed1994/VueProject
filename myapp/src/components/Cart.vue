<template>
  <div class="faxian">
  <h1>购物车页</h1>

	</div>
</template>

<script>
   import Navbar from './Navbar'


export default {
  name: 'cart',
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
  font-size:16px;font-style:normal;
  -webkit-font-smoothing: antialiased;
  -webkit-text-stroke-width: 0.2px;
  -moz-osx-font-smoothing: grayscale;
}

</style>
