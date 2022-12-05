(window.webpackJsonp=window.webpackJsonp||[]).push([[48],{335:function(e,t,r){"use strict";r.r(t),r.d(t,"namespaced",(function(){return L})),r.d(t,"state",(function(){return N})),r.d(t,"getters",(function(){return w})),r.d(t,"mutations",(function(){return k})),r.d(t,"actions",(function(){return G})),r.d(t,"modules",(function(){return x}));r(18),r(16),r(22),r(15),r(23);var n,o,c=r(57),l=r(8),f=r(0),E=(r(37),r(14),r(36),r(89),r(4)),d=r.n(E),O=r(7),T=r(26),S=r(50),_=r(9),R=r(3),j=r(5),h=r(114),P=r(30),A=r(142),F=r(336),y=r(337),v=r(338);function I(object,e){var t=Object.keys(object);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(object);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(object,e).enumerable}))),t.push.apply(t,r)}return t}function D(e){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?I(Object(source),!0).forEach((function(t){Object(f.a)(e,t,source[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(source)):I(Object(source)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(source,t))}))}return e}var m,L=!0;!function(e){e.PAGE_LIST="pageList"}(m||(m={}));var C,N=function(){return Object(f.a)({},m.PAGE_LIST,{1:{pageNumber:1,data:[]}})},w=Object(O.d)(N,(n={},Object(f.a)(n,m.PAGE_LIST,(function(e){return e[m.PAGE_LIST]})),Object(f.a)(n,"page",(function(e){return function(t){return e.pageList[t]}})),n));!function(e){e.REMOVE_PAGE="REMOVE_PAGE",e.RESET="RESET",e.SET_PAGE="SET_PAGE",e.REMOVE_ITEM="REMOVE_ITEM"}(C||(C={}));var k=Object(O.e)(N,(o={},Object(f.a)(o,C.SET_PAGE,(function(e,element){return d.a.set(e[m.PAGE_LIST],String(element.pageNumber),element)})),Object(f.a)(o,C.REMOVE_PAGE,(function(e,t){return delete e.pageList[t]})),Object(f.a)(o,C.RESET,(function(e){e.pageList={1:{pageNumber:1,data:[]}}})),Object(f.a)(o,C.REMOVE_ITEM,(function(e,t){e.pageList[t.page].data=e.pageList[t.page].data.filter((function(e){return e.id!==t.id}))})),o)),G=Object(O.a)({state:N,getters:w,mutations:k},{fetchPlaylists:function(e,t){var r=this;return Object(l.a)(regeneratorRuntime.mark((function n(){var o,c,l,f,E,d,O,T,R,F,y,v,I,m,L,w,k,G,x,V,M,B,Y,J,W,z,K,Q,X,Z,ee,te,re,ne;return regeneratorRuntime.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:if(o=e.commit,c=e.dispatch,l=e.getters,n.prev=1,d=t.currentRoute,O=t.shouldFetchPreferences,T=d.query,R=d.params.id,F=r.app.$accessor.contentPageFilterState.playlistFilterState,console.log("fetchPlaylists -> query: ",T),y=24,v=Object(h.a)(T.page,y),I=v.maxResultCount,m=v.skipCount,L=null===(f=r.app.$auth)||void 0===f?void 0:f.loggedIn,w=0,k={},G=r.app.$accessor.userPreferences,x=r.app.$repositories.userPreferences,V=L,M=[],B=[],!L){n.next=35;break}if(!O){n.next=22;break}return console.log("FETCHING USER PREFERENCES!"),n.next=22,G.fetchAll(P.a.PLAYLISTS);case 22:B=G.playlist,console.log("USER PREFERENCES -> ",B),n.t0=R,n.next=n.t0===j.a.FOLLOWING?27:33;break;case 27:return B=G.getFollowing(P.a.PLAYLISTS),console.log("FOLLOWING PREF RES ->",B),Y=Object(_.n)(B,"followedAt","desc"),k.sorting="whereinids",M=Y.map((function(e){return e.resourceId})),n.abrupt("break",35);case 33:return V=!1,n.abrupt("break",35);case 35:n.t1=R,n.next=n.t1===j.a.OWNED?38:n.t1===j.a.FEATURED?40:43;break;case 38:return k.ownedPlaylists=!0,n.abrupt("break",44);case 40:return k.featuredPlaylists=!0,k.sorting="featured",n.abrupt("break",44);case 43:return n.abrupt("break",44);case 44:if(null===(E=r.app.$accessor.contentPageFilterState.playlistFilterState.filters)||void 0===E?void 0:E.length){n.next=48;break}return n.next=48,c("fetchFilters",{state:N,currentRoute:d});case 48:if(J=r.app.$accessor.contentPageFilterState.playlistFilterState.slugs,W=Object(A.g)(T,D({maxResultCount:I,skipCount:m,whereInIds:M},k),{slugIds:J}),console.log("fetchPlaylists -> listRequest: ",W),z=r.$repositories.playlists,K={items:[],totalCount:0},!V||M.length){n.next=57;break}n.t2=K,n.next=60;break;case 57:return n.next=59,z.getAll(W);case 59:n.t2=n.sent;case 60:if(Q=n.t2,console.log("fetchPlaylist-> response -> playlistListDto: ",Q),Q){n.next=64;break}throw new Error("Invalid playlist response from repository: "+Q);case 64:if(w=Q.totalCount,X=[],!Q.items.length){n.next=77;break}return n.prev=67,n.next=70,x.getStats({ResourceType:P.a.PLAYLISTS,ResourceIds:JSON.stringify(Q.items.map((function(e){return e.id})))});case 70:Z=n.sent,X=Z.data.list,n.next=77;break;case 74:n.prev=74,n.t3=n.catch(67),console.error(n.t3);case 77:console.log("USER PREFERENCES TO MERGE: ",B.length),ee=Object(_.k)(Q.items,B,[],X),Q.items=ee,te=Object(A.b)(Q.items,r.app.$dayjs,L),$(T,F,J),F.SET_NUMBER_OF_RESULTS(w),H(d,te.length,r.app.i18n,r.app.$accessor,r.app.$accessor.contentPageFilterState.playlistFilterState.slugs),re=F.appliedFilters,U(ne=re.pageNumber,y,w,F),o(C.SET_PAGE,{pageNumber:ne,data:S.a.deepFreeze(te)}),console.log("fetchPlaylists -> SET_PAGE: ",l.page(ne)),n.next=95;break;case 91:return n.prev=91,n.t4=n.catch(1),Object(_.i)({error:n.t4,$accessor:r.app.$accessor,i18n:r.app.i18n,config:r.$config}),n.abrupt("return",r.$handleErrorGlobally({message:null===n.t4||void 0===n.t4?void 0:n.t4.message,error:n.t4}));case 95:case"end":return n.stop()}}),n,null,[[1,91],[67,74]])})))()},fetchFilters:function(e,t){var r=this;return Object(l.a)(regeneratorRuntime.mark((function e(){var n,o,c,l,f,E,d;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,r.app.$accessor.SET_CONTENT_FILTERS_ARE_LOADING(!0),n=t.query,o=r.app.$accessor.contentPageFilterState.playlistFilterState,c=r.$repositories.playlists,e.next=7,c.filtersGetAll();case 7:l=e.sent,f=r.app.$accessor.contentPageFilterState.playlistFilterState.slugs,E=D({},Object(T.h)(n,f)),null!=l&&l.length&&(d={filtersDto:l,filtersToApply:E},console.log("playlists -> fetchFilters -> setFilters",d),o.setFilters(d)),e.next=16;break;case 13:e.prev=13,e.t0=e.catch(0),console.error(e.t0);case 16:return e.prev=16,r.app.$accessor.SET_CONTENT_FILTERS_ARE_LOADING(!1),e.finish(16);case 19:case"end":return e.stop()}}),e,null,[[0,13,16,19]])})))()},updateItem:function(e,t){if(t&&t.id){var r=this.app.$accessor.contentPageFilterState.playlistFilterState.appliedFilters.pageNumber,n=e.getters.page(r);if(n&&n.data.length){var o=n.data.findIndex((function(e){return e.id===t.id}));if(o>-1){var l=Object(c.a)(n.data);l[o]=t,e.commit(C.SET_PAGE,{data:S.a.deepFreeze(l),pageNumber:r})}}}}}),x={draft:F,detail:y,owned:v};function H(e,t,r,n,o){var c=Object(_.j)({currentRoute:e,forRoute:R.a.PLAYLISTS,hasResults:Boolean(t),i18n:r,slugIds:o});console.log("fetchPlaylists -> _handleClassesNoResultsMessageConfig -> setNoResultsConfig: ",c),n.contentPageState.setNoResultsConfig(c)}function $(e,t,r){var n=D({},Object(T.h)(e,r));console.log("fetchPlaylists -> filtersToApply: ",n),t.setSelectedFilters(n),console.log("fetchPlaylists -> setAppliedFilters for ",t.filters),t.setAppliedFilters(n)}function U(e,t,r,n){var o={selectedPage:e,pagesTotal:Object(h.b)(r,t)};console.log("fetchPlaylists -> _updatePagination -> updates:",o),n.updatePaginationConfig(o)}},336:function(e,t,r){"use strict";r.r(t),r.d(t,"namespaced",(function(){return T})),r.d(t,"state",(function(){return _})),r.d(t,"getters",(function(){return R})),r.d(t,"mutations",(function(){return j})),r.d(t,"actions",(function(){return h}));r(18),r(16),r(14),r(22),r(15),r(23);var n,o=r(0),c=r(4),l=r.n(c),f=r(7);function E(object,e){var t=Object.keys(object);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(object);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(object,e).enumerable}))),t.push.apply(t,r)}return t}function d(e){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?E(Object(source),!0).forEach((function(t){Object(o.a)(e,t,source[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(source)):E(Object(source)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(source,t))}))}return e}var O,T=!0;!function(e){e.DRAFT="draft"}(O||(O={}));var S,_=function(){return Object(o.a)({},O.DRAFT,{id:"",title:""})},R=Object(f.d)(_,Object(o.a)({},O.DRAFT,(function(e){return e[O.DRAFT]})));!function(e){e.SET_DRAFT="SET_DRAFT",e.RESET_DRAFT="RESET_DRAFT"}(S||(S={}));var j=Object(f.e)(_,(n={},Object(o.a)(n,S.SET_DRAFT,(function(e,element){var t=d(d({},e[O.DRAFT]),element);return l.a.set(e,O.DRAFT,t)})),Object(o.a)(n,S.RESET_DRAFT,(function(e){e[O.DRAFT]={id:"",title:""}})),n)),h=Object(f.a)({state:_,getters:R,mutations:j},{})},337:function(e,t,r){"use strict";r.r(t),r.d(t,"namespaced",(function(){return A})),r.d(t,"state",(function(){return y})),r.d(t,"getters",(function(){return v})),r.d(t,"mutations",(function(){return I})),r.d(t,"actions",(function(){return D}));var n,o,c=r(32),l=r(8),f=r(0),E=(r(37),r(69),r(36),r(40),r(58),r(59),r(18),r(16),r(14),r(22),r(15),r(23),r(4)),d=r.n(E),O=r(7),T=r(9),S=r(30),_=r(128),R=r(142);function j(object,e){var t=Object.keys(object);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(object);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(object,e).enumerable}))),t.push.apply(t,r)}return t}function h(e){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?j(Object(source),!0).forEach((function(t){Object(f.a)(e,t,source[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(source)):j(Object(source)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(source,t))}))}return e}var P,A=!0;!function(e){e.DTO="dto",e.DATE_OF_LAST_FETCH="dateOfLastFetch"}(P||(P={}));var F,y=function(){var e;return e={},Object(f.a)(e,P.DTO,{}),Object(f.a)(e,P.DATE_OF_LAST_FETCH,""),e},v=Object(O.d)(y,(n={},Object(f.a)(n,P.DTO,(function(e){return e[P.DTO]})),Object(f.a)(n,P.DATE_OF_LAST_FETCH,(function(e){return e[P.DATE_OF_LAST_FETCH]})),n));!function(e){e.RESET_DTO="RESET_DTO",e.SET="SET"}(F||(F={}));var I=Object(O.e)(y,(o={},Object(f.a)(o,F.SET,(function(e,t){return d.a.set(e,t.key,t.data)})),Object(f.a)(o,F.RESET_DTO,(function(e){e.dto={}})),o)),D=Object(O.a)({state:y,getters:v,mutations:I},{fetch:function(e,t){var r=this;return Object(l.a)(regeneratorRuntime.mark((function n(){var o,l,f,E,d,O,j,h,A,y,v,I,D,m,L,C,N,w,k,G;return regeneratorRuntime.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:if(o=e.commit,l=e.getters,n.prev=1,E=t.currentRoute,d=E.params.id,O=r.$repositories.playlists,!isNaN(Number(d))){n.next=11;break}return n.next=8,O.getById(d);case 8:n.t0=n.sent,n.next=14;break;case 11:return n.next=13,O.getByLegacyId(d);case 13:n.t0=n.sent;case 14:if(j=n.t0){n.next=17;break}throw new Error("Invalid playlist response from repository: "+j);case 17:if(h=[],A=null===(f=r.app.$auth)||void 0===f?void 0:f.loggedIn,y=r.app.$repositories.userPreferences,v=r.app.$accessor.teachers,!A){n.next=40;break}return I=j.videoClasses.map((function(e){return e.video.videoEntryId})),n.next=25,r.$repositories.classes.getSessions(I);case 25:return(D=n.sent)&&D.sessions&&(j=Object(R.a)(j,D.sessions)),console.log("FETCHING USER PREFERENCES FOR -> ",j.id),n.prev=28,n.next=31,Promise.all([y.get({params:{ResourceType:S.a.PLAYLISTS,ResourceId:j.id,Stats:!0}}),v.fetchTeachers({fetchPreferences:!0})]);case 31:L=n.sent,C=Object(c.a)(L,1),N=C[0],h=(null==N||null===(m=N.data)||void 0===m?void 0:m.list)||[],n.next=40;break;case 37:n.prev=37,n.t1=n.catch(28),console.error(n.t1);case 40:return w=v.list,console.log("USER PREFERENCES TO MERGE: ",h.length),k=Object(T.k)([j],h),j=k[0],G=j.videoClasses.map((function(e){return e.teachers=Object(_.b)(e.teachers,w),e})),j.videoClasses=G,o(F.SET,{key:P.DATE_OF_LAST_FETCH,data:(new Date).toISOString()}),o(F.SET,{key:P.DTO,data:j}),n.abrupt("return",l.dto);case 51:return n.prev=51,n.t2=n.catch(1),"function"==typeof r.$handleErrorGlobally&&r.$handleErrorGlobally({message:null===n.t2||void 0===n.t2?void 0:n.t2.message,error:n.t2}),n.abrupt("return",Promise.reject(n.t2));case 55:case"end":return n.stop()}}),n,null,[[1,51],[28,37]])})))()},updateItem:function(e,t){if(t){var r=h(h({},e.getters[P.DTO]),t);e.commit(F.SET,{key:P.DTO,data:r})}}})},338:function(e,t,r){"use strict";r.r(t),r.d(t,"namespaced",(function(){return E})),r.d(t,"state",(function(){return d})),r.d(t,"getters",(function(){return O})),r.d(t,"mutations",(function(){return T})),r.d(t,"actions",(function(){return S}));var n,o,c=r(8),l=r(0),f=(r(37),r(54),r(89),r(14),r(7)),E=!0,d=function(){return{list:[]}},O=Object(f.d)(d,{list:function(e){return e.list},getById:function(e){return function(t){return e.list.find((function(e){return e.id===t}))}},getIndexById:function(e){return function(t){return e.list.findIndex((function(e){return e.id===t}))}},filterByVideoClassId:function(e){return function(t){return e.list.filter((function(e){return e.videoClassIds.find((function(e){return e===t}))}))}}});!function(e){e.SET="SET",e.RESET="RESET"}(o||(o={}));var T=Object(f.e)(d,(n={},Object(l.a)(n,o.SET,(function(e,t){e.list=t})),Object(l.a)(n,o.RESET,(function(e){e.list=[]})),n)),S=Object(f.a)({state:d,getters:O,mutations:T},{fetch:function(e){var t=this;return Object(c.a)(regeneratorRuntime.mark((function r(){var n,c,l,f;return regeneratorRuntime.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:if(n=e.commit,c=e.getters,!!t.app.$auth.loggedIn){r.next=4;break}return r.abrupt("return");case 4:return l=t.app.$repositories.playlists,r.next=7,l.getAll({skipCount:0,maxResultCount:500,ownedPlaylists:!0});case 7:if(f=r.sent){r.next=11;break}return console.error("Owned playlist fetch returned no results!"),r.abrupt("return");case 11:return n(o.SET,f.items),r.abrupt("return",c.list);case 13:case"end":return r.stop()}}),r)})))()}})},867:function(e,t,r){"use strict";r.r(t),r.d(t,"state",(function(){return D})),r.d(t,"getters",(function(){return m})),r.d(t,"mutations",(function(){return L})),r.d(t,"actions",(function(){return C})),r.d(t,"storeHelper",(function(){return N})),r.d(t,"accessorType",(function(){return w}));var n,o,c=r(0),l=r(7),f=r(326),E=r(327),d=r(328),O=r(329),T=r(330),S=r(331),_=r(332),R=r(333),j=r(335),h=r(339),P=r(341),A=r(342),F=r(344),y=r(345),v=r(346),I=r(347),D=function(){return{contentIsLoading:!0,contentFiltersAreLoading:!0,isClientFetchActive:!1,shouldFetchList:!1,shouldFetchDetail:!1,displayDetailHeader:!1,showRelogPopup:!1,previousPage:"",envConfig:{},ipAddress:""}},m=Object(l.d)(D,{contentIsLoading:function(e){return e.contentIsLoading},contentFiltersAreLoading:function(e){return e.contentFiltersAreLoading},isClientFetchActive:function(e){return e.isClientFetchActive},shouldFetchList:function(e){return e.shouldFetchList},shouldFetchDetail:function(e){return e.shouldFetchDetail},displayDetailHeader:function(e){return e.displayDetailHeader},showRelogPopup:function(e){return e.showRelogPopup},envConfig:function(e){return e.envConfig},previousPage:function(e){return e.previousPage},ipAddress:function(e){return e.ipAddress}});!function(e){e.SET_CONTENT_IS_LOADING="SET_CONTENT_IS_LOADING",e.SET_CONTENT_FILTERS_ARE_LOADING="SET_CONTENT_FILTERS_ARE_LOADING",e.SET_IS_CLIENT_FETCH_ACTIVE="SET_IS_CLIENT_FETCH_ACTIVE",e.SET_SHOULD_FETCH_LIST="SET_SHOULD_FETCH_LIST",e.SET_SHOULD_FETCH_DETAIL="SET_SHOULD_FETCH_DETAIL",e.SET_DISPLAY_DETAIL_HEADER="SET_DISPLAY_DETAIL_HEADER",e.SET_ENV_CONFIG="SET_ENV_CONFIG",e.SET_PREVIOUS_PAGE="SET_PREVIOUS_PAGE",e.SET_RELOG_MODAL="SET_RELOG_MODAL",e.SET_IP_ADDRESS="SET_IP_ADDRESS"}(o||(o={}));var L=Object(l.e)(D,(n={},Object(c.a)(n,o.SET_CONTENT_IS_LOADING,(function(e,t){e.contentIsLoading=t})),Object(c.a)(n,o.SET_CONTENT_FILTERS_ARE_LOADING,(function(e,t){e.contentFiltersAreLoading=t})),Object(c.a)(n,o.SET_SHOULD_FETCH_LIST,(function(e,t){e.shouldFetchList=t})),Object(c.a)(n,o.SET_SHOULD_FETCH_DETAIL,(function(e,t){e.shouldFetchDetail=t})),Object(c.a)(n,o.SET_RELOG_MODAL,(function(e,t){e.showRelogPopup=t})),Object(c.a)(n,o.SET_IS_CLIENT_FETCH_ACTIVE,(function(e,t){e.isClientFetchActive=t})),Object(c.a)(n,o.SET_DISPLAY_DETAIL_HEADER,(function(e,t){e.displayDetailHeader=t})),Object(c.a)(n,o.SET_ENV_CONFIG,(function(e,t){e.envConfig=t})),Object(c.a)(n,o.SET_PREVIOUS_PAGE,(function(e,path){e.previousPage=path})),Object(c.a)(n,o.SET_IP_ADDRESS,(function(e,t){e.ipAddress=t})),n)),C=Object(l.a)({state:D,getters:m,mutations:L},{nuxtServerInit:function(e,t){e.commit(o.SET_ENV_CONFIG,t.env)}}),N={state:D,getters:m,mutations:L,actions:C,modules:{globalNotificationState:f,userPreferences:T,globalSideBarState:E,bodyScroll:d,detailHeader:S,publicHeader:_,contentPageFilterState:I,contentPageState:O,classes:R,playlists:j,programs:h,articles:P,resources:A,teachers:F,workshops:y,userNotifications:v}},w=Object(l.c)(N)}}]);