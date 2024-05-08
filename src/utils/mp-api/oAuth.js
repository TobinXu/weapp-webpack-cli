import network from '../network'

// 获取第三方登录信息
const oAuthRequest = ({ params }) => {
  let data = {}
  data.query = `
    query ($ticket: String!) {
      oAuthRequest(ticket: $ticket) {
        oAuthPartner {
          appId
          name
          usage
          description
          scope {
            alumnus
            name
            campusIdentity
            job
            contact
          }
        }
        alreadyApproved
      }
    }`
  data.variables = {
    ...params,
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

// 允许第三方登录请求
const oAuthApprove = ({ params }) => {
  let data = {}
  data.query = `
    mutation ($ticket: String!) {
      oAuthApprove(ticket: $ticket)
    }`
  data.variables = {
    ...params,
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

// 拒绝第三方登录请求
const oAuthReject = ({ params }) => {
  let data = {}
  data.query = `
    mutation ($ticket: String!) {
      oAuthReject(ticket: $ticket)
    }`
  data.variables = {
    ...params,
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

// 换取主动授权ticket
const oAuthPreAuthorize = ({ params }) => {
  let data = {}
  data.query = `
    mutation ($appId: String!) {
      oAuthPreAuthorize(appId: $appId)
    }`
  data.variables = {
    ...params,
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

// 确认预授权ticket
const oAuthConfirmPreAuth = ({ params }) => {
  let data = {}
  data.query = `
    mutation ($appId: String!, $ticket: String!) {
      oAuthConfirmPreAuth(appId: $appId, ticket: $ticket)
    }`
  data.variables = {
    ...params,
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

// 根据AppID获取第三方
const oAuthPartnerByAppId = ({ params }) => {
  let data = {}
  data.query = `
    query ($appId: String!) {
      oAuthPartner(appId: $appId) {
        appId
        name
        usage
        description
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
      }
    }`
  data.variables = {
    ...params,
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
  oAuthRequest,
  oAuthApprove,
  oAuthReject,
  oAuthPreAuthorize,
  oAuthPartnerByAppId,
  oAuthConfirmPreAuth,
}
