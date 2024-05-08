import { baseURL } from './config'
import dayjs from 'dayjs'
import { getI18nEntryValue } from './i18n'
import { apiClient } from '../graphql/client'
import { toast } from './wechatUtils'
import {calculateClientServerTimeDifference} from '@utils/service'

const app = getApp()

// 路由跳转
export const navigateTo = (app, url) => {
  const now = new Date()
  let delta = now - app.globalData.isClicked
  if (delta > 0 && delta < 3000) {
    return
  }
  app.globalData.isClicked = now
  wx.navigateTo({
    url: url,
    complete: () => {
      app.globalData.isClicked = 0
    },
  })
}

let navigateToFlag = false;
export const navigateToPro = (opts) => {
  if (navigateToFlag) {
    return;
  } 
  try {
    navigateToFlag = true;
    const timer = setTimeout(function () {
      navigateToFlag = false;
      clearTimeout(timer)
  }, 1000);
    let level = opts.level || 10;
    if (opts && opts.url) {
      if (opts.url[0] !== '/') {
        opts.url = '/' + opts.url;
      }
      opts.url = opts.url.replace(/ /g, '');
      let reg = /[\u4e00-\u9fa5]+/;
      if (reg.test(opts.url)) {
        console.warn('==========跳转页面参数禁止携带汉字，需要转义===========', opts.url);
      }
    }
    // 面栈跳转控制
   getCurrentPages().length >= level ? wx.redirectTo(opts) : wx.navigateTo(opts);
  } catch (e) {
    console.error(e);
  }
};

export const setClipboardData = (e) => {
  const { data } = e.currentTarget.dataset
  wx.setClipboardData({
    data,
    success(res) {
      toast.info(getI18nEntryValue('tip-已复制XX', data))
    },
    fail(err) {
        toast.info(err.errMsg)
    }
  })
}

