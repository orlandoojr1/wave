(window.webpackJsonp=window.webpackJsonp||[]).push([[56],{111:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return c})),r.d(t,"metadata",(function(){return u})),r.d(t,"rightToc",(function(){return s})),r.d(t,"default",(function(){return d}));var n=r(2),a=r(6),i=(r(0),r(311)),o=r(313),c={title:"Meta / Redirect",keywords:["meta","redirect"]},u={unversionedId:"examples/meta-redirect",id:"examples/meta-redirect",isDocsHomePage:!1,title:"Meta / Redirect",description:"Redirect the page to a new URL or hash.",source:"@site/docs/examples/meta-redirect.md",slug:"/examples/meta-redirect",permalink:"/wave/docs/examples/meta-redirect",editUrl:"https://github.com/h2oai/wave/edit/master/website/docs/examples/meta-redirect.md",version:"current",sidebar:"someSidebar",previous:{title:"Meta / Refresh",permalink:"/wave/docs/examples/meta-refresh"},next:{title:"Meta / Theme",permalink:"/wave/docs/examples/meta-theme"}},s=[],p={rightToc:s};function d(e){var t=e.components,c=Object(a.a)(e,["components"]);return Object(i.b)("wrapper",Object(n.a)({},p,c,{components:t,mdxType:"MDXLayout"}),Object(i.b)("p",null,"Redirect the page to a new URL or hash."),Object(i.b)("div",{className:"cover",style:{backgroundImage:"url("+r(365).default+")"}}),Object(i.b)("pre",null,Object(i.b)("code",Object(n.a)({parentName:"pre"},{className:"language-py"}),"import time\n\nfrom h2o_wave import site, ui\n\npage = site['/demo']\n\npage['meta'] = ui.meta_card(box='')\n\npage['example'] = ui.markdown_card(\n    box='1 1 2 2',\n    title='Redirect a page',\n    content='This page should redirect to Wikipedia in a few seconds. Wait for it...',\n)\npage.save()\n\ntime.sleep(3)\n# Redirect to a hash.\npage['meta'].redirect = '#widgets'\npage.save()\n\ntime.sleep(3)\n# Redirect to a URL.\npage['meta'].redirect = 'https://www.wikipedia.org'\npage.save()\n")),Object(i.b)("p",null,Object(i.b)("strong",{parentName:"p"},"Tags"),": \u2002",Object(i.b)("a",{href:Object(o.a)("docs/examples/tags#meta")},"meta")," \u2002",Object(i.b)("a",{href:Object(o.a)("docs/examples/tags#redirect")},"redirect")))}d.isMDXComponent=!0},311:function(e,t,r){"use strict";r.d(t,"a",(function(){return d})),r.d(t,"b",(function(){return f}));var n=r(0),a=r.n(n);function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function c(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){i(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function u(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var s=a.a.createContext({}),p=function(e){var t=a.a.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):c(c({},t),e)),r},d=function(e){var t=p(e.components);return a.a.createElement(s.Provider,{value:t},e.children)},l={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},m=a.a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,i=e.originalType,o=e.parentName,s=u(e,["components","mdxType","originalType","parentName"]),d=p(r),m=n,f=d["".concat(o,".").concat(m)]||d[m]||l[m]||i;return r?a.a.createElement(f,c(c({ref:t},s),{},{components:r})):a.a.createElement(f,c({ref:t},s))}));function f(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=r.length,o=new Array(i);o[0]=m;var c={};for(var u in t)hasOwnProperty.call(t,u)&&(c[u]=t[u]);c.originalType=e,c.mdxType="string"==typeof e?e:n,o[1]=c;for(var s=2;s<i;s++)o[s]=r[s];return a.a.createElement.apply(null,o)}return a.a.createElement.apply(null,r)}m.displayName="MDXCreateElement"},312:function(e,t,r){"use strict";var n=r(0),a=r(19);t.a=function(){var e=Object(n.useContext)(a.a);if(null===e)throw new Error("Docusaurus context not provided");return e}},313:function(e,t,r){"use strict";r.d(t,"b",(function(){return i})),r.d(t,"a",(function(){return o}));var n=r(312),a=r(314);function i(){var e=Object(n.a)().siteConfig,t=(e=void 0===e?{}:e).baseUrl,r=void 0===t?"/":t,i=e.url;return{withBaseUrl:function(e,t){return function(e,t,r,n){var i=void 0===n?{}:n,o=i.forcePrependBaseUrl,c=void 0!==o&&o,u=i.absolute,s=void 0!==u&&u;if(!r)return r;if(r.startsWith("#"))return r;if(Object(a.b)(r))return r;if(c)return t+r;var p=r.startsWith(t)?r:t+r.replace(/^\//,"");return s?e+p:p}(i,r,e,t)}}}function o(e,t){return void 0===t&&(t={}),(0,i().withBaseUrl)(e,t)}},314:function(e,t,r){"use strict";function n(e){return!0===/^(\w*:|\/\/)/.test(e)}function a(e){return void 0!==e&&!n(e)}r.d(t,"b",(function(){return n})),r.d(t,"a",(function(){return a}))},365:function(e,t,r){"use strict";r.r(t),t.default=r.p+"assets/images/meta-redirect-ce65a2bb8925d26db3db00327634b324.png"}}]);