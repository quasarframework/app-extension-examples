/**
 * Quasar App Extension install script
 *
 * Docs: https://quasar.dev/app-extensions/development-guide/install-api
 */

/**
 * Take this as an example only.
 * We"ve cherry-picked just a few out of the many
 * things that you can do.
 */

import { defineInstallScript } from "@quasar/app-vite";

export default defineInstallScript((api) => {
  // (Optional!)
  // Quasar compatibility check; you may need
  // hard dependencies, as in a minimum version of the "quasar"
  // package or a minimum version of Quasar App CLI
  api.compatibleWith("quasar", "^2.0.0");
  api.compatibleWith("@quasar/app-vite", "^3.0.0-rc.1");

  // We render some files into the hosting project

  if (api.prompts.serviceA) {
    api.render("./templates/serviceA");
  }

  if (api.prompts.serviceB) {
    // we supply interpolation variables
    // to the template
    api.render("./templates/serviceB", {
      productName: api.prompts.productName
    });
  }

  api.render("./templates/common-files");
});
