import EnElement from 'element-ui/lib/locale/lang/en'
import CnElement from 'element-ui/lib/locale/lang/zh-CN'
import EnLocale from './en.json'
import CnLocale from './cn.json'

export default {
    en: Object.assign(EnLocale, EnElement),
    cn: Object.assign(CnLocale, CnElement),
}