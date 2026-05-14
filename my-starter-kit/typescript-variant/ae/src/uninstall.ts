/**
 * Quasar App Extension uninstall script
 *
 * Docs: https://quasar.dev/app-extensions/development-guide/uninstall-api
 */

import { defineUninstallScript } from "@quasar/app-vite";

// we PNPM added it to our App Extension,
// so we can import the following:
import rimraf from "rimraf";

export default defineUninstallScript((api) => {
  // Careful when you remove folders!
  // You don"t want to delete files that are still needed by the Project,
  // or files that are not owned by this app extension.


  // Here, we could also remove the /src/services folder altogether,
  // but what if the user has added other files into this folder?

  if (api.prompts.serviceA) {
    // we added it on install, so we remove it
    rimraf.sync(api.resolve.src("services/serviceA.js"));
  }

  if (api.prompts.serviceB) {
    // we added it on install, so we remove it
    rimraf.sync(api.resolve.src("services/serviceB.js"));
  }

  // we added it on install, so we remove it
  rimraf.sync(api.resolve.app("some-folder"));
  // warning... we"ve added this folder, but what if the
  // developer added more files into this folder???

  // or api.removePath() it!
  // rimraf is an example for you to get aware of the fact that you
  // need to PNPM install your deps in your App Extension.
});
