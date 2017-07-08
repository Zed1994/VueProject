<template>
  <div id="app">
    <router-view class="view"></router-view>
    

  </div>
</template>

<script>
export default {
  name: 'app'
}
</script>

<style lang="scss">
$ui-width: 750px;
@function px2rem($px) {
	@return $px/$ui-width*7.5rem;
}
/**{
  padding:0;
  margin:0;
}*/
a{
  text-decoration: none
}
a:hover{
	color:#e60044;
}
#app{
  height: 100%;
  display: flex;
  flex-direction: column;
}
.nav{
  display: flex;
  height: px2rem(160px);
 footer {
    width: 100%;
    /*min-height: 1.5rem;*/
    box-sizing: border-box;
   height: px2rem(160px);
   box-sizing: border-box;
   padding-top: px2rem(20px);
    display: flex;
    justify-content: space-around;
    border-top: 1px solid #ccc; 
    a {
    	display:inline-block;
    	height: 100%;
    	i {
    	     display: block;
    	     font-size: 22px;
    	     text-align: center; 
    	     }
    	}
    	
    }
    
 }
</style>
