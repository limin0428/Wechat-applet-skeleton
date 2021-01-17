// 重写微信方法 -- promise
export const wxGetUserInfo = () => {
  return new Promise((resolve,reject) => {
    wx.getUserInfo({
      success: function (res) {
        resolve(res)
      },
      fail: function (err) {
        reject(err)
      }
    })
  })
}
