import { getSdk, Requester } from './generated'
import { baseURL } from '../utils/config'
import { login } from '../utils/network'
import { getI18nLanguage } from '../utils/i18n'
import { syncServerTimeDiff } from '../utils/util'
const tokenName = 'AlumniToken'
const GRAPHQL_BASE_URL = baseURL + '/gql'



const apiWrapper: Requester = async (
  doc, vars
) => {
  // console.log('[APIClient Doc]', doc)
  if (vars) {
    console.log('[APIClient Vars]', vars)
  }
  const { header } = await getRequestHeader()
  wx.showNavigationBarLoading()
  const timeStart = new Date()
  return new Promise((resolve, reject) => {
    wx.request({
      url: GRAPHQL_BASE_URL,
      data: {
        query: doc,
        variables: vars,
      },
      header,
      method: 'POST',
      success(res) {
        const data: any = res.data
        console.log('[APIClient Response]', res)
        syncServerTimeDiff(res.header.Date)
        if (res.statusCode >= 200 && res.statusCode < 300 && !data.errors) {
          resolve(data.data)
        } else if (res.statusCode === 403) {
          login().then(() => {
            return resolve(apiWrapper(doc, vars))
          })
        } else {
          const errMessage =
            data.errors && data.errors.length > 0
              ? data.errors[0].message
              : '网络异常，请稍后重试[1]'
          console.error(errMessage)
          reject(errMessage)
        }
      },
      fail(err) {
        console.error(err)
        reject('网络异常，请稍后重试[2]')
      },
      complete() {
        wx.hideNavigationBarLoading()
        console.info(`耗时${Date.now() - (timeStart as any)}ms`)
      },
    })
  })
}


const retryWrapper = (resolve: any, reject: any, func: () => any) => {
  return (res: any) => {
    const data: any = res.data
    console.log('[APIClient Response]', res)
    if (res.statusCode >= 200 && res.statusCode < 300 && !data.errors) {
      resolve(data.data || (JSON.parse(data)).data)
    } else if (data.errors) {
      if (Math.floor(data.errors[0].extensions.code / 100) === 401) {
        login().then(() => {
          return resolve(func())
        }).catch((err) => {
          reject(err)
        })
      } else {
        reject(data.errors[0].message)
      }
    } else if (res.statusCode === 401) {
      reject(data.errors[0].message)
    } else {
      reject('网络异常，请稍后重试[3]')
    }
  }
}

const getRequestHeader = async () => {
  let token = wx.getStorageSync('AlumniToken')
  if (!token) {
    try {
      const res = await login()
      if (res.result.token) {
        token = res.result.token
      }
    } catch (err) {
      console.log(err)
    }
  }
  const header = {
    'Alumni-Token': token,
    'Authorization': 'Bearer ' + token,
    'Accept-Language': getI18nLanguage(),
    'Timezone': -new Date().getTimezoneOffset() / 60,
  }
  return { header }
}


/** 提交我的建议 */
export const submitMySuggestion = async (filePath: string, param: any): Promise<{ submitSuggestion: boolean }> => {
  const { header } = await getRequestHeader()
  wx.showNavigationBarLoading()
  if (!filePath) {
    return new Promise((resolve, reject) => {
      apiClient.submitSuggestion({ content: param, file: null }).then(res => {
        resolve(res)
      }).catch(err =>
        reject(err))
    })
  } else {
    return new Promise((resolve, reject) => {
      const success = retryWrapper(resolve, reject, submitMySuggestion.bind(null, filePath, param))
      const query = `mutation submitSuggestion($content: String, $file: Upload) {
        submitSuggestion(input: {content: $content, file: $file})
      }`
      let formData = {
        operations: JSON.stringify({
          query,
          variables: { file: null, content: param }
        }),
        map: JSON.stringify({
          file: ['variables.file']
        })
      }
      wx.uploadFile({
        url: GRAPHQL_BASE_URL,
        filePath,
        header,
        name: 'file',
        formData,
        success,
        fail: (err) => {
          console.log('[APIClient Upload Err]', err)
          reject(err.errMsg)
        },
        complete: () => {
          wx.hideNavigationBarLoading()
        }
      })
    })
  }
}


export const apiClient = getSdk(apiWrapper)
