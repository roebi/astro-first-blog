# Astro Starter Kit: Upgrade Astro to V3

following

https://docs.astro.build/en/guides/upgrade-to/v3/

```
npm install astro@latest
```

in package json change project Version to "version": "0.3.0"

```
npm install
```

Moved: astro check now requires an external package

```
npm run astro check
```

just press 'Y' and astro calls

```
npm install @astrojs/check typescript
```

test

```
npm run build
```

update preatc and rss

```
npm run build
npm install @astrojs/preact@latest
npm install @astrojs/rss@latest
```
test

```
npm run sync
npm run check
npm run build
npm run preview
```

add all astro default commands as shortcut commands in package.json:
```
  "scripts": {
    "astro": "astro",
    "build": "astro build",
    "check": "astro check",
    "dev": "astro dev",
    "docs": "astro docs",
    "info": "astro info",
    "preview": "astro preview",
    "start": "astro dev",
    "sync": "astro sync",
    "telemetry": "astro telemetry"
  },
```

# Astro Starter Kit: Minimal

```
npm create astro@latest -- --template minimal
```

[![Open in StackBlitz](https://developer.stackblitz.com/img/open_in_stackblitz.svg)](https://stackblitz.com/github/withastro/astro/tree/latest/examples/minimal)
[![Open with CodeSandbox](https://assets.codesandbox.io/github/button-edit-lime.svg)](https://codesandbox.io/p/sandbox/github/withastro/astro/tree/latest/examples/minimal)
[![Open in GitHub Codespaces](https://github.com/codespaces/badge.svg)](https://codespaces.new/withastro/astro?devcontainer_path=.devcontainer/minimal/devcontainer.json)

> 🧑‍🚀 **Seasoned astronaut?** Delete this file. Have fun!

## 🚀 Project Structure

Inside of your Astro project, you'll see the following folders and files:

```
/
├── public/
├── src/
│   └── pages/
│       └── index.astro
└── package.json
```

Astro looks for `.astro` or `.md` files in the `src/pages/` directory. Each page is exposed as a route based on its file name.

There's nothing special about `src/components/`, but that's where we like to put any Astro/React/Vue/Svelte/Preact components.

Any static assets, like images, can be placed in the `public/` directory.

## 🧞 Commands

All commands are run from the root of the project, from a terminal:

| Command                   | Action                                           |
| :------------------------ | :----------------------------------------------- |
| `npm install`             | Installs dependencies                            |
| `npm run dev`             | Starts local dev server at `localhost:3000`      |
| `npm run build`           | Build your production site to `./dist/`          |
| `npm run preview`         | Preview your build locally, before deploying     |
| `npm run astro ...`       | Run CLI commands like `astro add`, `astro check` |
| `npm run astro -- --help` | Get help using the Astro CLI                     |

## 👀 Want to learn more?

Feel free to check [our documentation](https://docs.astro.build) or jump into our [Discord server](https://astro.build/chat).

## do the blog tutorial

current status

newest on top

addon: https://docs.astro.build/en/guides/content-collections/#migrating-from-file-based-routing

finished on

https://docs.astro.build/en/tutorial/6-islands/3/

https://docs.astro.build/en/tutorial/6-islands/1/

remark: rrs Feed is base URL + /rss.xml

use / control with https://www.inoreader.com

https://docs.astro.build/en/tutorial/5-astro-api/4/

https://docs.astro.build/en/tutorial/5-astro-api/

https://docs.astro.build/en/tutorial/4-layouts/3/

https://docs.astro.build/en/tutorial/4-layouts/

https://docs.astro.build/en/tutorial/3-components/

https://docs.astro.build/en/tutorial/2-pages/3/
