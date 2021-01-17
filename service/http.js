const service = params => {
  if (!params.url) return
  return new Promise( (resolve,reject) => {
    wx.request({
      url: params.url,
      method: params.method.toLocaleUpperCase() || 'GET',
      timeout: params.timeout || 2000,
      header: params.header || {
        'content-type': 'application/json'      
      },
      data: params.data,
      success (res) {
        // 也可以做一些统一处理 
        resolve(res)
      },
      fail (err) {
        reject(err)
      }
    })
  })
}
export default service