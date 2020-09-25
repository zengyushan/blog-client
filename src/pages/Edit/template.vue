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
            <h2>文章标题</h2>
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
    <div class="btn">
      <button @click="onEdit">保存</button>
    </div>
  </div>
</template>

<script src="./template.js">

</script>

<style scoped src="./template.css">

</style>
