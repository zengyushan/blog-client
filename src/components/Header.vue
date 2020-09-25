<template>
  <header>
    <section v-if="!isLogin" class="noLogin">
      <h1>LET'S SHARE</h1>
      <h5>精品博客汇聚</h5>
      <div class="btns">
        <button><router-link to="/login">立即登录</router-link></button>
        <button><router-link to="/register">注册账号</router-link></button>
      </div>
    </section>
    <section v-if="isLogin" class="hasLogin">
      <div class="logotxt"><router-link to="/">LET'S SHARE</router-link></div>
      <div class="mine">
        <a><router-link to="/create"><svg t="1600146240134" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="640" width="200" height="200"><path d="M863.418182 698.181818c-13.963636 0-23.272727 9.309091-23.272727 23.272727v186.181819c0 39.563636-25.6 69.818182-69.818182 69.818181H134.981818c-41.890909 0-86.109091-30.254545-86.109091-69.818181V114.036364C48.872727 74.472727 93.090909 46.545455 134.981818 46.545455h635.345455c44.218182 0 69.818182 30.254545 69.818182 69.818181v325.818182c0 13.963636 9.309091 23.272727 23.272727 23.272727s23.272727-9.309091 23.272727-23.272727V116.363636c0-65.163636-46.545455-116.363636-116.363636-116.363636H134.981818C69.818182 0 2.327273 46.545455 2.327273 114.036364V907.636364c0 69.818182 69.818182 116.363636 132.654545 116.363636h635.345455c69.818182 0 116.363636-51.2 116.363636-116.363636v-186.181819c0-13.963636-11.636364-23.272727-23.272727-23.272727z m153.6-260.654545c-9.309091-9.309091-23.272727-9.309091-32.581818 0L512 889.018182c-9.309091 9.309091-9.309091 23.272727 0 32.581818 9.309091 9.309091 23.272727 9.309091 32.581818 0l472.436364-451.490909c6.981818-6.981818 6.981818-23.272727 0-32.581818zM630.690909 302.545455h-372.363636c-13.963636 0-23.272727 9.309091-23.272728 23.272727s9.309091 23.272727 23.272728 23.272727h372.363636c13.963636 0 23.272727-9.309091 23.272727-23.272727s-11.636364-23.272727-23.272727-23.272727z m0 232.727272h-372.363636c-13.963636 0-23.272727 9.309091-23.272728 23.272728s9.309091 23.272727 23.272728 23.272727h372.363636c13.963636 0 23.272727-9.309091 23.272727-23.272727s-11.636364-23.272727-23.272727-23.272728z" fill="#ffffff" p-id="641"></path></svg></router-link></a>
        <a class="wode-img"><img :src="user.avatar" :alt="user.username" :title="user.username">
        <div class="wode">
          <ul>
            <li><span><router-link to="/my">我的</router-link></span></li>
            <li><span @click="onLogout">注销</span></li>
          </ul>
        </div>
        </a>
      </div>
    </section>
  </header>
</template>

<script>

import {mapActions,mapGetters} from 'vuex'

export default {
  name: "Header",
  data(){
    return {
    }
  },
  computed:{
    ...mapGetters([
      'isLogin',
      'user'
    ])
  },
  created() {
    this.checkLogin()
  },
  methods:{
    ...mapActions([
      'checkLogin',
      'logout'
    ]),
    onLogout(){
      this.logout().then(()=>{
        this.$router.push({path:'/'})
      })
    }
  }
}
</script>

<style scoped>
  *{
    text-decoration: none;
  }
  header{
    position: relative;
    z-index: 3;
    background-color: green;
    color: #fff;
  }
  header .noLogin{
    height: 300px;
  }
  header h1{
    padding-top: 60px;
    font-size: 40px;
  }
  header h5{
    margin-top: 40px;
  }
  header .btns{
    margin-top: 60px;
  }
  header .btns button{
    margin: 0 10px;
    width: 70px;
    height: 26px;
    line-height: 26px;
    font-size: 14px;
    color: green;
    background-color: #fff;
    border: none;
    border-radius: 3px;
  }
  header .btns button a{
    text-decoration: none;
    color: green;
  }
  .hasLogin{
    display: flex;
    padding: 0 80px;
    justify-content: space-between;
    height: 70px;
  }
  .hasLogin .logotxt{
    font-size: 26px;
    line-height: 70px;
    font-weight: bold;

  }
  .hasLogin .logotxt a{
    color: #fff;
    cursor: pointer;
    text-decoration: none;
  }
  .mine{
    position: relative;
    display: flex;
    align-items: center;
  }
  .mine > a{
    margin-left: 10px;
    display: inline-block;
    width: 40px;
    height: 70px;
    cursor: pointer;
  }
  .mine > a svg{
    margin-top: 16px;
    width: 40px;
    height: 40px;
  }
  .mine > a img{
    margin-top: 15px;
    width: 100%;
    border-radius: 50%;
    border: 1px solid #fff;
  }
  .wode{
    display: none;
    position: absolute;
    right: 0;
    top: 70px;
    border: 1px solid green;
    border-bottom: none;
    background-color: #fff;
  }
  .wode li{
    border-bottom: 1px solid green;
  }
  .wode li:hover{
    background-color: green;
  }
  .wode li span,
  .wode li a{
    display: inline-block;
    width: 60px;
    height: 30px;
    line-height: 30px;
    color: green;
    font-size: 12px;
  }
  .wode li:hover span,
  .wode li:hover a {
    color: #fff;
  }
  .wode-img:hover > .wode{
    display: block;
  }
</style>
