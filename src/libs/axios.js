import axios from 'axios'
import qs from 'qs'
// import { getToken } from './util'

class HttpRequest {
  constructor (baseUrl = '') {
    this.baseUrl = baseUrl
    this.queue = {}
  }
  getInsideConfig () {
    const config = {
      baseURL: this.baseUrl,
      headers: {
        //
      }
    }
    return config
  }
  destroy (url) {
    delete this.queue[url]
    if (!Object.keys(this.queue).length) {
      // Spin.hide()
    }
  }
  interceptors (instance, url) {
    // 请求拦截
    instance.interceptors.request.use(config => {
      // 添加全局的loading...
      if (!Object.keys(this.queue).length) {
        // Spin.show() // 不建议开启，因为界面不友好
      }
      this.queue[url] = true
      // POST方法，而且不是上传接口时，需要对数据进行qs处理
      if (config.method === 'post' && (url.replace('/', '').substring(0, 6) !== 'upload')) {
        config.headers = {
          'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8'
        }
        config.data = qs.stringify({
          ...config.data
        })
      }
      // if (getToken()) {
      //   config.headers['Authorization'] = 'Bearer ' + getToken()
      // }

      // token && (config.headers.Authorization = 'Bearer ' + token)
      return config
    }, error => {
      return Promise.reject(error)
    })
    // 响应拦截
    instance.interceptors.response.use(res => {
      this.destroy(url)
      const { data, status } = res
      return { data, status }
    }, error => {
      this.destroy(url)
      return Promise.reject(error)
    })
    instance.interceptors.response.use(data => {
      if (data.status && data.status === 200 && data.data.status === 'error') {
        console.log(data.data.msg)
        return
      }
      return data
    }, err => {
      return Promise.resolve(err)
    })
  }
  request (options) {
    const instance = axios.create()
    options = Object.assign(this.getInsideConfig(), options)
    this.interceptors(instance, options.url)
    return instance(options)
  }
}
export default HttpRequest
