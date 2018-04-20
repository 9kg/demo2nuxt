<i18n>
  {
    "en": {
      "home": "home page",
      "test": "test page",
      "about": "about page"
    },
    "cn": {
      "home": "首页",
      "test": "测试页面",
      "about": "关于页面"
    }
  }
</i18n>
<template>
  <section class="container">
    <div>
      {{$t(a)}}
      <div class="links">
        <nuxt-link to="/">{{$t('home')}}</nuxt-link>
        <nuxt-link to="/about">{{$t('about')}}</nuxt-link>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  data: () => {
    return {
      a:'test'
    }
  }
}
</script>

<style lang="less" scoped>
.container
{
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  .title{
    font-size: 50px;
  }
}
</style>
