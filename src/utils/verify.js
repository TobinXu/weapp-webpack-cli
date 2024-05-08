// 微信人脸识别认证
const verifyViaFace = ({ params }) => {
  return new Promise((resolve, reject) => {
    wx.checkIsSupportFacialRecognition({
      checkAliveType: 2,
      success(res) {
        wx.startFacialRecognitionVerify({
          name: params.legalName,
          idCardNumber: params.documentNumberRaw,
          checkAliveType: 2,
          success(res) {
            resolve(res)
          },
          fail(err) {
            console.error(err)
            reject(err)
          },
        })
      },
      fail(err) {
        console.error(err)
        reject(err)
      },
    })
  })
}

// 微信支付实名认证
const verifyViaWechatPay = ({ params }) => {
  return new Promise((resolve, reject) => {
    wx.navigateToMiniProgram({
      appId: params.authAppId,
      path: params.authUrl,
      success(res) {
        resolve(res)
      },
      fail(err) {
        console.error(err)
        reject(err)
      },
    })
  })
}

// 微信城市服务实名认证
const verifyViaCity = ({ params }) => {
  return new Promise((resolve, reject) => {
    wx.navigateToMiniProgram({
      appId: 'wx308bd2aeb83d3345',
      path: 'subPages/city/wxpay-auth/main',
      success(res) {
        resolve(res)
      },
      fail(err) {
        console.error(err)
        reject(err)
      },
    })
  })
}

module.exports = {
  verifyViaFace,
  verifyViaWechatPay,
  verifyViaCity,
}
