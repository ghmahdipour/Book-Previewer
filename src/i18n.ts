import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import { getCookieLanguages } from "./helpers/utils";

// eslint-disable-next-line
i18n
  // pass the i18n instance to react-i18next.
  .use(initReactI18next)
  // init i18next
  // for all options read: https://www.i18next.com/overview/configuration-options
  .init({
    fallbackLng: ["fa", "en"],
    debug: false,
    lng: getCookieLanguages() || "en",
    detection: {
      order: [
        "querystring",
        "subdomain",
        "cookie",
        "localStorage",
        "navigator",
        "htmlTag",
      ],
      caches: ["cookie"],
      cookieMinutes: 160,
      lookupQuerystring: "lang",
      lookupFromPathIndex: 0,
    },
    interpolation: {
      escapeValue: false
    },
    defaultNS: "common",
    nsSeparator: ":",
    keySeparator: "__",
  });

export default i18n;
