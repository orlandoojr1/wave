(window.webpackJsonp=window.webpackJsonp||[]).push([[230],{284:function(A,e,t){"use strict";t.r(e),t.d(e,"frontMatter",(function(){return i})),t.d(e,"metadata",(function(){return f})),t.d(e,"rightToc",(function(){return c})),t.d(e,"default",(function(){return v}));var n=t(2),r=t(6),o=(t(0),t(311)),a=t(313),i={title:"Plot / Histogram",keywords:["histogram","plot"]},f={unversionedId:"examples/plot-histogram",id:"examples/plot-histogram",isDocsHomePage:!1,title:"Plot / Histogram",description:"Make a histogram.",source:"@site/docs/examples/plot-histogram.md",slug:"/examples/plot-histogram",permalink:"/wave/docs/examples/plot-histogram",editUrl:"https://github.com/h2oai/wave/edit/master/website/docs/examples/plot-histogram.md",version:"current",sidebar:"someSidebar",previous:{title:"Plot / Polygon",permalink:"/wave/docs/examples/plot-polygon"},next:{title:"Plot / Axis Titles",permalink:"/wave/docs/examples/plot-axis-title"}},c=[],u={rightToc:c};function v(A){var e=A.components,i=Object(r.a)(A,["components"]);return Object(o.b)("wrapper",Object(n.a)({},u,i,{components:e,mdxType:"MDXLayout"}),Object(o.b)("p",null,"Make a histogram."),Object(o.b)("div",{className:"cover",style:{backgroundImage:"url("+t(495).default+")"}}),Object(o.b)("pre",null,Object(o.b)("code",Object(n.a)({parentName:"pre"},{className:"language-py"}),"from synth import FakeCategoricalSeries\nfrom h2o_wave import site, data, ui\n\npage = site['/demo']\n\nn = 10\nf = FakeCategoricalSeries()\nv = page.add('example', ui.plot_card(\n    box='1 1 4 5',\n    title='Histogram',\n    data=data('lo hi price', n),\n    plot=ui.plot([ui.mark(type='interval', y='=price', x1='=lo', x2='=hi', y_min=0)])\n))\nv.data = [(i * 10, i * 10 + 10, x) for i, (c, x, dx) in enumerate([f.next() for _ in range(n)])]\n\npage.save()\n")),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},"Tags"),": \u2002",Object(o.b)("a",{href:Object(a.a)("docs/examples/tags#histogram")},"histogram")," \u2002",Object(o.b)("a",{href:Object(a.a)("docs/examples/tags#plot")},"plot")))}v.isMDXComponent=!0},311:function(A,e,t){"use strict";t.d(e,"a",(function(){return v})),t.d(e,"b",(function(){return d}));var n=t(0),r=t.n(n);function o(A,e,t){return e in A?Object.defineProperty(A,e,{value:t,enumerable:!0,configurable:!0,writable:!0}):A[e]=t,A}function a(A,e){var t=Object.keys(A);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(A);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(A,e).enumerable}))),t.push.apply(t,n)}return t}function i(A){for(var e=1;e<arguments.length;e++){var t=null!=arguments[e]?arguments[e]:{};e%2?a(Object(t),!0).forEach((function(e){o(A,e,t[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(A,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(e){Object.defineProperty(A,e,Object.getOwnPropertyDescriptor(t,e))}))}return A}function f(A,e){if(null==A)return{};var t,n,r=function(A,e){if(null==A)return{};var t,n,r={},o=Object.keys(A);for(n=0;n<o.length;n++)t=o[n],e.indexOf(t)>=0||(r[t]=A[t]);return r}(A,e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(A);for(n=0;n<o.length;n++)t=o[n],e.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(A,t)&&(r[t]=A[t])}return r}var c=r.a.createContext({}),u=function(A){var e=r.a.useContext(c),t=e;return A&&(t="function"==typeof A?A(e):i(i({},e),A)),t},v=function(A){var e=u(A.components);return r.a.createElement(c.Provider,{value:e},A.children)},g={inlineCode:"code",wrapper:function(A){var e=A.children;return r.a.createElement(r.a.Fragment,{},e)}},b=r.a.forwardRef((function(A,e){var t=A.components,n=A.mdxType,o=A.originalType,a=A.parentName,c=f(A,["components","mdxType","originalType","parentName"]),v=u(t),b=n,d=v["".concat(a,".").concat(b)]||v[b]||g[b]||o;return t?r.a.createElement(d,i(i({ref:e},c),{},{components:t})):r.a.createElement(d,i({ref:e},c))}));function d(A,e){var t=arguments,n=e&&e.mdxType;if("string"==typeof A||n){var o=t.length,a=new Array(o);a[0]=b;var i={};for(var f in e)hasOwnProperty.call(e,f)&&(i[f]=e[f]);i.originalType=A,i.mdxType="string"==typeof A?A:n,a[1]=i;for(var c=2;c<o;c++)a[c]=t[c];return r.a.createElement.apply(null,a)}return r.a.createElement.apply(null,t)}b.displayName="MDXCreateElement"},312:function(A,e,t){"use strict";var n=t(0),r=t(19);e.a=function(){var A=Object(n.useContext)(r.a);if(null===A)throw new Error("Docusaurus context not provided");return A}},313:function(A,e,t){"use strict";t.d(e,"b",(function(){return o})),t.d(e,"a",(function(){return a}));var n=t(312),r=t(314);function o(){var A=Object(n.a)().siteConfig,e=(A=void 0===A?{}:A).baseUrl,t=void 0===e?"/":e,o=A.url;return{withBaseUrl:function(A,e){return function(A,e,t,n){var o=void 0===n?{}:n,a=o.forcePrependBaseUrl,i=void 0!==a&&a,f=o.absolute,c=void 0!==f&&f;if(!t)return t;if(t.startsWith("#"))return t;if(Object(r.b)(t))return t;if(i)return e+t;var u=t.startsWith(e)?t:e+t.replace(/^\//,"");return c?A+u:u}(o,t,A,e)}}}function a(A,e){return void 0===e&&(e={}),(0,o().withBaseUrl)(A,e)}},314:function(A,e,t){"use strict";function n(A){return!0===/^(\w*:|\/\/)/.test(A)}function r(A){return void 0!==A&&!n(A)}t.d(e,"b",(function(){return n})),t.d(e,"a",(function(){return r}))},495:function(A,e,t){"use strict";t.r(e),e.default="data:image/png;base64,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"}}]);