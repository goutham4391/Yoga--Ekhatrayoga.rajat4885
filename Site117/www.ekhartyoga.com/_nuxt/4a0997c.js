(window.webpackJsonp=window.webpackJsonp||[]).push([[55],{187:function(e,t,n){"use strict";n.d(t,"a",(function(){return o}));var r=n(3),o=[{id:"1",title:"All content",href:""},{id:"2",title:"Classes",href:r.a.CLASSES},{id:"3",title:"Programs",href:r.a.PROGRAMS},{id:"4",title:"Playlists",href:r.a.PLAYLISTS},{id:"5",title:"Articles",href:r.a.ARTICLES},{id:"6",title:"Resources",href:r.a.RESOURCES},{id:"7",title:"Teachers",href:r.a.TEACHERS},{id:"8",title:"Workshops",href:r.a.WORKSHOPS}]},452:function(e,t,n){var content=n(758);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,n(20).default)("4461c088",content,!0,{sourceMap:!1})},453:function(e,t,n){var content=n(760);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,n(20).default)("e86bcf9e",content,!0,{sourceMap:!1})},462:function(e,t,n){var content=n(778);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,n(20).default)("95a180fa",content,!0,{sourceMap:!1})},499:function(e,t,n){var content=n(850);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,n(20).default)("bbfe690a",content,!0,{sourceMap:!1})},627:function(e,t,n){"use strict";n(18),n(16),n(14),n(22),n(15),n(23);var r=n(0),o=n(1),c=n(71),l=n(68),d=n(187),h=n(255),f=n(31),v=Object(o.defineComponent)({components:{AppButton:f.a},props:{activeTag:{type:Object,default:function(){return{}}},tags:{type:Array,default:function(){return[]}}},setup:function(e,t){return{emitSearchTag:function(e){t.emit("emitSearchTag",e)}}}}),m=(n(757),n(2)),_=Object(m.a)(v,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"search-tag-list",attrs:{tabindex:"-1"}},[e._m(0),e._v(" "),n("div",{staticClass:"search-tag-list__tags"},e._l(e.tags,(function(t,r){return n("app-button",{key:r,staticClass:"tag",class:{"tag--is-active":e.activeTag.id===t.id||t.isActive},on:{click:function(n){return e.emitSearchTag(t)}}},[e._v("\n      "+e._s(t.title)+"\n    ")])})),1)])}),[function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"search-tag-list__placeholder"},[n("span",[e._v("Search in:")])])}],!1,null,"b478fbf6",null).exports,y=n(262);function S(object,e){var t=Object.keys(object);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(object);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(object,e).enumerable}))),t.push.apply(t,n)}return t}function w(e){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?S(Object(source),!0).forEach((function(t){Object(r.a)(e,t,source[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(source)):S(Object(source)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(source,t))}))}return e}var x=Object(o.defineComponent)({components:{SearchTagList:_,SearchInput:h.a},props:{tags:{type:Array,default:function(){return[]}},disabled:{type:Boolean,default:!1},placeholder:{type:String,default:"Search"},iconName:{type:String,default:"search"},autocomplete:{type:Boolean,default:!0},activeTag:{type:Object,default:function(){return{id:"1",title:"All content",href:"/search"}}},searchQuery:{type:String,default:""}},setup:function(e,t){var n=Object(o.reactive)({showSearchTagList:!1,appliedActiveTag:{},isFocused:!1}),r=function(){var e,n=null===(e=t.refs)||void 0===e?void 0:e.headerSearchInput;if(n&&!(n instanceof HTMLElement)){var r,input=null===(r=n.$refs)||void 0===r?void 0:r.searchInput;input&&(input instanceof HTMLElement||(input=input.$el),input.focus())}},c=Object(o.computed)((function(){return Object(y.a)(t,e.placeholder,!1)}));return Object(o.watch)((function(){return e.activeTag}),(function(t,r){n.appliedActiveTag=e.activeTag})),w(w({},Object(o.toRefs)(n)),{},{onSearchTagUpdate:function(e){n.appliedActiveTag=e,r()},onInputFocus:function(){n.showSearchTagList=!0,n.isFocused=!0,t.emit("focusGlobalSearch")},onInputBlur:function(e){(function(e){var n,o=null===(n=t.refs)||void 0===n?void 0:n.headerSearch;if(!o)return!1;o instanceof HTMLElement||(o=o.$el);var c=e.relatedTarget,l=Boolean(c&&o.contains?o.contains(c):void 0);return l&&r(),l})(e)||(n.showSearchTagList=!1,n.isFocused=!1,t.emit("focusOutGlobalSearch"))},onSearch:function(e){t.emit("search",e),n.showSearchTagList=!1,n.isFocused=!1,t.emit("focusOutGlobalSearch")},onSearchInputClear:function(){t.emit("headerSearchClear")},activePlaceholder:c})}}),O=(n(759),Object(m.a)(x,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{ref:"headerSearch",staticClass:"header-search",class:{"header-search--is-opened":e.showSearchTagList},attrs:{tabindex:"-1"}},[n("search-input",{ref:"headerSearchInput",staticClass:"app-wrapper__header",attrs:{placeholder:e.activePlaceholder,disabled:e.disabled,"search-tag":e.appliedActiveTag,autocomplete:e.autocomplete,"search-query":e.searchQuery,"emit-global-search":!0},on:{focusGlobalSearch:e.onInputFocus,focusOutGlobalSearch:e.onInputBlur,search:e.onSearch,searchInputClear:e.onSearchInputClear}}),e._v(" "),n("search-tag-list",{directives:[{name:"show",rawName:"v-show",value:e.showSearchTagList,expression:"showSearchTagList"}],attrs:{"active-tag":e.appliedActiveTag,tags:e.tags},on:{emitSearchTag:e.onSearchTagUpdate}})],1)}),[],!1,null,"4b4cd520",null).exports),T=n(628),j=n(629);function C(object,e){var t=Object.keys(object);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(object);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(object,e).enumerable}))),t.push.apply(t,n)}return t}function k(e){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?C(Object(source),!0).forEach((function(t){Object(r.a)(e,t,source[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(source)):C(Object(source)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(source,t))}))}return e}var E=Object(o.defineComponent)({components:{Fab:c.a,HeaderSearch:O,ProfileButton:T.a,NotificationButton:j.a},props:{menuIconName:{type:String,default:"menu"},menuIconSrc:{type:String,default:l.a.HAMBURGER_MENU},title:{type:String,default:"Home"},searchQuery:{type:String,default:void 0},activeSearchTag:{type:Object,default:function(){return d.a[0]}},profileText:{type:String,default:"G"},profileLink:{type:[String,function(){return Location}],default:"/"},profilePhoto:{type:String,default:void 0},profileEmail:{type:String,default:void 0},profileFullName:{type:String,default:void 0},profileFirstLetter:{type:String,default:void 0},setTransparentHeader:{type:Boolean,default:!1},hasNewNotifications:{type:Boolean,default:!1}},setup:function(e,t){var n=Object(o.reactive)({isSearchFocused:!1}),r=Object(o.computed)((function(){var n=e.searchQuery;return t.root.$i18n.t("common.search_results.title",{query:n})}));return k(k({},Object(o.toRefs)(n)),{},{emitSidebarToggle:function(){t.emit("sideBarToggle")},SvgIconEnum:l.a,onGlobalSearchFocus:function(e){var r={isFocused:e};n.isSearchFocused=r.isFocused,t.emit("headerFocusChange",r)},searchTags:d.a,onHeaderSearchChange:function(e){t.emit("globalHeaderSearchChange",e)},onHeaderSearchClear:function(){t.emit("globalHeaderSearchClear")},searchedResultsTitle:r})}}),P=(n(777),Object(m.a)(E,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"global-header flex text-neutral-500 bg-white pr-4",class:{"global-header--search-focused":e.isSearchFocused,"global-header--search-query-entered":e.searchQuery,"global-header--transparent":e.setTransparentHeader}},[n("div",{staticClass:"global-header__left"},[n("div",{staticClass:"global-header__left__button-bar"},[n("client-only",[n("div",{staticClass:"icon_placeholder skeleton--solid",attrs:{slot:"placeholder"},slot:"placeholder"}),e._v(" "),n("div",{staticClass:"menu-icon"},[n("fab",{staticClass:"fab--nav",attrs:{"icon-name":e.menuIconName,"icon-src":e.menuIconSrc,size:"2.25rem","icon-size":"1.5rem"},on:{click:e.emitSidebarToggle}})],1),e._v(" "),n("div",{staticClass:"back-icon"},[n("fab",{staticClass:"fab--nav",attrs:{"icon-name":"arrow-back",size:"2.25rem","icon-size":"1.5rem"},on:{click:e.onHeaderSearchClear}})],1)])],1),e._v(" "),n("div",{staticClass:"global-header__left__title text-neutral-450",class:{"text-xl":e.searchQuery,invisible:e.setTransparentHeader}},[n("span",{directives:[{name:"show",rawName:"v-show",value:e.searchQuery,expression:"searchQuery"}],staticClass:"hidden md:inline"},[e._v("\n        "+e._s(e.searchedResultsTitle)+"\n      ")]),e._v(" "),n("span",{directives:[{name:"show",rawName:"v-show",value:!e.searchQuery,expression:"!searchQuery"}]},[e._v("\n        "+e._s(e.title)+"\n      ")])])]),e._v(" "),n("div",{staticClass:"global-header__right"},[n("div",{staticClass:"global-header__right__search-wrapper"},[n("header-search",{attrs:{tags:e.searchTags,"active-tag":e.activeSearchTag,autocomplete:!1,"search-tag":e.title,"search-query":e.searchQuery},on:{focusGlobalSearch:function(t){return e.onGlobalSearchFocus(!0)},focusOutGlobalSearch:function(t){return e.onGlobalSearchFocus(!1)},search:e.onHeaderSearchChange}})],1),e._v(" "),n("div",{staticClass:"pl-4 sm:flex hidden pr-4"},[e.setTransparentHeader?e._e():n("notification-button",{class:"mr-4",attrs:{"fab-size":"2.25rem","fab-spacing":"1rem","has-new-notifications":e.hasNewNotifications}}),e._v(" "),n("profile-button",{attrs:{"profile-text":e.profileText,"profile-link":e.profileLink,"profile-photo":e.profilePhoto,"profile-email":e.profileEmail,"profile-full-name":e.profileFullName,"profile-first-letter":e.profileFirstLetter,"fab-size":"2.25rem"}})],1)])])}),[],!1,null,"83ce822e",null));t.a=P.exports},639:function(e,t,n){"use strict";var r=n(1),o=n(250),c=n(71),l=n(113),d=n(90),h=Object(r.defineComponent)({components:{SvgImage:o.a,Fab:c.a},setup:function(e,t){var n=Object(d.a)().isSM;return{SvgAssetEnum:l.a,isSM:n,Fab:c.a}}}),f=(n(849),n(2)),component=Object(f.a)(h,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"onboarding-header w-full flex justify-between items-center px-2 sm:px-4 md:px-8 "},[n("nuxt-link",{staticClass:"flex items-center h-10 ml-2",attrs:{to:"/"}},[n("svg-image",{attrs:{src:e.isSM?e.SvgAssetEnum.LOGO_WITH_TEXT:e.SvgAssetEnum.LOGO_FLOWER}})],1),e._v(" "),n("nuxt-link",{staticClass:"flex items-center",attrs:{to:"/"}},[n("fab",{staticClass:"menu close-menu flex-shrink-0 md:hidden",attrs:{"icon-name":"close-outline","icon-size":"2.5rem"}})],1)],1)}),[],!1,null,"789d164e",null);t.a=component.exports},757:function(e,t,n){"use strict";n(452)},758:function(e,t,n){var r=n(19)((function(i){return i[1]}));r.push([e.i,"/*purgecss start ignore*/\n.search-tag-list[data-v-b478fbf6]{\n  padding:1rem;\n  font-size:0.8125rem;\n  flex-wrap:wrap;\n  display:inline-flex;\n  align-items:baseline;\n  flex-wrap:nowrap;\n  width:100%;\n  justify-content:center;\n  --tw-bg-opacity:1;\n  background-color:rgba(255, 255, 255, var(--tw-bg-opacity));\n  position:absolute;\n  top:4rem;\n  top:var(--global-header-height,4rem);\n  left:0;\n  z-index:151\n}\n@media(min-width:1024px){\n.search-tag-list[data-v-b478fbf6]{\n    padding-top:0px;\n    padding-right:1rem;\n    padding-bottom:1rem;\n    padding-left:1rem;\n    margin-top:0.5rem\n}\n}\n.search-tag-list__placeholder[data-v-b478fbf6], .search-tag-list__tags[data-v-b478fbf6]{\n  height:100%\n}\n.search-tag-list__placeholder[data-v-b478fbf6]{\n  margin-right:0.75rem;\n  flex-shrink:0\n}\n.search-tag-list__tags[data-v-b478fbf6]{\n  flex-wrap:wrap\n}\n.search-tag-list__tags .tag[data-v-b478fbf6]{\n  margin:0.25rem;\n  padding:0.25rem;\n  border-radius:0.125rem;\n  --tw-bg-opacity:1;\n  background-color:rgba(245, 247, 247, var(--tw-bg-opacity));\n  display:inline-flex;\n  flex-wrap:wrap\n}\n.search-tag-list__tags .tag--is-active[data-v-b478fbf6]{\n  --tw-bg-opacity:1;\n  background-color:rgba(210, 217, 216, var(--tw-bg-opacity))\n}\n\n/*purgecss end ignore*/",""]),e.exports=r},759:function(e,t,n){"use strict";n(453)},760:function(e,t,n){var r=n(19)((function(i){return i[1]}));r.push([e.i,"/*purgecss start ignore*/\n.header-search[data-v-4b4cd520]{\n  display:flex;\n  flex-direction:column;\n  align-items:center;\n  width:100%;\n  position:unset\n}\n@media(min-width:1024px){\n.header-search--is-opened[data-v-4b4cd520]{\n    --tw-bg-opacity:1;\n    background-color:rgba(255, 255, 255, var(--tw-bg-opacity));\n    position:absolute;\n    top:0;\n    right:8rem;\n    border-width:1px;\n    border-style:solid;\n    border-color:#e6e6e6;\n    box-shadow:0 1px 80px 0 rgba(0,0,0,.08);\n    padding:1rem;\n    width:32rem;\n    height:10rem\n}\n}\n\n/*purgecss end ignore*/",""]),e.exports=r},777:function(e,t,n){"use strict";n(462)},778:function(e,t,n){var r=n(19)((function(i){return i[1]}));r.push([e.i,"/*purgecss start ignore*/\n.global-header[data-v-83ce822e]{\n  height:4rem;\n  height:var(--header-height,4rem)\n}\n.global-header--search-focused .global-header__left__button-bar .menu-icon[data-v-83ce822e]{\n  display:none\n}\n.global-header--search-focused .global-header__left__button-bar .back-icon[data-v-83ce822e]{\n  display:inline-flex\n}\n.global-header--transparent[data-v-83ce822e]{\n  background-color:transparent\n}\n.global-header--transparent .back-icon[data-v-83ce822e]  .app-button:not(:hover) ::v-deep .app-icon, .global-header--transparent .menu-icon[data-v-83ce822e]  .app-button:not(:hover) ::v-deep .app-icon{\n  --tw-text-opacity:1;\n  color:rgba(255, 255, 255, var(--tw-text-opacity))\n}\n.global-header__left[data-v-83ce822e], .global-header__right[data-v-83ce822e]{\n  display:flex\n}\n.global-header__left[data-v-83ce822e], .global-header__right[data-v-83ce822e]{\n  align-items:center\n}\n.global-header__left[data-v-83ce822e]{\n  font-size:1.375rem;\n  font-weight:600;\n  padding-left:1rem\n}\n.global-header__left__button-bar[data-v-83ce822e]{\n  align-items:center;\n  display:flex\n}\n@media(min-width:1366px){\n.global-header__left__button-bar[data-v-83ce822e]{\n    display:none\n}\n}\n.global-header__left__button-bar .back-icon[data-v-83ce822e]{\n  display:none\n}\n.global-header__left__button-bar .menu-icon[data-v-83ce822e]{\n  display:inline-flex\n}\n.global-header__left__button-bar .icon_placeholder[data-v-83ce822e]{\n  width:2rem;\n  height:2rem;\n  border-radius:9999px\n}\n.global-header__left__title[data-v-83ce822e]{\n  padding-left:1rem;\n  padding-right:1rem;\n  display:none\n}\n.global-header--search-query-entered .global-header__left__button-bar[data-v-83ce822e]{\n  display:flex\n}\n.global-header--search-query-entered .global-header__left__button-bar .menu-icon[data-v-83ce822e]{\n  display:none\n}\n.global-header--search-query-entered .global-header__left__button-bar .back-icon[data-v-83ce822e]{\n  display:inline-flex\n}\n.global-header__right[data-v-83ce822e]{\n  flex-grow:1\n}\n.global-header__right__search-wrapper[data-v-83ce822e]{\n  margin-left:1rem;\n  font-size:0.875rem;\n  line-height:1.25rem;\n  width:100%;\n  display:flex\n}\n@media(min-width:600px){\n.global-header[data-v-83ce822e]{\n    justify-content:space-between\n}\n.global-header__right[data-v-83ce822e]{\n    flex-grow:0\n}\n.global-header__right__search-wrapper[data-v-83ce822e]{\n    width:12rem\n}\n.global-header__left__title[data-v-83ce822e]{\n    display:block\n}\n}\n@media(min-width:1024px){\n.global-header__right__search-wrapper[data-v-83ce822e]{\n    width:17.5rem\n}\n}\n@media(min-width:1366px){\n.global-header__left[data-v-83ce822e]{\n    font-weight:700;\n    font-size:1.75rem;\n    padding-left:1.5rem\n}\n.global-header__right__search-wrapper[data-v-83ce822e]{\n    font-size:0.9375rem\n}\n}\n\n/*purgecss end ignore*/",""]),e.exports=r},849:function(e,t,n){"use strict";n(499)},850:function(e,t,n){var r=n(19)((function(i){return i[1]}));r.push([e.i,"/*purgecss start ignore*/\n.onboarding-header[data-v-789d164e]{\n  height:5rem;\n  border-bottom:1px solid #f5f7f7\n}\n@media(min-width:600px){\n.onboarding-header[data-v-789d164e]{\n    height:7rem\n}\n}\n\n/*purgecss end ignore*/",""]),e.exports=r}}]);