import network from '../network'

// 查找校友信息
const findAlumni = ({ params }) => {
  let data = {}
  data.query = `
    query ($query: FindAlumniInput!) {
      findAlumni(query: $query) {
        data {
          alumniId
          campusInfo {
            name
            enrollmentType
            enrollmentYear
            department {
              id
              name
              start
              end
            }
          }
          allowPublicContactAndJob
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
          relationship
          claimed
          blocked
        }
        more
      }
    }`
  data.variables = {
    query: params.query,
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

// 发送好友申请
const sendFriendRequest = ({ params }) => {
  let data = {}
  data.query = `
    mutation ($alumniId: Int!) {
      sendFriendRequest(alumniId: $alumniId)
    }`
  data.variables = {
    alumniId: params.alumniId,
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

// 同意好友申请
const approveFriendRequest = ({ params }) => {
  let data = {}
  data.query = `
    mutation ($alumniId: Int!) {
      approveFriendRequest(alumniId: $alumniId)
    }`
  data.variables = {
    alumniId: params.alumniId,
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

// 拒绝好友申请
const rejectFriendRequest = ({ params }) => {
  let data = {}
  data.query = `
    mutation ($alumniId: Int!) {
      rejectFriendRequest(alumniId: $alumniId)
    }`
  data.variables = {
    alumniId: params.alumniId,
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

// 删除好友
const removeFriend = ({ params }) => {
  let data = {}
  data.query = `
    mutation ($alumniId: Int!) {
      removeFriend(alumniId: $alumniId)
    }`
  data.variables = {
    alumniId: params.alumniId,
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

// 获取校友
const getFriends = ({ params }) => {
  let data = {}
  data.query = `{
    me {
      friends {
        alumniId
        campusInfo {
          name
          enrollmentType
          enrollmentYear
          department {
            id
            name
            start
            end
          }
        }
        allowPublicContactAndJob
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
        relationship
        claimed
        blocked
      }
      iWantToBeTheirFriends {
        alumniId
        campusInfo {
          name
          enrollmentType
          enrollmentYear
          department {
            id
            name
            start
            end
          }
        }
        allowPublicContactAndJob
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
        relationship
        claimed
        blocked
      }
      theyWantToBeMyFriends {
        alumniId
        campusInfo {
          name
          enrollmentType
          enrollmentYear
          department {
            id
            name
            start
            end
          }
        }
        allowPublicContactAndJob
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
        relationship
        claimed
        blocked
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

// 获取同学
const getMyClassmates = ({ params }) => {
  let data = {}
  data.query = `{
    me {
      matchedCampusIdentity
      unmatchedCampusIdentity
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
        notFinal
        certified
        allowEndorse
        endorsementCode
        endorsedNumber
        allowOnline
        supplementaryComments
        supplementaryImageIds
        reviewComments
        myClassmates {
          id: alumniId
          enrollments: campusInfo {
            name
            enrollmentType
            enrollmentYear
            department {
              id
              name
              start
              end
            }
          }
          relationship
          claimed
        }
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

module.exports = {
  findAlumni,
  sendFriendRequest,
  approveFriendRequest,
  rejectFriendRequest,
  removeFriend,
  getFriends,
  getMyClassmates,
}
