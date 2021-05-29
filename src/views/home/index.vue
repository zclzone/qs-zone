<template>
  <div class="view">
    <div class="content">
      <clock />
      <search />
      <favorites />
    </div>
    <!-- 尾部：版权信息/备案信息 -->
    <app-footer :footerStyle="{ backgroundColor: 'transparent' }" />
  </div>
</template>

<script>
import clock from '@/components/clock'
import search from './components/search'
import favorites from './components/favorites'
import AppFooter from '@/components/footer'

import { getAccessToken, getOauthUrl, getUserInfo } from '@/utils/oauth-util'
import { getToken, setToken } from '@/utils/cookie'
export default {
  name: 'Home',
  async beforeRouteEnter(to, from, next) {
    if (to.query && to.query.code) {
      if (getToken()) {
        next()
        return
      }
      try {
        const access_token = await getAccessToken(to.query.code)
        await getUserInfo(access_token)
        delete to.query.code
        if (access_token) {
          setToken(access_token)
          next({ ...to })
          return
        }
      } catch {
        window.name = location.href
        location.href = getOauthUrl()
      }
    }
    next()
  },
  components: {
    clock,
    search,
    favorites,
    AppFooter,
  },
}
</script>

<style lang="scss" scoped>
.view {
  height: 100%;
  display: flex;
  flex-direction: column;
  overflow: auto;
  background-image: linear-gradient(
    179.8deg,
    rgb(0, 116, 117) 19.2%,
    rgb(232, 232, 232) 91.3%
  );
  padding-top: 50px;
  .content {
    flex: 1;
  }
}
</style>