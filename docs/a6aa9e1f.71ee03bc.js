(window.webpackJsonp=window.webpackJsonp||[]).push([[162,28],{308:function(e,a,t){"use strict";t.r(a);var n=t(0),r=t.n(n),l=t(312),m=t(317),c=t(323),i=t(315);var o=function(e){var a=e.metadata,t=a.previousPage,n=a.nextPage;return r.a.createElement("nav",{className:"pagination-nav","aria-label":"Blog list page navigation"},r.a.createElement("div",{className:"pagination-nav__item"},t&&r.a.createElement(i.a,{className:"pagination-nav__link",to:t},r.a.createElement("h4",{className:"pagination-nav__label"},"\xab Newer Entries"))),r.a.createElement("div",{className:"pagination-nav__item pagination-nav__item--next"},n&&r.a.createElement(i.a,{className:"pagination-nav__link",to:n},r.a.createElement("h4",{className:"pagination-nav__label"},"Older Entries \xbb"))))};a.default=function(e){var a=e.metadata,t=e.items,n=Object(l.a)().siteConfig.title,i="/"===a.permalink?n:"Blog",s=a.blogDescription;return r.a.createElement(m.a,{title:i,description:s},r.a.createElement("div",{className:"container margin-vert--lg"},r.a.createElement("div",{className:"row"},r.a.createElement("main",{className:"col col--8 col--offset-2"},t.map((function(e){var a=e.content;return r.a.createElement(c.a,{key:a.metadata.permalink,frontMatter:a.frontMatter,metadata:a.metadata,truncated:a.metadata.truncated},r.a.createElement(a,null))})),r.a.createElement(o,{metadata:a})))))}},319:function(e,a,t){"use strict";t.d(a,"a",(function(){return i}));var n=t(0),r=t.n(n),l=t(320),m=t(321),c=function(){var e=r.a.useState(!!window.localStorage.getItem("noticeRead")),a=e[0],t=e[1];return r.a.createElement("section",{className:"notice",style:{opacity:a?0:1}},r.a.createElement("div",null,r.a.createElement("p",null,"By using this website you agree to our use of cookies. "),r.a.createElement("a",{href:"https://www.h2o.ai/privacy/",target:"_blank"},"Read H2O.ai\u2019s privacy policy.")),r.a.createElement("span",{className:"notice__close",onClick:function(){window.localStorage.setItem("noticeRead",!0),t(!0)}},"X"))};function i(e){return r.a.createElement(r.a.Fragment,null,r.a.createElement(m.a,null,c),r.a.createElement(l.a,e))}},323:function(e,a,t){"use strict";var n=t(0),r=t.n(n),l=t(316),m=t(311),c=t(318),i=t(315),o=t(326),s=t(313),u=t(46),g=t.n(u),E=["January","February","March","April","May","June","July","August","September","October","November","December"];a.a=function(e){var a,t,n,u,d,v=e.children,p=e.frontMatter,_=e.metadata,h=e.truncated,b=e.isBlogPostPage,N=void 0!==b&&b,f=_.date,w=_.permalink,k=_.tags,y=_.readingTime,M=p.author,R=p.title,I=p.image,O=p.keywords,P=p.author_url||p.authorURL,F=p.author_title||p.authorTitle,J=p.author_image_url||p.authorImageURL,T=Object(s.a)(I,{absolute:!0});return r.a.createElement(r.a.Fragment,null,r.a.createElement(c.a,null,O&&O.length&&r.a.createElement("meta",{name:"keywords",content:O.join(",")}),I&&r.a.createElement("meta",{property:"og:image",content:T}),I&&r.a.createElement("meta",{property:"twitter:image",content:T}),I&&r.a.createElement("meta",{name:"twitter:image:alt",content:"Image for "+R})),r.a.createElement("article",{className:N?void 0:"margin-bottom--xl"},(a=N?"h1":"h2",t=f.substring(0,10).split("-"),n=t[0],u=E[parseInt(t[1],10)-1],d=parseInt(t[2],10),r.a.createElement("header",null,r.a.createElement(a,{className:Object(l.a)("margin-bottom--sm",g.a.blogPostTitle)},N?R:r.a.createElement(i.a,{to:w},R)),r.a.createElement("div",{className:"margin-vert--md"},r.a.createElement("time",{dateTime:f,className:g.a.blogPostDate},u," ",d,", ",n," ",y&&r.a.createElement(r.a.Fragment,null," \xb7 ",Math.ceil(y)," min read"))),r.a.createElement("div",{className:"avatar margin-vert--md"},J&&r.a.createElement("a",{className:"avatar__photo-link avatar__photo",href:P,target:"_blank",rel:"noreferrer noopener"},r.a.createElement("img",{src:J,alt:M})),r.a.createElement("div",{className:"avatar__intro"},M&&r.a.createElement(r.a.Fragment,null,r.a.createElement("h4",{className:"avatar__name"},r.a.createElement("a",{href:P,target:"_blank",rel:"noreferrer noopener"},M)),r.a.createElement("small",{className:"avatar__subtitle"},F)))))),r.a.createElement("section",{className:"markdown"},r.a.createElement(m.a,{components:o.a},v)),(k.length>0||h)&&r.a.createElement("footer",{className:"row margin-vert--lg"},k.length>0&&r.a.createElement("div",{className:"col"},r.a.createElement("strong",null,"Tags:"),k.map((function(e){var a=e.label,t=e.permalink;return r.a.createElement(i.a,{key:t,className:"margin-horiz--sm",to:t},a)}))),h&&r.a.createElement("div",{className:"col text--right"},r.a.createElement(i.a,{to:_.permalink,"aria-label":"Read more about "+R},r.a.createElement("strong",null,"Read More"))))))}}}]);