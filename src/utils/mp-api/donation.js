import network from '../network'

// 获取回馈母校项目列表
const getDonationProjects = ({ params }) => {
  let data = {}
  data.query = `
    {
      me {
        contact {
          email
        }
      }
      donationProjectsV2 {
        type
        donationProjectId
        category
        name
        description
        defaultAmount
        maxAmount
        minAmount
      }
      subscriptionProjectsV2 {
        type
        donationProjectId
        category
        name
        description
        defaultAmount
        maxAmount
        minAmount
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

// 获取我的回馈母校记录
const getMyDonation = ({ params }) => {
  let data = {}
  data.query = `
    query($limit: Int, $offset: Int){
      me {
        donationsV2(limit: $limit, offset: $offset) {
          id
          type
          created
          project {
            donationProjectId
            category
            name
          }
          amount
          allowPublic
          needInvoice
          invoiceV2 {
            custType
            custName
            custTaxNo
            invoiceEmail
          }
          invoicePdfAddress
          invoiceStatus
          mailingAddressV2 {
            userName
            postalCode
            provinceName
            cityName
            countyName
            detailInfo
            nationalCode
            telNumber
          }
          comments
          thuAlumniTradeNo
          tsinghuaPayTradeNo
          success
          certificateId
        }
      }
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

// 获取我的期刊订阅记录
const getMyJournal = ({ params }) => {
  let data = {}
  data.query = `
    {
      me {
        subscriptionsV2 {
          type
          created
          project {
            donationProjectId
            category
            name
          }
          amount
          allowPublic
          needInvoice
          invoiceV2 {
            custType
            custName
            custTaxNo
            invoiceEmail
          }
          invoicePdfAddress
          invoiceStatus
          mailingAddressV2 {
            userName
            postalCode
            provinceName
            cityName
            countyName
            detailInfo
            nationalCode
            telNumber
          }
          comments
          thuAlumniTradeNo
          tsinghuaPayTradeNo
          success
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

// 创建回馈母校订单
const createDonationOrder = ({ params }) => {
  let data = {}
  data.query = `
    mutation ($donation: CreateDonationOrderInputV2!, $invoice: InvoiceInput, $mailingAddress: MailingAddressInput) {
      createDonationOrderV2(donation: $donation, invoice: $invoice, mailingAddress: $mailingAddress) {
        thuAlumniTradeNo
        tsinghuaPayExtraData
      }
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

// 获取回馈母校订单状态
const getDonationOrderStatus = ({ params }) => {
  let data = {}
  data.query = `
    mutation ($thuAlumniTradeNo: String!) {
      getDonationOrderStatus(thuAlumniTradeNo: $thuAlumniTradeNo)
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

// 获取回馈母校证书
const getCertificate = ({ params: variables }) => {
  const params = {
    query: `
      query ($id: Int!) {
        certificate(id: $id) {
          id
          name
          readed
          backgroundImageId
          width
          height
          maskImageId
          qrUrl
          qrPos {
            width
            left
            top
          }
          created
        }
      }
    `,
    variables,
  }
  return network.request({ params })
}

const myCertifications = ({ params: variables }) => {
  const params = {
    query: `
      query () {
        myCertifications() {
          id
          name
          readed
          backgroundImageId
          width
          height
          maskImageId
          qrUrl
          qrPos {
            width
            left
            top
          }
          created
        }
        myFestivalCards() {
          id
          name
          readed
          backgroundImageId
          width
          height
          maskImageId
          qrUrl
          qrPos {
            width
            left
            top
          }
          created
        }
      }
    `,
    variables,
  }
  return network.request({ params })
}

// 验证获取回馈母校证书
const checkCertificate = ({ params: variables }) => {
  const params = {
    query: `
      query ($query: CheckCertificateInput!) {
        checkCertificate(query: $query) {
          alumni {
            name
          }
          info {
            key
            val
          }
          name
        }
      }
    `,
    variables,
  }
  return network.request({ params })
}

module.exports = {
  getDonationProjects,
  getMyDonation,
  getMyJournal,
  createDonationOrder,
  getDonationOrderStatus,
  getCertificate,
  checkCertificate,
  myCertifications,
}
