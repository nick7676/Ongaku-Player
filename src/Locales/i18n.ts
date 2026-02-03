import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import it from "./it";
import en from "./en";

const fallbackNS = "common";
export const defaultNS = "common";
export const resources = { it, en };

i18n.use(initReactI18next).init({
  resources,
  lng: "en",
  fallbackLng: "en",
  defaultNS,
  fallbackNS,
  interpolation: {
    escapeValue: false,
  },
});

export default i18n;
