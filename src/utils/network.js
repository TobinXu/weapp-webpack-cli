import { baseURL } from './config'
import { getI18nLanguage } from './i18n'
import { apiClient, setLoginPromise, setRespInterceptor } from '../tsingapi/apiClient'
import dayjs from 'dayjs'
import { calculateClientServerTimeDifference } from '@utils/service';

const apiUrl = baseURL + '/api'
const loginUrl = baseURL + '/login'
const uploadUrl = baseURL + '/upload'
const imageUrl = baseURL + '/images'

export const login = () => {
  wx.showNavigationBarLoading()
  const timeStart = Date.now()
  return new Promise((resolve, reject) => {
    wx.login({
      success(res) {
        if (res.code) {
          // wx.request({
          //   url: loginUrl,
          //   method: 'POST',
          //   data: {
          //     code: res.code,
          //   },
          //   success(res) {
          //     console.info(res)
          //     if (res.statusCode === 200) {
          //       try {
          //         wx.setStorageSync('AlumniToken', res.data.AlumniToken)
          //         console.info('AlumniToken: ' + res.data.AlumniToken)
          //         resolve(res)
          //       } catch (err) {
          //         console.error(err)
          //         reject(err)
          //       }
          //     } else {
          //       reject('网络异常，请稍后重试[4]')
          //     }
          //   },
          //   fail() {
          //     reject('网络异常，请稍后重试[5]')
          //   },
          //   complete() {
          //     wx.hideNavigationBarLoading()
          //     console.info(`耗时${Date.now() - timeStart}ms`)
          //   },
          // })
          apiClient.loginThuAlumni({
            data: {
              input: {
                code: res.code
              }
            }
          }).then(res => {
            console.info(res)
            try {
              wx.setStorageSync('AlumniToken', res.result.token)
              wx.setStorageSync('AlumniTokenExpire', res.result.expiration)
              resolve(res)
            } catch (err) {
              console.error(err)
              reject(err)
            }
          }).catch(err => {
            reject('网络异常，请稍后重试[5]')
          })
        } else {
          console.error('获取用户登录态失败！' + res.errMsg)
          reject('获取用户登录态失败！' + res.errMsg)
        }
      },
    })
  })
}

const getReponse = (res) => {
    console.log('[TsingAPI Response]', res)
    const diff = calculateClientServerTimeDifference(new Date(res.header.Date))
    wx.setStorageSync('serverTimeDiff', diff)
}

setLoginPromise(login)

setRespInterceptor(getReponse)

const request = ({ params }) => {
  try {
    let token = wx.getStorageSync('AlumniToken')
    const expire = wx.getStorageSync('AlumniTokenExpire')
    if (expire && dayjs().isAfter(dayjs(expire))) {
      token = ''
    }
    const method = 'POST'
    if (token === '' || token === undefined || token === null) {
      return login().then(() => {
        return requestBase({ method, params, token })
      })
    } else {
      return requestBase({ method, params, token })
    }
  } catch (e) {
    console.error(e)
  }
}

const requestBase = ({ method, params, token }) => {
  console.info(params)
  const timeStart = Date.now()
  const header = {
    'Alumni-Token': token,
    'Authorization': 'Bearer ' + token,
    'Timezone': -new Date().getTimezoneOffset()/60,
  }
  const language = getI18nLanguage()
  if (language) {
    header['Accept-Language'] = language
  }
  return new Promise((resolve, reject) => {
    wx.request({
      url: apiUrl,
      data: params,
      header,
      method: method,
      success(res) {
        console.info(res)
        if (res.statusCode >= 200 && res.statusCode < 300 && !res.data.errors) {
          resolve(res)
        } else if (res.statusCode === 403) {
          login().then((res) => {
            const newHeader = {
              'Alumni-Token': res.result.token,
              'Authorization': 'Bearer ' + res.result.token,
            }
            const language = getI18nLanguage()
            if (language) {
              newHeader['Accept-Language'] = language
            }
            wx.request({
              url: apiUrl,
              data: params,
              header: newHeader,
              method: method,
              success(res) {
                console.info(res)
                if (res.statusCode >= 200 && res.statusCode < 300 && !res.data.errors) {
                  resolve(res)
                } else {
                  if (res.data == `Invalid Session Key.
`) {
                    reject("")
                  } else {
                    const errMessage =
                      res.data.errors && res.data.errors.length > 0
                        ? res.data.errors[0].message
                        : '网络异常，请稍后重试[6]'
                    console.error(errMessage)
                    reject(errMessage)
                  }
                }
              },
              fail(err) {
                console.error(err)
                reject('网络异常，请稍后重试[7]')
              },
              complete() {
                wx.hideNavigationBarLoading()
                console.info(`耗时${Date.now() - timeStart}ms`)
              },
            })
          })
        } else {
          const errMessage =
            res.data.errors && res.data.errors.length > 0
              ? res.data.errors[0].message
              : '网络异常，请稍后重试[8]'
          console.error(errMessage)
          reject(errMessage)
        }
      },
      fail(err) {
        console.error(err)
        reject('网络异常，请稍后重试[9]')
      },
      complete() {
        wx.hideNavigationBarLoading()
        console.info(`耗时${Date.now() - timeStart}ms`)
      },
    })
  })
}

