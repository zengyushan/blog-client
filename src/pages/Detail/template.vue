<template>
  <div id="detail">
    <div class="yonghu">
      <div class="img"><img :src="user.avatar" alt=""></div>
      <div class="txt">
        <h2 v-text="title"></h2>
        <h4><a v-text="user.username">ruoyu</a>发布于<span>{{ friendlyDate(createdAt) }}</span></h4>
      </div>
    </div>
    <div class="zhengwen">
      <div class="desc">
        <p v-text="description"></p>
      </div>
      <div class="list">
        <ul>
          <li>
<!--            <div class="tit">一个范例</div>-->
            <p v-html="markdown"></p>
          </li>
<!--          <li>-->
<!--            <div class="tit">一个范例</div>-->
<!--            <p>一个范例为准以一个范例为准一个范例为准以一个范例为准一个范例为准以一个范例为准一个范例为准以一个范例为准一个范例为准以一个范例为准一个范例为准以一个范例为准一个范例为准以一个范例为准一个范例为准以一个范例为准一个范例为准以一个范例为准一个范例为准以一个范例为准一个范例为准以一个范例为准一个范例为准以一个范例为准一个范例为准以一个范例为准一个范例为准以一个范例为准一个范例为准以一个范例为准一个范例为准以一个范例为准</p>-->
<!--          </li>-->
        </ul>
      </div>
    </div>

  </div>
</template>

<script src="./template.js">

</script>

<style scoped src="./template.css">

</style>
