import Vue from 'vue'
import VueI18n from 'vue-i18n'

Vue.use(VueI18n)

export default ({ app, store }, inject) => {
  // Set i18n instance on app
  // This way we can use it in middleware and pages asyncData/fetch
  // console.log(app)
  app.i18n = new VueI18n({
    locale: store.state.locale,
    fallbackLocale: store.state.locale,
    messages: {
      'en': require('~/locales/en.json'),
      'cn': require('~/locales/cn.json')
    }
  })

  // app.i18n.path = (link) => {
  //   if (app.i18n.locale === app.i18n.fallbackLocale) {
  //     return `/${link}`
  //   }

  //   return `/${app.i18n.locale}/${link}`
  // }
}