<template>
  <section class="container">
    <div>
      <logo/>
      <h1 class="title">
        demo3
        {{a}}
        {{JSON.stringify(ip)}}
        {{fetchSomething()}}
      </h1>
      <h2 class="subtitle">
        My top-notch Nuxt.js project
      </h2>
      <div class="links">
        <nuxt-link to="/about">关于</nuxt-link>
        <nuxt-link to="/test">测试</nuxt-link>
      </div>
    </div>
  </section>
</template>

<script>
import Logo from '~/components/Logo.vue'

export default {
  async asyncData({ app }) {
    const ip = await app.$axios.$post('/index', {
      arg1: '参数1',
      arg2: '参数2'
    })

    return { ip }
  },
  data: () => {
    return {
      a:11
    }
  },methods: {
      async fetchSomething() {
        const ip = await this.$axios.$post('/ss/demo', {
          arg1: '参数111',
          arg2: '参数22'
        })
      }
  },
  components: {
    Logo
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
.title
{
  font-family: "Quicksand", "Source Sans Pro", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif; /* 1 */
  display: block;
  font-weight: 300;
  font-size: 100px;
  color: #35495e;
  letter-spacing: 1px;
}
.subtitle
{
  font-weight: 300;
  font-size: 42px;
  color: #526488;
  word-spacing: 5px;
  padding-bottom: 15px;
}
.links
{
  padding-top: 15px;
}
</style>
