import i18next from "i18next";
import { initReactI18next } from "react-i18next";

import pt from "./locales/pt-BR.json";

i18next.use(initReactI18next).init({
  debug: true,
  lng: "pt",
  fallbackLng: "pt",
  resources: {
    pt,
  },
  interpolation: {
    escapeValue: false,
  },
});
