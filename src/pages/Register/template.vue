<template>
  <div class="login">
    <div class="username">
      <h2>用户名</h2>
      <input v-model="username" type="text" placeholder="用户名">
    </div>
    <div class="password">
      <h2>密码</h2>
      <input v-model="password" @keyup.enter="onRegister" type="password" placeholder="密码">
    </div>
    <div class="btn">
      <button @click="onRegister">立即注册</button>
    </div>
    <div class="qh">
      <span>已有账号？<router-link to="/login">直接登录</router-link></span>
    </div>
  </div>
</template>

<script src="./template.js">

</script>

<style scoped src="./template.css">

</style>
