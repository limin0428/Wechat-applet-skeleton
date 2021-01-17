// 接口地址
import env from './env.js'
console.log(env)
const baseUrl = env === 'produce' ? 'https://www.baidu.com/' : 'https://www.baidu-test.com/'
const api = {
    getMuneList: baseUrl + 'getMuneList',  // 获取权限列表
}
export default api