import { debounce as _debounce, addWaterMarker } from '@/utils'

/**
 * v-copy
 */
const copy = {
  bind(el, { value }) {
    el.$value = value
    el.addEventListener('click', () => {
      if (!el.$value) {
        return
      }
      // 动态创建 textarea 标签
      const textarea = document.createElement('textarea')
      // 将该 textarea 设为 readonly 防止 iOS 下自动唤起键盘，同时将 textarea 移出可视区域
      textarea.readOnly = 'readonly'
      textarea.style.position = 'absolute'
      textarea.style.left = '-9999px'
      // 将要 copy 的值赋给 textarea 标签的 value 属性
      textarea.value = el.$value
      // 将 textarea 插入到 body 中
      document.body.appendChild(textarea)
      // 选中值并复制
      textarea.select()
      const result = document.execCommand('Copy')
      if (result) {
        console.log('复制成功') // 可根据项目UI仔细设计
      }
      document.body.removeChild(textarea)
    })
  },
  // 当传进来的值更新的时候触发
  componentUpdated(el, { value }) {
    el.$value = value
  },
  // 指令与元素解绑的时候，移除事件绑定
  unbind(el) {
    el.removeEventListener('click', el.handler)
  },
}

/**
 * v-debounce
 */
const debounce = {
  inserted(el, binding) {
    if (!binding.value.handler || typeof binding.value.handler !== 'function') {
      return
    }
    const handler = binding.value.handler
    const wait = binding.value.await || 1000
    const immediate = !!binding.value.immediate
    // 防抖监听事件，默认输入框 input 事件
    const event = binding.value.event || 'input'
    el.addEventListener(event, _debounce(handler, wait, immediate))
  }
}

/**
 * v-permission
 */
const permission = {
  inserted(el, binding, vnode) {
    let btnPermission = vnode.context.$route.meta && vnode.context.$route.meta.btnPermission || ''
    !btnPermission.includes(binding.value) && el.parentNode.removeChild(el)
  }
}

/**
 * v-waterMarker
 */
const waterMarker = {
  bind: function (el, binding) {
    if (!binding.value || !binding.value.text) return
    addWaterMarker(el, binding.value.text, binding.value.textFont, binding.value.textColor)
  }
}

export {
  copy, debounce, permission, waterMarker
}