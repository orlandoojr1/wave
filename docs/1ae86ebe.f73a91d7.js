(window.webpackJsonp=window.webpackJsonp||[]).push([[32],{311:function(e,t,r){"use strict";r.d(t,"a",(function(){return m})),r.d(t,"b",(function(){return b}));var n=r(0),a=r.n(n);function s(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){s(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},s=Object.keys(e);for(n=0;n<s.length;n++)r=s[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(n=0;n<s.length;n++)r=s[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var u=a.a.createContext({}),p=function(e){var t=a.a.useContext(u),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},m=function(e){var t=p(e.components);return a.a.createElement(u.Provider,{value:t},e.children)},l={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},f=a.a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,s=e.originalType,o=e.parentName,u=c(e,["components","mdxType","originalType","parentName"]),m=p(r),f=n,b=m["".concat(o,".").concat(f)]||m[f]||l[f]||s;return r?a.a.createElement(b,i(i({ref:t},u),{},{components:r})):a.a.createElement(b,i({ref:t},u))}));function b(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var s=r.length,o=new Array(s);o[0]=f;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i.mdxType="string"==typeof e?e:n,o[1]=i;for(var u=2;u<s;u++)o[u]=r[u];return a.a.createElement.apply(null,o)}return a.a.createElement.apply(null,r)}f.displayName="MDXCreateElement"},312:function(e,t,r){"use strict";var n=r(0),a=r(19);t.a=function(){var e=Object(n.useContext)(a.a);if(null===e)throw new Error("Docusaurus context not provided");return e}},313:function(e,t,r){"use strict";r.d(t,"b",(function(){return s})),r.d(t,"a",(function(){return o}));var n=r(312),a=r(314);function s(){var e=Object(n.a)().siteConfig,t=(e=void 0===e?{}:e).baseUrl,r=void 0===t?"/":t,s=e.url;return{withBaseUrl:function(e,t){return function(e,t,r,n){var s=void 0===n?{}:n,o=s.forcePrependBaseUrl,i=void 0!==o&&o,c=s.absolute,u=void 0!==c&&c;if(!r)return r;if(r.startsWith("#"))return r;if(Object(a.b)(r))return r;if(i)return t+r;var p=r.startsWith(t)?r:t+r.replace(/^\//,"");return u?e+p:p}(s,r,e,t)}}}function o(e,t){return void 0===t&&(t={}),(0,s().withBaseUrl)(e,t)}},314:function(e,t,r){"use strict";function n(e){return!0===/^(\w*:|\/\/)/.test(e)}function a(e){return void 0!==e&&!n(e)}r.d(t,"b",(function(){return n})),r.d(t,"a",(function(){return a}))},349:function(e,t,r){"use strict";r.r(t),t.default=r.p+"assets/images/message-bar-d893610affc5c6857a7cbf1546ad8326.png"},82:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return i})),r.d(t,"metadata",(function(){return c})),r.d(t,"rightToc",(function(){return u})),r.d(t,"default",(function(){return m}));var n=r(2),a=r(6),s=(r(0),r(311)),o=r(313),i={title:"Form / Message Bar",keywords:["form","message_bar"]},c={unversionedId:"examples/message-bar",id:"examples/message-bar",isDocsHomePage:!1,title:"Form / Message Bar",description:"Use message bars to indicate relevant status information.",source:"@site/docs/examples/message-bar.md",slug:"/examples/message-bar",permalink:"/wave/docs/examples/message-bar",editUrl:"https://github.com/h2oai/wave/edit/master/website/docs/examples/message-bar.md",version:"current",sidebar:"someSidebar",previous:{title:"Form / Progress / Updating",permalink:"/wave/docs/examples/progress-update"},next:{title:"Form / Textbox",permalink:"/wave/docs/examples/textbox"}},u=[],p={rightToc:u};function m(e){var t=e.components,i=Object(a.a)(e,["components"]);return Object(s.b)("wrapper",Object(n.a)({},p,i,{components:t,mdxType:"MDXLayout"}),Object(s.b)("p",null,"Use message bars to indicate relevant status information."),Object(s.b)("div",{className:"cover",style:{backgroundImage:"url("+r(349).default+")"}}),Object(s.b)("pre",null,Object(s.b)("code",Object(n.a)({parentName:"pre"},{className:"language-py"}),"from h2o_wave import site, ui\n\npage = site['/demo']\n\npage['example'] = ui.form_card(\n    box='1 1 4 10',\n    items=[\n        ui.message_bar(type='blocked', text='This action is blocked.'),\n        ui.message_bar(type='error', text='This is an error message'),\n        ui.message_bar(type='warning', text='This is a warning message.'),\n        ui.message_bar(type='info', text='This is an information message.'),\n        ui.message_bar(type='success', text='This is an success message.'),\n        ui.message_bar(type='danger', text='This is a danger message.'),\n    ]\n)\npage.save()\n")),Object(s.b)("p",null,Object(s.b)("strong",{parentName:"p"},"Tags"),": \u2002",Object(s.b)("a",{href:Object(o.a)("docs/examples/tags#form")},"form")," \u2002",Object(s.b)("a",{href:Object(o.a)("docs/examples/tags#message_bar")},"message_bar")))}m.isMDXComponent=!0}}]);