(this["webpackJsonpmy-site"]=this["webpackJsonpmy-site"]||[]).push([[1],{110:function(e,t,n){e.exports=n.p+"static/media/avatar.32a0571b.jpg"},127:function(e,t,n){e.exports={posts:"MyPosts_posts__2rvkO",text:"MyPosts_text__igC4c",postItem:"MyPosts_postItem__1iz4d"}},148:function(e,t,n){"use strict";n.d(t,"b",(function(){return a})),n.d(t,"a",(function(){return r}));var a=function(e){if(void 0===e||""===e)return"Field is required"},r=function(e){return function(t){if(t&&t.length>e)return"max length ".concat(e," symbols")}}},158:function(e,t,n){e.exports={post:"Post_post__3LfNc",messagePost:"Post_messagePost__S_8UY",deleteButton:"Post_deleteButton__3CaqO"}},20:function(e,t,n){"use strict";n.d(t,"c",(function(){return o})),n.d(t,"b",(function(){return a})),n.d(t,"a",(function(){return r}));var a,r,c=n(209),o=n.n(c).a.create({withCredentials:!0,baseURL:"https://social-network.samuraijs.com/api/1.0/",headers:{"API-KEY":"b151adfe-6c84-499c-a129-c58da07da97d"}});!function(e){e[e.Success=0]="Success",e[e.Error=1]="Error"}(a||(a={})),function(e){e[e.CaptchaIsRequired=10]="CaptchaIsRequired"}(r||(r={}))},203:function(e,t,n){"use strict";n.d(t,"a",(function(){return o}));var a=n(56),r=n(16),c={messages:[{id:1,mes:"hello!"},{id:2,mes:"how are you doing?"},{id:3,mes:"checking messages"},{id:4,mes:"I see you =)"}],users:[{id:1,user:"Alex"},{id:2,user:"Max"},{id:3,user:"Sergey"},{id:4,user:"Ira"}]},o={addNewMessages:function(e){return{type:"ADD_NEW_MESSAGE",message:e}}};t.b=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:c,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"ADD_NEW_MESSAGE":return Object(r.a)({},e,{messages:[].concat(Object(a.a)(e.messages),[{id:7,mes:t.message}]),users:[].concat(Object(a.a)(e.users),[{id:5,user:"You"}])});default:return e}}},207:function(e,t,n){"use strict";n.d(t,"c",(function(){return h})),n.d(t,"b",(function(){return g})),n.d(t,"d",(function(){return O}));var a=n(11),r=n.n(a),c=n(24),o=n(56),l=n(16),i=n(20),u={getUsers:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:10,n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"",a=arguments.length>3&&void 0!==arguments[3]?arguments[3]:null;return i.c.get("users?page=".concat(e,"&count=").concat(t,"&term=").concat(n)+(null===a?"":"&friend=".concat(a))).then((function(e){return e.data}))},postUsersFollow:function(e){return i.c.post("follow/".concat(e)).then((function(e){return e.data}))},deleteUsersFollow:function(e){return i.c.delete("follow/".concat(e)).then((function(e){return e.data}))}},s={users:[],pageSize:32,totalUserCount:0,currentPage:1,isFetching:!1,followingInProgress:[],filter:{term:"",friend:null}},m=function(e){return{type:"TOGGLE_FOLLOW",userID:e}},f=function(e){return{type:"SET_USERS",users:e}},d=function(e){return{type:"SET_CURRENT_PAGE",currentPage:e}},p=function(e){return{type:"SET_FILTER",payload:e}},E=function(e){return{type:"SET_TOTAL_USERS_COUNT",totalUserCount:e}},v=function(e){return{type:"TOGGLE_IS_FETCHING",isFetching:e}},b=function(e,t){return{type:"TOGGLE_IS_FOLLOWING_PROGRESS",isFetching:e,userID:t}},h=function(e,t,n){return function(){var a=Object(c.a)(r.a.mark((function a(c,o){var l;return r.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return c(v(!0)),c(d(e)),c(p(n)),a.next=5,u.getUsers(e,t,n.term,n.friend);case 5:l=a.sent,c(f(l.items)),c(E(l.totalCount)),c(v(!1));case 9:case"end":return a.stop()}}),a)})));return function(e,t){return a.apply(this,arguments)}}()},g=function(e){return function(){var t=Object(c.a)(r.a.mark((function t(n){return r.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,y(n,e,u.postUsersFollow.bind(e));case 2:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},O=function(e){return function(){var t=Object(c.a)(r.a.mark((function t(n){return r.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,y(n,e,u.deleteUsersFollow.bind(e));case 2:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},y=function(){var e=Object(c.a)(r.a.mark((function e(t,n,a){return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t(b(!0,n)),e.next=3,a(n);case 3:0===e.sent.resultCode&&t(m(n)),t(b(!1,n));case 6:case"end":return e.stop()}}),e)})));return function(t,n,a){return e.apply(this,arguments)}}();t.a=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:s,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"TOGGLE_FOLLOW":return Object(l.a)({},e,{users:e.users.map((function(e){return e.id===t.userID?Object(l.a)({},e,{followed:!e.followed}):e}))});case"SET_USERS":return Object(l.a)({},e,{users:t.users});case"SET_CURRENT_PAGE":return Object(l.a)({},e,{currentPage:t.currentPage});case"SET_TOTAL_USERS_COUNT":return Object(l.a)({},e,{totalUserCount:t.totalUserCount});case"TOGGLE_IS_FETCHING":return Object(l.a)({},e,{isFetching:t.isFetching});case"SET_FILTER":return Object(l.a)({},e,{filter:t.payload});case"TOGGLE_IS_FOLLOWING_PROGRESS":return Object(l.a)({},e,{followingInProgress:t.isFetching?[].concat(Object(o.a)(e.followingInProgress),[t.userID]):e.followingInProgress.filter((function(e){return e!==t.userID}))});default:return e}}},267:function(e,t,n){e.exports=n(413)},272:function(e,t,n){},28:function(e,t,n){"use strict";n.d(t,"b",(function(){return s})),n.d(t,"a",(function(){return m})),n.d(t,"c",(function(){return f}));var a=n(150),r=n(0),c=n.n(r),o=n(91),l=n.n(o),i=n(149),u=function(e){var t=e.meta,n=t.error,a=t.touched,r=e.children,o=n&&a;return c.a.createElement("div",{className:"".concat(l.a.formControl," ").concat(o?l.a.error:"")},c.a.createElement("div",null,r),o?c.a.createElement("span",null,n):"")},s=function(e){var t=e.input,n=(e.meta,e.children,Object(a.a)(e,["input","meta","children"]));return c.a.createElement(u,e,c.a.createElement("textarea",Object.assign({},t,n)))},m=function(e){var t=e.input,n=(e.meta,e.children,Object(a.a)(e,["input","meta","children"]));return c.a.createElement(u,e,c.a.createElement("input",Object.assign({},t,n)))};function f(e,t,n,a){var r=arguments.length>4&&void 0!==arguments[4]?arguments[4]:{},o=arguments.length>5&&void 0!==arguments[5]?arguments[5]:"";return c.a.createElement("div",null,c.a.createElement(i.a,Object.assign({placeholder:e,component:a,validate:n,name:t},r)),o)}},413:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),c=n(15),o=n.n(c),l=(n(272),n(31)),i=n(12),u=n(11),s=n.n(u),m=n(24),f=n(16),d=n(71),p={initialized:!1},E=function(){return{type:"INITIALIZED_SUCCESS"}},v=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:p,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"INITIALIZED_SUCCESS":return Object(f.a)({},e,{initialized:!0});default:return e}},b=n(51),h=n(454),g=n(429),O=n(455),y=n(456),_=n(182),j=n(414),S=n(416),w=Object(j.a)((function(e){return Object(S.a)({root:{flexGrow:1},navbarStyles:{marginBottom:"30px",background:"linear-gradient(90deg, #89f7fe 0%,#3f51b5 100%)"},menuButton:{marginRight:e.spacing(2)},title:{flexGrow:1},navActiveClass:{"& *":{color:"rgb(63,81,181)"}},navbarPaper:{top:0,position:"sticky",height:"100vh"},navMenuButton:{width:"100%",display:"flex",justifyContent:"flex-start",alignItems:"center",marginBottom:"10%"},avatarLogin:{display:"flex",justifyContent:"space-around",alignItems:"center",width:"240px","& p":{color:"white",fontSize:"20px",fontWeight:400}},navbarText:{fontWeight:700,marginLeft:"10%"}})})),x=n(213),C=n.n(x),T=n(464),I=n(214),P=n.n(I),k=function(){var e=w(),t=Object(i.d)((function(e){return e.auth})),n=t.login,a=t.isAuth,c=Object(i.d)((function(e){var t,n;return null===(t=e.profilePages.profile)||void 0===t||null===(n=t.photos)||void 0===n?void 0:n.small})),o=Object(i.c)();return r.a.createElement(h.a,{className:e.navbarStyles,color:"primary",position:"static"},r.a.createElement(O.a,null,r.a.createElement(l.b,{to:"/"},r.a.createElement(g.a,{edge:"start",className:e.menuButton,color:"inherit","aria-label":"menu"},r.a.createElement(C.a,{color:"primary"}))),r.a.createElement(y.a,{variant:"h6",color:"primary",className:e.title},"Social Network"),!1===a?r.a.createElement(l.c,{to:"/login"},r.a.createElement("div",null," ",r.a.createElement(_.a,null,"Login"),"  ")):r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:e.avatarLogin},r.a.createElement(y.a,{variant:"h6"},n),r.a.createElement(T.a,{alt:"Cindy Baker",src:c}),r.a.createElement(g.a,{color:"secondary",onClick:function(){o(Object(d.b)())}},r.a.createElement(P.a,null))))))},N=n(19),R=n(79),U=n(110),A=n.n(U),F=n(56),L=n(67),D=n(20),G=function(e){return D.c.get("profile/".concat(e)).then((function(e){return e.data}))},M=function(e){return D.c.get("profile/status/".concat(e)).then((function(e){return e.data}))},z=function(e){return D.c.put("profile/status",{status:e})},B=function(e){var t=new FormData;return t.append("image",e),D.c.put("profile/photo",t).then((function(e){return e.data}))},W=function(e){return D.c.put("profile/",e).then((function(e){return e.data}))},H={posts:[{id:1,like:15,mes:"hello!"},{id:2,like:10,mes:"how are you doing?"},{id:3,like:5,mes:"checking messages"},{id:4,like:31,mes:"I see you =)"}],profile:null,preloaderUsers:!1,status:null};console.log(H.profile);var J=function(e){return{type:"ADD_POST",newPost:e}},q=function(e){return{type:"IS_PRELOADER_USERS",preloader:e}},V=function(e){return{type:"DELETE_POST",postId:e}},Y=function(e){return{type:"SET_USER_PROFILE",profile:e}},X=function(e){return{type:"SET_STATUS_PROFILE",status:e}},Z=function(e){return{type:"SET_USER_PHOTO",photos:e}},K=function(e){return{type:"SET_EDIT_PROFILE",editProfile:e}},$=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:H,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"ADD_POST":return Object(f.a)({},e,{posts:[].concat(Object(F.a)(e.posts),[{id:e.posts.length-1>=0?e.posts[e.posts.length-1].id+1:1,like:0,mes:t.newPost}])});case"SET_USER_PROFILE":return Object(f.a)({},e,{profile:t.profile,preloaderUsers:!1});case"SET_STATUS_PROFILE":return Object(f.a)({},e,{status:t.status});case"SET_USER_PHOTO":return Object(f.a)({},e,{profile:Object(f.a)({},e.profile,{photos:t.photos})});case"SET_EDIT_PROFILE":return Object(f.a)({},e,{profile:Object(f.a)({},e.profile,{},t.editProfile)});case"IS_PRELOADER_USERS":return Object(f.a)({},e,{preloaderUsers:t.preloader});case"DELETE_POST":return Object(f.a)({},e,{posts:Object(F.a)(e.posts.filter((function(e){return e.id!==t.postId})))});default:return e}},Q=n(457),ee=n(458),te=function(e){var t=Object(a.useState)(!1),n=Object(R.a)(t,2),c=n[0],o=n[1],l=Object(a.useState)(e.status),u=Object(R.a)(l,2),f=u[0],d=u[1],p=Object(i.c)();Object(a.useEffect)((function(){d(e.status)}),[e.status]);return r.a.createElement(r.a.Fragment,null,!c&&r.a.createElement(Q.a,null,r.a.createElement("span",null,"Status:")," ",r.a.createElement("span",{onClick:function(){o(!0)}},f||"Enter your status")),c&&r.a.createElement("form",{noValidate:!0,autoComplete:"off"},r.a.createElement(ee.a,{autoFocus:!0,onBlur:function(t){e.status!==t.currentTarget.value&&""!==t.currentTarget.value&&p(function(e){return function(){var t=Object(m.a)(s.a.mark((function t(n){return s.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,z(e);case 2:0===t.sent.data.resultCode&&n(X(e));case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()}(t.currentTarget.value)),o(!1)},onChange:function(e){d(e.currentTarget.value)},id:"standard-basic",label:"Standard"})))},ne=n(28),ae=n(205),re=n(91),ce=n.n(re),oe=n(232),le=n(125),ie=n.n(le),ue=n(459),se=n(48),me=n.n(se),fe=n(216),de=n.n(fe),pe=n(218),Ee=n.n(pe),ve=n(217),be=n.n(ve),he=n(460),ge=Object(ae.a)({form:"profileEdit"})((function(e){var t=e.infoUser,n=e.handleSubmit,a=e.profile,c=e.error,o=e.edithMode;e.isOwner;return r.a.createElement(oe.a,{variant:"outlined",elevation:3},r.a.createElement("form",null,r.a.createElement(he.a,{container:!0,xs:12,className:t},r.a.createElement(he.a,{item:!0,xs:6},r.a.createElement(ie.a,null,r.a.createElement(y.a,{variant:"h6",color:"primary"},"AboutMe:"),r.a.createElement(y.a,{variant:"body2"},Object(ne.c)("aboutMe","aboutMe",[],ne.b,{},"")),r.a.createElement(y.a,{variant:"h6",color:"primary"},"Full name:"),r.a.createElement(y.a,{variant:"body2"},Object(ne.c)("Full name","fullName",[],ne.a,{},"")),r.a.createElement(y.a,{variant:"h6",color:"primary"},"Contacts:"),Object.keys(a.contacts).map((function(e,t){return r.a.createElement(ue.a,{key:t},r.a.createElement("b",null,e,":")," ",Object(ne.c)("".concat(e),"contacts.".concat(e),[],ne.a,{},""))})),r.a.createElement(y.a,{variant:"h6",color:"primary"},"Looking for a job:"),r.a.createElement(y.a,{variant:"body2"},Object(ne.c)("","lookingForAJob",[],ne.a,{type:"checkbox"},"")),r.a.createElement(y.a,{variant:"h6",color:"primary"},"Explanation:"),r.a.createElement(y.a,{variant:"body2"},Object(ne.c)("My professional skills","lookingForAJobDescription",[],ne.b,{},"")),c&&r.a.createElement("div",{className:ce.a.formSummaryError},c))),r.a.createElement(he.a,{container:!0,item:!0,xs:6},r.a.createElement(he.a,{xs:5}),r.a.createElement(he.a,{xs:7},r.a.createElement(de.a,{disableElevation:!0,variant:"contained",color:"primary"},r.a.createElement(me.a,{color:"primary",onClick:n},r.a.createElement(be.a,null)),r.a.createElement(me.a,{color:"secondary",onClick:o}," ",r.a.createElement(Ee.a,null))))))))})),Oe=n(462),ye=n(219),_e=n.n(ye),je=n(220),Se=n.n(je),we=n(461),xe=function(e){var t=e.infoUser,n=e.profile,a=e.edithMode,c=e.isOwner,o=n.contacts;return r.a.createElement(oe.a,{variant:"outlined",elevation:3},r.a.createElement(he.a,{container:!0,xs:12,className:t},r.a.createElement(he.a,{item:!0,xs:6},r.a.createElement(ie.a,null,r.a.createElement(y.a,{variant:"h6",color:"primary"},"AboutMe:"),r.a.createElement(y.a,{variant:"body2"},n.aboutMe),r.a.createElement(y.a,{variant:"h6",color:"primary"},"Contacts:"),r.a.createElement(ue.a,null,Object.keys(o).map((function(e){return r.a.createElement(we.a,null,r.a.createElement("b",null,e,":"),null!==o[e]&&void 0!==o[e]?o[e]:"....")}))),r.a.createElement(y.a,{variant:"h6",color:"primary"},"Looking for a job:"),r.a.createElement(y.a,{variant:"body2"},(null===n||void 0===n?void 0:n.lookingForAJob)?r.a.createElement("i",null,"Yes"):r.a.createElement("i",null,"No")),r.a.createElement(y.a,{variant:"h6",color:"primary"},"Explanation:"),r.a.createElement(y.a,{variant:"body2"},(null===n||void 0===n?void 0:n.lookingForAJobDescription)?n.lookingForAJobDescription:"..."))),r.a.createElement(he.a,{container:!0,item:!0,xs:6},r.a.createElement(he.a,{xs:5}),r.a.createElement(he.a,{xs:7},r.a.createElement(Oe.a,null,c&&r.a.createElement(_e.a,{variant:"extended",size:"small",onClick:a,color:"default","aria-label":"edit"},r.a.createElement(Se.a,null)))))))},Ce=n(221),Te=n.n(Ce),Ie=Object(j.a)((function(e){return Object(S.a)({root:{"& > *":{margin:e.spacing(1)}},input:{display:"none"},imageUser:{width:"100%",transitionProperty:"1s all initial"},infoUser:{background:"linear-gradient(90deg, #89f7fe 0%,#3f51b5 100%)",borderRadius:20},"@media (max-width: 960px)":{imageUser:{width:300}}})})),Pe=function(e){var t,n,c=Ie(),o=Object(i.d)((function(e){return e.profilePages})),l=o.profile,u=o.status,f=Object(a.useState)(l),d=Object(R.a)(f,2),p=d[0],E=d[1],v=Object(i.c)();Object(a.useEffect)((function(){E(l)}),[l]);var h=Object(a.useState)(!1),O=Object(R.a)(h,2),_=O[0],j=O[1],S=function(){j(!_)};if(!l)return r.a.createElement(b.a,null);return r.a.createElement(r.a.Fragment,null,r.a.createElement(he.a,{container:!0},r.a.createElement(he.a,{item:!0,md:5,sm:12},r.a.createElement("img",{className:c.imageUser,src:null!==(null===p||void 0===p||null===(t=p.photos)||void 0===t?void 0:t.large)?null===p||void 0===p||null===(n=p.photos)||void 0===n?void 0:n.large:A.a}),e.isOwner?r.a.createElement(r.a.Fragment,null," ",r.a.createElement("input",{onChange:function(e){var t,n;(null===(t=e.target.files)||void 0===t?void 0:t.length)&&v((n=e.target.files[0],function(){var e=Object(m.a)(s.a.mark((function e(t){var a;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,B(n);case 2:0===(a=e.sent).resultCode&&t(Z(a.data.photos));case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()))},accept:"image/*",className:c.input,id:"icon-button-file",type:"file"}),r.a.createElement("label",{htmlFor:"icon-button-file"},r.a.createElement(g.a,{color:"primary","aria-label":"upload picture",component:"span"},r.a.createElement(Te.a,null)))," "):""),r.a.createElement(he.a,{container:!0,md:7,sm:12,direction:"column"},r.a.createElement(he.a,{item:!0},r.a.createElement(y.a,{variant:"h4"},l.fullName)),r.a.createElement(he.a,{item:!0},r.a.createElement(te,{status:u})))),_?r.a.createElement(ge,{infoUser:c.infoUser,initialValues:l,profile:l,isOwner:e.isOwner,edithMode:S,onSubmit:function(e){var t;v((t=e,function(){var e=Object(m.a)(s.a.mark((function e(n){var a,r;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,W(t);case 2:if(0!==(a=e.sent).resultCode){e.next=8;break}n(K(t)),e.next=11;break;case 8:return r=a.messages.length>0?a.messages[0]:"Some error",n(Object(L.a)("profileEdit",{_error:"".concat(r)})),e.abrupt("return",Promise.reject(r));case 11:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}())),j(!_)}}):r.a.createElement(xe,{profile:l,infoUser:c.infoUser,isOwner:e.isOwner,edithMode:S}))},ke=n(127),Ne=n.n(ke),Re=n(158),Ue=n.n(Re),Ae=n(159),Fe=n.n(Ae),Le=n(222),De=n.n(Le),Ge=n(223),Me=n.n(Ge),ze=function(e){var t=Object(i.c)();return r.a.createElement("div",{className:Ue.a.post},r.a.createElement("div",null,r.a.createElement("img",{style:{width:"70px"},src:A.a,alt:""})),r.a.createElement("div",{className:Ue.a.messagePost},r.a.createElement("div",null,r.a.createElement("p",null,e.posts)),r.a.createElement("div",null,r.a.createElement(Fe.a,{color:"secondary","aria-label":"delete",onClick:function(){var n;n=e.id,t(V(n))}},r.a.createElement(De.a,{color:"secondary",fontSize:"default"})),r.a.createElement(Fe.a,{color:"primary","aria-label":"delete"},r.a.createElement(Me.a,{color:"primary",fontSize:"default"})))))},Be=n(148),We=Object(Be.a)(500),He=Object(ae.a)({form:"newPost"})((function(e){return r.a.createElement("form",{onSubmit:e.handleSubmit},r.a.createElement("div",{className:Ne.a.text},Object(ne.c)("your news...","postText",[Be.b,We],ne.b)),r.a.createElement("button",null,"Add post"))})),Je=function(){var e=Object(i.d)((function(e){return e.profilePages.posts})),t=Object(i.c)();return r.a.createElement("div",{className:Ne.a.posts},r.a.createElement("i",null,r.a.createElement("h2",null,"My posts:")),r.a.createElement(He,{onSubmit:function(e){t(J(e.postText)),e.postText=""}}),r.a.createElement("div",{className:Ne.a.postItem},e.map((function(e){return r.a.createElement(ze,{key:e.id,posts:e.mes,id:e.id,like:e.like})}))))},qe=function(){var e=Object(i.d)((function(e){return e.auth.userId})),t=Object(i.d)((function(e){return e.profilePages.preloaderUsers})),n=Object(N.g)().userId,c=Object(i.c)(),o=Object(N.f)(),l=!n;Object(a.useEffect)((function(){u()}),[n]);var u=function(){c(q(!0));var t,a=n;a||(a=e)||o.push("/login"),c(function(e){return function(){var t=Object(m.a)(s.a.mark((function t(n){var a;return s.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,G(e);case 2:a=t.sent,n(Y(a));case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()}(a)),c((t=a,function(){var e=Object(m.a)(s.a.mark((function e(n){var a;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,M(t);case 2:a=e.sent,n(X(a));case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()))};return t?r.a.createElement(b.a,null):r.a.createElement(r.a.Fragment,null,r.a.createElement(Pe,{isOwner:l}),r.a.createElement(Je,null))},Ve=r.a.lazy((function(){return n.e(8).then(n.bind(null,526))})),Ye=r.a.lazy((function(){return Promise.all([n.e(0),n.e(6),n.e(7)]).then(n.bind(null,525))})),Xe=r.a.lazy((function(){return Promise.all([n.e(0),n.e(4),n.e(9)]).then(n.bind(null,527))})),Ze=r.a.lazy((function(){return n.e(10).then(n.bind(null,521))})),Ke=r.a.lazy((function(){return n.e(5).then(n.bind(null,522))})),$e=r.a.lazy((function(){return n.e(11).then(n.bind(null,523))})),Qe=function(){var e=Object(i.d)((function(e){return e.auth.isAuth}));return r.a.createElement(r.a.Fragment,null,r.a.createElement(N.b,{exact:!0,path:"/"}," ",e?r.a.createElement(N.a,{to:"/profile"}):r.a.createElement(N.a,{to:"/login"})," "),r.a.createElement(N.b,{exact:!0,path:"/social_Network_React/"}," ",e?r.a.createElement(N.a,{to:"/profile"}):r.a.createElement(N.a,{to:"/login"})," "),r.a.createElement(N.b,{path:"/profile/:userId?"}," ",r.a.createElement(qe,null)," "),r.a.createElement(r.a.Suspense,{fallback:r.a.createElement(b.a,null)},r.a.createElement(N.b,{exact:!0,path:"/messages"}," ",r.a.createElement(Ve,null)," "),r.a.createElement(N.b,{path:"/users"}," ",r.a.createElement(Ye,null)," "),r.a.createElement(N.b,{path:"/login"}," ",r.a.createElement(Xe,null)," "),r.a.createElement(N.b,{path:"/news"},r.a.createElement(Ze,null)),r.a.createElement(N.b,{path:"/music"}," ",r.a.createElement(Ke,null)," "),r.a.createElement(N.b,{path:"/settings"}," ",r.a.createElement($e,null))))},et=n(224),tt=n.n(et),nt=n(225),at=n.n(nt),rt=n(463),ct=n(226),ot=n.n(ct),lt=n(227),it=n.n(lt),ut=n(228),st=n.n(ut),mt=n(229),ft=n.n(mt),dt=function(){var e=Object(i.d)((function(e){return e.appReducer.initialized})),t=Object(i.c)(),n=w();return Object(a.useEffect)((function(){t(function(){var e=Object(m.a)(s.a.mark((function e(t){return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t(Object(d.c)());case 2:return e.next=4,t(E());case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}())}),[t]),e?r.a.createElement(r.a.Fragment,null,r.a.createElement(k,null),r.a.createElement(tt.a,{maxWidth:"lg"},r.a.createElement(he.a,{container:!0},r.a.createElement(he.a,{direction:"column",xs:2,sm:3},r.a.createElement(oe.a,{elevation:1,className:n.navbarPaper},r.a.createElement(l.c,{to:"/profile",activeClassName:n.navActiveClass},r.a.createElement(me.a,{className:n.navMenuButton},r.a.createElement(at.a,{fontSize:"large"}),r.a.createElement(rt.a,{smDown:!0},r.a.createElement(y.a,{className:n.navbarText},"\u041f\u0440\u043e\u0444\u0438\u043b\u044c")))),r.a.createElement(l.c,{to:"/users",activeClassName:n.navActiveClass},r.a.createElement(me.a,{className:n.navMenuButton},r.a.createElement(ot.a,{fontSize:"large"}),r.a.createElement(rt.a,{smDown:!0},r.a.createElement(y.a,{className:n.navbarText},"\u041f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u0435\u043b\u0438")))),r.a.createElement(l.c,{to:"/messages",activeClassName:n.navActiveClass},r.a.createElement(me.a,{className:n.navMenuButton},r.a.createElement(it.a,{fontSize:"large"}),r.a.createElement(rt.a,{smDown:!0},r.a.createElement(y.a,{className:n.navbarText},"\u0421\u043e\u043e\u0431\u0449\u0435\u043d\u0438\u044f")))),r.a.createElement(l.c,{to:"/news",activeClassName:n.navActiveClass},r.a.createElement(me.a,{className:n.navMenuButton},r.a.createElement(st.a,{fontSize:"large"}),r.a.createElement(rt.a,{smDown:!0},r.a.createElement(y.a,{className:n.navbarText},"\u041d\u043e\u0432\u043e\u0441\u0442\u0438")))),r.a.createElement(l.c,{to:"/music",activeClassName:n.navActiveClass},r.a.createElement(me.a,{className:n.navMenuButton},r.a.createElement(ft.a,{fontSize:"large"}),r.a.createElement(rt.a,{smDown:!0},r.a.createElement(y.a,{className:n.navbarText},"\u041c\u0443\u0437\u044b\u043a\u0430")))))),r.a.createElement(he.a,{item:!0,xs:10,sm:9},r.a.createElement(oe.a,{elevation:1},r.a.createElement(Qe,null)))))):r.a.createElement(b.a,null)};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var pt=n(18),Et=n(230),vt=n(206),bt=n(203),ht={friends:[{id:1,user:"Igor"},{id:2,user:"Sveta"},{id:3,user:"Pavel"}]},gt=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:ht;return e},Ot=n(207),yt=Object(pt.c)({profilePages:$,dialogsPage:bt.b,sideBar:gt,usersPage:Ot.a,auth:d.d,appReducer:v,form:vt.a}),_t=window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__||pt.d,jt=Object(pt.e)(yt,_t(Object(pt.d)(Object(pt.a)(Et.a))));o.a.render(r.a.createElement(i.a,{store:jt},r.a.createElement(l.a,null,r.a.createElement(dt,null))),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},51:function(e,t,n){"use strict";var a=n(0),r=n.n(a),c=n(414),o=n(416),l=n(418),i=Object(c.a)((function(e){return Object(o.a)({root:{position:"absolute",width:"100%","& > * + *":{marginTop:e.spacing(2)}}})}));t.a=function(){var e=i();return r.a.createElement("div",{className:e.root},r.a.createElement(l.a,{color:"secondary"}))}},71:function(e,t,n){"use strict";n.d(t,"c",(function(){return v})),n.d(t,"a",(function(){return b})),n.d(t,"b",(function(){return h}));var a=n(11),r=n.n(a),c=n(24),o=n(16),l=n(20),i=function(){return l.c.get("auth/me").then((function(e){return e.data}))},u=function(e,t){var n=arguments.length>2&&void 0!==arguments[2]&&arguments[2],a=arguments.length>3&&void 0!==arguments[3]?arguments[3]:null;return l.c.post("auth/login",{email:e,password:t,rememberMe:n,captcha:a}).then((function(e){return e.data}))},s=function(){return l.c.delete("auth/login")},m=function(){return l.c.get("security/get-captcha-url").then((function(e){return e.data}))},f={userId:null,email:null,login:null,isFetching:!1,isAuth:!1,urlCaptcha:null,error:null},d=function(e,t,n,a){return{type:"SET_USER_DATA",payload:{userId:e,email:t,login:n,isAuth:a}}},p=function(e){return{type:"ADD_ERROR_LOGIN",payload:e}},E=function(e){return{type:"GET_CAPTCHA_URL",urlCaptcha:e}},v=function(){return function(){var e=Object(c.a)(r.a.mark((function e(t){var n,a,c,o,u;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,i();case 2:(n=e.sent).resultCode===l.b.Success&&(a=n.data,c=a.id,o=a.email,u=a.login,t(d(c,o,u,!0)));case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()},b=function(e,t,n,a){return function(){var o=Object(c.a)(r.a.mark((function c(o){var i,s,f;return r.a.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.next=2,u(e,t,n,a);case 2:(i=r.sent).resultCode===l.b.Success?o(v()):i.resultCode===l.b.Error?(s=i.messages.length>0?i.messages[0]:"Some error",o(p(s))):i.resultCode===l.a.CaptchaIsRequired&&(f=i.messages.length>0?i.messages[0]:"Some error",o(p(f)),m().then((function(e){o(E(e.url))})));case 5:case"end":return r.stop()}}),c)})));return function(e){return o.apply(this,arguments)}}()},h=function(){return function(){var e=Object(c.a)(r.a.mark((function e(t){return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,s();case 2:0===e.sent.data.resultCode&&t(d(null,null,null,!1));case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()};t.d=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:f,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"SET_USER_DATA":return Object(o.a)({},e,{},t.payload,{error:""});case"ADD_ERROR_LOGIN":return Object(o.a)({},e,{error:t.payload});case"GET_CAPTCHA_URL":return Object(o.a)({},e,{urlCaptcha:t.urlCaptcha});default:return e}}},91:function(e,t,n){e.exports={formControl:"FormsControlsClass_formControl__1HU4R",error:"FormsControlsClass_error__3orBB",formSummaryError:"FormsControlsClass_formSummaryError__3iNiN",testAccount:"FormsControlsClass_testAccount__kOUeR",testValues:"FormsControlsClass_testValues__2YxEe"}}},[[267,2,3]]]);
//# sourceMappingURL=main.3b08814a.chunk.js.map