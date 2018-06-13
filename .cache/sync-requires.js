// prefer default export if available
const preferDefault = m => m && m.default || m


exports.layouts = {
  "layout---index": preferDefault(require("/Users/mcclowes/Development/mcclowes.com/.cache/layouts/index.js"))
}

exports.components = {
  "component---cache-dev-404-page-js": preferDefault(require("/Users/mcclowes/Development/mcclowes.com/.cache/dev-404-page.js")),
  "component---src-pages-404-js": preferDefault(require("/Users/mcclowes/Development/mcclowes.com/src/pages/404.js")),
  "component---src-pages-index-js": preferDefault(require("/Users/mcclowes/Development/mcclowes.com/src/pages/index.js"))
}

exports.json = {
  "layout-index.json": require("/Users/mcclowes/Development/mcclowes.com/.cache/json/layout-index.json"),
  "dev-404-page.json": require("/Users/mcclowes/Development/mcclowes.com/.cache/json/dev-404-page.json"),
  "404.json": require("/Users/mcclowes/Development/mcclowes.com/.cache/json/404.json"),
  "index.json": require("/Users/mcclowes/Development/mcclowes.com/.cache/json/index.json"),
  "404-html.json": require("/Users/mcclowes/Development/mcclowes.com/.cache/json/404-html.json")
}