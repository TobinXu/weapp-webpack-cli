import {PrivacyLevelEnum} from '../graphql/generated'
import { getI18nEntryValue } from './i18n'

const KEY_PRIVACY_SETTING = 'store-privacy-setting'
const visibleList = [PrivacyLevelEnum.Friends, PrivacyLevelEnum.Alumni]
const keyList = ['phone', 'email', 'wechat', 'residence', 'jobs', 'selfie']
const privacyFieldMapping: any = {
  phone: '手机号',
  wechat: '微信号',
  email: '邮箱',
  residence: '居住地',
  jobs: '工作经历',
  selfie: '证件照',
}

const KEY_MP_ACCOUNT_INFO = 'KEY_MP_ACCOUNT_INFO'
interface IMpAccountInfo {
  appId: string
  envVersion: 'develop' | 'trial' | 'release'
  version?: string
}

export const store = {
  setPrivacySetting: (privacySettings: any) => {
    wx.setStorageSync(KEY_PRIVACY_SETTING, JSON.stringify(privacySettings))
  },
  getPrivacySetting: (): any => {
    const loaded = wx.getStorageSync(KEY_PRIVACY_SETTING)
    if (loaded) {
      return JSON.parse(loaded)
    }
  },
  getFriendsVisibility: (): string => {
    const loaded = wx.getStorageSync(KEY_PRIVACY_SETTING)
    if (!loaded) {
      return getI18nEntryValue('tip-对方将可以看到你的部分信息')
    }

    const settings = JSON.parse(loaded)
    const remain = keyList.filter((k) => visibleList.includes(settings[k]))
    if (remain.length === 0) {
      return getI18nEntryValue('tip-你的信息全保密')
    } else {
      return getI18nEntryValue('tip-对方将可以看到你的XX', remain.map((r) => getI18nEntryValue('fn-' + privacyFieldMapping[r])).join(', '))
    }
  },
  setAtomic(key: string) {
    wx.setStorageSync(key, 1)
  },
  getAtomic(key: string) {
    const loaded = wx.getStorageSync(key)
    wx.removeStorageSync(key)
    return loaded
  },
  setAccountInfo(accountInfo: IMpAccountInfo) {
    wx.setStorageSync(KEY_MP_ACCOUNT_INFO, JSON.stringify(accountInfo))
  },
  getAccountInfo(): IMpAccountInfo {
    const loaded = wx.getStorageSync(KEY_MP_ACCOUNT_INFO) || '{}'
    return JSON.parse(loaded)
  },
}