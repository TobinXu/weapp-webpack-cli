const {requestUrl} = wx.getExtConfigSync()

export const delayNavigateBack = (delay?: number) => {
  setTimeout(() => {
    wx.navigateBack()
  }, delay || 1500)
}

export const delayFunc = (func: () => void, delay?:number) => {
  setTimeout(() => {
    func()
  }, delay || 1500)
}

export const toast = {
  success: (msg: string) => {
    wx.showToast({
      title: msg,
      // 默认就是 success
      // icon: 'success',
    })
  },
  info: (msg: string) => {
    wx.showToast({
      title: msg,
      icon: 'none'
    })
  },
  error: (msg: string) => {
    wx.showToast({
      title: msg,
      icon: 'error',
    })
  },
  loading: (msg: string) => {
    wx.showToast({
      title: msg,
      icon: 'loading'
    })
  }
}

export const navigateToAgreement = () => {
  const agreementUrl = `${requestUrl}/file/agreement`
  wx.navigateTo({
    url: '/pages/webview/index?url=' + agreementUrl
  })
}

export const promisifyRequestSubscribeMessage = (tmplIds: string[]) => {
  return new Promise((resolve, reject) => {
    wx.requestSubscribeMessage({
      tmplIds,
      success: (res) => {
        resolve(res)
      },
      fail:(err) => {
        reject(err)
      }
    })
  })
}

/** 格式化手机号 */
export const formatPhoneNumber = (
  mobile?: string,
  separator?: string | any
): string => {
  if (!mobile) {
    return '-'
  }
  if (mobile.includes('.')) {
    const parts = mobile.split('.')
    if (parts[0] === '+86') {
      return parts[1]
    } else {
      return parts.join(typeof separator === 'string' ? separator : ' ')
    }
  } else {
    return mobile
  }
}

/**
 * 手机隐私处理
 */
export const phoneNumberPrivacy = (number: string) => {
    if (!number) return '-'
    const maskedNumber = number.replace(/^(\d{1})\d{9}(\d{1})$/, "$1*********$2");
    return maskedNumber
}