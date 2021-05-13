const msg = "Hello, QS ZONE!"
export default [
  {
    url: '/test',
    type: 'get',
    response: config => {
      return {
        msg
      }
    }
  },
]