<template>
  <div id="index">
    <div class="list">
      <ul>
        <li v-for="blog in blogs">
          <div class="h-icon">
            <router-link :to="`/user/${blog.user.id}`">
              <img :src="blog.user.avatar" alt="">
              <h4>{{blog.user.username}}</h4>
            </router-link>
          </div>
          <div class="b-txt">
            <router-link :to="`/detail/${blog.id}`">
              <h2>{{ blog.title }}<span>{{ friendlyDate(blog.createdAt) }}</span></h2>
              <p>{{ blog.description }}</p>
            </router-link>
          </div>
        </li>
      </ul>
    </div>
    <section class="abso-bot">
      <el-pagination
        layout="prev, pager, next"
        :total="total"
        :current-page="page"
        @current-change="onPageChange">
      </el-pagination>
    </section>
  </div>
</template>

<script src="./template.js"></script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped src="./template.css"></style>