const upload = ({ params }) => {
    const uploadUrl = baseURL + (params.formData && params.formData.runFaceDetection === 'true' ? '/v2/upload/detect' : '/v2/upload')
  const timeStart = Date.now()
  const header = {
    'Alumni-Token': wx.getStorageSync('AlumniToken'),
    'Authorization': 'Bearer ' + wx.getStorageSync('AlumniToken'),
  }
  const language = getI18nLanguage()
  if (language) {
    header['Accept-Language'] = language
  }
  return new Promise((resolve, reject) => {
    try {
      wx.uploadFile({
        url: uploadUrl,
        header,
        name: 'file',
        filePath: params.filePath,
        formData: params.formData,
        success(res) {
          console.info(res)
          if (res.data && res.data == "FILE_TOO_BIG\n") {
            reject('文件过大，请压缩后重试')
          } else if (res.statusCode === 200) {
            resolve(res)
          } else {
            reject('上传失败，请稍后重试')
          }
        },
        fail(err) {
          console.error(err)
          reject('上传失败，请稍后重试')
        },
        complete() {
          wx.hideLoading()
          wx.hideNavigationBarLoading()
          console.info(`耗时${Date.now() - timeStart}ms`)
        },
      })
    } catch (e) {

      console.error(e)
      reject('本地缓存错误')
    }
  })
}

const download = ({ params }) => {
  console.info(params)
  const timeStart = Date.now()
  wx.showLoading({ title: '下载中' })
  const header = {
    'Alumni-Token': wx.getStorageSync('AlumniToken'),
    'Authorization': 'Bearer ' + wx.getStorageSync('AlumniToken'),
  }
  const language = getI18nLanguage()
  if (language) {
    header['Accept-Language'] = language
  }
  return new Promise((resolve, reject) => {
    try {
      const { fileUrl, fileType, fileName } = params
      wx.downloadFile({
        url: fileUrl,
        filePath: `${wx.env.USER_DATA_PATH}/${fileName}`,
        header,
        success(res) {
          console.info(res)
          const { filePath } = res
          if (res.statusCode === 200) {
            resolve(res)
            wx.openDocument({
              filePath,
              fileType: fileType || '',
              showMenu: true,
              success(res) {
                resolve(res)
              },
              fail(err) {
                reject('打开文档失败')
              },
            })
          } else {
            reject('下载失败，请稍后重试')
          }
        },
        fail(err) {
          console.error(err)
          reject('下载失败，请稍后重试')
        },
        complete() {
          wx.hideLoading()
          wx.hideNavigationBarLoading()
          console.info(`耗时${Date.now() - timeStart}ms`)
        },
      })
    } catch (e) {
      console.error(e)
      reject('本地缓存错误')
    }
  })
}

const getImage = imageId => {
  return `${imageUrl}?imageId=${imageId}`
}

const getImageUrl = () => {
  return `${imageUrl}?imageId=`
}

const gqlRequestWrapper = (gqlDoc, params) => {
  let data = {}
  data.query = gqlDoc

  data.variables = {
    ...params,
  }

  return new Promise((resolve, reject) => {
    request({
      params: data,
    })
      .then(res => {
        resolve(res)
      })
      .catch(err => {
        reject(err)
      })
  })
}

module.exports = {
  login,
  request,
  upload,
  download,
  getImage,
  getImageUrl,
  gqlRequestWrapper,
}
