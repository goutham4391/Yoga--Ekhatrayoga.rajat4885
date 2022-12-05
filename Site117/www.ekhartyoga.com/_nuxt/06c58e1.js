(window.webpackJsonp=window.webpackJsonp||[]).push([[57],{382:function(t,e,r){"use strict";r(73),r(93),r(58),r(16),r(65),r(97),r(59);var n=r(63),o=r(8),c=r(11),h=r(17),l=(r(37),r(40),r(49),r(38),r(82),r(43),r(45),r(622)),f=r(51);function d(t,e){var r="undefined"!=typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(!r){if(Array.isArray(t)||(r=function(t,e){if(!t)return;if("string"==typeof t)return y(t,e);var r=Object.prototype.toString.call(t).slice(8,-1);"Object"===r&&t.constructor&&(r=t.constructor.name);if("Map"===r||"Set"===r)return Array.from(t);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return y(t,e)}(t))||e&&t&&"number"==typeof t.length){r&&(t=r);var i=0,n=function(){};return{s:n,n:function(){return i>=t.length?{done:!0}:{done:!1,value:t[i++]}},e:function(t){throw t},f:n}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var o,c=!0,h=!1;return{s:function(){r=r.call(t)},n:function(){var t=r.next();return c=t.done,t},e:function(t){h=!0,o=t},f:function(){try{c||null==r.return||r.return()}finally{if(h)throw o}}}}function y(t,e){(null==e||e>t.length)&&(e=t.length);for(var i=0,r=new Array(e);i<e;i++)r[i]=t[i];return r}var v=function(){function t(e,r){Object(c.a)(this,t),this.ctx=e,this.options=r,this.strategies={},this._errorListeners=[],this._redirectListeners=[],r.initialState={user:null,loggedIn:!1};var n=new l.a(e,r);this.$storage=n,this.$state=n.state}var e;return Object(h.a)(t,[{key:"init",value:(e=Object(o.a)(regeneratorRuntime.mark((function t(){var e=this;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(this.options.resetOnError&&this.onError((function(){var t;("function"!=typeof e.options.resetOnError||(t=e.options).resetOnError.apply(t,arguments))&&e.reset()})),this.$storage.syncUniversal("strategy",this.options.defaultStrategy),this.strategy){t.next=6;break}if(this.$storage.setUniversal("strategy",this.options.defaultStrategy),this.strategy){t.next=6;break}return t.abrupt("return",Promise.resolve());case 6:return t.prev=6,t.next=9,this.mounted();case 9:t.next=14;break;case 11:t.prev=11,t.t0=t.catch(6),this.callOnError(t.t0);case 14:return t.prev=14,this.options.watchLoggedIn&&this.$storage.watchState("loggedIn",(function(t){Object(f.j)(e.ctx.route,"auth",!1)||e.redirect(t?"home":"logout")})),t.finish(14);case 17:case"end":return t.stop()}}),t,this,[[6,11,14,17]])}))),function(){return e.apply(this,arguments)})},{key:"state",get:function(){return this._state_warn_shown||(this._state_warn_shown=!0,console.warn("[AUTH] $auth.state is deprecated. Please use $auth.$state or top level props like $auth.loggedIn")),this.$state}},{key:"getState",value:function(t){return this._get_state_warn_shown||(this._get_state_warn_shown=!0,console.warn("[AUTH] $auth.getState is deprecated. Please use $auth.$storage.getState() or top level props like $auth.loggedIn")),this.$storage.getState(t)}},{key:"strategy",get:function(){return this.strategies[this.$state.strategy]}},{key:"registerStrategy",value:function(t,e){this.strategies[t]=e}},{key:"setStrategy",value:function(t){return t===this.$storage.getUniversal("strategy")?Promise.resolve():(this.$storage.setUniversal("strategy",t),this.mounted())}},{key:"mounted",value:function(){var t,e=this;return this.strategy.mounted?Promise.resolve((t=this.strategy).mounted.apply(t,arguments)).catch((function(t){return e.callOnError(t,{method:"mounted"}),Promise.reject(t)})):this.fetchUserOnce()}},{key:"loginWith",value:function(t){for(var e=this,r=arguments.length,n=new Array(r>1?r-1:0),o=1;o<r;o++)n[o-1]=arguments[o];return this.setStrategy(t).then((function(){return e.login.apply(e,n)}))}},{key:"login",value:function(){var t,e=this;return this.strategy.login?this.wrapLogin((t=this.strategy).login.apply(t,arguments)).catch((function(t){return e.callOnError(t,{method:"login"}),Promise.reject(t)})):Promise.resolve()}},{key:"fetchUser",value:function(){var t,e=this;return this.strategy.fetchUser?Promise.resolve((t=this.strategy).fetchUser.apply(t,arguments)).catch((function(t){return e.callOnError(t,{method:"fetchUser"}),Promise.reject(t)})):Promise.resolve()}},{key:"logout",value:function(){var t,e=this;return this.strategy.logout?Promise.resolve((t=this.strategy).logout.apply(t,arguments)).catch((function(t){return e.callOnError(t,{method:"logout"}),Promise.reject(t)})):(this.reset(),Promise.resolve())}},{key:"setUserToken",value:function(t){var e=this;return this.strategy.setUserToken?Promise.resolve(this.strategy.setUserToken(t)).catch((function(t){return e.callOnError(t,{method:"setUserToken"}),Promise.reject(t)})):(this.setToken(this.strategy.name,t),Promise.resolve())}},{key:"reset",value:function(){var t,e=this;return this.strategy.reset?Promise.resolve((t=this.strategy).reset.apply(t,arguments)).catch((function(t){return e.callOnError(t,{method:"reset"}),Promise.reject(t)})):(this.setUser(!1),this.setToken(this.$state.strategy,!1),this.setRefreshToken(this.$state.strategy,!1),Promise.resolve())}},{key:"getToken",value:function(t){var e=this.options.token.prefix+t;return this.$storage.getUniversal(e)}},{key:"setToken",value:function(t,e){var r=this.options.token.prefix+t;return this.$storage.setUniversal(r,e)}},{key:"syncToken",value:function(t){var e=this.options.token.prefix+t;return this.$storage.syncUniversal(e)}},{key:"getRefreshToken",value:function(t){var e=this.options.refresh_token.prefix+t;return this.$storage.getUniversal(e)}},{key:"setRefreshToken",value:function(t,e){var r=this.options.refresh_token.prefix+t;return this.$storage.setUniversal(r,e)}},{key:"syncRefreshToken",value:function(t){var e=this.options.refresh_token.prefix+t;return this.$storage.syncUniversal(e)}},{key:"user",get:function(){return this.$state.user}},{key:"loggedIn",get:function(){return this.$state.loggedIn}},{key:"fetchUserOnce",value:function(){return this.$state.user?Promise.resolve():this.fetchUser.apply(this,arguments)}},{key:"setUser",value:function(t){this.$storage.setState("user",t),this.$storage.setState("loggedIn",Boolean(t))}},{key:"busy",get:function(){return this.$storage.getState("busy")}},{key:"request",value:function(t,e,r){var o=this,c="object"===Object(n.a)(e)?Object.assign({},e,t):t;if(this.ctx.app.$axios)return this.ctx.app.$axios.request(c).then((function(t){var e=c.propertyName?Object(f.d)(t.data,c.propertyName):t.data;return r?{response:t,result:e}:e})).catch((function(t){return o.callOnError(t,{method:"request"}),Promise.reject(t)}));console.error("[AUTH] add the @nuxtjs/axios module to nuxt.config file")}},{key:"requestWith",value:function(t,e,r,n){var o=this.getToken(t),c=Object.assign({},r,e),h=this.strategies[t].options.tokenName||"Authorization";return c.headers||(c.headers={}),!c.headers[h]&&Object(f.g)(o)&&o&&(c.headers[h]=o),this.request(c,!1,n)}},{key:"wrapLogin",value:function(t){var e=this;return this.$storage.setState("busy",!0),this.error=null,Promise.resolve(t).then((function(t){return e.$storage.setState("busy",!1),t})).catch((function(t){return e.$storage.setState("busy",!1),Promise.reject(t)}))}},{key:"onError",value:function(t){this._errorListeners.push(t)}},{key:"callOnError",value:function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};this.error=t;var r,n=d(this._errorListeners);try{for(n.s();!(r=n.n()).done;){var o=r.value;o(t,e)}}catch(t){n.e(t)}finally{n.f()}}},{key:"redirect",value:function(t){var e=arguments.length>1&&void 0!==arguments[1]&&arguments[1];if(this.options.redirect){var r=this.options.fullPathRedirect?this.ctx.route.fullPath:this.ctx.route.path,n=this.options.redirect[t];if(n){if(this.options.rewriteRedirects&&("login"===t&&Object(f.e)(r)&&!Object(f.f)(n,r)&&this.$storage.setUniversal("redirect",r),"home"===t)){var o=this.$storage.getUniversal("redirect");this.$storage.setUniversal("redirect",null),Object(f.e)(o)&&(n=o)}n=this.callOnRedirect(n,r)||n,Object(f.f)(n,r)||(e?window.location.replace(n):this.ctx.redirect(n,this.ctx.query))}}}},{key:"onRedirect",value:function(t){this._redirectListeners.push(t)}},{key:"callOnRedirect",value:function(t,e){var r,n=d(this._redirectListeners);try{for(n.s();!(r=n.n()).done;){t=(0,r.value)(t,e)||t}}catch(t){n.e(t)}finally{n.f()}return t}},{key:"hasScope",value:function(t){var e=this.$state.user&&Object(f.d)(this.$state.user,this.options.scopeKey);return!!e&&(Array.isArray(e)?e.includes(t):Boolean(Object(f.d)(e,t)))}}]),t}();r(157).a.auth=function(t){if(!Object(f.j)(t.route,"auth",!1)){if(Object(f.c)(t.route,[]).length){var e=t.$auth.options.redirect,r=e.login,n=e.callback,o=Object(f.j)(t.route,"auth","guest"),c=function(e){return Object(f.i)(t.route.path)===Object(f.i)(e)};t.$auth.$state.loggedIn?(!r||c(r)||o)&&t.$auth.redirect("home"):o||n&&c(n)||t.$auth.redirect("login")}}};var m=r(623),k=r(624);e.a=function(t,e){var r=new v(t,{resetOnError:!1,scopeKey:"scope",rewriteRedirects:!0,fullPathRedirect:!1,watchLoggedIn:!0,redirect:{login:"/login",logout:"/logout",home:"/home",callback:"/callback"},vuex:{namespace:"auth"},cookie:{prefix:"",options:{path:"/",expires:30,secure:!0}},localStorage:{prefix:""},token:{prefix:"_token."},refresh_token:{prefix:"_refresh_token."},defaultStrategy:"customStrategy"});return r.registerStrategy("local",new m.a(r,{endpoints:{login:!1,logout:!1,user:!1},tokenRequired:!1,tokenType:!1,_name:"local"})),r.registerStrategy("customStrategy",new k.a(r,{redirect_uri:"undefined/callback",client_id:"ey_user_platform",access_token_endpoint:"undefined/connect/token",authorization_endpoint:"undefined/connect/authorize",logout_endpoint:"undefined/connect/endsession",userinfo_endpoint:"undefined/api/services/app/User/GetCurrentLoggedInUser",scope:["openid","profile","email","ey_claims","ekhart_yoga_api.user"],response_type:"code",token_type:"Bearer",token_key:"access_token",grant_type:"authorization_code",state:"",_name:"customStrategy"})),e("auth",r),t.$auth=r,r.init().catch((function(t){console.error("[ERROR] [AUTH]",t)}))}},580:function(t,e,r){"use strict";r(73),r(49),r(93),r(16),r(65),r(97);var n=r(8),o=(r(36),r(40),r(58),r(59),r(37),r(4)),c=r.n(o),h=r(6),l=r(144),f=r(654),d=(r(747),r(749),r(751),r(631)),y=r(632),v=r(633),m=r(634),k=r(635),$=r(636);function O(t,e){var r="undefined"!=typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(!r){if(Array.isArray(t)||(r=function(t,e){if(!t)return;if("string"==typeof t)return w(t,e);var r=Object.prototype.toString.call(t).slice(8,-1);"Object"===r&&t.constructor&&(r=t.constructor.name);if("Map"===r||"Set"===r)return Array.from(t);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return w(t,e)}(t))||e&&t&&"number"==typeof t.length){r&&(t=r);var i=0,n=function(){};return{s:n,n:function(){return i>=t.length?{done:!0}:{done:!1,value:t[i++]}},e:function(t){throw t},f:n}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var o,c=!0,h=!1;return{s:function(){r=r.call(t)},n:function(){var t=r.next();return c=t.done,t},e:function(t){h=!0,o=t},f:function(){try{c||null==r.return||r.return()}finally{if(h)throw o}}}}function w(t,e){(null==e||e>t.length)&&(e=t.length);for(var i=0,r=new Array(e);i<e;i++)r[i]=t[i];return r}var _={_default:Object(h.s)(d.a),"_error-layout":Object(h.s)(y.a),"_onboarding/onboarding-layout":Object(h.s)(v.a),"_public/empty":Object(h.s)(m.a),"_public/public":Object(h.s)(k.a),_splash:Object(h.s)($.a)};e.a={render:function(t,e){var r=t("NuxtLoading",{ref:"loading"}),n=t(this.layout||"nuxt"),o=t("div",{domProps:{id:"__layout"},key:this.layoutName},[n]),c=t("transition",{props:{name:"layout",mode:"out-in"},on:{beforeEnter:function(t){window.$nuxt.$nextTick((function(){window.$nuxt.$emit("triggerScroll")}))}}},[o]);return t("div",{domProps:{id:"__nuxt"}},[r,c])},data:function(){return{isOnline:!0,layout:null,layoutName:"",nbFetching:0}},beforeCreate:function(){c.a.util.defineReactive(this,"nuxt",this.$options.nuxt)},created:function(){this.$root.$options.$nuxt=this,window.$nuxt=this,this.refreshOnlineStatus(),window.addEventListener("online",this.refreshOnlineStatus),window.addEventListener("offline",this.refreshOnlineStatus),this.error=this.nuxt.error,this.context=this.$options.context},mounted:function(){var t=this;return Object(n.a)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:t.$loading=t.$refs.loading;case 1:case"end":return e.stop()}}),e)})))()},watch:{"nuxt.err":"errorChanged"},computed:{isOffline:function(){return!this.isOnline},isFetching:function(){return this.nbFetching>0}},methods:{refreshOnlineStatus:function(){void 0===window.navigator.onLine?this.isOnline=!0:this.isOnline=window.navigator.onLine},refresh:function(){var t=this;return Object(n.a)(regeneratorRuntime.mark((function e(){var r,n;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if((r=Object(h.h)(t.$route)).length){e.next=3;break}return e.abrupt("return");case 3:return t.$loading.start(),n=r.map((function(e){var p=[];if(e.$options.fetch&&e.$options.fetch.length&&p.push(Object(h.q)(e.$options.fetch,t.context)),e.$fetch)p.push(e.$fetch());else{var r,n=O(Object(h.e)(e.$vnode.componentInstance));try{for(n.s();!(r=n.n()).done;){var component=r.value;p.push(component.$fetch())}}catch(t){n.e(t)}finally{n.f()}}return e.$options.asyncData&&p.push(Object(h.q)(e.$options.asyncData,t.context).then((function(t){for(var r in t)c.a.set(e.$data,r,t[r])}))),Promise.all(p)})),e.prev=5,e.next=8,Promise.all(n);case 8:e.next=15;break;case 10:e.prev=10,e.t0=e.catch(5),t.$loading.fail(e.t0),Object(h.k)(e.t0),t.error(e.t0);case 15:t.$loading.finish();case 16:case"end":return e.stop()}}),e,null,[[5,10]])})))()},errorChanged:function(){if(this.nuxt.err){this.$loading&&(this.$loading.fail&&this.$loading.fail(this.nuxt.err),this.$loading.finish&&this.$loading.finish());var t=(l.a.options||l.a).layout;"function"==typeof t&&(t=t(this.context)),this.setLayout(t)}},setLayout:function(t){return t&&_["_"+t]||(t="default"),this.layoutName=t,this.layout=_["_"+t],this.layout},loadLayout:function(t){return t&&_["_"+t]||(t="default"),Promise.resolve(_["_"+t])}},components:{NuxtLoading:f.a}}}}]);