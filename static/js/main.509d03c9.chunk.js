(window.webpackJsonp=window.webpackJsonp||[]).push([[0],[,,,,,,,,function(e,t,a){e.exports=a.p+"static/media/loader.fb5bf093.svg"},function(e,t,a){e.exports=a(21)},,,,,,function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(7),o=a.n(c),i=(a(15),a(16),a(1)),s=a(2),l=a(4),u=a(3),m=a(5),h=a(8),p=a.n(h),d=(a(17),function(e){function t(){return Object(i.a)(this,t),Object(l.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"loader-wrapper"},r.a.createElement("p",{className:"loader-heading"},"Please provide user name in form above."),r.a.createElement("img",{src:p.a,alt:"Loader",className:"loader"}))}}]),t}(r.a.Component)),f=(a(18),function(e){function t(){return Object(i.a)(this,t),Object(l.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){var e=this.props.data;return r.a.createElement("div",null,r.a.createElement("ul",{className:"results"},e.map(function(e){return r.a.createElement("li",{key:e.id,className:"results-items"},r.a.createElement("a",{href:e.url,className:"results-link"},e.url),r.a.createElement("p",{className:"results-description"},e.description))})))}}]),t}(r.a.Component)),b=(a(19),function(e){function t(){return Object(i.a)(this,t),Object(l.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){var e=this.props,t=e.handleChange,a=e.handleSubmit,n=e.name;return r.a.createElement("div",null,r.a.createElement("form",{onSubmit:a,className:"search-form"},r.a.createElement("label",null,r.a.createElement("input",{placeholder:"User Name",type:"text",value:n,onChange:t,className:"search-input"})),r.a.createElement("input",{type:"submit",value:"Get repositories",className:"search-submit-btn"})))}}]),t}(r.a.Component)),v=(a(20),function(e){function t(){return Object(i.a)(this,t),Object(l.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return r.a.createElement("footer",{className:"footer"},r.a.createElement("p",null,"JS-school homework 2019"))}}]),t}(r.a.Component)),g=function(e){function t(){var e;return Object(i.a)(this,t),(e=Object(l.a)(this,Object(u.a)(t).call(this))).getUrlParam=function(){var t=window.location.href,a=new URL(t).searchParams.get("username");a&&(e.setState({name:a}),e.getRepos(a))},e.handleChange=function(t){e.setState({name:t.target.value})},e.handleSubmit=function(t){t.preventDefault();var a=e.state.name;e.getRepos(a)},e.getData=function(){var t=[],a=e.state.repos;Object.values(a).forEach(function(e){t.push({url:e.html_url,description:e.description,id:e.id})}),e.setState({data:t})},e.getRepos=function(t){var a="https://api.github.com/users/".concat(t,"/repos");t?fetch(a).then(function(e){if(e.ok)return e.json();throw alert("Request failed."),new Error("Request failed.")}).then(function(t){e.setState({repos:t,isLoading:!1}),e.getData()}).catch(function(e){console.log(e),alert(e)}):alert("Please enter name.")},e.state={name:"",repos:[],data:[],isLoading:!0},e}return Object(m.a)(t,e),Object(s.a)(t,[{key:"componentDidMount",value:function(){this.getUrlParam()}},{key:"render",value:function(){var e=this.state.data,t=this.state.isLoading;return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"content"},r.a.createElement(b,{name:this.state.name,handleChange:this.handleChange,handleSubmit:this.handleSubmit}),t?r.a.createElement(d,null):r.a.createElement(f,{data:e})),r.a.createElement(v,null))}}]),t}(r.a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(r.a.createElement(g,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}],[[9,1,2]]]);
//# sourceMappingURL=main.509d03c9.chunk.js.map