import Vue from 'vue'
import Element from 'element-ui/lib/element-ui.common'

export default ({ app, store }) => {
  Vue.use(Element, { 
    i18n: (key, val) => app.i18n.t(key,val)
  })
}
