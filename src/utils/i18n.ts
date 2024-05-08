import { apiClient } from '../graphql/client'
import { localDict } from './i18nLocalDict'

/** Deprecated */
export const tr = function (globalData: any, name: string): string {
  if (globalData.language === 'en') {
    return globalData.zh_CN2en_US[name] || `En ${name}`
  }
  return name
}

const I18N_DICT_STORE_KEY = 'I18N_DICT_STORE_KEY'
const I18N_CURRENT_LANG_KEY = 'I18N_CURRENT_LANG_KEY'
const I18N_LAST_UPDATE_KEY = 'I18N_LAST_UPDATE_KEY'

interface I18nEntry {
  [key: string]: string
}

interface I18nDictionary {
  [lang: string]: I18nEntry
}

const generateDictionary = (): I18nDictionary => {
  const storingDict = wx.getStorageSync(I18N_DICT_STORE_KEY)
  if (!storingDict) {
    return localDict
  } else {
    return JSON.parse(storingDict)
  }
}

export const i18nEntryDictionary = generateDictionary()
// fix:
let currentLanguage = wx.getStorageSync(I18N_CURRENT_LANG_KEY) || (wx.getSystemInfoSync().language === 'zh_CN' ? 'zh_CN' : 'en')
// let currentLanguage = 'zh_CN'

/** 更新本地辞典 */
export const updateI18nDictionary = (): Promise<number> => {
  return new Promise((resolve, reject) => {
    const now = new Date()
    // wx.getStorageSync(I18N_LAST_UPDATE_KEY)有值的时候取值，没有值的时候传null
    const updateKey = wx.getStorageSync(I18N_LAST_UPDATE_KEY)
    const updatedSince = updateKey ? new Date(updateKey) : null

    apiClient.commonI18nEntries({ input: { updatedSince } })
      .then((res) => {
        res.commonI18nEntries.forEach((e) => {
          i18nEntryDictionary[e.language][e.key] = e.value
        })
        wx.setStorageSync(I18N_DICT_STORE_KEY, JSON.stringify(i18nEntryDictionary))
        wx.setStorageSync(I18N_LAST_UPDATE_KEY, now)
        resolve(res.commonI18nEntries.length)
      })
      .catch((err) => reject(err))
  })
}

/** 设置当前选择的国际化语言 */
export const setI18nLanguage = (lang: string) => {
  // fix:
  currentLanguage = lang
  // currentLanguage = 'zh_CN'
  wx.setStorageSync(I18N_CURRENT_LANG_KEY, currentLanguage)
}

/** 获取当前的国际化语言 */
export const getI18nLanguage = (): string => {
  return currentLanguage
}

/** 获取词条当前语言的值 */
export const getI18nEntryValue = (key: string, ...args: string[]): string => {
  if (args.length > 0) {
    let value = i18nEntryDictionary?.[currentLanguage]?.[key] || key.split('-')[1]
    args.forEach((arg, idx) => {
      arg = arg.replace('..', ',')
      value = value.replace(`{${idx + 1}}`, arg)
    })
    return value
  } else {
    return i18nEntryDictionary?.[currentLanguage]?.[key] || key.split('-')[1]
  }
}

/** 获取当前语言的词典 */
export const getI18nDict = (): I18nEntry => {
  return i18nEntryDictionary[currentLanguage]
}

export const checkI18nDictExistence = (): boolean => {
  const lastUpdated = wx.getStorageSync(I18N_LAST_UPDATE_KEY)
  return !!lastUpdated
}

const exportItems = {
  updateI18nDictionary,
  setI18nLanguage,
  getI18nLanguage,
  getI18nEntryValue,
  getI18nDict,
  checkI18nDictExistence,
  tr,
}

export default exportItems