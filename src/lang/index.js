import Vue from 'vue'
import VueI18n from 'vue-i18n'
import zh_TW from './locale/zh-TW'
import en_US from "./locale/en-US";
import zh_CN from "./locale/zh-CN";
Vue.use(VueI18n)

const messages = {
  zh_TW: {
    ...zh_TW
  },
  zh_CN: {
    ...zh_CN
  },
  en_US: {
    ...en_US
  }
};

// 默认语言


const i18n = new VueI18n({
      locale: localStorage.lang ? localStorage.lang : 'en_US',
      messages
})

export default i18n

