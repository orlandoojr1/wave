(window.webpackJsonp=window.webpackJsonp||[]).push([[41],{311:function(e,t,r){"use strict";r.d(t,"a",(function(){return p})),r.d(t,"b",(function(){return b}));var n=r(0),a=r.n(n);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function c(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?c(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):c(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var s=a.a.createContext({}),u=function(e){var t=a.a.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},p=function(e){var t=u(e.components);return a.a.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},f=a.a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,o=e.originalType,c=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),p=u(r),f=n,b=p["".concat(c,".").concat(f)]||p[f]||d[f]||o;return r?a.a.createElement(b,i(i({ref:t},s),{},{components:r})):a.a.createElement(b,i({ref:t},s))}));function b(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=r.length,c=new Array(o);c[0]=f;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i.mdxType="string"==typeof e?e:n,c[1]=i;for(var s=2;s<o;s++)c[s]=r[s];return a.a.createElement.apply(null,c)}return a.a.createElement.apply(null,r)}f.displayName="MDXCreateElement"},312:function(e,t,r){"use strict";var n=r(0),a=r(19);t.a=function(){var e=Object(n.useContext)(a.a);if(null===e)throw new Error("Docusaurus context not provided");return e}},313:function(e,t,r){"use strict";r.d(t,"b",(function(){return o})),r.d(t,"a",(function(){return c}));var n=r(312),a=r(314);function o(){var e=Object(n.a)().siteConfig,t=(e=void 0===e?{}:e).baseUrl,r=void 0===t?"/":t,o=e.url;return{withBaseUrl:function(e,t){return function(e,t,r,n){var o=void 0===n?{}:n,c=o.forcePrependBaseUrl,i=void 0!==c&&c,l=o.absolute,s=void 0!==l&&l;if(!r)return r;if(r.startsWith("#"))return r;if(Object(a.b)(r))return r;if(i)return t+r;var u=r.startsWith(t)?r:t+r.replace(/^\//,"");return s?e+u:u}(o,r,e,t)}}}function c(e,t){return void 0===t&&(t={}),(0,o().withBaseUrl)(e,t)}},314:function(e,t,r){"use strict";function n(e){return!0===/^(\w*:|\/\/)/.test(e)}function a(e){return void 0!==e&&!n(e)}r.d(t,"b",(function(){return n})),r.d(t,"a",(function(){return a}))},354:function(e,t,r){"use strict";r.r(t),t.default=r.p+"assets/images/plot-interval-stacked-6a492804251cf9ef3fcd33cf721b725f.png"},96:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return i})),r.d(t,"metadata",(function(){return l})),r.d(t,"rightToc",(function(){return s})),r.d(t,"default",(function(){return p}));var n=r(2),a=r(6),o=(r(0),r(311)),c=r(313),i={title:"Plot / Interval / Stacked",keywords:["interval","plot","stacked"]},l={unversionedId:"examples/plot-interval-stacked",id:"examples/plot-interval-stacked",isDocsHomePage:!1,title:"Plot / Interval / Stacked",description:"Make a stacked column plot.",source:"@site/docs/examples/plot-interval-stacked.md",slug:"/examples/plot-interval-stacked",permalink:"/wave/docs/examples/plot-interval-stacked",editUrl:"https://github.com/h2oai/wave/edit/master/website/docs/examples/plot-interval-stacked.md",version:"current",sidebar:"someSidebar",previous:{title:"Plot / Interval / Range / Transpose",permalink:"/wave/docs/examples/plot-interval-range-transpose"},next:{title:"Plot / Interval / Stacked / Transpose",permalink:"/wave/docs/examples/plot-interval-stacked-transpose"}},s=[],u={rightToc:s};function p(e){var t=e.components,i=Object(a.a)(e,["components"]);return Object(o.b)("wrapper",Object(n.a)({},u,i,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,"Make a stacked column plot."),Object(o.b)("div",{className:"cover",style:{backgroundImage:"url("+r(354).default+")"}}),Object(o.b)("pre",null,Object(o.b)("code",Object(n.a)({parentName:"pre"},{className:"language-py"}),"from synth import FakeMultiCategoricalSeries\nfrom h2o_wave import site, data, ui\n\npage = site['/demo']\n\nn = 10\nk = 5\nf = FakeMultiCategoricalSeries(groups=k)\nv = page.add('example', ui.plot_card(\n    box='1 1 4 5',\n    title='Intervals, stacked',\n    data=data('country product price', n * k),\n    plot=ui.plot([ui.mark(type='interval', x='=product', y='=price', color='=country', stack='auto', y_min=0)])\n))\n\nv.data = [(g, t, x) for x in [f.next() for _ in range(n)] for g, t, x, dx in x]\n\npage.save()\n")),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},"Tags"),": \u2002",Object(o.b)("a",{href:Object(c.a)("docs/examples/tags#interval")},"interval")," \u2002",Object(o.b)("a",{href:Object(c.a)("docs/examples/tags#plot")},"plot")," \u2002",Object(o.b)("a",{href:Object(c.a)("docs/examples/tags#stacked")},"stacked")))}p.isMDXComponent=!0}}]);