(this["webpackJsonpmy-site"]=this["webpackJsonpmy-site"]||[]).push([[9],{467:function(e,t,n){"use strict";n.d(t,"h",(function(){return a})),n.d(t,"f",(function(){return c})),n.d(t,"g",(function(){return u})),n.d(t,"b",(function(){return i})),n.d(t,"e",(function(){return l})),n.d(t,"c",(function(){return o})),n.d(t,"d",(function(){return m})),n.d(t,"i",(function(){return s})),n.d(t,"a",(function(){return f}));var r=n(473),a=Object(r.a)((function(e){return e.usersPage.users}),(function(e){return e.filter((function(e){return!0}))})),c=function(e){return e.usersPage.pageSize},u=function(e){return e.usersPage.totalUserCount},i=function(e){return e.usersPage.currentPage},l=function(e){return e.usersPage.isFetching},o=function(e){return e.usersPage.followingInProgress},m=function(e){return e.auth.isAuth},s=function(e){return e.usersPage.filter},f=function(e){return e.auth.urlCaptcha}},527:function(e,t,n){"use strict";n.r(t);var r=n(0),a=n.n(r),c=n(12),u=n(71),i=n(19),l=n(467),o=n(460),m=n(470),s=n(456),f=n(418),d=n(182),p=n(507),b=n(489),E=n.n(b),h=n(519),g=n(520),v=function(e){var t=e.onSubmit,n=e.captchaUrl,a=Object(c.d)((function(e){return e.auth.error})),u=function(e){t(e)};return r.createElement(h.a,{component:"main",maxWidth:"xs"},r.createElement(g.a,null),r.createElement(s.a,{color:"primary",component:"h1",variant:"h5"},"\u0412\u043e\u0439\u0442\u0438"),a?r.createElement(s.a,{color:"secondary"},a):"",r.createElement(m.c,{initialValues:{email:"free@samuraijs.com",password:"free",checkbox:!1},validate:function(e){var t={};return e.email?/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(e.email)||(t.email="Invalid email address"):t.email="Required",t},onSubmit:function(e,t){var n=t.setSubmitting;setTimeout((function(){n(!1),u(e)}),500)}},(function(e){var t=e.submitForm,a=e.isSubmitting;return r.createElement(m.b,null,r.createElement(m.a,{component:p.a,name:"email",type:"email",label:"Email",helperText:"Please Enter Email"}),r.createElement("br",null),r.createElement(m.a,{component:p.a,type:"password",label:"Password",name:"password",helperText:"Please Enter Password"}),r.createElement("br",null),r.createElement(s.a,{variant:"body2"},"\u0417\u0430\u043f\u043e\u043c\u043d\u0438\u0442\u044c"),r.createElement(m.a,{component:E.a,name:"rememberMe",type:"checkbox"}),a&&r.createElement(f.a,null),r.createElement("br",null),n&&r.createElement(r.Fragment,null,r.createElement("br",null),r.createElement("img",{src:n,alt:"captcha"}),r.createElement(m.a,{component:p.a,name:"captcha",type:"text",label:"text"})),r.createElement(d.a,{variant:"contained",color:"primary",disabled:a,onClick:t},"\u0412\u043e\u0439\u0442\u0438"))})))};t.default=function(){var e=Object(c.d)(l.d),t=Object(c.d)(l.a),n=Object(c.c)();return e?a.a.createElement(i.a,{to:"/profile"}):a.a.createElement(o.a,{style:{textAlign:"center",height:"100vh"},container:!0,direction:"column",justify:"center",alignItems:"center"},a.a.createElement(o.a,{item:!0,xs:12},a.a.createElement(v,{captchaUrl:t,onSubmit:function(e){n(Object(u.a)(e.email,e.password,e.checkbox,e.captcha))}})))}}}]);
//# sourceMappingURL=9.3695fe94.chunk.js.map