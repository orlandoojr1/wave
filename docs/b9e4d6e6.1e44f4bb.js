(window.webpackJsonp=window.webpackJsonp||[]).push([[180],{234:function(e,r,t){"use strict";t.r(r),t.d(r,"frontMatter",(function(){return s})),t.d(r,"metadata",(function(){return u})),t.d(r,"rightToc",(function(){return f})),t.d(r,"default",(function(){return m}));var n=t(2),a=t(6),c=(t(0),t(311)),o=t(313),s={title:"Meta / Refresh",keywords:["meta","refresh"]},u={unversionedId:"examples/meta-refresh",id:"examples/meta-refresh",isDocsHomePage:!1,title:"Meta / Refresh",description:"Turn off live updates for static pages to conserve server resources.",source:"@site/docs/examples/meta-refresh.md",slug:"/examples/meta-refresh",permalink:"/wave/docs/examples/meta-refresh",editUrl:"https://github.com/h2oai/wave/edit/master/website/docs/examples/meta-refresh.md",version:"current",sidebar:"someSidebar",previous:{title:"Meta / Notification",permalink:"/wave/docs/examples/meta-notification"},next:{title:"Meta / Redirect",permalink:"/wave/docs/examples/meta-redirect"}},f=[],p={rightToc:f};function m(e){var r=e.components,s=Object(a.a)(e,["components"]);return Object(c.b)("wrapper",Object(n.a)({},p,s,{components:r,mdxType:"MDXLayout"}),Object(c.b)("p",null,"Turn off live updates for static pages to conserve server resources."),Object(c.b)("div",{className:"cover",style:{backgroundImage:"url("+t(453).default+")"}}),Object(c.b)("pre",null,Object(c.b)("code",Object(n.a)({parentName:"pre"},{className:"language-py"}),"from h2o_wave import site, ui\n\npage = site['/demo']\n\n# Set refresh rate to zero (\"no updates\")\npage['meta'] = ui.meta_card(box='', refresh=0)\n\npage['example'] = ui.markdown_card(\n    box='1 1 2 2',\n    title='No updates for you',\n    content='This page stops receiving updates once loaded.',\n)\n\npage.save()\n")),Object(c.b)("p",null,Object(c.b)("strong",{parentName:"p"},"Tags"),": \u2002",Object(c.b)("a",{href:Object(o.a)("docs/examples/tags#meta")},"meta")," \u2002",Object(c.b)("a",{href:Object(o.a)("docs/examples/tags#refresh")},"refresh")))}m.isMDXComponent=!0},311:function(e,r,t){"use strict";t.d(r,"a",(function(){return m})),t.d(r,"b",(function(){return b}));var n=t(0),a=t.n(n);function c(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function o(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function s(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?o(Object(t),!0).forEach((function(r){c(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function u(e,r){if(null==e)return{};var t,n,a=function(e,r){if(null==e)return{};var t,n,a={},c=Object.keys(e);for(n=0;n<c.length;n++)t=c[n],r.indexOf(t)>=0||(a[t]=e[t]);return a}(e,r);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(n=0;n<c.length;n++)t=c[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var f=a.a.createContext({}),p=function(e){var r=a.a.useContext(f),t=r;return e&&(t="function"==typeof e?e(r):s(s({},r),e)),t},m=function(e){var r=p(e.components);return a.a.createElement(f.Provider,{value:r},e.children)},d={inlineCode:"code",wrapper:function(e){var r=e.children;return a.a.createElement(a.a.Fragment,{},r)}},i=a.a.forwardRef((function(e,r){var t=e.components,n=e.mdxType,c=e.originalType,o=e.parentName,f=u(e,["components","mdxType","originalType","parentName"]),m=p(t),i=n,b=m["".concat(o,".").concat(i)]||m[i]||d[i]||c;return t?a.a.createElement(b,s(s({ref:r},f),{},{components:t})):a.a.createElement(b,s({ref:r},f))}));function b(e,r){var t=arguments,n=r&&r.mdxType;if("string"==typeof e||n){var c=t.length,o=new Array(c);o[0]=i;var s={};for(var u in r)hasOwnProperty.call(r,u)&&(s[u]=r[u]);s.originalType=e,s.mdxType="string"==typeof e?e:n,o[1]=s;for(var f=2;f<c;f++)o[f]=t[f];return a.a.createElement.apply(null,o)}return a.a.createElement.apply(null,t)}i.displayName="MDXCreateElement"},312:function(e,r,t){"use strict";var n=t(0),a=t(19);r.a=function(){var e=Object(n.useContext)(a.a);if(null===e)throw new Error("Docusaurus context not provided");return e}},313:function(e,r,t){"use strict";t.d(r,"b",(function(){return c})),t.d(r,"a",(function(){return o}));var n=t(312),a=t(314);function c(){var e=Object(n.a)().siteConfig,r=(e=void 0===e?{}:e).baseUrl,t=void 0===r?"/":r,c=e.url;return{withBaseUrl:function(e,r){return function(e,r,t,n){var c=void 0===n?{}:n,o=c.forcePrependBaseUrl,s=void 0!==o&&o,u=c.absolute,f=void 0!==u&&u;if(!t)return t;if(t.startsWith("#"))return t;if(Object(a.b)(t))return t;if(s)return r+t;var p=t.startsWith(r)?t:r+t.replace(/^\//,"");return f?e+p:p}(c,t,e,r)}}}function o(e,r){return void 0===r&&(r={}),(0,c().withBaseUrl)(e,r)}},314:function(e,r,t){"use strict";function n(e){return!0===/^(\w*:|\/\/)/.test(e)}function a(e){return void 0!==e&&!n(e)}t.d(r,"b",(function(){return n})),t.d(r,"a",(function(){return a}))},453:function(e,r,t){"use strict";t.r(r),r.default="data:image/png;base64,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"}}]);