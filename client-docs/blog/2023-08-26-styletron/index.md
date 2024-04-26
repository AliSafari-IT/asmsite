---
slug: styletron-react
title: What is happening behind the scene?
author: Ali Safari
tags: [styletron-react]
---

Styletron is distributed through npmjs.com. It consists of a few packages. The basic React setup requires adding two of them:

```js
yarn add styletron-engine-atomic styletron-react

```

:::tip

Use the power of React to create interactive blog posts.

```js
<html>
  <head>
    <style>
      .foo {
        font-size: 20px;
      }
      .bar {
        color: red;
      }
    </style>
  </head>
  <body>
    <a href="/welcome" class="foo bar">Start!</a>
  </body>
</html>
```

<button onClick={() => alert('button clicked!')}>Click me!</button>

:::
