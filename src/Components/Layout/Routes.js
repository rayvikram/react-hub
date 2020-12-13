import React from "react";
import { Router } from "@reach/router";

import URLS from "Routes/urls";

export default function Routes() {
  return (
    <Router>
      <URLS.HOME.component path={URLS.HOME.url} />
      <URLS.IFSC.component path={URLS.IFSC.url} />
      <URLS.IFSC.component path={URLS.IFSC.url_id} />
      <URLS.ABOUT_US.component path={URLS.ABOUT_US.url} />
      <URLS.NOT_FOUND.component default />
    </Router>
  );
}
