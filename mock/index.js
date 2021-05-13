import Mock from 'mockjs'
import { param2Obj } from '@/utils'

import indexApi from './api'

const mocks = [
  ...indexApi
]

function mockXHR() {
  Mock.setup({
    timeout: '100-800'
  })
  Mock.XHR.prototype.proxy_send = Mock.XHR.prototype.send
  Mock.XHR.prototype.send = function () {
    if (this.custom.xhr) {
      this.custom.xhr.withCredentials = this.withCredentials || false

      if (this.responseType) {
        this.custom.xhr.responseType = this.responseType
      }
    }
    this.proxy_send(...arguments)
  }

  function XHR2ExpressReqWrap(respond) {
    return function (options) {
      let result = null
      if (respond instanceof Function) {
        const { body, type, url } = options
        result = respond({
          method: type,
          body: JSON.parse(body),
          query: param2Obj(url)
        })
      } else {
        result = respond
      }
      return Mock.mock(result)
    }
  }

  mocks.forEach(route => {
    Mock.mock(new RegExp(route.url), route.type || 'get', XHR2ExpressReqWrap(route.response))
  })
}

export { mocks, mockXHR }