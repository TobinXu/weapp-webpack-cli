import api from './api'
import i18n from './i18n'
const app = getApp()

// 同意好友申请
export const approveFriendRequest = async (alumniId: number, callback?: CallableFunction) => {
  return api
    .approveFriendRequest({
      params: {
        alumniId,
      },
    })
    .then((res: any) => {
      if (res.data.data.approveFriendRequest) {
        callback?.()
      } else {
        wx.showToast({
          title: i18n.tr(app.globalData, '提交失败，请重试'),
          icon: 'none',
        })
      }
    })
    .catch((error: any) => {
      wx.showToast({
        title: error,
        icon: 'none',
      })
    })
}

// 拒绝好友申请
export const rejectFriendRequest = async (alumniId: number, callback?: CallableFunction) => {
  return api
    .rejectFriendRequest({
      params: {
        alumniId,
      },
    })
    .then((res: any) => {
      if (res.data.data.rejectFriendRequest) {
        callback?.()
      } else {
        wx.showToast({
          title: i18n.tr(app.globalData, '提交失败，请重试'),
          icon: 'none',
        })
      }
    })
    .catch((error: any) => {
      wx.showToast({
        title: error,
        icon: 'none',
      })
    })
}