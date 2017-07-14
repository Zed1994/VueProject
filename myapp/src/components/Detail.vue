<template>
<div id="detail">
  <div id="header">
      <mt-navbar v-model="selected">
        <mt-tab-item id="1"><a href="javascript:;" data-id1="1" @click="change($event)">基本信息</a></mt-tab-item>
        <mt-tab-item id="2"><a href="javascript:;" data-id1="2" @click="change($event)">商品详情</a></mt-tab-item>
        <mt-tab-item id="3"><a href="javascript:;" data-id1="3" @click="change($event)">评价（460）</a></mt-tab-item>
      </mt-navbar>

  </div>
    <div id="center">
          <div id="one" v-if="type === 'A'">
              <div class="banner">
                <div class="swiper-container">
                  <div class="swiper-wrapper">
                    <div class="swiper-slide">
                      <a href="#"><img :src="src1"></a>
                    </div>
            
                    <div class="swiper-slide">
                     <a href="#"><img :src="src2"></a>
                    </div>

                    <div class="swiper-slide">
                     <a href="#"><img :src="src3"></a>
                    </div>

                    
                  </div>
                    <div class="swiper-pagination">                 
                    </div>
                </div>
              </div>


              <div class="info">
                <p class="p2">{{name}}</p>
                <p class="p3"><span class="s1">￥{{big1}}</span><span class="s2">新品秒杀特价</span></p>
                <p class="p4">价格￥<span class="s3">{{prev}}</span></p>
                <div class="d5">
                  <p class="p5">快递<span class="s4">0.0</span></p>
                  <p class="p6">月销量<span class="s5">144</span></p>
                  <p class="p7">广东襄阳</p>
                </div>
                
              </div>
              <div class="d6"></div>
              <img class="img1" src="../../static/image/详情/1.jpg">
              <img class="img1" src="../../static/image/详情/2.jpg">
          </div>
          <div  v-else-if="type === 'B'">
             <img class="img1" src="../../static/image/详情/3.png">
             <img class="img1" src="../../static/image/详情/4.png">
             <img class="img1" src="../../static/image/详情/5.png">
             <img class="img1" src="../../static/image/详情/6.png">
             <img class="img1" src="../../static/image/详情/7.png">
             <img class="img1" src="../../static/image/详情/8.png">
          </div>

          <div v-else="type === 'C'">
             <img class="img1" src="../../static/image/详情/9.png">
             <img class="img1" src="../../static/image/详情/10.png">
             <img class="img1" src="../../static/image/详情/11.png">
          </div>





    </div>
    <div id="footer">
        <ul class="u1">
          <li class="l1">
             <a href="javascript:;"> 
                <i class="iconfont">&#xe683;</i>
                <span>客服</span>
              </a>
          </li>
          <li class="l1">
             <a href="javascript:;"> 
                <i class="iconfont">&#xe601;</i>
                <span>进店</span>
              </a>
          </li>
          <li class="l1">
              <a href="javascript:;"> 
                <i class="iconfont">&#xe67f;</i>
                <span>收藏</span>
              </a>
          </li>
        </ul>
        <div class="left">
          <div class="d1"><a href="javascript:;" @click="add2cart">加入购物车</a></div>
          <div class="d1 red"><a href="">立即购买</a></div>
        </div>
    </div>
</div>
   
</template>

<script>
import Swiper from '../../static/swiper.min.js'  
import Vue from 'vue' 
import { Toast } from 'mint-ui';
import { Navbar, TabItem,TabContainerItem,Cell ,TabContainer} from 'mint-ui'

Vue.component(TabContainer.name, TabContainer);
Vue.component(TabContainerItem.name, TabContainerItem);
Vue.component(Cell.name, Cell);
Vue.component(TabContainer.name, TabContainer);

