import network from '../network'

// 获取校友邮箱信息
const getAlumniEmail = ({ params }) => {
  let data = {}
  data.query = `
    {
      me {
        hostingEmail {
          userName
          source
          enabled
        }
        alumniEmail {
          userName
          source
          enabled
        }
        alumniEmailUsernameRules {
          regex
          candidates
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

// 检查邮箱名
const alumniEmailAccountAvailable = ({ params }) => {
  let data = {}
  data.query = `
    query ($userName: String!) {
      alumniEmailAccountAvailable(userName: $userName)
    }
  `
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

// 开通校友邮箱
const createAlumniEmailAccount = ({ params }) => {
  let data = {}
  data.query = `
    mutation ($userName: String!) {
      createAlumniEmailAccount(userName: $userName)
    }
  `
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

// 绑定校友邮箱，返回验证码
const bindAlumniEmailSendCode = ({ params }) => {
  let data = {}
  data.query = `
    mutation ($userName: String!) {
      bindAlumniEmailSendCode(userName: $userName)
    }
  `
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

// 绑定校友邮箱
const bindAlumniEmail = ({ params }) => {
  let data = {}
  data.query = `
    mutation ($userName: String!, $code: String!) {
      bindAlumniEmail(userName: $userName, code: $code)
    }
  `
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

// 重置密码
const alumniEmailResetPassword = ({ params }) => {
  let data = {}
  data.query = `
    mutation ($userName: String!) {
      alumniEmailResetPassword(userName: $userName)
    }
  `
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

// 设为启用
const alumniEmailEnable = ({ params }) => {
  let data = {}
  data.query = `
    mutation ($userName: String!) {
      alumniEmailEnable(userName: $userName)
    }
  `
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

// 设为停用
const alumniEmailDisable = ({ params }) => {
  let data = {}
  data.query = `
    mutation ($userName: String!) {
      alumniEmailDisable(userName: $userName)
    }
  `
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

/** 绑定某个邮箱 */
const reserveAlumniEmail = (params) => {
  const doc = `
  mutation ($userName: String!) {
    reserveOneEmail(userName: $userName)
  }
`
  return network.gqlRequestWrapper(doc, params)
}

module.exports = {
  getAlumniEmail,
  alumniEmailAccountAvailable,
  createAlumniEmailAccount,
  bindAlumniEmailSendCode,
  bindAlumniEmail,
  alumniEmailResetPassword,
  alumniEmailEnable,
  alumniEmailDisable,
  reserveAlumniEmail,
}
