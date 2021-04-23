(this.webpackJsonpruncalc=this.webpackJsonpruncalc||[]).push([[0],{52:function(e,t,a){},53:function(e,t,a){"use strict";a.r(t);var s=a(0),n=a.n(s),c=a(13),r=a.n(c),i=a(5),l=a(4),h=a(7),o=a(16),d=a(71),j=a(12),u=a(6),b=a(30),p=a(31),m=a(70),O=function(e){return{root:{flexGrow:1,backgroundColor:"#4A4E69",direction:"row",flexWrap:"wrap"},table:{margin:e.spacing(0),width:"100%"},paper:{margin:e.spacing(2),padding:e.spacing(2),textAlign:"left",color:e.palette.text.secondary,maxWidth:"400px"}}},v=function e(){Object(i.a)(this,e),this.age=25},x=[{label:"800m",value:800},{label:"1km",value:1e3},{label:"1500m",value:1500},{label:"1600m",value:1600},{label:"1 mile",value:1609},{label:"3000m",value:3e3},{label:"2 mile",value:3219},{label:"5km",value:5e3},{label:"8km",value:8e3},{label:"5 mile",value:8047},{label:"10km",value:1e4},{label:"15km",value:15e3},{label:"20km",value:2e4},{label:"13.1 mile",value:21097},{label:"26.2 mile",value:42195},{label:"50km",value:5e4}],g={};x.forEach((function(e){g[e.value]=e.label}));var f=function(){function e(){Object(i.a)(this,e),this.distance=null,this.time=null,this.timeParts=null,this.scenario=new v}return Object(l.a)(e,[{key:"setDistance",value:function(e){this.distance=e,null!=this.timeParts&&this.setTimeParts(this.timeParts)}},{key:"ageGrade",value:function(){return 75}},{key:"setTimeParts",value:function(e){for(;e.length<3;)e.unshift(0);if(null!=this.distance&&0===e[0]){var t=this.calcTime(e);this.distance/t>15&&(e[0]=e[1],e[1]=e[2],e[2]=0)}this.timeParts=e,this.time=this.calcTime(e)}},{key:"calcTime",value:function(e){return 3600*e[0]+60*e[1]+e[2]}},{key:"predictTime",value:function(e){var t=Math.pow(1.05,Math.log2(e/this.distance)),a=this.time*(e/this.distance)*t,s=e/this.distance;return s>1&&(s=1/s),[a,s]}},{key:"getTimeString",value:function(){return this.toHHMMSS(this.time)}},{key:"getPaceString",value:function(){if(this.distance&&this.time)return this.toHHMMSS(1609*this.time/this.distance)}},{key:"toHHMMSS",value:function(e){var t="";if(e){var a=Math.floor(e/3600),s=Math.floor((e-3600*a)/60),n=Math.floor(e-3600*a-60*s);t=a.toString().padStart(2,"0")+":"+s.toString().padStart(2,"0")+":"+n.toString().padStart(2,"0")}return t}},{key:"getDistanceLabel",value:function(){return e=this.distance,g[e]||e;var e}}]),e}(),S=a(2),R={distance:{pattern:RegExp(/^\s*\d+\s*$/),help:"(select a distance)"},time:{pattern:RegExp(/^\s*(\d+):?([0-5]\d{1}?)(:([0-5]\d{1}))?\s*$/),help:"(hh:mm:ss or hh:mm or mm:ss)"},age:{pattern:RegExp(/^\s*\d*\s*$/),help:"(years)"}},k={distance:"",time:"",age:"",errors:{distance:R.distance.help,time:R.time.help,age:""}},y=function(e){Object(h.a)(a,e);var t=Object(o.a)(a);function a(e){var s;return Object(i.a)(this,a),(s=t.call(this,e)).handleDistanceChange=function(e){s.setState({distance:e.value});var t=Object(b.a)({},s.state.errors);t.distance="",s.setState({errors:t})},s.handleChange=function(e){e.preventDefault();var t=e.target,a=t.name,n=t.value,c=s.state.errors,r=R[a];c[a]=r.pattern.test(n)?"":r.help,s.setState(Object(u.a)({errors:c},a,n))},s.validateForm=function(){var e=!0;return Object.values(s.state.errors).forEach((function(t){return t.length>0&&(e=!1)})),e},s.handleSubmit=function(e){if(e.preventDefault(),s.validateForm(s.state.errors)){var t=new v;t.age=s.state.age;var a=R.time.pattern.exec(s.state.time),n=[];n.push(parseInt(a[1])),n.push(parseInt(a[2])),null!=a[4]&&n.push(parseInt(a[4]));var c=new f;c.setDistance(parseInt(s.state.distance)),c.setTimeParts(n),c.scenario=t,s.props.addPastRace(c),e.target.reset(),s.setState(JSON.parse(JSON.stringify(k)))}else console.error("Invalid Form")},s.state=JSON.parse(JSON.stringify(k)),s}return Object(l.a)(a,[{key:"render",value:function(){var e=this.state.errors,t=this.props.classes;return Object(S.jsxs)(m.a,{className:t.paper,children:[Object(S.jsx)("h2",{children:" Add a Past Race "}),Object(S.jsxs)("form",{onSubmit:this.handleSubmit,autoComplete:"off",noValidate:!0,children:[Object(S.jsxs)("div",{className:"distance",children:[Object(S.jsxs)("label",{htmlFor:"distance",children:["Distance",e.distance.length>0&&Object(S.jsx)("span",{className:"error",children:e.distance})]}),Object(S.jsx)(p.a,{options:x,onChange:this.handleDistanceChange})]}),Object(S.jsxs)("div",{className:"time",children:[Object(S.jsxs)("label",{htmlFor:"time",children:["Finish Time",e.time.length>0&&Object(S.jsx)("span",{className:"error",children:e.time})]}),Object(S.jsx)("input",{type:"text",name:"time",onChange:this.handleChange,noValidate:!0})]}),Object(S.jsxs)("div",{className:"age",children:[Object(S.jsxs)("label",{htmlFor:"age",children:["Your Age (optional)",e.age.length>0&&Object(S.jsx)("span",{className:"error",children:e.age})]}),Object(S.jsx)("input",{type:"text",name:"age",onChange:this.handleChange,noValidate:!0})]}),Object(S.jsx)("div",{className:"submit",children:Object(S.jsx)("button",{children:" Add "})})]})]})}}]),a}(n.a.Component),P=Object(j.a)(O)(y),N=a(72),C=function(e){Object(h.a)(a,e);var t=Object(o.a)(a);function a(){return Object(i.a)(this,a),t.apply(this,arguments)}return Object(l.a)(a,[{key:"render",value:function(){var e=this,t=this.props.classes,a=[];return this.props.races.forEach((function(t){a.push(Object(S.jsx)(T,{race:t,raceId:a.length,removePastRace:e.props.removePastRace},a.length))})),Object(S.jsxs)(m.a,{className:t.paper,children:[Object(S.jsx)("h2",{children:" Past Races "}),Object(S.jsxs)("table",{className:"race-table",children:[Object(S.jsx)("thead",{children:Object(S.jsxs)("tr",{children:[Object(S.jsx)("th",{children:" Distance "}),Object(S.jsx)("th",{children:" Time "}),Object(S.jsx)("th",{children:" Pace "}),Object(S.jsx)("th",{children:" Age "}),Object(S.jsx)("th",{})]})}),Object(S.jsx)("tbody",{children:a})]})]})}}]),a}(n.a.Component);function T(e){var t=e.race,a=t?t.getDistanceLabel():"",s=t?t.getTimeString():"",n=t?t.getPaceString():"",c=t?t.scenario.age:"";return Object(S.jsxs)("tr",{children:[Object(S.jsxs)("td",{children:[" ",a," "]}),Object(S.jsxs)("td",{children:[" ",s," "]}),Object(S.jsxs)("td",{children:[" ",n," "]}),Object(S.jsxs)("td",{children:[" ",c," "]}),Object(S.jsx)("td",{children:Object(S.jsx)(N.a,{variant:"contained",name:"past-race-remove",onClick:function(){return e.removePastRace(e.raceId)},children:"-"})})]})}var D=Object(j.a)(O)(C),w=a(23),M=function(e){Object(h.a)(a,e);var t=Object(o.a)(a);function a(){return Object(i.a)(this,a),t.apply(this,arguments)}return Object(l.a)(a,[{key:"render",value:function(){var e=this,t=this.props.classes,a=[];return this.props.pastRaces.length>0&&x.forEach((function(t){var s=0,n=0;if(e.props.pastRaces.forEach((function(e){var a=e.predictTime(t.value),c=Object(w.a)(a,2),r=c[0],i=c[1];s+=r*i,n+=i})),n>0){var c=new f;c.distance=t.value,c.time=parseInt(s/n),a.push(Object(S.jsx)(E,{race:c},a.length))}})),Object(S.jsxs)(m.a,{className:t.paper,children:[Object(S.jsx)("h2",{children:" Predicted Times "}),Object(S.jsxs)("table",{className:"race-table",children:[Object(S.jsx)("thead",{children:Object(S.jsxs)("tr",{children:[Object(S.jsx)("th",{children:" Distance "}),Object(S.jsx)("th",{children:" Time "}),Object(S.jsx)("th",{children:" Pace "})]})}),Object(S.jsx)("tbody",{children:a})]})]})}}]),a}(n.a.Component);function E(e){var t=e.race,a=t?t.getDistanceLabel():"",s=t?t.getTimeString():"",n=t?t.getPaceString():"";return Object(S.jsxs)("tr",{children:[Object(S.jsxs)("td",{children:[" ",a," "]}),Object(S.jsxs)("td",{children:[" ",s," "]}),Object(S.jsxs)("td",{children:[" ",n," "]})]})}var I=Object(j.a)(O)(M),F=function(e){Object(h.a)(a,e);var t=Object(o.a)(a);function a(e){var s;return Object(i.a)(this,a),(s=t.call(this,e)).state={pastRaces:[]},s}return Object(l.a)(a,[{key:"render",value:function(){var e=this,t=this.props.classes;return Object(S.jsxs)(d.a,{container:!0,className:t.root,spacing:3,children:[Object(S.jsxs)(d.a,{item:!0,xs:12,children:[Object(S.jsx)(P,{addPastRace:function(t){return e.addPastRace(t)}}),Object(S.jsx)(D,{races:this.state.pastRaces,removePastRace:function(t){return e.removePastRace(t)}})]}),Object(S.jsx)(d.a,{item:!0,xs:12,children:Object(S.jsx)(I,{pastRaces:this.state.pastRaces})})]})}},{key:"addPastRace",value:function(e){var t=this.state.pastRaces.slice();t.push(e),this.setState({pastRaces:t})}},{key:"removePastRace",value:function(e){e>=0&&e<this.state.pastRaces.length&&(this.state.pastRaces.splice(e,1),this.setState({pastRaces:this.state.pastRaces}))}}]),a}(n.a.Component),A=Object(j.a)(O)(F);a(52);r.a.render(Object(S.jsx)(A,{}),document.getElementById("root"))}},[[53,1,2]]]);
//# sourceMappingURL=main.fdecf360.chunk.js.map