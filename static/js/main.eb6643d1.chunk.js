(this.webpackJsonpvova_task=this.webpackJsonpvova_task||[]).push([[0],{29:function(e,t,n){},38:function(e,t,n){},64:function(e,t,n){},66:function(e,t,n){},67:function(e,t,n){"use strict";n.r(t);var c,a,r=n(0),o=n.n(r),i=n(14),s=n.n(i),l=(n(38),n(2)),u=n(7),j=n(19),b=n.n(j),p=n(31),d=n(16),h=n.n(d),m="GET_EMPLOYEE_REQUEST",O="GET_EMPLOYEE_SUCCESS",y="GET_EMPLOYEE_FAILURE",f=function(e){return{type:O,payload:{employeeData:e}}},v="ADD_EMPLOYEE_BIRTHDAY",x="DELETE_EMPLOYEE_BIRTHDAY",E=function(e){return function(t){t(function(e){return{type:v,payload:{employeeData:e}}}(e))}},g=function(e){return function(t){t(function(e){return{type:x,payload:{employeeData:e}}}(e))}},N=(n(64),n(1)),D=function(){var e=Object(u.b)();Object(r.useEffect)((function(){e(function(){var e=Object(p.a)(b.a.mark((function e(t){var n,c;return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t({type:m}),e.prev=1,e.next=4,h.a.get("https://yalantis-react-school-api.yalantis.com/api/task0/users");case 4:n=e.sent,c=n.data,t(f(c)),e.next=12;break;case 9:e.prev=9,e.t0=e.catch(1),t({type:y});case 12:case"end":return e.stop()}}),e,null,[[1,9]])})));return function(t){return e.apply(this,arguments)}}())}),[]);var t=Object(u.c)((function(e){return e.employee.employeeData})),n=Object(u.c)((function(e){return e.birthdays.employees})),c="abcdefghijklmnopqrstuvwxyz".split(""),a=function(e){return t.filter((function(t){return t.firstName+" "+t.lastName===e}))[0]},o=function(e){return 0!==n.filter((function(t){return t.id===e})).length},i=c.map((function(n){for(var c=[],r=0;r<t.length;r++)t[r].firstName[0]===n.toUpperCase()&&c.push(t[r].firstName+" "+t[r].lastName);c.sort();var i=c.map((function(t,c){return Object(N.jsxs)("div",{className:"employee-letter-radio",children:[Object(N.jsx)("p",{className:"".concat(o(a(t).id)?"active-name":""),children:t}),Object(N.jsx)("label",{htmlFor:"active".concat(c+n),children:"Active"}),Object(N.jsx)("input",{onChange:function(){e(E(a(t)))},id:"active".concat(c+n),name:"birthday".concat(c+n),type:"radio",checked:o(a(t).id)}),Object(N.jsx)("label",{htmlFor:"not-active".concat(c+n),children:"Not Active"}),Object(N.jsx)("input",{onChange:function(){e(g(t))},id:"not-active".concat(c+n),name:"birthday".concat(c+n),type:"radio",checked:!o(a(t).id)})]})}));return Object(N.jsxs)("div",{className:"employee-letter",children:[Object(N.jsx)("h3",{children:n.toUpperCase()}),0===i.length?Object(N.jsx)("h4",{children:"No Employees"}):i]})}));return Object(N.jsxs)("div",{className:"header",children:[Object(N.jsx)("h2",{children:"Employees"}),Object(N.jsx)("div",{className:"employee",children:i})]})},S=(n(66),function(){for(var e=Object(u.c)((function(e){return e.birthdays.employees})),t=[[11,"November",[]],[12,"December",[]],[1,"January",[]],[2,"February",[]],[3,"March",[]],[4,"April",[]],[5,"May",[]],[6,"June",[]],[7,"July",[]],[8,"August",[]],[9,"September",[]],[10,"October",[]]],n=0;n<e.length;n++)for(var c=new Date(e[n].dob).getMonth()+1,a=0;a<t.length;a++)t[a][0]===c&&t[a][2].push(e[n]);var r=t.map((function(e){var t=e[2].map((function(e){var t=new Date(e.dob).toDateString();return Object(N.jsxs)("p",{children:[e.firstName+" "+e.lastName," - ",t]})}));return 0===t.length&&(t=Object(N.jsx)("p",{children:"No Employees"})),Object(N.jsxs)("div",{children:[Object(N.jsx)("h3",{children:e[1]}),Object(N.jsx)("div",{children:t})]})}));return 0===e.length&&(r=Object(N.jsx)("p",{children:" Employees List is empty"})),Object(N.jsxs)("div",{className:"birthday",children:[Object(N.jsx)("h2",{children:"Employees birthday"}),Object(N.jsx)("div",{className:"birthday-list",children:r})]})}),L=(n(29),function(){return Object(N.jsxs)("div",{className:"page",children:[Object(N.jsx)(D,{}),Object(N.jsx)(S,{})]})}),T=function(){return Object(N.jsxs)("div",{children:[Object(N.jsx)(l.a,{from:"/",to:"/employees"}),Object(N.jsx)(l.d,{children:Object(N.jsx)(l.b,{path:"/employees",element:Object(N.jsx)(L,{})})})]})},A=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,68)).then((function(t){var n=t.getCLS,c=t.getFID,a=t.getFCP,r=t.getLCP,o=t.getTTFB;n(e),c(e),a(e),r(e),o(e)}))},F=n(9),_=n(33),k=n(32),M=n(6),C=n(3),U={employeeData:[],loading:!1},w=(c={},Object(M.a)(c,m,(function(e){return Object(C.a)(Object(C.a)({},e),{},{loading:!0})})),Object(M.a)(c,O,(function(e,t){var n=t.payload.employeeData;return Object(C.a)(Object(C.a)({},e),{},{employeeData:n,loading:!1})})),Object(M.a)(c,y,(function(e){return Object(C.a)(Object(C.a)({},e),{},{loading:!1})})),Object(M.a)(c,"DEFAULT",(function(e){return e})),c),I=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:U,t=arguments.length>1?arguments[1]:void 0,n=w[t.type]||w.DEFAULT;return n(e,t)},J=n(20),P=function(){var e=localStorage.getItem("birthdays");return null==e?{employees:[]}:JSON.parse(e)},Y=(a={},Object(M.a)(a,v,(function(e,t){var n=t.payload.employeeData;return localStorage.setItem("birthdays",JSON.stringify(Object(C.a)(Object(C.a)({},e),{},{employees:[].concat(Object(J.a)(e.employees),[n])}))),Object(C.a)(Object(C.a)({},e),{},{employees:[].concat(Object(J.a)(e.employees),[n])})})),Object(M.a)(a,x,(function(e,t){var n=t.payload.employeeData;return localStorage.setItem("birthdays",JSON.stringify(Object(C.a)(Object(C.a)({},e),{},{employees:e.employees.filter((function(e){return e.firstName+" "+e.lastName!==n}))}))),Object(C.a)(Object(C.a)({},e),{},{employees:e.employees.filter((function(e){return e.firstName+" "+e.lastName!==n}))})})),Object(M.a)(a,"DEFAULT",(function(e){return e})),a),R=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:P(),t=arguments.length>1?arguments[1]:void 0,n=Y[t.type]||Y.DEFAULT;return n(e,t)},B=Object(F.combineReducers)({employee:I,birthdays:R}),G=Object(F.createStore)(B,Object(k.composeWithDevTools)(Object(F.applyMiddleware)(_.a))),H=n(17);s.a.render(Object(N.jsx)(o.a.StrictMode,{children:Object(N.jsx)(u.a,{store:G,children:Object(N.jsx)(H.a,{children:Object(N.jsx)(T,{})})})}),document.getElementById("root")),A()}},[[67,1,2]]]);
//# sourceMappingURL=main.eb6643d1.chunk.js.map