(window.webpackJsonp=window.webpackJsonp||[]).push([[130],{1017:function(t,e,r){var n=r(48);t.exports=function(t){return n(Set.prototype.values,t)}},1040:function(t,e,r){"use strict";r.d(e,"a",(function(){return c}));var n=r(11),o=(r(36),r(657),r(10)),c=function t(){Object(n.a)(this,t)};c.toSkeletonList=function(t){var e=[];t&&t.length&&(e=Object(o.cloneDeep)(t).map((function(t){return t.href="",t.mediaOverlay={hideAll:!0},t.cardContent={title:"/",description:"/"},t.progressValue=0,t.mediaImg.alt="",t.mediaImg.src="",t.skeletonState=!0,t.hideFavIcon=!0,t.hideMoreIcon=!0,Object.freeze(t)})));return Object.freeze(e)}},1050:function(t,e,r){"use strict";r.d(e,"a",(function(){return o})),r.d(e,"b",(function(){return c}));var n=/^(\{){0,1}[0-9a-fA-F]{8}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{12}(\}){0,1}$/i,o=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"";return n.test(t)},c=/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/},1061:function(t,e,r){"use strict";r.d(e,"a",(function(){return l}));var n=r(11),o=r(17),c=(r(40),r(1062),r(58),r(1064),r(1066),r(1067),r(1068),r(1069),r(1070),r(1071),r(1072),r(1073),r(1074),r(1075),r(1076),r(1077),r(1078),r(1079),r(1080),r(59),r(10)),l=function(){function t(e){Object(n.a)(this,t),this.$accessor=e,this.latestTaskId="",this.isLoading=!1,this.runningTasks=new Set}return Object(o.a)(t,[{key:"execute",value:function(e,r){var n=this;if(!t.instance)throw new Error("ContentPageLoader instance is undefined");this.isLoading||this.setLoading(!0,null==r?void 0:r.isClientFetch);var o=Object(c.uniqueId)();return this.latestTaskId=o,this.runningTasks.add(this.latestTaskId),e.finally((function(){n.latestTaskId===o&&n.setLoading(!1,null==r?void 0:r.isClientFetch),n.removeTaskFromList(o)}))}},{key:"removeTaskFromList",value:function(t){this.runningTasks.has(t)&&this.runningTasks.delete(t)}},{key:"setLoading",value:function(t,e){this.isLoading=t,this.$accessor.SET_CONTENT_IS_LOADING(t),e&&this.$accessor.SET_IS_CLIENT_FETCH_ACTIVE(t)}}],[{key:"getInstance",value:function(e){return this.instance||(this.instance=new t(e)),this.instance}}]),t}()},1062:function(t,e,r){r(1063)},1063:function(t,e,r){"use strict";r(658)("Set",(function(t){return function(){return t(this,arguments.length?arguments[0]:void 0)}}),r(659))},1064:function(t,e,r){"use strict";r(25)({target:"Set",proto:!0,real:!0,forced:!0},{addAll:r(1065)})},1065:function(t,e,r){"use strict";var n=r(48),o=r(85),c=r(44);t.exports=function(){for(var t=c(this),e=o(t.add),r=0,l=arguments.length;r<l;r++)n(e,t,arguments[r]);return t}},1066:function(t,e,r){"use strict";r(25)({target:"Set",proto:!0,real:!0,forced:!0},{deleteAll:r(660)})},1067:function(t,e,r){"use strict";var n=r(25),o=r(86),c=r(48),l=r(85),f=r(44),d=r(160),h=r(92);n({target:"Set",proto:!0,real:!0,forced:!0},{difference:function(t){var e=f(this),r=new(d(e,o("Set")))(e),n=l(r.delete);return h(t,(function(t){c(n,r,t)})),r}})},1068:function(t,e,r){"use strict";var n=r(25),o=r(44),c=r(87),l=r(1017),f=r(92);n({target:"Set",proto:!0,real:!0,forced:!0},{every:function(t){var e=o(this),r=l(e),n=c(t,arguments.length>1?arguments[1]:void 0);return!f(r,(function(t,r){if(!n(t,t,e))return r()}),{IS_ITERATOR:!0,INTERRUPTED:!0}).stopped}})},1069:function(t,e,r){"use strict";var n=r(25),o=r(86),c=r(48),l=r(85),f=r(44),d=r(87),h=r(160),v=r(1017),m=r(92);n({target:"Set",proto:!0,real:!0,forced:!0},{filter:function(t){var e=f(this),r=v(e),n=d(t,arguments.length>1?arguments[1]:void 0),S=new(h(e,o("Set"))),O=l(S.add);return m(r,(function(t){n(t,t,e)&&c(O,S,t)}),{IS_ITERATOR:!0}),S}})},1070:function(t,e,r){"use strict";var n=r(25),o=r(44),c=r(87),l=r(1017),f=r(92);n({target:"Set",proto:!0,real:!0,forced:!0},{find:function(t){var e=o(this),r=l(e),n=c(t,arguments.length>1?arguments[1]:void 0);return f(r,(function(t,r){if(n(t,t,e))return r(t)}),{IS_ITERATOR:!0,INTERRUPTED:!0}).result}})},1071:function(t,e,r){"use strict";var n=r(25),o=r(86),c=r(48),l=r(85),f=r(44),d=r(160),h=r(92);n({target:"Set",proto:!0,real:!0,forced:!0},{intersection:function(t){var e=f(this),r=new(d(e,o("Set"))),n=l(e.has),v=l(r.add);return h(t,(function(t){c(n,e,t)&&c(v,r,t)})),r}})},1072:function(t,e,r){"use strict";var n=r(25),o=r(48),c=r(85),l=r(44),f=r(92);n({target:"Set",proto:!0,real:!0,forced:!0},{isDisjointFrom:function(t){var e=l(this),r=c(e.has);return!f(t,(function(t,n){if(!0===o(r,e,t))return n()}),{INTERRUPTED:!0}).stopped}})},1073:function(t,e,r){"use strict";var n=r(25),o=r(86),c=r(48),l=r(85),f=r(52),d=r(44),h=r(279),v=r(92);n({target:"Set",proto:!0,real:!0,forced:!0},{isSubsetOf:function(t){var e=h(this),r=d(t),n=r.has;return f(n)||(r=new(o("Set"))(t),n=l(r.has)),!v(e,(function(t,e){if(!1===c(n,r,t))return e()}),{IS_ITERATOR:!0,INTERRUPTED:!0}).stopped}})},1074:function(t,e,r){"use strict";var n=r(25),o=r(48),c=r(85),l=r(44),f=r(92);n({target:"Set",proto:!0,real:!0,forced:!0},{isSupersetOf:function(t){var e=l(this),r=c(e.has);return!f(t,(function(t,n){if(!1===o(r,e,t))return n()}),{INTERRUPTED:!0}).stopped}})},1075:function(t,e,r){"use strict";var n=r(25),o=r(34),c=r(44),l=r(74),f=r(1017),d=r(92),h=o([].join),v=[].push;n({target:"Set",proto:!0,real:!0,forced:!0},{join:function(t){var e=c(this),r=f(e),n=void 0===t?",":l(t),o=[];return d(r,v,{that:o,IS_ITERATOR:!0}),h(o,n)}})},1076:function(t,e,r){"use strict";var n=r(25),o=r(86),c=r(87),l=r(48),f=r(85),d=r(44),h=r(160),v=r(1017),m=r(92);n({target:"Set",proto:!0,real:!0,forced:!0},{map:function(t){var e=d(this),r=v(e),n=c(t,arguments.length>1?arguments[1]:void 0),S=new(h(e,o("Set"))),O=f(S.add);return m(r,(function(t){l(O,S,n(t,t,e))}),{IS_ITERATOR:!0}),S}})},1077:function(t,e,r){"use strict";var n=r(25),o=r(24),c=r(85),l=r(44),f=r(1017),d=r(92),h=o.TypeError;n({target:"Set",proto:!0,real:!0,forced:!0},{reduce:function(t){var e=l(this),r=f(e),n=arguments.length<2,o=n?void 0:arguments[1];if(c(t),d(r,(function(r){n?(n=!1,o=r):o=t(o,r,r,e)}),{IS_ITERATOR:!0}),n)throw h("Reduce of empty set with no initial value");return o}})},1078:function(t,e,r){"use strict";var n=r(25),o=r(44),c=r(87),l=r(1017),f=r(92);n({target:"Set",proto:!0,real:!0,forced:!0},{some:function(t){var e=o(this),r=l(e),n=c(t,arguments.length>1?arguments[1]:void 0);return f(r,(function(t,r){if(n(t,t,e))return r()}),{IS_ITERATOR:!0,INTERRUPTED:!0}).stopped}})},1079:function(t,e,r){"use strict";var n=r(25),o=r(86),c=r(48),l=r(85),f=r(44),d=r(160),h=r(92);n({target:"Set",proto:!0,real:!0,forced:!0},{symmetricDifference:function(t){var e=f(this),r=new(d(e,o("Set")))(e),n=l(r.delete),v=l(r.add);return h(t,(function(t){c(n,r,t)||c(v,r,t)})),r}})},1080:function(t,e,r){"use strict";var n=r(25),o=r(86),c=r(85),l=r(44),f=r(160),d=r(92);n({target:"Set",proto:!0,real:!0,forced:!0},{union:function(t){var e=l(this),r=new(f(e,o("Set")))(e);return d(t,c(r.add),{that:r}),r}})},1233:function(t,e,r){"use strict";(function(t){var n=r(0),o=r(8),c=(r(37),r(69),r(41),r(18),r(16),r(14),r(22),r(15),r(23),r(1)),l=r(1058),f=r(1171),d=r(1061),h=r(149),v=r(161),m=r(3),S=r(147),O=r(5),P=r(425),I=r(1040),T=r(47),_=r(1050),w=r(162);function R(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(object);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,r)}return e}function y(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?R(Object(source),!0).forEach((function(e){Object(n.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):R(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}e.a=Object(c.defineComponent)({components:{CardList:l.a,ContentPaginationHelper:f.a},middleware:["content-page/checkForListOrDetail","content-page/paginationRedirect","content-page/loggedInReservedCategoryCheck",function(e){var r,n,c,l,f=e.app.$accessor.shouldFetchDetail,h=e.app.$accessor.shouldFetchList,v=null===(r=e.from)||void 0===r?void 0:r.path,S=e.route.path,O=null===(n=e.params)||void 0===n?void 0:n.id,P=null===(c=e.params)||void 0===c?void 0:c.slug,I=(null===(l=t)||void 0===l)&&void 0;if(f)return function(){return w.apply(this,arguments)}();if(h)return function(){if(!I){console.log("PROGRAMS => FETCH LIST IN CLIENT ONLY: ",O);var t=!Object(T.c)(v,S);d.a.getInstance(e.app.$accessor).execute(e.app.$accessor.programs.fetchPrograms({currentRoute:e.route,shouldFetchPreferences:t}).then((function(){e.app.$auth.loggedIn&&e.app.$accessor.programs.fetchProgramProgress()})),{isClientFetch:!0})}}();function w(){return(w=Object(o.a)(regeneratorRuntime.mark((function t(){var r,n,o,c,data;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(console.log("PROGRAMS DETAIL PAGE => FETCH DETAIL => ID: ",O," SLUG: ",P),n=O,r=P){t.next=19;break}return t.prev=4,o=e.app.$repositories.programs,c=isNaN(Number(O)),t.next=9,d.a.getInstance(e.app.$accessor).execute(c?Object(_.a)(O)?o.getById(O):o.getByAlias(O):o.getByLegacyId(O));case 9:if(null!=(data=t.sent)&&data.alias){t.next=12;break}throw new Error("Programs must contain alias");case 12:r=data.alias,n=String(data.legacyId)||data.id,t.next=19;break;case 16:return t.prev=16,t.t0=t.catch(4),t.abrupt("return",e.error({message:t.t0.message,statusCode:t.t0.statusCode||404}));case 19:return t.abrupt("return",e.redirect("".concat(m.a.PROGRAMS,"/").concat(n,"/").concat(r)));case 20:case"end":return t.stop()}}),t,null,[[4,16]])})))).apply(this,arguments)}}],props:{},setup:function(t,e){var r=Object(h.a)(e).activeContentPageTab,n=Object(c.computed)((function(){return e.root.$route.params.id})),o=Object(v.a)(e),l=o.contentIsLoading,f=o.shouldFetchDetail,d=o.shouldFetchList,m=o.isClientFetchActive,S=L(e),P=S.fetchPrograms,I=S.fetchFilters,T=S.currentPage,_=S.programsList,w=S.paginationConfig,R=S.onSelectedPageChange,y=S.programsSkeletonList,E=S.onBrowseAllPrograms;return Object(c.onMounted)((function(){console.log("programs -> onMounted -> fetchFilters"),I(),m.value||(console.log("programs -> onMounted -> fetchPrograms"),P({fetchPreferences:!0}))})),Object(c.watch)(l,(function(t,r){var n={skeletonState:t};e.root.$accessor.contentPageFilterState.programFilterState.updatePaginationConfig(n)})),{activeContentPageTab:r,contentIsLoading:l,shouldFetchDetail:f,shouldFetchList:d,isClientFetchActive:m,id:n,fetchPrograms:P,currentPage:T,programsList:_,programsSkeletonList:y,paginationConfig:w,onSelectedPageChange:R,contentPageTabsEnum:O.a,onBrowseAllPrograms:E}},head:function(){var t,e=Object(w.a)(this),r=(null===(t=this.$config)||void 0===t?void 0:t.baseUrl)||"https://www.ekhartyoga.com",path=this.$route.path,title="Yoga programs and challenges on EkhartYoga",n="Follow one of our yoga programs and challenges to help you stay motivated in your home yoga practice.";return y(y({},e),{},{title:title,titleTemplate:"%s | Ekhart Yoga",meta:[{hid:"og:title",property:"og:title",content:title+" | Ekhart Yoga"},{hid:"og:description",property:"og:description",content:n},{hid:"description",name:"description",content:n},{hid:"og:url",property:"og:url",content:r+path}]})}});var L=function(t){var e=Object(c.computed)((function(){return t.root.$accessor.contentPageFilterState.programFilterState.appliedFilters.pageNumber})),r=Object(c.computed)((function(){return t.root.$accessor.contentPageFilterState.programFilterState.paginationConfig})),n=Object(c.computed)((function(){return t.root.$accessor.programs.page(e.value)})),o=Object(c.computed)((function(){var t,e=(null===(t=n.value)||void 0===t?void 0:t.data)||[];return console.log("usePrograms -> programsList -> ",e),e})),l=I.a.toSkeletonList(Object(S.f)());return{fetchPrograms:function(e){var r=t.root.$router.currentRoute;d.a.getInstance(t.root.$accessor).execute(t.root.$accessor.programs.fetchPrograms({currentRoute:r,shouldFetchPreferences:null==e?void 0:e.fetchPreferences}).then((function(){t.root.$auth.loggedIn&&t.root.$accessor.programs.fetchProgramProgress()})))},fetchFilters:function(){var e=t.root.$router.currentRoute;return t.root.$accessor.programs.fetchFilters(e)},currentPage:n,programsList:o,paginationConfig:r,onSelectedPageChange:function(r){if(console.log("onSelectedPageChange => ",r),r!==e.value){var n={pageNumber:r};t.root.$accessor.contentPageFilterState.programFilterState.updateRouteFilterQuery(n)}},programsSkeletonList:l,onBrowseAllPrograms:function(e){t.root.$router.push(P.a.contentPageRoute)}}}}).call(this,r(77))},1334:function(t,e,r){var content=r(1548);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(20).default)("321e2b14",content,!0,{sourceMap:!1})},1547:function(t,e,r){"use strict";r(1334)},1548:function(t,e,r){var n=r(19)((function(i){return i[1]}));n.push([t.i,"/*purgecss start ignore*/\n.programs-id-index[data-v-b3e143f8]{\n  display:flex;\n  flex-direction:column;\n  flex-grow:1\n}\n.programs-id-index__content[data-v-b3e143f8], .programs-id-index__no-results-message[data-v-b3e143f8]{\n  flex-grow:1\n}\n.programs-id-index__content[data-v-b3e143f8], .programs-id-index__no-results-message[data-v-b3e143f8]{\n  display:flex\n}\n.programs-id-index__content[data-v-b3e143f8], .programs-id-index__no-results-message[data-v-b3e143f8]{\n  flex-direction:column\n}\n.programs-id-index__no-results-message[data-v-b3e143f8]{\n  justify-content:center\n}\n\n/*purgecss end ignore*/",""]),t.exports=n},2050:function(t,e,r){"use strict";r.r(e);var n=r(1233).a,o=(r(1547),r(2)),component=Object(o.a)(n,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"programs-id-index"},[r("div",{staticClass:"programs-id-index__content"},[r("card-list",{directives:[{name:"show",rawName:"v-show",value:t.programsList&&t.programsList.length,expression:"programsList && programsList.length"}],staticClass:"programs-id-index__content__main-list",attrs:{list:t.programsList}}),t._v(" "),r("card-list",{directives:[{name:"show",rawName:"v-show",value:t.contentIsLoading&&!t.programsList.length,expression:"contentIsLoading && !programsList.length"}],staticClass:"programs-id-index__content__skeleton",attrs:{list:t.programsSkeletonList}})],1),t._v(" "),r("content-pagination-helper",{staticClass:"programs-id-index__pagination",attrs:{"pagination-config":t.paginationConfig},on:{selectedPageChange:t.onSelectedPageChange}})],1)}),[],!1,null,"b3e143f8",null);e.default=component.exports}}]);