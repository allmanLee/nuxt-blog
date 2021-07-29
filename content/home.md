---
title: Introduction
---


# Lorem ipsum
## dolor—sit—amet
### consectetur &amp; adipisicing
#### elit
##### elit

---
title: Home
---






```js{1,3-5}[server.js]
const http = require('http')
const bodyParser = require('body-parser')

http.createServer((req, res) => {
  bodyParser.parse(req, (error, body) => {
    res.end(body)
  })
}).listen(3000)
```


## Links

<nuxt-link to="/articles">Nuxt Link to Blog</nuxt-link>

<a href="/articles">Html Link to Blog</a>

[Markdown Link to Blog](/articles)

<a href="https://nuxtjs.org">External link html</a>

[External Link markdown](https://nuxtjs.org)




Learn how to use @nuxt/content.
<!--more-->
Full amount of content beyond the more divider.