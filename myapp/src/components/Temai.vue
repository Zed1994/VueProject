<template>
  <div id="ele">
    <h1>今日特卖</h1>
   
   
    <Navbar></Navbar>
    </div>
</template>

<script>
	import Navbar from './Navbar'
export default {
  name: 'temai',
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
<style >
  body {
  background: white; }

html, body {
  height: 100%; }

</style>
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
