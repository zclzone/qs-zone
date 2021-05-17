const msg = "Hello, QS ZONE!"
export default [
  {
    url: '/',
    type: 'get',
    response: config => {
      return {
        msg
      }
    }
  },
]