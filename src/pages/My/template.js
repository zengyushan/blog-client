import blog from "../../api/blog";
import {mapGetters} from 'vuex'

export default {
  data(){
    return {
      blogs:[],
      page:1,
      total:0,
      totalPage:0,
      everyNum:10
    }
  },
  computed:{
    ...mapGetters(['user'])
  },
  created(){
    this.page = parseInt(this.$route.query.page) || 1
    blog.getBlogsByUserId(this.user.id,{page:this.page})
      .then((res)=>{
        console.log(res)
        this.blogs = res.data
        this.page = res.page
        this.total = res.total
        this.totalPage = res.totalPage
      })
  },
  methods:{
    splitDate(dataStr){
      let dateObj = typeof dataStr === 'object' ? dataStr : new Date(dataStr)
      return {
        date:dateObj.getDate(),
        month:dateObj.getMonth()+1,
        year:dateObj.getFullYear()
      }
    },
    async delArticle(blogId){
      await this.$confirm('删除文章, 是否继续?', '提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning'
      })
      await blog.deleteBlog({blogId}).then((res)=>{
        console.log(res)
        this.blogs = this.blogs.filter(blog => blog.id != blogId)
        this.$message({
          type: 'success',
          message: '删除成功!'
        });
      }).catch(()=>{

      })

    },
    onPageChange(newPage){
      blog.getBlogsByUserId(this.user.id,{page:newPage})
        .then((res)=>{
          console.log(res)
          this.blogs = res.data
          this.page = res.page
          this.total = res.total
          this.totalPage = res.totalPage
          this.$router.push({path:'/my',query:{page:newPage}})
        })
    }
  }
}
