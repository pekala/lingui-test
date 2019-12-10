import React from "react";
import ReactDOM from "react-dom";
import { I18nProvider } from "@lingui/react";

import App from "./App";

const AppWithLang = () => {
  const [lang, setLang] = React.useState("en");
  const [catalogs, setCatalogs] = React.useState({});

  React.useEffect(() => {
    function loadCatalog() {
      import(
        /* webpackMode: "lazy", webpackChunkName: "i18n-[index]" */
        `./locales/${lang}/messages.po`
      ).then(newCatalog => setCatalogs({ ...catalogs, [lang]: newCatalog }));
    }
    loadCatalog();
  }, [lang]);

  const usedLang = !!catalogs[lang] ? lang : catalogs["en"] ? "en" : null;

  if (!usedLang) {
    return <div>Loading...</div>;
  }

  return (
    <I18nProvider language={usedLang} catalogs={catalogs}>
      <button onClick={() => setLang("pl")}>PL</button>
      <button onClick={() => setLang("en")}>EN</button>
      <App />
    </I18nProvider>
  );
};

ReactDOM.render(<AppWithLang />, document.getElementById("app"));
