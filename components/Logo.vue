<template>
  <div>
    <el-radio-group v-model="lang" @change="exchangeLang()">
      <el-radio label="en">英文</el-radio>
      <el-radio label="cn">中文</el-radio>
    </el-radio-group>
    
    <!-- <input type="checkbox" :checked="this.lang === 'en'" @change="exchangeLang()"/>切换语言 -->
    {{this.lang}}
    {{this.$t('home.title')}}
    <div class="VueToNuxtLogo">
      <div class="Triangle Triangle--two"></div>
      <div class="Triangle Triangle--one"></div>
      <div class="Triangle Triangle--three"></div>
      <div class="Triangle Triangle--four"></div>
    </div>
  </div>
</template>

<script>
  export default {
    // asyncData ({app}) {
      // console.log(context)
      // return { lang: app.i18n.locale}
    // },
    data(){
      return {
        lang: this.$i18n.locale
      }
    },
    methods: {
        exchangeLang(val) {
          // this.lang = this.lang === 'cn' ? 'en' : 'cn';
          console.log(val);
          this.$store.commit('SET_LANG', this.lang)

          this.$i18n.locale = this.lang
        }
    }
  }
</script>

<style>
.VueToNuxtLogo
{
  display: inline-block;
  animation: turn 2s linear forwards 1s;
  transform: rotateX(180deg);
  position: relative;
  overflow: hidden;
  height: 36px;
  width: 49px;
}
.Triangle
{
  position: absolute;
  top: 0;
  left: 0;
  width: 0;
  height: 0;
}
.Triangle--one
{
  border-left: 21px solid transparent;
  border-right: 21px solid transparent;
  border-bottom: 36px solid #41B883;
}
.Triangle--two
{
  top: 30px;
  left: 35px;
  animation: goright 0.5s linear forwards 3.5s;
  border-left: 17.5px solid transparent;
  border-right: 17.5px solid transparent;
  border-bottom: 30px solid #3B8070;
}
.Triangle--three
{
  top: 12px;
  left: 7px;
  animation: goright 0.5s linear forwards 3.5s;
  border-left: 14px solid transparent;
  border-right: 14px solid transparent;
  border-bottom: 24px solid #35495E;
}
.Triangle--four
{
  top: 24px;
  left: 14px;
  animation: godown 0.5s linear forwards 3s;
  border-left: 7px solid transparent;
  border-right: 7px solid transparent;
  border-bottom: 12px solid #fff;
}

@keyframes turn {
  100% {
    transform: rotateX(0deg);
  }
}
@keyframes godown {
  100% {
    top: 36px;
  }
}
@keyframes goright {
  100% {
    left: 14px;
  }
}
</style>
