(window.webpackJsonp=window.webpackJsonp||[]).push([[208],{262:function(e,n,t){"use strict";t.r(n),t.d(n,"frontMatter",(function(){return u})),t.d(n,"metadata",(function(){return s})),t.d(n,"rightToc",(function(){return f})),t.d(n,"default",(function(){return d}));var i=t(2),r=t(6),a=(t(0),t(311)),o=t(313),u={title:"Uploads / Async",keywords:["upload"]},s={unversionedId:"examples/upload-async",id:"examples/upload-async",isDocsHomePage:!1,title:"Uploads / Async",description:"Upload files from an interactive app.",source:"@site/docs/examples/upload-async.md",slug:"/examples/upload-async",permalink:"/wave/docs/examples/upload-async",editUrl:"https://github.com/h2oai/wave/edit/master/website/docs/examples/upload-async.md",version:"current",sidebar:"someSidebar",previous:{title:"Uploads",permalink:"/wave/docs/examples/upload"},next:{title:"Uploads / UI",permalink:"/wave/docs/examples/upload-ui"}},f=[],c={rightToc:f};function d(e){var n=e.components,u=Object(r.a)(e,["components"]);return Object(a.b)("wrapper",Object(i.a)({},c,u,{components:n,mdxType:"MDXLayout"}),Object(a.b)("p",null,"Upload files from an interactive app."),Object(a.b)("div",{className:"cover",style:{backgroundImage:"url("+t(498).default+")"}}),Object(a.b)("pre",null,Object(a.b)("code",Object(i.a)({parentName:"pre"},{className:"language-py"}),"import os\nfrom h2o_wave import main, app, Q, ui\n\n\ndef write_csv(filename, rows):\n    with open(filename, 'w', encoding='utf-8') as f:\n        f.write('\\n'.join([','.join([str(x) for x in row]) for row in rows]))\n\n\n@app('/demo')\nasync def serve(q: Q):\n    if q.args.generate_csv:\n        # Generate\n        write_csv('squares.csv', [[x, x * x] for x in range(1, 1 + q.args.row_count)])\n        # Upload\n        download_path, = await q.site.upload(['squares.csv'])\n        # Clean up\n        os.remove('squares.csv')\n\n        # Display link\n        q.page['example'].items = [\n            ui.text_xl('Squares Generated!'),\n            ui.text(f'[Download my {q.args.row_count} squares!]({download_path})'),\n            ui.button(name='show_form', label='Back', primary=True),\n        ]\n    else:\n        # Accept a row count from the user\n        q.page['example'] = ui.form_card(box='1 1 4 10', items=[\n            ui.text_xl('Square Generator'),\n            ui.slider(name='row_count', label='Squares to generate', min=0, max=100, step=10, value=30),\n            ui.button(name='generate_csv', label='Generate', primary=True),\n        ])\n    await q.page.save()\n")),Object(a.b)("p",null,Object(a.b)("strong",{parentName:"p"},"Tags"),": \u2002",Object(a.b)("a",{href:Object(o.a)("docs/examples/tags#upload")},"upload")))}d.isMDXComponent=!0},311:function(e,n,t){"use strict";t.d(n,"a",(function(){return d})),t.d(n,"b",(function(){return l}));var i=t(0),r=t.n(i);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);n&&(i=i.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,i)}return t}function u(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function s(e,n){if(null==e)return{};var t,i,r=function(e,n){if(null==e)return{};var t,i,r={},a=Object.keys(e);for(i=0;i<a.length;i++)t=a[i],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(i=0;i<a.length;i++)t=a[i],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var f=r.a.createContext({}),c=function(e){var n=r.a.useContext(f),t=n;return e&&(t="function"==typeof e?e(n):u(u({},n),e)),t},d=function(e){var n=c(e.components);return r.a.createElement(f.Provider,{value:n},e.children)},I={inlineCode:"code",wrapper:function(e){var n=e.children;return r.a.createElement(r.a.Fragment,{},n)}},R=r.a.forwardRef((function(e,n){var t=e.components,i=e.mdxType,a=e.originalType,o=e.parentName,f=s(e,["components","mdxType","originalType","parentName"]),d=c(t),R=i,l=d["".concat(o,".").concat(R)]||d[R]||I[R]||a;return t?r.a.createElement(l,u(u({ref:n},f),{},{components:t})):r.a.createElement(l,u({ref:n},f))}));function l(e,n){var t=arguments,i=n&&n.mdxType;if("string"==typeof e||i){var a=t.length,o=new Array(a);o[0]=R;var u={};for(var s in n)hasOwnProperty.call(n,s)&&(u[s]=n[s]);u.originalType=e,u.mdxType="string"==typeof e?e:i,o[1]=u;for(var f=2;f<a;f++)o[f]=t[f];return r.a.createElement.apply(null,o)}return r.a.createElement.apply(null,t)}R.displayName="MDXCreateElement"},312:function(e,n,t){"use strict";var i=t(0),r=t(19);n.a=function(){var e=Object(i.useContext)(r.a);if(null===e)throw new Error("Docusaurus context not provided");return e}},313:function(e,n,t){"use strict";t.d(n,"b",(function(){return a})),t.d(n,"a",(function(){return o}));var i=t(312),r=t(314);function a(){var e=Object(i.a)().siteConfig,n=(e=void 0===e?{}:e).baseUrl,t=void 0===n?"/":n,a=e.url;return{withBaseUrl:function(e,n){return function(e,n,t,i){var a=void 0===i?{}:i,o=a.forcePrependBaseUrl,u=void 0!==o&&o,s=a.absolute,f=void 0!==s&&s;if(!t)return t;if(t.startsWith("#"))return t;if(Object(r.b)(t))return t;if(u)return n+t;var c=t.startsWith(n)?t:n+t.replace(/^\//,"");return f?e+c:c}(a,t,e,n)}}}function o(e,n){return void 0===n&&(n={}),(0,a().withBaseUrl)(e,n)}},314:function(e,n,t){"use strict";function i(e){return!0===/^(\w*:|\/\/)/.test(e)}function r(e){return void 0!==e&&!i(e)}t.d(n,"b",(function(){return i})),t.d(n,"a",(function(){return r}))},498:function(e,n,t){"use strict";t.r(n),n.default="data:image/png;base64,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"}}]);