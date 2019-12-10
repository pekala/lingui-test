import React from "react";
import ReactDOM from "react-dom";
import { I18nProvider } from "@lingui/react";
import polish from "./locales/pl/messages.po";
import english from "./locales/en/messages.po";

import App from "./App";

const AppWithLang = () => {
  const [lang, setLang] = React.useState("en");
  return (
    <I18nProvider language={lang} catalogs={{ pl: polish, en: english }}>
      <button onClick={() => setLang("pl")}>PL</button>
      <button onClick={() => setLang("en")}>EN</button>
      <App />
    </I18nProvider>
  );
};

ReactDOM.render(<AppWithLang />, document.getElementById("app"));
