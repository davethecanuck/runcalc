(this.webpackJsonpruncalc=this.webpackJsonpruncalc||[]).push([[0],{13:function(e,t,c){},8:function(e,t,c){"use strict";c.r(t);var r=c(2),s=c(3),n=c(5),a=c(4),i=c(1),j=c.n(i),h=c(7),b=c.n(h),d=(c(13),c(0)),O=function(e){Object(n.a)(c,e);var t=Object(a.a)(c);function c(e){var s;return Object(r.a)(this,c),(s=t.call(this,e)).state={past_races:[],target_races:[],scenario:{age:30,altitude:0,units:"meters"}},s}return Object(s.a)(c,[{key:"render",value:function(){return Object(d.jsxs)("div",{className:"race-calc",children:[Object(d.jsx)("h1",{children:" Race Calculator "}),Object(d.jsx)(l,{races:this.state.past_races}),Object(d.jsx)(p,{scenario:this.state.scenario}),Object(d.jsx)(x,{races:this.state.target_races})]})}}]),c}(j.a.Component),l=function(e){Object(n.a)(c,e);var t=Object(a.a)(c);function c(){return Object(r.a)(this,c),t.apply(this,arguments)}return Object(s.a)(c,[{key:"render",value:function(){var e=[];return this.props.races.forEach((function(t){e.push(Object(d.jsx)(u,{race:t}))})),e.push(Object(d.jsx)(u,{})),Object(d.jsxs)("div",{className:"past-race-table",children:[Object(d.jsx)("h2",{children:" Past Races "}),Object(d.jsxs)("table",{children:[Object(d.jsxs)("tr",{children:[Object(d.jsx)("th",{children:" Distance "}),Object(d.jsx)("th",{children:" Finish Time "}),Object(d.jsx)("th",{children:" Age "}),Object(d.jsx)("th",{children:" Altitude "})]}),Object(d.jsxs)("tbody",{children:[e,Object(d.jsx)(o,{})]})]})]})}}]),c}(j.a.Component),u=function(e){Object(n.a)(c,e);var t=Object(a.a)(c);function c(){return Object(r.a)(this,c),t.apply(this,arguments)}return Object(s.a)(c,[{key:"render",value:function(){var e=this.props.race,t=e?e.distance:"",c=e?e.time:"",r=e?e.age:"",s=e?e.altitude:"";return Object(d.jsxs)("tr",{children:[Object(d.jsxs)("td",{children:[" ",t," "]}),Object(d.jsxs)("td",{children:[" ",c," "]}),Object(d.jsxs)("td",{children:[" ",r," "]}),Object(d.jsxs)("td",{children:[" ",s," "]})]})}}]),c}(j.a.Component),o=function(e){Object(n.a)(c,e);var t=Object(a.a)(c);function c(){return Object(r.a)(this,c),t.apply(this,arguments)}return Object(s.a)(c,[{key:"render",value:function(){return Object(d.jsx)("tr",{children:Object(d.jsx)("td",{children:Object(d.jsx)("button",{children:" + "})})})}}]),c}(j.a.Component),p=function(e){Object(n.a)(c,e);var t=Object(a.a)(c);function c(){return Object(r.a)(this,c),t.apply(this,arguments)}return Object(s.a)(c,[{key:"render",value:function(){return Object(d.jsxs)("div",{className:"race-scenario",children:[Object(d.jsx)("h2",{children:" Race Scenario "}),Object(d.jsxs)("table",{children:[Object(d.jsxs)("tr",{children:[Object(d.jsx)("th",{children:" Age "}),Object(d.jsx)("th",{children:" Altitude "}),Object(d.jsx)("th",{children:" Units "})]}),Object(d.jsxs)("tr",{children:[Object(d.jsxs)("td",{children:[" ",this.props.scenario.age,"  "]}),Object(d.jsxs)("td",{children:[" ",this.props.scenario.altitude,"  "]}),Object(d.jsxs)("td",{children:[" ",this.props.scenario.units,"  "]})]})]})]})}}]),c}(j.a.Component),x=function(e){Object(n.a)(c,e);var t=Object(a.a)(c);function c(){return Object(r.a)(this,c),t.apply(this,arguments)}return Object(s.a)(c,[{key:"render",value:function(){var e=[];return this.props.races.forEach((function(t){e.push(Object(d.jsx)(f,{race:t}))})),Object(d.jsxs)("div",{className:"target-race-table",children:[Object(d.jsx)("h2",{children:" Target Races "}),Object(d.jsx)("table",{children:Object(d.jsxs)("tr",{children:[Object(d.jsx)("th",{children:" Distance "}),Object(d.jsx)("th",{children:" Finish Time "}),Object(d.jsx)("th",{children:" Pace "}),Object(d.jsx)("th",{children:" Age Grade "})]})})]})}}]),c}(j.a.Component),f=function(e){Object(n.a)(c,e);var t=Object(a.a)(c);function c(){return Object(r.a)(this,c),t.apply(this,arguments)}return Object(s.a)(c,[{key:"render",value:function(){return Object(d.jsxs)("tr",{children:[Object(d.jsxs)("td",{children:[" ",this.props.race.distance," "]}),Object(d.jsxs)("td",{children:[" ",this.props.race.time," "]}),Object(d.jsxs)("td",{children:[" ",this.props.race.pace," "]}),Object(d.jsxs)("td",{children:[" ",this.props.race.age_grade," "]})]})}}]),c}(j.a.Component);b.a.render(Object(d.jsx)(O,{}),document.getElementById("root"))}},[[8,1,2]]]);
//# sourceMappingURL=main.04697c16.chunk.js.map