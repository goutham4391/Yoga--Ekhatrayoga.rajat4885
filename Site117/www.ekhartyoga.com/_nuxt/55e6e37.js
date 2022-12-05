(window.webpackJsonp=window.webpackJsonp||[]).push([[184],{213:function(t,e,r){"use strict";const n=r(29),o=r(323).Reporter,c=r(321).Buffer;function l(base,t){o.call(this,t),c.isBuffer(base)?(this.base=base,this.offset=0,this.length=base.length):this.error("Input not Buffer")}function f(t,e){if(Array.isArray(t))this.length=0,this.value=t.map((function(t){return f.isEncoderBuffer(t)||(t=new f(t,e)),this.length+=t.length,t}),this);else if("number"==typeof t){if(!(0<=t&&t<=255))return e.error("non-byte EncoderBuffer value");this.value=t,this.length=1}else if("string"==typeof t)this.value=t,this.length=c.byteLength(t);else{if(!c.isBuffer(t))return e.error("Unsupported type: "+typeof t);this.value=t,this.length=t.length}}n(l,o),e.DecoderBuffer=l,l.isDecoderBuffer=function(data){if(data instanceof l)return!0;return"object"==typeof data&&c.isBuffer(data.base)&&"DecoderBuffer"===data.constructor.name&&"number"==typeof data.offset&&"number"==typeof data.length&&"function"==typeof data.save&&"function"==typeof data.restore&&"function"==typeof data.isEmpty&&"function"==typeof data.readUInt8&&"function"==typeof data.skip&&"function"==typeof data.raw},l.prototype.save=function(){return{offset:this.offset,reporter:o.prototype.save.call(this)}},l.prototype.restore=function(t){const e=new l(this.base);return e.offset=t.offset,e.length=this.offset,this.offset=t.offset,o.prototype.restore.call(this,t.reporter),e},l.prototype.isEmpty=function(){return this.offset===this.length},l.prototype.readUInt8=function(t){return this.offset+1<=this.length?this.base.readUInt8(this.offset++,!0):this.error(t||"DecoderBuffer overrun")},l.prototype.skip=function(t,e){if(!(this.offset+t<=this.length))return this.error(e||"DecoderBuffer overrun");const r=new l(this.base);return r._reporterState=this._reporterState,r.offset=this.offset,r.length=this.offset+t,this.offset+=t,r},l.prototype.raw=function(t){return this.base.slice(t?t.offset:this.offset,this.length)},e.EncoderBuffer=f,f.isEncoderBuffer=function(data){if(data instanceof f)return!0;return"object"==typeof data&&"EncoderBuffer"===data.constructor.name&&"number"==typeof data.length&&"function"==typeof data.join},f.prototype.join=function(t,e){return t||(t=c.alloc(this.length)),e||(e=0),0===this.length||(Array.isArray(this.value)?this.value.forEach((function(r){r.join(t,e),e+=r.length})):("number"==typeof this.value?t[e]=this.value:"string"==typeof this.value?t.write(this.value,e):c.isBuffer(this.value)&&this.value.copy(t,e),e+=this.length)),t}},322:function(t,e,r){"use strict";const n=r(323).Reporter,o=r(213).EncoderBuffer,c=r(213).DecoderBuffer,l=r(108),f=["seq","seqof","set","setof","objid","bool","gentime","utctime","null_","enum","int","objDesc","bitstr","bmpstr","charstr","genstr","graphstr","ia5str","iso646str","numstr","octstr","printstr","t61str","unistr","utf8str","videostr"],h=["key","obj","use","optional","explicit","implicit","def","choice","any","contains"].concat(f);function d(t,e,r){const n={};this._baseState=n,n.name=r,n.enc=t,n.parent=e||null,n.children=null,n.tag=null,n.args=null,n.reverseArgs=null,n.choice=null,n.optional=!1,n.any=!1,n.obj=!1,n.use=null,n.useDecoder=null,n.key=null,n.default=null,n.explicit=null,n.implicit=null,n.contains=null,n.parent||(n.children=[],this._wrap())}t.exports=d;const y=["enc","parent","children","tag","args","reverseArgs","choice","optional","any","obj","use","alteredUse","key","default","explicit","implicit","contains"];d.prototype.clone=function(){const t=this._baseState,e={};y.forEach((function(r){e[r]=t[r]}));const r=new this.constructor(e.parent);return r._baseState=e,r},d.prototype._wrap=function(){const t=this._baseState;h.forEach((function(e){this[e]=function(){const r=new this.constructor(this);return t.children.push(r),r[e].apply(r,arguments)}}),this)},d.prototype._init=function(body){const t=this._baseState;l(null===t.parent),body.call(this),t.children=t.children.filter((function(t){return t._baseState.parent===this}),this),l.equal(t.children.length,1,"Root node can have only one child")},d.prototype._useArgs=function(t){const e=this._baseState,r=t.filter((function(t){return t instanceof this.constructor}),this);t=t.filter((function(t){return!(t instanceof this.constructor)}),this),0!==r.length&&(l(null===e.children),e.children=r,r.forEach((function(t){t._baseState.parent=this}),this)),0!==t.length&&(l(null===e.args),e.args=t,e.reverseArgs=t.map((function(t){if("object"!=typeof t||t.constructor!==Object)return t;const e={};return Object.keys(t).forEach((function(r){r==(0|r)&&(r|=0);const n=t[r];e[n]=r})),e})))},["_peekTag","_decodeTag","_use","_decodeStr","_decodeObjid","_decodeTime","_decodeNull","_decodeInt","_decodeBool","_decodeList","_encodeComposite","_encodeStr","_encodeObjid","_encodeTime","_encodeNull","_encodeInt","_encodeBool"].forEach((function(t){d.prototype[t]=function(){const e=this._baseState;throw new Error(t+" not implemented for encoding: "+e.enc)}})),f.forEach((function(t){d.prototype[t]=function(){const e=this._baseState,r=Array.prototype.slice.call(arguments);return l(null===e.tag),e.tag=t,this._useArgs(r),this}})),d.prototype.use=function(t){l(t);const e=this._baseState;return l(null===e.use),e.use=t,this},d.prototype.optional=function(){return this._baseState.optional=!0,this},d.prototype.def=function(t){const e=this._baseState;return l(null===e.default),e.default=t,e.optional=!0,this},d.prototype.explicit=function(t){const e=this._baseState;return l(null===e.explicit&&null===e.implicit),e.explicit=t,this},d.prototype.implicit=function(t){const e=this._baseState;return l(null===e.explicit&&null===e.implicit),e.implicit=t,this},d.prototype.obj=function(){const t=this._baseState,e=Array.prototype.slice.call(arguments);return t.obj=!0,0!==e.length&&this._useArgs(e),this},d.prototype.key=function(t){const e=this._baseState;return l(null===e.key),e.key=t,this},d.prototype.any=function(){return this._baseState.any=!0,this},d.prototype.choice=function(t){const e=this._baseState;return l(null===e.choice),e.choice=t,this._useArgs(Object.keys(t).map((function(e){return t[e]}))),this},d.prototype.contains=function(t){const e=this._baseState;return l(null===e.use),e.contains=t,this},d.prototype._decode=function(input,t){const e=this._baseState;if(null===e.parent)return input.wrapResult(e.children[0]._decode(input,t));let r,n=e.default,o=!0,l=null;if(null!==e.key&&(l=input.enterKey(e.key)),e.optional){let r=null;if(null!==e.explicit?r=e.explicit:null!==e.implicit?r=e.implicit:null!==e.tag&&(r=e.tag),null!==r||e.any){if(o=this._peekTag(input,r,e.any),input.isError(o))return o}else{const r=input.save();try{null===e.choice?this._decodeGeneric(e.tag,input,t):this._decodeChoice(input,t),o=!0}catch(t){o=!1}input.restore(r)}}if(e.obj&&o&&(r=input.enterObject()),o){if(null!==e.explicit){const t=this._decodeTag(input,e.explicit);if(input.isError(t))return t;input=t}const r=input.offset;if(null===e.use&&null===e.choice){let t;e.any&&(t=input.save());const body=this._decodeTag(input,null!==e.implicit?e.implicit:e.tag,e.any);if(input.isError(body))return body;e.any?n=input.raw(t):input=body}if(t&&t.track&&null!==e.tag&&t.track(input.path(),r,input.length,"tagged"),t&&t.track&&null!==e.tag&&t.track(input.path(),input.offset,input.length,"content"),e.any||(n=null===e.choice?this._decodeGeneric(e.tag,input,t):this._decodeChoice(input,t)),input.isError(n))return n;if(e.any||null!==e.choice||null===e.children||e.children.forEach((function(e){e._decode(input,t)})),e.contains&&("octstr"===e.tag||"bitstr"===e.tag)){const data=new c(n);n=this._getUse(e.contains,input._reporterState.obj)._decode(data,t)}}return e.obj&&o&&(n=input.leaveObject(r)),null===e.key||null===n&&!0!==o?null!==l&&input.exitKey(l):input.leaveKey(l,e.key,n),n},d.prototype._decodeGeneric=function(t,input,e){const r=this._baseState;return"seq"===t||"set"===t?null:"seqof"===t||"setof"===t?this._decodeList(input,t,r.args[0],e):/str$/.test(t)?this._decodeStr(input,t,e):"objid"===t&&r.args?this._decodeObjid(input,r.args[0],r.args[1],e):"objid"===t?this._decodeObjid(input,null,null,e):"gentime"===t||"utctime"===t?this._decodeTime(input,t,e):"null_"===t?this._decodeNull(input,e):"bool"===t?this._decodeBool(input,e):"objDesc"===t?this._decodeStr(input,t,e):"int"===t||"enum"===t?this._decodeInt(input,r.args&&r.args[0],e):null!==r.use?this._getUse(r.use,input._reporterState.obj)._decode(input,e):input.error("unknown tag: "+t)},d.prototype._getUse=function(t,e){const r=this._baseState;return r.useDecoder=this._use(t,e),l(null===r.useDecoder._baseState.parent),r.useDecoder=r.useDecoder._baseState.children[0],r.implicit!==r.useDecoder._baseState.implicit&&(r.useDecoder=r.useDecoder.clone(),r.useDecoder._baseState.implicit=r.implicit),r.useDecoder},d.prototype._decodeChoice=function(input,t){const e=this._baseState;let r=null,n=!1;return Object.keys(e.choice).some((function(o){const c=input.save(),l=e.choice[o];try{const e=l._decode(input,t);if(input.isError(e))return!1;r={type:o,value:e},n=!0}catch(t){return input.restore(c),!1}return!0}),this),n?r:input.error("Choice not matched")},d.prototype._createEncoderBuffer=function(data){return new o(data,this.reporter)},d.prototype._encode=function(data,t,e){const r=this._baseState;if(null!==r.default&&r.default===data)return;const n=this._encodeValue(data,t,e);return void 0===n||this._skipDefault(n,t,e)?void 0:n},d.prototype._encodeValue=function(data,t,e){const r=this._baseState;if(null===r.parent)return r.children[0]._encode(data,t||new n);let o=null;if(this.reporter=t,r.optional&&void 0===data){if(null===r.default)return;data=r.default}let content=null,c=!1;if(r.any)o=this._createEncoderBuffer(data);else if(r.choice)o=this._encodeChoice(data,t);else if(r.contains)content=this._getUse(r.contains,e)._encode(data,t),c=!0;else if(r.children)content=r.children.map((function(e){if("null_"===e._baseState.tag)return e._encode(null,t,data);if(null===e._baseState.key)return t.error("Child should have a key");const r=t.enterKey(e._baseState.key);if("object"!=typeof data)return t.error("Child expected, but input is not object");const n=e._encode(data[e._baseState.key],t,data);return t.leaveKey(r),n}),this).filter((function(t){return t})),content=this._createEncoderBuffer(content);else if("seqof"===r.tag||"setof"===r.tag){if(!r.args||1!==r.args.length)return t.error("Too many args for : "+r.tag);if(!Array.isArray(data))return t.error("seqof/setof, but data is not Array");const e=this.clone();e._baseState.implicit=null,content=this._createEncoderBuffer(data.map((function(e){const r=this._baseState;return this._getUse(r.args[0],data)._encode(e,t)}),e))}else null!==r.use?o=this._getUse(r.use,e)._encode(data,t):(content=this._encodePrimitive(r.tag,data),c=!0);if(!r.any&&null===r.choice){const e=null!==r.implicit?r.implicit:r.tag,n=null===r.implicit?"universal":"context";null===e?null===r.use&&t.error("Tag could be omitted only for .use()"):null===r.use&&(o=this._encodeComposite(e,c,n,content))}return null!==r.explicit&&(o=this._encodeComposite(r.explicit,!1,"context",o)),o},d.prototype._encodeChoice=function(data,t){const e=this._baseState,r=e.choice[data.type];return r||l(!1,data.type+" not found in "+JSON.stringify(Object.keys(e.choice))),r._encode(data.value,t)},d.prototype._encodePrimitive=function(t,data){const e=this._baseState;if(/str$/.test(t))return this._encodeStr(data,t);if("objid"===t&&e.args)return this._encodeObjid(data,e.reverseArgs[0],e.args[1]);if("objid"===t)return this._encodeObjid(data,null,null);if("gentime"===t||"utctime"===t)return this._encodeTime(data,t);if("null_"===t)return this._encodeNull();if("int"===t||"enum"===t)return this._encodeInt(data,e.args&&e.reverseArgs[0]);if("bool"===t)return this._encodeBool(data);if("objDesc"===t)return this._encodeStr(data,t);throw new Error("Unsupported tag: "+t)},d.prototype._isNumstr=function(t){return/^[0-9 ]*$/.test(t)},d.prototype._isPrintstr=function(t){return/^[A-Za-z0-9 '()+,-./:=?]*$/.test(t)}},323:function(t,e,r){"use strict";const n=r(29);function o(t){this._reporterState={obj:null,path:[],options:t||{},errors:[]}}function c(path,t){this.path=path,this.rethrow(t)}e.Reporter=o,o.prototype.isError=function(t){return t instanceof c},o.prototype.save=function(){const t=this._reporterState;return{obj:t.obj,pathLen:t.path.length}},o.prototype.restore=function(data){const t=this._reporterState;t.obj=data.obj,t.path=t.path.slice(0,data.pathLen)},o.prototype.enterKey=function(t){return this._reporterState.path.push(t)},o.prototype.exitKey=function(t){const e=this._reporterState;e.path=e.path.slice(0,t-1)},o.prototype.leaveKey=function(t,e,r){const n=this._reporterState;this.exitKey(t),null!==n.obj&&(n.obj[e]=r)},o.prototype.path=function(){return this._reporterState.path.join("/")},o.prototype.enterObject=function(){const t=this._reporterState,e=t.obj;return t.obj={},e},o.prototype.leaveObject=function(t){const e=this._reporterState,r=e.obj;return e.obj=t,r},o.prototype.error=function(t){let e;const r=this._reporterState,n=t instanceof c;if(e=n?t:new c(r.path.map((function(t){return"["+JSON.stringify(t)+"]"})).join(""),t.message||t,t.stack),!r.options.partial)throw e;return n||r.errors.push(e),e},o.prototype.wrapResult=function(t){const e=this._reporterState;return e.options.partial?{result:this.isError(t)?null:t,errors:e.errors}:t},n(c,Error),c.prototype.rethrow=function(t){if(this.message=t+" at: "+(this.path||"(shallow)"),Error.captureStackTrace&&Error.captureStackTrace(this,c),!this.stack)try{throw new Error(this.message)}catch(t){this.stack=t.stack}return this}},324:function(t,e,r){"use strict";function n(map){const t={};return Object.keys(map).forEach((function(e){(0|e)==e&&(e|=0);const r=map[e];t[r]=e})),t}e.tagClass={0:"universal",1:"application",2:"context",3:"private"},e.tagClassByName=n(e.tagClass),e.tag={0:"end",1:"bool",2:"int",3:"bitstr",4:"octstr",5:"null_",6:"objid",7:"objDesc",8:"external",9:"real",10:"enum",11:"embed",12:"utf8str",13:"relativeOid",16:"seq",17:"set",18:"numstr",19:"printstr",20:"t61str",21:"videostr",22:"ia5str",23:"utctime",24:"gentime",25:"graphstr",26:"iso646str",27:"genstr",28:"unistr",29:"charstr",30:"bmpstr"},e.tagByName=n(e.tag)},562:function(t,e,r){"use strict";const n=e;n.bignum=r(563),n.define=r(994).define,n.base=r(997),n.constants=r(998),n.decoders=r(566),n.encoders=r(564)},564:function(t,e,r){"use strict";const n=e;n.der=r(565),n.pem=r(995)},565:function(t,e,r){"use strict";const n=r(29),o=r(321).Buffer,c=r(322),l=r(324);function f(t){this.enc="der",this.name=t.name,this.entity=t,this.tree=new h,this.tree._init(t.body)}function h(t){c.call(this,"der",t)}function d(t){return t<10?"0"+t:t}t.exports=f,f.prototype.encode=function(data,t){return this.tree._encode(data,t).join()},n(h,c),h.prototype._encodeComposite=function(t,e,r,content){const n=function(t,e,r,n){let o;"seqof"===t?t="seq":"setof"===t&&(t="set");if(l.tagByName.hasOwnProperty(t))o=l.tagByName[t];else{if("number"!=typeof t||(0|t)!==t)return n.error("Unknown tag: "+t);o=t}if(o>=31)return n.error("Multi-octet tag encoding unsupported");e||(o|=32);return o|=l.tagClassByName[r||"universal"]<<6,o}(t,e,r,this.reporter);if(content.length<128){const header=o.alloc(2);return header[0]=n,header[1]=content.length,this._createEncoderBuffer([header,content])}let c=1;for(let i=content.length;i>=256;i>>=8)c++;const header=o.alloc(2+c);header[0]=n,header[1]=128|c;for(let i=1+c,t=content.length;t>0;i--,t>>=8)header[i]=255&t;return this._createEncoderBuffer([header,content])},h.prototype._encodeStr=function(t,e){if("bitstr"===e)return this._createEncoderBuffer([0|t.unused,t.data]);if("bmpstr"===e){const e=o.alloc(2*t.length);for(let i=0;i<t.length;i++)e.writeUInt16BE(t.charCodeAt(i),2*i);return this._createEncoderBuffer(e)}return"numstr"===e?this._isNumstr(t)?this._createEncoderBuffer(t):this.reporter.error("Encoding of string type: numstr supports only digits and space"):"printstr"===e?this._isPrintstr(t)?this._createEncoderBuffer(t):this.reporter.error("Encoding of string type: printstr supports only latin upper and lower case letters, digits, space, apostrophe, left and rigth parenthesis, plus sign, comma, hyphen, dot, slash, colon, equal sign, question mark"):/str$/.test(e)||"objDesc"===e?this._createEncoderBuffer(t):this.reporter.error("Encoding of string type: "+e+" unsupported")},h.prototype._encodeObjid=function(t,e,r){if("string"==typeof t){if(!e)return this.reporter.error("string objid given, but no values map found");if(!e.hasOwnProperty(t))return this.reporter.error("objid not found in values map");t=e[t].split(/[\s.]+/g);for(let i=0;i<t.length;i++)t[i]|=0}else if(Array.isArray(t)){t=t.slice();for(let i=0;i<t.length;i++)t[i]|=0}if(!Array.isArray(t))return this.reporter.error("objid() should be either array or string, got: "+JSON.stringify(t));if(!r){if(t[1]>=40)return this.reporter.error("Second objid identifier OOB");t.splice(0,2,40*t[0]+t[1])}let n=0;for(let i=0;i<t.length;i++){let e=t[i];for(n++;e>=128;e>>=7)n++}const c=o.alloc(n);let l=c.length-1;for(let i=t.length-1;i>=0;i--){let e=t[i];for(c[l--]=127&e;(e>>=7)>0;)c[l--]=128|127&e}return this._createEncoderBuffer(c)},h.prototype._encodeTime=function(time,t){let e;const r=new Date(time);return"gentime"===t?e=[d(r.getUTCFullYear()),d(r.getUTCMonth()+1),d(r.getUTCDate()),d(r.getUTCHours()),d(r.getUTCMinutes()),d(r.getUTCSeconds()),"Z"].join(""):"utctime"===t?e=[d(r.getUTCFullYear()%100),d(r.getUTCMonth()+1),d(r.getUTCDate()),d(r.getUTCHours()),d(r.getUTCMinutes()),d(r.getUTCSeconds()),"Z"].join(""):this.reporter.error("Encoding "+t+" time is not supported yet"),this._encodeStr(e,"octstr")},h.prototype._encodeNull=function(){return this._createEncoderBuffer("")},h.prototype._encodeInt=function(t,e){if("string"==typeof t){if(!e)return this.reporter.error("String int or enum given, but no values map");if(!e.hasOwnProperty(t))return this.reporter.error("Values map doesn't contain: "+JSON.stringify(t));t=e[t]}if("number"!=typeof t&&!o.isBuffer(t)){const e=t.toArray();!t.sign&&128&e[0]&&e.unshift(0),t=o.from(e)}if(o.isBuffer(t)){let e=t.length;0===t.length&&e++;const r=o.alloc(e);return t.copy(r),0===t.length&&(r[0]=0),this._createEncoderBuffer(r)}if(t<128)return this._createEncoderBuffer(t);if(t<256)return this._createEncoderBuffer([0,t]);let r=1;for(let i=t;i>=256;i>>=8)r++;const n=new Array(r);for(let i=n.length-1;i>=0;i--)n[i]=255&t,t>>=8;return 128&n[0]&&n.unshift(0),this._createEncoderBuffer(o.from(n))},h.prototype._encodeBool=function(t){return this._createEncoderBuffer(t?255:0)},h.prototype._use=function(t,e){return"function"==typeof t&&(t=t(e)),t._getEncoder("der").tree},h.prototype._skipDefault=function(t,e,r){const n=this._baseState;let i;if(null===n.default)return!1;const data=t.join();if(void 0===n.defaultBuffer&&(n.defaultBuffer=this._encodeValue(n.default,e,r).join()),data.length!==n.defaultBuffer.length)return!1;for(i=0;i<data.length;i++)if(data[i]!==n.defaultBuffer[i])return!1;return!0}},566:function(t,e,r){"use strict";const n=e;n.der=r(567),n.pem=r(996)},567:function(t,e,r){"use strict";const n=r(29),o=r(563),c=r(213).DecoderBuffer,l=r(322),f=r(324);function h(t){this.enc="der",this.name=t.name,this.entity=t,this.tree=new d,this.tree._init(t.body)}function d(t){l.call(this,"der",t)}function y(t,e){let r=t.readUInt8(e);if(t.isError(r))return r;const n=f.tagClass[r>>6],o=0==(32&r);if(31==(31&r)){let n=r;for(r=0;128==(128&n);){if(n=t.readUInt8(e),t.isError(n))return n;r<<=7,r|=127&n}}else r&=31;return{cls:n,primitive:o,tag:r,tagStr:f.tag[r]}}function _(t,e,r){let n=t.readUInt8(r);if(t.isError(n))return n;if(!e&&128===n)return null;if(0==(128&n))return n;const o=127&n;if(o>4)return t.error("length octect is too long");n=0;for(let i=0;i<o;i++){n<<=8;const e=t.readUInt8(r);if(t.isError(e))return e;n|=e}return n}t.exports=h,h.prototype.decode=function(data,t){return c.isDecoderBuffer(data)||(data=new c(data,t)),this.tree._decode(data,t)},n(d,l),d.prototype._peekTag=function(t,e,r){if(t.isEmpty())return!1;const n=t.save(),o=y(t,'Failed to peek tag: "'+e+'"');return t.isError(o)?o:(t.restore(n),o.tag===e||o.tagStr===e||o.tagStr+"of"===e||r)},d.prototype._decodeTag=function(t,e,r){const n=y(t,'Failed to decode tag of "'+e+'"');if(t.isError(n))return n;let o=_(t,n.primitive,'Failed to get length of "'+e+'"');if(t.isError(o))return o;if(!r&&n.tag!==e&&n.tagStr!==e&&n.tagStr+"of"!==e)return t.error('Failed to match tag: "'+e+'"');if(n.primitive||null!==o)return t.skip(o,'Failed to match body of: "'+e+'"');const c=t.save(),l=this._skipUntilEnd(t,'Failed to skip indefinite length body: "'+this.tag+'"');return t.isError(l)?l:(o=t.offset-c.offset,t.restore(c),t.skip(o,'Failed to match body of: "'+e+'"'))},d.prototype._skipUntilEnd=function(t,e){for(;;){const r=y(t,e);if(t.isError(r))return r;const n=_(t,r.primitive,e);if(t.isError(n))return n;let o;if(o=r.primitive||null!==n?t.skip(n):this._skipUntilEnd(t,e),t.isError(o))return o;if("end"===r.tagStr)break}},d.prototype._decodeList=function(t,e,r,n){const o=[];for(;!t.isEmpty();){const e=this._peekTag(t,"end");if(t.isError(e))return e;const c=r.decode(t,"der",n);if(t.isError(c)&&e)break;o.push(c)}return o},d.prototype._decodeStr=function(t,e){if("bitstr"===e){const e=t.readUInt8();return t.isError(e)?e:{unused:e,data:t.raw()}}if("bmpstr"===e){const e=t.raw();if(e.length%2==1)return t.error("Decoding of string type: bmpstr length mismatch");let r="";for(let i=0;i<e.length/2;i++)r+=String.fromCharCode(e.readUInt16BE(2*i));return r}if("numstr"===e){const e=t.raw().toString("ascii");return this._isNumstr(e)?e:t.error("Decoding of string type: numstr unsupported characters")}if("octstr"===e)return t.raw();if("objDesc"===e)return t.raw();if("printstr"===e){const e=t.raw().toString("ascii");return this._isPrintstr(e)?e:t.error("Decoding of string type: printstr unsupported characters")}return/str$/.test(e)?t.raw().toString():t.error("Decoding of string type: "+e+" unsupported")},d.prototype._decodeObjid=function(t,e,r){let n;const o=[];let c=0,l=0;for(;!t.isEmpty();)l=t.readUInt8(),c<<=7,c|=127&l,0==(128&l)&&(o.push(c),c=0);128&l&&o.push(c);const f=o[0]/40|0,h=o[0]%40;if(n=r?o:[f,h].concat(o.slice(1)),e){let t=e[n.join(" ")];void 0===t&&(t=e[n.join(".")]),void 0!==t&&(n=t)}return n},d.prototype._decodeTime=function(t,e){const r=t.raw().toString();let n,o,c,l,f,h;if("gentime"===e)n=0|r.slice(0,4),o=0|r.slice(4,6),c=0|r.slice(6,8),l=0|r.slice(8,10),f=0|r.slice(10,12),h=0|r.slice(12,14);else{if("utctime"!==e)return t.error("Decoding "+e+" time is not supported yet");n=0|r.slice(0,2),o=0|r.slice(2,4),c=0|r.slice(4,6),l=0|r.slice(6,8),f=0|r.slice(8,10),h=0|r.slice(10,12),n=n<70?2e3+n:1900+n}return Date.UTC(n,o-1,c,l,f,h,0)},d.prototype._decodeNull=function(){return null},d.prototype._decodeBool=function(t){const e=t.readUInt8();return t.isError(e)?e:0!==e},d.prototype._decodeInt=function(t,e){const r=t.raw();let n=new o(r);return e&&(n=e[n.toString(10)]||n),n},d.prototype._use=function(t,e){return"function"==typeof t&&(t=t(e)),t._getDecoder("der").tree}},994:function(t,e,r){"use strict";const n=r(564),o=r(566),c=r(29);function l(t,body){this.name=t,this.body=body,this.decoders={},this.encoders={}}e.define=function(t,body){return new l(t,body)},l.prototype._createNamed=function(t){const e=this.name;function r(t){this._initNamed(t,e)}return c(r,t),r.prototype._initNamed=function(e,r){t.call(this,e,r)},new r(this)},l.prototype._getDecoder=function(t){return t=t||"der",this.decoders.hasOwnProperty(t)||(this.decoders[t]=this._createNamed(o[t])),this.decoders[t]},l.prototype.decode=function(data,t,e){return this._getDecoder(t).decode(data,e)},l.prototype._getEncoder=function(t){return t=t||"der",this.encoders.hasOwnProperty(t)||(this.encoders[t]=this._createNamed(n[t])),this.encoders[t]},l.prototype.encode=function(data,t,e){return this._getEncoder(t).encode(data,e)}},995:function(t,e,r){"use strict";const n=r(29),o=r(565);function c(t){o.call(this,t),this.enc="pem"}n(c,o),t.exports=c,c.prototype.encode=function(data,t){const p=o.prototype.encode.call(this,data).toString("base64"),e=["-----BEGIN "+t.label+"-----"];for(let i=0;i<p.length;i+=64)e.push(p.slice(i,i+64));return e.push("-----END "+t.label+"-----"),e.join("\n")}},996:function(t,e,r){"use strict";const n=r(29),o=r(321).Buffer,c=r(567);function l(t){c.call(this,t),this.enc="pem"}n(l,c),t.exports=l,l.prototype.decode=function(data,t){const e=data.toString().split(/[\r\n]+/g),label=t.label.toUpperCase(),r=/^-----(BEGIN|END) ([^-]+)-----$/;let n=-1,l=-1;for(let i=0;i<e.length;i++){const t=e[i].match(r);if(null!==t&&t[2]===label){if(-1!==n){if("END"!==t[1])break;l=i;break}if("BEGIN"!==t[1])break;n=i}}if(-1===n||-1===l)throw new Error("PEM section not found for: "+label);const f=e.slice(n+1,l).join("");f.replace(/[^a-z0-9+/=]+/gi,"");const input=o.from(f,"base64");return c.prototype.decode.call(this,input,t)}},997:function(t,e,r){"use strict";const base=e;base.Reporter=r(323).Reporter,base.DecoderBuffer=r(213).DecoderBuffer,base.EncoderBuffer=r(213).EncoderBuffer,base.Node=r(322)},998:function(t,e,r){"use strict";const n=e;n._reverse=function(map){const t={};return Object.keys(map).forEach((function(e){(0|e)==e&&(e|=0);const r=map[e];t[r]=e})),t},n.der=r(324)}}]);