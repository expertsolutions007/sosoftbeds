import English from "../locales/english.json";
import Arabic from "../locales/arabic.json";
import i18n from "../src/i18n";

declare module "i18next" {
  interface CustomTypeOptions {
    defaultNS: "en";
    resources: {
      ar: typeof Arabic;
      en: typeof English;
    };
    fallbackLng: 'en',
    defaultNS: "en",
    lng:"en",
    supportedLngs: ['en', 'ar'],
  }
}