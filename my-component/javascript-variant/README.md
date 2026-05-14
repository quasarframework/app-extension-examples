# Quasar App Extension "my-ext"

## Developing

- Use PNPM v11+.
- Notice /package.json scripts:

```bash
# Lint & format
$ pnpm run lint
$ pnpm run lint:check

# Use playground to develop;
# Helps you test the Index script as well
$ pnpm run dev
$ pnpm run dev -m ssr

# Invokes the AE into /playground when needed
# (like when changing the scripts themselves);
# Helps you run the Install & Prompts scripts
$ pnpm run invoke

# Uninstall & re-install AE;
# Helps you mainly to run the Uninstall script
$ pnpm run cycle
```

## Publishing

- Make sure to edit /ae/README.md.
- In order to publish the AE, do it from within /ae folder:

```bash
# from /ae folder ONLY:
pnpm login
pnpm publish
```

## Donate

If you appreciate the work that went into this App Extension, please consider [donating to Quasar](https://donate.quasar.dev).