// 正则
export const isValid = (key, value) => {
  const regMap = {
    'email': /^\w+([-+.]\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/,
    'amount': /(^[1-9]([0-9]+)?(\.[0-9]{1,2})?$)|(^(0){1}$)|(^[0-9]\.[0-9]([0-9])?$)/,
  }
  const reg = regMap[key]
  return reg.test(value)
}

// 证件类型字典
export const documentTypeDic = {
  'Mainland': '居民身份证',
  'HKMO': '港澳居民来往内地通行证',
  'TW': '台湾居民来往大陆通行证',
  'Passport': '护照',
}

// 入校类型字典
export const enrollmentTypeDic = {
  'Undergraduate': '本科',
  'Master': '硕士',
  'Doctor': '博士',
  'Postdoctor': '博士后',
  'Minor': '本科辅修',
  'DoubleMajor': '本科校内二学位',
  'SecondDegree': '第二学士学位',
  'College': '专科',
}

// 入校类型数组
export const enrollmentTypeList = Object.keys(enrollmentTypeDic).map(key => {
  return {
    name: enrollmentTypeDic[key],
    value: key,
  }
})

export const getI18nEnrollmentTypeList = () => Object.keys(enrollmentTypeDic).map((key) => {
  return {
    name: getI18nEntryValue('fv-' + enrollmentTypeDic[key]),
    value: key,
  }
})

export const formatI18nEnrollmentTypeList = (arr) => arr.map((item) => {
  return {
    name: getI18nEntryValue('fv-' + item.name),
    value: item.id,
  }
})

// 生成院系列表
export const generateDepartments2 = (data, _gd) => {
  if (data instanceof Array) {
    const now = new Date()
    const nowYear = now.getFullYear()
    const startYear = 1909
    let allDepatments = {
      year: '不限年份',
      departments: [],
    }
    let result = Array.apply(null, Array(nowYear - startYear + 1)).map((item, i) => {
      return {
        year: startYear + i + '',
        departments: [],
      }
    })
    data.forEach(element => {
      const years = element.years
      let len = years.length
      for (let i = 0; i < len; i++) {
        if (years.charAt(i) === '1') {
          result[i].departments.push(element.name)
        }
      }
      if (years.indexOf('1') > 0) {
        allDepatments.departments.push(
          element.name + '（' + result[years.indexOf('1')].year + '-' + result[years.lastIndexOf('1')].year + '）'
        )
      }
    })
    result.push(allDepatments)
    return result.reverse().filter(item => item.departments.length > 0)
  } else {
    return []
  }
}

export const generateDepartments = (res, anyYear = false, anyDepartment = false) => {
  if (res instanceof Array) {
    const startYear = 1909
    const nowYear = dayjs().get('year')
    const data = res.map(v => ({
      ...v,
      end: v.end === -1 ? nowYear : v.end,
    }))
    const result = []
    const defaultYear = {
      year: {
        value: null,
        name: getI18nEntryValue('fv-不限年份'),
      },
      departments: data.map(v => ({
        ...v,
        name: `${v.name}（${v.start}-${v.end}）`,
      })),
    }
    const defaultDepartment = {
      id: null,
      name: getI18nEntryValue('fv-不限院系'),
      start: -1,
      end: -1,
    }
    for (let year = nowYear; year >= startYear; year--) {
      const departments = data.filter(v => v.start <= year && v.end >= year)
      if (departments.length > 0) {
        result.push({
          year: {
            value: year + '',
            name: year + '',
          },
          departments,
        })
      }
    }
    return [...(anyYear ? [defaultYear] : []), ...result].map(v => ({
      ...v,
      departments: anyDepartment ? [{ ...defaultDepartment }, ...v.departments] : v.departments,
    }))
  } else {
    return []
  }
}

// 行业数组
export const industryList = [
  '信息传输、软件和信息技术服务业',
  '金融业',
  '公共管理、社会保障和社会组织',
  '教育',
  '科学研究和技术服务业',
  '制造业',
  '电力、热力、燃气及水生产和供应业',
  '租赁和商务服务业',
  '房地产业',
  '建筑业',
  '文化、体育和娱乐业',
  '批发和零售业',
  '卫生和社会工作',
  '交通运输、仓储和邮政业',
  '水利、环境和公共设施管理业',
  '军队',
  '采矿业',
  '国际组织',
  '农、林、牧、渔业',
  '住宿和餐饮业',
  '居民服务、修理和其他服务业',
  '其他',
]

export const relationList = [
    '配偶',
    '父母',
    '子女',
    '其他',
]

export const getI18nIndustryList = () => {
  return industryList.map((v) => getI18nEntryValue(`fv-${v}`))
}

export const getI18nFieldList = (arr) => {
    if (!arr.length) return
    return arr.map((v) => getI18nEntryValue(`fv-${v}`))
}

export const getI18nIndustryReverseMapping = () => {
  const mapping = {}
  industryList.forEach((v) => {
    mapping[getI18nEntryValue(`fv-${v}`)] = v
  })
  return mapping
}

export const shareAppMessage = {
  title: '清华校友总会官方小程序',
  path: '/pages/index/index',
  imageUrl: '/img/index_bg.png',
}

export const oAuthScope = {
  alumnus: '校友身份',
  name: '姓名',
  campusIdentity: '学籍信息',
  job: '工作信息',
  contact: '联系方式',
}

export const formatDate = (dateStr, { field = 'month', separator = '.', preZero = false } = {}) => {
  const t = new Date(dateStr)
  const year = t.getFullYear(),
    month = `${preZero ? '0' : ''}${t.getMonth() + 1}`.slice(-2),
    day = `${preZero ? '0' : ''}${t.getDate() + 1}`.slice(-2)
  if (field === 'month') {
    return [year, month].join(separator)
  } else if (field === 'day') {
    return [year, month, day].join(separator)
  }
}

export const getSubscribeTmpId = () => {
  try {
    apiClient.pushTemplate().then(res => {
      wx.setStorageSync('templateMessageID', res.pushTemplate)
    }).catch(err => {
      console.log('模板ID请求失败', err)
    })
    wx.setStorageSync('subscribeTmpId', 'data')
  } catch (e) {
    console.log('存储订阅ID出错', e)
  }
}

export const getPx = (rpx) => {
    let info = wx.getSystemInfoSync();
    return (info.screenWidth / 750 * rpx).toFixed(2);
}

export const updateToken = (token, expiration) => {
    const tokenName = 'AlumniToken'
    const tokenExpirationName = 'AlumniTokenExpire'
    wx.setStorageSync(tokenName, token)
    wx.setStorageSync(tokenExpirationName, expiration)
}

export const switchHomePage = (type) => {
    wx.switchTab({
        url: type === 'home' ? '/pages/index/index' : '/pages/home/index',
        success: function(e) {
            const page = getCurrentPages().pop();
            if (page == undefined || page == null) return;
            page.onLoad();
        }
    }) 
}

export const syncServerTimeDiff = (date) => {
    const diff = calculateClientServerTimeDifference(new Date(date))
    wx.setStorageSync('serverTimeDifference', diff)
}
export const regex = {
  email: /^([a-zA-Z0-9_\-.]+)@([a-zA-Z0-9_\-.]+)\.([a-zA-Z]{2,})$/,
  wechat: /^[_a-zA-Z0-9]([-_a-zA-Z0-9]{4,18}[_a-zA-Z0-9])?$/,
  phoneNumber: /^1[0-9]{10}$/,
}


export const formatPhoneParams = (phone) => {
  if (!phone) return ''
  return '+86.' + phone

}

export const throttle = (fn, interval) => {
    let enterTime = 0
    let gapTime = interval || 300
    return function () {
      const context = this
      const backtime = new Date()
      if (backtime - enterTime > gapTime) {
        fn.call(context, arguments)
        enterTime = backtime
      }
    }
  }
/**
 * 
 * @param {*} successFn 接口调用成功函数
 * @param {*} failFn 接口调用失败函数
 * @param {*} completeFn 本函数调用完成函数
 * @param {*} delay 调用成功回调函数的间隔时间，单位为秒，如果值为0，则不开启，如果大于0则开启，最少30秒以上，根据：https://developers.weixin.qq.com/community/develop/doc/000aee91a98d206bc6dbe722b51801
*/
  export const getUserLocation = (successFn, failFn, delay=0, completeFn) => {
      const showFetchLocaiton = () => {
        if (delay <= 0) return true
        const serverTimeDiff = wx.getStorageSync('serverTimeDiff') || 0
        const uploadLocationTimeStamp = Date.now() + serverTimeDiff
        const beforeUploadTimeStamp = wx.getStorageSync('uploadLocationTimeStamp') || 0
        return uploadLocationTimeStamp - beforeUploadTimeStamp > delay * 1000
      }
      const getLocation = async () => {
            try {
                const res = await new Promise((resolve, reject) => {
                    wx.getSetting({
                        success: (res) => {
                          if (!res.authSetting['scope.userLocation']) {
                            reject('no scope.userLocation auth')
                          } else {
                            wx.getLocation({
                                altitude: true,
                                success: resolve,
                                fail: reject,
                            });
                          }
                        }
                      })
                });
                const serverTimeDiff = wx.getStorageSync('serverTimeDiff') || 0
                const uploadLocationTimeStamp = Date.now() + serverTimeDiff
                wx.setStorageSync('location', res)
                wx.setStorageSync('uploadLocationTimeStamp', uploadLocationTimeStamp);
                successFn && successFn(res);
            } catch (err) {
                console.log("调用报错wx.getLocaiton", err);
                failFn && failFn();
            }
        };
      if (showFetchLocaiton()) {
        getLocation();
      }
      completeFn && completeFn()
  }

  /**
   * 获取最新的头像，如果avatarID变更则更新头像url
   * @param {*} latestAvatarID 最新的头像id
   * @param {*} latestUrl 最新的头像url
   */
  export const getCorrectAvatar = async(latestAvatarID, latestUrl) => {
    const avatarID = wx.getStorageSync('avatarID')
    let avatarUrl = ''
    if (avatarID && latestAvatarID === avatarID) {
        avatarUrl = wx.getStorageSync('avatarUrl')
    } else {
        const res = await transformToBase64(latestUrl)
        const base64Img = res
        wx.setStorageSync('avatarID', latestAvatarID)
        wx.setStorageSync('avatarUrl', base64Img)
        avatarUrl = base64Img
    }
    return avatarUrl
  }

  /**
   * 本地图片转base64
   * @param path 本地图片地址
   * @returns {Promise<string>} 返回base64
   */
  export const transformToBase64 = async (path) => {
    if (!path) return Promise.resolve('')
    return new Promise(async(resolve, reject) => {
      // 获取文件系统管理器实例
      const fsManager = wx.getFileSystemManager();
      // 下载网络图片并保存到本地
      wx.downloadFile({
        url: path,
        success: res => {
            if (res.tempFilePath) {
              // 获取下载文件的临时路径
              const tempFilePath = res.tempFilePath;
              // 获取图片类型
              const imageType =  res.header ? (res.header['content-type'] || res.header['Content-Type']) : 'image/png'; // 将此处替换为您的图片格式类型
              // 读取文件数据并将其转换为Base64格式
              const data = fsManager.readFileSync(tempFilePath, 'base64');
              // 拼一下图片的完整base64
              const base64 = 'data:' + imageType + ';base64,' + data;
              resolve(base64)
            } else {
                resolve('')
            }
        },
        fail: err => resolve('')
      });
      
    })
  }

  /**
   * 获取上次上传位置时间戳
   */
  export const getLocationUpdateTimeStamp = () => {
    const uploadTimeStamp = wx.getStorageSync('uploadLocationTimeStamp') || 0
    return uploadTimeStamp
  }

  /**
   * 获取上次上传位置信息
   */
  export const getLocationInfo = () => {
    const location = wx.getStorageSync('location')
    return location
  }

  export const getLocationMethod = (timeDistance = 3600) => {
    return new Promise((resolve, reject) => {
      // 如果上次的时间
      const lastTime = getLocationUpdateTimeStamp()
      const address = getLocationInfo()

      if (!lastTime || !address || new Date().getTime() - lastTime > (timeDistance * 1000)) {
        // 重新获取
        wx.getLocation({
          type: 'wgs84',
          success(res) {
            wx.setStorageSync('location', res)
            wx.setStorageSync('uploadLocationTimeStamp', new Date().getTime())
            resolve(res)
          },
          fail(res) {
            if (address) {
              resolve(address)
            } else {
              reject('tip-无法获取位置')
            }
          }
        })
      } else {
        if (address) {
          resolve(address)
        } else {
          reject('tip-无法获取位置')
        }
      }
    })
  }


export default {
  navigateTo,
  setClipboardData,
  isValid,
  documentTypeDic,
  enrollmentTypeDic,
  enrollmentTypeList,
  generateDepartments,
  industryList,
  shareAppMessage,
  oAuthScope,
  getSubscribeTmpId,
  getPx,
  updateToken,
  switchHomePage,
  syncServerTimeDiff,
  regex,
  formatPhoneParams,
  throttle,
  getUserLocation,
  getCorrectAvatar,
  transformToBase64,
  getLocationUpdateTimeStamp,
  getLocationInfo,
  getLocationMethod
}


export const formatTime = date => {
  const year = date.getFullYear()
  const month = date.getMonth() + 1
  const day = date.getDate()
  const hour = date.getHours()
  const minute = date.getMinutes()
  const second = date.getSeconds()

  return `${[year, month, day].map(formatNumber).join('/')} ${[hour, minute, second].map(formatNumber).join(':')}`
}

const formatNumber = n => {
  n = n.toString()
  return n[1] ? n : `0${n}`
}

export const sum = (a, b) => a + b

export function formatStr(str){
  const ary = str.split('');
  return ary.reduce((prev, item) => {
    const temp = item * 1
    if(temp.toString() == 'NaN') {
      prev += item
      return prev
    }else{
      for(let i = temp-1; i >= 1; i--){
        prev += prev.length ? prev[prev.length - 1] : ''
      }
      return prev
    }
  }, '')
}

export class Test{}

export const throtte = function(fn, delay=500, immediate = false){
  let timer = null
  return function(...args){
    const context = this
    const later = function(){
      fn.call(context, ...args)
      clearTimeout(timer)
      timer = null
    }
    const callNow = immediate && !timer
    // timer && clearTimeout(timer)
    if(!timer){
      timer = setTimeout(later, delay)
    }
    callNow && fn.call(context, ...args)
  }
}