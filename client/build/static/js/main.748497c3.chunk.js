(this.webpackJsonpgamecaro=this.webpackJsonpgamecaro||[]).push([[0],{107:function(e,a,t){},108:function(e,a,t){},129:function(e,a,t){"use strict";t.r(a);var n=t(0),r=t.n(n),s=t(12),l=t.n(s),o=(t(82),t(33)),c=(t(87),t(13)),i=t(17),u=t(18),m=t(21),d=t(19),p=t(22),h=(t(44),t(30)),v=t(70),f=t.n(v);t(65).config();var E=f.a.create({baseURL:Object({NODE_ENV:"production",PUBLIC_URL:""}).REACT_APP_BASE_URL}),g=function(e,a){return E.post("/users/register",{username:e,password:a}).then((function(e){return localStorage.setItem("usertoken",e.data),e.data})).catch((function(e){console.log("TCL :  err after then"),console.log(e)}))},b=function(e,a){return E.post("/users/login",{username:e,password:a}).then((function(e){return localStorage.setItem("usertoken",e.data),e.data})).catch((function(e){console.log(e)}))},N=function(e){function a(e){var t;return Object(i.a)(this,a),(t=Object(m.a)(this,Object(d.a)(a).call(this,e))).handleFocus=function(e){var a;t.setState((a={},Object(c.a)(a,e.target.name,""),Object(c.a)(a,"errors",!1),a))},t.onChange=function(e){t.setState(Object(c.a)({},e.target.name,e.target.value))},t.handleClick=function(e){e.preventDefault();var a=t.state,n=a.username,r=a.password;b(n,r).then((function(e){e&&(t.props.handleLogin(e.token),t.setState({username:"",password:"",errors:!1}))}))},t.state={username:"",password:"",errors:!1},t}return Object(p.a)(a,e),Object(u.a)(a,[{key:"render",value:function(){var e=this.state,a=e.username,t=e.password,n=e.errors,s=a.trim()&&t.trim(),l=n&&r.a.createElement("p",{className:"errorNotification"},"Your username/password is invalid!");return r.a.createElement("div",{className:"loginModal "},r.a.createElement("div",{className:"loginT mt-5"},"Login"),r.a.createElement("div",{className:"errorNotification mt-2 mb-2"},l),r.a.createElement("div",{className:"activeR"},r.a.createElement("label",{className:"usernameLabel"},"USERNAME"),r.a.createElement("input",{type:"text",name:"username",id:"username",placeholder:"Enter your username...",onFocus:this.handleFocus,value:a,className:n?"errorInput":"normalInput",onChange:this.onChange})),r.a.createElement("div",{className:"activeR"},r.a.createElement("label",{className:"passwordLabel"},"PASSWORD"),r.a.createElement("input",{type:"password",name:"password",id:"password",placeholder:"Enter your password...",value:t,onFocus:this.handleFocus,className:n?"errorInput":"normalInput",onChange:this.onChange})),r.a.createElement("button",{onClick:this.handleClick,className:s?"loginButtonActive":"loginButton"},r.a.createElement("div",{className:"buttonText mb-5"},"Login")),r.a.createElement("hr",{className:"mt-2"}),r.a.createElement("div",{className:"mt-4 d-flex"},r.a.createElement("div",{className:"dontHaveAccount mr-2"},"Don't have an account? "),r.a.createElement(h.b,{to:"/register",className:"register"},"Register")))}}]),a}(r.a.Component),w=function(e){function a(e){var t;return Object(i.a)(this,a),(t=Object(m.a)(this,Object(d.a)(a).call(this,e))).handleFocus=function(e){var a;t.setState((a={},Object(c.a)(a,e.target.name,""),Object(c.a)(a,"errors",!1),a))},t.onChange=function(e){t.setState(Object(c.a)({},e.target.name,e.target.value))},t.handleClick=function(e){e.preventDefault();var a=t.state,n=a.username,r=a.password;g(n,r).then((function(e){e&&(t.props.this.props.handleLogin(e.token),t.setState({username:"",password:"",errors:!1}))}))},t.state={username:"",password:"",errors:!1},t}return Object(p.a)(a,e),Object(u.a)(a,[{key:"render",value:function(){var e=this.state,a=e.username,t=e.password,n=e.errors,s=a.trim()&&t.trim(),l=n&&r.a.createElement("p",{className:"errorNotification"},"Your username/password is invalid!");return r.a.createElement("div",{className:"loginModal "},r.a.createElement("div",{className:"loginT mt-5"},"Register"),r.a.createElement("div",{className:"errorNotification mt-2 mb-2"},l),r.a.createElement("div",{className:"activeR"},r.a.createElement("label",{className:"usernameLabel"},"USERNAME"),r.a.createElement("input",{type:"text",name:"username",id:"username",placeholder:"Enter your username...",onFocus:this.handleFocus,value:a,className:n?"errorInput":"normalInput",onChange:this.onChange})),r.a.createElement("div",{className:"activeR"},r.a.createElement("label",{className:"passwordLabel"},"PASSWORD"),r.a.createElement("input",{type:"password",name:"password",id:"password",placeholder:"Enter your password...",value:t,onFocus:this.handleFocus,className:n?"errorInput":"normalInput",onChange:this.onChange})),r.a.createElement("button",{onClick:this.handleClick,className:s?"loginButtonActive":"loginButton"},r.a.createElement("div",{className:"buttonText mb-5"},"Register")),r.a.createElement("hr",{className:"mt-2"}),r.a.createElement("div",{className:"mt-4 d-flex"},r.a.createElement("div",{className:"dontHaveAccount mr-2"},"You have an account? "),r.a.createElement(h.b,{to:"/",className:"register"},"Login")))}}]),a}(r.a.Component),O=t(71);var y=function(e){var a=e.onClick,t=e.value,n=e.values,s=e.i,l="square";return null!==n&&void 0!==n&&0!==n.length&&(l=-1!==n.indexOf(s)?"square1":"square"),r.a.createElement(O.a,{variant:"warning",className:l,onClick:a},t)},C=function(e){function a(){return Object(i.a)(this,a),Object(m.a)(this,Object(d.a)(a).apply(this,arguments))}return Object(p.a)(a,e),Object(u.a)(a,[{key:"renderSquare",value:function(e){var a=this.props,t=a.squares,n=a.onClick,s=a.values;return r.a.createElement(y,{value:t[e],onClick:function(){return n(e)},values:s,i:e,key:"square".concat(e)})}},{key:"renderBoardRow",value:function(e,a){var t=this;return r.a.createElement("div",{key:"board-row".concat(e),className:"board-row"},a.map((function(a){return t.renderSquare(a+20*e)})))}},{key:"render",value:function(){var e=this,a=[0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19];return r.a.createElement("div",{className:"board"},a.map((function(t){return e.renderBoardRow(t,a)})))}}]),a}(r.a.PureComponent),k=(t(107),function(e){function a(e){var t;return Object(i.a)(this,a),(t=Object(m.a)(this,Object(d.a)(a).call(this,e))).handleLogout=function(){console.log("click logout"),t.props.logout()},t.state={reOdered:!1,username:"Mai"},t}return Object(p.a)(a,e),Object(u.a)(a,[{key:"handleClick",value:function(e){var a=this.props.game,t=a.history,n=a.stepNumber,r=a.winner,s=a.xIsNext,l=a.values,o=t.slice(0,n+1),c=o[o.length-1].squares.slice();if(!c[e]&&!r){var i=e%20,u=(e-i)/20;c[e]=s?"X":"O";var m=function(e,a,t,n){var r,s,l=1;if(0===e)r=0,s=4;else if(19===e)s=19,r=15;else for(;l<5;)e-l>=0&&(r=e-l),e+l<=19&&(s=e+l),l+=1;if(void 0!==n)for(var o=0;o<=s-r-4;o+=1)if((null===n[20*(r+o-1)+a]||null===n[20*(r+o+5)+a])&&n[20*(r+o)+a]&&n[a+20*(r+o+1)]===n[a+20*(r+o)]&&n[a+20*(r+o+2)]===n[a+20*(r+o)]&&n[a+20*(r+o+3)]===n[a+20*(r+o)]&&n[a+20*(r+o+4)]===n[a+20*(r+o)])return[20*(r+o)+a,a+20*(r+o+1),a+20*(r+o+2),a+20*(r+o+3),a+20*(r+o+4)];return null}(u,i,0,c),d=function(e,a,t,n){var r,s,l=1;if(0===a)r=0,s=4;else if(19===a)s=19,r=15;else for(;l<5;)a-l>=0&&(r=a-l),a+l<=19&&(s=a+l),l+=1;if(void 0!==n)for(var o=0;o<=s-r-4;o+=1)if((null===n[t-5+o]||null===n[t-o+1])&&n[20*e+r+o]&&n[20*e+r+o+1]===n[20*e+r+o]&&n[20*e+r+o+2]===n[20*e+r+o]&&n[20*e+r+o+3]===n[20*e+r+o]&&n[20*e+r+o+4]===n[20*e+r+o])return[20*e+r+o,20*e+r+o+1,20*e+r+o+2,20*e+r+o+3,20*e+r+o+4];return null}(u,i,e,c),p=function(e,a,t,n){var r,s,l,o=1;if(19===e&&0===a)return null;if(0===e||0===a)r=e,s=a,l=e+4;else if(19===e)r=e-4,s=a-4,l=e;else for(;o<5;)e-o>=0&&a-o>=0&&(r=e-o,s=a-o),e+o<=19&&a+o<=19&&(l=e+o),o+=1;if(void 0!==n)for(var c=0;c<=l-r-4;c+=1)if((null===n[20*(r+c-1)+s+c-1]||null===n[20*(r+c+5)+s+c+5])&&n[20*(r+c)+s]&&n[20*(r+c+1)+s+1]===n[20*(r+c)+s]&&n[20*(r+c+2)+s+2]===n[20*(r+c)+s]&&n[20*(r+c+3)+s+3]===n[20*(r+c)+s]&&n[20*(r+c+4)+s+4]===n[20*(r+c)+s])return[20*(r+c)+s,20*(r+c+1)+s+1,20*(r+c+2)+s+2,20*(r+c+3)+s+3,20*(r+c+4)+s+4];return null}(u,i,0,c),h=function(e,a,t,n){var r,s,l,o=1;if(19===e||19===a)return null;if(0===a)r=e,s=a,l=e+4;else if(0===e||19===a)r=e,s=a,l=a-4;else for(;o<5;)e-o>=0&&a+o<=19&&(r=e-o,s=a+o),e+o<=19&&a-o>=0&&(l=a-o),o+=1;if(void 0!==n)for(var c=0;c<=s-l-4;c+=1)if((null===n[20*(r+c-1)+s+c+1]||null===n[20*(r+c+5)+s+c-5])&&n[20*(r+c)+s]&&n[20*(r+c+1)+s-1]===n[20*(r+c)+s]&&n[20*(r+c+2)+s-2]===n[20*(r+c)+s]&&n[20*(r+c+3)+s-3]===n[20*(r+c)+s]&&n[20*(r+c+4)+s-4]===n[20*(r+c)+s])return[20*(r+c)+s,20*(r+c+1)+s-1,20*(r+c+2)+s-2,20*(r+c+3)+s-3,20*(r+c+4)+s-4];return null}(u,i,0,c),v=m||d||p||h;l[n+1]=v,this.props.handleClickSquare(e,v)}}},{key:"jumpTo",value:function(e){this.props.jumpTo(e)}},{key:"restart",value:function(){this.props.restart(),this.setState({reOdered:!1})}},{key:"render",value:function(){var e,a=this,t=this.props.game,n=t.history,s=t.winner,l=t.values,o=t.stepNumber,c=t.xIsNext,i=this.state.reOdered,u=n[o],m=l[o],d=null;return d=i?n.map((function(e,t){var s=n.length-t-1,l=s?"Go to move #  ".concat(s):"Go to game start";return r.a.createElement("li",{key:t.toString()},r.a.createElement(O.a,{variant:"secondary",className:"btn my-1",onClick:function(){return a.jumpTo(s)}},l))})):n.map((function(e,t){var n=t?"Go to move #  ".concat(t):"Go to game start";return r.a.createElement("li",{key:t.toString()},r.a.createElement(O.a,{variant:"secondary",className:"btn my-1",onClick:function(){return a.jumpTo(t)}},n))})),e=s?"Winner:".concat(s):"Next player:".concat(c?"X":"O"),r.a.createElement("div",{className:"game pt-1"},r.a.createElement("div",{className:"d-flex"},r.a.createElement(O.a,{color:"primary",className:"mb-4 ml-5 mr-5",onClick:function(){return a.restart()}},"Restart"),r.a.createElement("h5",{className:"ml-5"},e)),r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col-8"},r.a.createElement(C,{squares:u.squares,onClick:function(e){return a.handleClick(e)},values:m})),r.a.createElement("div",{className:"game-info "},r.a.createElement("h4",null,"Infomation"),r.a.createElement("hr",null),r.a.createElement(O.a,{variant:"primary m-1 p-1",className:"btn",onClick:function(){a.setState({reOdered:!i})}},"Re-odered"),r.a.createElement("ol",{className:"moves"},d))))}}]),a}(r.a.Component)),j=Object(o.b)((function(e){return{game:e.game}}),(function(e){return{handleClickSquare:function(a,t){e(function(e,a){return{type:"HANDLE_CLICK_SQUARE",i:e,checkAround:a}}(a,t))},jumpTo:function(a){e(function(e){return{type:"JUMP_TO",step:e}}(a))},restart:function(){e({type:"RESTART"})},logout:function(){e({type:"LOG_OUT"})}}}))(k),S=(t(108),t(132)),I=t(133),L=t(134),R=function(e){function a(e){var t;return Object(i.a)(this,a),(t=Object(m.a)(this,Object(d.a)(a).call(this,e))).handleFocus=function(e){t.setState(Object(c.a)({},e.target.name,""))},t.onChange=function(e){t.setState(Object(c.a)({},e.target.name,e.target.value))},t.handleClick=function(e){e.preventDefault()},t.state={username:"",password:"",newPassword:"",retypePassword:"",errors:!1},t}return Object(p.a)(a,e),Object(u.a)(a,[{key:"render",value:function(){var e=this.state,a=e.username,t=e.password,n=e.errors,s=e.newPassword,l=e.retypePassword,o=a.trim()||t.trim()&&s.trim()&&l.trim();return r.a.createElement("div",{className:"pl-5 pr-5"},r.a.createElement(S.a,{bg:"light",className:"mb-5"},r.a.createElement(S.a.Brand,{href:"#"},"CaroGame"),r.a.createElement(S.a.Toggle,{"aria-controls":"basic-navbar-nav"}),r.a.createElement(S.a.Collapse,{id:"basic-navbar-nav"},r.a.createElement(I.a,{className:"ml-auto"},r.a.createElement(L.a,{title:this.state.username,id:"basic-nav-dropdown",className:"mr-3"},r.a.createElement(L.a.Item,{href:"/me"},"Profile"),r.a.createElement(L.a.Divider,null),r.a.createElement(L.a.Item,{onClick:this.handleLogout},"Logout"))))),r.a.createElement("div",{className:"loginModal profile-container"},r.a.createElement("div",{className:"loginT mt-5 change-profile-title"},"Change Profile"),r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col-7"},r.a.createElement("div",{className:"activeR"},r.a.createElement("label",{className:"usernameLabel"},"USERNAME"),r.a.createElement("input",{type:"text",name:"username",id:"username",placeholder:"Enter your username...",onFocus:this.handleFocus,value:a,className:n?"errorInput":"normalInput",onChange:this.onChange})),r.a.createElement("hr",{width:"300px"}),r.a.createElement("div",{className:"activeR"},r.a.createElement("label",{className:"passwordLabel"},"PASSWORD"),r.a.createElement("input",{type:"password",name:"password",id:"password",placeholder:"Enter your password...",value:t,onFocus:this.handleFocus,className:n?"errorInput":"normalInput",onChange:this.onChange})),r.a.createElement("div",{className:"activeR"},r.a.createElement("label",{className:"passwordLabel"},"NEW PASSWORD"),r.a.createElement("input",{type:"password",name:"newPassword",id:"newpassword",placeholder:"Enter new password ... ",value:s,onFocus:this.handleFocus,className:n?"errorInput":"normalInput",onChange:this.onChange})),r.a.createElement("div",{className:"activeR"},r.a.createElement("label",{className:"passwordLabel"},"NEW PASSWORD"),r.a.createElement("input",{type:"password",name:"retypePassword",id:"renewpassword",placeholder:"Retype new password ...",value:l,onFocus:this.handleFocus,className:n?"errorInput":"normalInput",onChange:this.onChange}))),r.a.createElement("div",{className:"col-4"},r.a.createElement("img",{className:"img-thumbnail",alt:"avatar",src:"http://placehold.it/1000",width:"150vh",height:"150vh"}),r.a.createElement("h6",{className:"mt-1 ml-3"},"Change avatar"))),r.a.createElement("div",{className:"d-flex"},r.a.createElement("button",{onClick:this.handleClick,className:"loginButtonActive "},r.a.createElement("div",{className:"buttonText mb-5"},"Cancel")),r.a.createElement("button",{onClick:this.handleClick,className:o?"loginButtonActive ":"loginButton"},r.a.createElement("div",{className:"buttonText mb-5"},"Change")))))}}]),a}(r.a.Component),x=t(26);var A=function(e){var a=e.store.isLogin;return r.a.createElement(h.a,null,r.a.createElement(x.d,null,r.a.createElement(x.b,{exact:!0,path:"/"},a?r.a.createElement(x.a,{to:"/game"}):r.a.createElement(N,null)),r.a.createElement(x.b,{exact:!0,path:"/register"},a?r.a.createElement(x.a,{to:"/game"}):r.a.createElement(w,null)),r.a.createElement(x.b,{exact:!0,path:"/game"},a?r.a.createElement(j,null):r.a.createElement(x.a,{to:"/"})),r.a.createElement(x.b,{exact:!0,path:"/me"},a?r.a.createElement(R,null):r.a.createElement(x.a,{to:"/"}))))},P=Object(o.b)((function(e){return{store:e.game}}),null)(A);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));t(128);var T=t(29),F={isLogin:localStorage.getItem("usertoken")&&!0},D=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:F,a=arguments.length>1?arguments[1]:void 0;switch(a.type){case"HANDLE_LOGIN":return{isLogin:a.token&&!0};default:return e}};function q(e,a){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);a&&(n=n.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),t.push.apply(t,n)}return t}function B(e){for(var a=1;a<arguments.length;a++){var t=null!=arguments[a]?arguments[a]:{};a%2?q(t,!0).forEach((function(a){Object(c.a)(e,a,t[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):q(t).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(t,a))}))}return e}var _={history:[{squares:Array(400).fill(null)}],stepNumber:0,xIsNext:!0,winner:null,values:[null],isLogin:!0},U=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:_,a=arguments.length>1?arguments[1]:void 0,t=e.history,n=e.stepNumber,r=e.xIsNext,s=e.values,l=t.slice(0,n+1),o=l[l.length-1],c=o.squares.slice();switch(a.type){case"HANDLE_CLICK_SQUARE":var i=a.i,u=a.checkAround;return c[i]=r?"X":"O",B({},e,u?{winner:c[i],values:s,history:l.concat([{squares:c}]),stepNumber:l.length}:{history:l.concat([{squares:c}]),stepNumber:l.length,xIsNext:!r,values:s});case"JUMP_TO":var m=a.step,d=s[m];return B({},e,d?{stepNumber:m}:{stepNumber:m,xIsNext:m%2===0,winner:null});case"RESTART":return B({},e,{history:[{squares:Array(400).fill(null)}],stepNumber:0,xIsNext:!0,winner:null,values:[null]});case"LOG_OUT":return localStorage.removeItem("usertoken"),B({},e,{isLogin:!1});default:return e}},W=Object(T.b)({login:D,game:U});t(65).config();var M=Object(T.c)(W);l.a.render(r.a.createElement(o.a,{store:M}," ",r.a.createElement(P,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))},44:function(e,a,t){},77:function(e,a,t){e.exports=t(129)},82:function(e,a,t){},87:function(e,a,t){}},[[77,1,2]]]);
//# sourceMappingURL=main.748497c3.chunk.js.map