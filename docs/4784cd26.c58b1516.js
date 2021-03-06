(window.webpackJsonp=window.webpackJsonp||[]).push([[81],{136:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return c})),r.d(t,"metadata",(function(){return i})),r.d(t,"rightToc",(function(){return u})),r.d(t,"default",(function(){return d}));var n=r(2),o=r(6),a=(r(0),r(311)),s=r(313),c={title:"Form / Progress",keywords:["form","progress"]},i={unversionedId:"examples/progress",id:"examples/progress",isDocsHomePage:!1,title:"Form / Progress",description:"Use a progress bar to indicate completion status of an operation.",source:"@site/docs/examples/progress.md",slug:"/examples/progress",permalink:"/wave/docs/examples/progress",editUrl:"https://github.com/h2oai/wave/edit/master/website/docs/examples/progress.md",version:"current",sidebar:"someSidebar",previous:{title:"Form / Link",permalink:"/wave/docs/examples/link"},next:{title:"Form / Progress / Updating",permalink:"/wave/docs/examples/progress-update"}},u=[],p={rightToc:u};function d(e){var t=e.components,c=Object(o.a)(e,["components"]);return Object(a.b)("wrapper",Object(n.a)({},p,c,{components:t,mdxType:"MDXLayout"}),Object(a.b)("p",null,"Use a progress bar to indicate completion status of an operation."),Object(a.b)("div",{className:"cover",style:{backgroundImage:"url("+r(382).default+")"}}),Object(a.b)("pre",null,Object(a.b)("code",Object(n.a)({parentName:"pre"},{className:"language-py"}),"from h2o_wave import site, ui\n\npage = site['/demo']\n\npage['example'] = ui.form_card(\n    box='1 1 4 10',\n    items=[\n        ui.progress(label='Indeterminate Progress', caption='Goes on forever'),\n        ui.progress(label='Standard Progress', caption='Downloading the interwebs...', value=0.25),\n    ]\n)\npage.save()\n")),Object(a.b)("p",null,Object(a.b)("strong",{parentName:"p"},"Tags"),": \u2002",Object(a.b)("a",{href:Object(s.a)("docs/examples/tags#form")},"form")," \u2002",Object(a.b)("a",{href:Object(s.a)("docs/examples/tags#progress")},"progress")))}d.isMDXComponent=!0},311:function(e,t,r){"use strict";r.d(t,"a",(function(){return d})),r.d(t,"b",(function(){return b}));var n=r(0),o=r.n(n);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function s(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function c(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?s(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):s(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var u=o.a.createContext({}),p=function(e){var t=o.a.useContext(u),r=t;return e&&(r="function"==typeof e?e(t):c(c({},t),e)),r},d=function(e){var t=p(e.components);return o.a.createElement(u.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},l=o.a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,a=e.originalType,s=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),d=p(r),l=n,b=d["".concat(s,".").concat(l)]||d[l]||m[l]||a;return r?o.a.createElement(b,c(c({ref:t},u),{},{components:r})):o.a.createElement(b,c({ref:t},u))}));function b(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var a=r.length,s=new Array(a);s[0]=l;var c={};for(var i in t)hasOwnProperty.call(t,i)&&(c[i]=t[i]);c.originalType=e,c.mdxType="string"==typeof e?e:n,s[1]=c;for(var u=2;u<a;u++)s[u]=r[u];return o.a.createElement.apply(null,s)}return o.a.createElement.apply(null,r)}l.displayName="MDXCreateElement"},312:function(e,t,r){"use strict";var n=r(0),o=r(19);t.a=function(){var e=Object(n.useContext)(o.a);if(null===e)throw new Error("Docusaurus context not provided");return e}},313:function(e,t,r){"use strict";r.d(t,"b",(function(){return a})),r.d(t,"a",(function(){return s}));var n=r(312),o=r(314);function a(){var e=Object(n.a)().siteConfig,t=(e=void 0===e?{}:e).baseUrl,r=void 0===t?"/":t,a=e.url;return{withBaseUrl:function(e,t){return function(e,t,r,n){var a=void 0===n?{}:n,s=a.forcePrependBaseUrl,c=void 0!==s&&s,i=a.absolute,u=void 0!==i&&i;if(!r)return r;if(r.startsWith("#"))return r;if(Object(o.b)(r))return r;if(c)return t+r;var p=r.startsWith(t)?r:t+r.replace(/^\//,"");return u?e+p:p}(a,r,e,t)}}}function s(e,t){return void 0===t&&(t={}),(0,a().withBaseUrl)(e,t)}},314:function(e,t,r){"use strict";function n(e){return!0===/^(\w*:|\/\/)/.test(e)}function o(e){return void 0!==e&&!n(e)}r.d(t,"b",(function(){return n})),r.d(t,"a",(function(){return o}))},382:function(e,t,r){"use strict";r.r(t),t.default="data:image/png;base64,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"}}]);