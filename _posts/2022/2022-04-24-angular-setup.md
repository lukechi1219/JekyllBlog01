---

# layout: post

author: luke_chi

title:  "Angular Setup"
date:   2022-04-24 00:00:00 +0800

categories: []
tags: []
---

ng new {appName} -d -v --routing --interactive --strict

* --dry-run (-d)
* --verbose (-v)

must in order

* ng add @angular/material
* npm i @angular/flex-layout
* npm i @angular/cdk

.

```
imports: [
FlexLayoutModule,
],
```

```
.layout {
  background: black;
  .header {
    background: blue;
  }
  .main {
    background: grey;
    .aside {
      background: green;
    }
    .content {
      background: orange;
    }
  }
}
```

```
<div fxFill fxLayout="column" class="layout">
  <div fxFlex="68px" class="header">Header</div>
  <div fxFlex fxLayout="row" class="main">
    <div fxFlex="200px" class="aside">Aside</div>
    <div fxFlex class="content">
      Content
      <router-outlet></router-outlet>
    </div>
  </div>
</div>
```

.
