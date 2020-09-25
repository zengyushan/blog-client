<template>
  <div class="login">
    <div class="username">
      <h2>用户名</h2>
      <input v-model="username" type="text" placeholder="用户名">
    </div>
    <div class="password">
      <h2>密码</h2>
      <input v-model="password" @keyup.enter="onLogin" type="password" placeholder="密码">
    </div>
    <div class="btn">
      <button @click="onLogin">立即登录</button>
    </div>
    <div class="qh">
      <span>没有账号？<router-link to="/register">注册新用户</router-link></span>
    </div>
  </div>
</template>

<script src="./template.js">

</script>

<style scoped src="./template.css">

</style>
