(this["webpackJsonpmy-site"]=this["webpackJsonpmy-site"]||[]).push([[4],{288:function(e,t,n){"use strict";n.d(t,"h",(function(){return r})),n.d(t,"f",(function(){return u})),n.d(t,"g",(function(){return c})),n.d(t,"b",(function(){return i})),n.d(t,"e",(function(){return o})),n.d(t,"c",(function(){return s})),n.d(t,"d",(function(){return l})),n.d(t,"i",(function(){return f})),n.d(t,"a",(function(){return m}));var a=n(290),r=Object(a.a)((function(e){return e.usersPage.users}),(function(e){return e.filter((function(e){return!0}))})),u=function(e){return e.usersPage.pageSize},c=function(e){return e.usersPage.totalUserCount},i=function(e){return e.usersPage.currentPage},o=function(e){return e.usersPage.isFetching},s=function(e){return e.usersPage.followingInProgress},l=function(e){return e.auth.isAuth},f=function(e){return e.usersPage.filter},m=function(e){return e.auth.urlCaptcha}},289:function(e,t,n){e.exports={pageUsers:"Users_pageUsers__39Agt",usersPage:"Users_usersPage__12vKJ",users:"Users_users__3Cj-e",statusPage:"Users_statusPage__1lxlN",usersBorder:"Users_usersBorder__23uqw"}},295:function(e,t,n){e.exports={paginator:"Paginator_paginator__21QvK",pageNumber:"Paginator_pageNumber__3WhEz",selectedPage:"Paginator_selectedPage__1Y4oU",buttonClick:"Paginator_buttonClick__3Y8NQ",buttonLeft:"Paginator_buttonLeft__hagBj",buttonRight:"Paginator_buttonRight__2duI2"}},308:function(e,t,n){"use strict";n.r(t);var a=n(289),r=n.n(a),u=n(0),c=n.n(u),i=n(37),o=n(288),s=n(13),l=n(9),f=n(38),m=n(295),d=n.n(m),g=function(e){for(var t=e.totalUserCount,n=e.pageSize,a=e.currentPage,r=e.onPageChanged,i=e.portionSize,o=void 0===i?20:i,s=Math.ceil(t/n),l=[],m=1;m<=s;m++)l.push(m);var g=Math.ceil(s/o),b=Object(u.useState)(1),p=Object(f.a)(b,2),E=p[0],_=p[1],P=(E-1)*o+1,h=E*o;return c.a.createElement("div",{className:d.a.paginator},E>1&&c.a.createElement("button",{className:"".concat(d.a.buttonLeft," ").concat(d.a.buttonClick),onClick:function(){_(E-1)}},"PREV"),l.filter((function(e){return e>=P&&e<=h})).map((function(e){return c.a.createElement("span",{className:a===e?d.a.selectedPage:d.a.pageNumber,key:e,onClick:function(t){r(e)}},e)})),g>E&&c.a.createElement("button",{className:"".concat(d.a.buttonRight," ").concat(d.a.buttonClick),onClick:function(){_(E+1)}},"NEXT"))},b=n(63),p=n.n(b),E=n(19),_=function(e){var t=e.user,n=e.followingProgress,a=e.follow,u=e.unFollow,i=e.isAuth;return c.a.createElement("div",{className:r.a.usersBorder},c.a.createElement(E.b,{to:"/profile/".concat(t.id)},c.a.createElement("img",{src:null!=t.photos.small?t.photos.small:p.a,alt:"logo"})),c.a.createElement("div",null,t.name),c.a.createElement("div",{className:r.a.statusPage},t.status),i?c.a.createElement("div",null,t.followed?c.a.createElement("button",{disabled:n.some((function(e){return e===t.id})),onClick:function(){u(t.id)}},"\u041e\u0442\u043f\u0438\u0441\u0430\u0442\u044c\u0441\u044f"):c.a.createElement("button",{disabled:n.some((function(e){return e===t.id})),onClick:function(){a(t.id)}},"\u041f\u043e\u0434\u043f\u0438\u0441\u0430\u0442\u044c\u0441\u044f")):c.a.createElement("button",{disabled:!0},"\u041f\u043e\u0434\u043f\u0438\u0441\u0430\u0442\u044c\u0441\u044f"))},P=n(304),h=function(e){return{}},v=c.a.memo((function(e){var t=Object(s.d)(o.i);return c.a.createElement("div",null,c.a.createElement(P.c,{enableReinitialize:!0,initialValues:{term:t.term,friend:String(t.friend)},validate:h,onSubmit:function(t,n){var a=n.setSubmitting,r={term:t.term,friend:"null"===t.friend?null:"true"===t.friend};e.onFilterChanged(r),a(!1)}},(function(e){var t=e.isSubmitting;return c.a.createElement(P.b,null,c.a.createElement(P.a,{type:"text",name:"term"}),c.a.createElement(P.a,{name:"friend",as:"select"},c.a.createElement("option",{value:"null"},"All"),c.a.createElement("option",{value:"true"},"Only followed"),c.a.createElement("option",{value:"false"},"Only not followed")),c.a.createElement("button",{type:"submit",disabled:t},"Find"))})))})),j=n(129),O=n(10),C=n(301),N=function(e){var t=Object(s.d)(o.g),n=Object(s.d)(o.h),a=Object(s.d)(o.b),i=Object(s.d)(o.f),f=Object(s.d)(o.i),m=Object(s.d)(o.c),d=Object(s.d)(o.d),b=Object(s.c)(),p=Object(O.g)();Object(u.useEffect)((function(){var e=C.parse(p.location.search.substr(1)),t=a,n=f;switch(e.page&&(t=Number(e.page)),e.term&&(n=Object(l.a)({},n,{term:e.term})),e.friend){case"null":n=Object(l.a)({},n,{friend:null});break;case"false":n=Object(l.a)({},n,{friend:!1});break;case"true":n=Object(l.a)({},n,{friend:!0})}b(Object(j.b)(t,i,n))}),[]),Object(u.useEffect)((function(){var e={};f.term&&(e.term=f.term),null!==f.friend&&(e.friend=String(f.friend)),1!==a&&(e.page=String(a)),p.push({pathname:"/users",search:C.stringify(e)})}),[f,a]);var E=function e(t){b(e(t))},P=function e(t){b(e(t))};return c.a.createElement(c.a.Fragment,null,c.a.createElement("div",null,c.a.createElement(v,{onFilterChanged:function(e){b(Object(j.b)(1,i,e))}})),c.a.createElement("div",{className:r.a.usersPages},c.a.createElement(g,{currentPage:a,totalUserCount:t,pageSize:i,onPageChanged:function(e){b(Object(j.b)(e,i,f))}}),c.a.createElement("div",{className:r.a.usersPage},n.map((function(e){return c.a.createElement("div",{className:r.a.users},c.a.createElement(_,{user:e,followingProgress:m,isAuth:d,follow:E,unFollow:P,key:e.id}))})))))};t.default=function(e){var t=Object(s.d)(o.e);return c.a.createElement("div",{className:r.a.pageUsers},t?c.a.createElement(i.a,null):null,c.a.createElement(N,null))}}}]);
//# sourceMappingURL=4.36e40b95.chunk.js.map