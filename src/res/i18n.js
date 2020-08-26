import i18n from "i18next";
import { reactI18nextModule } from "react-i18next";
import localesResourse from "./localization";
//import DeviceInfo from "react-native-device-info";
import i18nextReactNative from 'i18next-react-native-language-detector'
import SupportedLocale from './localization/supported_locale'

// const languageDetector = {
//   type: "languageDetector",
//   detect: () => DeviceInfo.getDeviceLocale(),
//   init: () => {},
//   cacheUserLanguage: () => {}
// };

i18n
  .use(reactI18nextModule)
  .use(i18nextReactNative)
  .init({
    lng: SupportedLocale.en,
    resources: localesResourse,
    fallbackLng: SupportedLocale.en,
    debug: true,
    interpolation: {
      escapeValue: false
    },
    react: {
      wait: true
    },
  });

export default i18n;

