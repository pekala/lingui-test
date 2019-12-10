import React from "react";
import { Trans, Plural } from "@lingui/macro";

let a = "World";
let messagesCount = 10;
const App = () => (
  <div>
    <Trans>
      Hello {a} {Math.random()}!
    </Trans>
    <p>
      <Plural
        value={messagesCount}
        one="There's # message in your inbox"
        other="There're # messages in your inbox"
      />
    </p>
  </div>
);

export default App;
