(window.webpackJsonp=window.webpackJsonp||[]).push([[11],{1045:function(e,t,n){"use strict";n.d(t,"a",(function(){return l}));var r=n(8),o=(n(37),n(40),n(30)),l=function(e){var t=function(){var e=Object(r.a)(regeneratorRuntime.mark((function e(t,n){var r,o,l,d;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(null!=n&&n.id&&null!==(r=n.teachers)&&void 0!==r&&r.length){e.next=2;break}return e.abrupt("return",Promise.reject(new Error("Not a valid Video Class. Teacher is required")));case 2:return o=n.teachers[0],l=!o.following,e.next=6,c(String(o.id),l);case 6:return d=e.sent,e.abrupt("return",d);case 8:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}(),n=function(){var t=Object(r.a)(regeneratorRuntime.mark((function t(n){var r,l,c,d;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(null!=n&&n.programId){t.next=2;break}return t.abrupt("return",Promise.reject(new Error("Not a valid Program.")));case 2:return r=n.shouldBeFollowed,l=n.programId,console.log("toggleFollowProgram",r),c=e.root.$accessor.userPreferences,t.next=7,c.updateSinglePreference({resourceType:o.a.PROGRAMS,resourceId:String(l),following:r});case 7:return d=t.sent,t.abrupt("return",d);case 9:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),l=function(){var t=Object(r.a)(regeneratorRuntime.mark((function t(n){var r,l,c,d;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(null!=n&&n.playlistId){t.next=2;break}return t.abrupt("return",Promise.reject(new Error("Not a valid Program.")));case 2:return r=n.shouldBeFollowed,l=n.playlistId,console.log("toggleFollowPlaylist",r),c=e.root.$accessor.userPreferences,t.next=7,c.updateSinglePreference({resourceType:o.a.PLAYLISTS,resourceId:String(l),following:r});case 7:return d=t.sent,t.abrupt("return",d);case 9:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),c=function(){var t=Object(r.a)(regeneratorRuntime.mark((function t(n,r){var l,c;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return l=e.root.$accessor.userPreferences,t.next=3,l.updateSinglePreference({resourceType:o.a.TEACHERS,resourceId:n,following:r});case 3:return c=t.sent,t.abrupt("return",c);case 5:case"end":return t.stop()}}),t)})));return function(e,n){return t.apply(this,arguments)}}();return{followTeacher:c,toggleFollowTeacher:t,toggleFollowProgram:n,toggleFollowPlaylist:l,toggleFavoriteStyle:function(){var t=Object(r.a)(regeneratorRuntime.mark((function t(n,r){var l,c;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return l=e.root.$accessor.userPreferences,t.next=3,l.updateSinglePreference({resourceType:o.a.STYLE,resourceId:n,favorited:r});case 3:return c=t.sent,t.abrupt("return",c);case 5:case"end":return t.stop()}}),t)})));return function(e,n){return t.apply(this,arguments)}}()}}},1131:function(e,t,n){var content=n(1205);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,n(20).default)("3630ace2",content,!0,{sourceMap:!1})},1136:function(e,t,n){var content=n(1211);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,n(20).default)("55bc9dd9",content,!0,{sourceMap:!1})},1146:function(e,t,n){"use strict";var r;n.d(t,"a",(function(){return r})),function(e){e.ACCESS_TOKEN="identity_access_token",e.ID_TOKEN="identity_id_token"}(r||(r={}))},1178:function(e,t,n){"use strict";n.d(t,"a",(function(){return d}));n(18),n(16),n(14),n(22),n(15),n(23);var r=n(0),o=n(1146);function l(object,e){var t=Object.keys(object);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(object);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(object,e).enumerable}))),t.push.apply(t,n)}return t}function c(e){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?l(Object(source),!0).forEach((function(t){Object(r.a)(e,t,source[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(source)):l(Object(source)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(source,t))}))}return e}var d=function(e){return{getConfig:function(title,t){return{title:title||"Yoga comments title",commentUrl:e.root.$config.commentSystemApi+"/api/v1/comments",apiUrl:e.root.$config.mainApiUrl+"/api/services/app/User/GetCurrentLoggedInUser",token:e.root.$auth.$storage.getUniversal(o.a.ACCESS_TOKEN),params:c({skipCount:0,maxResultCount:5},t)}}}}},1198:function(e,t,n){"use strict";n(18),n(16),n(14),n(22),n(15),n(23);var r=n(0),o=n(1297),l=n.n(o),c=n(1);function d(object,e){var t=Object.keys(object);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(object);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(object,e).enumerable}))),t.push.apply(t,n)}return t}var m=Object(c.defineComponent)({components:{EyComments:l.a},props:{title:{type:String,default:null},commentUrl:{type:String,default:null},apiUrl:{type:String,default:null},token:{type:String,default:null},params:{type:Object,default:function(){return{referenceSection:"articles",referenceId:"1000",skipCount:0,maxResultCount:5}}}},setup:function(e,t){var n=Object(c.reactive)({commentSystemIsReady:!1});return Object(c.watch)((function(){return e.params.referenceId}),(function(e,r){n.commentSystemIsReady=!1,e!==r&&t.root.$nextTick((function(){n.commentSystemIsReady=!0}))}),{immediate:!0}),Object(c.onMounted)((function(){})),function(e){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?d(Object(source),!0).forEach((function(t){Object(r.a)(e,t,source[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(source)):d(Object(source)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(source,t))}))}return e}({},Object(c.toRefs)(n))}}),f=(n(1210),n(2)),component=Object(f.a)(m,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"comments-wrapper"},[n("client-only",[e.commentSystemIsReady?n("ey-comments",{attrs:{title:e.title,commenturl:e.commentUrl,apiurl:e.apiUrl,token:e.token,params:JSON.stringify(e.params)}}):e._e()],1)],1)}),[],!1,null,null,null);t.a=component.exports},1204:function(e,t,n){"use strict";n(1131)},1205:function(e,t,n){var r=n(19)((function(i){return i[1]}));r.push([e.i,"/*purgecss start ignore*/\n.card-progress-indicator[data-v-8f1f9a32]{\n  position:relative;\n  width:100%;\n  height:0.1875rem;\n  --tw-bg-opacity:1;\n  background-color:rgba(210, 217, 216, var(--tw-bg-opacity))\n}\n.card-progress-indicator__progress-bar[data-v-8f1f9a32]{\n  position:absolute;\n  --tw-bg-opacity:1;\n  background-color:rgba(251, 98, 90, var(--tw-bg-opacity));\n  height:100%;\n  border-radius:1rem;\n  top:0px;\n  left:0px\n}\n\n/*purgecss end ignore*/",""]),e.exports=r},1210:function(e,t,n){"use strict";n(1136)},1211:function(e,t,n){var r=n(19)((function(i){return i[1]}));r.push([e.i,'/*purgecss start ignore*/\n.ey-comments-counter[data-v-446cfd3f]{\n  font-family:sofia-pro,Arial,sans-serif;\n  display:flex;\n  margin-left:40px;\n  margin-bottom:30px;\n  font-weight:700\n}\n@media only screen and (max-width:414px){\n.ey-comments-counter[data-v-446cfd3f]{\n    margin-left:16px;\n    margin-bottom:40px\n}\n}\n.ey-comments-user-image[data-v-215faf85]{\n  height:40px;\n  min-width:40px;\n  max-width:40px;\n  -o-object-fit:cover;\n  object-fit:cover;\n  border-radius:50%;\n  background-color:#d6e5e3\n}\n.ey-comments-avatar-name-overlay[data-v-215faf85]{\n  display:block!important;\n  text-align:center;\n  background-color:#d6e5e3;\n  font-size:1.25rem;\n  width:40px;\n  height:40px;\n  line-height:40px;\n  border-radius:24px;\n  font-family:sofia-pro,sans-serif!important;\n  color:#0c646f!important\n}\n.ey-comments-btn[data-v-29748c21]{\n  cursor:pointer;\n  height:40px;\n  width:150px;\n  border-radius:32px;\n  color:#fff;\n  background-color:#0c646f;\n  font-family:sofia-pro;\n  font-size:16px;\n  font-weight:700;\n  font-stretch:normal;\n  font-style:normal;\n  line-height:1.5;\n  letter-spacing:normal;\n  outline:none;\n  border:transparent\n}\n.ey-comments-btn[data-v-29748c21]:disabled{\n  opacity:.7;\n  cursor:not-allowed\n}\n.ey-comments-input-form[data-v-729f068c]{\n  display:flex;\n  flex-direction:column\n}\n.ey-comments-first-row[data-v-729f068c]{\n  display:flex\n}\n.ey-comments-align-btn[data-v-729f068c]{\n  margin-left:56px;\n  margin-top:12px\n}\n.ey-comment-close-btn[data-v-729f068c]{\n  margin-top:12px;\n  margin-left:15px\n}\n.ey-comments-input-form-field[data-v-729f068c]{\n  min-width:50%;\n  min-height:42px;\n  resize:none;\n  border-radius:4px;\n  border:0;\n  background-color:#f4f4f4;\n  font-family:sofia-pro;\n  font-size:15px;\n  font-weight:400;\n  letter-spacing:normal;\n  color:#545554;\n  padding:10.3px 0 9.7px 16px;\n  box-sizing:border-box\n}\n.ey-comments-input-form-field[data-v-729f068c]::-moz-placeholder{\n  color:#989898\n}\n.ey-comments-input-form-field[data-v-729f068c]:-ms-input-placeholder{\n  color:#989898\n}\n.ey-comments-input-form-field[data-v-729f068c]::placeholder{\n  color:#989898\n}\n.ey-comments-input-form-field[data-v-729f068c]:focus{\n  outline:none\n}\n.ey-comments-input-form-user-image[data-v-729f068c]{\n  margin-right:16px\n}\n@media only screen and (max-width:414px){\n.ey-comments-input-form-field[data-v-729f068c]{\n    min-width:69%\n}\n}\n.ey-comments-nested-comment-arrow[data-v-4f3dd681]{\n  height:24px;\n  fill:#dbdbdb;\n  margin-right:28px;\n  padding-left:10px;\n  padding-top:5px\n}\n.ey-comments-delete-modal[data-v-20bb3d6a]{\n  position:fixed;\n  top:0;\n  bottom:0;\n  left:0;\n  right:0;\n  display:flex;\n  justify-content:center;\n  background-color:rgba(51,60,60,.7);\n  z-index:200\n}\n.ey-comments-delete-modal-content[data-v-20bb3d6a]{\n  align-self:center;\n  background-color:#fff;\n  display:flex;\n  flex-direction:column;\n  padding:42px;\n  border-radius:8px;\n  box-shadow:0 3px 7px rgba(0,0,0,.3);\n  -webkit-background-clip:padding-box;\n  -moz-background-clip:padding-box;\n  background-clip:padding-box\n}\n.ey-comments-delete-modal-footer-actions[data-v-20bb3d6a]{\n  display:flex;\n  flex-direction:row;\n  justify-content:space-between;\n  padding:0 8px;\n  gap:8px\n}\n.ey-comment-close-btn[data-v-20bb3d6a]{\n  background-color:#fff!important;\n  border:2px solid #0c646f!important;\n  color:#0c646f!important\n}\n.ey-button-sm[data-v-20bb3d6a]{\n  height:30px!important;\n  width:85px!important\n}\n.ey-comments-delete-modal-content-heading[data-v-20bb3d6a]{\n  font-size:20px;\n  margin-bottom:10px\n}\n.ey-comments-comment-edit-icon[data-v-51bdda86]{\n  height:24px;\n  width:24px;\n  fill:#d9d9d9;\n  margin-bottom:-3px\n}\n.ey-comments-comment[data-v-7cfabd58]{\n  display:flex;\n  margin-bottom:32px;\n  padding-left:40px\n}\n.ey-comments-modify-comment[data-v-7cfabd58]{\n  margin-top:4px;\n  margin-bottom:34px\n}\n.ey-comments-nested-comment[data-v-7cfabd58]{\n  margin-left:62px\n}\n.ey-comments-text-section[data-v-7cfabd58]{\n  font-family:sofia-pro,Arial,sans-serif;\n  display:flex;\n  flex-direction:column;\n  margin-left:16px\n}\n.ey-comments-align-start[data-v-7cfabd58]{\n  align-self:flex-start\n}\n.ey-comments-controls[data-v-7cfabd58]{\n  margin-top:8px;\n  font-size:15px;\n  font-weight:500;\n  font-stretch:normal;\n  font-style:normal;\n  letter-spacing:normal;\n  cursor:pointer;\n  color:#888\n}\n.ey-comments-comment-date[data-v-7cfabd58]{\n  font-size:14px;\n  font-weight:300;\n  color:#545554;\n  font-stretch:normal;\n  font-style:normal;\n  letter-spacing:normal\n}\n.ey-comments-comment-moderator-title[data-v-7cfabd58],.ey-comments-comment-name[data-v-7cfabd58]{\n  margin-right:8px;\n  color:#4a4a4a;\n  font-size:14px;\n  font-weight:600\n}\n.ey-comments-comment-moderator-title[data-v-7cfabd58]{\n  height:25px;\n  border-radius:12px;\n  border:1px solid #e5eeed;\n  background-color:#e5eeed;\n  text-align:left;\n  padding:2px 10px 3px;\n  margin-bottom:5px\n}\n.ey-comments-comment-text[data-v-7cfabd58]{\n  padding-top:6px;\n  font-size:15px;\n  font-weight:400;\n  font-stretch:normal;\n  font-style:normal;\n  line-height:1.6;\n  letter-spacing:normal;\n  text-align:left;\n  color:#4a4a4a\n}\n.ey-comments-controls-delete[data-v-7cfabd58],.ey-comments-controls-edit[data-v-7cfabd58]{\n  margin-left:10px\n}\n.ey-comments-comment-highlight[data-v-7cfabd58]{\n  scroll-margin-top:5rem;\n  background-color:hsla(0,0%,95.7%,.19);\n  border-radius:4px;\n  padding:5px\n}\n@-webkit-keyframes spinAround-data-v-b397d6e4{\n0%{\n    transform:rotate(0deg)\n}\nto{\n    transform:rotate(359deg)\n}\n}\n@keyframes spinAround-data-v-b397d6e4{\n0%{\n    transform:rotate(0deg)\n}\nto{\n    transform:rotate(359deg)\n}\n}\n.loading[data-v-b397d6e4]{\n  -webkit-animation:spinAround-data-v-b397d6e4 .5s linear infinite;\n  animation:spinAround-data-v-b397d6e4 .5s linear infinite;\n  border-radius:290486px;\n  border-color:#f4f4f4 #f4f4f4 #a9d2d3 #a9d2d3;\n  border-style:solid;\n  border-width:2px;\n  content:"";\n  display:block;\n  height:24px;\n  position:relative;\n  width:24px;\n  margin:0 auto\n}\n#ekhart-yoga-comment-system{\n  font-family:sofia-pro,Arial,sans-serif;\n  -webkit-font-smoothing:antialiased;\n  -moz-osx-font-smoothing:grayscale;\n  text-align:center;\n  color:#2c3e50;\n  margin-top:60px\n}\n.ey-comments-wrapper{\n  width:100%;\n  display:flex;\n  flex-direction:column\n}\n.ey-comments-margin-all{\n  margin-bottom:40px\n}\n.ey-comments-load-more{\n  cursor:pointer;\n  display:flex;\n  margin-left:40px;\n  margin-top:20px;\n  font-family:sofia-pro;\n  font-size:15px;\n  font-weight:700;\n  font-stretch:normal;\n  font-style:normal;\n  letter-spacing:normal;\n  text-align:left;\n  color:#0c646f\n}\n@media only screen and (max-width:414px){\n.ey-comments-load-more{\n    margin:0 auto\n}\n.ey-comments-margin-all{\n    margin-left:16px!important;\n    padding:0\n}\n.ey-comments-mobile-spacing{\n    margin-bottom:88px\n}\n}\n\n/*purgecss end ignore*/',""]),e.exports=r},1272:function(e,t,n){"use strict";n(69);var r=n(1),o=Object(r.defineComponent)({props:{value:{type:Number,default:0}},setup:function(e,t){return{}}}),l=(n(1204),n(2)),component=Object(l.a)(o,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"card-progress-indicator"},[n("div",{staticClass:"card-progress-indicator__progress-bar",style:"width: "+e.value+"%;"})])}),[],!1,null,"8f1f9a32",null);t.a=component.exports},1328:function(e,t,n){var content=n(1536);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,n(20).default)("03537496",content,!0,{sourceMap:!1})},1329:function(e,t,n){var content=n(1538);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,n(20).default)("49ab8ba8",content,!0,{sourceMap:!1})},1330:function(e,t,n){var content=n(1540);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,n(20).default)("63a9e90a",content,!0,{sourceMap:!1})},1437:function(e,t,n){"use strict";n(69);var r=n(1),o=n(1435),l=Object(r.defineComponent)({props:{radius:{type:Number,default:60},progress:{type:Number,default:0},stroke:{type:Number,default:4},progressColor:{type:String,default:"#FB625A"},progressBgColor:{type:String,default:"#E3E6E5"}},setup:function(e,t){var n=e.radius-2*e.stroke,o=2*n*Math.PI,l=Object(r.computed)((function(){return console.log(o),o-e.progress/100*o}));return{normalizedRadius:n,circumference:o,strokeDashoffset:l}}}),c=(n(1537),n(2)),d=Object(c.a)(l,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("svg",{staticClass:"part-section-progress",attrs:{height:2*e.radius,width:2*e.radius}},[n("circle",{attrs:{stroke:e.progressBgColor,"stroke-width":e.stroke,fill:"transparent",r:e.normalizedRadius,cx:e.radius,cy:e.radius}}),e._v(" "),n("circle",{style:{strokeDashoffset:e.strokeDashoffset},attrs:{stroke:e.progressColor,"stroke-dasharray":e.circumference+" "+e.circumference,"stroke-width":e.stroke,fill:"transparent",r:e.normalizedRadius,cx:e.radius,cy:e.radius}})])}),[],!1,null,"c6dfccb8",null).exports,m=n(1439),f=n(1179),v=Object(r.defineComponent)({components:{PartSectionProgress:d,PartSection:m.a,PartSectionFields:o.a},props:{title:{type:String,default:null},description:{type:String,default:null},progress:{type:Number,default:0},progressDisabled:{type:Boolean,default:!1},playlistMode:{type:Boolean,default:!1},sections:{type:Array,default:function(){return[]}}},setup:function(e,t){var n=Object(f.a)(t);return{followActions:n.followActions,onMarkComplete:n.onMarkComplete,onComment:n.onComment}}}),y=(n(1539),Object(c.a)(v,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"part-container-wrapper bg-neutral-150 py-12 ",class:{"program-detail-x-alignment":!e.playlistMode,"playlist-detail-part-x-alignment":e.playlistMode}},[n("div",{staticClass:"relative"},[e.progressDisabled?e._e():n("div",[n("div",{staticClass:"part-container__progress-circle z-10"},[n("part-section-progress",{attrs:{radius:16,progress:e.progress,stroke:2}})],1),e._v(" "),n("hr",{staticClass:"part-container__line"})]),e._v(" "),n("div",{staticClass:"part-container__header flex flex-col",class:{"xs:pl-0":e.progressDisabled&&!e.playlistMode,"pl-14":!e.playlistMode,"px-4 sm:px-6 md:px-0":e.playlistMode}},[n("div",{staticClass:"part-container__title font-bold text-lg mb-2"},[e._v("\n        "+e._s(e.title)+"\n      ")]),e._v(" "),n("div",{staticClass:"part-container__description description-link text-sm",domProps:{innerHTML:e._s(e.description)}})]),e._v(" "),n("transition-group",{attrs:{name:"fade"}},e._l(e.sections,(function(section){return n("div",{key:section.id,staticClass:"part-container__sections mt-10"},[n("part-section",e._b({attrs:{"playlist-mode":e.playlistMode}},"part-section",section,!1),[n("part-section-fields",e._b({on:{followActions:e.followActions,markComplete:function(t){return e.onMarkComplete(t,{section:section})},comment:function(t){return e.onComment(t,{section:section})}}},"part-section-fields",section.partDetails,!1))],1)],1)})),0)],1)])}),[],!1,null,"619695ec",null));t.a=y.exports},1440:function(e,t,n){"use strict";n(69);var r=n(1),o=n(31),l=n(116),c=n(1052),d=n(62),m=n(1272),f=n(9),v=Object(r.defineComponent)({components:{AppButton:o.a,Breathe:c.a,AppImage:l.a,CardProgressIndicator:m.a},props:{title:{type:String,default:null},description:{type:String,default:null},primaryBtnTitle:{type:String,default:null},secondaryBtnTitle:{type:String,default:null},reverseElements:{type:Boolean,default:!1},actionsInProgress:{type:Boolean,default:!1},mediaImg:{type:Object,default:function(){return{src:d.a.PLACEHOLDER_SVG,alt:"media image",width:"480",height:"400"}}},progressBarEnabled:{type:Boolean,default:!1},progressBarValue:{type:Number,default:0},isAuthenticated:{type:Boolean,default:!0}},setup:function(e,t){var n=Object(r.computed)((function(){var t,n=null===(t=e.mediaImg)||void 0===t?void 0:t.src;return n||(n=d.a.PLACEHOLDER_SVG),e.reverseElements?"none":"url("+n+")"}));return Object(r.onMounted)((function(){var e=document.querySelectorAll(".description-link a");e&&e.length&&f.a.setAnchorTargetBehaviour(t,e)})),{primaryBtnAction:function(e){t.emit("primaryBtnAction",e)},secondaryBtnAction:function(e){t.emit("secondaryBtnAction",e)},bgImage:n}}}),y=(n(1535),n(2)),component=Object(y.a)(v,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("section",{staticClass:"featured-detail-header text-neutral-450"},[n("div",{staticClass:"relative"},[n("div",{staticClass:"blur-bg bg-no-repeat bg-cover bg-center object-cover absolute inset-0 z-0",style:{"--bg-image":e.bgImage}}),e._v(" "),n("div",{staticClass:"featured-detail-header-wrapper pb-9 sm:pb-11 md:pb-16 lg:pb-9 pt-6 flex flex-row w-full z-10",class:{"featured-detail-header--reverse-elements playlist-detail-x-alignment items-center justify-end":e.reverseElements,"program-detail-x-alignment justify-between":!e.reverseElements}},[n("div",{staticClass:"featured-detail-header-wrapper__text-part flex flex-col z-10",class:{"md:pr-24 lg:pt-10 self-center md:w-1/2":!e.reverseElements}},[n("div",{staticClass:"flex flex-col sm:flex-row",class:{"flex-col-reverse":e.reverseElements}},[n("div",{class:{"sm:pr-10 sm:w-1/2 md:w-auto md:pr-0":!e.reverseElements}},[n("h3",{staticClass:"featured-detail-header-wrapper__title font-bold text-2xl text-neutral-450 md:text-2.5xl lg:text-3.5xl mb-4",domProps:{innerHTML:e._s(e.title)}}),e._v(" "),n("div",{staticClass:"featured-detail-header-wrapper__description description-link mb-4 font-body",domProps:{innerHTML:e._s(e.description)}})]),e._v(" "),n("div",{staticClass:"featured-detail-header-wrapper__image-mobile",class:{"md:hidden sm:w-1/2":!e.reverseElements,"sm:hidden w-full":e.reverseElements}},[n("div",{staticClass:"w-full relative",class:{"h-full":!e.reverseElements},style:{"padding-top":e.reverseElements?"91%":"0"}},[n("div",{staticClass:"h-full w-full",class:{"absolute inset-0":e.reverseElements}},[n("app-image",e._b({},"app-image",e.mediaImg,!1))],1)])])]),e._v(" "),n("div",{staticClass:"flex flex-col mt-6 md:mt-4 md:flex-col md:items-start md:justify-between",class:{"sm:mt-10 sm:flex-row-reverse sm:items-end sm:justify-end ":!e.reverseElements,"sm:mt-0":e.reverseElements}},[n("div",{staticClass:"featured-detail-header-wrapper__custom flex-grow flex flex-col",class:{"sm:w-1/2 md:w-auto":!e.reverseElements}},[e._t("default")],2),e._v(" "),n("div",{staticClass:"featured-detail-header-wrapper__actions  sm:whitespace-nowrap flex-wrap flex-grow flex mt-6 sm:mt-0 md:mt-12",class:{"sm:w-1/2 md:w-auto":!e.reverseElements,"sm:mt-9":e.reverseElements}},[n("app-button",{directives:[{name:"show",rawName:"v-show",value:e.primaryBtnTitle,expression:"primaryBtnTitle"}],staticClass:"mr-8",class:{clear:e.actionsInProgress,secondary:!e.actionsInProgress},attrs:{disabled:e.actionsInProgress},on:{click:e.primaryBtnAction}},[n("breathe",{directives:[{name:"show",rawName:"v-show",value:e.actionsInProgress,expression:"actionsInProgress"}],staticClass:"breathe--font text-2xl"}),e._v(" "),n("span",{directives:[{name:"show",rawName:"v-show",value:!e.actionsInProgress,expression:"!actionsInProgress"}],domProps:{innerHTML:e._s(e.primaryBtnTitle)}})],1),e._v(" "),n("app-button",{directives:[{name:"show",rawName:"v-show",value:e.secondaryBtnTitle&&!e.actionsInProgress,expression:"secondaryBtnTitle && !actionsInProgress"}],staticClass:"clear text-bluelagoon-400",on:{click:e.secondaryBtnAction}},[n("span",{domProps:{innerHTML:e._s(e.secondaryBtnTitle)}})])],1)])]),e._v(" "),n("div",{staticClass:"featured-detail-header-wrapper__image-desktop hidden z-10",class:{"md:block md:w-1/2 ":!e.reverseElements,"sm:block sm:mr-10 self-start min-w-42.5 md:min-w-65.5 lg:min-w-77.5 xl:min-w-85.5":e.reverseElements}},[n("div",{staticClass:"w-full relative",class:{"h-full":!e.reverseElements},style:{"padding-top":e.reverseElements?"91%":"0"}},[n("div",{staticClass:"h-full w-full",class:{"absolute inset-0":e.reverseElements}},[n("app-image",e._b({staticClass:"h-full w-full"},"app-image",e.mediaImg,!1))],1)])])])]),e._v(" "),e.progressBarEnabled?n("div",{staticClass:"featured-detail-header__progress-bar w-full z-10"},[n("card-progress-indicator",{attrs:{value:e.progressBarValue}})],1):e._e()])}),[],!1,null,null,null);t.a=component.exports},1535:function(e,t,n){"use strict";n(1328)},1536:function(e,t,n){var r=n(19)((function(i){return i[1]}));r.push([e.i,"/*purgecss start ignore*/\n.featured-detail-header .blur-bg{\n  --bg-image:url(/n_static/images/svg/loading-broken-swirl.svg);\n  background-image:var(--bg-image);\n  background-color:#fff;\n  filter:blur(12px);\n  opacity:.2\n}\n.featured-detail-header-wrapper__image-desktop .app-image, .featured-detail-header__header-wrapper__header-mobile .app-image{\n  height:100%\n}\n.featured-detail-header-wrapper__image-desktop .app-image, .featured-detail-header__header-wrapper__header-mobile .app-image{\n  width:100%\n}\n.featured-detail-header--reverse-elements{\n  flex-direction:row-reverse\n}\n\n/*purgecss end ignore*/",""]),e.exports=r},1537:function(e,t,n){"use strict";n(1329)},1538:function(e,t,n){var r=n(19)((function(i){return i[1]}));r.push([e.i,"/*purgecss start ignore*/\ncircle[data-v-c6dfccb8]{\n  transition:stroke-dashoffset .35s;\n  transform:rotate(-90deg);\n  transform-origin:50% 50%\n}\n\n/*purgecss end ignore*/",""]),e.exports=r},1539:function(e,t,n){"use strict";n(1330)},1540:function(e,t,n){var r=n(19)((function(i){return i[1]}));r.push([e.i,'/*purgecss start ignore*/\n.skeleton--animation[data-v-619695ec]{\n  position:relative\n}\n.skeleton--animation[data-v-619695ec]:before{\n  content:"";\n  position:absolute;\n  top:0px;\n  right:0px;\n  bottom:0px;\n  left:0px;\n  background:linear-gradient(94deg,#e6e6e6,#d9d9d9,#e6e6e6);\n  background-size:200% 200%;\n  animation:loadingCardAnimation-data-v-619695ec 1.2s linear infinite reverse\n}\n@-webkit-keyframes loadingCardAnimation-data-v-619695ec{\n0%{\n    background-position-x:0\n}\nto{\n    background-position-x:200%\n}\n}\n@keyframes loadingCardAnimation-data-v-619695ec{\n0%{\n    background-position-x:0\n}\nto{\n    background-position-x:200%\n}\n}\n.skeleton--solid[data-v-619695ec]{\n  --tw-bg-opacity:1;\n  background-color:rgba(210, 217, 216, var(--tw-bg-opacity))\n}\n.part-container__line[data-v-619695ec]{\n  width:2px;\n  height:calc(100% - 8rem);\n  display:inline-block;\n  background-color:#d9d9d9;\n  --tw-bg-opacity:1;\n  background-color:rgba(227, 230, 229, var(--tw-bg-opacity));\n  position:absolute;\n  left:1.7rem;\n  top:1.7em\n}\n.part-container__progress-circle[data-v-619695ec]{\n  position:absolute;\n  top:0;\n  left:.75rem\n}\n.fade-enter-active[data-v-619695ec],.fade-leave-active[data-v-619695ec]{\n  transition:opacity .1s\n}\n.fade-enter[data-v-619695ec],.fade-leave-to[data-v-619695ec]{\n  opacity:0\n}\n\n/*purgecss end ignore*/',""]),e.exports=r}}]);