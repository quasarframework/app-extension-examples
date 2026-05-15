/**
 * Quasar App Extension prompts script
 * https://quasar.dev/app-extensions/development-guide/prompts-api
 */

import { definePromptsScript } from "@quasar/app-vite";
import { intro, outro, confirm, text, group, cancel } from "@clack/prompts";

export default definePromptsScript(async (/* api */) => {
  intro("Starter Kit App Extension");

  const answers = await group(
    {
      serviceA: () => confirm({ message: "Do you want service 'A'?" }),
      serviceB: () => confirm({ message: "Do you want service 'B'?" }),
      productName: ({ results }) => {
        if (!results.serviceB) return;
        return text({
          message: "Since you want service 'B', what is the Product Name?",
          initialValue: "MyProduct",
          validate(value) {
            if (value.length === 0) return "Please enter a product name";
          }
        });
      },
      publishService: () =>
        confirm({
          message: "Do you want the publishing service?",
          initialValue: true
        })
    },
    {
      // On Cancel callback that wraps the group
      // So if the user cancels one of the prompts in the group this function will be called
      onCancel: (/* { results } */) => {
        cancel("Operation cancelled.");
        process.exit(0);
      }
    }
  );

  outro("Thanks for answering the questions!");

  return answers;
});
