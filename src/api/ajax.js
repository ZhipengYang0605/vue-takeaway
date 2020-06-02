import axios from 'axios'
export default function ajax (url, data = {}, type = 'GET') {
  return new Promise(function (resolve, reject) {
    let promise
    // 1.处理get请求
    if (type === 'GET') {
      let dataStr = ''
      Object.keys(data).forEach(item => {
        dataStr += item + '=' + data[item] + '&'
      })
      if (dataStr) {
        dataStr = dataStr.splice(0, dataStr.lastIndexOf('&'))
        url = url + '?' + dataStr
      }
      // 发送get请求
      promise = axios.get(url)
    } else { // 2.处理post请求
      promise = axios.post(url, data)
    }
    promise.then(function (response) {
      // 成功则调用resolve
      resolve(response.data)
    }).catch(function (error) {
      // 失败则调用reject
      reject(error)
    })
  })
}
