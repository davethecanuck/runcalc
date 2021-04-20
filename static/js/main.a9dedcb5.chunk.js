(this.webpackJsonpruncalc=this.webpackJsonpruncalc||[]).push([[0],{52:function(e,t,a){},53:function(e,t,a){"use strict";a.r(t);var s=a(0),n=a.n(s),c=a(14),i=a.n(c),r=a(5),l=a(4),h=a(6),j=a(13),d=a(71),u=a(12),o=a(7),b=a(30),p=a(31),m=a(70),O=function(e){return{root:{flexGrow:0},paper:{padding:e.spacing(1),textAlign:"center",color:e.palette.text.secondary}}},v=function e(){Object(r.a)(this,e),this.age=25},x=[{label:"400m",value:400},{label:"800m",value:800},{label:"1km",value:1e3},{label:"1500m",value:1500},{label:"1600m",value:1600},{label:"1 mile",value:1609},{label:"3000m",value:3e3},{label:"2 mile",value:3219},{label:"5km",value:5e3},{label:"8km",value:8e3},{label:"5 mile",value:8047},{label:"10km",value:1e4},{label:"15km",value:15e3},{label:"20km",value:2e4},{label:"13.1 mile",value:21097},{label:"26.2 mile",value:42195},{label:"50km",value:5e4}],f={};x.forEach((function(e){f[e.value]=e.label}));var g=function(){function e(){Object(r.a)(this,e),this.distance=null,this.time=null,this.timeParts=null,this.scenario=new v}return Object(l.a)(e,[{key:"setDistance",value:function(e){this.distance=e,null!=this.timeParts&&this.setTimeParts(this.timeParts)}},{key:"ageGrade",value:function(){return 75}},{key:"setTimeParts",value:function(e){for(;e.length<3;)e.unshift(0);if(null!=this.distance&&0===e[0]){var t=this.calcTime(e);this.distance/t>15&&(e[0]=e[1],e[1]=e[2],e[2]=0)}this.timeParts=e,this.time=this.calcTime(e)}},{key:"calcTime",value:function(e){return 3600*e[0]+60*e[1]+e[2]}},{key:"predictTime",value:function(e){var t=Math.pow(1.06,Math.log2(e/this.distance)),a=this.time*(e/this.distance)*t,s=e/this.distance;s>1&&(s=1/s);var n=s;return console.log("1. predictTime this.distance="+this.distance+" this.time="+this.time+" input.distance="+e+" output.time="+a+" adjust="+t+" ratio="+s+" weight="+n),[a,n]}},{key:"getTimeString",value:function(){var e="";if(this.time){var t=Math.floor(this.time/3600),a=Math.floor((this.time-3600*t)/60),s=this.time-3600*t-60*a;e=t.toString().padStart(2,"0")+":"+a.toString().padStart(2,"0")+":"+s.toString().padStart(2,"0")}return e}},{key:"getDistanceLabel",value:function(){return e=this.distance,f[e]||e;var e}}]),e}(),y=a(2),k={distance:{pattern:RegExp(/^\s*\d+\s*$/),help:"(select a distance)"},time:{pattern:RegExp(/^\s*(\d+):?([0-5]\d{1}?)(:([0-5]\d{1}))?\s*$/),help:"(hh:mm:ss or hh:mm or mm:ss)"},age:{pattern:RegExp(/^\s*\d*\s*$/),help:"(years)"}},R=function(e){Object(h.a)(a,e);var t=Object(j.a)(a);function a(e){var s;return Object(r.a)(this,a),(s=t.call(this,e)).handleDistanceSelect=function(e){s.setState({distance:e.value});var t=Object(b.a)({},s.state.errors);t.distance="",s.setState({errors:t})},s.handleChange=function(e){e.preventDefault();var t=e.target,a=t.name,n=t.value,c=s.state.errors,i=k[a];c[a]=i.pattern.test(n)?"":i.help,s.setState(Object(o.a)({errors:c},a,n))},s.validateForm=function(){var e=!0;return Object.values(s.state.errors).forEach((function(t){return t.length>0&&(e=!1)})),e},s.handleSubmit=function(e){if(e.preventDefault(),s.validateForm(s.state.errors)){var t=new v;t.age=s.state.age;var a=k.time.pattern.exec(s.state.time),n=[];n.push(parseInt(a[1])),n.push(parseInt(a[2])),null!=a[4]&&n.push(parseInt(a[4]));var c=new g;c.setDistance(parseInt(s.state.distance)),c.setTimeParts(n),c.scenario=t,s.props.addPastRace(c)}else console.error("Invalid Form")},s.state={distance:null,time:null,age:null,errors:{distance:k.distance.help,time:k.time.help,age:""}},s}return Object(l.a)(a,[{key:"render",value:function(){var e=this.state.errors,t=this.props.classes;return Object(y.jsxs)(m.a,{className:t.paper,children:[Object(y.jsx)("h2",{children:" Add a Past Race "}),Object(y.jsxs)("form",{onSubmit:this.handleSubmit,noValidate:!0,children:[Object(y.jsxs)("div",{className:"distance",children:[Object(y.jsxs)("label",{htmlFor:"distance",children:["Distance",e.distance.length>0&&Object(y.jsx)("span",{className:"error",children:e.distance})]}),Object(y.jsx)(p.a,{options:x,onChange:this.handleDistanceSelect})]}),Object(y.jsxs)("div",{className:"time",children:[Object(y.jsxs)("label",{htmlFor:"time",children:["Finish Time",e.time.length>0&&Object(y.jsx)("span",{className:"error",children:e.time})]}),Object(y.jsx)("input",{type:"text",name:"time",onChange:this.handleChange,noValidate:!0})]}),Object(y.jsxs)("div",{className:"age",children:[Object(y.jsxs)("label",{htmlFor:"age",children:["Your Age (optional)",e.age.length>0&&Object(y.jsx)("span",{className:"error",children:e.age})]}),Object(y.jsx)("input",{type:"text",name:"age",onChange:this.handleChange,noValidate:!0})]}),Object(y.jsx)("div",{className:"submit",children:Object(y.jsx)("button",{children:" Add "})})]})]})}}]),a}(n.a.Component),S=Object(u.a)(O)(R),T=a(72),P=function(e){Object(h.a)(a,e);var t=Object(j.a)(a);function a(){return Object(r.a)(this,a),t.apply(this,arguments)}return Object(l.a)(a,[{key:"render",value:function(){var e=this.props.classes,t=[];return this.props.races.forEach((function(e){t.push(Object(y.jsx)(C,{race:e},t.length))})),Object(y.jsxs)(m.a,{className:e.paper,children:[Object(y.jsx)("h2",{children:" Past Races "}),Object(y.jsxs)("table",{children:[Object(y.jsx)("thead",{children:Object(y.jsxs)("tr",{children:[Object(y.jsx)("th",{children:" Distance "}),Object(y.jsx)("th",{children:" Finish Time "}),Object(y.jsx)("th",{children:" Age "}),Object(y.jsx)("th",{children:" Age Grade "}),Object(y.jsx)("th",{})]})}),Object(y.jsx)("tbody",{children:t})]})]})}}]),a}(n.a.Component),C=function(e){Object(h.a)(a,e);var t=Object(j.a)(a);function a(){return Object(r.a)(this,a),t.apply(this,arguments)}return Object(l.a)(a,[{key:"render",value:function(){var e=this.props.race,t=e?e.getDistanceLabel():"",a=e?e.getTimeString():"",s=e?e.scenario.age:"",n=e?e.ageGrade():"";return Object(y.jsxs)("tr",{children:[Object(y.jsxs)("td",{children:[" ",t," "]}),Object(y.jsxs)("td",{children:[" ",a," "]}),Object(y.jsxs)("td",{children:[" ",s," "]}),Object(y.jsxs)("td",{children:[" ",n," "]}),Object(y.jsx)("td",{children:Object(y.jsx)(T.a,{variant:"contained",name:"past-race-remove",children:"-"})})]})}}]),a}(n.a.Component),D=Object(u.a)(O)(P),N=a(23),w=function(e){Object(h.a)(a,e);var t=Object(j.a)(a);function a(){return Object(r.a)(this,a),t.apply(this,arguments)}return Object(l.a)(a,[{key:"render",value:function(){var e=this,t=this.props.classes,a=[];return this.props.pastRaces.length>0&&x.forEach((function(t){var s=0,n=0;if(e.props.pastRaces.forEach((function(e){var a=e.predictTime(t.value),c=Object(N.a)(a,2),i=c[0],r=c[1];s+=i*r,n+=r})),n>0){var c=new g;c.distance=t.value,c.time=parseInt(s/n),a.push(Object(y.jsx)(E,{race:c},a.length))}})),Object(y.jsxs)(m.a,{className:t.paper,children:[Object(y.jsx)("h2",{children:" Target Races "}),Object(y.jsxs)("table",{children:[Object(y.jsx)("thead",{children:Object(y.jsxs)("tr",{children:[Object(y.jsx)("th",{children:" Distance "}),Object(y.jsx)("th",{children:" Finish Time "}),Object(y.jsx)("th",{children:" Age Grade "})]})}),Object(y.jsx)("tbody",{children:a})]})]})}}]),a}(n.a.Component),E=function(e){Object(h.a)(a,e);var t=Object(j.a)(a);function a(){return Object(r.a)(this,a),t.apply(this,arguments)}return Object(l.a)(a,[{key:"render",value:function(){var e=this.props.race,t=e?e.getDistanceLabel():"",a=e?e.getTimeString():"",s=e?e.ageGrade():"";return Object(y.jsxs)("tr",{children:[Object(y.jsxs)("td",{children:[" ",t," "]}),Object(y.jsxs)("td",{children:[" ",a," "]}),Object(y.jsxs)("td",{children:[" ",s," "]})]})}}]),a}(n.a.Component),F=Object(u.a)(O)(w),A=function(e){Object(h.a)(a,e);var t=Object(j.a)(a);function a(e){var s;return Object(r.a)(this,a),(s=t.call(this,e)).state={pastRaces:[]},s}return Object(l.a)(a,[{key:"render",value:function(){var e=this,t=this.props.classes;return Object(y.jsxs)(d.a,{container:!0,className:t.root,spacing:3,children:[Object(y.jsx)(d.a,{item:!0,children:Object(y.jsx)(S,{addPastRace:function(t){return e.addPastRace(t)}})}),Object(y.jsxs)(d.a,{item:!0,children:[Object(y.jsx)(D,{races:this.state.pastRaces}),Object(y.jsx)(d.a,{item:!0}),Object(y.jsx)(F,{pastRaces:this.state.pastRaces})]})]})}},{key:"addPastRace",value:function(e){var t=this.state.pastRaces.slice();t.push(e),this.setState({pastRaces:t})}}]),a}(n.a.Component),I=Object(u.a)(O)(A);a(52);i.a.render(Object(y.jsx)(I,{}),document.getElementById("root"))}},[[53,1,2]]]);
//# sourceMappingURL=main.a9dedcb5.chunk.js.map