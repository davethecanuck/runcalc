(this.webpackJsonpruncalc=this.webpackJsonpruncalc||[]).push([[0],{101:function(e,t,a){"use strict";a.r(t);var n=a(0),i=a(14),r=a.n(i),c=a(10),s=a(74),o=a(164),l=a(165),u=a(5),d=a(161),h=a(162),j=a(163),b=a(136),m=a(102),p=a(77),f=a(2),g=Object(b.a)((function(e){return{root:{"& .MuiPaper-root":{backgroundColor:"#fdfdff"}},pageHeader:{padding:e.spacing(0),display:"flex",marginBottom:e.spacing(0),justifyContent:"center",alignItems:"center"},pageTitle:{padding:e.spacing(.5),"& .MuiTypography-subtitle2":{opacity:.6}}}}));function O(e){var t=g(),a=e.title,n=e.icon;return Object(f.jsx)("div",{className:t.root,children:Object(f.jsx)(m.a,{elevation:1,square:!0,children:Object(f.jsxs)("div",{className:t.pageHeader,children:[n,Object(f.jsx)("div",{className:t.pageTitle,children:Object(f.jsx)(p.a,{variant:"h6",component:"div",children:a})})]})})})}function v(e){var t=e.pages,a=e.currentPage,n=x(),i=null,r=null;return t.forEach((function(e){e.title===a&&(i=e.page,r=Object(f.jsx)(O,{title:e.longTitle,icon:e.icon}))})),Object(f.jsxs)("div",{children:[r,Object(f.jsx)("div",{className:n.pageContent,children:i})]})}var x=Object(b.a)((function(e){return{pageContent:{maxWidth:"50em",margin:"auto"},pageContentHead:{margin:e.spacing(1),marginBottom:e.spacing(1),padding:e.spacing(1)},pageContentMain:{margin:e.spacing(1),marginBottom:e.spacing(16),padding:e.spacing(1)},fabButton:{left:"auto",right:e.spacing(1),position:"fixed",bottom:e.spacing(9),top:"auto"}}})),y=a(140),w=a(141),S=a(142),C=a(103),k=Object(b.a)((function(e){return{root:{backgroundColor:"#fff",justifyContent:"space-evenly",alignItems:"center",top:"auto",bottom:0},iconButtonLabel:{display:"flex",flexDirection:"column",fontSize:"medium"}}})),P=function(e){var t=k(e),a=e.pages,n=e.setCurrentPage;return Object(f.jsx)(y.a,{position:"fixed",className:t.root,children:Object(f.jsx)(w.a,{children:Object(f.jsx)(S.a,{container:!0,alignItems:"center",children:a.map((function(e){return Object(f.jsx)(S.a,{item:!0,children:Object(f.jsxs)(C.a,{classes:{label:t.iconButtonLabel},onClick:function(){n(e.title)},children:[e.icon,Object(f.jsxs)("label",{children:[" ",e.title," "]})]})})}))})})})};var T=a(157),I=a(159),N=a(155),A=a(156),M=a(158),E=a(160),R=a(172),B=a(151),H=a(152),F=a(13),D=a(3),J=a(174);var V=a(145),W=a(146),z=a(176),q=a(149),G=a(169);var L=a(166),$=a(177),_=a(148);var U=function(e){var t=e.name,a=e.label,n=e.value,i=e.error,r=void 0===i?null:i,c=e.onChange,s=e.options;return Object(f.jsxs)(V.a,Object(F.a)(Object(F.a)({variant:"outlined"},r&&{error:!0}),{},{children:[Object(f.jsxs)(W.a,{children:[" ",a," "]}),Object(f.jsxs)(L.a,{label:a,name:t,value:n,onChange:c,children:[Object(f.jsx)($.a,{value:"",children:" None "}),s.map((function(e){return Object(f.jsx)($.a,{value:e.id,children:e.title},e.id)}))]}),r&&Object(f.jsxs)(_.a,{children:[" ",r," "]})]}))},Z=a(170);var K=function(e){var t=e.name,a=e.label,n=e.value,i=e.onChange;return Object(f.jsx)(V.a,{children:Object(f.jsx)(q.a,{label:a,control:Object(f.jsx)(Z.a,{name:t,checked:n,onChange:function(e){return i(function(e,t){return{target:{name:e,value:t}}}(t,e.target.checked))},color:"primary"})})})},Q=a(150),X=Object(b.a)((function(e){return{root:{margin:e.spacing(.5)},label:{textTransform:"none"}}}));var Y=function(e){var t=e.text,a=e.size,n=e.color,i=e.variant,r=e.onClick,c=Object(D.a)(e,["text","size","color","variant","onClick"]),s=X();return Object(f.jsx)(Q.a,Object(F.a)(Object(F.a)({variant:i||"contained",size:a||"large",color:n||"primary",onClick:r},c),{},{classes:{root:s.root,label:s.label},children:t}))},ee=Object(b.a)((function(e){return{root:{minWidth:0,margin:e.spacing(.5)},secondary:{backgroundColor:e.palette.secondary.light,"& .MuiButton-label":{color:e.palette.secondary.main}},primary:{backgroundColor:e.palette.primary.light,"& .MuiButton-label":{color:e.palette.primary.main}}}}));var te={Input:function(e){var t=e.name,a=e.label,n=e.value,i=e.error,r=void 0===i?null:i,c=e.onChange,s=Object(D.a)(e,["name","label","value","error","onChange"]);return Object(f.jsx)(J.a,Object(F.a)(Object(F.a)({variant:"outlined",name:t,label:a,value:n,onChange:c},s),r&&{error:!0,helperText:r}))},RadioGroup:function(e){var t=e.name,a=e.label,n=e.value,i=e.onChange,r=e.items;return Object(f.jsxs)(V.a,{children:[Object(f.jsxs)(W.a,{children:[" ",a," "]}),Object(f.jsx)(z.a,{row:!0,name:t,value:n,onChange:i,children:r.map((function(e){return Object(f.jsx)(q.a,{label:e.title,value:e.id,control:Object(f.jsx)(G.a,{})},e.id)}))})]})},Select:U,Checkbox:K,Button:Y,ActionButton:function(e){var t=e.color,a=e.children,n=e.onClick,i=ee();return Object(f.jsx)(Q.a,{onClick:n,className:"".concat(i.root," ").concat(i[t]),children:a})}},ae=a(58),ne=a.n(ae),ie=Object(b.a)((function(e){return{dialogWrapper:{padding:e.spacing(2),position:"absolute",top:e.spacing(5)},dialogTitle:{paddingRight:0}}}));var re=function(e){var t=e.title,a=e.children,n=e.openPopup,i=e.setOpenPopup,r=ie();return Object(f.jsxs)(R.a,{open:n,maxWidth:"md",classes:{paper:r.dialogWrapper},children:[Object(f.jsx)(B.a,{className:r.dialogTitle,children:Object(f.jsxs)("div",{style:{display:"flex"},children:[Object(f.jsx)(p.a,{variant:"h6",component:"div",style:{flexGrow:1},children:t}),Object(f.jsx)(te.ActionButton,{color:"secondary",onClick:function(){return i(!1)},children:Object(f.jsx)(ne.a,{})})]})}),Object(f.jsx)(H.a,{dividers:!0,children:a})]})},ce=a(173),se=a(167),oe=Object(b.a)((function(e){return{root:{top:e.spacing(9)}}}));var le=function(e){var t=e.notify,a=e.setNotify,n=oe();return Object(f.jsx)(ce.a,{className:n.root,open:t.isOpen,autoHideDuration:3e3,anchorOrigin:{vertical:"top",horizontal:"right"},onClose:function(e,n){"clickaway"!==n&&a(Object(F.a)(Object(F.a)({},t),{},{isOpen:!1}))},children:Object(f.jsx)(se.a,{severity:t.type,children:t.message})})},ue=a(11);function de(e){var t=arguments.length>1&&void 0!==arguments[1]&&arguments[1],a=arguments.length>2?arguments[2]:void 0,i=Object(n.useState)(e),r=Object(c.a)(i,2),s=r[0],o=r[1],l=Object(n.useState)({}),u=Object(c.a)(l,2),d=u[0],h=u[1],j=function(e){var n=e.target,i=n.name,r=n.value;o(Object(F.a)(Object(F.a)({},s),{},Object(ue.a)({},i,r))),t&&a(Object(ue.a)({},i,r))},b=function(){o(e),h({})};return{values:s,setValues:o,errors:d,setErrors:h,handleInputChange:j,resetForm:b}}var he=Object(b.a)((function(e){return{root:{"& .MuiFormControl-root":{width:"80%",margin:e.spacing(1)}}}}));function je(e){var t=he(),a=e.children,n=Object(D.a)(e,["children"]);return Object(f.jsx)("form",Object(F.a)(Object(F.a)({className:t.root,autoComplete:"off"},n),{},{children:a}))}var be=[{name:"800m",distance:800},{name:"1km",distance:1e3},{name:"1500m",distance:1500},{name:"1600m",distance:1600},{name:"1 mile",distance:1609},{name:"3000m",distance:3e3},{name:"2 mile",distance:3219},{name:"5km",distance:5e3},{name:"8km",distance:8e3},{name:"5 mile",distance:8047},{name:"10km",distance:1e4},{name:"15km",distance:15e3},{name:"20km",distance:2e4},{name:"13.1 mile",distance:21097},{name:"26.2 mile",distance:42195},{name:"50km",distance:5e4}],me=be.map((function(e){return{title:e.name,id:e.distance}})),pe=be.reduce((function(e,t){return e[t.distance]=t.name,e}),{});be.reduce((function(e,t){return e[t.name]=t.distance,e}),{});var fe=a(54),ge=a(30),Oe=function(){function e(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};Object(fe.a)(this,e),Object.assign(this,t),this.recalcFields()}return Object(ge.a)(e,[{key:"recalcFields",value:function(){if(this.altitude|=0,null!=this.distance&&(this.distanceName=(t=this.distance,pe[t]),null==this.timeParts&&(this.timeParts=this.getTimeParts()),null!=this.timeParts)){for(;this.timeParts.length<3;)this.timeParts.unshift(0);if(null!=this.distance&&0===this.timeParts[0]){var e=this.getTime();this.distance/e>15&&(this.timeParts[0]=this.timeParts[1],this.timeParts[1]=this.timeParts[2],this.timeParts[2]=0)}this.time=this.getTime(),this.hhmmss=this.getHHMMSS()}var t}},{key:"getTime",value:function(){return null!=this.timeParts?3600*this.timeParts[0]+60*this.timeParts[1]+this.timeParts[2]:null!=this.time?this.time:null}},{key:"getTimeParts",value:function(){return null!=this.timeParts?this.timeParts:null!=this.time?[Math.floor(this.time/3600),Math.floor(this.time%3600/60),Math.floor(this.time%60)]:null}},{key:"getHHMMSS",value:function(){var e=this.getTime(),t="";if(e){var a=Math.floor(e/3600),n=Math.floor((e-3600*a)/60),i=Math.floor(e-3600*a-60*n);t=a.toString().padStart(2,"0")+":"+n.toString().padStart(2,"0")+":"+i.toString().padStart(2,"0")}return t}},{key:"getPaceString",value:function(){var e="";if(this.distance&&this.time){var t=1609*this.time/this.distance,a=Math.floor(t/60),n=Math.floor(t-60*a);e=a.toString().padStart(2,"0")+":"+n.toString().padStart(2,"0")}return e}},{key:"bestTime",value:function(){return.152*this.distance-19.964+9.098e-7*Math.pow(this.distance,2)-9556e-15*Math.pow(this.distance,3)}},{key:"altitudeFactor",value:function(){var e=this.distance-790;return 1+.00127*(Math.pow(this.altitude,2.15)*Math.pow(e,.25)/1e8)}},{key:"rawGradeFactor",value:function(){return this.time/this.bestTime()}},{key:"predictTime",value:function(e){e.time=e.bestTime()*this.rawGradeFactor()/this.altitudeFactor();var t=e.time*e.altitudeFactor(),a=e.distance/this.distance;return a>1&&(a=1/a),[t,a]}}]),e}(),ve={id:{pattern:RegExp(/(.*)/),help:"",initVal:0},distance:{pattern:RegExp(/^\s*(\d+)\s*$/),help:"Select a distance",initVal:""},hhmmss:{pattern:RegExp(/^\s*(\d+):?([0-5]\d{1}?)(:([0-5]\d{1}))?\s*$/),help:"hh:mm:ss or hh:mm or mm:ss",initVal:""},altitude:{pattern:RegExp(/\s*(\d+)\s*$/),help:"Race altitude (ft)",initVal:0}},xe={};Object.keys(ve).forEach((function(e){xe[e]=ve[e].initVal}));var ye=function(e){var t=e.addOrEdit,a=e.recordForEdit,i=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:c,t=Object(F.a)({},o);return Object.keys(e).forEach((function(a){var n=ve[a];n&&(t[a]=n.pattern.test(e[a])?"":n.help)})),l(Object(F.a)({},t)),e===c&&Object.values(t).every((function(e){return""===e}))},r=de(xe,!0,i),c=r.values,s=r.setValues,o=r.errors,l=r.setErrors,u=r.handleInputChange,d=r.resetForm;return Object(n.useEffect)((function(){null!=a&&s(Object(F.a)({},a))}),[a]),Object(f.jsx)(je,{onSubmit:function(e){if(e.preventDefault(),i()){var a=function(){var e=ve.hhmmss.pattern.exec(c.hhmmss),t=[];return t.push(parseInt(e[1])),t.push(parseInt(e[2])),null!=e[4]&&t.push(parseInt(e[4])),new Oe({id:c.id,distance:parseInt(c.distance),altitude:parseInt(c.altitude),timeParts:t})}();t(a,d)}},children:Object(f.jsx)(S.a,{container:!0,children:Object(f.jsxs)(S.a,{item:!0,xs:12,children:[Object(f.jsx)(te.Select,{label:"Distance",name:"distance",value:c.distance,onChange:u,options:me,error:o.distance}),Object(f.jsx)(te.Input,{label:"Finish Time",name:"hhmmss",onChange:u,value:c.hhmmss,error:o.hhmmss}),Object(f.jsx)(te.Input,{label:"Altitude",name:"altitude",type:"number",onChange:u,value:c.altitude,error:o.altitude}),Object(f.jsxs)("div",{children:[Object(f.jsx)(te.Button,{text:"Save",type:"submit"}),Object(f.jsx)(te.Button,{text:"Reset",color:"default",onClick:d})]})]})})})},we=a(153),Se=a(154),Ce=a(178),ke=a(171),Pe=Object(b.a)((function(e){return{table:{marginTop:e.spacing(1),"& thead th":{fontWeight:"600",color:e.palette.primary.main,backgroundColor:e.palette.primary.light,textAlign:"left",paddingLeft:e.spacing(1)},"& tbody td":{fontWeight:"400",padding:e.spacing(.5),paddingLeft:e.spacing(1),textAlign:"left"},"& tbody tr:hover":{backgroundColor:"#fffbf2",cursor:"pointer"}}}}));var Te=function(e,t,a){var i=Pe(),r=[5,10,25],s=Object(n.useState)(0),o=Object(c.a)(s,2),l=o[0],u=o[1],d=Object(n.useState)(r[l]),h=Object(c.a)(d,2),j=h[0],b=h[1],m=Object(n.useState)(),p=Object(c.a)(m,2),g=p[0],O=p[1],v=Object(n.useState)(),x=Object(c.a)(v,2),y=x[0],w=x[1],S=function(e,t){u(t)},C=function(e){b(parseInt(e.target.value,10)),u(0)};function k(e,t,a){return t[a]<e[a]?-1:t[a]>e[a]?1:0}return{TblHead:function(){return Object(f.jsx)(Se.a,{children:Object(f.jsx)(N.a,{children:t.map((function(e){return Object(f.jsx)(A.a,{sortDirection:e.id===y&&g,children:e.disableSort?e.label:Object(f.jsx)(Ce.a,{active:e.id===y,direction:e.id===y?g:"asc",onClick:function(){var t;t=e.id,O(y===t&&"asc"===g?"desc":"asc"),w(t)},children:e.label})},e.id)}))})})},TblContainer:function(e){return Object(f.jsx)(we.a,{className:i.table,children:e.children})},TblPagination:function(){return Object(f.jsx)(ke.a,{component:"div",page:l,rowsPerPageOptions:r,rowsPerPage:j,count:e.length,onChangePage:S,onChangeRowsPerPage:C})},recordsAfterPagingAndSorting:function(){return function(e,t){var a=e.map((function(e,t){return[e,t]}));return a.sort((function(e,a){var n=t(e[0],a[0]);return 0!==n?n:e[1]-a[1]})),a.map((function(e){return e[0]}))}(a.fn(e),function(e,t){return"desc"===e?function(e,a){return k(e,a,t)}:function(e,a){return-k(e,a,t)}}(g,y)).slice(l*j,(l+1)*j)}}},Ie="pastRaces",Ne="id";function Ae(){var e=localStorage.getItem(Ie);null!=e&&0!==e.length||(e=JSON.stringify([]),localStorage.setItem(Ie,e));var t=JSON.parse(e),a=[];return t.forEach((function(e){a.push(new Oe(e))})),a}function Me(e){var t=Ae();e[Ne]=Date.now(),t.push(e),localStorage.setItem(Ie,JSON.stringify(t))}var Ee=function(e){var t=x(),a=Object(n.useState)(Ae()),i=Object(c.a)(a,2),r=i[0],s=i[1],o=Object(n.useState)(null),l=Object(c.a)(o,2),u=l[0],d=l[1],h=Object(n.useState)({fn:function(e){return e}}),j=Object(c.a)(h,2),b=j[0],p=(j[1],Object(n.useState)({isOpen:!1,message:"",type:""})),g=Object(c.a)(p,2),O=g[0],v=g[1],y=Object(n.useState)(0===r.length),w=Object(c.a)(y,2),S=w[0],C=w[1],k=Te(r,[{id:"distance",label:"Distance",disableSort:!0},{id:"time",label:"Time",disableSort:!0},{id:"altitude",label:"Altitude",disableSort:!0},{disableSort:!0}],b),P=k.TblContainer,R=k.TblHead,B=(k.TblPagination,k.recordsAfterPagingAndSorting,function(e){!function(e){var t=Ae();t=t.filter((function(t){return t.id!==e})),localStorage.setItem(Ie,JSON.stringify(t))}(e),s(Ae()),v({isOpen:!0,type:"error",message:"Deleted Race!"})});return Object(f.jsxs)("div",{children:[function(e,t){return Object(f.jsxs)(T.a,{variant:"extended","aria-label":"Add Race",color:"secondary",className:e.fabButton,onClick:function(){t(!0)},children:[Object(f.jsx)(M.a,{}),"Add Race"]})}(t,C),Object(f.jsx)(m.a,{className:t.pageContentMain,children:Object(f.jsxs)(P,{children:[Object(f.jsx)(R,{}),Object(f.jsx)(I.a,{children:r.map((function(e){return Object(f.jsxs)(N.a,{children:[Object(f.jsxs)(A.a,{children:[" ",e.distanceName," "]}),Object(f.jsxs)(A.a,{children:[" ",e.hhmmss," "]}),Object(f.jsxs)(A.a,{children:[" ",e.altitude," "]}),Object(f.jsxs)(A.a,{children:[Object(f.jsx)(te.ActionButton,{color:"primary",fontSize:"small",onClick:function(){!function(e){d(e),C(!0)}(e)},children:Object(f.jsx)(E.a,{})}),Object(f.jsx)(te.ActionButton,{color:"secondary",fontSize:"small",onClick:function(){B(e.id)},children:Object(f.jsx)(ne.a,{})})]})]},e.id)}))})]})}),Object(f.jsx)(re,{title:"Past Race",openPopup:S,setOpenPopup:C,children:Object(f.jsx)(ye,{addOrEdit:function(e,t){null==e.id||0===e.id?Me(e):function(e){var t=Ae(),a=t.findIndex((function(t){return t.id===e.id}));t[a]=Object(F.a)({},e),localStorage.setItem(Ie,JSON.stringify(t))}(e),d(null),t(),C(!1),s(Ae()),v({isOpen:!0,type:"success",message:"Saved Successfully!"})},recordForEdit:u})}),Object(f.jsx)(le,{notify:O,setNotify:v})]})};function Re(e){var t=[];return be.forEach((function(a){var n=0,i=0;if(Ae().forEach((function(t){var r=t.predictTime(new Oe({distance:a.distance,altitude:e.altitude})),s=Object(c.a)(r,2),o=s[0],l=s[1];n+=o*l,i+=l})),i>0){var r=new Oe({time:n/i,distance:a.distance,altitude:e.altitude});t.push(r)}})),t}var Be={altitude:{pattern:RegExp(/\s*(\d+)\s*$/),help:"Race altitude (ft)",initVal:0}},He={};Object.keys(Be).forEach((function(e){He[e]=Be[e].initVal}));var Fe=function(e){var t=e.updateScenario,a=e.scenario,i=de(He,!0,(function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:r,a=Object(F.a)({},s);Object.keys(e).forEach((function(t){var n=Be[t];n&&(a[t]=n.pattern.test(e[t])?"":n.help)})),o(Object(F.a)({},a));var n=Object.values(a).every((function(e){return""===e}));return n&&t({altitude:parseInt(e.altitude)}),e===r&&n})),r=i.values,c=i.setValues,s=i.errors,o=i.setErrors,l=i.handleInputChange;return i.resetForm,Object(n.useEffect)((function(){null!=a&&c(Object(F.a)({},a))}),[a]),Object(f.jsx)(je,{onSubmit:function(e){e.preventDefault()},children:Object(f.jsx)(S.a,{container:!0,children:Object(f.jsx)(S.a,{item:!0,xs:4,children:Object(f.jsx)(te.Input,{label:"Altitude",name:"altitude",type:"number",onChange:l,value:r.altitude,error:s.altitude})})})})},De="scenario";function Je(){var e=localStorage.getItem(De);return null==e&&(e=JSON.stringify({altitude:0}),localStorage.setItem(De,e)),JSON.parse(e)}var Ve=function(e){var t=x(),a=Object(n.useState)({fn:function(e){return e}}),i=Object(c.a)(a,2),r=i[0],s=(i[1],Object(n.useState)(Je())),o=Object(c.a)(s,2),l=o[0],u=o[1],d=Object(n.useState)(Re(l)),h=Object(c.a)(d,2),j=h[0],b=h[1],g=Te(j,[{id:"distance",label:"Distance",disableSort:!0},{id:"time",label:"Time",disableSort:!0},{id:"pace",label:"Pace",disableSort:!0}],r),O=g.TblContainer,v=g.TblHead;return g.TblPagination,g.recordsAfterPagingAndSorting,Object(f.jsxs)("div",{children:[Object(f.jsxs)(m.a,{className:t.pageContentHead,children:[Object(f.jsx)(p.a,{variant:"h6",component:"div",style:{flexGrow:1},children:"Scenario"}),Object(f.jsx)(Fe,{updateScenario:function(e){!function(e){var t=Je();t=Object(F.a)({},e),localStorage.setItem(De,JSON.stringify(t))}(e),u(e),b(Re(e))},scenario:l})]}),Object(f.jsx)(m.a,{className:t.pageContentMain,children:Object(f.jsxs)(O,{children:[Object(f.jsx)(v,{}),Object(f.jsx)(I.a,{children:j.map((function(e){return Object(f.jsxs)(N.a,{children:[Object(f.jsxs)(A.a,{children:[" ",e.distanceName," "]}),Object(f.jsxs)(A.a,{children:[" ",e.hhmmss," "]}),Object(f.jsxs)(A.a,{children:[" ",e.getPaceString()," "]})]},e.id)}))})]})})]})};var We=function(e){var t=x();return Object(f.jsx)("div",{children:Object(f.jsxs)(m.a,{className:t.pageContentMain,children:[Object(f.jsx)("h2",{children:" What does this do? "}),Object(f.jsx)("p",{children:"This application uses your running race history to predict your time in upcoming races."}),Object(f.jsx)("h2",{children:" How do I use this? "}),Object(f.jsx)("p",{children:"Use the 'History' section to enter in a few past races which you want to use to predict future races at various distances. Then go to the 'Predict' section to see your expected race times for various distances."}),Object(f.jsx)("h2",{children:" How does this work? "}),Object(f.jsxs)("p",{children:["A regression of",Object(f.jsx)("a",{href:"https://www.worldathletics.org/records/by-category/world-records",target:"_blank",children:" world records "})," by men and women for all major events from 400m to marathon was done to create a formula for predicting race times for a given distance based on a time for a different distance. The resultant formula is very accurate for predicting men's world records for all distances given a single women's distance record (and vice versa) when a male-<female age grade equivalent of about 90.9% is applied. For slower runners like myself (around 68% age grade) the predictions match up as well."]}),Object(f.jsxs)("p",{children:["A similar regression was done for altitude adjustements based on raw data from the NCAA altitude adjustment ",Object(f.jsx)("a",{href:"https://www.ustfccca.org/assets/ncaa-info/2009-outdoor-alt-adjust.pdf",target:"_blank",children:" tables"}),". The formula has been tweaked to account for physiological effects where below 800m you might run faster at altitude (less air resistance, and you can run with a certain amount oxygen debt). Another interesting finding from the NCAA tables is that the longer you run at altitude the larger the effect of a given altitude. For example, if you run 3% slower at a given altitude in the 5000m, you might run 4% slower in the 10000m. A consequence of this is that a more accurate altitude table might be based on time rather than distance. This gets a bit tricky as time now becomes both the input and output, but it would not be hard to adjust the algorithm to do this. It does however produce somewhat different results than the standard NCAA tables (e.g. Adjustment for D3 woman will be greater than that for a D1 male, but NCAA uses the same % adjustment for both)."]}),Object(f.jsx)("p",{children:"Roughly, the formula takes the square of the altitude times the square root of the distance as input, and applies this to a 2nd-degree formula which was derived via regression."}),Object(f.jsx)("p",{children:"The app lets you enter multiple races and it uses a weighted average of the predictions made from each race to give you a final result. The weighting is currently done such that races closer to the prediction distance are weighted higher. For example, your half marathon time will be weighted higher than your 800m time for predicting your marathon time, but the 800m time will be weighted higher when predicting your 1500m time."}),Object(f.jsx)("h2",{children:" What's next? "}),Object(f.jsx)("p",{children:"I will include age grading so that you can predict future races for a given age, or even check to see what your younger self could have run. Adding dates to races will be helpful for age grading as well as for weighting the race for our predictions. For example, a race run last year will carry more predictive weight than a race you ran 10 years ago. The 10 year old race is still useful though when properly age-graded."}),Object(f.jsx)("p",{children:"Similarly, I will be adding altitude options in the Predict section so you can see what your predicted times will be for various altitudes."}),Object(f.jsx)("p",{children:"There are several graphs/charts I may be implementing. In particular, it might be nice to have a chart that tells you which distance is your best. A graph of predicted marathon times by age or altitude would be cool."})]})})},ze=Object(s.a)({palette:{primary:{main:"#333996",light:"#3c44b126"},secondary:{main:"#f83245",light:"#f8324526"},background:{default:"#f4f5fd"}},shape:{borderRadius:"4px"},overrides:{MuiAppBar:{root:{transform:"translateZ(0)"}}},props:{MuiIconButton:{disableRipple:!1}}}),qe=[{title:"History",longTitle:"Race History",page:Object(f.jsx)(Ee,{}),icon:Object(f.jsx)(d.a,{color:"primary"})},{title:"Predict",longTitle:"Race Predictions",page:Object(f.jsx)(Ve,{}),icon:Object(f.jsx)(h.a,{color:"primary"})},{title:"Help",longTitle:"Help",page:Object(f.jsx)(We,{}),icon:Object(f.jsx)(j.a,{color:"secondary"})}],Ge=Object(u.a)({appMain:{paddingLeft:"0px",width:"100%"}})((function(e){var t=e.classes,a=Object(n.useState)(qe[0].title),i=Object(c.a)(a,2),r=i[0],s=i[1];return Object(f.jsxs)(o.a,{theme:ze,children:[Object(f.jsxs)("div",{className:t.appMain,children:[Object(f.jsx)(v,{pages:qe,currentPage:r}),Object(f.jsx)(P,{pages:qe,setCurrentPage:s})]}),Object(f.jsx)(l.a,{})]})}));r.a.render(Object(f.jsx)(Ge,{}),document.getElementById("root"))}},[[101,1,2]]]);
//# sourceMappingURL=main.17fc6414.chunk.js.map