import network from '../network'

// 获取账户基础信息及院系列表
const getAccountInfo = ({ params }) => {
  let data = {}
  data.query = `{
    me {
      theyWantToBeMyFriends {
        alumniId
        relationship
      }
      matchedCampusIdentity
      unmatchedCampusIdentity
      phoneAndLegalIdentitySubmitted
      selfieImageId
      legalIdentity {
        legalName
      }
      contact {
        phoneNumber
        phoneCountryCode
        email
        residence
      }
      job {
        industry
        company
        post
      }
      activation {
        lastActivation
        activated
      }
      blocked
    }
    annivs {
      id
      subject
      year
      month
      cardImageId
      indexImageId
      indexColor
      time {
        start
        end
        pretty
        tooEarly
        tooLate
      }
      myCheckIn {
        time
        sequence
        comment
        selfieImageId
        selfieUpdated
      }
    }
    oAuthPartners {
      appId
      name
      description
      usage
      scope {
        alumnus
        name
        campusIdentity
        job
        contact
      }
      wxNavigateToMiniProgramParams {
        appId
        path
        envVersion
      }
      alreadyApproved
    }
    moduleSwitch {
      event
      email
      donation
      journal
    }
  }`
  return new Promise((resolve, reject) => {
    network
      .request({
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

// 获取院系列表
const getDepartments = ({ params }) => {
  let data = {}
  data.query = `{
    departments {
      id
      name
      start
      end
    }
  }`
  return new Promise((resolve, reject) => {
    network
      .request({
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

// 获取个人信息
const getMyInfo = ({ params }) => {
  let data = {}
  data.query = `{
    me {
      legalIdentity {
        legalName
        documentType
        documentNumberMasked
      }
      contact {
        phoneNumber
        phoneCountryCode
        email
        residence
        residenceA
        residenceB
        residenceC
        residenceD
        residenceE
      }
      selfieImageId
      campusIdentity {
        id
        enrollmentType
        enrollmentYear
        department {
          id
          name
          start
          end
        }
        campusId
        campusPhotos {
          title
          imageId
        }
        notFinal
        certified
        allowEndorse
        endorsementCode
        endorsedNumber
        allowOnline
        supplementaryComments
        supplementaryImageIds
        reviewComments
      }
      matchedCampusIdentity
      job {
        industry
        company
        post
      }
      privacySettings {
        allowPublicContactAndJob
      }
    }
  }`
  return new Promise((resolve, reject) => {
    network
      .request({
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

// 获取个人信息
const getMyRegistration = ({ params }) => {
  let data = {}
  data.query = `{
    me {
      matchedCampusIdentity
      phoneAndLegalIdentitySubmitted
    }
  }`
  return new Promise((resolve, reject) => {
    network
      .request({
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

// 获取学籍信息
const getCampusInfo = ({ params }) => {
  let data = {}
  data.query = `{
    me {
      matchedCampusIdentity
      unmatchedCampusIdentity
      selfieImageId
      legalIdentity {
        legalName
        documentType
      }
      campusIdentity {
        id
        enrollmentType
        enrollmentYear
        department {
          id
          name
          start
          end
        }
        campusId
        campusPhotos {
          title
          imageId
        }
        notFinal
        certified
        allowEndorse
        endorsementCode
        endorsedNumber
        allowOnline
        supplementaryComments
        supplementaryImageIds
        reviewComments
      }
    }
    globalFlags {
      campusIdentitySubscribeTemplateId
    }
  }`
  return new Promise((resolve, reject) => {
    network
      .request({
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

// 获取校友卡信息
const getAlumniCardInfo = ({ params }) => {
  let data = {}
  data.query = `{
    me {
      matchedCampusIdentity
      unmatchedCampusIdentity
      selfieImageId
      legalIdentity {
        legalName
        documentType
      }
      campusIdentity {
        id
        enrollmentType
        enrollmentYear
        department {
          id
          name
          start
          end
        }
        certified
      }
      blocked
    }
    annivs {
      id
      subject
      year
      month
      cardImageId
      indexImageId
      indexColor
      time {
        start
        end
        pretty
        tooEarly
        tooLate
      }
      myCheckIn {
        time
        sequence
        comment
        selfieImageId
        selfieUpdated
      }
    }
    moduleSwitch {
      alumniCardNotice
    }
  }`
  return new Promise((resolve, reject) => {
    network
      .request({
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

// 获取校友卡秘钥
const getAlumniCardSecret = ({ params }) => {
  let data = {}
  data.query = `
    mutation {
      getAlumniCardSecret()
    }`

  return new Promise((resolve, reject) => {
    network
      .request({
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

// 获取领取校友卡积分
const getAlumniCardPoints = ({ params }) => {
  let data = {}
  data.query = `
    mutation {
      getAlumniCardPoints()
    }`

  return new Promise((resolve, reject) => {
    network
      .request({
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

// 获取校友卡微信卡包入口参数
const getAlumniWechatCard = ({ params }) => {
  let data = {}
  data.query = `
    mutation (){
      getAlumniWechatCard() {
        cardId
        cardExt
      }
    }`

  return new Promise((resolve, reject) => {
    network
      .request({
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

// 注册-更新手机
const updatePhone = ({ params }) => {
  let data = {}
  data.query = `
    mutation ($phone: PhoneInput!) {
      updatePhone(phone: $phone)
    }`
  data.variables = {
    phone: params.phone,
  }

  return new Promise((resolve, reject) => {
    network
      .request({
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

// 注册-更新手机使用微信OpenData
const updatePhoneViaOpenData = ({ params }) => {
  let data = {}
  data.query = `
    mutation ($encryptedData: String!, $iv: String!) {
      updatePhoneViaOpenData(encryptedData: $encryptedData, iv: $iv)
    }`
  data.variables = {
    encryptedData: params.encryptedData,
    iv: params.iv,
  }

  return new Promise((resolve, reject) => {
    network
      .request({
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

// 注册[身份证]-更新实名信息，通过人脸验身
const updateLegalIdentityViaFace = ({ params }) => {
  let data = {}
  data.query = `
    mutation ($legalIdentity: LegalIdentityInput!, $resultToken: String!){
      updateLegalIdentityViaFace(legalIdentity: $legalIdentity, resultToken: $resultToken) {
        campusIdentityRequired
      }
    }`
  data.variables = {
    legalIdentity: params.legalIdentity,
    resultToken: params.resultToken,
  }

  return new Promise((resolve, reject) => {
    network
      .request({
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

// 注册[身份证]-更新实名信息，通过微信支付实名
const updateLegalIdentityViaWechatPay = ({ params }) => {
  let data = {}
  data.query = `
    mutation ($authParam: String!) {
      updateLegalIdentityViaWechatPay(authParam: $authParam) {
        campusIdentityRequired
      }
    }`
  data.variables = {
    authParam: params.legalIdentity,
  }

  return new Promise((resolve, reject) => {
    network
      .request({
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

// 注册[身份证]-更新实名信息，通过微信城市服务实名
const updateLegalIdentityViaCity = ({ params }) => {
  let data = {}
  data.query = `
    mutation ($legalIdentity: LegalIdentityViaCityInput!) {
      updateLegalIdentityViaCity(legalIdentity: $legalIdentity) {
        campusIdentityRequired
      }
    }`
  data.variables = {
    legalIdentity: params.legalIdentity,
  }

  return new Promise((resolve, reject) => {
    network
      .request({
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

// 注册-更新实名信息
const updateLegalIdentity = ({ params }) => {
  let data = {}
  data.query = `
    mutation ($legalIdentity: LegalIdentityInput!) {
      updateLegalIdentity(legalIdentity: $legalIdentity) {
        campusIdentityRequired
      }
    }`
  data.variables = {
    legalIdentity: params.legalIdentity,
  }

  return new Promise((resolve, reject) => {
    network
      .request({
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

// 获取微信支付实名参数
const getWechatPayAuthParam = ({ params }) => {
  let data = {}
  data.query = `
    mutation (){
      getWechatPayAuthParam() {
        authAppId,
        authUrl,
        authParam
      }
    }`

  return new Promise((resolve, reject) => {
    network
      .request({
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

// 获取手机验证码
const getCaptcha = ({ params }) => {
  let data = {}
  data.query = `
    mutation ($phoneNumber: String!, $phoneCountryCode: String!) {
      getCaptcha(phoneNumber: $phoneNumber, phoneCountryCode: $phoneCountryCode)
    }`
  data.variables = {
    phoneNumber: params.phoneNumber,
    phoneCountryCode: params.phoneCountryCode,
  }

  return new Promise((resolve, reject) => {
    network
      .request({
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

// 更新学籍信息
const updateCampusIdentity = ({ params }) => {
  let data = {}
  data.query = `
    mutation ($campusIdentity: CampusIdentityInput!) {
      updateCampusIdentity(campusIdentity: $campusIdentity)
    }`
  data.variables = {
    campusIdentity: params.campusIdentity,
  }

  return new Promise((resolve, reject) => {
    network
      .request({
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

// 删除未认证学籍
const removeUnmatchedCampusIdentity = ({ params }) => {
  let data = {}
  data.query = `
    mutation ($unmatchedCampusIdentityId: Int!) {
      removeUnmatchedCampusIdentity(unmatchedCampusIdentityId: $unmatchedCampusIdentityId)
    }`
  data.variables = {
    unmatchedCampusIdentityId: params.unmatchedCampusIdentityId,
  }

  return new Promise((resolve, reject) => {
    network
      .request({
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

// 更新学籍在线认证信息
const updateCampusIdentitySupplementary = ({ params }) => {
  let data = {}
  data.query = `
    mutation ($unmatchedCampusIdentityId: Int!, $formId: String!, $text: String!, $imageIds: [String!]!) {
      updateCampusIdentitySupplementary(unmatchedCampusIdentityId: $unmatchedCampusIdentityId, formId: $formId, text: $text, imageIds: $imageIds)
    }`
  data.variables = {
    unmatchedCampusIdentityId: params.unmatchedCampusIdentityId,
    formId: params.formId,
    text: params.text,
    imageIds: params.imageIds,
  }

  return new Promise((resolve, reject) => {
    network
      .request({
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

// 更新自拍图片链接
const uploadSelfie = ({ params }) => {
  let data = {}
  data.query = `
    mutation ($imageId: String!) {
      uploadSelfie(imageId: $imageId)
    }`
  data.variables = {
    imageId: params.imageId,
  }

  return new Promise((resolve, reject) => {
    network
      .request({
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

// 更新我的信息
const updateMyInfo = ({ params }) => {
  let data = {}
  data.query = `
    mutation ($contact: ContactInput!) {
      updateContact(contact: $contact)
    }`
  data.variables = {
    contact: params.contact,
    job: params.job,
    privacySettings: params.privacySettings,
  }

  return new Promise((resolve, reject) => {
    network
      .request({
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

// 获取邀请认证码包含的个人信息
const getInfoByEndorsementCode = ({ params }) => {
  let data = {}
  data.query = `
    query ($endorsementCode: String!) {
      me {
        getInfoByEndorsementCode(endorsementCode: $endorsementCode) {
          legalName
          enrollmentType
          enrollmentYear
          department {
            id
            name
            start
            end
          }
          endorsedNumber
          sameYearAndDepartment
          samePerson
          alreadyEndorsed
        }
        matchedCampusIdentity
        unmatchedCampusIdentity
      }
    }`
  data.variables = {
    endorsementCode: params.endorsementCode,
  }

  return new Promise((resolve, reject) => {
    network
      .request({
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

// 邀请认证
const endorse = ({ params }) => {
  let data = {}
  data.query = `
    mutation ($endorsementCode: String!) {
      endorse(endorsementCode: $endorsementCode)
    }`
  data.variables = {
    endorsementCode: params.endorsementCode,
  }

  return new Promise((resolve, reject) => {
    network
      .request({
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

// 上传图片
const uploadImage = ({ params }) => {
  const data = {
    name: 'image',
    filePath: params.filePath,
    formData: {
      runFaceDetection: params.runFaceDetection,
    },
  }

  return new Promise((resolve, reject) => {
    network
      .upload({
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

// 获取图片地址
const getImage = imageId => {
  return network.getImage(imageId)
}

// 获取图片地址前缀
const getImageUrl = imageId => {
  return network.getImageUrl()
}

// 获取校友组织
const getAssociations = ({ params }) => {
  let data = {}
  data.query = `{
    departmentAssociations {
      name
      contact
      phone
      email
      approved
    }
    domesticRegionalAssociations {
      name
      contact
      phone
      email
      approved
    }
    overseasRegionalAssociations {
      name
      contact
      phone
      email
    }
    interestAssociations {
      name
      contact
      phone
      email
    }
  }`
  return new Promise((resolve, reject) => {
    network
      .request({
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

const getAssociationTypes = ({ params }) => {
  let data = {}
  data.query = `{
    associationTypes {
      id
      name
    }
  }`
  return new Promise((resolve, reject) => {
    network
      .request({
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

const getAssociation = ({ params }) => {
  let data = {}
  data.variables = {
    typeId: params.typeId
  }
  data.query = `query ($typeId: Int!) {
    associations(typeId: $typeId) {
      name
      phone
      contact
      email
    }
  }`
  return new Promise((resolve, reject) => {
    network
      .request({
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

// 激活
const activate = ({ params }) => {
  let data = {}
  data.query = `
    mutation () {
      activate()
    }`

  return new Promise((resolve, reject) => {
    network
      .request({
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

// 获取个人积分
const getMyPoints = ({ params }) => {
  let data = {}
  data.query = `
    {
      me {
        points
        pointChanges {
          created
          deltaAmount
          reason
        }
      }
    }
  `
  return new Promise((resolve, reject) => {
    network
      .request({
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
  getAccountInfo,
  getDepartments,
  getMyInfo,
  getCampusInfo,
  getAlumniCardInfo,
  getAlumniCardSecret,
  getAlumniCardPoints,
  getAlumniWechatCard,
  updatePhone,
  updatePhoneViaOpenData,
  updateLegalIdentityViaFace,
  updateLegalIdentityViaWechatPay,
  updateLegalIdentityViaCity,
  updateLegalIdentity,
  getWechatPayAuthParam,
  getCaptcha,
  updateCampusIdentity,
  removeUnmatchedCampusIdentity,
  updateCampusIdentitySupplementary,
  uploadSelfie,
  updateMyInfo,
  getInfoByEndorsementCode,
  endorse,
  uploadImage,
  getImage,
  getImageUrl,
  getAssociations,
  getAssociationTypes,
  getAssociation,
  activate,
  getMyPoints,
  getMyRegistration,
}
