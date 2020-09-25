<template>
  <div id="app">
    <Header id="header"></Header>
    <router-view/>
    <Footer id="footer"></Footer>
  </div>
</template>

<script>
import Header from "@/components/Header";
import Footer from "@/components/Footer";
export default {
  name: 'App',
  components:{
    Header,
    Footer
  }
}
</script>

<style>
*{
  margin: 0;
  padding: 0;
}
ul,li{
  list-style: none;
}
#app {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  min-height: 100vh;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}

</style>
