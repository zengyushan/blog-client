<template>
  <div class="my">
    <section class="yonghu">
      <img :src="user.avatar" alt="">
      <span v-text="user.username"></span>
    </section>
    <section class="list">
      <ul>
        <li v-for="blog in blogs" :key="blog.id">
          <div class="dat">
            <h2>{{ splitDate(blog.createdAt).date }}</h2>
            <h4><span>{{splitDate(blog.createdAt).month}}</span>月</h4>
            <h6>{{splitDate(blog.createdAt).year}}</h6>
          </div>
          <div class="txt">
              <router-link :to="`/detail/${blog.id}`">
                <h2>{{ blog.title }}</h2>
                <p>{{blog.description}}</p>
              </router-link>
              <div class="btns">
                <a class="edit" ><router-link :to="`/edit/${blog.id}`">编辑</router-link></a>
                <a class="del" @click.prevent="delArticle(blog.id)">删除</a>
              </div>
          </div>
        </li>
      </ul>
    </section>
    <section class="abso-bot">
      <el-pagination
        layout="prev, pager, next"
        :total="total"
        :current-page="page"
        :page-size="everyNum"
        @current-change="onPageChange">
      </el-pagination>
    </section>
  </div>
</template>

<script src="./template.js">

</script>

<style scoped src="./template.css">

</style>
