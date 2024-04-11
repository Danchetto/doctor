import 'server-only'

const dictionaries = {
    ru: () => import('../../../public/locales/ru/common.json').then((module) => module.default),
    es: () => import('../../../public/locales/es/common.json').then((module) => module.default),
}

export const getDictionary = async (locale: 'ru' | 'es') => dictionaries[locale]()
