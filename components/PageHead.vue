<i18n>
  { "en": { "changeLang": "switch language" }, "cn": { "changeLang": "切换语言" } }
</i18n>
<template>
  <header>
    <el-dropdown trigger="click" @command="exchangeLang">
      <el-button>
        {{$t('changeLang')}}({{$t(`common.${locale}`)}})
        <i class="el-icon-arrow-down el-icon--right"></i>
      </el-button>
      <el-dropdown-menu slot="dropdown">
        <el-dropdown-item v-for="lang in locales" :key="lang" :command="lang" :disabled="lang === locale">
          {{$t(`common.${lang}`, lang)}}
        </el-dropdown-item>
      </el-dropdown-menu>
    </el-dropdown>
  </header>
</template>
<style lang="less" scoped>
  header {
    height: 50px;
    background-color: #383430;
    display: flex;
    align-items: center;
    justify-content: flex-end;
  }

  .el-dropdown{
    margin-right: 10px;
  }

</style>

<script>
  import { mapState } from 'vuex'
  
  export default {
    data() {
      return {
        langs: ['cn', 'en']
      }
    },
    computed: {
      ...mapState(['locale', 'locales'])
    },
    methods: {
      exchangeLang(val) {

        this.$emit('langChange', val)
      }
    }
  }

</script>
