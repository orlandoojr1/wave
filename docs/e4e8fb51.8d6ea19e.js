(window.webpackJsonp=window.webpackJsonp||[]).push([[223],{277:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return m})),n.d(t,"metadata",(function(){return u})),n.d(t,"rightToc",(function(){return i})),n.d(t,"default",(function(){return l}));var r=n(2),a=n(6),o=(n(0),n(311)),c=n(313),m={title:"Form / Frame",keywords:["form","frame","html"]},u={unversionedId:"examples/form-frame",id:"examples/form-frame",isDocsHomePage:!1,title:"Form / Frame",description:"Use a frame component in a form card to display HTML content inline.",source:"@site/docs/examples/form-frame.md",slug:"/examples/form-frame",permalink:"/wave/docs/examples/form-frame",editUrl:"https://github.com/h2oai/wave/edit/master/website/docs/examples/form-frame.md",version:"current",sidebar:"someSidebar",previous:{title:"Form / File Upload",permalink:"/wave/docs/examples/file-upload"},next:{title:"Form / Frame / Path",permalink:"/wave/docs/examples/form-frame-path"}},i=[],f={rightToc:i};function l(e){var t=e.components,m=Object(a.a)(e,["components"]);return Object(o.b)("wrapper",Object(r.a)({},f,m,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,"Use a frame component in a form card to display HTML content inline."),Object(o.b)("div",{className:"cover",style:{backgroundImage:"url("+n(474).default+")"}}),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-py"}),"from h2o_wave import site, ui\n\nhtml = '''\n<!DOCTYPE html>\n<html>\n<body>\n  <h1>Hello World!</h1>\n</body>\n</html>\n'''\n\npage = site['/demo']\n\npage['example'] = ui.form_card(\n    box='1 1 2 2',\n    items=[\n        ui.frame(content=html, height='100px')\n    ]\n)\n\npage.save()\n")),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},"Tags"),": \u2002",Object(o.b)("a",{href:Object(c.a)("docs/examples/tags#form")},"form")," \u2002",Object(o.b)("a",{href:Object(c.a)("docs/examples/tags#frame")},"frame")," \u2002",Object(o.b)("a",{href:Object(c.a)("docs/examples/tags#html")},"html")))}l.isMDXComponent=!0},311:function(e,t,n){"use strict";n.d(t,"a",(function(){return l})),n.d(t,"b",(function(){return d}));var r=n(0),a=n.n(r);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function c(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function m(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?c(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):c(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function u(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var i=a.a.createContext({}),f=function(e){var t=a.a.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):m(m({},t),e)),n},l=function(e){var t=f(e.components);return a.a.createElement(i.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},s=a.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,c=e.parentName,i=u(e,["components","mdxType","originalType","parentName"]),l=f(n),s=r,d=l["".concat(c,".").concat(s)]||l[s]||p[s]||o;return n?a.a.createElement(d,m(m({ref:t},i),{},{components:n})):a.a.createElement(d,m({ref:t},i))}));function d(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,c=new Array(o);c[0]=s;var m={};for(var u in t)hasOwnProperty.call(t,u)&&(m[u]=t[u]);m.originalType=e,m.mdxType="string"==typeof e?e:r,c[1]=m;for(var i=2;i<o;i++)c[i]=n[i];return a.a.createElement.apply(null,c)}return a.a.createElement.apply(null,n)}s.displayName="MDXCreateElement"},312:function(e,t,n){"use strict";var r=n(0),a=n(19);t.a=function(){var e=Object(r.useContext)(a.a);if(null===e)throw new Error("Docusaurus context not provided");return e}},313:function(e,t,n){"use strict";n.d(t,"b",(function(){return o})),n.d(t,"a",(function(){return c}));var r=n(312),a=n(314);function o(){var e=Object(r.a)().siteConfig,t=(e=void 0===e?{}:e).baseUrl,n=void 0===t?"/":t,o=e.url;return{withBaseUrl:function(e,t){return function(e,t,n,r){var o=void 0===r?{}:r,c=o.forcePrependBaseUrl,m=void 0!==c&&c,u=o.absolute,i=void 0!==u&&u;if(!n)return n;if(n.startsWith("#"))return n;if(Object(a.b)(n))return n;if(m)return t+n;var f=n.startsWith(t)?n:t+n.replace(/^\//,"");return i?e+f:f}(o,n,e,t)}}}function c(e,t){return void 0===t&&(t={}),(0,o().withBaseUrl)(e,t)}},314:function(e,t,n){"use strict";function r(e){return!0===/^(\w*:|\/\/)/.test(e)}function a(e){return void 0!==e&&!r(e)}n.d(t,"b",(function(){return r})),n.d(t,"a",(function(){return a}))},474:function(e,t,n){"use strict";n.r(t),t.default="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAPMAAABvCAYAAAA5UvYHAAAABHNCSVQICAgIfAhkiAAAABl0RVh0U29mdHdhcmUAZ25vbWUtc2NyZWVuc2hvdO8Dvz4AAAAtdEVYdENyZWF0aW9uIFRpbWUATW9uIDI4IFNlcCAyMDIwIDAxOjE1OjMyIFBNIFBEVK0FpMUAAA3ISURBVHic7dx/TFXlHwfwz5V7+R2/MX6oIOQQWRbZIMQVg2wFmkglEDbZMoiAppXVbDUbtrlkE9parZyBiY5ZcwMU/MEmWCmVZjhnVpgKTUTC+CUIyuf7h+PEc84BLpeLcp/v+7XdyXPO53nOj8v7nnufe9DAzEwAYPNm3OsdAADrQJgBJIEwA0gCYQaQBMIMIAmEGUASCDOAJBBmAEkgzACSQJgBJIEwA0gCYQaQBMIMIAmEGUASCDOAJBBmAEkgzACSQJgBJIEwA0gCYQaQBMIMIAmEGUASCDOAJBBmAEkgzACSQJgBJIEwA0gCYQaQBMIMIAmEGUASCDOAJBBmAEkgzACSQJgBJIEwA0gCYQaQBMIMIAmEGUASCDOAJBBmAEkgzACSQJgBJIEwA0gCYQaQxP9NmGtqashgMGgeTz755IRqwLreffdd3XO+efPmCY1TVFSkO05eXt4U7fn0Y9UwFxYW6p5Q9WP+/PlCP0dHR7P67dq1y+J9W7p0KZ04cYJCQ0MnVTOVqqqqzDoPLS0tFo3f398/6phxcXHWPRgzvf/++1RVVTXpcXJycqiuro6cnZ3Hrd28ebPm+Nva2ia9D/eaVcOcmZlJVVVVVFhYSIGBgZr1eXl5VFZWRt98842w/NixY1RSUkIvvviips/8+fOpqKiIampqaPny5Rbvm52dHUVHR5OPj8+kaqZSfHw8VVdX06pVqzTrQkJCqLS0lH788Ufy9/fX7c/MVFtbS7W1tTQ0NKRZ7+joSKdOnaLy8nJKSkoiIiIfHx/asWMHbd++3boHYyYXFxdKSEiY9DgODg70+OOPk8lkGrc2ICBAaBuNxnv2nFsVT5HY2FgmIuFx7ty5MftUV1dr+qSmplp1v6Kjo4XxExISLKqZSpcuXWKDwSDsg5OTE3d2do7Zb+T5q6ysHLN2+fLlTET8yiuvWHPXLdLX16d53gsKCiway93dXRgnNzdXU6P+PZs1a9ZkD2Fa+L/5zGxL5syZQ0uWLBGW9fX1ad7RqH322We6P6v19fXRkSNHiIgoJSVlEntqm9RXZnXbViHM01RGRoZm2c6dO0etb2lpof379yvtmpoaunjxom7tkSNHqK+vj9zd3Sk+Pn7S+zqdGAyGcWvUH1NG+9hiaxDmaeqFF14ge3t7YVl9fT1dunRJt/6LL76g27dvK+2hoSH6/PPPdWsrKiqIiCgpKUmzDVtnzmdmHx8f4bhxZZ4Gbt++TaWlpZSYmEj+/v5kb29P7u7utGjRIiooKKCurq4p34eamhpKT0+nuXPnkouLCzk7O1NwcDClpqbSgQMHLB7Xy8uLnn76aWEZM+vO6N+6dUt3AmvHjh00MDCgGWN49ni0t9jt7e20adMmiomJIR8fHzKZTOTt7U3R0dH0wQcfUHt7u6bP6tWrdWfJ33zzTaWmtbWV3njjDQoKCiKDwUC3bt0a/0SoMDN9++23lJycTAEBAeTg4ED33XcfhYSE0LPPPkv9/f3jjmEwGMjPz09pyxJmm50Aa29v55iYGKXO29ub16xZwwEBAcqy8PBwbm9vF/pZawKsv7+fV61apdSYTCZOT0/n5ORkYfIqNTWVb968OYEz95/y8nLN+QgLC9PU7d27V1M3/CgrKxNqGxoalAm1np4ezVi1tbXs4eGh9F+wYAFnZWVxcHCwsszDw4Pr6uqEfmfPnuXCwkIODAwUtj88wVZdXc2enp7CusHBQWY2fwKsp6eHExMThbqQkBBeu3Ytr169mqOiojQTh3oTYMzic7x9+3bznpBpzmbDnJSUJNT98MMPzHznl3Hk8pdfflnoZ60w5+fnCzXbtm1T1m3cuFFYt2HDhnHPl54bN26wm5ub5pw0NDQIdQkJCUxE/NBDD2lqlyxZItS+9957TES8YsUKzfb++usvYXuBgYFK4Nva2oSZYg8PD25padGMMbwvw4+0tDTevXs3G41Gzb5NNMwZGRlCTXR0NPf29go15sxmMzOvXLlSqTlw4MAYz4LtuKthjouL46SkpFEfUVFRZoX5+++/F2qCgoKUdQMDAzxjxgxlnZOTk/CEWyPMzc3NbGdnJ9S0tbUp65uamoR1JpOJW1tbLTqPmZmZmnOSl5enrD9//jwbDAY2Go3c1NTE3t7emvrGxkal/sEHH2Qi4tLSUs22srKyhH6vvfaasP6ll14S1ufn52vGUIc5MDCQjUYju7q68vPPP8+FhYW8ePHiCYf51KlTmprvvvtOs31zw5ybm6vUnD59eoxnwHbc1TBb8tAL87p16zQvEiOpn9Djx48r66wR5uLiYmG9p6enZgxXV1eh5tNPP7XoPB4+fFhzTnx8fHhgYICZmdevX89ExM899xwzM7/11lua+pycHGZmvnjxIhMRG41G7ujo0GzLy8tL6FdcXCys37p1q7De19dXM4Y6zG5ublxcXMzd3d1KzdGjRycc5uHjHGvbzOaH+aOPPtJ9IbZld3UC7Ny5c8R3XkB0H9XV1WaNc/LkSaHt6uoqtB0cHIT233//PbkdV/n555+Ftq+vr6Zm5syZQvunn36yaFvx8fGar07a29upurqa+vv7qbS0lIiIXn31VeVf9dczu3btou7ubmUWOy4ujjw9PYWaCxcuUEdHh7BMfVz333+/0L527dqos+vDwsPD6fXXXxeeoyeeeIL2799PdnZ2Y/Yd6cSJE0I7IiLC7L56hs+pyWSS4+4vstHZ7NbWVqGtvqdZfZ9tb2/vlG7fyclJU+Pi4iK0r1y5YtG2ZsyYQWlpaZrlO3fupPLycuro6KB58+Ypt0SGhobSU089JdR2d3dTWVmZEma9WWz1MRFpj0t9TESWH1diYqJZ3wkPu3z5stBWv7BM1PAMtp+f34T2Yzoz3usdsMSNGzeEdlBQ0Jh/KBASEjKl29e7wqi/75zMC0pGRgZt27ZNWFZVVUW///47ERFlZ2cLv5A5OTl08OBBob6oqIguXLhABoOBVqxYodmG+piItMel9x2utV8oR9PT0yO0J/v9+HCYpflaimw0zOq31ZGRkVRSUnLXtq++Qo28WWPY4OCg0Fbv80QsWrSIwsLC6Pz588qymzdv0pkzZ8jR0ZEyMzOF+mXLltHs2bOpublZWTbcNyYmRvcXWO+qqz4u9TERTe64JsLJyYk6OzuVtvr784maN28e7du3b9JX+OnEJt9mqz9D3o2bQ0ZSh0Hvqqa+kkz2CqB3eyfRnTvFvL29hWV2dnaUlZWlWz/ajSJ6+6c+LvUxjdZvKqjnIPQ+FkyEo6MjxcTE0MMPPzypcaYTmwxzVFSU0B5+u3m3PProo0L72rVrQpuZ6erVq2P2mSi9Pw8luvOWWs/atWt13xavXLlStz4oKEgzEaQ+LnWAZs6cSbNnzx51n60pMjJSaJ85c4aY2aKxrl+/TnFxceTn50fu7u5UWFhojV2852wyzOoJoZaWFjp06NBd235KSgoZjf99Qvn333+FSbempibhqmYymSb910mhoaH02GOPCcsWLlxIMTExuvV+fn6a4C5cuHDM/3hB/XfUI9/WExE1NjYKbb2JuamSnJwstDs6Oujo0aMWjfXhhx9SXV0dEd356PD222/T6dOnJ7uL95xNhjkyMpJSU1OFZenp6bRnzx7q6+tTlrW2tlJtba1F9wCPxd/fn3Jzc4Vlu3fvVn5W3ye9bt06q3w2U7/VHu2qPNr68V5Q3nnnHXJzc1PaFRUVygTX1atXhf8RxNPTkzZs2GDWflvDsmXLNFfn9evX0/Xr15V2Y2OjWZ+lz549K7SZWbPMJlnzS+vW1lbet28fb9myRbhHmkbcvFBSUsInT54U+h07doy//PJLTk1N1fQJCwvjwsJCrqys5H/++Ufp09XVpblPl0bcqDB8+6C9vT339vbywMAAHz9+nENDQ4XaiIgIbmho4MHBQbNqhvX19XFKSopSYzQade/NzsjIUG7wmKy2tjbluFxdXbmrq2vcPgsWLFD25ddffx23/vDhw8ItneHh4Zydnc1z5sxRlnl7e3N9fb3Qr7u7m+vr6zkiIkI4d6GhoXzw4EG+fPmy7vY6Ozu5srJS8xympaXxb7/9JtT++eefmufGw8ODY2NjhXvHRz4eeOAB/vjjj4VztWnTJqHG3t6e//jjj3HPzXRn1TCr7xAa7aH+YwEHBwez+n399ddCv6GhIa6srOTU1FQODg5mZ2dnNplM7O/vz0uXLuUtW7Zwc3MzMzN/9dVXY469Z88es2rUKioqOCUlhWfNmsUODg7s5OTEc+fO5fT0dD506JA1Ty8zMz/zzDNMRJydnW1W/SeffKKEylytra28ceNGfuSRR9jd3Z2NRiN7eXnx4sWLuaCgQHhRHaa+b1rvoReYNWvWjNnnypUrQn1PTw9v3bqVY2Nj2cvLS7l119fXl/Pz80d9gf/ll1+UMfr7+zk7O5s9PDw4JCSE9+7da/a5mc4MzBbOIgDAtGKTn5kBQAthBpAEwgwgCYQZQBIIM4AkEGYASSDMAJJAmAEkgTADSAJhBpAEwgwgCYQZQBIIM4AkEGYASSDMAJJAmAEkgTADSAJhBpAEwgwgCYQZQBIIM4AkEGYASSDMAJJAmAEkgTADSAJhBpAEwgwgCYQZQBIIM4AkEGYASSDMAJJAmAEkgTADSAJhBpAEwgwgCYQZQBIIM4AkEGYASSDMAJJAmAEkgTADSAJhBpAEwgwgif8B1l8uv8iTAYwAAAAASUVORK5CYII="}}]);