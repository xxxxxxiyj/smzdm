webpackJsonp([1],{522:function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=a(544),o=a.n(n);for(var s in n)"default"!==s&&function(t){a.d(e,t,function(){return n[t]})}(s);var r=a(553),i=a(135),c=i(o.a,r.a,!1,null,null,null);e.default=c.exports},524:function(t,e,a){"use strict";function n(t){return t&&t.__esModule?t:{default:t}}Object.defineProperty(e,"__esModule",{value:!0});var o=a(529),s=n(o),r=a(533),i=n(r),c=a(537),u=n(c);e.default={components:{"header-component":s.default,"footer-component":i.default,"nav-component":u.default}}},525:function(t,e,a){"use strict";function n(t){return function(){var e=t.apply(this,arguments);return new Promise(function(t,a){function n(o,s){try{var r=e[o](s),i=r.value}catch(t){return void a(t)}if(!r.done)return Promise.resolve(i).then(function(t){n("next",t)},function(t){n("throw",t)});t(i)}return n("next")})}}Object.defineProperty(e,"__esModule",{value:!0}),e.default={data:function(){return{showModal:!1,showLogin:!0,signEmail:"",signinPassword:"",signupUsername:"",signupEmail:"",signupPassword:"",signupRepassword:""}},computed:{user:function(){return this.$store.getters.currentUser},cates:function(){return this.$store.getters.cates}},methods:{signin:function(){var t=this;return n(regeneratorRuntime.mark(function e(){var a;return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return a={email:t.signinEmail,password:t.signinPassword},e.next=3,t.$store.dispatch({type:"signin",user:a});case 3:t.showModal=!1;case 4:case"end":return e.stop()}},e,t)}))()},signup:function(){var t=this;return n(regeneratorRuntime.mark(function e(){var a;return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return a={username:t.signupUsername,email:t.signupEmail,password:t.signupPassword,repassword:t.signupRepassword},e.next=3,t.$store.dispatch({type:"signup",user:a});case 3:t.showModal=!1;case 4:case"end":return e.stop()}},e,t)}))()},logout:function(){this.$store.dispath({type:"logout"})}},mounted:function(){this.$store.dispatch({type:"getCates"})}}},526:function(t,e,a){"use strict";function n(t){a(527)}Object.defineProperty(e,"__esModule",{value:!0});var o=a(524),s=a.n(o);for(var r in o)"default"!==r&&function(t){a.d(e,t,function(){return o[t]})}(r);var i=a(541),c=a(135),u=n,l=c(s.a,i.a,!1,u,"data-v-0ca9e273",null);e.default=l.exports},527:function(t,e,a){var n=a(528);"string"==typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);a(520)("3476be2d",n,!0,{})},528:function(t,e,a){e=t.exports=a(202)(!1),e.push([t.i,".layout[data-v-0ca9e273]{background:#f5f5f5}",""])},529:function(t,e,a){"use strict";function n(t){a(530)}Object.defineProperty(e,"__esModule",{value:!0});var o=a(532),s=a(135),r=n,i=s(null,o.a,!1,r,"data-v-fac04444",null);e.default=i.exports},530:function(t,e,a){var n=a(531);"string"==typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);a(520)("2edde819",n,!0,{})},531:function(t,e,a){e=t.exports=a(202)(!1),e.push([t.i,".container[data-v-fac04444]{padding-top:20px;padding-bottom:20px}.logo[data-v-fac04444]{font-size:28px;color:#f04848}.input-group input[data-v-fac04444]{border:2px solid #f04848}.input-group input[data-v-fac04444]:focus,.input-group input[data-v-fac04444]:hover{outline:none;-webkit-box-shadow:none;box-shadow:none}.input-group .btn[data-v-fac04444]{font-size:14px;color:#fff;background:#f04848;border:2px solid #f04848;border-left:1px solid #f04848}.input-group .btn[data-v-fac04444]:focus,.input-group .btn[data-v-fac04444]:hover{outline:none;-webkit-box-shadow:none;box-shadow:none}.hot-search[data-v-fac04444]{margin:4px 0;font-size:12px}",""])},532:function(t,e,a){"use strict";var n=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},o=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"container"},[a("div",{staticClass:"row"},[a("div",{staticClass:"col-sm-3"},[a("div",{staticClass:"logo"},[t._v("什么值得买")])]),t._v(" "),a("div",{staticClass:"col-sm-6 search"},[a("div",{staticClass:"input-group"},[a("input",{staticClass:"form-control",attrs:{type:"text"}}),t._v(" "),a("span",{staticClass:"input-group-btn"},[a("button",{staticClass:"btn btn-default",attrs:{type:"button"}},[a("i",{staticClass:"fa fa-search",attrs:{"aria-hidden":"true"}})])])]),t._v(" "),a("div",{staticClass:"hot-search"},[a("span",[t._v("热闹搜索：")]),t._v(" "),a("span",[t._v("零食")])])])])])}],s={render:n,staticRenderFns:o};e.a=s},533:function(t,e,a){"use strict";function n(t){a(534)}Object.defineProperty(e,"__esModule",{value:!0});var o=a(536),s=a(135),r=n,i=s(null,o.a,!1,r,"data-v-c14adbaa",null);e.default=i.exports},534:function(t,e,a){var n=a(535);"string"==typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);a(520)("2a616cb0",n,!0,{})},535:function(t,e,a){e=t.exports=a(202)(!1),e.push([t.i,"footer[data-v-c14adbaa]{padding:50px 0;font-size:14px;color:#ccc;background:#333}",""])},536:function(t,e,a){"use strict";var n=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},o=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("footer",[a("div",{staticClass:"containe"},[t._v("\n\t\tpage footer\n\t")])])}],s={render:n,staticRenderFns:o};e.a=s},537:function(t,e,a){"use strict";function n(t){a(538)}Object.defineProperty(e,"__esModule",{value:!0});var o=a(525),s=a.n(o);for(var r in o)"default"!==r&&function(t){a.d(e,t,function(){return o[t]})}(r);var i=a(540),c=a(135),u=n,l=c(s.a,i.a,!1,u,"data-v-f9cfa3e2",null);e.default=l.exports},538:function(t,e,a){var n=a(539);"string"==typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);a(520)("e31a8238",n,!0,{})},539:function(t,e,a){e=t.exports=a(202)(!1),e.push([t.i,"nav[data-v-f9cfa3e2]{color:#fff;background:#333}.container[data-v-f9cfa3e2]{font-size:0}.container a[data-v-f9cfa3e2]{display:inline-block;padding:10px 24px;color:#fff;font-size:14px;text-align:center}.container a.active[data-v-f9cfa3e2],.container a[data-v-f9cfa3e2]:focus,.container a[data-v-f9cfa3e2]:hover{background:#464646;text-decoration:none}.vmodal-body[data-v-f9cfa3e2]{text-align:center}.vmodal-body .title[data-v-f9cfa3e2]{display:inline-block;margin:0 10px 20px;color:#666}.vmodal-body .title.active[data-v-f9cfa3e2],.vmodal-body .title[data-v-f9cfa3e2]:focus,.vmodal-body .title[data-v-f9cfa3e2]:hover{color:#333;text-decoration:none}.vmodal-body .title.active[data-v-f9cfa3e2]{color:#333;border-bottom:2px solid #f04848}.vmodal-body .content input[data-v-f9cfa3e2]{width:80%;margin:10px auto}.vmodal-body .content .sign-btn[data-v-f9cfa3e2]{display:block;padding:4px 0;margin:20px auto 0;width:80%;font-size:16px;text-align:center;color:#fff;background:#f04848;cursor:pointer}.vmodal-body .content .sign-btn[data-v-f9cfa3e2]:focus,.vmodal-body .content .sign-btn[data-v-f9cfa3e2]:hover{text-decoration:none}",""])},540:function(t,e,a){"use strict";var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("nav",[a("div",{staticClass:"container"},[a("router-link",{attrs:{to:"/",exact:""}},[t._v("首页")]),t._v(" "),t._l(t.cates.cates,function(e){return t.cates.cates?a("router-link",{attrs:{to:"/category/"+e.url}},[t._v(t._s(e.name))]):t._e()}),t._v(" "),a("div",{staticClass:"pull-right"},[t.user&&t.user.ok?[a("router-link",{attrs:{to:"/user"}},[t._v(t._s(t.user.user.username))]),t._v(" "),t.user&&t.user.user&&t.user.user.isAdmin?a("router-link",{attrs:{to:"/admin/categories"}},[t._v("管理")]):t._e(),t._v(" "),a("a",{attrs:{href:"#"},on:{click:t.logout}},[t._v("退出")])]:[a("a",{attrs:{href:"#"},on:{click:function(e){t.showModal=!0,t.showLogin=!0}}},[t._v("登录")]),t._v(" "),a("a",{attrs:{href:"#"},on:{click:function(e){t.showModal=!0,t.showLogin=!1}}},[t._v("注册")])]],2)],2),t._v(" "),t.showModal?a("modal",{on:{close:function(e){t.showModal=!1}}},[a("div",{staticClass:"vmodal-body",attrs:{slot:"body"},slot:"body"},[a("a",{staticClass:"title",class:t.showLogin?"active":"",attrs:{href:"#"},on:{click:function(e){t.showLogin=!0}}},[t._v("登录")]),t._v(" "),a("a",{staticClass:"title",class:t.showLogin?"":"active",attrs:{href:"#"},on:{click:function(e){t.showLogin=!1}}},[t._v("注册")]),t._v(" "),a("div",{staticClass:"content"},[t.showLogin?a("form",[a("div",{staticClass:"form-group"},[a("input",{directives:[{name:"model",rawName:"v-model",value:t.signinEmail,expression:"signinEmail"}],staticClass:"form-control",attrs:{type:"email",placeholder:"邮箱"},domProps:{value:t.signinEmail},on:{input:function(e){e.target.composing||(t.signinEmail=e.target.value)}}})]),t._v(" "),a("div",{staticClass:"form-group"},[a("input",{directives:[{name:"model",rawName:"v-model",value:t.signinPassword,expression:"signinPassword"}],staticClass:"form-control",attrs:{type:"password",placeholder:"密码"},domProps:{value:t.signinPassword},on:{input:function(e){e.target.composing||(t.signinPassword=e.target.value)}}})]),t._v(" "),a("a",{staticClass:"sign-btn",on:{click:t.signin}},[t._v("登录")])]):a("form",[a("div",{staticClass:"form-group"},[a("input",{directives:[{name:"model",rawName:"v-model",value:t.signupUsername,expression:"signupUsername"}],staticClass:"form-control",attrs:{type:"text",placeholder:"昵称"},domProps:{value:t.signupUsername},on:{input:function(e){e.target.composing||(t.signupUsername=e.target.value)}}})]),t._v(" "),a("div",{staticClass:"form-group"},[a("input",{directives:[{name:"model",rawName:"v-model",value:t.signupEmail,expression:"signupEmail"}],staticClass:"form-control",attrs:{type:"email",placeholder:"邮箱"},domProps:{value:t.signupEmail},on:{input:function(e){e.target.composing||(t.signupEmail=e.target.value)}}})]),t._v(" "),a("div",{staticClass:"form-group"},[a("input",{directives:[{name:"model",rawName:"v-model",value:t.signupPassword,expression:"signupPassword"}],staticClass:"form-control",attrs:{type:"password",placeholder:"密码"},domProps:{value:t.signupPassword},on:{input:function(e){e.target.composing||(t.signupPassword=e.target.value)}}})]),t._v(" "),a("div",{staticClass:"form-group"},[a("input",{directives:[{name:"model",rawName:"v-model",value:t.signupRepassword,expression:"signupRepassword"}],staticClass:"form-control",attrs:{type:"password",placeholder:"确认密码"},domProps:{value:t.signupRepassword},on:{input:function(e){e.target.composing||(t.signupRepassword=e.target.value)}}})]),t._v(" "),a("a",{staticClass:"sign-btn",on:{click:t.signup}},[t._v("注册")])])])])]):t._e()],1)},o=[],s={render:n,staticRenderFns:o};e.a=s},541:function(t,e,a){"use strict";var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"layout"},[a("header-component"),t._v(" "),a("nav-component"),t._v(" "),a("div",{staticClass:"container"},[a("div",{staticClass:"row"},[a("div",{staticClass:"col-sm-9"},[t._t("body")],2),t._v(" "),a("div",{staticClass:"col-sm-3"},[t._t("side")],2)])]),t._v(" "),a("footer-component")],1)},o=[],s={render:n,staticRenderFns:o};e.a=s},544:function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=a(526),o=function(t){return t&&t.__esModule?t:{default:t}}(n);e.default={components:{"layout-component":o.default},head:{title:{inner:"首页"}}}},553:function(t,e,a){"use strict";var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("layout-component",[a("div",{attrs:{slot:"body"},slot:"body"},[t._v("home")])])},o=[],s={render:n,staticRenderFns:o};e.a=s}});
//# sourceMappingURL=1.js.map