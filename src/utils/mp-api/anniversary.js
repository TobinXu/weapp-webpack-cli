import network from '../network'

// 获取校庆信息
const getAnniversary = ({ params }) => {
  let data = {}
  data.query = `{
    me {
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

// 获取虚拟校园key
const getXnxyKey = ({ params }) => {
  let data = {}
  data.query = `{
    me {
      xnxyKey
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

// 云报道
const annivCheckInSubmit = ({ params }) => {
  let data = {}
  data.query = `
    mutation ($annivId: Int!, $comment: String!) {
      annivCheckInSubmit(annivId: $annivId, comment: $comment) {
        time
        sequence
        comment
        selfieImageId
        selfieUpdated
      }
    }`
  data.variables = {
    annivId: params.annivId,
    comment: params.comment,
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

// 更新校庆头像
const annivUpdateSelfie = ({ params }) => {
  let data = {}
  data.query = `
    mutation ($annivId: Int!, $imageId: String!) {
      annivUpdateSelfie(annivId: $annivId, imageId: $imageId)
    }`
  data.variables = {
    annivId: params.annivId,
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

module.exports = {
  getAnniversary,
  annivCheckInSubmit,
  annivUpdateSelfie,
  getXnxyKey,
}
