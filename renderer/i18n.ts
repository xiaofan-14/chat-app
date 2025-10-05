import { createI18n, type I18nOptions } from 'vue-i18n'
import zh from '@locales/zh.json'
import en from '@locales/en.json'

// 创建 i18n 实例
const i18nOptions: I18nOptions = {
    locale: 'zh',
    fallbackLocale: 'zh',
    messages: {
        zh,
        en
    }
}

async function createI18nInstance() {
   return createI18n(i18nOptions)
}


// 导出 i18n 实例
export const i18n = await createI18nInstance()

export default i18n