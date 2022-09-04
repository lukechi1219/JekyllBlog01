---

# layout: post

author: luke_chi

title:  "Cypress E2E Coverage + Angular + Nrwl Nx"
date:   2022-09-05 00:00:00 +0800

categories: [cypress, coverage]
tags: []
---

<p>ref: <a href="https://github.com/Flaxline/angular-nx-cypress-coverage-example" target="_blank">
github.com/Flaxline/angular-nx-cypress-coverage-example</a></p>

-  Cypress v10.7.0
- Angular v14.2.0
- Nrwl Nx v14.6.4

.

- npm i -D ngx-build-plus
- npm i -D @istanbuljs/nyc-config-typescript
- npm i -D source-map-support
- npm i -D ts-node

- npm i -D @cypress/code-coverage
- npm i -D nyc
- npm i -D istanbul-lib-coverage
- npm i -D istanbul-instrumenter-loader \-\-legacy-peer-deps // for webpack 5


= coverage.webpack.js =

```javascript
module.exports = {
  module: {
    rules: [
      {
        test: /\.(js|ts)$/,
        loader: 'istanbul-instrumenter-loader',
        options: { esModules: true },
        enforce: 'post',
        include: [
          require('path').join(__dirname, '../..', 'portfolio-v1/src'),
        ],
        exclude: [
          /\.(e2e|spec|stories)\.ts$/,
          /node_modules/,
          /(ngfactory|ngstyle)\.js/
        ]
      }
    ]
  }
};
```

= project.json =

```json
    "serve2": {
      "executor": "ngx-build-plus:dev-server",
      "configurations": {
        "production": {
          "browserTarget": "portfolio-v1:build:production"
        },
        "development": {
          "browserTarget": "portfolio-v1:build:development"
        }
      },
      "options": {
        "extraWebpackConfig": "apps/portfolio-v1/cypress/coverage.webpack.js"
      }
    },
```

= package.json =

```json
"nyc": {
  "extends": "@istanbuljs/nyc-config-typescript",
  "all": true
}
```


= {cypress}/support/e2e.ts =

```typescript
import '@cypress/code-coverage/support'
```

= cypress.config.ts =

```typescript

// cypress/plugins

export default defineConfig({
  e2e: {
    ...nxE2EPreset(__filename),
    ...{
      setupNodeEvents(on, config) {

        const registerCodeCoverageTasks = require('@cypress/code-coverage/task');

        registerCodeCoverageTasks(on, config);

        return config
      },
    },
  },
});
```
