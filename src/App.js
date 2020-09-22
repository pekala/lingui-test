import React from "react";
import { Trans, Plural, DateFormat, t } from "@lingui/macro";
import { I18n } from "@lingui/react";

let fallbackLang = "English";
const App = () => {
  const [count, setCount] = React.useState(0);
  return (
    <div>
      <Trans>
        This message will fallback to {fallbackLang} / {count}!
      </Trans>
      <p>
        <Trans>
          This message is translated and has a{" "}
          <a href="https://www.youtube.com/watch?v=oHg5SJYRHA0">link</a>
        </Trans>
      </p>
      <h1>
        <Trans id="my.custom.id">Custom ID works</Trans>
      </h1>
      <h1>
        <Trans>New ride</Trans>
        <Trans>Let's go</Trans>
        <Trans>Let's go kola_ wefwef</Trans>
        <Trans>Wow, what push</Trans>
        <Trans>Make no push</Trans>
        <Trans>NEW LOCALE</Trans>
        <Trans>Saved123123 world</Trans>
        <Trans>Hi guy</Trans>
        <Trans>Loli</Trans>
        <Trans>NEW LOCALE</Trans>
        <Trans>Okey Gffdoogle</Trans>
        <Trans>Go gore go</Trans>
        <Trans>Go go43re go</Trans>
        <Trans>Go hello go</Trans>
        <Trans>13 Nice</Trans>
        <Trans>Buffer zone</Trans>
        <Trans>Buffer zone111</Trans>
        <Trans>Buffer eger</Trans>
        <Trans>Buffer zongege111</Trans>
        <Trans>Buffer 234</Trans>
        <Trans>Buffer bob kola</Trans>
      </h1>
      <h1>
        <Trans>Hello sir</Trans>
      </h1>
      <h1>
        <Trans>New text</Trans>
      </h1>
      <h1>
        <Trans>Next text</Trans>
        <Trans>This time it should work now go kola</Trans>
        <Trans>This hikolp 12312</Trans>
        <Trans>Kiko kiko</Trans>
        <Trans>Google me</Trans>
        <Trans>Fire me</Trans>
      </h1>
      <p>
        <Plural
          value={count}
          _0="There're no messages"
          one="There's # message in your inbox"
          other="There're # messages in your inbox"
        />
        <button type="button" onClick={() => setCount((count) => count + 1)}>
          +
        </button>
        <button
          type="button"
          onClick={() => setCount((count) => Math.max(0, count - 1))}
        >
          -
        </button>
        <hr />
        <I18n>
          {({ i18n }) => (
            <img
              src="https://www.placecage.com/c/300/300"
              alt={i18n._(t`Crazy Nic!!`)}
            />
          )}
        </I18n>
      </p>
      <footer>
        <Trans>
          Last time I had to configure webpack <DateFormat value={Date.now()} />
        </Trans>
      </footer>
    </div>
  );
};

export default App;
