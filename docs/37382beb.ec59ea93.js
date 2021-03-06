(window.webpackJsonp=window.webpackJsonp||[]).push([[63],{118:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return i})),r.d(t,"metadata",(function(){return u})),r.d(t,"rightToc",(function(){return g})),r.d(t,"default",(function(){return d}));var n=r(2),o=r(6),a=(r(0),r(311)),A=r(313),i={title:"Pixel Art",keywords:["collaboration"]},u={unversionedId:"examples/pixel-art",id:"examples/pixel-art",isDocsHomePage:!1,title:"Pixel Art",description:"A card that demonstrates collaborative editing in Wave.",source:"@site/docs/examples/pixel-art.md",slug:"/examples/pixel-art",permalink:"/wave/docs/examples/pixel-art",editUrl:"https://github.com/h2oai/wave/edit/master/website/docs/examples/pixel-art.md",version:"current",sidebar:"someSidebar",previous:{title:"Plot / D3.js",permalink:"/wave/docs/examples/plot-d3"},next:{title:"Uploads",permalink:"/wave/docs/examples/upload"}},g=[],c={rightToc:g};function d(e){var t=e.components,i=Object(o.a)(e,["components"]);return Object(a.b)("wrapper",Object(n.a)({},c,i,{components:t,mdxType:"MDXLayout"}),Object(a.b)("p",null,"A card that demonstrates collaborative editing in Wave.\nOpen ",Object(a.b)("inlineCode",{parentName:"p"},"/demo")," in multiple browsers and watch them synchronize in realtime."),Object(a.b)("div",{className:"cover",style:{backgroundImage:"url("+r(370).default+")"}}),Object(a.b)("pre",null,Object(a.b)("code",Object(n.a)({parentName:"pre"},{className:"language-py"}),"from h2o_wave import site, data, ui\n\npage = site['/demo']\npage.drop()\n\npage.add('example', ui.pixel_art_card(\n    box='1 1 4 6',\n    title='Art',\n    data=data('color', 16 * 16),\n))\npage.save()\n")),Object(a.b)("p",null,Object(a.b)("strong",{parentName:"p"},"Tags"),": \u2002",Object(a.b)("a",{href:Object(A.a)("docs/examples/tags#collaboration")},"collaboration")))}d.isMDXComponent=!0},311:function(e,t,r){"use strict";r.d(t,"a",(function(){return d})),r.d(t,"b",(function(){return f}));var n=r(0),o=r.n(n);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function A(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?A(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):A(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function u(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var g=o.a.createContext({}),c=function(e){var t=o.a.useContext(g),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},d=function(e){var t=c(e.components);return o.a.createElement(g.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},B=o.a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,a=e.originalType,A=e.parentName,g=u(e,["components","mdxType","originalType","parentName"]),d=c(r),B=n,f=d["".concat(A,".").concat(B)]||d[B]||s[B]||a;return r?o.a.createElement(f,i(i({ref:t},g),{},{components:r})):o.a.createElement(f,i({ref:t},g))}));function f(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var a=r.length,A=new Array(a);A[0]=B;var i={};for(var u in t)hasOwnProperty.call(t,u)&&(i[u]=t[u]);i.originalType=e,i.mdxType="string"==typeof e?e:n,A[1]=i;for(var g=2;g<a;g++)A[g]=r[g];return o.a.createElement.apply(null,A)}return o.a.createElement.apply(null,r)}B.displayName="MDXCreateElement"},312:function(e,t,r){"use strict";var n=r(0),o=r(19);t.a=function(){var e=Object(n.useContext)(o.a);if(null===e)throw new Error("Docusaurus context not provided");return e}},313:function(e,t,r){"use strict";r.d(t,"b",(function(){return a})),r.d(t,"a",(function(){return A}));var n=r(312),o=r(314);function a(){var e=Object(n.a)().siteConfig,t=(e=void 0===e?{}:e).baseUrl,r=void 0===t?"/":t,a=e.url;return{withBaseUrl:function(e,t){return function(e,t,r,n){var a=void 0===n?{}:n,A=a.forcePrependBaseUrl,i=void 0!==A&&A,u=a.absolute,g=void 0!==u&&u;if(!r)return r;if(r.startsWith("#"))return r;if(Object(o.b)(r))return r;if(i)return t+r;var c=r.startsWith(t)?r:t+r.replace(/^\//,"");return g?e+c:c}(a,r,e,t)}}}function A(e,t){return void 0===t&&(t={}),(0,a().withBaseUrl)(e,t)}},314:function(e,t,r){"use strict";function n(e){return!0===/^(\w*:|\/\/)/.test(e)}function o(e){return void 0!==e&&!n(e)}r.d(t,"b",(function(){return n})),r.d(t,"a",(function(){return o}))},370:function(e,t,r){"use strict";r.r(t),t.default="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAV0AAAGkCAYAAACSFfZmAAAABHNCSVQICAgIfAhkiAAAABl0RVh0U29mdHdhcmUAZ25vbWUtc2NyZWVuc2hvdO8Dvz4AAAAtdEVYdENyZWF0aW9uIFRpbWUATW9uIDI4IFNlcCAyMDIwIDAyOjAxOjI3IFBNIFBEVKWDpNQAAAvcSURBVHic7d1diF3lvcfx/ziDQnvZpghCkFixvkRIZ1KhLVblgB4sXjlJm1vxgEpsz0krsQ0Jc3kUSntqQ00TMDkXxmxBaSPtDD2+4EuGxFEhDCSioVUQg1IvWnrRgqsXhwwa01T3WvnNmuzPBwLJZK9n/RNYXx72vDxjTdM0BUDEBcs9AMAoEV2AINEFCBJdgCDRBQgSXYAg0QUIEl2AINEFCBJdgCDRBQgSXYAg0QUIEl2AINEFCBJdgKDW0f3udzbW5FfX1Z49u//laz/88MN6+OFf1pEjh9veFmBFahXdP/7hD/X666/X5z7/+ZqdnT3ra5umqaZpatfDD9eRw0fa3BZgxWoV3bm5uRofH6977r6n3nzjjTpx4sTS3/3vvn01+dV1tW/v3vrmN75ehw4dqm9+4+tVVbVnz+767nc2tpscYAVqGd3Zmlq/vm799rdrYmKiZmd/94nX/P7/fl/f/8//qjVr1tRPf/Y/VVV1zTVr68fbtrW5NcCKNHR0T+1s10+tr6qqK664on7z619/4nU7tu+o22+/vS6++OKampqqqqrrrruurrlm7bC3Blixho7u3NxcVVU99NDP64ZvXV+Li4t18uTJOn7s2Mde94UvfrHdhADnkYlhL5yb+/9PnO3a9auqqnrv/ffrxz+6v+bm5uqKr3ylm+kAzjND7XSPHztWb731Vn3ve9+vyampmpyaqltuuaWuvfbapRifyfj4eF100UV16NBL9eKLLw49NMBKNVR0T721cONNN33s4zfeeFO98847dfTo0X967Q9++MN699136xcP/XyYWwOsaGNN0zTLPQTAqPBtwABBogsQJLoAQUN9ydhHv923C2vWrOl0PfO1Y752zNdO3+dry04XIEh0AYJEFyBIdAGCRBcgSHQBgkQXIEh0AYJEFyBIdAGCRBcgSHQBgkQXIEh0AYJEFyBIdAGCRBcgSHQBgkQXIGisaZpmuYfo+5lI5mvHfO2Yr52+zWenCxAkugBBogsQJLoAQaILECS6AEGiCxAkugBBogsQJLoAQaILECS6AEGiCxAkugBBogsQJLoAQaILECS6AEGiCxA0McxFfTtz6HTma8d87Zivnb7P15adLkCQ6AIEiS5AkOgCBIkuQJDoAgSJLkCQ6AIEiS5AkOgCBIkuQJDoAgSJLkCQ6AIEiS5AkOgCBIkuQJDoAgSJLkDQWNM0zXIP0fczkbqe77LLLut0Pfgsun7kR+35bTufnS5AkOgCBIkuQJDoAgSJLkCQ6AIEiS5AkOgCBIkuQJDoAgSJLkCQ6AIEiS5AkOgCBIkuQJDoAgSJLkCQ6AIEiS5A0MQwF/XtzKHT9X2+ru16+d+XewTOof+Y+m2n6/X9+ej7fG3Z6QIEiS5AkOgCBIkuQJDoAgSJLkCQ6AIEiS5AkOgCBIkuQJDoAgSJLkCQ6AIEiS5AkOgCBIkuQJDoAgSJLkCQ6AIEDXVG2qididT1fH23sPBGp+tNTn650/W6Nmr/3r4/H+f7fHa6AEGiCxAkugBBogsQJLoAQaILECS6AEGiCxAkugBBogsQJLoAQaILECS6AEGiCxAkugBBogsQJLoAQaILECS6AEFDnZHWtzOHTtf3+fqu72d8dW3U/r19fz76Pl9bdroAQaILECS6AEGiCxAkugBBogsQJLoAQaILECS6AEGiCxAkugBBogsQJLoAQaILECS6AEGiCxAkugBBogsQJLoAQUOdkTZqZyJ1PR8sp74/H+f7fHa6AEGiCxAkugBBogsQJLoAQaILECS6AEGiCxAkugBBogsQJLoAQaILECS6AEGiCxAkugBBogsQJLoAQaILECS6AEFDnZHWtzOHTtf3+fpuYeGN5R5hRZuc/PJyj3BWfX8++j5fW3a6AEGiCxAkugBBogsQJLoAQaILECS6AEGiCxAkugBBogsQJLoAQaILECS6AEGiCxAkugBBogsQJLoAQaILECS6AEFDnZE2amcidT1f3/X9jC/a6fvzcb7PZ6cLECS6AEGiCxAkugBBogsQJLoAQaILECS6AEGiCxAkugBBogsQJLoAQaILECS6AEGiCxAkugBBogsQJLoAQaILEDTWNE3zWS/q25lDp+v7fGNjY52uB5/Fm2++2el6o/b8tmWnCxAkugBBogsQJLoAQaILECS6AEGiCxAkugBBogsQJLoAQaILECS6AEGiCxAkugBBogsQJLoAQaILECS6AEGiCxA0McxFo3YmUtfzDXEs3VmN2v+f+doxXztt57PTBQgSXYAg0QUIEl2AINEFCBJdgCDRBQgSXYAg0QUIEl2AINEFCBJdgCDRBQgSXYAg0QUIEl2AINEFCBJdgCDRBQga6oy0vp05dDrztWO+dszXTt/na8tOFyBIdAGCRBcgSHQBgkQXIEh0AYJEFyBIdAGCRBcgSHQBgkQXIEh0AYJEFyBIdAGCRBcgSHQBgkQXIEh0AYJEFyBorGmaZrmH6PuZSOZrx3ztmK+dvs1npwsQJLoAQaILECS6AEGiCxAkugBBogsQJLoAQaILECS6AEGiCxAkugBBogsQJLoAQaILECS6AEGiCxAkugBBogsQNDHMRX07c+h05mvHfO2Yr52+z9eWnS5AkOgCBIkuQJDoAgSJLkCQ6AIEiS5AkOgCBIkuQJDoAgSJLkCQ6AIEiS5AkOgCBIkuQJDoAgSJLkCQ6AIEiS5A0FjTNM1yD9H3M5HM14752jFfO32bz04XIEh0AYJEFyBIdAGCRBcgSHQBgkQXIEh0AYJEFyBIdAGCRBcgSHQBgkQXIEh0AYJEFyBIdAGCRBcgSHQBgkQXIKgXZ6QBjAo7XYAg0QUIEl2AINEFCBJdgCDRBQgSXYAg0QUIEl2AINEFCBJdgCDRBQgSXYAg0QUImhjmooWFha7nABgJfp4uQJC3FwCCRBcgSHQBgkQXIEh0AYJEFyBIdAGCRBcgSHQBgob6NuC+e/bZZztd77nnnut0va7n63q9e375t07Xe6Xjbxs/uvBKp+v9ZNfBTtf77zrZ6Xr/tvDnTtfbOfWlTtdrFv7S8Xp/7XS9V/b8qdP1vvb391tdH9npHjt2rDZt2lSbNm2q559/PnFLgF4659F99NFH68orr6zrr79+6ddgMDjXtwXopXP69sK+ffvqzjvvrMXFxbrqqquqqmr9+vU1NTVVBw4cqOnp6XN5e4DeOWc73d27d9fdd99dr7766lJwq6omJyfr5Zdfrg0bNtjxAiPnnER3MBjUfffdV4cPH/5YcE/5aHgfeeSRczECQC91Ht3BYFCbN2+uF1544YzBPWVycrLm5+dr9+7dXY8A0FudRncwGNSWLVvq6aefPmtwT7n88svr+PHjXY4A0GudRXcwGNTWrVvriSee+FTBraq6//7767bbbutqBIDe6+SrFwaDQW3fvr2efPLJWrt27ae6ZvPmzfXBBx/UgQMHuhgBYEVovdMdDAa1bdu2Gh8frwsu+HTLbdmypU6ePCm4wMhpFd3BYFB33XVX7d+/v6anp2vjxo21uLh41mu2bt1aJ06cEFxgJA399sJrr71WGzZsqIMHD9a6detq3bp1VVW1cePGeuyxx+rqq6/+xDXbt2+vo0eP1lNPPTX8xAAr2NDR3bt3bz3wwAN16623Ln1sx44dVXXm8M7MzNT8/HzNzc21GBdgZRs6uhdeeOEZ38M9U3hnZmbqmWee6fynYQGsNENH9957761LL720Vq9e/YmfofDR8E5PT9fs7Gy99NJL7SYFOA8MHd1LLrmk5ufn6+abb66q+qfhPXjwYB05cqTFiADnj6Gi+9G3CR5//PG64447qqpq1apVSx/fv39/vf322/Xggw8uvX7VqlVn/AQbwKgYKro7d+6s9957b+nPq1evrp07d57xtTMzM0u/v+GGG0QXGGlDRdfX2AIMZ6xpmma5hwAYFU4DBggSXYAg0QUIEl2AINEFCBJdgCDRBQgSXYAg0QUIEl2AINEFCBJdgCDRBQgSXYAg0QUIEl2AINEFCBJdgCDRBQgSXYAg0QUIEl2AINEFCPoH2GbPEbgyrRgAAAAASUVORK5CYII="}}]);