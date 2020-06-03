(this["webpackJsonpsimple-ts-react-app"]=this["webpackJsonpsimple-ts-react-app"]||[]).push([[0],{11:function(e,t,a){},13:function(e,t,a){"use strict";a.r(t);var r=a(0),n=a.n(r),c=a(4),s=a.n(c),l=(a(11),a(2)),o=a.n(l),u=a(5),i=a(1);function m(e){var t=e.errorState;return(n.a.createElement("figure",{className:"alert","data-state":t.type},n.a.createElement("svg",{className:"alert__icon",xmlns:"http://www.w3.org/2000/svg","aria-hidden":"true",focusable:"false",width:"1em",height:"1em",viewBox:"0 0 24 24"},n.a.createElement("path",{fill:"currentColor",d:t.iconPath})),n.a.createElement("p",{className:"alert__content"},t.message)))}var h={type:"error",message:"Please search for at least 3 characters.",iconPath:"M11.148 4.374a.973.973 0 01.334-.332c.236-.143.506-.178.756-.116s.474.216.614.448l8.466 14.133a.994.994 0 01-.155 1.192.99.99 0 01-.693.301H3.533a.997.997 0 01-.855-1.486zM9.432 3.346l-8.47 14.14c-.422.731-.506 1.55-.308 2.29s.68 1.408 1.398 1.822c.464.268.976.4 1.475.402H20.47a3 3 0 002.572-4.507L14.568 3.346a2.995 2.995 0 00-4.123-1.014c-.429.26-.775.615-1.012 1.014zM11 9v4a1 1 0 002 0V9a1 1 0 00-2 0zm2 8a1 1 0 10-2 0 1 1 0 002 0z"},p={type:"success",message:"Yay! You'll see the search results below.",iconPath:"M19.293 5.293L9 15.586l-4.293-4.293a.999.999 0 10-1.414 1.414l5 5a.999.999 0 001.414 0l11-11a.999.999 0 10-1.414-1.414z"};function f(e){var t=e.setSearchTerm,a=n.a.useState(""),r=Object(i.a)(a,2),c=r[0],s=r[1],l=n.a.useState(h),o=Object(i.a)(l,2),u=o[0],f=o[1],d=n.a.useRef(null),v=n.a.useRef(null),A=n.a.useRef(null),E=new RegExp(d&&d.current&&d.current.getAttribute("pattern")||"([a-zA-Z0-9].*?){3}");return d&&d.current&&(d.current.removeAttribute("required"),d.current.removeAttribute("pattern")),v&&v.current&&v.current.setAttribute("novalidate",""),n.a.createElement(n.a.Fragment,null,n.a.createElement("form",{id:"searchForm",action:"/",className:"[ search__form ] [ flow ]",method:"POST",ref:v,onSubmit:function(e){return function(e){if(e.preventDefault(),!E.test(c.trim()))return f(h),void(d&&d.current&&d.current.setAttribute("aria-invalid","true"));d&&d.current&&d.current.removeAttribute("aria-invalid"),t(c),f(p)}(e)}},n.a.createElement("label",{htmlFor:"search"},"Search Cocktails"),n.a.createElement("div",{className:"inline-field-control"},n.a.createElement("input",{type:"text",name:"search",id:"search",autoCapitalize:"none",autoCorrect:"off",ref:d,required:!0,pattern:"([a-zA-Z0-9].*?){3}",onChange:function(e){return s(e.target.value)}}),n.a.createElement("button",{type:"submit",className:"button"},n.a.createElement("span",{className:"visually-hidden"},"Search Cocktails"),n.a.createElement("svg",{xmlns:"http://www.w3.org/2000/svg","aria-hidden":"true",focusable:"false",width:"1em",height:"1em",viewBox:"0 0 24 24"},n.a.createElement("path",{fill:"currentColor",d:"M11.293 5.707L16.586 11H5a1 1 0 000 2h11.586l-5.293 5.293a.999.999 0 101.414 1.414l7-7a1.006 1.006 0 000-1.414l-7-7a.999.999 0 10-1.414 1.414z"}))))),n.a.createElement("div",{"aria-atomic":"true",role:"alert",ref:A,className:"search__alert"},n.a.createElement(m,{errorState:u})))}function d(e,t){switch(t.type){case"LOADING_COCKTAILS":return{status:"LOADING_COCKTAILS"};case"ERROR_LOADING_COCKTAILS":return{status:"ERROR_LOADING_COCKTAILS"};case"LOADED_COCKTAILS":return{status:"LOADED_COCKTAILS",cocktails:t.payload};default:return e}}var v=function(){var e=n.a.useReducer(d,{status:"LOADING_COCKTAILS"}),t=Object(i.a)(e,2),a=t[0],r=t[1],c=n.a.useState("Margarita"),s=Object(i.a)(c,2),l=s[0],m=s[1],h=n.a.useRef(new AbortController);return n.a.useEffect((function(){return function(){var e=Object(u.a)(o.a.mark((function e(){var t,a;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return h.current.abort(),h.current=new AbortController,r({type:"LOADING_COCKTAILS"}),e.prev=3,e.next=6,fetch("https://www.thecocktaildb.com/api/json/v1/1/search.php?s=".concat(l),{signal:h.current.signal});case 6:return t=e.sent,e.next=9,t.json();case 9:a=e.sent,r({type:"LOADED_COCKTAILS",payload:a.drinks}),e.next=16;break;case 13:e.prev=13,e.t0=e.catch(3),r({type:"ERROR_LOADING_COCKTAILS"});case 16:case"end":return e.stop()}}),e,null,[[3,13]])})));return function(){return e.apply(this,arguments)}}()(),function(){h.current.abort()}}),[l]),n.a.createElement("main",{className:"center text-center"},n.a.createElement("div",{className:"[ flow ]"},n.a.createElement("h1",{className:"search__heading"},"TypeScript Cocktail Search"),n.a.createElement(f,{setSearchTerm:m}),n.a.createElement("section",{className:"list"},n.a.createElement("ul",{className:"[flow]"},"ERROR_LOADING_COCKTAILS"===a.status&&n.a.createElement("p",null,"An error occured."),"LOADING_COCKTAILS"===a.status&&n.a.createElement("p",null,"Loading..."),"LOADED_COCKTAILS"===a.status&&a.cocktails?a.cocktails.map((function(e,t){return n.a.createElement("li",{className:"box ".concat(t%2!==0&&"box__invert"),key:e.idDrink},e.strDrink)})):n.a.createElement("p",null,"No result.")))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));s.a.render(n.a.createElement(v,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))},6:function(e,t,a){e.exports=a(13)}},[[6,1,2]]]);
//# sourceMappingURL=main.569178fe.chunk.js.map