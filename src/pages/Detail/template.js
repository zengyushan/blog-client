import blog from "../../api/blog";
import marked from 'marked'
export default {
  data(){
    return{
      title:'',
      rawContent:'',
      user:{},
      createdAt:'',
      description:''
    }
  },
  created() {
    this.blogId = this.$route.params.blogId //
    console.log(this.blogId)
    blog.getDetail({ blogId:this.blogId }).then((res)=>{
      console.log(res)
      this.title = res.data.title
      this.rawContent = res.data.content
      this.user = res.data.user
      this.createdAt = res.data.createdAt
      this.description = res.data.description
    })
  },
  computed:{
    markdown(){
      return marked(this.rawContent,{sanitize:true})
    }
  }
}
