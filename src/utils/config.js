import {setHost} from "../tsingapi/apiClient"
const gateway = {
  production: { URL: 'https://info.tsinghua.org.cn/mp', env: 'production' },
  pretest: { URL: 'https://xysjkglfb.syx.thcic.cn/mp', env: 'pretest' },
  development: { URL: 'https://dev.whiteffire.cn/alumni-mp', env: 'development' },
  local: { URL: 'http://localhost:2334/mp', env: 'local' },
  cluster: { URL: 'https://alumni.thucampus.com/mp', env: 'cluster' },
}

const accountInfo = wx.getAccountInfoSync()

export const environment = [
  /* 0 正式 */
  'production',
  /* 1 模拟 */
  'pretest',
  /* 2 开发 */
  'development',
  // 3 本地
  'local',
  // 4 集群
  'cluster',
][4]

const version = '2.0.0'

export const baseURL = gateway[environment].URL
setHost(baseURL)

// module.exports = {
//   environment,
//   version,
//   baseURL: gateway[environment].URL,
// }


export default {
  environment,
  version,
  baseURL: gateway[environment].URL,
}