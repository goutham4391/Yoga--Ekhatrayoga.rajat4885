(window.webpackJsonp=window.webpackJsonp||[]).push([[53],{114:function(e,t,r){"use strict";r.d(t,"a",(function(){return n})),r.d(t,"b",(function(){return o}));r(69);var n=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:16,r={maxResultCount:t,skipCount:0};if("string"==typeof e&&(e=Number(e),isNaN(e)))throw new TypeError("currentPageNumber is not a valid number"+e);var n=e-1;return n&&(r.skipCount=n*t),r},o=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:16,r=1;return e&&(r=Math.ceil(Number(e)/t)),r||1}},117:function(e,t,r){"use strict";r.d(t,"a",(function(){return I})),r.d(t,"e",(function(){return w})),r.d(t,"f",(function(){return R})),r.d(t,"c",(function(){return E})),r.d(t,"b",(function(){return N})),r.d(t,"d",(function(){return x}));r(18),r(22),r(15),r(23);var n=r(0),o=(r(41),r(16),r(65),r(14),r(36),r(49),r(38),r(60),r(100),r(112)),c=r(94),l=r(53),d=r(56),f=r(21),h=r(3),m=r(98),v=r(95),O=r(145),y=r(9),S=r(72);function T(object,e){var t=Object.keys(object);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(object);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(object,e).enumerable}))),t.push.apply(t,r)}return t}function j(e){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?T(Object(source),!0).forEach((function(t){Object(n.a)(e,t,source[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(source)):T(Object(source)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(source,t))}))}return e}var I=function(e){if(e){var t=h.a.CLASSES,r=e.legacyId,n=e.id,o=e.alias;return"".concat(t,"/").concat(r||n,"/").concat(o)}},w=function(e,t){var r=!(arguments.length>2&&void 0!==arguments[2])||arguments[2],n=arguments.length>3?arguments[3]:void 0,h=[];if(!e||!e.length)return h;for(var i=0;i<e.length;i++)try{var T=e[i],j=T.id,video=T.video,title=T.title,w=T.description,R=T.teachers,E=T.tagCategories,N=T.alias,x=T.media,A=Object(v.b)(E,m.a.LEVEL),P=[];if(null!=A&&A.tags&&A.tags.length>0){var D=A.tags;P=[D[D.length-1]]}var L=Object(v.b)(E,m.a.STYLE),_=[];null!=L&&L.tags&&(_=L.tags);var Q={dto:T,id:j,href:I(T),mediaImg:{src:Object(y.g)(x,{imageWidth:(null==n?void 0:n.imageWidth)||S.a.GRID,imageQuality:(null==n?void 0:n.imageQuality)||80}),height:"360",width:"640",alt:"video thumbnail for class: "+N},cardContent:{title:title||"",author:R&&R.length?R[0].fullName:"",description:w,contentTags:_.map((function(e){return e.name||""})).filter(Boolean)},isFavorite:T.favorited,isWatchLater:T.saved,hideFavIcon:!0,hideMoreIcon:!r,moreIconPlacement:[c.a.OVERLAY_TOP_RIGHT,c.a.CONTENT_TITLE],mediaOverlay:{bottomRightTags:Object(v.g)(P),bottomLeftTags:[{title:Object(O.b)(video.durationMs,t),type:o.a.SEMI_TRANSPARENT}]},cardType:l.a.CLASSES,mediaPosition:f.a.TOP,mediaAspectRatio:d.a.SIXTEEN_BY_NINE,progressValue:Object(y.f)(video.progressSeconds,video.durationMs)};null!=n&&n.includeSourceSet&&(Q.sourceSets=[{size:"XS",imageSrc:encodeURI(Object(y.g)(x,{imageWidth:480,imageQuality:90,mediaStyleResolution:"480x320"}))+" 480w",displayAt:"(max-width: 480px)"},{size:"S",imageSrc:encodeURI(Object(y.g)(x,{imageWidth:600,imageQuality:90,mediaStyleResolution:"640x360"}))+" 600w",displayAt:"(min-width: 480px) and (max-width: 767px)"},{size:"M",imageSrc:encodeURI(Object(y.g)(x,{imageWidth:S.a.DETAIL,imageQuality:90,mediaStyleResolution:"1280x720"}))+" 800w",displayAt:"(min-width: 768px) and (max-width: 1023px)"},{size:"L",imageSrc:encodeURI(Object(y.g)(x,{imageWidth:1024,imageQuality:90,mediaStyleResolution:"1280x720"}))+" 1024w",displayAt:"(min-width: 1024px)"}]),h.push(Q)}catch(e){console.error(e)}return h},R=function(e,t){var r=!(arguments.length>2&&void 0!==arguments[2])||arguments[2],n=arguments.length>3?arguments[3]:void 0,h={};if(!e)return h;try{var T=e.id,video=e.video,title=e.title,j=e.description,w=e.teachers,R=e.tagCategories,E=e.alias,N=e.media,x=Object(v.b)(R,m.a.LEVEL),A=[];if(null!=x&&x.tags&&x.tags.length>0){var P=x.tags;A=[P[P.length-1]]}var D=Object(v.b)(R,m.a.STYLE),L=[];null!=D&&D.tags&&(L=D.tags);var _={dto:e,id:T,href:I(e),mediaImg:{src:Object(y.g)(N,{imageWidth:(null==n?void 0:n.imageWidth)||S.a.GRID,imageQuality:(null==n?void 0:n.imageQuality)||80}),height:"360",width:"640",alt:"video thumbnail for class: "+E},cardContent:{title:title||"",author:w&&w.length?w[0].fullName:"",description:j,contentTags:L.map((function(e){return e.name||""})).filter(Boolean)},isFavorite:e.favorited,isWatchLater:e.saved,hideFavIcon:!0,hideMoreIcon:!r,moreIconPlacement:[c.a.OVERLAY_TOP_RIGHT,c.a.CONTENT_TITLE],mediaOverlay:{bottomRightTags:Object(v.g)(A),bottomLeftTags:[{title:Object(O.b)(video.durationMs,t),type:o.a.SEMI_TRANSPARENT}]},cardType:l.a.CLASSES,mediaPosition:f.a.TOP,mediaAspectRatio:d.a.SIXTEEN_BY_NINE,progressValue:Object(y.f)(video.progressSeconds,video.durationMs)};return null!=n&&n.includeSourceSet&&(_.sourceSets=[{size:"XS",imageSrc:encodeURI(Object(y.g)(N,{imageWidth:480,imageQuality:90,mediaStyleResolution:"480x320"}))+" 480w",displayAt:"(max-width: 480px)"},{size:"S",imageSrc:encodeURI(Object(y.g)(N,{imageWidth:600,imageQuality:90,mediaStyleResolution:"640x360"}))+" 600w",displayAt:"(min-width: 480px) and (max-width: 767px)"},{size:"M",imageSrc:encodeURI(Object(y.g)(N,{imageWidth:S.a.DETAIL,imageQuality:90,mediaStyleResolution:"1280x720"}))+" 800w",displayAt:"(min-width: 768px) and (max-width: 1023px)"},{size:"L",imageSrc:encodeURI(Object(y.g)(N,{imageWidth:1024,imageQuality:90,mediaStyleResolution:"1280x720"}))+" 1024w",displayAt:"(min-width: 1024px)"}]),h=_,_}catch(e){console.error(e)}return h},E=function(e,t,r){for(var n=j(j({},t),{},{maxPublishDateFilter:(new Date).toISOString()}),o=r.slugIds,c=[],i=0;i<o.length;i++){var l=o[i],d=e[l];if(d){var f={slug:l,values:d.split(",").filter(Boolean)};c.push(f)}}return e&&e.search&&(n.search=e.search,n.searchInTags=!0,n.searchInTeachers=!0),n.filters=c,console.log("FILTER DTO > ",n),n},N=function(e){var t,r="",n="",o="",c={src:"",alt:"media image",width:"128",height:"128"},l=!1;if(null!=e&&null!==(t=e.teachers)&&void 0!==t&&t.length){var d=e.teachers[0];n=d.fullName||"",c.src=Object(y.g)(d.media,{imageWidth:S.a.BADGE,imageQuality:90}),r=String(d.externalReference||d.id)||"",l=Boolean(d.following),o=d.alias||""}return{teacherId:r,teacherAlias:o,teacherName:n,teacherImg:c,isFollowed:l,actionInProgress:!1}},x=function(e,t,r){var n=r.$accessor,o=r.$auth,c={headerTitle:e.title||"",detailHeaderAddButtonConfig:t,dto:e,hideDetailHeaderAddButton:!(null!=o&&o.loggedIn)};n.detailHeader.setConfig(c)}},26:function(e,t,r){"use strict";r.d(t,"c",(function(){return y})),r.d(t,"a",(function(){return S})),r.d(t,"h",(function(){return w})),r.d(t,"b",(function(){return R})),r.d(t,"g",(function(){return E})),r.d(t,"i",(function(){return N})),r.d(t,"e",(function(){return x})),r.d(t,"f",(function(){return A})),r.d(t,"d",(function(){return P}));r(18),r(22),r(23);var n=r(63),o=r(0),c=(r(36),r(69),r(49),r(40),r(59),r(38),r(100),r(15),r(60),r(14),r(88),r(82),r(43),r(45),r(16),r(65),r(10)),l=r(78),d=r(185),f=r(21),h=r(146),m=r(47);function v(object,e){var t=Object.keys(object);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(object);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(object,e).enumerable}))),t.push.apply(t,r)}return t}function O(e){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?v(Object(source),!0).forEach((function(t){Object(o.a)(e,t,source[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(source)):v(Object(source)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(source,t))}))}return e}d.a.DURATION,d.a.DURATION,h.a.MIN_10,h.a.MIN_20,h.a.MIN_30,h.a.MIN_40,h.a.MIN_50,h.a.MIN_60,h.a.PLUS_60;var y=function(e,t,r){var n=T(e).map((function(e){var r;e.id!==d.a.DURATION?e.noTranslatedTitle=!0:e=O(O({},r=e),{},{title:"filters.".concat(r.title,".title"),multiselect:!0,preSelectedOptions:[],checkboxPosition:f.a.RIGHT,checkboxType:l.a.CHECKBOX_ROUNDED,contentMaxHeight:"60vh",translateDisplayText:!0,extras:{order:2}});var n={route:t};return e.extras=e.extras?O(O({},e.extras),n):n,e.isFilter=!0,e.groupAsFilter=!0,e})),o=n;return r&&(o=S(n,r)),o.sort((function(a,b){var e,t,r=Number(null===(e=a.extras)||void 0===e?void 0:e.order),n=Number(null===(t=b.extras)||void 0===t?void 0:t.order);return isNaN(r)||isNaN(n)?0:r-n}))},S=function(e,t){return Object(c.cloneDeep)(e).map((function(e){if(e.preSelectedOptions=[],t){var r=t[e.id];r&&Array.isArray(r)&&r.length&&(e.preSelectedOptions=r)}return e}))},T=function(e){for(var t=[],i=0;i<e.length;i++){var r=e[i],n=j(r);t.push(n)}return t},j=function(e){return{id:e.slug,title:e.name,optionsData:[{group:{options:I(e.values)}}],preSelectedOptions:[],multiselect:!0}},I=function(e){for(var t=[],i=0;i<e.length;i++){var r=e[i],n={id:r.slug,displayText:r.title};t.push(n)}return t},w=function(e,t){var r={pageNumber:1};if(null!=e&&e.page){var n=Number(e.page)||1;r.pageNumber=n}var o=null==e?void 0:e.search;return o&&(r.searchQuery=String(o)),t.forEach((function(t){var n=e?e[t]:null;if(n){if(!Array.isArray(n)){n=n.split(",")}n=n.filter(Boolean),r[t]=n.reduce((function(e,t){return t?(e.push({id:t,displayText:"/"}),e):e}),[])}})),r},R=function(e,t){var r={page:null!=e&&e.pageNumber?String(e.pageNumber):"1"};return e.searchQuery&&(r.search=e.searchQuery),t.forEach((function(t){if(e[t]){var n=e[t];if(console.log("SELECTED OPTIONS > ",n),!Array.isArray(n))return;var o=null==n?void 0:n.map((function(e){return e.id})).join(",");o&&(r[t]=o,console.log("QUERY VALUE: ",o))}})),r},E=function(e,t){var r=!1;if(!e)return r;for(var n=t,i=0;i<n.length;i++){var o=n[i];if(Object.prototype.hasOwnProperty.call(e,o))if(e[o]){r=!0;break}}return r},N=function(e,t,r,n){if(r){var o=O(O({},e),t);console.log("updated filters ",o);var c=R(o,n);console.log("FILTER OPTIONS TO QUERY > ",c);var l={path:r.currentRoute.path,query:c};console.log("updateRouteFilterQueryAndRedirect -> router push: ",l),r.push(l)}},x=function(e,t){var r,n=arguments.length>2&&void 0!==arguments[2]&&arguments[2];if(t){var o=Object(m.b)(t.currentRoute.path),c=t.currentRoute.query,l={path:n?o:"/search",query:O(O({},c),{},{search:e.query,page:"1"})};null!==(r=e.usedSearchTag)&&void 0!==r&&r.href&&(l.path=e.usedSearchTag.href);var d=Object(m.b)(l.path);o===d&&e.query===c.search||t.push(l)}},A=function(e){if(e){var t=O({},e.currentRoute.query);delete t.search,t.page="1",t.search||e.replace({query:t})}},P=function(e,t){var r={},o=e.contentPageFilterState;for(var c in o)if(Object.prototype.hasOwnProperty.call(o,c)){var element=o[c];element&&"object"===Object(n.a)(element)&&"string"==typeof element.route&&(r[element.route]=element)}return r[t]}},265:function(e,t,r){"use strict";r.d(t,"a",(function(){return c}));var n=r(11),o=r(17),c=(r(40),r(99),function(){function e(){Object(n.a)(this,e)}return Object(o.a)(e,null,[{key:"mockAsync",value:function(data,e,t){return new Promise((function(r,n){t?n(new Error(t)):setTimeout((function(){return r(data)}),e)}))}}]),e}())}}]);