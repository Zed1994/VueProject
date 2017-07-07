<template>
  <div class="regist">
    <input type="text" ref="username" placeholder="用户名"><br>
    <input type="password" ref="psw" placeholder="密码"><br>
    <button @click="regist4ajax">注册</button>
    <div v-show="$store.state.waiting">正在提交数据，请稍后...</div>
    <ul>
      <li v-for="item in $store.state.list">{{item}}</li>
    </ul>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
export default {
  name: 'regist',
  data () {
    return {
     
    }
  },
  methods:{
    ...mapActions([
    'updataWaitingFlag',
    ]),
    regist4ajax:function(){
      //显示waiting
      this.updataWaitingFlag(true)
     

     //ajax
    this.$http.post('/h51701/api/user/register', {
        username: this.$refs.username.value,
        psw:this.$refs.psw.value
      }).then(response => {
        console.log(response)
        //关闭waiting
         this.updataWaitingFlag(false)
       }, response => {
      // error callback
      console.log("error")
       });
    }
  }
  
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
h1, h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}
</style>
