import Vue from 'vue'
import VueI18n from 'vue-i18n'
import Locale from '~/locales'

Vue.use(VueI18n)

export default ({ app, store }, inject) => {
  app.i18n = new VueI18n({
    locale: store.state.locale,
    fallbackLocale: 'cn',
    messages: Locale
  })
}
