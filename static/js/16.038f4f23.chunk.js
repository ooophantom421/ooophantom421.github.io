(this["webpackJsonppancake-frontend"]=this["webpackJsonppancake-frontend"]||[]).push([[16],{1051:function(e,t,n){"use strict";n.d(t,"b",(function(){return l})),n.d(t,"a",(function(){return b}));var c,r=n(5),a=n(9),o=(n(0),n(2)),s=n(6),i=n(1),l=s.e.div(c||(c=Object(a.a)(["\n  align-items: center;\n  border: 1px solid ",";\n  border-radius: 12px;\n  display: flex;\n  height: 64px;\n  justify-content: space-between;\n  margin-bottom: 24px;\n  padding: 0 16px;\n"])),(function(e){return e.theme.colors.cardBorder})),b=function(e){return Object(i.jsx)(o.p,Object(r.a)({mb:"24px",maxWidth:"320px"},e))}},1075:function(e,t,n){"use strict";var c,r=n(9),a=n(6).e.div(c||(c=Object(r.a)(["\n  align-items: start;\n  display: grid;\n  grid-gap: 32px;\n  grid-template-columns: minmax(0, 1fr);\n\n  "," {\n    grid-template-columns: 1fr 332px;\n  }\n"])),(function(e){return e.theme.mediaQueries.lg}));t.a=a},1076:function(e,t,n){"use strict";n(0);var c=n(2),r=n(13),a=n(35),o=n(1051),s=n(1);t.a=function(e){var t=e.total,n=e.cakeBalance,i=e.cakeVaultBalance,l=e.cakePoolBalance,b=e.poolsBalance,u=e.cakeBnbLpBalance,j=Object(r.b)().t;return Object(s.jsxs)(o.a,{mb:"0",children:[Object(s.jsx)(c.Ac,{as:"p",mb:"24px",fontSize:"14px",color:"textSubtle",children:j("Your voting power is determined by the amount of CAKE you held at the block detailed below. CAKE held in other places does not contribute to your voting power.")}),Object(s.jsx)(c.Ac,{color:"secondary",textTransform:"uppercase",mb:"4px",bold:!0,fontSize:"14px",children:j("Overview")}),Object(s.jsxs)(o.b,{children:[Object(s.jsx)(c.Ac,{color:"secondary",children:j("Your Voting Power")}),Object(s.jsx)(c.Ac,{bold:!0,fontSize:"20px",children:Object(a.e)(t,0,3)})]}),Object(s.jsx)(c.Ac,{color:"secondary",textTransform:"uppercase",mb:"4px",bold:!0,fontSize:"14px",children:j("Your Cake Held Now")}),Object(s.jsxs)(c.bb,{alignItems:"center",justifyContent:"space-between",mb:"4px",children:[Object(s.jsx)(c.Ac,{color:"textSubtle",fontSize:"16px",children:j("Wallet")}),Object(s.jsx)(c.Ac,{textAlign:"right",children:Object(a.e)(n,0,3)})]}),Object(s.jsxs)(c.bb,{alignItems:"center",justifyContent:"space-between",mb:"4px",children:[Object(s.jsx)(c.Ac,{color:"textSubtle",fontSize:"16px",children:j("Manual CAKE Pool")}),Object(s.jsx)(c.Ac,{textAlign:"right",children:Object(a.e)(l,0,3)})]}),Object(s.jsxs)(c.bb,{alignItems:"center",justifyContent:"space-between",mb:"4px",children:[Object(s.jsx)(c.Ac,{color:"textSubtle",fontSize:"16px",children:j("Auto CAKE Pool")}),Object(s.jsx)(c.Ac,{textAlign:"right",children:Object(a.e)(i,0,3)})]}),Object(s.jsxs)(c.bb,{alignItems:"center",justifyContent:"space-between",mb:"4px",children:[Object(s.jsx)(c.Ac,{color:"textSubtle",fontSize:"16px",children:j("Other Syrup Pools")}),Object(s.jsx)(c.Ac,{textAlign:"right",children:Object(a.e)(b,0,3)})]}),Object(s.jsxs)(c.bb,{alignItems:"center",justifyContent:"space-between",mb:"4px",children:[Object(s.jsx)(c.Ac,{color:"textSubtle",fontSize:"16px",children:j("CAKE BNB LP")}),Object(s.jsx)(c.Ac,{textAlign:"right",children:Object(a.e)(u,0,3)})]})]})}},1077:function(e,t,n){"use strict";var c=n(3),r=n.n(c),a=n(5),o=n(10),s=n(8),i=n(0),l=n(49),b=n(181),u=n(37),j=n(119),d=n(982),p={verificationHash:null,cakeBalance:0,cakeVaultBalance:0,cakePoolBalance:0,poolsBalance:0,cakeBnbLpBalance:0,total:0};t.a=function(e){var t=!(arguments.length>1&&void 0!==arguments[1])||arguments[1],n=Object(l.c)(),c=n.account,x=Object(i.useState)(p),O=Object(s.a)(x,2),h=O[0],f=O[1],m=Object(i.useState)(!!c),g=Object(s.a)(m,2),v=g[0],y=g[1];return Object(i.useEffect)((function(){c&&t&&function(){var n=Object(o.a)(r.a.mark((function n(){var o,s,i,l,p,x,O,h,m,g,v;return r.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:if(y(!0),n.prev=1,n.t0=e,n.t0){n.next=7;break}return n.next=6,j.a.getBlockNumber();case 6:n.t0=n.sent;case 7:return o=n.t0,n.next=10,Object(b.b)(o);case 10:return s=n.sent,i=s.map((function(e){var t=e.contractAddress;return Object(u.a)(t)})),n.next=14,Object(d.g)(c,i,o);case 14:l=n.sent,p=l.cakeBalance,x=l.cakeBnbLpBalance,O=l.cakePoolBalance,h=l.total,m=l.poolsBalance,g=l.cakeVaultBalance,v=l.verificationHash,t&&f((function(e){return Object(a.a)(Object(a.a)({},e),{},{verificationHash:v,cakeBalance:parseFloat(p),cakeBnbLpBalance:parseFloat(x),cakePoolBalance:parseFloat(O),poolsBalance:parseFloat(m),cakeVaultBalance:parseFloat(g),total:parseFloat(h)})}));case 23:return n.prev=23,y(!1),n.finish(23);case 26:case"end":return n.stop()}}),n,null,[[1,,23,26]])})));return function(){return n.apply(this,arguments)}}()()}),[c,e,f,t,y]),Object(a.a)(Object(a.a)({},h),{},{isLoading:v})}},1121:function(e,t,n){"use strict";var c,r,a,o=n(5),s=(n(0),n(1124)),i=n.n(s),l=n(1160),b=n.n(l),u=n(9),j=n(2),d=n(6),p=n(1),x=d.e.table(c||(c=Object(u.a)(["\n  margin-bottom: 32px;\n  margin-top: 32px;\n  width: 100%;\n\n  td,\n  th {\n    color: ",";\n    padding: 8px;\n  }\n"])),(function(e){return e.theme.colors.text})),O=d.e.div(r||(r=Object(u.a)(["\n  color: ",";\n  margin-bottom: 16px;\n  margin-top: 16px;\n\n  li {\n    margin-bottom: 8px;\n  }\n"])),(function(e){return e.theme.colors.text})),h=function(e){return Object(p.jsx)(j.db,Object(o.a)({as:"h4",scale:"lg",my:"16px"},e))},f={h1:h,h2:h,h3:h,h4:h,h5:h,h6:h,p:function(e){return Object(p.jsx)(j.Ac,Object(o.a)({as:"p",my:"16px"},e))},table:x,ol:function(e){return Object(p.jsx)(O,Object(o.a)({as:"ol"},e))},ul:function(e){return Object(p.jsx)(O,Object(o.a)({as:"ul"},e))},pre:d.e.pre(a||(a=Object(u.a)(["\n  color: ",";\n  margin-bottom: 16px;\n  margin-top: 16px;\n  max-width: 100%;\n  overflow-x: auto;\n"])),(function(e){return e.theme.colors.text}))};t.a=function(e){return Object(p.jsx)(i.a,Object(o.a)({remarkPlugins:[b.a],components:f},e))}},1602:function(e,t,n){"use strict";n.r(t);var c,r,a,o=n(14),s=n(3),i=n.n(s),l=n(5),b=n(10),u=n(8),j=n(0),d=n(2),p=n(91),x=n(117),O=n(49),h=n(470),f=n.n(h),m=n(477),g=n.n(m),v=n(123),y=n(40),k=n(118),w=n(22),A=n(38),B=n(193),C=n(185),T=n(13),S=n(319),D=n(581),P=n(121),E=n(1121),I=n(237),z=n(982),L=n(1075),Y=n(9),F=n(6),M=n(1),H=F.e.label(c||(c=Object(Y.a)(["\n  color: ",";\n  display: block;\n  font-weight: 600;\n  margin-bottom: 8px;\n"])),(function(e){return e.theme.colors.text})),V=Object(F.e)(H)(r||(r=Object(Y.a)(["\n  font-size: 20px;\n"]))),N=Object(F.e)(H)(a||(a=Object(Y.a)(["\n  font-size: 12px;\n  text-transform: uppercase;\n"]))),q=function(e){var t=e.children;return Object(M.jsx)(d.Ac,{color:"failure",mb:"4px",children:t})},K=function(e){var t=e.errors;return Object(M.jsx)(d.p,{mt:"8px",children:t.map((function(e){return Object(M.jsx)(q,{children:e},e)}))})},J=n(32),R=n(290),W=n.n(R),U=n(60),Q=["onRemove","onTextInput"],_=function(e){var t=e.onRemove,n=e.onTextInput,c=Object(U.a)(e,Q),r=Object(j.useState)(!1),a=Object(u.a)(r,2),o=a[0],s=a[1],i=Object(j.useState)(!1),b=Object(u.a)(i,2),p=b[0],x=b[1];return Object(M.jsxs)(d.p,{position:"relative",mb:"16px",children:[Object(M.jsx)(d.kb,Object(l.a)(Object(l.a)({},c),{},{onChange:function(e){var t=e.currentTarget.value;s(p&&0===t.length),x(!0),n(t)},isWarning:o})),t&&Object(M.jsx)(d.p,{position:"absolute",right:"8px",top:"0px",zIndex:30,children:Object(M.jsx)(d.gb,{variant:"text",onClick:t,children:Object(M.jsx)(d.P,{})})})]})},G=function(){return{id:W()(),value:""}},X=function(e){var t=e.choices,n=e.onChange,c=Object(T.b)().t,r=t.filter((function(e){return e.value.length>0})).length>=2;return Object(M.jsxs)(d.z,{children:[Object(M.jsx)(d.C,{children:Object(M.jsx)(d.db,{as:"h3",scale:"md",children:c("Choices")})}),Object(M.jsxs)(d.A,{children:[t.map((function(e,r){var a=e.id,o=e.value;return Object(M.jsx)(_,{scale:"lg",onTextInput:function(e){var c=Object(J.a)(t),r=c.findIndex((function(e){return e.id===a}));c[r].value=e,n(c)},placeholder:c("Input choice text"),value:o,onRemove:r>1?function(){n(t.filter((function(e){return e.id!==a})))}:void 0},a)})),Object(M.jsx)(d.u,{type:"button",onClick:function(){n([].concat(Object(J.a)(t),[G()]))},disabled:!r,children:c("Add Choice")})]})]})},Z=n(442),$=n(944),ee=n(893),te=function(e,t){if(!Object(Z.default)(e)||!Object(Z.default)(t))return null;var n=Object($.default)(e,"yyyy-MM-dd"),c=Object($.default)(t,"HH:mm:ss");return Object(ee.default)("".concat(n,"T").concat(c)).getTime()/1e3},ne=n(986),ce=n(101),re=n(1077),ae=n(1076),oe=function(e){var t=e.block,n=e.onDismiss,c=Object(T.b)().t,r=Object(j.useState)(!0),a=Object(u.a)(r,2),o=a[0],s=a[1],i=Object(re.a)(t,o),l=i.isLoading,b=i.total,p=i.cakeBalance,x=i.cakeVaultBalance,O=i.cakePoolBalance,h=i.poolsBalance,f=i.cakeBnbLpBalance,m=Object(ce.a)().theme;return Object(M.jsx)(d.Db,{title:c("Voting Power"),onDismiss:function(){s(!1),n()},headerBackground:m.colors.gradients.cardHeader,children:Object(M.jsx)(d.p,{mb:"24px",width:"320px",children:l?Object(M.jsx)(d.bb,{height:"450px",alignItems:"center",justifyContent:"center",children:Object(M.jsx)(d.ic,{size:80})}):Object(M.jsxs)(M.Fragment,{children:[Object(M.jsx)(ae.a,{total:b,cakeBalance:p,cakeVaultBalance:x,cakePoolBalance:O,poolsBalance:h,cakeBnbLpBalance:f}),Object(M.jsx)(d.u,{variant:"secondary",onClick:n,width:"100%",mt:"16px",children:c("Close")})]})})})},se=Object(j.lazy)((function(){return Promise.all([n.e(8),n.e(31)]).then(n.bind(null,1584))}));t.default=function(){var e=Object(j.useState)({name:"",body:"",choices:f()(2).map(G),startDate:null,startTime:null,endDate:null,endTime:null,snapshot:0}),t=Object(u.a)(e,2),n=t[0],c=t[1],r=Object(j.useState)(!1),a=Object(u.a)(r,2),s=a[0],h=a[1],m=Object(j.useState)({}),Y=Object(u.a)(m,2),F=Y[0],H=Y[1],q=Object(T.b)().t,R=Object(O.c)().account,W=Object(v.b)(),U=Object(p.g)().push,Q=Object(w.a)().library,_=Object(k.a)(),$=_.toastSuccess,ee=_.toastError,ce=Object(d.dd)(Object(M.jsx)(oe,{block:n.snapshot})),re=Object(u.a)(ce,1)[0],ae=n.name,ie=n.body,le=n.choices,be=n.startDate,ue=n.startTime,je=n.endDate,de=n.endTime,pe=n.snapshot,xe=function(e,t){var n=e.name,c=e.body,r=e.choices,a=e.startDate,o=e.startTime,s=e.endDate,i=e.endTime,l=e.snapshot,b={};n||(b.name=[t("%field% is required",{field:"Title"})]),c||(b.body=[t("%field% is required",{field:"Body"})]),r.length<2&&(b.choices=[t("Please create a minimum of %num% choices",{num:2})]);var u=r.some((function(e){return!e.value}));2===r.length&&u&&(b.choices=Array.isArray(b.choices)?[].concat(Object(J.a)(b.choices),[t("Choices must not be empty")]):b.choices=[t("Choices must not be empty")]),Object(Z.default)(a)||(b.startDate=[t("Please select a valid date")]),Object(Z.default)(o)||(b.startTime=[t("Please select a valid time")]),Object(Z.default)(s)||(b.endDate=[t("Please select a valid date")]),Object(Z.default)(i)||(b.endTime=[t("Please select a valid time")]);var j=te(a,o);return te(s,i)<j&&(b.endDate=Array.isArray(b.endDate)?[].concat(Object(J.a)(b.endDate),[t("End date must be after the start date")]):b.endDate=[t("End date must be after the start date")]),0===l&&(b.snapshot=[t("Invalid snapshot")]),b}(n,q),Oe=function(){var e=Object(b.a)(i.a.mark((function e(t){var n,c,r,a;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),e.prev=1,h(!0),n=JSON.stringify(Object(l.a)(Object(l.a)({},Object(z.e)()),{},{type:y.i.PROPOSAL,payload:{name:ae,body:ie,snapshot:pe,start:te(be,ue),end:te(je,de),choices:le.filter((function(e){return e.value})).map((function(e){return e.value})),metadata:Object(z.d)(),type:"single-choice"}})),e.next=6,Object(C.c)(Q,R,n);case 6:if(!(c=e.sent)){e.next=16;break}return r={address:R,msg:n,sig:c},e.next=11,Object(z.i)(r);case 11:a=e.sent,U("/voting/proposal/".concat(a.ipfsHash)),$(q("Proposal created!")),e.next=17;break;case 16:ee(q("Error"),q("Unable to sign payload"));case 17:e.next=24;break;case 19:e.prev=19,e.t0=e.catch(1),ee(q("Error"),(null===e.t0||void 0===e.t0?void 0:e.t0.message)||(null===e.t0||void 0===e.t0?void 0:e.t0.error)),console.error(e.t0),h(!1);case 24:case"end":return e.stop()}}),e,null,[[1,19]])})));return function(t){return e.apply(this,arguments)}}(),he=function(e,t){c((function(n){return Object(l.a)(Object(l.a)({},n),{},Object(o.a)({},e,t))})),H((function(t){return Object(l.a)(Object(l.a)({},t),{},Object(o.a)({},e,!0))}))},fe=function(e){return function(t){he(e,t)}},me=Object(j.useMemo)((function(){return{hideIcons:R&&ne.a.includes(R.toLowerCase())?[]:["guide","fullscreen","preview","side-by-side","image"]}}),[R]);return Object(j.useEffect)((function(){W>0&&c((function(e){return Object(l.a)(Object(l.a)({},e),{},{snapshot:W})}))}),[W,c]),Object(M.jsxs)(S.a,{py:"40px",children:[Object(M.jsx)(I.a,{}),Object(M.jsx)(d.p,{mb:"48px",children:Object(M.jsxs)(d.q,{children:[Object(M.jsx)(x.a,{to:"/",children:q("Home")}),Object(M.jsx)(x.a,{to:"/voting",children:q("Voting")}),Object(M.jsx)(d.Ac,{children:q("Make a Proposal")})]})}),Object(M.jsx)("form",{onSubmit:Oe,children:Object(M.jsxs)(L.a,{children:[Object(M.jsxs)(d.p,{children:[Object(M.jsxs)(d.p,{mb:"24px",children:[Object(M.jsx)(V,{htmlFor:"name",children:q("Title")}),Object(M.jsx)(d.kb,{id:"name",name:"name",value:ae,scale:"lg",onChange:function(e){var t=e.currentTarget,n=t.name,c=t.value;he(n,c)},required:!0}),xe.name&&F.name&&Object(M.jsx)(K,{errors:xe.name})]}),Object(M.jsxs)(d.p,{mb:"24px",children:[Object(M.jsx)(V,{htmlFor:"body",children:q("Content")}),Object(M.jsx)(d.Ac,{color:"textSubtle",mb:"8px",children:q("Tip: write in Markdown!")}),Object(M.jsx)(se,{id:"body",name:"body",onTextChange:function(e){he("body",e)},value:ie,options:me,required:!0}),xe.body&&F.body&&Object(M.jsx)(K,{errors:xe.body})]}),ie&&Object(M.jsx)(d.p,{mb:"24px",children:Object(M.jsxs)(d.z,{children:[Object(M.jsx)(d.C,{children:Object(M.jsx)(d.db,{as:"h3",scale:"md",children:q("Preview")})}),Object(M.jsx)(d.A,{p:"0",px:"24px",children:Object(M.jsx)(E.a,{children:ie})})]})}),Object(M.jsx)(X,{choices:le,onChange:function(e){he("choices",e)}}),xe.choices&&F.choices&&Object(M.jsx)(K,{errors:xe.choices})]}),Object(M.jsx)(d.p,{children:Object(M.jsxs)(d.z,{children:[Object(M.jsx)(d.C,{children:Object(M.jsx)(d.db,{as:"h3",scale:"md",children:q("Actions")})}),Object(M.jsxs)(d.A,{children:[Object(M.jsxs)(d.p,{mb:"24px",children:[Object(M.jsx)(N,{children:q("Start Date")}),Object(M.jsx)(D.a,{name:"startDate",onChange:fe("startDate"),selected:be,placeholderText:"YYYY/MM/DD"}),xe.startDate&&F.startDate&&Object(M.jsx)(K,{errors:xe.startDate})]}),Object(M.jsxs)(d.p,{mb:"24px",children:[Object(M.jsx)(N,{children:q("Start Time")}),Object(M.jsx)(D.c,{name:"startTime",onChange:fe("startTime"),selected:ue,placeholderText:"00:00"}),xe.startTime&&F.startTime&&Object(M.jsx)(K,{errors:xe.startTime})]}),Object(M.jsxs)(d.p,{mb:"24px",children:[Object(M.jsx)(N,{children:q("End Date")}),Object(M.jsx)(D.a,{name:"endDate",onChange:fe("endDate"),selected:je,placeholderText:"YYYY/MM/DD"}),xe.endDate&&F.endDate&&Object(M.jsx)(K,{errors:xe.endDate})]}),Object(M.jsxs)(d.p,{mb:"24px",children:[Object(M.jsx)(N,{children:q("End Time")}),Object(M.jsx)(D.c,{name:"endTime",onChange:fe("endTime"),selected:de,placeholderText:"00:00"}),xe.endTime&&F.endTime&&Object(M.jsx)(K,{errors:xe.endTime})]}),R&&Object(M.jsxs)(d.bb,{alignItems:"center",mb:"8px",children:[Object(M.jsx)(d.Ac,{color:"textSubtle",mr:"16px",children:q("Creator")}),Object(M.jsx)(d.qb,{href:Object(A.e)(R,"address"),children:Object(B.a)(R)})]}),Object(M.jsxs)(d.bb,{alignItems:"center",mb:"16px",children:[Object(M.jsx)(d.Ac,{color:"textSubtle",mr:"16px",children:q("Snapshot")}),Object(M.jsx)(d.qb,{href:Object(A.e)(pe,"block"),children:pe})]}),R?Object(M.jsxs)(M.Fragment,{children:[Object(M.jsx)(d.u,{type:"submit",width:"100%",isLoading:s,endIcon:s?Object(M.jsx)(d.i,{spin:!0,color:"currentColor"}):null,disabled:!g()(xe),mb:"16px",children:q("Publish")}),Object(M.jsxs)(d.Ac,{color:"failure",as:"p",mb:"4px",children:[q("You need at least %count% voting power to publish a proposal.",{count:ne.f})," "]}),Object(M.jsx)(d.u,{scale:"sm",type:"button",variant:"text",onClick:re,p:0,children:q("Check voting power")})]}):Object(M.jsx)(P.a,{width:"100%",type:"button"})]})]})})]})})]})}},982:function(e,t,n){"use strict";n.d(t,"h",(function(){return p})),n.d(t,"c",(function(){return x})),n.d(t,"b",(function(){return O})),n.d(t,"d",(function(){return h})),n.d(t,"e",(function(){return f})),n.d(t,"i",(function(){return m})),n.d(t,"g",(function(){return g})),n.d(t,"a",(function(){return v})),n.d(t,"f",(function(){return y}));var c=n(14),r=n(32),a=n(5),o=n(3),s=n.n(o),i=n(10),l=n(58),b=n(34),u=n(40),j=n(119),d=n(986),p=function(e){return d.a.includes(e.author.toLowerCase())},x=function(e,t){switch(t){case u.h.COMMUNITY:return e.filter((function(e){return!p(e)}));case u.h.CORE:return e.filter((function(e){return p(e)}));case u.h.ALL:default:return e}},O=function(e,t){return e.filter((function(e){return e.state===t}))},h=function(){return{plugins:{},network:56,strategies:[{name:"cake",params:{symbol:"CAKE",address:b.a.cake.address,decimals:18}}]}},f=function(){return{version:d.e,timestamp:(Date.now()/1e3).toFixed(),space:d.c}},m=function(){var e=Object(i.a)(s.a.mark((function e(t){var n,c,r;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch(l.k,{method:"post",headers:{Accept:"application/json","Content-Type":"application/json"},body:JSON.stringify(t)});case 2:if((n=e.sent).ok){e.next=8;break}return e.next=6,n.json();case 6:throw c=e.sent,new Error(null===c||void 0===c?void 0:c.error_description);case 8:return e.next=10,n.json();case 10:return r=e.sent,e.abrupt("return",r);case 12:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),g=function(){var e=Object(i.a)(s.a.mark((function e(t,n,c){var r,a,o;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(e.t0=c,e.t0){e.next=5;break}return e.next=4,j.a.getBlockNumber();case 4:e.t0=e.sent;case 5:return r=e.t0,e.next=8,fetch("".concat(l.l,"/power"),{method:"post",headers:{"Content-Type":"application/json"},body:JSON.stringify({address:t,block:r,poolAddresses:n})});case 8:return a=e.sent,e.next=11,a.json();case 11:return o=e.sent,e.abrupt("return",o.data);case 13:case"end":return e.stop()}}),e)})));return function(t,n,c){return e.apply(this,arguments)}}(),v=function(e){return e.reduce((function(e,t){var n=t.proposal.choices[t.choice-1];return Object(a.a)(Object(a.a)({},e),{},Object(c.a)({},n,e[n]?[].concat(Object(r.a)(e[n]),[t]):[t]))}),{})},y=function(e){return e.reduce((function(e,t){var n,c=parseFloat(null===(n=t.metadata)||void 0===n?void 0:n.votingPower);return c||(c=0),e+c}),0)}},986:function(e,t,n){"use strict";n.d(t,"d",(function(){return c})),n.d(t,"a",(function(){return r})),n.d(t,"b",(function(){return a})),n.d(t,"e",(function(){return o})),n.d(t,"c",(function(){return s})),n.d(t,"f",(function(){return i}));var c=10,r=["0x842B508681eE336E74600974B4623B709477d29D","0x977e0c1005dff8749f8cac22f4df0bd5f013d1a7","0x6eaf1b33b8672c5dc40ab8f4ba3a0111723126c7"].map((function(e){return e.toLowerCase()})),a="https://gateway.ipfs.io/ipfs",o="0.1.3",s="cake.eth",i=10}}]);
//# sourceMappingURL=16.038f4f23.chunk.js.map