<i18n>
{
  "en": {
    "selectDate": "select date",
    "about": "about",
    "test": "test",
    "btn_default": "default btn",
    "btn_primary": "primary btn",
    "btn_success": "success btn",
    "btn_info": "info btn",
    "btn_warning": "warning btn",
    "btn_danger": "danger btn",
    "mockIndex": "server data render",
    "mockDemo": "async data render"
  },
  "cn": {
    "selectDate": "选择日期",
    "about": "关于",
    "test": "测试",
    "btn_default": "默认按钮",
    "btn_primary": "主要按钮",
    "btn_success": "成功按钮",
    "btn_info": "信息按钮",
    "btn_warning": "警告按钮",
    "btn_danger": "危险按钮",
    "mockIndex": "服务端数据渲染",
    "mockDemo": "异步数据渲染"
  }
}
</i18n>
<template>
  <section class="container">
    <el-row>
      <el-button>{{$t('btn_default')}}</el-button>
      <el-button type="primary">{{$t('btn_primary')}}</el-button>
      <el-button type="success">{{$t('btn_success')}}</el-button>
      <el-button type="info">{{$t('btn_info')}}</el-button>
      <el-button type="warning">{{$t('btn_warning')}}</el-button>
      <el-button type="danger">{{$t('btn_danger')}}</el-button>
    </el-row>
    <div class="list-group">
      <a class="list-group-item" href="#"><i class="fa fa-home fa-fw"></i>&nbsp; Home</a>
      <a class="list-group-item" href="#"><i class="fa fa-book fa-fw"></i>&nbsp; Library</a>
      <a class="list-group-item" href="#"><i class="fa fa-pencil fa-fw"></i>&nbsp; Applications</a>
      <a class="list-group-item" href="#"><i class="fa fa-cog fa-fw"></i>&nbsp; Settings</a>
    </div>
    <div>
      <i class="fa fa-spinner fa-spin"></i>
      <i class="fa fa-circle-o-notch fa-spin"></i>
      <i class="fa fa-refresh fa-spin"></i>
      <i class="fa fa-cog fa-spin"></i>
      <i class="fa fa-spinner fa-pulse"></i>
    </div>
    <el-date-picker v-model="date" type="date" :placeholder="$t('selectDate')">
    </el-date-picker>
    <div class="data_ct">
      {{$t('mockIndex')}}
      <code>
        {{JSON.stringify(mockIndex)}}
      </code>
    </div> 
    <div class="data_ct">
      {{$t('mockDemo')}}
      <code>
        {{mockDemo}}
      </code> 
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

<style lang="less" scoped>
  .container {
    display: flex;
    flex-direction: column;
    .links{
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      margin-top: 50px;
    }
  }
  .el-row{
    padding: 10px;
  }
  .el-date-editor{
    margin: 10px;
  }
  .data_ct{
    box-shadow: 0 0 0 1px rgba(0,0,0,.3);
    margin: 10px;
    line-height: 30px;
    text-indent: 1em;
    background-color: #bb8200;
    color: #fff;
  }
  code{
    display: block;
    background-color: rgba(0,0,0,.85);
    color: #eee;
    padding: 5px 3px;
    line-height: 1.5em;
    text-indent: 0;
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
    },
    mounted(){
      this.getMockDemo();
    }
  }

</script>
