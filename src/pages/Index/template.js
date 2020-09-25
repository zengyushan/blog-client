import blog from '@/api/blog.js'

export default {
  data(){
    return{
      blogs:[],
      total:0,
      page:1,
      // userId:null
    }
  },
  created(){
    this.page = parseInt(this.$route.query.page) || 1

    blog.getIndexBlogs({page:this.page}).then(res=>{
      console.log(res)
      this.blogs = res.data
      this.total = res.total
      this.page = res.totalPage
    })
  },
  methods:{
    onPageChange(newPage){
      blog.getIndexBlogs({page:newPage}).then(res=>{
        console.log(res)
        this.blogs = res.data
        this.total = res.total
        this.page = res.totalPage
      })
    }
  }
}
