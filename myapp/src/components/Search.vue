<template>
  <div id="ele">
  	<div class="search">
    	<input type="text" placeholder="请输入商品名称"/>
    	<button>搜索</button>  		
  	</div>
  	<Footerbar></Footerbar>
  </div>
</template>

<script>
import Footerbar from './Footerbar'

export default {
  name: 'search',
  data () {
    return {
      
    }
  },
  components:{
			Footerbar
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
.search{
	height: 1rem;
	width: 100%;
	position: fixed;
	top: 0;
	input{
		display: inline-block;
		width: 80%;
		height: .5rem;
		margin-left: .3rem;
    margin-top: .3rem;
		text-indent:px2rem(60px);
		border-radius: px2rem(30px);
		outline: none;
		border:1px solid #EFEDED;;
		background: url("../../static/image/拼团/search.png")no-repeat 3px;
		background-color: #EFEDED;
    background-size: 5%;
	}
	button{
		display: inline-block;
		height: .5rem;
		line-height: .5rem;
		border: none;
		outline: none;
		background: none;
		color: #e60044;
	}
}
.nav{
	position: fixed;
	width: 100%;
	bottom:0
}
</style>
