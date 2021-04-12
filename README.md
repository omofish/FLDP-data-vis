# TODO
I've done up the base skeleton of the frontend, so the rest is mostly connecting things together. Here's some things to take note

- remember to npm install or yarn install first
- most of the functional code lives in `DashboardOverview` for the dashboard, and `Presentation` for the starting page. `Sidebar` also has some code. I will be adding another page that will purely show tweets.
- Styling is a bit complicated because it uses SASS and bootstrap. Its kind of a pain so you can leave that to me to settle
- If you prefer a workflow where everyone works on diff components so we don't interfere with each other feel free to create some! but otherwise it should be quite decoupled within the dashboard file anyway

# Stuff from the Template

## Tutorial

We also [wrote a tutorial](https://themesberg.com/blog/tutorial/react-dashboard) on how you can install the project, explore the UI elements, create a new page, customize the Sass variables and upload the production code to the server.

## Workflow

This product is built using the following widely used technologies:

- React.js front-end library
- Bootstrap 5 CSS Framework
- Sass preprocessing language
- NPM & Yarn

## Quick start

### Using Yarn

1. Make sure you have [Yarn](https://yarnpkg.com/) installed.
2. After installing `yarn`, open a terminal and run `yarn install` in the main volt folder to download all project dependencies.

```
yarn install
```

3. Then start the app in development mode by running the following command in terminal:

```
yarn start
```

4. Open http://localhost:3000 to view it in the browser. Any changes you make to the code will be automatically reflected in the browser.

5. If you want to generate the production files, change the `homepage` value from the `package.json` to the domain name that the app will be hosted on, and then run the following command in the terminal:

```
yarn build
```

### Using NPM

1. Make sure you have [Node.js](https://nodejs.org/en/) installed. Make sure the installed Node version is >= 8.10 and of npm >= 5.6

2. After installing Node.js, open a terminal and run `npm install` in the main `volt-react-dashboard/` folder to download all project dependencies. You'll find them in the `node_modules/` folder.

```
npm install
```

3. Then start the app in development mode by running the following command in terminal:

```
npm run start
```

4. Open http://localhost:3000 to view it in the browser. Any changes you make to the code will be automatically reflected in the browser.

5. If you want to generate the production files, change the `homepage` value from the `package.json` to the domain name that the app will be hosted on, and then run the following command in the terminal:

```
npm run build
```

## Documentation

Every component, plugin and getting started is thoroughly documented on our [online documentation](https://demo.themesberg.com/volt-react-dashboard/#/documentation/quick-start).

## File Structure

Within the download you'll find the following directories and files:

```
Volt React Dashboard
.
├── LICENSE.md
├── README.md
├── package-lock.json
├── package.json
├── public
│   ├── android-chrome-192x192.png
│   ├── android-chrome-512x512.png
│   ├── apple-touch-icon.png
│   ├── browserconfig.xml
│   ├── favicon-16x16.png
│   ├── favicon-32x32.png
│   ├── favicon.ico
│   ├── index.html
│   ├── manifest.json
│   ├── mstile-150x150.png
│   ├── robots.txt
│   ├── safari-pinned-tab.svg
│   └── site.webmanifest
├── src
│   ├── assets
│   │   ├── img
│   │   └── syntax-themes
│   ├── components
│   │   ├── AccordionComponent.js
│   │   ├── Charts.js
│   │   ├── Code.js
│   │   ├── CodeEditor.js
│   │   ├── Documentation.js
│   │   ├── Footer.js
│   │   ├── Forms.js
│   │   ├── Navbar.js
│   │   ├── Preloader.js
│   │   ├── Progress.js
│   │   ├── ScrollToTop.js
│   │   ├── Sidebar.js
│   │   ├── Tables.js
│   │   └── Widgets.js
│   ├── data
│   │   ├── charts.js
│   │   ├── commands.js
│   │   ├── features.js
│   │   ├── notifications.js
│   │   ├── pages.js
│   │   ├── tables.js
│   │   ├── teamMembers.js
│   │   └── transactions.js
│   ├── index.js
│   ├── pages
│   │   ├── HomePage.js
│   │   ├── Presentation.js
│   │   ├── Settings.js
│   │   ├── Transactions.js
│   │   ├── components
│   │   ├── dashboard
│   │   ├── documentation
│   │   ├── examples
│   │   └── tables
│   ├── routes.js
│   └── scss
│       ├── volt
│       └── volt.scss
└── yarn.lock

```

## Resources

- Demo: <https://demo.themesberg.com/volt-react-dashboard>
- Download Page: <https://themesberg.com/product/dashboard/volt-react>
- Documentation: <https://demo.themesberg.com/volt-react-dashboard/#/documentation/overview>
- License Agreement: <https://themesberg.com/licensing>
- Support: <https://themesberg.com/contact>
- Issues: [Github Issues Page](https://github.com/themesberg/volt-react-dashboard/issues)

## Licensing

- Copyright 2021 Themesberg (Crafty Dwarf LLC) (https://themesberg.com)
- Themesberg [license](https://themesberg.com/licensing#mit) (MIT License)