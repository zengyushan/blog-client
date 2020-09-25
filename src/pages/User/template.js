import blog from "../../api/blog";
import {mapGetters} from 'vuex'

export default {
  data(){
    return {
      blogs:[],
      page:1,
      total:0,
      totalPage:0,
      thisUser:{}
    }
  },
  computed:{
    ...mapGetters(['user'])
  },
  created(){
    this.userId = this.$route.params.userId
    this.page = parseInt(this.$route.params.page) || 1
    blog.getBlogsByUserId(this.userId,{page:this.page})
      .then((res)=>{
        console.log(res)

        if(res.data.length > 0){
          this.blogs = res.data
          this.thisUser = res.data[0].user
        }
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
    delArticle(blogId){
      blog.deleteBlog({blogId}).then((res)=>{
        console.log(res)
        // this.$router.push({path:this.$route.query.redirect})
        this.page = parseInt(this.$route.query.page) || 1
        blog.getBlogsByUserId(this.user.id,{page:this.page})
          .then((res)=>{
            console.log(res)
            this.blogs = res.data
            this.page = res.page
            this.total = res.total
            this.totalPage = res.totalPage
          })
      })
    },
    onPageChange(newPage){
      blog.getBlogsByUserId(this.$route.params.userId,{page:newPage})
        .then((res)=>{
          console.log(res)
          if(res.data.length > 0){
            this.blogs = res.data
          }
          this.page = res.page
          this.total = res.total
          this.totalPage = res.totalPage
        })
    }
  }
}
