import axios from 'axios'
// import { MessageBox } from 'element-ui'
// import store from '@/store'

// device infos : for request headers
// create an axios instance
const service = axios.create({
  baseURL: 'http://127.0.0.1:8000/api', // api of base_url
  timeout: 1000000 // request timeout
})

// request interceptor
service.interceptors.request.use(
  config => {
    // Do something before request is sent
    config.headers['Access-Control-Allow-Origin'] = '*'
    config.headers['Access-Control-Allow-Headers'] = 'Authorization'
    config.headers['Content-type'] = 'application/json'

    // appending device information in headers
    config.headers = { ...config.headers }
    return config
  },
  error => {
    // Do something with request error
    console.log(error) // for debug
    Promise.reject(error)
  }
)

// response interceptor
service.interceptors.response.use(
  response => response,
  /**
   * The following comment indicates that the request status is indicated by a custom code in the response.
   * When the code returns the following, it indicates that there is a problem with the permissions, log out and return to the login page.
   * If you want to use xmlhttprequest to identify the status code, the logic can be written in the following error.
   * The following code is a sample, please modify it in combination with self-generated requirements, if you don't need it, you can delete it.
   */
  // response => {
  // const res = response.data
  // if (res.code !== 20000) {
  //   Message({
  //     message: res.message,
  //     type: 'error',
  //     duration: 5 * 1000
  //   })
  //   // 50008: Illegal token; 50012: Other clients logged in; 50014: Token expired;
  //   if (res.code === 50008 || res.code === 50012 || res.code === 50014) {
  //     // Please introduce MessageBox yourself.
  //     MessageBox.confirm('You have been logged out, you can click OK and try again', {
  //       confirmButtonText: 'OK',
  //       // cancelButtonText: 'cancel',
  //       type: 'warning'
  //     }).then(() => {
  //       store.dispatch('FedLogOut').then(() => {
  //         location.reload() // In order to re-instantiate the vue-router object to avoid bugs
  //       })
  //     })
  //   }
  //   return Promise.reject('error')
  // } else {
  //   return response.data
  // }
  // },
  error => {
    console.log('err: ' + error.message) // for debug
    // if (error.message === 'Request failed with status code 401') {
    //   MessageBox.confirm('You have been logged out due to inactivity. Please click OK and log in again.', {
    //     confirmButtonText: 'OK',
    //     cancelButtonText: 'Cancel',
    //     type: 'warning',
    //     center: true,
    //     showClose: false,
    //     showCancelButton: false
    //   }).then(() => {
    //     store.dispatch('FedLogOut').then(() => {
    //       location.reload() // In order to re-instantiate the vue-router object to avoid bugs
    //     })
    //   })
    // }
    return Promise.reject(error)
  })
export default service
