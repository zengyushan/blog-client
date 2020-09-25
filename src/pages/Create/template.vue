<template>
  <div class="create">
    <div class="ctit">
      <h2>创建文章</h2>
    </div>
    <div class="list">
      <ul>
        <li>
          <div class="tit">
            <h2>文章标题</h2>
          </div>
          <div class="txt">
            <input type="text" v-model="title">
          </div>
          <div class="hint">
            <span>限30个字</span>
          </div>
        </li>
        <li>
          <div class="tit">
            <h2>内容简介</h2>
          </div>
          <div class="txt txt2">
            <textarea name="" v-model="description"></textarea>
          </div>
          <div class="hint">
            <span>限200个字</span>
          </div>
        </li>
        <li>
          <div class="tit">
            <h2>文章内容</h2>
          </div>
          <div class="txt txt3">
            <textarea v-model="content"></textarea>
          </div>
          <div class="hint">
            <span>限10000个字</span>
          </div>
        </li>
      </ul>
    </div>
    <div class="showIndex">
      <h4>是否展示到首页</h4>
      <el-switch
        v-model="value"
        active-color="#13ce66"
        inactive-color="#ff4949">
      </el-switch>
    </div>

    <div class="btn">
      <button @click="createContent">立即创建</button>
    </div>
  </div>
</template>

<script src="./template.js">

</script>

<style scoped src="./template.css">

</style>