Vue.component(Navbar.name, Navbar);
Vue.component(TabItem.name, TabItem);
export default {
  name: 'temai',
  data () {
    return {
      big1:'',
      prev:'',
      pid:'',
      selected: "1",
      type:"A",
      src1:'',
      src2:'',
      src3:'',
      name:''
    }
  },
  components:{},
  methods:{
    change:function(e){
      if(e.target.getAttribute('data-id1') == 1){
          console.log("A");
          this.type = 'A'
      }else if(e.target.getAttribute('data-id1') == 2){
         console.log("B")
        this.type = 'B'
      }else{
         console.log("C")
          this.type = 'C'
        }
      
    },
    swipers:function(){
      var swiper = new Swiper('.swiper-container',{
      slidesPerView: 1,
      paginationClickable: true,           
      loop: true,
      pagination: '.swiper-pagination',
      autoplay:2000,
      });
    },
    add2cart:function(){
    	this.$http.post('/zhe800/api/shop_cart/add', {
							goods_id:parseInt(this.pid)+1,
							count:1
						}).then(response => {
							console.log(response)
							if(response.body=="购物车添加成功"){
									Toast({
										message: '购物车添加成功',
										position: 'bottom',
										duration: 3000
									});

							}else{
								Toast({
									message: '购物车添加失败',
									position: 'bottom',
									duration: 3000
								});
							}
						}, response => {
							// error callback
	
						})  		
    }
  },
  mounted:function(){
     this.swipers()
     //获取产品编号
	   var idd=location.hash;
	   idd=idd.split("?");

     this.pid=idd[1].substr(3)
 		 console.log(this.pid)
     var that=this
 		 that.$http.post('/zhe800/api/temai/select',{
        id:that.pid
     }).then(response => {
			    console.log(response);
			    that.name=response.body.goods_info[that.pid].name
			    that.big1=response.body.goods_info[that.pid].price;
			    that.prev=response.body.goods_info[that.pid].prev;
			    that.src1=response.body.goods_info[that.pid].src;
			    that.src2=response.body.goods_info[that.pid].src;
			    that.src3=response.body.goods_info[that.pid].src
			    console.log(that.big1)
	   }, response => {
	    // error callback
	
	  });
  },
  updated:function(){
       this.swipers()
  },
  beforeMount:function(){
    // alert(this.$route.query.id)

    
  }
}
</script>



<!-- Add "scoped" attribute to limit CSS to this component only -->

<style scoped>
#detail{width:100%;height:100%;flex-direction: column;display: flex;}
#header{width:100%;height:1rem;}
#center{flex: 1;width:100%;height:12rem;display:flex;overflow-x: hidden;flex-direction: column;}
#center #one .banner img{width:7.5rem;}
#center #one .info{width:100%;height:2.5rem;margin-top:0.2rem;background:#fff;overflow: hidden;}
#center #one .info .p2{margin-top:10px;min-height: 16px;line-height: 16px;font-size: 14px;color:#444;}
#center #one .p3{width:96%;margin-left:2%;height:0.6rem;color:#e24848;font-size:16px;margin-top:0.2rem;}

#center #one .p3 .s1{font-size:20px;}
#center #one .p3 .s2{width:1.5rem;height:0.6rem;background:#fb6878;line-height: 0.6rem;text-align: center;color:#fff;font-size: 12px;margin-left: 4%;}
#center #one .p4{width:95%;margin-left:3%;font-size: 12px;}
#center #one .p4 .s3{text-decoration: line-through;}
#center #one .d5{width:95%;display: flex;flex-direction: row;justify-content: space-between;font-size: 12px;margin-top: 0.1rem;margin-left: 0.3rem;}
#center #one .d6{width:100%;height:0.2rem;background: #f4f4f4;}
#center #one .img1{width:7.5rem;}
.img1{width:7.5rem;}


#footer{height:1rem;width:100%;display: flex;background:#fff;}
#footer .u1{display: flex;flex-direction: row;width:3rem;}
#footer .u1 .l1 a{display: flex;flex-direction: column;width:1rem;text-align: center;height:1rem;}
#footer .left{flex:1;display: flex;flex-direction:row;}
#footer .left .d1{width:50%;background:#ff9500;height:1rem;line-height: 1rem;text-align: center;font-weight: 600;font-size: 14px; }
#footer .left .d1 a{color:#fff;}
#footer .left .red{background:#dd2727;}
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
  font-size:18px;font-style:normal;
  -webkit-font-smoothing: antialiased;
  -webkit-text-stroke-width: 0.2px;
  -moz-osx-font-smoothing: grayscale;
}
</style>