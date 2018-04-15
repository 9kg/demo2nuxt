<i18n>
{
  "en": {
    "selectDate": "select date",
    "about": "about",
    "test": "test"
  },
  "cn": {
    "selectDate": "选择日期",
    "about": "关于",
    "test": "测试"
  }
}
</i18n>
<template>
  <section class="container">
    <el-date-picker v-model="date" type="date" :placeholder="$t('selectDate')">
    </el-date-picker>
    <div>
      mockIndex
      {{JSON.stringify(mockIndex)}}
    </div> 
    <div @click="getMockDemo">
      mockDemo
      {{mockDemo}} 
    </div>
    <div>
      {{this.$t('home.title')}}
    </div>
    <div class="links">
      <nuxt-link to="/about">{{$t('about')}}</nuxt-link>
      <nuxt-link to="/test">{{$t('test')}}</nuxt-link>
    </div>
  </section>
</template>

<style lang="less">
  .container {
    display: flex;
    flex-direction: column;
    .links{
      display: flex;
      flex-direction: column;
      margin-top: 50px;
    }
  }

</style>

<script>
  export default {
    async asyncData({app}) {
      return {
        mockIndex: await app.$axios.$post('/index', {
          arg1: '参数1',
          arg2: '参数2'
        })
      }
    },
    data: () => {
      return {
        date: '2011-11-11',
        mockDemo: null
      }
    },
    methods: {
      async getMockDemo() {
        this.mockDemo = await this.$axios.$post('/ss/demo', {
          arg1: '参数111',
          arg2: '参数22'
        })
      }
      // },
      // components: {
      //   Logo
    }
  }

</script>
