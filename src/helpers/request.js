import axios from 'axios'
import { Message } from 'element-ui'

axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded'
axios.defaults.baseURL = '//blog-server.hunger-valley.com'
//axios.defaults.baseURL = '//localhost:8080/#/' //这个有了，后面发请求就不用写全路径了

//整体导出一个函数
export default function request(url, type = 'GET', data = {}) {
  return new Promise((resolve, reject) => {
    //构造axios的参数
    let option = {
      url,
      method: type,
    }
    //如果请求是get
    if(type.toLowerCase() === 'get') {
      //get提交的参数是用params提交
      option.params = data
      //如果请求是其他
    }else {
      //其他的参数是用data提交
      option.data = data
    }
    //如果这次发送请求，有token
    if(localStorage.token) {
      //就把token放到Authorization发出去
      axios.defaults.headers.common['Authorization']  = localStorage.token
    }

    axios(option).then(res => {
      // console.log(res.data)
      if(res.data.status === 'ok') {
        if(res.data.token) {
          //如果返回了token，就存进缓存
          localStorage.token = res.data.token
        }
        resolve(res.data)
      }else{
        Message.error(res.data.msg) //elementui的组件
        reject(res.data)
      }
    }).catch(err => {
      Message.error('网络异常') //elementui的组件
      reject({ msg: '网络异常' })
    })
  })
}
