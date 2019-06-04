import Vue from 'vue'
import VueI18n from 'vue-i18n'
import zh_TW from './locale/zh-TW'
import en_US from "./locale/en-US";

Vue.use(VueI18n)

const messages = {
  "zh_TW": {
    ...zh_TW
  },
  "en_US": {
    ...en_US
  }
};

// 默认语言


const i18n = new VueI18n({
      locale: localStorage.lang ? localStorage.lang : 'en_US',
      messages
})

export default i18n

