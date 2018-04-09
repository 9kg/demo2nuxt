<template>
  <section class="container">
    <div>
      {{a}}
      <div class="links">
        <nuxt-link to="/">首页</nuxt-link>
        <nuxt-link to="/test">测试</nuxt-link>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  data: () => {
    return {
      a:'关于页面'
    }
  }
}
</script>

<style lang="less">
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
