import { paths } from './schema'

let host = 'https://alumni.thucampus.com/mp'
let baseHeader = {}
export const setHost = (h: string) => {
  host = h
}

export const setHeader = (h: Object) => {
  baseHeader = h
}

let login = () => {
  return new Promise((resolve, reject) => {
    resolve('')
  })
}
export const setLoginPromise = p => {
  login = p
}

let defaultReqHeaderInterceptor = res => {
  return res
}
export const setReqHeaderInterceptor = p => {
  defaultReqHeaderInterceptor = p
}

let defaultRespInterceptor = res => {}
export const setRespInterceptor = p => {
  defaultRespInterceptor = p
}

const warpResolver = (resolve, reject, func) => {
  return res => {
    defaultRespInterceptor(res)
    if (res.statusCode >= 200 && res.statusCode < 300 && !res?.data?.errors) {
      resolve(res?.data?.data)
    }
    if (res?.data?.errors) {
      if (Math.floor(res?.data?.errors[0].extensions.code / 100) === 401) {
        login()
          .then(() => {
            func(warpResolver(resolve, reject, func), reject)
          })
          .catch(err => {
            reject(err)
          })
      } else {
        reject(res?.data?.errors[0]?.message)
      }
    }
  }
}

export const apiClient = {
  validateEntryReservation: ({
    data,
  }: {
    data?: paths['/v2/api/AlumnusUser/CheckUserEnrolledInfo/test']['post']['requestBody'] extends infer Body
      ? Body extends undefined
        ? undefined
        : Body extends { content: infer Content }
          ? Content extends { 'application/json': infer JSONContent }
            ? JSONContent
            : never
          : never
      : never
  }): Promise<
    paths['/v2/api/AlumnusUser/CheckUserEnrolledInfo/test']['post']['responses']['200']['content']['application/json']
  > => {
    return new Promise((resolve, reject) => {
      let recursiveCount = 0
      const func = (successFunc, errorFunc) => {
        recursiveCount++
        if (recursiveCount > 3) {
          errorFunc('网络异常')
          return
        }
        const token = wx.getStorageSync('AlumniToken')
        let header = JSON.parse(JSON.stringify(baseHeader))
        if (token) {
          header = Object.assign(header, {
            Authorization: 'Bearer ' + token,
          })
        }
        header = defaultReqHeaderInterceptor(header)

        wx.request({
          method: 'POST',
          header: header,
          url: host + '/v2/api/AlumnusUser/CheckUserEnrolledInfo/test',
          data: data ? data : null,
          success: res => {
            successFunc(res)
          },
          error: e => {
            errorFunc(e)
          },
        })
      }
      func(warpResolver(resolve, reject, func), reject)
    })
  },
  alumnusDetailForAdmin: ({
    data,
  }: {
    data?: paths['/v2/api/alumnus']['get']['requestBody'] extends infer Body
      ? Body extends undefined
        ? undefined
        : Body extends { content: infer Content }
          ? Content extends { 'application/json': infer JSONContent }
            ? JSONContent
            : never
          : never
      : never
  }): Promise<
    paths['/v2/api/alumnus']['get']['responses']['200']['content']['application/json']
  > => {
    return new Promise((resolve, reject) => {
      let recursiveCount = 0
      const func = (successFunc, errorFunc) => {
        recursiveCount++
        if (recursiveCount > 3) {
          errorFunc('网络异常')
          return
        }
        const token = wx.getStorageSync('AlumniToken')
        let header = JSON.parse(JSON.stringify(baseHeader))
        if (token) {
          header = Object.assign(header, {
            Authorization: 'Bearer ' + token,
          })
        }
        header = defaultReqHeaderInterceptor(header)

        wx.request({
          method: 'GET',
          header: header,
          url: host + '/v2/api/alumnus',
          data: data
            ? {
                'variables': JSON.stringify(data),
              }
            : null,
          success: res => {
            successFunc(res)
          },
          error: e => {
            errorFunc(e)
          },
        })
      }
      func(warpResolver(resolve, reject, func), reject)
    })
  },
  findMyClassmates: ({
    data,
  }: {
    data?: paths['/v2/api/alumnus/classmates']['get']['requestBody'] extends infer Body
      ? Body extends undefined
        ? undefined
        : Body extends { content: infer Content }
          ? Content extends { 'application/json': infer JSONContent }
            ? JSONContent
            : never
          : never
      : never
  }): Promise<
    paths['/v2/api/alumnus/classmates']['get']['responses']['200']['content']['application/json']
  > => {
    return new Promise((resolve, reject) => {
      let recursiveCount = 0
      const func = (successFunc, errorFunc) => {
        recursiveCount++
        if (recursiveCount > 3) {
          errorFunc('网络异常')
          return
        }
        const token = wx.getStorageSync('AlumniToken')
        let header = JSON.parse(JSON.stringify(baseHeader))
        if (token) {
          header = Object.assign(header, {
            Authorization: 'Bearer ' + token,
          })
        }
        header = defaultReqHeaderInterceptor(header)

        wx.request({
          method: 'GET',
          header: header,
          url: host + '/v2/api/alumnus/classmates',
          data: data
            ? {
                'variables': JSON.stringify(data),
              }
            : null,
          success: res => {
            successFunc(res)
          },
          error: e => {
            errorFunc(e)
          },
        })
      }
      func(warpResolver(resolve, reject, func), reject)
    })
  },
  getAlumnusDetailPublic: ({
    data,
  }: {
    data?: paths['/v2/api/alumnus/detail']['get']['requestBody'] extends infer Body
      ? Body extends undefined
        ? undefined
        : Body extends { content: infer Content }
          ? Content extends { 'application/json': infer JSONContent }
            ? JSONContent
            : never
          : never
      : never
  }): Promise<
    paths['/v2/api/alumnus/detail']['get']['responses']['200']['content']['application/json']
  > => {
    return new Promise((resolve, reject) => {
      let recursiveCount = 0
      const func = (successFunc, errorFunc) => {
        recursiveCount++
        if (recursiveCount > 3) {
          errorFunc('网络异常')
          return
        }
        const token = wx.getStorageSync('AlumniToken')
        let header = JSON.parse(JSON.stringify(baseHeader))
        if (token) {
          header = Object.assign(header, {
            Authorization: 'Bearer ' + token,
          })
        }
        header = defaultReqHeaderInterceptor(header)

        wx.request({
          method: 'GET',
          header: header,
          url: host + '/v2/api/alumnus/detail',
          data: data
            ? {
                'variables': JSON.stringify(data),
              }
            : null,
          success: res => {
            successFunc(res)
          },
          error: e => {
            errorFunc(e)
          },
        })
      }
      func(warpResolver(resolve, reject, func), reject)
    })
  },
  findAlumnusPublic: ({
    data,
  }: {
    data?: paths['/v2/api/alumnus/find']['get']['requestBody'] extends infer Body
      ? Body extends undefined
        ? undefined
        : Body extends { content: infer Content }
          ? Content extends { 'application/json': infer JSONContent }
            ? JSONContent
            : never
          : never
      : never
  }): Promise<
    paths['/v2/api/alumnus/find']['get']['responses']['200']['content']['application/json']
  > => {
    return new Promise((resolve, reject) => {
      let recursiveCount = 0
      const func = (successFunc, errorFunc) => {
        recursiveCount++
        if (recursiveCount > 3) {
          errorFunc('网络异常')
          return
        }
        const token = wx.getStorageSync('AlumniToken')
        let header = JSON.parse(JSON.stringify(baseHeader))
        if (token) {
          header = Object.assign(header, {
            Authorization: 'Bearer ' + token,
          })
        }
        header = defaultReqHeaderInterceptor(header)

        wx.request({
          method: 'GET',
          header: header,
          url: host + '/v2/api/alumnus/find',
          data: data
            ? {
                'variables': JSON.stringify(data),
              }
            : null,
          success: res => {
            successFunc(res)
          },
          error: e => {
            errorFunc(e)
          },
        })
      }
      func(warpResolver(resolve, reject, func), reject)
    })
  },
  findAlumnus: ({
    data,
  }: {
    data?: paths['/v2/api/alumnus/manage']['get']['requestBody'] extends infer Body
      ? Body extends undefined
        ? undefined
        : Body extends { content: infer Content }
          ? Content extends { 'application/json': infer JSONContent }
            ? JSONContent
            : never
          : never
      : never
  }): Promise<
    paths['/v2/api/alumnus/manage']['get']['responses']['200']['content']['application/json']
  > => {
    return new Promise((resolve, reject) => {
      let recursiveCount = 0
      const func = (successFunc, errorFunc) => {
        recursiveCount++
        if (recursiveCount > 3) {
          errorFunc('网络异常')
          return
        }
        const token = wx.getStorageSync('AlumniToken')
        let header = JSON.parse(JSON.stringify(baseHeader))
        if (token) {
          header = Object.assign(header, {
            Authorization: 'Bearer ' + token,
          })
        }
        header = defaultReqHeaderInterceptor(header)

        wx.request({
          method: 'GET',
          header: header,
          url: host + '/v2/api/alumnus/manage',
          data: data
            ? {
                'variables': JSON.stringify(data),
              }
            : null,
          success: res => {
            successFunc(res)
          },
          error: e => {
            errorFunc(e)
          },
        })
      }
      func(warpResolver(resolve, reject, func), reject)
    })
  },
  findAlumnusParams: ({
    data,
  }: {
    data?: null
  }): Promise<
    paths['/v2/api/alumnus/manage/params']['get']['responses']['200']['content']['application/json']
  > => {
    return new Promise((resolve, reject) => {
      let recursiveCount = 0
      const func = (successFunc, errorFunc) => {
        recursiveCount++
        if (recursiveCount > 3) {
          errorFunc('网络异常')
          return
        }
        const token = wx.getStorageSync('AlumniToken')
        let header = JSON.parse(JSON.stringify(baseHeader))
        if (token) {
          header = Object.assign(header, {
            Authorization: 'Bearer ' + token,
          })
        }
        header = defaultReqHeaderInterceptor(header)

        wx.request({
          method: 'GET',
          header: header,
          url: host + '/v2/api/alumnus/manage/params',
          data: data
            ? {
                'variables': JSON.stringify(data),
              }
            : null,
          success: res => {
            successFunc(res)
          },
          error: e => {
            errorFunc(e)
          },
        })
      }
      func(warpResolver(resolve, reject, func), reject)
    })
  },
  findAlumnusPublicParams: ({
    data,
  }: {
    data?: null
  }): Promise<
    paths['/v2/api/alumnus/params']['get']['responses']['200']['content']['application/json']
  > => {
    return new Promise((resolve, reject) => {
      let recursiveCount = 0
      const func = (successFunc, errorFunc) => {
        recursiveCount++
        if (recursiveCount > 3) {
          errorFunc('网络异常')
          return
        }
        const token = wx.getStorageSync('AlumniToken')
        let header = JSON.parse(JSON.stringify(baseHeader))
        if (token) {
          header = Object.assign(header, {
            Authorization: 'Bearer ' + token,
          })
        }
        header = defaultReqHeaderInterceptor(header)

        wx.request({
          method: 'GET',
          header: header,
          url: host + '/v2/api/alumnus/params',
          data: data
            ? {
                'variables': JSON.stringify(data),
              }
            : null,
          success: res => {
            successFunc(res)
          },
          error: e => {
            errorFunc(e)
          },
        })
      }
      func(warpResolver(resolve, reject, func), reject)
    })
  },
  getAllArticles: ({
    data,
  }: {
    data?: paths['/v2/api/articles']['get']['requestBody'] extends infer Body
      ? Body extends undefined
        ? undefined
        : Body extends { content: infer Content }
          ? Content extends { 'application/json': infer JSONContent }
            ? JSONContent
            : never
          : never
      : never
  }): Promise<
    paths['/v2/api/articles']['get']['responses']['200']['content']['application/json']
  > => {
    return new Promise((resolve, reject) => {
      let recursiveCount = 0
      const func = (successFunc, errorFunc) => {
        recursiveCount++
        if (recursiveCount > 3) {
          errorFunc('网络异常')
          return
        }
        const token = wx.getStorageSync('AlumniToken')
        let header = JSON.parse(JSON.stringify(baseHeader))
        if (token) {
          header = Object.assign(header, {
            Authorization: 'Bearer ' + token,
          })
        }
        header = defaultReqHeaderInterceptor(header)

        wx.request({
          method: 'GET',
          header: header,
          url: host + '/v2/api/articles',
          data: data
            ? {
                'variables': JSON.stringify(data),
              }
            : null,
          success: res => {
            successFunc(res)
          },
          error: e => {
            errorFunc(e)
          },
        })
      }
      func(warpResolver(resolve, reject, func), reject)
    })
  },
  removeArticle: ({
    data,
  }: {
    data?: paths['/v2/api/category-manage/article']['delete']['requestBody'] extends infer Body
      ? Body extends undefined
        ? undefined
        : Body extends { content: infer Content }
          ? Content extends { 'application/json': infer JSONContent }
            ? JSONContent
            : never
          : never
      : never
  }): Promise<
    paths['/v2/api/category-manage/article']['delete']['responses']['200']['content']['application/json']
  > => {
    return new Promise((resolve, reject) => {
      let recursiveCount = 0
      const func = (successFunc, errorFunc) => {
        recursiveCount++
        if (recursiveCount > 3) {
          errorFunc('网络异常')
          return
        }
        const token = wx.getStorageSync('AlumniToken')
        let header = JSON.parse(JSON.stringify(baseHeader))
        if (token) {
          header = Object.assign(header, {
            Authorization: 'Bearer ' + token,
          })
        }
        header = defaultReqHeaderInterceptor(header)

        wx.request({
          method: 'DELETE',
          header: header,
          url: host + '/v2/api/category-manage/article',
          data: data ? data : null,
          success: res => {
            successFunc(res)
          },
          error: e => {
            errorFunc(e)
          },
        })
      }
      func(warpResolver(resolve, reject, func), reject)
    })
  },
  createArticle: ({
    data,
  }: {
    data?: paths['/v2/api/category-manage/article']['post']['requestBody'] extends infer Body
      ? Body extends undefined
        ? undefined
        : Body extends { content: infer Content }
          ? Content extends { 'application/json': infer JSONContent }
            ? JSONContent
            : never
          : never
      : never
  }): Promise<
    paths['/v2/api/category-manage/article']['post']['responses']['200']['content']['application/json']
  > => {
    return new Promise((resolve, reject) => {
      let recursiveCount = 0
      const func = (successFunc, errorFunc) => {
        recursiveCount++
        if (recursiveCount > 3) {
          errorFunc('网络异常')
          return
        }
        const token = wx.getStorageSync('AlumniToken')
        let header = JSON.parse(JSON.stringify(baseHeader))
        if (token) {
          header = Object.assign(header, {
            Authorization: 'Bearer ' + token,
          })
        }
        header = defaultReqHeaderInterceptor(header)

        wx.request({
          method: 'POST',
          header: header,
          url: host + '/v2/api/category-manage/article',
          data: data ? data : null,
          success: res => {
            successFunc(res)
          },
          error: e => {
            errorFunc(e)
          },
        })
      }
      func(warpResolver(resolve, reject, func), reject)
    })
  },
  updateArticle: ({
    data,
  }: {
    data?: paths['/v2/api/category-manage/article']['put']['requestBody'] extends infer Body
      ? Body extends undefined
        ? undefined
        : Body extends { content: infer Content }
          ? Content extends { 'application/json': infer JSONContent }
            ? JSONContent
            : never
          : never
      : never
  }): Promise<
    paths['/v2/api/category-manage/article']['put']['responses']['200']['content']['application/json']
  > => {
    return new Promise((resolve, reject) => {
      let recursiveCount = 0
      const func = (successFunc, errorFunc) => {
        recursiveCount++
        if (recursiveCount > 3) {
          errorFunc('网络异常')
          return
        }
        const token = wx.getStorageSync('AlumniToken')
        let header = JSON.parse(JSON.stringify(baseHeader))
        if (token) {
          header = Object.assign(header, {
            Authorization: 'Bearer ' + token,
          })
        }
        header = defaultReqHeaderInterceptor(header)

        wx.request({
          method: 'PUT',
          header: header,
          url: host + '/v2/api/category-manage/article',
          data: data ? data : null,
          success: res => {
            successFunc(res)
          },
          error: e => {
            errorFunc(e)
          },
        })
      }
      func(warpResolver(resolve, reject, func), reject)
    })
  },
  getArticleDetail: ({
    data,
  }: {
    data?: paths['/v2/api/category-manage/article/detail']['get']['requestBody'] extends infer Body
      ? Body extends undefined
        ? undefined
        : Body extends { content: infer Content }
          ? Content extends { 'application/json': infer JSONContent }
            ? JSONContent
            : never
          : never
      : never
  }): Promise<
    paths['/v2/api/category-manage/article/detail']['get']['responses']['200']['content']['application/json']
  > => {
    return new Promise((resolve, reject) => {
      let recursiveCount = 0
      const func = (successFunc, errorFunc) => {
        recursiveCount++
        if (recursiveCount > 3) {
          errorFunc('网络异常')
          return
        }
        const token = wx.getStorageSync('AlumniToken')
        let header = JSON.parse(JSON.stringify(baseHeader))
        if (token) {
          header = Object.assign(header, {
            Authorization: 'Bearer ' + token,
          })
        }
        header = defaultReqHeaderInterceptor(header)

        wx.request({
          method: 'GET',
          header: header,
          url: host + '/v2/api/category-manage/article/detail',
          data: data
            ? {
                'variables': JSON.stringify(data),
              }
            : null,
          success: res => {
            successFunc(res)
          },
          error: e => {
            errorFunc(e)
          },
        })
      }
      func(warpResolver(resolve, reject, func), reject)
    })
  },
  publishArticle: ({
    data,
  }: {
    data?: paths['/v2/api/category-manage/article/publish']['put']['requestBody'] extends infer Body
      ? Body extends undefined
        ? undefined
        : Body extends { content: infer Content }
          ? Content extends { 'application/json': infer JSONContent }
            ? JSONContent
            : never
          : never
      : never
  }): Promise<
    paths['/v2/api/category-manage/article/publish']['put']['responses']['200']['content']['application/json']
  > => {
    return new Promise((resolve, reject) => {
      let recursiveCount = 0
      const func = (successFunc, errorFunc) => {
        recursiveCount++
        if (recursiveCount > 3) {
          errorFunc('网络异常')
          return
        }
        const token = wx.getStorageSync('AlumniToken')
        let header = JSON.parse(JSON.stringify(baseHeader))
        if (token) {
          header = Object.assign(header, {
            Authorization: 'Bearer ' + token,
          })
        }
        header = defaultReqHeaderInterceptor(header)

        wx.request({
          method: 'PUT',
          header: header,
          url: host + '/v2/api/category-manage/article/publish',
          data: data ? data : null,
          success: res => {
            successFunc(res)
          },
          error: e => {
            errorFunc(e)
          },
        })
      }
      func(warpResolver(resolve, reject, func), reject)
    })
  },
  cancelArticleTop: ({
    data,
  }: {
    data?: paths['/v2/api/category-manage/article/top']['delete']['requestBody'] extends infer Body
      ? Body extends undefined
        ? undefined
        : Body extends { content: infer Content }
          ? Content extends { 'application/json': infer JSONContent }
            ? JSONContent
            : never
          : never
      : never
  }): Promise<
    paths['/v2/api/category-manage/article/top']['delete']['responses']['200']['content']['application/json']
  > => {
    return new Promise((resolve, reject) => {
      let recursiveCount = 0
      const func = (successFunc, errorFunc) => {
        recursiveCount++
        if (recursiveCount > 3) {
          errorFunc('网络异常')
          return
        }
        const token = wx.getStorageSync('AlumniToken')
        let header = JSON.parse(JSON.stringify(baseHeader))
        if (token) {
          header = Object.assign(header, {
            Authorization: 'Bearer ' + token,
          })
        }
        header = defaultReqHeaderInterceptor(header)

        wx.request({
          method: 'DELETE',
          header: header,
          url: host + '/v2/api/category-manage/article/top',
          data: data ? data : null,
          success: res => {
            successFunc(res)
          },
          error: e => {
            errorFunc(e)
          },
        })
      }
      func(warpResolver(resolve, reject, func), reject)
    })
  },
  setArticleTop: ({
    data,
  }: {
    data?: paths['/v2/api/category-manage/article/top']['put']['requestBody'] extends infer Body
      ? Body extends undefined
        ? undefined
        : Body extends { content: infer Content }
          ? Content extends { 'application/json': infer JSONContent }
            ? JSONContent
            : never
          : never
      : never
  }): Promise<
    paths['/v2/api/category-manage/article/top']['put']['responses']['200']['content']['application/json']
  > => {
    return new Promise((resolve, reject) => {
      let recursiveCount = 0
      const func = (successFunc, errorFunc) => {
        recursiveCount++
        if (recursiveCount > 3) {
          errorFunc('网络异常')
          return
        }
        const token = wx.getStorageSync('AlumniToken')
        let header = JSON.parse(JSON.stringify(baseHeader))
        if (token) {
          header = Object.assign(header, {
            Authorization: 'Bearer ' + token,
          })
        }
        header = defaultReqHeaderInterceptor(header)

        wx.request({
          method: 'PUT',
          header: header,
          url: host + '/v2/api/category-manage/article/top',
          data: data ? data : null,
          success: res => {
            successFunc(res)
          },
          error: e => {
            errorFunc(e)
          },
        })
      }
      func(warpResolver(resolve, reject, func), reject)
    })
  },
  moveTopArticle: ({
    data,
  }: {
    data?: paths['/v2/api/category-manage/article/top/move']['put']['requestBody'] extends infer Body
      ? Body extends undefined
        ? undefined
        : Body extends { content: infer Content }
          ? Content extends { 'application/json': infer JSONContent }
            ? JSONContent
            : never
          : never
      : never
  }): Promise<
    paths['/v2/api/category-manage/article/top/move']['put']['responses']['200']['content']['application/json']
  > => {
    return new Promise((resolve, reject) => {
      let recursiveCount = 0
      const func = (successFunc, errorFunc) => {
        recursiveCount++
        if (recursiveCount > 3) {
          errorFunc('网络异常')
          return
        }
        const token = wx.getStorageSync('AlumniToken')
        let header = JSON.parse(JSON.stringify(baseHeader))
        if (token) {
          header = Object.assign(header, {
            Authorization: 'Bearer ' + token,
          })
        }
        header = defaultReqHeaderInterceptor(header)

        wx.request({
          method: 'PUT',
          header: header,
          url: host + '/v2/api/category-manage/article/top/move',
          data: data ? data : null,
          success: res => {
            successFunc(res)
          },
          error: e => {
            errorFunc(e)
          },
        })
      }
      func(warpResolver(resolve, reject, func), reject)
    })
  },
  withdrewArticle: ({
    data,
  }: {
    data?: paths['/v2/api/category-manage/article/withdrew']['put']['requestBody'] extends infer Body
      ? Body extends undefined
        ? undefined
        : Body extends { content: infer Content }
          ? Content extends { 'application/json': infer JSONContent }
            ? JSONContent
            : never
          : never
      : never
  }): Promise<
    paths['/v2/api/category-manage/article/withdrew']['put']['responses']['200']['content']['application/json']
  > => {
    return new Promise((resolve, reject) => {
      let recursiveCount = 0
      const func = (successFunc, errorFunc) => {
        recursiveCount++
        if (recursiveCount > 3) {
          errorFunc('网络异常')
          return
        }
        const token = wx.getStorageSync('AlumniToken')
        let header = JSON.parse(JSON.stringify(baseHeader))
        if (token) {
          header = Object.assign(header, {
            Authorization: 'Bearer ' + token,
          })
        }
        header = defaultReqHeaderInterceptor(header)

        wx.request({
          method: 'PUT',
          header: header,
          url: host + '/v2/api/category-manage/article/withdrew',
          data: data ? data : null,
          success: res => {
            successFunc(res)
          },
          error: e => {
            errorFunc(e)
          },
        })
      }
      func(warpResolver(resolve, reject, func), reject)
    })
  },
  getArticleByCategoryForManage: ({
    data,
  }: {
    data?: paths['/v2/api/category-manage/articles']['get']['requestBody'] extends infer Body
      ? Body extends undefined
        ? undefined
        : Body extends { content: infer Content }
          ? Content extends { 'application/json': infer JSONContent }
            ? JSONContent
            : never
          : never
      : never
  }): Promise<
    paths['/v2/api/category-manage/articles']['get']['responses']['200']['content']['application/json']
  > => {
    return new Promise((resolve, reject) => {
      let recursiveCount = 0
      const func = (successFunc, errorFunc) => {
        recursiveCount++
        if (recursiveCount > 3) {
          errorFunc('网络异常')
          return
        }
        const token = wx.getStorageSync('AlumniToken')
        let header = JSON.parse(JSON.stringify(baseHeader))
        if (token) {
          header = Object.assign(header, {
            Authorization: 'Bearer ' + token,
          })
        }
        header = defaultReqHeaderInterceptor(header)

        wx.request({
          method: 'GET',
          header: header,
          url: host + '/v2/api/category-manage/articles',
          data: data
            ? {
                'variables': JSON.stringify(data),
              }
            : null,
          success: res => {
            successFunc(res)
          },
          error: e => {
            errorFunc(e)
          },
        })
      }
      func(warpResolver(resolve, reject, func), reject)
    })
  },
  createAndPublishArticle: ({
    data,
  }: {
    data?: paths['/v2/api/category-manage/createAndPublishArticle']['post']['requestBody'] extends infer Body
      ? Body extends undefined
        ? undefined
        : Body extends { content: infer Content }
          ? Content extends { 'application/json': infer JSONContent }
            ? JSONContent
            : never
          : never
      : never
  }): Promise<
    paths['/v2/api/category-manage/createAndPublishArticle']['post']['responses']['200']['content']['application/json']
  > => {
    return new Promise((resolve, reject) => {
      let recursiveCount = 0
      const func = (successFunc, errorFunc) => {
        recursiveCount++
        if (recursiveCount > 3) {
          errorFunc('网络异常')
          return
        }
        const token = wx.getStorageSync('AlumniToken')
        let header = JSON.parse(JSON.stringify(baseHeader))
        if (token) {
          header = Object.assign(header, {
            Authorization: 'Bearer ' + token,
          })
        }
        header = defaultReqHeaderInterceptor(header)

        wx.request({
          method: 'POST',
          header: header,
          url: host + '/v2/api/category-manage/createAndPublishArticle',
          data: data ? data : null,
          success: res => {
            successFunc(res)
          },
          error: e => {
            errorFunc(e)
          },
        })
      }
      func(warpResolver(resolve, reject, func), reject)
    })
  },
  updateAndPublishArticle: ({
    data,
  }: {
    data?: paths['/v2/api/category-manage/updateAndPublishArticle']['put']['requestBody'] extends infer Body
      ? Body extends undefined
        ? undefined
        : Body extends { content: infer Content }
          ? Content extends { 'application/json': infer JSONContent }
            ? JSONContent
            : never
          : never
      : never
  }): Promise<
    paths['/v2/api/category-manage/updateAndPublishArticle']['put']['responses']['200']['content']['application/json']
  > => {
    return new Promise((resolve, reject) => {
      let recursiveCount = 0
      const func = (successFunc, errorFunc) => {
        recursiveCount++
        if (recursiveCount > 3) {
          errorFunc('网络异常')
          return
        }
        const token = wx.getStorageSync('AlumniToken')
        let header = JSON.parse(JSON.stringify(baseHeader))
        if (token) {
          header = Object.assign(header, {
            Authorization: 'Bearer ' + token,
          })
        }
        header = defaultReqHeaderInterceptor(header)

        wx.request({
          method: 'PUT',
          header: header,
          url: host + '/v2/api/category-manage/updateAndPublishArticle',
          data: data ? data : null,
          success: res => {
            successFunc(res)
          },
          error: e => {
            errorFunc(e)
          },
        })
      }
      func(warpResolver(resolve, reject, func), reject)
    })
  },
  getArticlePublicDetail: ({
    data,
  }: {
    data?: paths['/v2/api/category/article/detail']['get']['requestBody'] extends infer Body
      ? Body extends undefined
        ? undefined
        : Body extends { content: infer Content }
          ? Content extends { 'application/json': infer JSONContent }
            ? JSONContent
            : never
          : never
      : never
  }): Promise<
    paths['/v2/api/category/article/detail']['get']['responses']['200']['content']['application/json']
  > => {
    return new Promise((resolve, reject) => {
      let recursiveCount = 0
      const func = (successFunc, errorFunc) => {
        recursiveCount++
        if (recursiveCount > 3) {
          errorFunc('网络异常')
          return
        }
        const token = wx.getStorageSync('AlumniToken')
        let header = JSON.parse(JSON.stringify(baseHeader))
        if (token) {
          header = Object.assign(header, {
            Authorization: 'Bearer ' + token,
          })
        }
        header = defaultReqHeaderInterceptor(header)

        wx.request({
          method: 'GET',
          header: header,
          url: host + '/v2/api/category/article/detail',
          data: data
            ? {
                'variables': JSON.stringify(data),
              }
            : null,
          success: res => {
            successFunc(res)
          },
          error: e => {
            errorFunc(e)
          },
        })
      }
      func(warpResolver(resolve, reject, func), reject)
    })
  },
  getArticlePreview: ({
    data,
  }: {
    data?: paths['/v2/api/category/article/preview']['get']['requestBody'] extends infer Body
      ? Body extends undefined
        ? undefined
        : Body extends { content: infer Content }
          ? Content extends { 'application/json': infer JSONContent }
            ? JSONContent
            : never
          : never
      : never
  }): Promise<
    paths['/v2/api/category/article/preview']['get']['responses']['200']['content']['application/json']
  > => {
    return new Promise((resolve, reject) => {
      let recursiveCount = 0
      const func = (successFunc, errorFunc) => {
        recursiveCount++
        if (recursiveCount > 3) {
          errorFunc('网络异常')
          return
        }
        const token = wx.getStorageSync('AlumniToken')
        let header = JSON.parse(JSON.stringify(baseHeader))
        if (token) {
          header = Object.assign(header, {
            Authorization: 'Bearer ' + token,
          })
        }
        header = defaultReqHeaderInterceptor(header)

        wx.request({
          method: 'GET',
          header: header,
          url: host + '/v2/api/category/article/preview',
          data: data
            ? {
                'variables': JSON.stringify(data),
              }
            : null,
          success: res => {
            successFunc(res)
          },
          error: e => {
            errorFunc(e)
          },
        })
      }
      func(warpResolver(resolve, reject, func), reject)
    })
  },
  getArticleByMenu: ({
    data,
  }: {
    data?: paths['/v2/api/category/articles']['get']['requestBody'] extends infer Body
      ? Body extends undefined
        ? undefined
        : Body extends { content: infer Content }
          ? Content extends { 'application/json': infer JSONContent }
            ? JSONContent
            : never
          : never
      : never
  }): Promise<
    paths['/v2/api/category/articles']['get']['responses']['200']['content']['application/json']
  > => {
    return new Promise((resolve, reject) => {
      let recursiveCount = 0
      const func = (successFunc, errorFunc) => {
        recursiveCount++
        if (recursiveCount > 3) {
          errorFunc('网络异常')
          return
        }
        const token = wx.getStorageSync('AlumniToken')
        let header = JSON.parse(JSON.stringify(baseHeader))
        if (token) {
          header = Object.assign(header, {
            Authorization: 'Bearer ' + token,
          })
        }
        header = defaultReqHeaderInterceptor(header)

        wx.request({
          method: 'GET',
          header: header,
          url: host + '/v2/api/category/articles',
          data: data
            ? {
                'variables': JSON.stringify(data),
              }
            : null,
          success: res => {
            successFunc(res)
          },
          error: e => {
            errorFunc(e)
          },
        })
      }
      func(warpResolver(resolve, reject, func), reject)
    })
  },
  getColumns: ({
    data,
  }: {
    data?: null
  }): Promise<
    paths['/v2/api/columns']['get']['responses']['200']['content']['application/json']
  > => {
    return new Promise((resolve, reject) => {
      let recursiveCount = 0
      const func = (successFunc, errorFunc) => {
        recursiveCount++
        if (recursiveCount > 3) {
          errorFunc('网络异常')
          return
        }
        const token = wx.getStorageSync('AlumniToken')
        let header = JSON.parse(JSON.stringify(baseHeader))
        if (token) {
          header = Object.assign(header, {
            Authorization: 'Bearer ' + token,
          })
        }
        header = defaultReqHeaderInterceptor(header)

        wx.request({
          method: 'GET',
          header: header,
          url: host + '/v2/api/columns',
          data: data
            ? {
                'variables': JSON.stringify(data),
              }
            : null,
          success: res => {
            successFunc(res)
          },
          error: e => {
            errorFunc(e)
          },
        })
      }
      func(warpResolver(resolve, reject, func), reject)
    })
  },
  myDashboardData: ({
    data,
  }: {
    data?: null
  }): Promise<
    paths['/v2/api/dashboard']['get']['responses']['200']['content']['application/json']
  > => {
    return new Promise((resolve, reject) => {
      let recursiveCount = 0
      const func = (successFunc, errorFunc) => {
        recursiveCount++
        if (recursiveCount > 3) {
          errorFunc('网络异常')
          return
        }
        const token = wx.getStorageSync('AlumniToken')
        let header = JSON.parse(JSON.stringify(baseHeader))
        if (token) {
          header = Object.assign(header, {
            Authorization: 'Bearer ' + token,
          })
        }
        header = defaultReqHeaderInterceptor(header)

        wx.request({
          method: 'GET',
          header: header,
          url: host + '/v2/api/dashboard',
          data: data
            ? {
                'variables': JSON.stringify(data),
              }
            : null,
          success: res => {
            successFunc(res)
          },
          error: e => {
            errorFunc(e)
          },
        })
      }
      func(warpResolver(resolve, reject, func), reject)
    })
  },
  setDashboardSetting: ({
    data,
  }: {
    data?: paths['/v2/api/dashboard']['post']['requestBody'] extends infer Body
      ? Body extends undefined
        ? undefined
        : Body extends { content: infer Content }
          ? Content extends { 'application/json': infer JSONContent }
            ? JSONContent
            : never
          : never
      : never
  }): Promise<
    paths['/v2/api/dashboard']['post']['responses']['200']['content']['application/json']
  > => {
    return new Promise((resolve, reject) => {
      let recursiveCount = 0
      const func = (successFunc, errorFunc) => {
        recursiveCount++
        if (recursiveCount > 3) {
          errorFunc('网络异常')
          return
        }
        const token = wx.getStorageSync('AlumniToken')
        let header = JSON.parse(JSON.stringify(baseHeader))
        if (token) {
          header = Object.assign(header, {
            Authorization: 'Bearer ' + token,
          })
        }
        header = defaultReqHeaderInterceptor(header)

        wx.request({
          method: 'POST',
          header: header,
          url: host + '/v2/api/dashboard',
          data: data ? data : null,
          success: res => {
            successFunc(res)
          },
          error: e => {
            errorFunc(e)
          },
        })
      }
      func(warpResolver(resolve, reject, func), reject)
    })
  },
  myFullDashboardData: ({
    data,
  }: {
    data?: null
  }): Promise<
    paths['/v2/api/dashboard/full']['get']['responses']['200']['content']['application/json']
  > => {
    return new Promise((resolve, reject) => {
      let recursiveCount = 0
      const func = (successFunc, errorFunc) => {
        recursiveCount++
        if (recursiveCount > 3) {
          errorFunc('网络异常')
          return
        }
        const token = wx.getStorageSync('AlumniToken')
        let header = JSON.parse(JSON.stringify(baseHeader))
        if (token) {
          header = Object.assign(header, {
            Authorization: 'Bearer ' + token,
          })
        }
        header = defaultReqHeaderInterceptor(header)

        wx.request({
          method: 'GET',
          header: header,
          url: host + '/v2/api/dashboard/full',
          data: data
            ? {
                'variables': JSON.stringify(data),
              }
            : null,
          success: res => {
            successFunc(res)
          },
          error: e => {
            errorFunc(e)
          },
        })
      }
      func(warpResolver(resolve, reject, func), reject)
    })
  },
  myDonationInvoice: ({
    data,
  }: {
    data?: paths['/v2/api/donation/invoice']['get']['requestBody'] extends infer Body
      ? Body extends undefined
        ? undefined
        : Body extends { content: infer Content }
          ? Content extends { 'application/json': infer JSONContent }
            ? JSONContent
            : never
          : never
      : never
  }): Promise<
    paths['/v2/api/donation/invoice']['get']['responses']['200']['content']['application/json']
  > => {
    return new Promise((resolve, reject) => {
      let recursiveCount = 0
      const func = (successFunc, errorFunc) => {
        recursiveCount++
        if (recursiveCount > 3) {
          errorFunc('网络异常')
          return
        }
        const token = wx.getStorageSync('AlumniToken')
        let header = JSON.parse(JSON.stringify(baseHeader))
        if (token) {
          header = Object.assign(header, {
            Authorization: 'Bearer ' + token,
          })
        }
        header = defaultReqHeaderInterceptor(header)

        wx.request({
          method: 'GET',
          header: header,
          url: host + '/v2/api/donation/invoice',
          data: data
            ? {
                'variables': JSON.stringify(data),
              }
            : null,
          success: res => {
            successFunc(res)
          },
          error: e => {
            errorFunc(e)
          },
        })
      }
      func(warpResolver(resolve, reject, func), reject)
    })
  },
  myDonationOrderInvoice: ({
    data,
  }: {
    data?: paths['/v2/api/donation/order/invoice']['get']['requestBody'] extends infer Body
      ? Body extends undefined
        ? undefined
        : Body extends { content: infer Content }
          ? Content extends { 'application/json': infer JSONContent }
            ? JSONContent
            : never
          : never
      : never
  }): Promise<
    paths['/v2/api/donation/order/invoice']['get']['responses']['200']['content']['application/json']
  > => {
    return new Promise((resolve, reject) => {
      let recursiveCount = 0
      const func = (successFunc, errorFunc) => {
        recursiveCount++
        if (recursiveCount > 3) {
          errorFunc('网络异常')
          return
        }
        const token = wx.getStorageSync('AlumniToken')
        let header = JSON.parse(JSON.stringify(baseHeader))
        if (token) {
          header = Object.assign(header, {
            Authorization: 'Bearer ' + token,
          })
        }
        header = defaultReqHeaderInterceptor(header)

        wx.request({
          method: 'GET',
          header: header,
          url: host + '/v2/api/donation/order/invoice',
          data: data
            ? {
                'variables': JSON.stringify(data),
              }
            : null,
          success: res => {
            successFunc(res)
          },
          error: e => {
            errorFunc(e)
          },
        })
      }
      func(warpResolver(resolve, reject, func), reject)
    })
  },
  myDonationOrders: ({
    data,
  }: {
    data?: paths['/v2/api/donation/orders']['get']['requestBody'] extends infer Body
      ? Body extends undefined
        ? undefined
        : Body extends { content: infer Content }
          ? Content extends { 'application/json': infer JSONContent }
            ? JSONContent
            : never
          : never
      : never
  }): Promise<
    paths['/v2/api/donation/orders']['get']['responses']['200']['content']['application/json']
  > => {
    return new Promise((resolve, reject) => {
      let recursiveCount = 0
      const func = (successFunc, errorFunc) => {
        recursiveCount++
        if (recursiveCount > 3) {
          errorFunc('网络异常')
          return
        }
        const token = wx.getStorageSync('AlumniToken')
        let header = JSON.parse(JSON.stringify(baseHeader))
        if (token) {
          header = Object.assign(header, {
            Authorization: 'Bearer ' + token,
          })
        }
        header = defaultReqHeaderInterceptor(header)

        wx.request({
          method: 'GET',
          header: header,
          url: host + '/v2/api/donation/orders',
          data: data
            ? {
                'variables': JSON.stringify(data),
              }
            : null,
          success: res => {
            successFunc(res)
          },
          error: e => {
            errorFunc(e)
          },
        })
      }
      func(warpResolver(resolve, reject, func), reject)
    })
  },
  createReservation: ({
    data,
  }: {
    data?: paths['/v2/api/entry/reservation']['post']['requestBody'] extends infer Body
      ? Body extends undefined
        ? undefined
        : Body extends { content: infer Content }
          ? Content extends { 'application/json': infer JSONContent }
            ? JSONContent
            : never
          : never
      : never
  }): Promise<
    paths['/v2/api/entry/reservation']['post']['responses']['200']['content']['application/json']
  > => {
    return new Promise((resolve, reject) => {
      let recursiveCount = 0
      const func = (successFunc, errorFunc) => {
        recursiveCount++
        if (recursiveCount > 3) {
          errorFunc('网络异常')
          return
        }
        const token = wx.getStorageSync('AlumniToken')
        let header = JSON.parse(JSON.stringify(baseHeader))
        if (token) {
          header = Object.assign(header, {
            Authorization: 'Bearer ' + token,
          })
        }
        header = defaultReqHeaderInterceptor(header)

        wx.request({
          method: 'POST',
          header: header,
          url: host + '/v2/api/entry/reservation',
          data: data ? data : null,
          success: res => {
            successFunc(res)
          },
          error: e => {
            errorFunc(e)
          },
        })
      }
      func(warpResolver(resolve, reject, func), reject)
    })
  },
  cancelEntryReservation: ({
    data,
  }: {
    data?: paths['/v2/api/entry/reservation/cancel']['post']['requestBody'] extends infer Body
      ? Body extends undefined
        ? undefined
        : Body extends { content: infer Content }
          ? Content extends { 'application/json': infer JSONContent }
            ? JSONContent
            : never
          : never
      : never
  }): Promise<
    paths['/v2/api/entry/reservation/cancel']['post']['responses']['200']['content']['application/json']
  > => {
    return new Promise((resolve, reject) => {
      let recursiveCount = 0
      const func = (successFunc, errorFunc) => {
        recursiveCount++
        if (recursiveCount > 3) {
          errorFunc('网络异常')
          return
        }
        const token = wx.getStorageSync('AlumniToken')
        let header = JSON.parse(JSON.stringify(baseHeader))
        if (token) {
          header = Object.assign(header, {
            Authorization: 'Bearer ' + token,
          })
        }
        header = defaultReqHeaderInterceptor(header)

        wx.request({
          method: 'POST',
          header: header,
          url: host + '/v2/api/entry/reservation/cancel',
          data: data ? data : null,
          success: res => {
            successFunc(res)
          },
          error: e => {
            errorFunc(e)
          },
        })
      }
      func(warpResolver(resolve, reject, func), reject)
    })
  },
  getPublicEntryDate: ({
    data,
  }: {
    data?: null
  }): Promise<
    paths['/v2/api/entry/reservation/date']['get']['responses']['200']['content']['application/json']
  > => {
    return new Promise((resolve, reject) => {
      let recursiveCount = 0
      const func = (successFunc, errorFunc) => {
        recursiveCount++
        if (recursiveCount > 3) {
          errorFunc('网络异常')
          return
        }
        const token = wx.getStorageSync('AlumniToken')
        let header = JSON.parse(JSON.stringify(baseHeader))
        if (token) {
          header = Object.assign(header, {
            Authorization: 'Bearer ' + token,
          })
        }
        header = defaultReqHeaderInterceptor(header)

        wx.request({
          method: 'GET',
          header: header,
          url: host + '/v2/api/entry/reservation/date',
          data: data
            ? {
                'variables': JSON.stringify(data),
              }
            : null,
          success: res => {
            successFunc(res)
          },
          error: e => {
            errorFunc(e)
          },
        })
      }
      func(warpResolver(resolve, reject, func), reject)
    })
  },
  publicEntryDate: ({
    data,
  }: {
    data?: paths['/v2/api/entry/reservation/date/public']['get']['requestBody'] extends infer Body
      ? Body extends undefined
        ? undefined
        : Body extends { content: infer Content }
          ? Content extends { 'application/json': infer JSONContent }
            ? JSONContent
            : never
          : never
      : never
  }): Promise<
    paths['/v2/api/entry/reservation/date/public']['get']['responses']['200']['content']['application/json']
  > => {
    return new Promise((resolve, reject) => {
      let recursiveCount = 0
      const func = (successFunc, errorFunc) => {
        recursiveCount++
        if (recursiveCount > 3) {
          errorFunc('网络异常')
          return
        }
        const token = wx.getStorageSync('AlumniToken')
        let header = JSON.parse(JSON.stringify(baseHeader))
        if (token) {
          header = Object.assign(header, {
            Authorization: 'Bearer ' + token,
          })
        }
        header = defaultReqHeaderInterceptor(header)

        wx.request({
          method: 'GET',
          header: header,
          url: host + '/v2/api/entry/reservation/date/public',
          data: data
            ? {
                'variables': JSON.stringify(data),
              }
            : null,
          success: res => {
            successFunc(res)
          },
          error: e => {
            errorFunc(e)
          },
        })
      }
      func(warpResolver(resolve, reject, func), reject)
    })
  },
  getEntryReservationInfo: ({
    data,
  }: {
    data?: null
  }): Promise<
    paths['/v2/api/entry/reservation/info']['get']['responses']['200']['content']['application/json']
  > => {
    return new Promise((resolve, reject) => {
      let recursiveCount = 0
      const func = (successFunc, errorFunc) => {
        recursiveCount++
        if (recursiveCount > 3) {
          errorFunc('网络异常')
          return
        }
        const token = wx.getStorageSync('AlumniToken')
        let header = JSON.parse(JSON.stringify(baseHeader))
        if (token) {
          header = Object.assign(header, {
            Authorization: 'Bearer ' + token,
          })
        }
        header = defaultReqHeaderInterceptor(header)

        wx.request({
          method: 'GET',
          header: header,
          url: host + '/v2/api/entry/reservation/info',
          data: data
            ? {
                'variables': JSON.stringify(data),
              }
            : null,
          success: res => {
            successFunc(res)
          },
          error: e => {
            errorFunc(e)
          },
        })
      }
      func(warpResolver(resolve, reject, func), reject)
    })
  },
  myEntryReservations: ({
    data,
  }: {
    data?: paths['/v2/api/entry/reservation/record']['get']['requestBody'] extends infer Body
      ? Body extends undefined
        ? undefined
        : Body extends { content: infer Content }
          ? Content extends { 'application/json': infer JSONContent }
            ? JSONContent
            : never
          : never
      : never
  }): Promise<
    paths['/v2/api/entry/reservation/record']['get']['responses']['200']['content']['application/json']
  > => {
    return new Promise((resolve, reject) => {
      let recursiveCount = 0
      const func = (successFunc, errorFunc) => {
        recursiveCount++
        if (recursiveCount > 3) {
          errorFunc('网络异常')
          return
        }
        const token = wx.getStorageSync('AlumniToken')
        let header = JSON.parse(JSON.stringify(baseHeader))
        if (token) {
          header = Object.assign(header, {
            Authorization: 'Bearer ' + token,
          })
        }
        header = defaultReqHeaderInterceptor(header)

        wx.request({
          method: 'GET',
          header: header,
          url: host + '/v2/api/entry/reservation/record',
          data: data
            ? {
                'variables': JSON.stringify(data),
              }
            : null,
          success: res => {
            successFunc(res)
          },
          error: e => {
            errorFunc(e)
          },
        })
      }
      func(warpResolver(resolve, reject, func), reject)
    })
  },
  myCanceledEntryReservations: ({
    data,
  }: {
    data?: paths['/v2/api/entry/reservation/record/canceled']['get']['requestBody'] extends infer Body
      ? Body extends undefined
        ? undefined
        : Body extends { content: infer Content }
          ? Content extends { 'application/json': infer JSONContent }
            ? JSONContent
            : never
          : never
      : never
  }): Promise<
    paths['/v2/api/entry/reservation/record/canceled']['get']['responses']['200']['content']['application/json']
  > => {
    return new Promise((resolve, reject) => {
      let recursiveCount = 0
      const func = (successFunc, errorFunc) => {
        recursiveCount++
        if (recursiveCount > 3) {
          errorFunc('网络异常')
          return
        }
        const token = wx.getStorageSync('AlumniToken')
        let header = JSON.parse(JSON.stringify(baseHeader))
        if (token) {
          header = Object.assign(header, {
            Authorization: 'Bearer ' + token,
          })
        }
        header = defaultReqHeaderInterceptor(header)

        wx.request({
          method: 'GET',
          header: header,
          url: host + '/v2/api/entry/reservation/record/canceled',
          data: data
            ? {
                'variables': JSON.stringify(data),
              }
            : null,
          success: res => {
            successFunc(res)
          },
          error: e => {
            errorFunc(e)
          },
        })
      }
      func(warpResolver(resolve, reject, func), reject)
    })
  },
  getI18nValue: ({
    data,
  }: {
    data?: paths['/v2/api/i18n']['get']['requestBody'] extends infer Body
      ? Body extends undefined
        ? undefined
        : Body extends { content: infer Content }
          ? Content extends { 'application/json': infer JSONContent }
            ? JSONContent
            : never
          : never
      : never
  }): Promise<paths['/v2/api/i18n']['get']['responses']['200']['content']['application/json']> => {
    return new Promise((resolve, reject) => {
      let recursiveCount = 0
      const func = (successFunc, errorFunc) => {
        recursiveCount++
        if (recursiveCount > 3) {
          errorFunc('网络异常')
          return
        }
        const token = wx.getStorageSync('AlumniToken')
        let header = JSON.parse(JSON.stringify(baseHeader))
        if (token) {
          header = Object.assign(header, {
            Authorization: 'Bearer ' + token,
          })
        }
        header = defaultReqHeaderInterceptor(header)

        wx.request({
          method: 'GET',
          header: header,
          url: host + '/v2/api/i18n',
          data: data
            ? {
                'variables': JSON.stringify(data),
              }
            : null,
          success: res => {
            successFunc(res)
          },
          error: e => {
            errorFunc(e)
          },
        })
      }
      func(warpResolver(resolve, reject, func), reject)
    })
  },
  setI18nValue: ({
    data,
  }: {
    data?: paths['/v2/api/i18n']['post']['requestBody'] extends infer Body
      ? Body extends undefined
        ? undefined
        : Body extends { content: infer Content }
          ? Content extends { 'application/json': infer JSONContent }
            ? JSONContent
            : never
          : never
      : never
  }): Promise<paths['/v2/api/i18n']['post']['responses']['200']['content']['application/json']> => {
    return new Promise((resolve, reject) => {
      let recursiveCount = 0
      const func = (successFunc, errorFunc) => {
        recursiveCount++
        if (recursiveCount > 3) {
          errorFunc('网络异常')
          return
        }
        const token = wx.getStorageSync('AlumniToken')
        let header = JSON.parse(JSON.stringify(baseHeader))
        if (token) {
          header = Object.assign(header, {
            Authorization: 'Bearer ' + token,
          })
        }
        header = defaultReqHeaderInterceptor(header)

        wx.request({
          method: 'POST',
          header: header,
          url: host + '/v2/api/i18n',
          data: data ? data : null,
          success: res => {
            successFunc(res)
          },
          error: e => {
            errorFunc(e)
          },
        })
      }
      func(warpResolver(resolve, reject, func), reject)
    })
  },
  loginThuAlumni: ({
    data,
  }: {
    data?: paths['/v2/api/login']['post']['requestBody'] extends infer Body
      ? Body extends undefined
        ? undefined
        : Body extends { content: infer Content }
          ? Content extends { 'application/json': infer JSONContent }
            ? JSONContent
            : never
          : never
      : never
  }): Promise<
    paths['/v2/api/login']['post']['responses']['200']['content']['application/json']
  > => {
    return new Promise((resolve, reject) => {
      let recursiveCount = 0
      const func = (successFunc, errorFunc) => {
        recursiveCount++
        if (recursiveCount > 3) {
          errorFunc('网络异常')
          return
        }
        const token = wx.getStorageSync('AlumniToken')
        let header = JSON.parse(JSON.stringify(baseHeader))
        if (token) {
          header = Object.assign(header, {
            Authorization: 'Bearer ' + token,
          })
        }
        header = defaultReqHeaderInterceptor(header)

        wx.request({
          method: 'POST',
          header: header,
          url: host + '/v2/api/login',
          data: data ? data : null,
          success: res => {
            successFunc(res)
          },
          error: e => {
            errorFunc(e)
          },
        })
      }
      func(warpResolver(resolve, reject, func), reject)
    })
  },
  confirmLoginQRCode: ({
    data,
  }: {
    data?: paths['/v2/api/login/confirm']['post']['requestBody'] extends infer Body
      ? Body extends undefined
        ? undefined
        : Body extends { content: infer Content }
          ? Content extends { 'application/json': infer JSONContent }
            ? JSONContent
            : never
          : never
      : never
  }): Promise<
    paths['/v2/api/login/confirm']['post']['responses']['200']['content']['application/json']
  > => {
    return new Promise((resolve, reject) => {
      let recursiveCount = 0
      const func = (successFunc, errorFunc) => {
        recursiveCount++
        if (recursiveCount > 3) {
          errorFunc('网络异常')
          return
        }
        const token = wx.getStorageSync('AlumniToken')
        let header = JSON.parse(JSON.stringify(baseHeader))
        if (token) {
          header = Object.assign(header, {
            Authorization: 'Bearer ' + token,
          })
        }
        header = defaultReqHeaderInterceptor(header)

        wx.request({
          method: 'POST',
          header: header,
          url: host + '/v2/api/login/confirm',
          data: data ? data : null,
          success: res => {
            successFunc(res)
          },
          error: e => {
            errorFunc(e)
          },
        })
      }
      func(warpResolver(resolve, reject, func), reject)
    })
  },
  scanLoginQRCode: ({
    data,
  }: {
    data?: paths['/v2/api/login/scan']['post']['requestBody'] extends infer Body
      ? Body extends undefined
        ? undefined
        : Body extends { content: infer Content }
          ? Content extends { 'application/json': infer JSONContent }
            ? JSONContent
            : never
          : never
      : never
  }): Promise<
    paths['/v2/api/login/scan']['post']['responses']['200']['content']['application/json']
  > => {
    return new Promise((resolve, reject) => {
      let recursiveCount = 0
      const func = (successFunc, errorFunc) => {
        recursiveCount++
        if (recursiveCount > 3) {
          errorFunc('网络异常')
          return
        }
        const token = wx.getStorageSync('AlumniToken')
        let header = JSON.parse(JSON.stringify(baseHeader))
        if (token) {
          header = Object.assign(header, {
            Authorization: 'Bearer ' + token,
          })
        }
        header = defaultReqHeaderInterceptor(header)

        wx.request({
          method: 'POST',
          header: header,
          url: host + '/v2/api/login/scan',
          data: data ? data : null,
          success: res => {
            successFunc(res)
          },
          error: e => {
            errorFunc(e)
          },
        })
      }
      func(warpResolver(resolve, reject, func), reject)
    })
  },
  switchOrg: ({
    data,
  }: {
    data?: paths['/v2/api/login/switch']['post']['requestBody'] extends infer Body
      ? Body extends undefined
        ? undefined
        : Body extends { content: infer Content }
          ? Content extends { 'application/json': infer JSONContent }
            ? JSONContent
            : never
          : never
      : never
  }): Promise<
    paths['/v2/api/login/switch']['post']['responses']['200']['content']['application/json']
  > => {
    return new Promise((resolve, reject) => {
      let recursiveCount = 0
      const func = (successFunc, errorFunc) => {
        recursiveCount++
        if (recursiveCount > 3) {
          errorFunc('网络异常')
          return
        }
        const token = wx.getStorageSync('AlumniToken')
        let header = JSON.parse(JSON.stringify(baseHeader))
        if (token) {
          header = Object.assign(header, {
            Authorization: 'Bearer ' + token,
          })
        }
        header = defaultReqHeaderInterceptor(header)

        wx.request({
          method: 'POST',
          header: header,
          url: host + '/v2/api/login/switch',
          data: data ? data : null,
          success: res => {
            successFunc(res)
          },
          error: e => {
            errorFunc(e)
          },
        })
      }
      func(warpResolver(resolve, reject, func), reject)
    })
  },
  switchOrgMiniProgram: ({
    data,
  }: {
    data?: paths['/v2/api/login/switch/mini-program']['post']['requestBody'] extends infer Body
      ? Body extends undefined
        ? undefined
        : Body extends { content: infer Content }
          ? Content extends { 'application/json': infer JSONContent }
            ? JSONContent
            : never
          : never
      : never
  }): Promise<
    paths['/v2/api/login/switch/mini-program']['post']['responses']['200']['content']['application/json']
  > => {
    return new Promise((resolve, reject) => {
      let recursiveCount = 0
      const func = (successFunc, errorFunc) => {
        recursiveCount++
        if (recursiveCount > 3) {
          errorFunc('网络异常')
          return
        }
        const token = wx.getStorageSync('AlumniToken')
        let header = JSON.parse(JSON.stringify(baseHeader))
        if (token) {
          header = Object.assign(header, {
            Authorization: 'Bearer ' + token,
          })
        }
        header = defaultReqHeaderInterceptor(header)

        wx.request({
          method: 'POST',
          header: header,
          url: host + '/v2/api/login/switch/mini-program',
          data: data ? data : null,
          success: res => {
            successFunc(res)
          },
          error: e => {
            errorFunc(e)
          },
        })
      }
      func(warpResolver(resolve, reject, func), reject)
    })
  },
  getProduct: ({
    data,
  }: {
    data?: paths['/v2/api/mall/product/public']['get']['requestBody'] extends infer Body
      ? Body extends undefined
        ? undefined
        : Body extends { content: infer Content }
          ? Content extends { 'application/json': infer JSONContent }
            ? JSONContent
            : never
          : never
      : never
  }): Promise<
    paths['/v2/api/mall/product/public']['get']['responses']['200']['content']['application/json']
  > => {
    return new Promise((resolve, reject) => {
      let recursiveCount = 0
      const func = (successFunc, errorFunc) => {
        recursiveCount++
        if (recursiveCount > 3) {
          errorFunc('网络异常')
          return
        }
        const token = wx.getStorageSync('AlumniToken')
        let header = JSON.parse(JSON.stringify(baseHeader))
        if (token) {
          header = Object.assign(header, {
            Authorization: 'Bearer ' + token,
          })
        }
        header = defaultReqHeaderInterceptor(header)

        wx.request({
          method: 'GET',
          header: header,
          url: host + '/v2/api/mall/product/public',
          data: data
            ? {
                'variables': JSON.stringify(data),
              }
            : null,
          success: res => {
            successFunc(res)
          },
          error: e => {
            errorFunc(e)
          },
        })
      }
      func(warpResolver(resolve, reject, func), reject)
    })
  },
  getProducts: ({
    data,
  }: {
    data?: paths['/v2/api/mall/products/public']['get']['requestBody'] extends infer Body
      ? Body extends undefined
        ? undefined
        : Body extends { content: infer Content }
          ? Content extends { 'application/json': infer JSONContent }
            ? JSONContent
            : never
          : never
      : never
  }): Promise<
    paths['/v2/api/mall/products/public']['get']['responses']['200']['content']['application/json']
  > => {
    return new Promise((resolve, reject) => {
      let recursiveCount = 0
      const func = (successFunc, errorFunc) => {
        recursiveCount++
        if (recursiveCount > 3) {
          errorFunc('网络异常')
          return
        }
        const token = wx.getStorageSync('AlumniToken')
        let header = JSON.parse(JSON.stringify(baseHeader))
        if (token) {
          header = Object.assign(header, {
            Authorization: 'Bearer ' + token,
          })
        }
        header = defaultReqHeaderInterceptor(header)

        wx.request({
          method: 'GET',
          header: header,
          url: host + '/v2/api/mall/products/public',
          data: data
            ? {
                'variables': JSON.stringify(data),
              }
            : null,
          success: res => {
            successFunc(res)
          },
          error: e => {
            errorFunc(e)
          },
        })
      }
      func(warpResolver(resolve, reject, func), reject)
    })
  },
  me: ({
    data,
  }: {
    data?: null
  }): Promise<paths['/v2/api/me']['get']['responses']['200']['content']['application/json']> => {
    return new Promise((resolve, reject) => {
      let recursiveCount = 0
      const func = (successFunc, errorFunc) => {
        recursiveCount++
        if (recursiveCount > 3) {
          errorFunc('网络异常')
          return
        }
        const token = wx.getStorageSync('AlumniToken')
        let header = JSON.parse(JSON.stringify(baseHeader))
        if (token) {
          header = Object.assign(header, {
            Authorization: 'Bearer ' + token,
          })
        }
        header = defaultReqHeaderInterceptor(header)

        wx.request({
          method: 'GET',
          header: header,
          url: host + '/v2/api/me',
          data: data
            ? {
                'variables': JSON.stringify(data),
              }
            : null,
          success: res => {
            successFunc(res)
          },
          error: e => {
            errorFunc(e)
          },
        })
      }
      func(warpResolver(resolve, reject, func), reject)
    })
  },
  meAsAdmin: ({
    data,
  }: {
    data?: null
  }): Promise<
    paths['/v2/api/me/admin']['get']['responses']['200']['content']['application/json']
  > => {
    return new Promise((resolve, reject) => {
      let recursiveCount = 0
      const func = (successFunc, errorFunc) => {
        recursiveCount++
        if (recursiveCount > 3) {
          errorFunc('网络异常')
          return
        }
        const token = wx.getStorageSync('AlumniToken')
        let header = JSON.parse(JSON.stringify(baseHeader))
        if (token) {
          header = Object.assign(header, {
            Authorization: 'Bearer ' + token,
          })
        }
        header = defaultReqHeaderInterceptor(header)

        wx.request({
          method: 'GET',
          header: header,
          url: host + '/v2/api/me/admin',
          data: data
            ? {
                'variables': JSON.stringify(data),
              }
            : null,
          success: res => {
            successFunc(res)
          },
          error: e => {
            errorFunc(e)
          },
        })
      }
      func(warpResolver(resolve, reject, func), reject)
    })
  },
  myAllows: ({
    data,
  }: {
    data?: null
  }): Promise<
    paths['/v2/api/me/allows']['get']['responses']['200']['content']['application/json']
  > => {
    return new Promise((resolve, reject) => {
      let recursiveCount = 0
      const func = (successFunc, errorFunc) => {
        recursiveCount++
        if (recursiveCount > 3) {
          errorFunc('网络异常')
          return
        }
        const token = wx.getStorageSync('AlumniToken')
        let header = JSON.parse(JSON.stringify(baseHeader))
        if (token) {
          header = Object.assign(header, {
            Authorization: 'Bearer ' + token,
          })
        }
        header = defaultReqHeaderInterceptor(header)

        wx.request({
          method: 'GET',
          header: header,
          url: host + '/v2/api/me/allows',
          data: data
            ? {
                'variables': JSON.stringify(data),
              }
            : null,
          success: res => {
            successFunc(res)
          },
          error: e => {
            errorFunc(e)
          },
        })
      }
      func(warpResolver(resolve, reject, func), reject)
    })
  },
  currentAnnivInfo: ({
    data,
  }: {
    data?: null
  }): Promise<
    paths['/v2/api/me/anniv']['get']['responses']['200']['content']['application/json']
  > => {
    return new Promise((resolve, reject) => {
      let recursiveCount = 0
      const func = (successFunc, errorFunc) => {
        recursiveCount++
        if (recursiveCount > 3) {
          errorFunc('网络异常')
          return
        }
        const token = wx.getStorageSync('AlumniToken')
        let header = JSON.parse(JSON.stringify(baseHeader))
        if (token) {
          header = Object.assign(header, {
            Authorization: 'Bearer ' + token,
          })
        }
        header = defaultReqHeaderInterceptor(header)

        wx.request({
          method: 'GET',
          header: header,
          url: host + '/v2/api/me/anniv',
          data: data
            ? {
                'variables': JSON.stringify(data),
              }
            : null,
          success: res => {
            successFunc(res)
          },
          error: e => {
            errorFunc(e)
          },
        })
      }
      func(warpResolver(resolve, reject, func), reject)
    })
  },
  cancelOAuthAuthorize: ({
    data,
  }: {
    data?: paths['/v2/api/me/authorize/oauth']['delete']['requestBody'] extends infer Body
      ? Body extends undefined
        ? undefined
        : Body extends { content: infer Content }
          ? Content extends { 'application/json': infer JSONContent }
            ? JSONContent
            : never
          : never
      : never
  }): Promise<
    paths['/v2/api/me/authorize/oauth']['delete']['responses']['200']['content']['application/json']
  > => {
    return new Promise((resolve, reject) => {
      let recursiveCount = 0
      const func = (successFunc, errorFunc) => {
        recursiveCount++
        if (recursiveCount > 3) {
          errorFunc('网络异常')
          return
        }
        const token = wx.getStorageSync('AlumniToken')
        let header = JSON.parse(JSON.stringify(baseHeader))
        if (token) {
          header = Object.assign(header, {
            Authorization: 'Bearer ' + token,
          })
        }
        header = defaultReqHeaderInterceptor(header)

        wx.request({
          method: 'DELETE',
          header: header,
          url: host + '/v2/api/me/authorize/oauth',
          data: data ? data : null,
          success: res => {
            successFunc(res)
          },
          error: e => {
            errorFunc(e)
          },
        })
      }
      func(warpResolver(resolve, reject, func), reject)
    })
  },
  myOAuthAuthorizeRecords: ({
    data,
  }: {
    data?: null
  }): Promise<
    paths['/v2/api/me/authorize/oauth']['get']['responses']['200']['content']['application/json']
  > => {
    return new Promise((resolve, reject) => {
      let recursiveCount = 0
      const func = (successFunc, errorFunc) => {
        recursiveCount++
        if (recursiveCount > 3) {
          errorFunc('网络异常')
          return
        }
        const token = wx.getStorageSync('AlumniToken')
        let header = JSON.parse(JSON.stringify(baseHeader))
        if (token) {
          header = Object.assign(header, {
            Authorization: 'Bearer ' + token,
          })
        }
        header = defaultReqHeaderInterceptor(header)

        wx.request({
          method: 'GET',
          header: header,
          url: host + '/v2/api/me/authorize/oauth',
          data: data
            ? {
                'variables': JSON.stringify(data),
              }
            : null,
          success: res => {
            successFunc(res)
          },
          error: e => {
            errorFunc(e)
          },
        })
      }
      func(warpResolver(resolve, reject, func), reject)
    })
  },
  cancelOrgAuthorize: ({
    data,
  }: {
    data?: paths['/v2/api/me/authorize/org']['delete']['requestBody'] extends infer Body
      ? Body extends undefined
        ? undefined
        : Body extends { content: infer Content }
          ? Content extends { 'application/json': infer JSONContent }
            ? JSONContent
            : never
          : never
      : never
  }): Promise<
    paths['/v2/api/me/authorize/org']['delete']['responses']['200']['content']['application/json']
  > => {
    return new Promise((resolve, reject) => {
      let recursiveCount = 0
      const func = (successFunc, errorFunc) => {
        recursiveCount++
        if (recursiveCount > 3) {
          errorFunc('网络异常')
          return
        }
        const token = wx.getStorageSync('AlumniToken')
        let header = JSON.parse(JSON.stringify(baseHeader))
        if (token) {
          header = Object.assign(header, {
            Authorization: 'Bearer ' + token,
          })
        }
        header = defaultReqHeaderInterceptor(header)

        wx.request({
          method: 'DELETE',
          header: header,
          url: host + '/v2/api/me/authorize/org',
          data: data ? data : null,
          success: res => {
            successFunc(res)
          },
          error: e => {
            errorFunc(e)
          },
        })
      }
      func(warpResolver(resolve, reject, func), reject)
    })
  },
  myOrgAuthorizeRecords: ({
    data,
  }: {
    data?: null
  }): Promise<
    paths['/v2/api/me/authorize/org']['get']['responses']['200']['content']['application/json']
  > => {
    return new Promise((resolve, reject) => {
      let recursiveCount = 0
      const func = (successFunc, errorFunc) => {
        recursiveCount++
        if (recursiveCount > 3) {
          errorFunc('网络异常')
          return
        }
        const token = wx.getStorageSync('AlumniToken')
        let header = JSON.parse(JSON.stringify(baseHeader))
        if (token) {
          header = Object.assign(header, {
            Authorization: 'Bearer ' + token,
          })
        }
        header = defaultReqHeaderInterceptor(header)

        wx.request({
          method: 'GET',
          header: header,
          url: host + '/v2/api/me/authorize/org',
          data: data
            ? {
                'variables': JSON.stringify(data),
              }
            : null,
          success: res => {
            successFunc(res)
          },
          error: e => {
            errorFunc(e)
          },
        })
      }
      func(warpResolver(resolve, reject, func), reject)
    })
  },
  authorizeOrg: ({
    data,
  }: {
    data?: paths['/v2/api/me/authorize/org']['post']['requestBody'] extends infer Body
      ? Body extends undefined
        ? undefined
        : Body extends { content: infer Content }
          ? Content extends { 'application/json': infer JSONContent }
            ? JSONContent
            : never
          : never
      : never
  }): Promise<
    paths['/v2/api/me/authorize/org']['post']['responses']['200']['content']['application/json']
  > => {
    return new Promise((resolve, reject) => {
      let recursiveCount = 0
      const func = (successFunc, errorFunc) => {
        recursiveCount++
        if (recursiveCount > 3) {
          errorFunc('网络异常')
          return
        }
        const token = wx.getStorageSync('AlumniToken')
        let header = JSON.parse(JSON.stringify(baseHeader))
        if (token) {
          header = Object.assign(header, {
            Authorization: 'Bearer ' + token,
          })
        }
        header = defaultReqHeaderInterceptor(header)

        wx.request({
          method: 'POST',
          header: header,
          url: host + '/v2/api/me/authorize/org',
          data: data ? data : null,
          success: res => {
            successFunc(res)
          },
          error: e => {
            errorFunc(e)
          },
        })
      }
      func(warpResolver(resolve, reject, func), reject)
    })
  },
  myCardDetail: ({
    data,
  }: {
    data?: null
  }): Promise<
    paths['/v2/api/me/card/detail']['get']['responses']['200']['content']['application/json']
  > => {
    return new Promise((resolve, reject) => {
      let recursiveCount = 0
      const func = (successFunc, errorFunc) => {
        recursiveCount++
        if (recursiveCount > 3) {
          errorFunc('网络异常')
          return
        }
        const token = wx.getStorageSync('AlumniToken')
        let header = JSON.parse(JSON.stringify(baseHeader))
        if (token) {
          header = Object.assign(header, {
            Authorization: 'Bearer ' + token,
          })
        }
        header = defaultReqHeaderInterceptor(header)

        wx.request({
          method: 'GET',
          header: header,
          url: host + '/v2/api/me/card/detail',
          data: data
            ? {
                'variables': JSON.stringify(data),
              }
            : null,
          success: res => {
            successFunc(res)
          },
          error: e => {
            errorFunc(e)
          },
        })
      }
      func(warpResolver(resolve, reject, func), reject)
    })
  },
  getCardSecret: ({
    data,
  }: {
    data?: null
  }): Promise<
    paths['/v2/api/me/card/secret']['get']['responses']['200']['content']['application/json']
  > => {
    return new Promise((resolve, reject) => {
      let recursiveCount = 0
      const func = (successFunc, errorFunc) => {
        recursiveCount++
        if (recursiveCount > 3) {
          errorFunc('网络异常')
          return
        }
        const token = wx.getStorageSync('AlumniToken')
        let header = JSON.parse(JSON.stringify(baseHeader))
        if (token) {
          header = Object.assign(header, {
            Authorization: 'Bearer ' + token,
          })
        }
        header = defaultReqHeaderInterceptor(header)

        wx.request({
          method: 'GET',
          header: header,
          url: host + '/v2/api/me/card/secret',
          data: data
            ? {
                'variables': JSON.stringify(data),
              }
            : null,
          success: res => {
            successFunc(res)
          },
          error: e => {
            errorFunc(e)
          },
        })
      }
      func(warpResolver(resolve, reject, func), reject)
    })
  },
  meAlumnusCardUnlock: ({
    data,
  }: {
    data?: null
  }): Promise<
    paths['/v2/api/me/card/unlock']['get']['responses']['200']['content']['application/json']
  > => {
    return new Promise((resolve, reject) => {
      let recursiveCount = 0
      const func = (successFunc, errorFunc) => {
        recursiveCount++
        if (recursiveCount > 3) {
          errorFunc('网络异常')
          return
        }
        const token = wx.getStorageSync('AlumniToken')
        let header = JSON.parse(JSON.stringify(baseHeader))
        if (token) {
          header = Object.assign(header, {
            Authorization: 'Bearer ' + token,
          })
        }
        header = defaultReqHeaderInterceptor(header)

        wx.request({
          method: 'GET',
          header: header,
          url: host + '/v2/api/me/card/unlock',
          data: data
            ? {
                'variables': JSON.stringify(data),
              }
            : null,
          success: res => {
            successFunc(res)
          },
          error: e => {
            errorFunc(e)
          },
        })
      }
      func(warpResolver(resolve, reject, func), reject)
    })
  },
  myCertificate: ({
    data,
  }: {
    data?: paths['/v2/api/me/certificate']['get']['requestBody'] extends infer Body
      ? Body extends undefined
        ? undefined
        : Body extends { content: infer Content }
          ? Content extends { 'application/json': infer JSONContent }
            ? JSONContent
            : never
          : never
      : never
  }): Promise<
    paths['/v2/api/me/certificate']['get']['responses']['200']['content']['application/json']
  > => {
    return new Promise((resolve, reject) => {
      let recursiveCount = 0
      const func = (successFunc, errorFunc) => {
        recursiveCount++
        if (recursiveCount > 3) {
          errorFunc('网络异常')
          return
        }
        const token = wx.getStorageSync('AlumniToken')
        let header = JSON.parse(JSON.stringify(baseHeader))
        if (token) {
          header = Object.assign(header, {
            Authorization: 'Bearer ' + token,
          })
        }
        header = defaultReqHeaderInterceptor(header)

        wx.request({
          method: 'GET',
          header: header,
          url: host + '/v2/api/me/certificate',
          data: data
            ? {
                'variables': JSON.stringify(data),
              }
            : null,
          success: res => {
            successFunc(res)
          },
          error: e => {
            errorFunc(e)
          },
        })
      }
      func(warpResolver(resolve, reject, func), reject)
    })
  },
  myDetailInfo: ({
    data,
  }: {
    data?: null
  }): Promise<
    paths['/v2/api/me/detail']['get']['responses']['200']['content']['application/json']
  > => {
    return new Promise((resolve, reject) => {
      let recursiveCount = 0
      const func = (successFunc, errorFunc) => {
        recursiveCount++
        if (recursiveCount > 3) {
          errorFunc('网络异常')
          return
        }
        const token = wx.getStorageSync('AlumniToken')
        let header = JSON.parse(JSON.stringify(baseHeader))
        if (token) {
          header = Object.assign(header, {
            Authorization: 'Bearer ' + token,
          })
        }
        header = defaultReqHeaderInterceptor(header)

        wx.request({
          method: 'GET',
          header: header,
          url: host + '/v2/api/me/detail',
          data: data
            ? {
                'variables': JSON.stringify(data),
              }
            : null,
          success: res => {
            successFunc(res)
          },
          error: e => {
            errorFunc(e)
          },
        })
      }
      func(warpResolver(resolve, reject, func), reject)
    })
  },
  myCampusInfo: ({
    data,
  }: {
    data?: null
  }): Promise<
    paths['/v2/api/me/enrollments']['get']['responses']['200']['content']['application/json']
  > => {
    return new Promise((resolve, reject) => {
      let recursiveCount = 0
      const func = (successFunc, errorFunc) => {
        recursiveCount++
        if (recursiveCount > 3) {
          errorFunc('网络异常')
          return
        }
        const token = wx.getStorageSync('AlumniToken')
        let header = JSON.parse(JSON.stringify(baseHeader))
        if (token) {
          header = Object.assign(header, {
            Authorization: 'Bearer ' + token,
          })
        }
        header = defaultReqHeaderInterceptor(header)

        wx.request({
          method: 'GET',
          header: header,
          url: host + '/v2/api/me/enrollments',
          data: data
            ? {
                'variables': JSON.stringify(data),
              }
            : null,
          success: res => {
            successFunc(res)
          },
          error: e => {
            errorFunc(e)
          },
        })
      }
      func(warpResolver(resolve, reject, func), reject)
    })
  },
  campusIdentityParams: ({
    data,
  }: {
    data?: null
  }): Promise<
    paths['/v2/api/me/enrollments/params']['get']['responses']['200']['content']['application/json']
  > => {
    return new Promise((resolve, reject) => {
      let recursiveCount = 0
      const func = (successFunc, errorFunc) => {
        recursiveCount++
        if (recursiveCount > 3) {
          errorFunc('网络异常')
          return
        }
        const token = wx.getStorageSync('AlumniToken')
        let header = JSON.parse(JSON.stringify(baseHeader))
        if (token) {
          header = Object.assign(header, {
            Authorization: 'Bearer ' + token,
          })
        }
        header = defaultReqHeaderInterceptor(header)

        wx.request({
          method: 'GET',
          header: header,
          url: host + '/v2/api/me/enrollments/params',
          data: data
            ? {
                'variables': JSON.stringify(data),
              }
            : null,
          success: res => {
            successFunc(res)
          },
          error: e => {
            errorFunc(e)
          },
        })
      }
      func(warpResolver(resolve, reject, func), reject)
    })
  },
  removeFriend: ({
    data,
  }: {
    data?: paths['/v2/api/me/friend']['delete']['requestBody'] extends infer Body
      ? Body extends undefined
        ? undefined
        : Body extends { content: infer Content }
          ? Content extends { 'application/json': infer JSONContent }
            ? JSONContent
            : never
          : never
      : never
  }): Promise<
    paths['/v2/api/me/friend']['delete']['responses']['200']['content']['application/json']
  > => {
    return new Promise((resolve, reject) => {
      let recursiveCount = 0
      const func = (successFunc, errorFunc) => {
        recursiveCount++
        if (recursiveCount > 3) {
          errorFunc('网络异常')
          return
        }
        const token = wx.getStorageSync('AlumniToken')
        let header = JSON.parse(JSON.stringify(baseHeader))
        if (token) {
          header = Object.assign(header, {
            Authorization: 'Bearer ' + token,
          })
        }
        header = defaultReqHeaderInterceptor(header)

        wx.request({
          method: 'DELETE',
          header: header,
          url: host + '/v2/api/me/friend',
          data: data ? data : null,
          success: res => {
            successFunc(res)
          },
          error: e => {
            errorFunc(e)
          },
        })
      }
      func(warpResolver(resolve, reject, func), reject)
    })
  },
  rejectFriendRequest: ({
    data,
  }: {
    data?: paths['/v2/api/me/friend/request']['delete']['requestBody'] extends infer Body
      ? Body extends undefined
        ? undefined
        : Body extends { content: infer Content }
          ? Content extends { 'application/json': infer JSONContent }
            ? JSONContent
            : never
          : never
      : never
  }): Promise<
    paths['/v2/api/me/friend/request']['delete']['responses']['200']['content']['application/json']
  > => {
    return new Promise((resolve, reject) => {
      let recursiveCount = 0
      const func = (successFunc, errorFunc) => {
        recursiveCount++
        if (recursiveCount > 3) {
          errorFunc('网络异常')
          return
        }
        const token = wx.getStorageSync('AlumniToken')
        let header = JSON.parse(JSON.stringify(baseHeader))
        if (token) {
          header = Object.assign(header, {
            Authorization: 'Bearer ' + token,
          })
        }
        header = defaultReqHeaderInterceptor(header)

        wx.request({
          method: 'DELETE',
          header: header,
          url: host + '/v2/api/me/friend/request',
          data: data ? data : null,
          success: res => {
            successFunc(res)
          },
          error: e => {
            errorFunc(e)
          },
        })
      }
      func(warpResolver(resolve, reject, func), reject)
    })
  },
  sendFriendRequest: ({
    data,
  }: {
    data?: paths['/v2/api/me/friend/request']['post']['requestBody'] extends infer Body
      ? Body extends undefined
        ? undefined
        : Body extends { content: infer Content }
          ? Content extends { 'application/json': infer JSONContent }
            ? JSONContent
            : never
          : never
      : never
  }): Promise<
    paths['/v2/api/me/friend/request']['post']['responses']['200']['content']['application/json']
  > => {
    return new Promise((resolve, reject) => {
      let recursiveCount = 0
      const func = (successFunc, errorFunc) => {
        recursiveCount++
        if (recursiveCount > 3) {
          errorFunc('网络异常')
          return
        }
        const token = wx.getStorageSync('AlumniToken')
        let header = JSON.parse(JSON.stringify(baseHeader))
        if (token) {
          header = Object.assign(header, {
            Authorization: 'Bearer ' + token,
          })
        }
        header = defaultReqHeaderInterceptor(header)

        wx.request({
          method: 'POST',
          header: header,
          url: host + '/v2/api/me/friend/request',
          data: data ? data : null,
          success: res => {
            successFunc(res)
          },
          error: e => {
            errorFunc(e)
          },
        })
      }
      func(warpResolver(resolve, reject, func), reject)
    })
  },
  approveFriendRequest: ({
    data,
  }: {
    data?: paths['/v2/api/me/friend/request']['put']['requestBody'] extends infer Body
      ? Body extends undefined
        ? undefined
        : Body extends { content: infer Content }
          ? Content extends { 'application/json': infer JSONContent }
            ? JSONContent
            : never
          : never
      : never
  }): Promise<
    paths['/v2/api/me/friend/request']['put']['responses']['200']['content']['application/json']
  > => {
    return new Promise((resolve, reject) => {
      let recursiveCount = 0
      const func = (successFunc, errorFunc) => {
        recursiveCount++
        if (recursiveCount > 3) {
          errorFunc('网络异常')
          return
        }
        const token = wx.getStorageSync('AlumniToken')
        let header = JSON.parse(JSON.stringify(baseHeader))
        if (token) {
          header = Object.assign(header, {
            Authorization: 'Bearer ' + token,
          })
        }
        header = defaultReqHeaderInterceptor(header)

        wx.request({
          method: 'PUT',
          header: header,
          url: host + '/v2/api/me/friend/request',
          data: data ? data : null,
          success: res => {
            successFunc(res)
          },
          error: e => {
            errorFunc(e)
          },
        })
      }
      func(warpResolver(resolve, reject, func), reject)
    })
  },
  myFriends: ({
    data,
  }: {
    data?: null
  }): Promise<
    paths['/v2/api/me/friends']['get']['responses']['200']['content']['application/json']
  > => {
    return new Promise((resolve, reject) => {
      let recursiveCount = 0
      const func = (successFunc, errorFunc) => {
        recursiveCount++
        if (recursiveCount > 3) {
          errorFunc('网络异常')
          return
        }
        const token = wx.getStorageSync('AlumniToken')
        let header = JSON.parse(JSON.stringify(baseHeader))
        if (token) {
          header = Object.assign(header, {
            Authorization: 'Bearer ' + token,
          })
        }
        header = defaultReqHeaderInterceptor(header)

        wx.request({
          method: 'GET',
          header: header,
          url: host + '/v2/api/me/friends',
          data: data
            ? {
                'variables': JSON.stringify(data),
              }
            : null,
          success: res => {
            successFunc(res)
          },
          error: e => {
            errorFunc(e)
          },
        })
      }
      func(warpResolver(resolve, reject, func), reject)
    })
  },
  updateSelfInfo: ({
    data,
  }: {
    data?: paths['/v2/api/me/info']['put']['requestBody'] extends infer Body
      ? Body extends undefined
        ? undefined
        : Body extends { content: infer Content }
          ? Content extends { 'application/json': infer JSONContent }
            ? JSONContent
            : never
          : never
      : never
  }): Promise<
    paths['/v2/api/me/info']['put']['responses']['200']['content']['application/json']
  > => {
    return new Promise((resolve, reject) => {
      let recursiveCount = 0
      const func = (successFunc, errorFunc) => {
        recursiveCount++
        if (recursiveCount > 3) {
          errorFunc('网络异常')
          return
        }
        const token = wx.getStorageSync('AlumniToken')
        let header = JSON.parse(JSON.stringify(baseHeader))
        if (token) {
          header = Object.assign(header, {
            Authorization: 'Bearer ' + token,
          })
        }
        header = defaultReqHeaderInterceptor(header)

        wx.request({
          method: 'PUT',
          header: header,
          url: host + '/v2/api/me/info',
          data: data ? data : null,
          success: res => {
            successFunc(res)
          },
          error: e => {
            errorFunc(e)
          },
        })
      }
      func(warpResolver(resolve, reject, func), reject)
    })
  },
  myInvitations: ({
    data,
  }: {
    data?: null
  }): Promise<
    paths['/v2/api/me/invitation']['get']['responses']['200']['content']['application/json']
  > => {
    return new Promise((resolve, reject) => {
      let recursiveCount = 0
      const func = (successFunc, errorFunc) => {
        recursiveCount++
        if (recursiveCount > 3) {
          errorFunc('网络异常')
          return
        }
        const token = wx.getStorageSync('AlumniToken')
        let header = JSON.parse(JSON.stringify(baseHeader))
        if (token) {
          header = Object.assign(header, {
            Authorization: 'Bearer ' + token,
          })
        }
        header = defaultReqHeaderInterceptor(header)

        wx.request({
          method: 'GET',
          header: header,
          url: host + '/v2/api/me/invitation',
          data: data
            ? {
                'variables': JSON.stringify(data),
              }
            : null,
          success: res => {
            successFunc(res)
          },
          error: e => {
            errorFunc(e)
          },
        })
      }
      func(warpResolver(resolve, reject, func), reject)
    })
  },
  removeMyJob: ({
    data,
  }: {
    data?: paths['/v2/api/me/job']['delete']['requestBody'] extends infer Body
      ? Body extends undefined
        ? undefined
        : Body extends { content: infer Content }
          ? Content extends { 'application/json': infer JSONContent }
            ? JSONContent
            : never
          : never
      : never
  }): Promise<
    paths['/v2/api/me/job']['delete']['responses']['200']['content']['application/json']
  > => {
    return new Promise((resolve, reject) => {
      let recursiveCount = 0
      const func = (successFunc, errorFunc) => {
        recursiveCount++
        if (recursiveCount > 3) {
          errorFunc('网络异常')
          return
        }
        const token = wx.getStorageSync('AlumniToken')
        let header = JSON.parse(JSON.stringify(baseHeader))
        if (token) {
          header = Object.assign(header, {
            Authorization: 'Bearer ' + token,
          })
        }
        header = defaultReqHeaderInterceptor(header)

        wx.request({
          method: 'DELETE',
          header: header,
          url: host + '/v2/api/me/job',
          data: data ? data : null,
          success: res => {
            successFunc(res)
          },
          error: e => {
            errorFunc(e)
          },
        })
      }
      func(warpResolver(resolve, reject, func), reject)
    })
  },
  createMyJob: ({
    data,
  }: {
    data?: paths['/v2/api/me/job']['post']['requestBody'] extends infer Body
      ? Body extends undefined
        ? undefined
        : Body extends { content: infer Content }
          ? Content extends { 'application/json': infer JSONContent }
            ? JSONContent
            : never
          : never
      : never
  }): Promise<
    paths['/v2/api/me/job']['post']['responses']['200']['content']['application/json']
  > => {
    return new Promise((resolve, reject) => {
      let recursiveCount = 0
      const func = (successFunc, errorFunc) => {
        recursiveCount++
        if (recursiveCount > 3) {
          errorFunc('网络异常')
          return
        }
        const token = wx.getStorageSync('AlumniToken')
        let header = JSON.parse(JSON.stringify(baseHeader))
        if (token) {
          header = Object.assign(header, {
            Authorization: 'Bearer ' + token,
          })
        }
        header = defaultReqHeaderInterceptor(header)

        wx.request({
          method: 'POST',
          header: header,
          url: host + '/v2/api/me/job',
          data: data ? data : null,
          success: res => {
            successFunc(res)
          },
          error: e => {
            errorFunc(e)
          },
        })
      }
      func(warpResolver(resolve, reject, func), reject)
    })
  },
  updateMyJob: ({
    data,
  }: {
    data?: paths['/v2/api/me/job']['put']['requestBody'] extends infer Body
      ? Body extends undefined
        ? undefined
        : Body extends { content: infer Content }
          ? Content extends { 'application/json': infer JSONContent }
            ? JSONContent
            : never
          : never
      : never
  }): Promise<
    paths['/v2/api/me/job']['put']['responses']['200']['content']['application/json']
  > => {
    return new Promise((resolve, reject) => {
      let recursiveCount = 0
      const func = (successFunc, errorFunc) => {
        recursiveCount++
        if (recursiveCount > 3) {
          errorFunc('网络异常')
          return
        }
        const token = wx.getStorageSync('AlumniToken')
        let header = JSON.parse(JSON.stringify(baseHeader))
        if (token) {
          header = Object.assign(header, {
            Authorization: 'Bearer ' + token,
          })
        }
        header = defaultReqHeaderInterceptor(header)

        wx.request({
          method: 'PUT',
          header: header,
          url: host + '/v2/api/me/job',
          data: data ? data : null,
          success: res => {
            successFunc(res)
          },
          error: e => {
            errorFunc(e)
          },
        })
      }
      func(warpResolver(resolve, reject, func), reject)
    })
  },
  updateMyLocation: ({
    data,
  }: {
    data?: paths['/v2/api/me/location']['post']['requestBody'] extends infer Body
      ? Body extends undefined
        ? undefined
        : Body extends { content: infer Content }
          ? Content extends { 'application/json': infer JSONContent }
            ? JSONContent
            : never
          : never
      : never
  }): Promise<
    paths['/v2/api/me/location']['post']['responses']['200']['content']['application/json']
  > => {
    return new Promise((resolve, reject) => {
      let recursiveCount = 0
      const func = (successFunc, errorFunc) => {
        recursiveCount++
        if (recursiveCount > 3) {
          errorFunc('网络异常')
          return
        }
        const token = wx.getStorageSync('AlumniToken')
        let header = JSON.parse(JSON.stringify(baseHeader))
        if (token) {
          header = Object.assign(header, {
            Authorization: 'Bearer ' + token,
          })
        }
        header = defaultReqHeaderInterceptor(header)

        wx.request({
          method: 'POST',
          header: header,
          url: host + '/v2/api/me/location',
          data: data ? data : null,
          success: res => {
            successFunc(res)
          },
          error: e => {
            errorFunc(e)
          },
        })
      }
      func(warpResolver(resolve, reject, func), reject)
    })
  },
  setPublicMyLocationToAlumnusClose: ({
    data,
  }: {
    data?: null
  }): Promise<
    paths['/v2/api/me/location/private']['get']['responses']['200']['content']['application/json']
  > => {
    return new Promise((resolve, reject) => {
      let recursiveCount = 0
      const func = (successFunc, errorFunc) => {
        recursiveCount++
        if (recursiveCount > 3) {
          errorFunc('网络异常')
          return
        }
        const token = wx.getStorageSync('AlumniToken')
        let header = JSON.parse(JSON.stringify(baseHeader))
        if (token) {
          header = Object.assign(header, {
            Authorization: 'Bearer ' + token,
          })
        }
        header = defaultReqHeaderInterceptor(header)

        wx.request({
          method: 'GET',
          header: header,
          url: host + '/v2/api/me/location/private',
          data: data
            ? {
                'variables': JSON.stringify(data),
              }
            : null,
          success: res => {
            successFunc(res)
          },
          error: e => {
            errorFunc(e)
          },
        })
      }
      func(warpResolver(resolve, reject, func), reject)
    })
  },
  setPublicMyLocationToAlumnusOpen: ({
    data,
  }: {
    data?: null
  }): Promise<
    paths['/v2/api/me/location/public']['get']['responses']['200']['content']['application/json']
  > => {
    return new Promise((resolve, reject) => {
      let recursiveCount = 0
      const func = (successFunc, errorFunc) => {
        recursiveCount++
        if (recursiveCount > 3) {
          errorFunc('网络异常')
          return
        }
        const token = wx.getStorageSync('AlumniToken')
        let header = JSON.parse(JSON.stringify(baseHeader))
        if (token) {
          header = Object.assign(header, {
            Authorization: 'Bearer ' + token,
          })
        }
        header = defaultReqHeaderInterceptor(header)

        wx.request({
          method: 'GET',
          header: header,
          url: host + '/v2/api/me/location/public',
          data: data
            ? {
                'variables': JSON.stringify(data),
              }
            : null,
          success: res => {
            successFunc(res)
          },
          error: e => {
            errorFunc(e)
          },
        })
      }
      func(warpResolver(resolve, reject, func), reject)
    })
  },
  getOrder: ({
    data,
  }: {
    data?: paths['/v2/api/me/mall/order']['get']['requestBody'] extends infer Body
      ? Body extends undefined
        ? undefined
        : Body extends { content: infer Content }
          ? Content extends { 'application/json': infer JSONContent }
            ? JSONContent
            : never
          : never
      : never
  }): Promise<
    paths['/v2/api/me/mall/order']['get']['responses']['200']['content']['application/json']
  > => {
    return new Promise((resolve, reject) => {
      let recursiveCount = 0
      const func = (successFunc, errorFunc) => {
        recursiveCount++
        if (recursiveCount > 3) {
          errorFunc('网络异常')
          return
        }
        const token = wx.getStorageSync('AlumniToken')
        let header = JSON.parse(JSON.stringify(baseHeader))
        if (token) {
          header = Object.assign(header, {
            Authorization: 'Bearer ' + token,
          })
        }
        header = defaultReqHeaderInterceptor(header)

        wx.request({
          method: 'GET',
          header: header,
          url: host + '/v2/api/me/mall/order',
          data: data
            ? {
                'variables': JSON.stringify(data),
              }
            : null,
          success: res => {
            successFunc(res)
          },
          error: e => {
            errorFunc(e)
          },
        })
      }
      func(warpResolver(resolve, reject, func), reject)
    })
  },
  getOrders: ({
    data,
  }: {
    data?: paths['/v2/api/me/mall/orders']['get']['requestBody'] extends infer Body
      ? Body extends undefined
        ? undefined
        : Body extends { content: infer Content }
          ? Content extends { 'application/json': infer JSONContent }
            ? JSONContent
            : never
          : never
      : never
  }): Promise<
    paths['/v2/api/me/mall/orders']['get']['responses']['200']['content']['application/json']
  > => {
    return new Promise((resolve, reject) => {
      let recursiveCount = 0
      const func = (successFunc, errorFunc) => {
        recursiveCount++
        if (recursiveCount > 3) {
          errorFunc('网络异常')
          return
        }
        const token = wx.getStorageSync('AlumniToken')
        let header = JSON.parse(JSON.stringify(baseHeader))
        if (token) {
          header = Object.assign(header, {
            Authorization: 'Bearer ' + token,
          })
        }
        header = defaultReqHeaderInterceptor(header)

        wx.request({
          method: 'GET',
          header: header,
          url: host + '/v2/api/me/mall/orders',
          data: data
            ? {
                'variables': JSON.stringify(data),
              }
            : null,
          success: res => {
            successFunc(res)
          },
          error: e => {
            errorFunc(e)
          },
        })
      }
      func(warpResolver(resolve, reject, func), reject)
    })
  },
  removeAlumnusRelative: ({
    data,
  }: {
    data?: paths['/v2/api/me/relatives']['delete']['requestBody'] extends infer Body
      ? Body extends undefined
        ? undefined
        : Body extends { content: infer Content }
          ? Content extends { 'application/json': infer JSONContent }
            ? JSONContent
            : never
          : never
      : never
  }): Promise<
    paths['/v2/api/me/relatives']['delete']['responses']['200']['content']['application/json']
  > => {
    return new Promise((resolve, reject) => {
      let recursiveCount = 0
      const func = (successFunc, errorFunc) => {
        recursiveCount++
        if (recursiveCount > 3) {
          errorFunc('网络异常')
          return
        }
        const token = wx.getStorageSync('AlumniToken')
        let header = JSON.parse(JSON.stringify(baseHeader))
        if (token) {
          header = Object.assign(header, {
            Authorization: 'Bearer ' + token,
          })
        }
        header = defaultReqHeaderInterceptor(header)

        wx.request({
          method: 'DELETE',
          header: header,
          url: host + '/v2/api/me/relatives',
          data: data ? data : null,
          success: res => {
            successFunc(res)
          },
          error: e => {
            errorFunc(e)
          },
        })
      }
      func(warpResolver(resolve, reject, func), reject)
    })
  },
  myRelatives: ({
    data,
  }: {
    data?: null
  }): Promise<
    paths['/v2/api/me/relatives']['get']['responses']['200']['content']['application/json']
  > => {
    return new Promise((resolve, reject) => {
      let recursiveCount = 0
      const func = (successFunc, errorFunc) => {
        recursiveCount++
        if (recursiveCount > 3) {
          errorFunc('网络异常')
          return
        }
        const token = wx.getStorageSync('AlumniToken')
        let header = JSON.parse(JSON.stringify(baseHeader))
        if (token) {
          header = Object.assign(header, {
            Authorization: 'Bearer ' + token,
          })
        }
        header = defaultReqHeaderInterceptor(header)

        wx.request({
          method: 'GET',
          header: header,
          url: host + '/v2/api/me/relatives',
          data: data
            ? {
                'variables': JSON.stringify(data),
              }
            : null,
          success: res => {
            successFunc(res)
          },
          error: e => {
            errorFunc(e)
          },
        })
      }
      func(warpResolver(resolve, reject, func), reject)
    })
  },
  createRelative: ({
    data,
  }: {
    data?: paths['/v2/api/me/relatives']['post']['requestBody'] extends infer Body
      ? Body extends undefined
        ? undefined
        : Body extends { content: infer Content }
          ? Content extends { 'application/json': infer JSONContent }
            ? JSONContent
            : never
          : never
      : never
  }): Promise<
    paths['/v2/api/me/relatives']['post']['responses']['200']['content']['application/json']
  > => {
    return new Promise((resolve, reject) => {
      let recursiveCount = 0
      const func = (successFunc, errorFunc) => {
        recursiveCount++
        if (recursiveCount > 3) {
          errorFunc('网络异常')
          return
        }
        const token = wx.getStorageSync('AlumniToken')
        let header = JSON.parse(JSON.stringify(baseHeader))
        if (token) {
          header = Object.assign(header, {
            Authorization: 'Bearer ' + token,
          })
        }
        header = defaultReqHeaderInterceptor(header)

        wx.request({
          method: 'POST',
          header: header,
          url: host + '/v2/api/me/relatives',
          data: data ? data : null,
          success: res => {
            successFunc(res)
          },
          error: e => {
            errorFunc(e)
          },
        })
      }
      func(warpResolver(resolve, reject, func), reject)
    })
  },
  updateRelative: ({
    data,
  }: {
    data?: paths['/v2/api/me/relatives']['put']['requestBody'] extends infer Body
      ? Body extends undefined
        ? undefined
        : Body extends { content: infer Content }
          ? Content extends { 'application/json': infer JSONContent }
            ? JSONContent
            : never
          : never
      : never
  }): Promise<
    paths['/v2/api/me/relatives']['put']['responses']['200']['content']['application/json']
  > => {
    return new Promise((resolve, reject) => {
      let recursiveCount = 0
      const func = (successFunc, errorFunc) => {
        recursiveCount++
        if (recursiveCount > 3) {
          errorFunc('网络异常')
          return
        }
        const token = wx.getStorageSync('AlumniToken')
        let header = JSON.parse(JSON.stringify(baseHeader))
        if (token) {
          header = Object.assign(header, {
            Authorization: 'Bearer ' + token,
          })
        }
        header = defaultReqHeaderInterceptor(header)

        wx.request({
          method: 'PUT',
          header: header,
          url: host + '/v2/api/me/relatives',
          data: data ? data : null,
          success: res => {
            successFunc(res)
          },
          error: e => {
            errorFunc(e)
          },
        })
      }
      func(warpResolver(resolve, reject, func), reject)
    })
  },
  updateSelfie: ({
    data,
  }: {
    data?: paths['/v2/api/me/selfie']['put']['requestBody'] extends infer Body
      ? Body extends undefined
        ? undefined
        : Body extends { content: infer Content }
          ? Content extends { 'application/json': infer JSONContent }
            ? JSONContent
            : never
          : never
      : never
  }): Promise<
    paths['/v2/api/me/selfie']['put']['responses']['200']['content']['application/json']
  > => {
    return new Promise((resolve, reject) => {
      let recursiveCount = 0
      const func = (successFunc, errorFunc) => {
        recursiveCount++
        if (recursiveCount > 3) {
          errorFunc('网络异常')
          return
        }
        const token = wx.getStorageSync('AlumniToken')
        let header = JSON.parse(JSON.stringify(baseHeader))
        if (token) {
          header = Object.assign(header, {
            Authorization: 'Bearer ' + token,
          })
        }
        header = defaultReqHeaderInterceptor(header)

        wx.request({
          method: 'PUT',
          header: header,
          url: host + '/v2/api/me/selfie',
          data: data ? data : null,
          success: res => {
            successFunc(res)
          },
          error: e => {
            errorFunc(e)
          },
        })
      }
      func(warpResolver(resolve, reject, func), reject)
    })
  },
  updateAnnivSelfie: ({
    data,
  }: {
    data?: paths['/v2/api/me/selfie/anniv']['put']['requestBody'] extends infer Body
      ? Body extends undefined
        ? undefined
        : Body extends { content: infer Content }
          ? Content extends { 'application/json': infer JSONContent }
            ? JSONContent
            : never
          : never
      : never
  }): Promise<
    paths['/v2/api/me/selfie/anniv']['put']['responses']['200']['content']['application/json']
  > => {
    return new Promise((resolve, reject) => {
      let recursiveCount = 0
      const func = (successFunc, errorFunc) => {
        recursiveCount++
        if (recursiveCount > 3) {
          errorFunc('网络异常')
          return
        }
        const token = wx.getStorageSync('AlumniToken')
        let header = JSON.parse(JSON.stringify(baseHeader))
        if (token) {
          header = Object.assign(header, {
            Authorization: 'Bearer ' + token,
          })
        }
        header = defaultReqHeaderInterceptor(header)

        wx.request({
          method: 'PUT',
          header: header,
          url: host + '/v2/api/me/selfie/anniv',
          data: data ? data : null,
          success: res => {
            successFunc(res)
          },
          error: e => {
            errorFunc(e)
          },
        })
      }
      func(warpResolver(resolve, reject, func), reject)
    })
  },
  submitSuggestion: ({
    data,
  }: {
    data?: paths['/v2/api/me/suggestion']['post']['requestBody'] extends infer Body
      ? Body extends undefined
        ? undefined
        : Body extends { content: infer Content }
          ? Content extends { 'application/json': infer JSONContent }
            ? JSONContent
            : never
          : never
      : never
  }): Promise<
    paths['/v2/api/me/suggestion']['post']['responses']['200']['content']['application/json']
  > => {
    return new Promise((resolve, reject) => {
      let recursiveCount = 0
      const func = (successFunc, errorFunc) => {
        recursiveCount++
        if (recursiveCount > 3) {
          errorFunc('网络异常')
          return
        }
        const token = wx.getStorageSync('AlumniToken')
        let header = JSON.parse(JSON.stringify(baseHeader))
        if (token) {
          header = Object.assign(header, {
            Authorization: 'Bearer ' + token,
          })
        }
        header = defaultReqHeaderInterceptor(header)

        wx.request({
          method: 'POST',
          header: header,
          url: host + '/v2/api/me/suggestion',
          data: data ? data : null,
          success: res => {
            successFunc(res)
          },
          error: e => {
            errorFunc(e)
          },
        })
      }
      func(warpResolver(resolve, reject, func), reject)
    })
  },
  removeMyUncertifiedCampusIdentity: ({
    data,
  }: {
    data?: paths['/v2/api/me/unverified']['delete']['requestBody'] extends infer Body
      ? Body extends undefined
        ? undefined
        : Body extends { content: infer Content }
          ? Content extends { 'application/json': infer JSONContent }
            ? JSONContent
            : never
          : never
      : never
  }): Promise<
    paths['/v2/api/me/unverified']['delete']['responses']['200']['content']['application/json']
  > => {
    return new Promise((resolve, reject) => {
      let recursiveCount = 0
      const func = (successFunc, errorFunc) => {
        recursiveCount++
        if (recursiveCount > 3) {
          errorFunc('网络异常')
          return
        }
        const token = wx.getStorageSync('AlumniToken')
        let header = JSON.parse(JSON.stringify(baseHeader))
        if (token) {
          header = Object.assign(header, {
            Authorization: 'Bearer ' + token,
          })
        }
        header = defaultReqHeaderInterceptor(header)

        wx.request({
          method: 'DELETE',
          header: header,
          url: host + '/v2/api/me/unverified',
          data: data ? data : null,
          success: res => {
            successFunc(res)
          },
          error: e => {
            errorFunc(e)
          },
        })
      }
      func(warpResolver(resolve, reject, func), reject)
    })
  },
  myUncertifiedCampusIdentity: ({
    data,
  }: {
    data?: null
  }): Promise<
    paths['/v2/api/me/unverified']['get']['responses']['200']['content']['application/json']
  > => {
    return new Promise((resolve, reject) => {
      let recursiveCount = 0
      const func = (successFunc, errorFunc) => {
        recursiveCount++
        if (recursiveCount > 3) {
          errorFunc('网络异常')
          return
        }
        const token = wx.getStorageSync('AlumniToken')
        let header = JSON.parse(JSON.stringify(baseHeader))
        if (token) {
          header = Object.assign(header, {
            Authorization: 'Bearer ' + token,
          })
        }
        header = defaultReqHeaderInterceptor(header)

        wx.request({
          method: 'GET',
          header: header,
          url: host + '/v2/api/me/unverified',
          data: data
            ? {
                'variables': JSON.stringify(data),
              }
            : null,
          success: res => {
            successFunc(res)
          },
          error: e => {
            errorFunc(e)
          },
        })
      }
      func(warpResolver(resolve, reject, func), reject)
    })
  },
  updateCampusIdentitySupplementary: ({
    data,
  }: {
    data?: paths['/v2/api/me/unverified']['put']['requestBody'] extends infer Body
      ? Body extends undefined
        ? undefined
        : Body extends { content: infer Content }
          ? Content extends { 'application/json': infer JSONContent }
            ? JSONContent
            : never
          : never
      : never
  }): Promise<
    paths['/v2/api/me/unverified']['put']['responses']['200']['content']['application/json']
  > => {
    return new Promise((resolve, reject) => {
      let recursiveCount = 0
      const func = (successFunc, errorFunc) => {
        recursiveCount++
        if (recursiveCount > 3) {
          errorFunc('网络异常')
          return
        }
        const token = wx.getStorageSync('AlumniToken')
        let header = JSON.parse(JSON.stringify(baseHeader))
        if (token) {
          header = Object.assign(header, {
            Authorization: 'Bearer ' + token,
          })
        }
        header = defaultReqHeaderInterceptor(header)

        wx.request({
          method: 'PUT',
          header: header,
          url: host + '/v2/api/me/unverified',
          data: data ? data : null,
          success: res => {
            successFunc(res)
          },
          error: e => {
            errorFunc(e)
          },
        })
      }
      func(warpResolver(resolve, reject, func), reject)
    })
  },
  removeMenu: ({
    data,
  }: {
    data?: paths['/v2/api/menu']['delete']['requestBody'] extends infer Body
      ? Body extends undefined
        ? undefined
        : Body extends { content: infer Content }
          ? Content extends { 'application/json': infer JSONContent }
            ? JSONContent
            : never
          : never
      : never
  }): Promise<
    paths['/v2/api/menu']['delete']['responses']['200']['content']['application/json']
  > => {
    return new Promise((resolve, reject) => {
      let recursiveCount = 0
      const func = (successFunc, errorFunc) => {
        recursiveCount++
        if (recursiveCount > 3) {
          errorFunc('网络异常')
          return
        }
        const token = wx.getStorageSync('AlumniToken')
        let header = JSON.parse(JSON.stringify(baseHeader))
        if (token) {
          header = Object.assign(header, {
            Authorization: 'Bearer ' + token,
          })
        }
        header = defaultReqHeaderInterceptor(header)

        wx.request({
          method: 'DELETE',
          header: header,
          url: host + '/v2/api/menu',
          data: data ? data : null,
          success: res => {
            successFunc(res)
          },
          error: e => {
            errorFunc(e)
          },
        })
      }
      func(warpResolver(resolve, reject, func), reject)
    })
  },
  moveMenu: ({
    data,
  }: {
    data?: paths['/v2/api/menu/move']['post']['requestBody'] extends infer Body
      ? Body extends undefined
        ? undefined
        : Body extends { content: infer Content }
          ? Content extends { 'application/json': infer JSONContent }
            ? JSONContent
            : never
          : never
      : never
  }): Promise<
    paths['/v2/api/menu/move']['post']['responses']['200']['content']['application/json']
  > => {
    return new Promise((resolve, reject) => {
      let recursiveCount = 0
      const func = (successFunc, errorFunc) => {
        recursiveCount++
        if (recursiveCount > 3) {
          errorFunc('网络异常')
          return
        }
        const token = wx.getStorageSync('AlumniToken')
        let header = JSON.parse(JSON.stringify(baseHeader))
        if (token) {
          header = Object.assign(header, {
            Authorization: 'Bearer ' + token,
          })
        }
        header = defaultReqHeaderInterceptor(header)

        wx.request({
          method: 'POST',
          header: header,
          url: host + '/v2/api/menu/move',
          data: data ? data : null,
          success: res => {
            successFunc(res)
          },
          error: e => {
            errorFunc(e)
          },
        })
      }
      func(warpResolver(resolve, reject, func), reject)
    })
  },
  publishMenu: ({
    data,
  }: {
    data?: paths['/v2/api/menu/publish']['post']['requestBody'] extends infer Body
      ? Body extends undefined
        ? undefined
        : Body extends { content: infer Content }
          ? Content extends { 'application/json': infer JSONContent }
            ? JSONContent
            : never
          : never
      : never
  }): Promise<
    paths['/v2/api/menu/publish']['post']['responses']['200']['content']['application/json']
  > => {
    return new Promise((resolve, reject) => {
      let recursiveCount = 0
      const func = (successFunc, errorFunc) => {
        recursiveCount++
        if (recursiveCount > 3) {
          errorFunc('网络异常')
          return
        }
        const token = wx.getStorageSync('AlumniToken')
        let header = JSON.parse(JSON.stringify(baseHeader))
        if (token) {
          header = Object.assign(header, {
            Authorization: 'Bearer ' + token,
          })
        }
        header = defaultReqHeaderInterceptor(header)

        wx.request({
          method: 'POST',
          header: header,
          url: host + '/v2/api/menu/publish',
          data: data ? data : null,
          success: res => {
            successFunc(res)
          },
          error: e => {
            errorFunc(e)
          },
        })
      }
      func(warpResolver(resolve, reject, func), reject)
    })
  },
  unPublishMenu: ({
    data,
  }: {
    data?: paths['/v2/api/menu/unpublish']['post']['requestBody'] extends infer Body
      ? Body extends undefined
        ? undefined
        : Body extends { content: infer Content }
          ? Content extends { 'application/json': infer JSONContent }
            ? JSONContent
            : never
          : never
      : never
  }): Promise<
    paths['/v2/api/menu/unpublish']['post']['responses']['200']['content']['application/json']
  > => {
    return new Promise((resolve, reject) => {
      let recursiveCount = 0
      const func = (successFunc, errorFunc) => {
        recursiveCount++
        if (recursiveCount > 3) {
          errorFunc('网络异常')
          return
        }
        const token = wx.getStorageSync('AlumniToken')
        let header = JSON.parse(JSON.stringify(baseHeader))
        if (token) {
          header = Object.assign(header, {
            Authorization: 'Bearer ' + token,
          })
        }
        header = defaultReqHeaderInterceptor(header)

        wx.request({
          method: 'POST',
          header: header,
          url: host + '/v2/api/menu/unpublish',
          data: data ? data : null,
          success: res => {
            successFunc(res)
          },
          error: e => {
            errorFunc(e)
          },
        })
      }
      func(warpResolver(resolve, reject, func), reject)
    })
  },
  getMenus: ({
    data,
  }: {
    data?: null
  }): Promise<paths['/v2/api/menus']['get']['responses']['200']['content']['application/json']> => {
    return new Promise((resolve, reject) => {
      let recursiveCount = 0
      const func = (successFunc, errorFunc) => {
        recursiveCount++
        if (recursiveCount > 3) {
          errorFunc('网络异常')
          return
        }
        const token = wx.getStorageSync('AlumniToken')
        let header = JSON.parse(JSON.stringify(baseHeader))
        if (token) {
          header = Object.assign(header, {
            Authorization: 'Bearer ' + token,
          })
        }
        header = defaultReqHeaderInterceptor(header)

        wx.request({
          method: 'GET',
          header: header,
          url: host + '/v2/api/menus',
          data: data
            ? {
                'variables': JSON.stringify(data),
              }
            : null,
          success: res => {
            successFunc(res)
          },
          error: e => {
            errorFunc(e)
          },
        })
      }
      func(warpResolver(resolve, reject, func), reject)
    })
  },
  createMenu: ({
    data,
  }: {
    data?: paths['/v2/api/menus']['post']['requestBody'] extends infer Body
      ? Body extends undefined
        ? undefined
        : Body extends { content: infer Content }
          ? Content extends { 'application/json': infer JSONContent }
            ? JSONContent
            : never
          : never
      : never
  }): Promise<
    paths['/v2/api/menus']['post']['responses']['200']['content']['application/json']
  > => {
    return new Promise((resolve, reject) => {
      let recursiveCount = 0
      const func = (successFunc, errorFunc) => {
        recursiveCount++
        if (recursiveCount > 3) {
          errorFunc('网络异常')
          return
        }
        const token = wx.getStorageSync('AlumniToken')
        let header = JSON.parse(JSON.stringify(baseHeader))
        if (token) {
          header = Object.assign(header, {
            Authorization: 'Bearer ' + token,
          })
        }
        header = defaultReqHeaderInterceptor(header)

        wx.request({
          method: 'POST',
          header: header,
          url: host + '/v2/api/menus',
          data: data ? data : null,
          success: res => {
            successFunc(res)
          },
          error: e => {
            errorFunc(e)
          },
        })
      }
      func(warpResolver(resolve, reject, func), reject)
    })
  },
  updateMenu: ({
    data,
  }: {
    data?: paths['/v2/api/menus']['put']['requestBody'] extends infer Body
      ? Body extends undefined
        ? undefined
        : Body extends { content: infer Content }
          ? Content extends { 'application/json': infer JSONContent }
            ? JSONContent
            : never
          : never
      : never
  }): Promise<paths['/v2/api/menus']['put']['responses']['200']['content']['application/json']> => {
    return new Promise((resolve, reject) => {
      let recursiveCount = 0
      const func = (successFunc, errorFunc) => {
        recursiveCount++
        if (recursiveCount > 3) {
          errorFunc('网络异常')
          return
        }
        const token = wx.getStorageSync('AlumniToken')
        let header = JSON.parse(JSON.stringify(baseHeader))
        if (token) {
          header = Object.assign(header, {
            Authorization: 'Bearer ' + token,
          })
        }
        header = defaultReqHeaderInterceptor(header)

        wx.request({
          method: 'PUT',
          header: header,
          url: host + '/v2/api/menus',
          data: data ? data : null,
          success: res => {
            successFunc(res)
          },
          error: e => {
            errorFunc(e)
          },
        })
      }
      func(warpResolver(resolve, reject, func), reject)
    })
  },
  applicableOrganizations: ({
    data,
  }: {
    data?: paths['/v2/api/org/applicable']['get']['requestBody'] extends infer Body
      ? Body extends undefined
        ? undefined
        : Body extends { content: infer Content }
          ? Content extends { 'application/json': infer JSONContent }
            ? JSONContent
            : never
          : never
      : never
  }): Promise<
    paths['/v2/api/org/applicable']['get']['responses']['200']['content']['application/json']
  > => {
    return new Promise((resolve, reject) => {
      let recursiveCount = 0
      const func = (successFunc, errorFunc) => {
        recursiveCount++
        if (recursiveCount > 3) {
          errorFunc('网络异常')
          return
        }
        const token = wx.getStorageSync('AlumniToken')
        let header = JSON.parse(JSON.stringify(baseHeader))
        if (token) {
          header = Object.assign(header, {
            Authorization: 'Bearer ' + token,
          })
        }
        header = defaultReqHeaderInterceptor(header)

        wx.request({
          method: 'GET',
          header: header,
          url: host + '/v2/api/org/applicable',
          data: data
            ? {
                'variables': JSON.stringify(data),
              }
            : null,
          success: res => {
            successFunc(res)
          },
          error: e => {
            errorFunc(e)
          },
        })
      }
      func(warpResolver(resolve, reject, func), reject)
    })
  },
  cancelOrgApplication: ({
    data,
  }: {
    data?: paths['/v2/api/org/application']['delete']['requestBody'] extends infer Body
      ? Body extends undefined
        ? undefined
        : Body extends { content: infer Content }
          ? Content extends { 'application/json': infer JSONContent }
            ? JSONContent
            : never
          : never
      : never
  }): Promise<
    paths['/v2/api/org/application']['delete']['responses']['200']['content']['application/json']
  > => {
    return new Promise((resolve, reject) => {
      let recursiveCount = 0
      const func = (successFunc, errorFunc) => {
        recursiveCount++
        if (recursiveCount > 3) {
          errorFunc('网络异常')
          return
        }
        const token = wx.getStorageSync('AlumniToken')
        let header = JSON.parse(JSON.stringify(baseHeader))
        if (token) {
          header = Object.assign(header, {
            Authorization: 'Bearer ' + token,
          })
        }
        header = defaultReqHeaderInterceptor(header)

        wx.request({
          method: 'DELETE',
          header: header,
          url: host + '/v2/api/org/application',
          data: data ? data : null,
          success: res => {
            successFunc(res)
          },
          error: e => {
            errorFunc(e)
          },
        })
      }
      func(warpResolver(resolve, reject, func), reject)
    })
  },
  myApplications: ({
    data,
  }: {
    data?: null
  }): Promise<
    paths['/v2/api/org/application']['get']['responses']['200']['content']['application/json']
  > => {
    return new Promise((resolve, reject) => {
      let recursiveCount = 0
      const func = (successFunc, errorFunc) => {
        recursiveCount++
        if (recursiveCount > 3) {
          errorFunc('网络异常')
          return
        }
        const token = wx.getStorageSync('AlumniToken')
        let header = JSON.parse(JSON.stringify(baseHeader))
        if (token) {
          header = Object.assign(header, {
            Authorization: 'Bearer ' + token,
          })
        }
        header = defaultReqHeaderInterceptor(header)

        wx.request({
          method: 'GET',
          header: header,
          url: host + '/v2/api/org/application',
          data: data
            ? {
                'variables': JSON.stringify(data),
              }
            : null,
          success: res => {
            successFunc(res)
          },
          error: e => {
            errorFunc(e)
          },
        })
      }
      func(warpResolver(resolve, reject, func), reject)
    })
  },
  createOrgApplication: ({
    data,
  }: {
    data?: paths['/v2/api/org/application']['post']['requestBody'] extends infer Body
      ? Body extends undefined
        ? undefined
        : Body extends { content: infer Content }
          ? Content extends { 'application/json': infer JSONContent }
            ? JSONContent
            : never
          : never
      : never
  }): Promise<
    paths['/v2/api/org/application']['post']['responses']['200']['content']['application/json']
  > => {
    return new Promise((resolve, reject) => {
      let recursiveCount = 0
      const func = (successFunc, errorFunc) => {
        recursiveCount++
        if (recursiveCount > 3) {
          errorFunc('网络异常')
          return
        }
        const token = wx.getStorageSync('AlumniToken')
        let header = JSON.parse(JSON.stringify(baseHeader))
        if (token) {
          header = Object.assign(header, {
            Authorization: 'Bearer ' + token,
          })
        }
        header = defaultReqHeaderInterceptor(header)

        wx.request({
          method: 'POST',
          header: header,
          url: host + '/v2/api/org/application',
          data: data ? data : null,
          success: res => {
            successFunc(res)
          },
          error: e => {
            errorFunc(e)
          },
        })
      }
      func(warpResolver(resolve, reject, func), reject)
    })
  },
  updateOrgApplication: ({
    data,
  }: {
    data?: paths['/v2/api/org/application']['put']['requestBody'] extends infer Body
      ? Body extends undefined
        ? undefined
        : Body extends { content: infer Content }
          ? Content extends { 'application/json': infer JSONContent }
            ? JSONContent
            : never
          : never
      : never
  }): Promise<
    paths['/v2/api/org/application']['put']['responses']['200']['content']['application/json']
  > => {
    return new Promise((resolve, reject) => {
      let recursiveCount = 0
      const func = (successFunc, errorFunc) => {
        recursiveCount++
        if (recursiveCount > 3) {
          errorFunc('网络异常')
          return
        }
        const token = wx.getStorageSync('AlumniToken')
        let header = JSON.parse(JSON.stringify(baseHeader))
        if (token) {
          header = Object.assign(header, {
            Authorization: 'Bearer ' + token,
          })
        }
        header = defaultReqHeaderInterceptor(header)

        wx.request({
          method: 'PUT',
          header: header,
          url: host + '/v2/api/org/application',
          data: data ? data : null,
          success: res => {
            successFunc(res)
          },
          error: e => {
            errorFunc(e)
          },
        })
      }
      func(warpResolver(resolve, reject, func), reject)
    })
  },
  approveOrgApplication: ({
    data,
  }: {
    data?: paths['/v2/api/org/application/approve']['post']['requestBody'] extends infer Body
      ? Body extends undefined
        ? undefined
        : Body extends { content: infer Content }
          ? Content extends { 'application/json': infer JSONContent }
            ? JSONContent
            : never
          : never
      : never
  }): Promise<
    paths['/v2/api/org/application/approve']['post']['responses']['200']['content']['application/json']
  > => {
    return new Promise((resolve, reject) => {
      let recursiveCount = 0
      const func = (successFunc, errorFunc) => {
        recursiveCount++
        if (recursiveCount > 3) {
          errorFunc('网络异常')
          return
        }
        const token = wx.getStorageSync('AlumniToken')
        let header = JSON.parse(JSON.stringify(baseHeader))
        if (token) {
          header = Object.assign(header, {
            Authorization: 'Bearer ' + token,
          })
        }
        header = defaultReqHeaderInterceptor(header)

        wx.request({
          method: 'POST',
          header: header,
          url: host + '/v2/api/org/application/approve',
          data: data ? data : null,
          success: res => {
            successFunc(res)
          },
          error: e => {
            errorFunc(e)
          },
        })
      }
      func(warpResolver(resolve, reject, func), reject)
    })
  },
  ignoreOrgApplication: ({
    data,
  }: {
    data?: paths['/v2/api/org/application/ignore']['post']['requestBody'] extends infer Body
      ? Body extends undefined
        ? undefined
        : Body extends { content: infer Content }
          ? Content extends { 'application/json': infer JSONContent }
            ? JSONContent
            : never
          : never
      : never
  }): Promise<
    paths['/v2/api/org/application/ignore']['post']['responses']['200']['content']['application/json']
  > => {
    return new Promise((resolve, reject) => {
      let recursiveCount = 0
      const func = (successFunc, errorFunc) => {
        recursiveCount++
        if (recursiveCount > 3) {
          errorFunc('网络异常')
          return
        }
        const token = wx.getStorageSync('AlumniToken')
        let header = JSON.parse(JSON.stringify(baseHeader))
        if (token) {
          header = Object.assign(header, {
            Authorization: 'Bearer ' + token,
          })
        }
        header = defaultReqHeaderInterceptor(header)

        wx.request({
          method: 'POST',
          header: header,
          url: host + '/v2/api/org/application/ignore',
          data: data ? data : null,
          success: res => {
            successFunc(res)
          },
          error: e => {
            errorFunc(e)
          },
        })
      }
      func(warpResolver(resolve, reject, func), reject)
    })
  },
  rejectOrgApplication: ({
    data,
  }: {
    data?: paths['/v2/api/org/application/reject']['post']['requestBody'] extends infer Body
      ? Body extends undefined
        ? undefined
        : Body extends { content: infer Content }
          ? Content extends { 'application/json': infer JSONContent }
            ? JSONContent
            : never
          : never
      : never
  }): Promise<
    paths['/v2/api/org/application/reject']['post']['responses']['200']['content']['application/json']
  > => {
    return new Promise((resolve, reject) => {
      let recursiveCount = 0
      const func = (successFunc, errorFunc) => {
        recursiveCount++
        if (recursiveCount > 3) {
          errorFunc('网络异常')
          return
        }
        const token = wx.getStorageSync('AlumniToken')
        let header = JSON.parse(JSON.stringify(baseHeader))
        if (token) {
          header = Object.assign(header, {
            Authorization: 'Bearer ' + token,
          })
        }
        header = defaultReqHeaderInterceptor(header)

        wx.request({
          method: 'POST',
          header: header,
          url: host + '/v2/api/org/application/reject',
          data: data ? data : null,
          success: res => {
            successFunc(res)
          },
          error: e => {
            errorFunc(e)
          },
        })
      }
      func(warpResolver(resolve, reject, func), reject)
    })
  },
  findOrgApplicationRecord: ({
    data,
  }: {
    data?: paths['/v2/api/org/applications']['get']['requestBody'] extends infer Body
      ? Body extends undefined
        ? undefined
        : Body extends { content: infer Content }
          ? Content extends { 'application/json': infer JSONContent }
            ? JSONContent
            : never
          : never
      : never
  }): Promise<
    paths['/v2/api/org/applications']['get']['responses']['200']['content']['application/json']
  > => {
    return new Promise((resolve, reject) => {
      let recursiveCount = 0
      const func = (successFunc, errorFunc) => {
        recursiveCount++
        if (recursiveCount > 3) {
          errorFunc('网络异常')
          return
        }
        const token = wx.getStorageSync('AlumniToken')
        let header = JSON.parse(JSON.stringify(baseHeader))
        if (token) {
          header = Object.assign(header, {
            Authorization: 'Bearer ' + token,
          })
        }
        header = defaultReqHeaderInterceptor(header)

        wx.request({
          method: 'GET',
          header: header,
          url: host + '/v2/api/org/applications',
          data: data
            ? {
                'variables': JSON.stringify(data),
              }
            : null,
          success: res => {
            successFunc(res)
          },
          error: e => {
            errorFunc(e)
          },
        })
      }
      func(warpResolver(resolve, reject, func), reject)
    })
  },
  findOrgApplicationRecordForMiniProgramProcessed: ({
    data,
  }: {
    data?: paths['/v2/api/org/applications/mini-program/processed']['get']['requestBody'] extends infer Body
      ? Body extends undefined
        ? undefined
        : Body extends { content: infer Content }
          ? Content extends { 'application/json': infer JSONContent }
            ? JSONContent
            : never
          : never
      : never
  }): Promise<
    paths['/v2/api/org/applications/mini-program/processed']['get']['responses']['200']['content']['application/json']
  > => {
    return new Promise((resolve, reject) => {
      let recursiveCount = 0
      const func = (successFunc, errorFunc) => {
        recursiveCount++
        if (recursiveCount > 3) {
          errorFunc('网络异常')
          return
        }
        const token = wx.getStorageSync('AlumniToken')
        let header = JSON.parse(JSON.stringify(baseHeader))
        if (token) {
          header = Object.assign(header, {
            Authorization: 'Bearer ' + token,
          })
        }
        header = defaultReqHeaderInterceptor(header)

        wx.request({
          method: 'GET',
          header: header,
          url: host + '/v2/api/org/applications/mini-program/processed',
          data: data
            ? {
                'variables': JSON.stringify(data),
              }
            : null,
          success: res => {
            successFunc(res)
          },
          error: e => {
            errorFunc(e)
          },
        })
      }
      func(warpResolver(resolve, reject, func), reject)
    })
  },
  findOrgApplicationRecordForMiniProgramWaiting: ({
    data,
  }: {
    data?: paths['/v2/api/org/applications/mini-program/waiting']['get']['requestBody'] extends infer Body
      ? Body extends undefined
        ? undefined
        : Body extends { content: infer Content }
          ? Content extends { 'application/json': infer JSONContent }
            ? JSONContent
            : never
          : never
      : never
  }): Promise<
    paths['/v2/api/org/applications/mini-program/waiting']['get']['responses']['200']['content']['application/json']
  > => {
    return new Promise((resolve, reject) => {
      let recursiveCount = 0
      const func = (successFunc, errorFunc) => {
        recursiveCount++
        if (recursiveCount > 3) {
          errorFunc('网络异常')
          return
        }
        const token = wx.getStorageSync('AlumniToken')
        let header = JSON.parse(JSON.stringify(baseHeader))
        if (token) {
          header = Object.assign(header, {
            Authorization: 'Bearer ' + token,
          })
        }
        header = defaultReqHeaderInterceptor(header)

        wx.request({
          method: 'GET',
          header: header,
          url: host + '/v2/api/org/applications/mini-program/waiting',
          data: data
            ? {
                'variables': JSON.stringify(data),
              }
            : null,
          success: res => {
            successFunc(res)
          },
          error: e => {
            errorFunc(e)
          },
        })
      }
      func(warpResolver(resolve, reject, func), reject)
    })
  },
  currentOrgDonationProjects: ({
    data,
  }: {
    data?: null
  }): Promise<
    paths['/v2/api/org/donation/projects']['get']['responses']['200']['content']['application/json']
  > => {
    return new Promise((resolve, reject) => {
      let recursiveCount = 0
      const func = (successFunc, errorFunc) => {
        recursiveCount++
        if (recursiveCount > 3) {
          errorFunc('网络异常')
          return
        }
        const token = wx.getStorageSync('AlumniToken')
        let header = JSON.parse(JSON.stringify(baseHeader))
        if (token) {
          header = Object.assign(header, {
            Authorization: 'Bearer ' + token,
          })
        }
        header = defaultReqHeaderInterceptor(header)

        wx.request({
          method: 'GET',
          header: header,
          url: host + '/v2/api/org/donation/projects',
          data: data
            ? {
                'variables': JSON.stringify(data),
              }
            : null,
          success: res => {
            successFunc(res)
          },
          error: e => {
            errorFunc(e)
          },
        })
      }
      func(warpResolver(resolve, reject, func), reject)
    })
  },
  findOrgInvitationRecord: ({
    data,
  }: {
    data?: paths['/v2/api/org/invitation']['get']['requestBody'] extends infer Body
      ? Body extends undefined
        ? undefined
        : Body extends { content: infer Content }
          ? Content extends { 'application/json': infer JSONContent }
            ? JSONContent
            : never
          : never
      : never
  }): Promise<
    paths['/v2/api/org/invitation']['get']['responses']['200']['content']['application/json']
  > => {
    return new Promise((resolve, reject) => {
      let recursiveCount = 0
      const func = (successFunc, errorFunc) => {
        recursiveCount++
        if (recursiveCount > 3) {
          errorFunc('网络异常')
          return
        }
        const token = wx.getStorageSync('AlumniToken')
        let header = JSON.parse(JSON.stringify(baseHeader))
        if (token) {
          header = Object.assign(header, {
            Authorization: 'Bearer ' + token,
          })
        }
        header = defaultReqHeaderInterceptor(header)

        wx.request({
          method: 'GET',
          header: header,
          url: host + '/v2/api/org/invitation',
          data: data
            ? {
                'variables': JSON.stringify(data),
              }
            : null,
          success: res => {
            successFunc(res)
          },
          error: e => {
            errorFunc(e)
          },
        })
      }
      func(warpResolver(resolve, reject, func), reject)
    })
  },
  createOrgInvitation: ({
    data,
  }: {
    data?: paths['/v2/api/org/invitation']['post']['requestBody'] extends infer Body
      ? Body extends undefined
        ? undefined
        : Body extends { content: infer Content }
          ? Content extends { 'application/json': infer JSONContent }
            ? JSONContent
            : never
          : never
      : never
  }): Promise<
    paths['/v2/api/org/invitation']['post']['responses']['200']['content']['application/json']
  > => {
    return new Promise((resolve, reject) => {
      let recursiveCount = 0
      const func = (successFunc, errorFunc) => {
        recursiveCount++
        if (recursiveCount > 3) {
          errorFunc('网络异常')
          return
        }
        const token = wx.getStorageSync('AlumniToken')
        let header = JSON.parse(JSON.stringify(baseHeader))
        if (token) {
          header = Object.assign(header, {
            Authorization: 'Bearer ' + token,
          })
        }
        header = defaultReqHeaderInterceptor(header)

        wx.request({
          method: 'POST',
          header: header,
          url: host + '/v2/api/org/invitation',
          data: data ? data : null,
          success: res => {
            successFunc(res)
          },
          error: e => {
            errorFunc(e)
          },
        })
      }
      func(warpResolver(resolve, reject, func), reject)
    })
  },
  acceptOrgInvitation: ({
    data,
  }: {
    data?: paths['/v2/api/org/invitation/accept']['post']['requestBody'] extends infer Body
      ? Body extends undefined
        ? undefined
        : Body extends { content: infer Content }
          ? Content extends { 'application/json': infer JSONContent }
            ? JSONContent
            : never
          : never
      : never
  }): Promise<
    paths['/v2/api/org/invitation/accept']['post']['responses']['200']['content']['application/json']
  > => {
    return new Promise((resolve, reject) => {
      let recursiveCount = 0
      const func = (successFunc, errorFunc) => {
        recursiveCount++
        if (recursiveCount > 3) {
          errorFunc('网络异常')
          return
        }
        const token = wx.getStorageSync('AlumniToken')
        let header = JSON.parse(JSON.stringify(baseHeader))
        if (token) {
          header = Object.assign(header, {
            Authorization: 'Bearer ' + token,
          })
        }
        header = defaultReqHeaderInterceptor(header)

        wx.request({
          method: 'POST',
          header: header,
          url: host + '/v2/api/org/invitation/accept',
          data: data ? data : null,
          success: res => {
            successFunc(res)
          },
          error: e => {
            errorFunc(e)
          },
        })
      }
      func(warpResolver(resolve, reject, func), reject)
    })
  },
  findAlumnusForInvitation: ({
    data,
  }: {
    data?: paths['/v2/api/org/invitation/alumnus']['get']['requestBody'] extends infer Body
      ? Body extends undefined
        ? undefined
        : Body extends { content: infer Content }
          ? Content extends { 'application/json': infer JSONContent }
            ? JSONContent
            : never
          : never
      : never
  }): Promise<
    paths['/v2/api/org/invitation/alumnus']['get']['responses']['200']['content']['application/json']
  > => {
    return new Promise((resolve, reject) => {
      let recursiveCount = 0
      const func = (successFunc, errorFunc) => {
        recursiveCount++
        if (recursiveCount > 3) {
          errorFunc('网络异常')
          return
        }
        const token = wx.getStorageSync('AlumniToken')
        let header = JSON.parse(JSON.stringify(baseHeader))
        if (token) {
          header = Object.assign(header, {
            Authorization: 'Bearer ' + token,
          })
        }
        header = defaultReqHeaderInterceptor(header)

        wx.request({
          method: 'GET',
          header: header,
          url: host + '/v2/api/org/invitation/alumnus',
          data: data
            ? {
                'variables': JSON.stringify(data),
              }
            : null,
          success: res => {
            successFunc(res)
          },
          error: e => {
            errorFunc(e)
          },
        })
      }
      func(warpResolver(resolve, reject, func), reject)
    })
  },
  cancelOrgInvitation: ({
    data,
  }: {
    data?: paths['/v2/api/org/invitation/cancel']['post']['requestBody'] extends infer Body
      ? Body extends undefined
        ? undefined
        : Body extends { content: infer Content }
          ? Content extends { 'application/json': infer JSONContent }
            ? JSONContent
            : never
          : never
      : never
  }): Promise<
    paths['/v2/api/org/invitation/cancel']['post']['responses']['200']['content']['application/json']
  > => {
    return new Promise((resolve, reject) => {
      let recursiveCount = 0
      const func = (successFunc, errorFunc) => {
        recursiveCount++
        if (recursiveCount > 3) {
          errorFunc('网络异常')
          return
        }
        const token = wx.getStorageSync('AlumniToken')
        let header = JSON.parse(JSON.stringify(baseHeader))
        if (token) {
          header = Object.assign(header, {
            Authorization: 'Bearer ' + token,
          })
        }
        header = defaultReqHeaderInterceptor(header)

        wx.request({
          method: 'POST',
          header: header,
          url: host + '/v2/api/org/invitation/cancel',
          data: data ? data : null,
          success: res => {
            successFunc(res)
          },
          error: e => {
            errorFunc(e)
          },
        })
      }
      func(warpResolver(resolve, reject, func), reject)
    })
  },
  ignoreOrgInvitation: ({
    data,
  }: {
    data?: paths['/v2/api/org/invitation/ignore']['post']['requestBody'] extends infer Body
      ? Body extends undefined
        ? undefined
        : Body extends { content: infer Content }
          ? Content extends { 'application/json': infer JSONContent }
            ? JSONContent
            : never
          : never
      : never
  }): Promise<
    paths['/v2/api/org/invitation/ignore']['post']['responses']['200']['content']['application/json']
  > => {
    return new Promise((resolve, reject) => {
      let recursiveCount = 0
      const func = (successFunc, errorFunc) => {
        recursiveCount++
        if (recursiveCount > 3) {
          errorFunc('网络异常')
          return
        }
        const token = wx.getStorageSync('AlumniToken')
        let header = JSON.parse(JSON.stringify(baseHeader))
        if (token) {
          header = Object.assign(header, {
            Authorization: 'Bearer ' + token,
          })
        }
        header = defaultReqHeaderInterceptor(header)

        wx.request({
          method: 'POST',
          header: header,
          url: host + '/v2/api/org/invitation/ignore',
          data: data ? data : null,
          success: res => {
            successFunc(res)
          },
          error: e => {
            errorFunc(e)
          },
        })
      }
      func(warpResolver(resolve, reject, func), reject)
    })
  },
  currentOrgDetailForManage: ({
    data,
  }: {
    data?: null
  }): Promise<
    paths['/v2/api/org/manage']['get']['responses']['200']['content']['application/json']
  > => {
    return new Promise((resolve, reject) => {
      let recursiveCount = 0
      const func = (successFunc, errorFunc) => {
        recursiveCount++
        if (recursiveCount > 3) {
          errorFunc('网络异常')
          return
        }
        const token = wx.getStorageSync('AlumniToken')
        let header = JSON.parse(JSON.stringify(baseHeader))
        if (token) {
          header = Object.assign(header, {
            Authorization: 'Bearer ' + token,
          })
        }
        header = defaultReqHeaderInterceptor(header)

        wx.request({
          method: 'GET',
          header: header,
          url: host + '/v2/api/org/manage',
          data: data
            ? {
                'variables': JSON.stringify(data),
              }
            : null,
          success: res => {
            successFunc(res)
          },
          error: e => {
            errorFunc(e)
          },
        })
      }
      func(warpResolver(resolve, reject, func), reject)
    })
  },
  updateCurrentOrganization: ({
    data,
  }: {
    data?: paths['/v2/api/org/manage']['put']['requestBody'] extends infer Body
      ? Body extends undefined
        ? undefined
        : Body extends { content: infer Content }
          ? Content extends { 'application/json': infer JSONContent }
            ? JSONContent
            : never
          : never
      : never
  }): Promise<
    paths['/v2/api/org/manage']['put']['responses']['200']['content']['application/json']
  > => {
    return new Promise((resolve, reject) => {
      let recursiveCount = 0
      const func = (successFunc, errorFunc) => {
        recursiveCount++
        if (recursiveCount > 3) {
          errorFunc('网络异常')
          return
        }
        const token = wx.getStorageSync('AlumniToken')
        let header = JSON.parse(JSON.stringify(baseHeader))
        if (token) {
          header = Object.assign(header, {
            Authorization: 'Bearer ' + token,
          })
        }
        header = defaultReqHeaderInterceptor(header)

        wx.request({
          method: 'PUT',
          header: header,
          url: host + '/v2/api/org/manage',
          data: data ? data : null,
          success: res => {
            successFunc(res)
          },
          error: e => {
            errorFunc(e)
          },
        })
      }
      func(warpResolver(resolve, reject, func), reject)
    })
  },
  alumnusDetailForOrgAdmin: ({
    data,
  }: {
    data?: paths['/v2/api/org/member/manage']['get']['requestBody'] extends infer Body
      ? Body extends undefined
        ? undefined
        : Body extends { content: infer Content }
          ? Content extends { 'application/json': infer JSONContent }
            ? JSONContent
            : never
          : never
      : never
  }): Promise<
    paths['/v2/api/org/member/manage']['get']['responses']['200']['content']['application/json']
  > => {
    return new Promise((resolve, reject) => {
      let recursiveCount = 0
      const func = (successFunc, errorFunc) => {
        recursiveCount++
        if (recursiveCount > 3) {
          errorFunc('网络异常')
          return
        }
        const token = wx.getStorageSync('AlumniToken')
        let header = JSON.parse(JSON.stringify(baseHeader))
        if (token) {
          header = Object.assign(header, {
            Authorization: 'Bearer ' + token,
          })
        }
        header = defaultReqHeaderInterceptor(header)

        wx.request({
          method: 'GET',
          header: header,
          url: host + '/v2/api/org/member/manage',
          data: data
            ? {
                'variables': JSON.stringify(data),
              }
            : null,
          success: res => {
            successFunc(res)
          },
          error: e => {
            errorFunc(e)
          },
        })
      }
      func(warpResolver(resolve, reject, func), reject)
    })
  },
  findOrgApplicationMembers: ({
    data,
  }: {
    data?: paths['/v2/api/org/members']['get']['requestBody'] extends infer Body
      ? Body extends undefined
        ? undefined
        : Body extends { content: infer Content }
          ? Content extends { 'application/json': infer JSONContent }
            ? JSONContent
            : never
          : never
      : never
  }): Promise<
    paths['/v2/api/org/members']['get']['responses']['200']['content']['application/json']
  > => {
    return new Promise((resolve, reject) => {
      let recursiveCount = 0
      const func = (successFunc, errorFunc) => {
        recursiveCount++
        if (recursiveCount > 3) {
          errorFunc('网络异常')
          return
        }
        const token = wx.getStorageSync('AlumniToken')
        let header = JSON.parse(JSON.stringify(baseHeader))
        if (token) {
          header = Object.assign(header, {
            Authorization: 'Bearer ' + token,
          })
        }
        header = defaultReqHeaderInterceptor(header)

        wx.request({
          method: 'GET',
          header: header,
          url: host + '/v2/api/org/members',
          data: data
            ? {
                'variables': JSON.stringify(data),
              }
            : null,
          success: res => {
            successFunc(res)
          },
          error: e => {
            errorFunc(e)
          },
        })
      }
      func(warpResolver(resolve, reject, func), reject)
    })
  },
  findAlumnusForOrgAdmin: ({
    data,
  }: {
    data?: paths['/v2/api/org/members/manage']['get']['requestBody'] extends infer Body
      ? Body extends undefined
        ? undefined
        : Body extends { content: infer Content }
          ? Content extends { 'application/json': infer JSONContent }
            ? JSONContent
            : never
          : never
      : never
  }): Promise<
    paths['/v2/api/org/members/manage']['get']['responses']['200']['content']['application/json']
  > => {
    return new Promise((resolve, reject) => {
      let recursiveCount = 0
      const func = (successFunc, errorFunc) => {
        recursiveCount++
        if (recursiveCount > 3) {
          errorFunc('网络异常')
          return
        }
        const token = wx.getStorageSync('AlumniToken')
        let header = JSON.parse(JSON.stringify(baseHeader))
        if (token) {
          header = Object.assign(header, {
            Authorization: 'Bearer ' + token,
          })
        }
        header = defaultReqHeaderInterceptor(header)

        wx.request({
          method: 'GET',
          header: header,
          url: host + '/v2/api/org/members/manage',
          data: data
            ? {
                'variables': JSON.stringify(data),
              }
            : null,
          success: res => {
            successFunc(res)
          },
          error: e => {
            errorFunc(e)
          },
        })
      }
      func(warpResolver(resolve, reject, func), reject)
    })
  },
  currentOrgMenus: ({
    data,
  }: {
    data?: null
  }): Promise<
    paths['/v2/api/org/menus']['get']['responses']['200']['content']['application/json']
  > => {
    return new Promise((resolve, reject) => {
      let recursiveCount = 0
      const func = (successFunc, errorFunc) => {
        recursiveCount++
        if (recursiveCount > 3) {
          errorFunc('网络异常')
          return
        }
        const token = wx.getStorageSync('AlumniToken')
        let header = JSON.parse(JSON.stringify(baseHeader))
        if (token) {
          header = Object.assign(header, {
            Authorization: 'Bearer ' + token,
          })
        }
        header = defaultReqHeaderInterceptor(header)

        wx.request({
          method: 'GET',
          header: header,
          url: host + '/v2/api/org/menus',
          data: data
            ? {
                'variables': JSON.stringify(data),
              }
            : null,
          success: res => {
            successFunc(res)
          },
          error: e => {
            errorFunc(e)
          },
        })
      }
      func(warpResolver(resolve, reject, func), reject)
    })
  },
  publicOrganization: ({
    data,
  }: {
    data?: paths['/v2/api/org/public']['get']['requestBody'] extends infer Body
      ? Body extends undefined
        ? undefined
        : Body extends { content: infer Content }
          ? Content extends { 'application/json': infer JSONContent }
            ? JSONContent
            : never
          : never
      : never
  }): Promise<
    paths['/v2/api/org/public']['get']['responses']['200']['content']['application/json']
  > => {
    return new Promise((resolve, reject) => {
      let recursiveCount = 0
      const func = (successFunc, errorFunc) => {
        recursiveCount++
        if (recursiveCount > 3) {
          errorFunc('网络异常')
          return
        }
        const token = wx.getStorageSync('AlumniToken')
        let header = JSON.parse(JSON.stringify(baseHeader))
        if (token) {
          header = Object.assign(header, {
            Authorization: 'Bearer ' + token,
          })
        }
        header = defaultReqHeaderInterceptor(header)

        wx.request({
          method: 'GET',
          header: header,
          url: host + '/v2/api/org/public',
          data: data
            ? {
                'variables': JSON.stringify(data),
              }
            : null,
          success: res => {
            successFunc(res)
          },
          error: e => {
            errorFunc(e)
          },
        })
      }
      func(warpResolver(resolve, reject, func), reject)
    })
  },
  quitOrganization: ({
    data,
  }: {
    data?: paths['/v2/api/org/quit']['post']['requestBody'] extends infer Body
      ? Body extends undefined
        ? undefined
        : Body extends { content: infer Content }
          ? Content extends { 'application/json': infer JSONContent }
            ? JSONContent
            : never
          : never
      : never
  }): Promise<
    paths['/v2/api/org/quit']['post']['responses']['200']['content']['application/json']
  > => {
    return new Promise((resolve, reject) => {
      let recursiveCount = 0
      const func = (successFunc, errorFunc) => {
        recursiveCount++
        if (recursiveCount > 3) {
          errorFunc('网络异常')
          return
        }
        const token = wx.getStorageSync('AlumniToken')
        let header = JSON.parse(JSON.stringify(baseHeader))
        if (token) {
          header = Object.assign(header, {
            Authorization: 'Bearer ' + token,
          })
        }
        header = defaultReqHeaderInterceptor(header)

        wx.request({
          method: 'POST',
          header: header,
          url: host + '/v2/api/org/quit',
          data: data ? data : null,
          success: res => {
            successFunc(res)
          },
          error: e => {
            errorFunc(e)
          },
        })
      }
      func(warpResolver(resolve, reject, func), reject)
    })
  },
  subscriptionProjects: ({
    data,
  }: {
    data?: null
  }): Promise<
    paths['/v2/api/org/subscription/projects']['get']['responses']['200']['content']['application/json']
  > => {
    return new Promise((resolve, reject) => {
      let recursiveCount = 0
      const func = (successFunc, errorFunc) => {
        recursiveCount++
        if (recursiveCount > 3) {
          errorFunc('网络异常')
          return
        }
        const token = wx.getStorageSync('AlumniToken')
        let header = JSON.parse(JSON.stringify(baseHeader))
        if (token) {
          header = Object.assign(header, {
            Authorization: 'Bearer ' + token,
          })
        }
        header = defaultReqHeaderInterceptor(header)

        wx.request({
          method: 'GET',
          header: header,
          url: host + '/v2/api/org/subscription/projects',
          data: data
            ? {
                'variables': JSON.stringify(data),
              }
            : null,
          success: res => {
            successFunc(res)
          },
          error: e => {
            errorFunc(e)
          },
        })
      }
      func(warpResolver(resolve, reject, func), reject)
    })
  },
  updatePhoneViaCode: ({
    data,
  }: {
    data?: paths['/v2/api/phone']['put']['requestBody'] extends infer Body
      ? Body extends undefined
        ? undefined
        : Body extends { content: infer Content }
          ? Content extends { 'application/json': infer JSONContent }
            ? JSONContent
            : never
          : never
      : never
  }): Promise<paths['/v2/api/phone']['put']['responses']['200']['content']['application/json']> => {
    return new Promise((resolve, reject) => {
      let recursiveCount = 0
      const func = (successFunc, errorFunc) => {
        recursiveCount++
        if (recursiveCount > 3) {
          errorFunc('网络异常')
          return
        }
        const token = wx.getStorageSync('AlumniToken')
        let header = JSON.parse(JSON.stringify(baseHeader))
        if (token) {
          header = Object.assign(header, {
            Authorization: 'Bearer ' + token,
          })
        }
        header = defaultReqHeaderInterceptor(header)

        wx.request({
          method: 'PUT',
          header: header,
          url: host + '/v2/api/phone',
          data: data ? data : null,
          success: res => {
            successFunc(res)
          },
          error: e => {
            errorFunc(e)
          },
        })
      }
      func(warpResolver(resolve, reject, func), reject)
    })
  },
  getQRLoginCode: ({
    data,
  }: {
    data?: null
  }): Promise<
    paths['/v2/api/qrlogin']['get']['responses']['200']['content']['application/json']
  > => {
    return new Promise((resolve, reject) => {
      let recursiveCount = 0
      const func = (successFunc, errorFunc) => {
        recursiveCount++
        if (recursiveCount > 3) {
          errorFunc('网络异常')
          return
        }
        const token = wx.getStorageSync('AlumniToken')
        let header = JSON.parse(JSON.stringify(baseHeader))
        if (token) {
          header = Object.assign(header, {
            Authorization: 'Bearer ' + token,
          })
        }
        header = defaultReqHeaderInterceptor(header)

        wx.request({
          method: 'GET',
          header: header,
          url: host + '/v2/api/qrlogin',
          data: data
            ? {
                'variables': JSON.stringify(data),
              }
            : null,
          success: res => {
            successFunc(res)
          },
          error: e => {
            errorFunc(e)
          },
        })
      }
      func(warpResolver(resolve, reject, func), reject)
    })
  },
  checkQRLoginCode: ({
    data,
  }: {
    data?: paths['/v2/api/qrlogin']['post']['requestBody'] extends infer Body
      ? Body extends undefined
        ? undefined
        : Body extends { content: infer Content }
          ? Content extends { 'application/json': infer JSONContent }
            ? JSONContent
            : never
          : never
      : never
  }): Promise<
    paths['/v2/api/qrlogin']['post']['responses']['200']['content']['application/json']
  > => {
    return new Promise((resolve, reject) => {
      let recursiveCount = 0
      const func = (successFunc, errorFunc) => {
        recursiveCount++
        if (recursiveCount > 3) {
          errorFunc('网络异常')
          return
        }
        const token = wx.getStorageSync('AlumniToken')
        let header = JSON.parse(JSON.stringify(baseHeader))
        if (token) {
          header = Object.assign(header, {
            Authorization: 'Bearer ' + token,
          })
        }
        header = defaultReqHeaderInterceptor(header)

        wx.request({
          method: 'POST',
          header: header,
          url: host + '/v2/api/qrlogin',
          data: data ? data : null,
          success: res => {
            successFunc(res)
          },
          error: e => {
            errorFunc(e)
          },
        })
      }
      func(warpResolver(resolve, reject, func), reject)
    })
  },
  mySubscriptionOrders: ({
    data,
  }: {
    data?: paths['/v2/api/subscription/orders']['get']['requestBody'] extends infer Body
      ? Body extends undefined
        ? undefined
        : Body extends { content: infer Content }
          ? Content extends { 'application/json': infer JSONContent }
            ? JSONContent
            : never
          : never
      : never
  }): Promise<
    paths['/v2/api/subscription/orders']['get']['responses']['200']['content']['application/json']
  > => {
    return new Promise((resolve, reject) => {
      let recursiveCount = 0
      const func = (successFunc, errorFunc) => {
        recursiveCount++
        if (recursiveCount > 3) {
          errorFunc('网络异常')
          return
        }
        const token = wx.getStorageSync('AlumniToken')
        let header = JSON.parse(JSON.stringify(baseHeader))
        if (token) {
          header = Object.assign(header, {
            Authorization: 'Bearer ' + token,
          })
        }
        header = defaultReqHeaderInterceptor(header)

        wx.request({
          method: 'GET',
          header: header,
          url: host + '/v2/api/subscription/orders',
          data: data
            ? {
                'variables': JSON.stringify(data),
              }
            : null,
          success: res => {
            successFunc(res)
          },
          error: e => {
            errorFunc(e)
          },
        })
      }
      func(warpResolver(resolve, reject, func), reject)
    })
  },
}
