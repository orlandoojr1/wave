(window.webpackJsonp=window.webpackJsonp||[]).push([[165],{219:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return l})),r.d(t,"metadata",(function(){return c})),r.d(t,"rightToc",(function(){return s})),r.d(t,"default",(function(){return p}));var n=r(2),o=r(6),i=(r(0),r(311)),a=r(313),l={title:"Hello World!",keywords:["hello_world"]},c={unversionedId:"examples/hello-world",id:"examples/hello-world",isDocsHomePage:!1,title:"Hello World!",description:"A simple example to get you started with Wave.",source:"@site/docs/examples/hello-world.md",slug:"/examples/hello-world",permalink:"/wave/docs/examples/hello-world",editUrl:"https://github.com/h2oai/wave/edit/master/website/docs/examples/hello-world.md",version:"current",sidebar:"someSidebar",previous:{title:"Examples by Tag",permalink:"/wave/docs/examples/tags"},next:{title:"To-do List App",permalink:"/wave/docs/examples/todo"}},s=[],d={rightToc:s};function p(e){var t=e.components,l=Object(o.a)(e,["components"]);return Object(i.b)("wrapper",Object(n.a)({},d,l,{components:t,mdxType:"MDXLayout"}),Object(i.b)("p",null,"A simple example to get you started with Wave."),Object(i.b)("div",{className:"cover",style:{backgroundImage:"url("+r(441).default+")"}}),Object(i.b)("pre",null,Object(i.b)("code",Object(n.a)({parentName:"pre"},{className:"language-py"}),"# Import `Site` and the `ui` module from the `h2o_wave` package\nfrom h2o_wave import site, ui\n\n# Get the web page at route '/demo'.\n# If you're running this example on your local machine,\n# this page will refer to http://localhost:10101/demo.\npage = site['/demo']\n\n# Add a Markdown card named `hello` to the page.\npage['hello'] = ui.markdown_card(\n    box='1 1 2 2',\n    title='Hello World!',\n    content='And now for something completely different!',\n)\n\n# Finally, sync the page to send our changes to the server.\npage.save()\n")),Object(i.b)("p",null,Object(i.b)("strong",{parentName:"p"},"Tags"),": \u2002",Object(i.b)("a",{href:Object(a.a)("docs/examples/tags#hello_world")},"hello_world")))}p.isMDXComponent=!0},311:function(e,t,r){"use strict";r.d(t,"a",(function(){return p})),r.d(t,"b",(function(){return b}));var n=r(0),o=r.n(n);function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){i(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var s=o.a.createContext({}),d=function(e){var t=o.a.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},p=function(e){var t=d(e.components);return o.a.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},w=o.a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,i=e.originalType,a=e.parentName,s=c(e,["components","mdxType","originalType","parentName"]),p=d(r),w=n,b=p["".concat(a,".").concat(w)]||p[w]||u[w]||i;return r?o.a.createElement(b,l(l({ref:t},s),{},{components:r})):o.a.createElement(b,l({ref:t},s))}));function b(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=r.length,a=new Array(i);a[0]=w;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:n,a[1]=l;for(var s=2;s<i;s++)a[s]=r[s];return o.a.createElement.apply(null,a)}return o.a.createElement.apply(null,r)}w.displayName="MDXCreateElement"},312:function(e,t,r){"use strict";var n=r(0),o=r(19);t.a=function(){var e=Object(n.useContext)(o.a);if(null===e)throw new Error("Docusaurus context not provided");return e}},313:function(e,t,r){"use strict";r.d(t,"b",(function(){return i})),r.d(t,"a",(function(){return a}));var n=r(312),o=r(314);function i(){var e=Object(n.a)().siteConfig,t=(e=void 0===e?{}:e).baseUrl,r=void 0===t?"/":t,i=e.url;return{withBaseUrl:function(e,t){return function(e,t,r,n){var i=void 0===n?{}:n,a=i.forcePrependBaseUrl,l=void 0!==a&&a,c=i.absolute,s=void 0!==c&&c;if(!r)return r;if(r.startsWith("#"))return r;if(Object(o.b)(r))return r;if(l)return t+r;var d=r.startsWith(t)?r:t+r.replace(/^\//,"");return s?e+d:d}(i,r,e,t)}}}function a(e,t){return void 0===t&&(t={}),(0,i().withBaseUrl)(e,t)}},314:function(e,t,r){"use strict";function n(e){return!0===/^(\w*:|\/\/)/.test(e)}function o(e){return void 0!==e&&!n(e)}r.d(t,"b",(function(){return n})),r.d(t,"a",(function(){return o}))},441:function(e,t,r){"use strict";r.r(t),t.default="data:image/png;base64,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"}}]);