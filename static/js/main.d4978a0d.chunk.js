(this.webpackJsonpportfolio=this.webpackJsonpportfolio||[]).push([[0],{29:function(e,t,c){},35:function(e,t,c){},37:function(e,t,c){},38:function(e,t,c){},40:function(e,t,c){},41:function(e,t,c){},42:function(e,t,c){},43:function(e,t,c){},44:function(e,t,c){},46:function(e,t,c){"use strict";c.r(t);var n=c(0),l=c.n(n),i=c(13),r=c.n(i),a=c(7),s=(c(29),c(60)),o=c(61),j=c(1);function d(e){var t=e.menuOpen,c=e.setMenuOpen;return Object(j.jsx)("div",{className:"topbar "+(t&&"active"),children:Object(j.jsxs)("div",{className:"wrapper",children:[Object(j.jsxs)("div",{className:"left",children:[Object(j.jsx)("a",{href:"#intro",className:"logo",children:"Home"}),Object(j.jsxs)("div",{className:"itemContainer",children:[Object(j.jsx)(s.a,{className:"icon git",onClick:function(){window.open("https://www.github.com/aritonkaramani","_blank")}}),Object(j.jsx)(o.a,{className:"icon linkedIn",onClick:function(){window.open("https://www.linkedin.com/in/aritonkaramani","_blank")}})]})]}),Object(j.jsxs)("div",{className:"right",children:[Object(j.jsxs)("ul",{children:[Object(j.jsx)("li",{children:Object(j.jsx)("a",{href:"#aboutMe",children:"About"})}),Object(j.jsx)("li",{children:Object(j.jsx)("a",{href:"#designs",children:"Works"})}),Object(j.jsx)("li",{children:Object(j.jsx)("a",{href:"#projects",children:"Projects"})}),Object(j.jsx)("li",{children:Object(j.jsx)("a",{href:"#contact",children:"Contact"})})]}),Object(j.jsxs)("div",{className:"hamburger",onClick:function(){return c(!t)},children:[Object(j.jsx)("span",{className:"line1"}),Object(j.jsx)("span",{className:"line2"}),Object(j.jsx)("span",{className:"line3"})]})]})]})})}c(35);var m=c(4),u=c.n(m),b=c(20);function h(){for(var e=Object(n.useRef)(),t=[],c=0;c<0;c++)t.push(Object(j.jsx)("div",{className:"circle-container",children:Object(j.jsx)("div",{className:"circle",id:c})}));return Object(n.useEffect)((function(){Object(b.a)(e.current,{showCursor:!0,backDelay:1500,typeSpeed:100,strings:["Front End Developer","Tech Enthusiast","Freelancer"]})}),[]),Object(j.jsxs)("div",{className:"intro",id:"intro",children:[t,Object(j.jsx)("div",{className:"wrapper",children:Object(j.jsxs)("div",{className:"title",children:[Object(j.jsx)("h2",{children:"Hello! My name is"}),Object(j.jsx)("h1",{children:"Ariton Karamani"}),Object(j.jsx)("h3",{children:Object(j.jsx)("span",{ref:e})})]})}),Object(j.jsx)("a",{href:"#aboutMe",children:Object(j.jsx)(u.a,{className:"icon"})})]})}c(37),c(38);function p(e){var t=e.title,c=e.active,n=e.setSelected,l=e.id;return Object(j.jsx)("li",{className:c?"portfolioList active":"portfolioList",onClick:function(){return n(l)},children:t})}var f=c.p+"static/media/webport-min.269411d5.jpg",O=c.p+"static/media/apotekjoni-min.7f050e80.jpg",g=c.p+"static/media/3card-min.71ddb2c8.jpg",x=c.p+"static/media/PrevCards-min.6b140efc.jpg",v=c.p+"static/media/todolist-min.6daf8462.jpg",w=[{id:1,title:"Portfolio Website",img:Object(j.jsx)("img",{src:f,alt:""}),git:"https://github.com/aritonkaramani/portfolio",live:"http://aritonkaramani.github.io/portfolio"},{id:2,title:"Pharmacy Website",img:Object(j.jsx)("img",{src:O,alt:""}),git:"https://github.com/aritonkaramani/apotekjoni",live:"http://aritonkaramani.github.io/apotekjoni"},{id:3,title:"3-Card",img:Object(j.jsx)("img",{src:g,alt:""}),git:"https://github.com/aritonkaramani/3-card",live:"https://aritonkaramani.github.io/3-card"},{id:4,title:"Preview-Card",img:Object(j.jsx)("img",{src:x,alt:""}),git:"https://github.com/aritonkaramani/stats-preview-card-component-main",live:"https://aritonkaramani.github.io/stats-preview-card-component-main/"},{id:5,title:"To-do list",img:Object(j.jsx)("img",{src:v,alt:""}),git:"https://github.com/aritonkaramani/to-do-list",live:"https://aritonkaramani.github.io/to-do-list"}],y=[{id:1,title:"Portfolio Website",img:Object(j.jsx)("img",{src:f,alt:""}),git:"https://github.com/aritonkaramani/portfolio",live:"http://aritonkaramani.github.io/portfolio"},{id:2,title:"Pharmacy Website",img:Object(j.jsx)("img",{src:O,alt:""}),git:"https://github.com/aritonkaramani/apotekjoni",live:"http://aritonkaramani.github.io/apotekjoni"}],k=[{id:1,title:"3-Card",img:Object(j.jsx)("img",{src:g,alt:""}),git:"https://github.com/aritonkaramani/3-card",live:"https://aritonkaramani.github.io/3-card"},{id:2,title:"Preview-Card",img:Object(j.jsx)("img",{src:x,alt:""}),git:"https://github.com/aritonkaramani/stats-preview-card-component-main",live:"https://aritonkaramani.github.io/stats-preview-card-component-main/"}],E=[{id:1,title:"To-do List",img:Object(j.jsx)("img",{src:v,alt:""}),git:"https://github.com/aritonkaramani/to-do-list",live:"https://aritonkaramani.github.io/to-do-list"}],N=c(5);function C(e){e.popUp,e.setPopUp;var t=Object(n.useState)("featured"),c=Object(a.a)(t,2),l=c[0],i=c[1],r=Object(n.useState)([]),s=Object(a.a)(r,2),o=s[0],d=s[1];return Object(n.useEffect)((function(){switch(l){case"featured":d(w);break;case"webPortfolio":d(y);break;case"test3":d(k);break;case"webApps":d(E);break;default:d(w)}}),[l]),Object(j.jsxs)("div",{className:"portfolio",id:"designs",children:[Object(j.jsx)("h2",{children:"Designs"}),Object(j.jsx)("ul",{children:[{id:"featured",title:"Featured"},{id:"webPortfolio",title:"Websites"},{id:"test3",title:"Cards"},{id:"webApps",title:"Web Apps"}].map((function(e){return Object(j.jsx)(p,{title:e.title,active:l===e.id,setSelected:i,id:e.id})}))}),Object(j.jsx)(N.b,{duration:"2000",children:Object(j.jsx)("div",{className:"container",children:o.map((function(e){return Object(j.jsxs)("div",{className:"item",children:[e.img,Object(j.jsx)("h3",{children:e.title}),Object(j.jsxs)("div",{className:"smallContain",children:[Object(j.jsx)("div",{className:"git",onClick:function(){window.open(e.git,"_blank")},children:"GitHub"}),Object(j.jsx)("div",{className:"live",onClick:function(){window.open(e.live,"_blank")},children:"Live Preview"})]})]})}))})}),Object(j.jsx)("a",{href:"#projects",children:Object(j.jsx)(u.a,{className:"icon"})})]})}c(40);var M,S,P,z,I,L,A,B,H,F,R,_,T,D,W,J=["title","titleId"];function U(){return(U=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var c=arguments[t];for(var n in c)Object.prototype.hasOwnProperty.call(c,n)&&(e[n]=c[n])}return e}).apply(this,arguments)}function q(e,t){if(null==e)return{};var c,n,l=function(e,t){if(null==e)return{};var c,n,l={},i=Object.keys(e);for(n=0;n<i.length;n++)c=i[n],t.indexOf(c)>=0||(l[c]=e[c]);return l}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)c=i[n],t.indexOf(c)>=0||Object.prototype.propertyIsEnumerable.call(e,c)&&(l[c]=e[c])}return l}function V(e,t){var c=e.title,l=e.titleId,i=q(e,J);return n.createElement("svg",U({id:"Layer_1",xmlns:"http://www.w3.org/2000/svg",xmlnsXlink:"http://www.w3.org/1999/xlink",x:"0px",y:"0px",viewBox:"0 0 511.998 511.998",style:{enableBackground:"new 0 0 511.998 511.998"},xmlSpace:"preserve",ref:t,"aria-labelledby":l},i),c?n.createElement("title",{id:l},c):null,n.createElement("g",null,n.createElement("path",{style:{fill:"#DB380E"},d:"M253.464,94.869c-23.658,16.639-50.471,35.498-64.838,66.699 c-24.954,54.435,51.062,113.812,54.311,116.313c0.755,0.581,1.659,0.871,2.56,0.871c0.957,0,1.915-0.327,2.693-0.979 c1.509-1.262,1.937-3.406,1.031-5.152c-0.275-0.53-27.561-53.53-26.547-91.552c0.359-13.243,18.892-28.266,38.512-44.171 c17.97-14.568,38.34-31.079,50.258-50.394c26.164-42.516-2.916-84.322-3.213-84.74c-1.155-1.622-3.287-2.209-5.11-1.41 c-1.821,0.804-2.83,2.773-2.414,4.72c0.059,0.277,5.714,27.923-10.022,56.406C284.203,73.25,269.959,83.268,253.464,94.869z"}),n.createElement("path",{style:{fill:"#DB380E"},d:"M353.137,113.617c1.669-1.257,2.159-3.55,1.15-5.38c-1.011-1.83-3.211-2.637-5.165-1.895 c-4.019,1.528-98.416,37.915-98.416,81.88c0,30.307,12.946,46.317,22.399,58.009c3.708,4.586,6.909,8.546,7.964,11.927 c2.97,9.743-4.066,27.353-7.025,33.317c-0.853,1.714-0.435,3.792,1.016,5.044c0.784,0.677,1.763,1.021,2.743,1.021 c0.834,0,1.672-0.248,2.396-0.752c1.623-1.128,39.667-28.026,32.844-60.433c-2.542-12.318-8.595-21.318-13.936-29.26 c-8.274-12.305-14.25-21.193-5.184-37.609C304.545,150.338,352.65,113.981,353.137,113.617z"})),n.createElement("g",null,n.createElement("path",{style:{fill:"#73A1FB"},d:"M107.418,298.236c-1.618,4.845-0.854,9.651,2.207,13.903c10.233,14.207,46.48,22.029,102.068,22.029 c0.003,0,0.005,0,0.007,0c7.532,0,15.484-0.148,23.629-0.44c88.875-3.181,121.839-30.869,123.199-32.046 c1.482-1.283,1.878-3.419,0.957-5.147c-0.922-1.727-2.909-2.595-4.808-2.072c-31.301,8.546-89.748,11.58-130.288,11.58 c-45.363,0-68.465-3.268-74.121-5.681c2.902-3.985,20.802-11.101,42.983-15.464c2.12-0.416,3.577-2.374,3.367-4.524 s-2.016-3.79-4.177-3.79C179.439,276.584,114.234,277.628,107.418,298.236z"}),n.createElement("path",{style:{fill:"#73A1FB"},d:"M404.812,269.718c-18.331,0-35.714,9.188-36.446,9.577c-1.695,0.908-2.555,2.852-2.09,4.72 c0.467,1.865,2.144,3.176,4.067,3.178c0.389,0,39.102,0.317,42.608,22.436c3.106,19.082-36.629,50-52.202,60.304 c-1.682,1.113-2.335,3.263-1.554,5.123c0.665,1.583,2.206,2.573,3.868,2.573c0.29,0,0.584-0.03,0.876-0.092 c3.696-0.791,90.406-19.899,81.238-70.384C439.584,276.213,420.138,269.718,404.812,269.718z"}),n.createElement("path",{style:{fill:"#73A1FB"},d:"M345.347,363.755c0.302-1.617-0.371-3.262-1.717-4.207l-20.791-14.563 c-1.014-0.71-2.295-0.933-3.485-0.618c-0.217,0.055-21.959,5.771-53.525,9.276c-12.528,1.405-26.56,2.147-40.582,2.147 c-31.558,0-52.192-3.708-55.197-6.428c-0.398-0.764-0.272-1.111-0.201-1.304c0.546-1.518,3.472-3.322,5.358-4.036 c2.083-0.771,3.206-3.033,2.558-5.157c-0.646-2.127-2.837-3.378-4.999-2.859c-20.856,5.033-31.054,12.071-30.312,20.918 c1.318,15.686,37.65,23.737,68.365,25.865c4.417,0.302,9.194,0.455,14.195,0.455c0.003,0,0.005,0,0.008,0 c51.074,0,116.55-16.025,117.204-16.188C343.825,366.666,345.044,365.375,345.347,363.755z"}),n.createElement("path",{style:{fill:"#73A1FB"},d:"M188.602,397.419c1.575-1.024,2.273-2.971,1.714-4.764c-0.557-1.793-2.234-2.971-4.118-2.946 c-2.795,0.074-27.349,1.182-29.068,16.815c-0.52,4.672,0.818,8.941,3.979,12.686c8.816,10.448,32.614,16.658,72.741,18.984 c4.747,0.285,9.569,0.428,14.334,0.428c51.015,0,85.373-15.973,86.812-16.653c1.395-0.66,2.315-2.031,2.397-3.571 s-0.687-3.001-2.003-3.806l-26.275-16.04c-0.912-0.556-2.003-0.74-3.043-0.527c-0.166,0.035-16.849,3.495-42.026,6.913 c-4.764,0.648-10.73,0.977-17.73,0.977c-25.15,0-53.124-4.109-58.489-6.8C187.749,398.613,187.848,397.975,188.602,397.419z"}),n.createElement("path",{style:{fill:"#73A1FB"},d:"M224.408,486.85c116.854-0.099,179.571-20.88,191.653-33.957c4.277-4.626,4.739-9.006,4.376-11.867 c-0.898-7.04-7.311-11.35-8.038-11.818c-1.754-1.128-4.108-0.833-5.476,0.745c-1.365,1.578-1.397,3.884-0.027,5.461 c0.737,0.948,1.163,2.535-0.992,4.692c-4.83,4.511-53.545,18.204-134.656,22.318c-11.111,0.577-22.765,0.871-34.636,0.873 c-72.623,0-125.772-9.948-132.749-15.744c2.689-3.864,21.489-10.037,41.482-13.529c2.253-0.393,3.775-2.516,3.426-4.776 c-0.349-2.259-2.432-3.814-4.709-3.519c-0.564,0.077-2.478,0.191-4.694,0.327c-32.988,2.014-71.109,6.503-73.098,23.5 c-0.604,5.179,0.935,9.881,4.576,13.973c8.909,10.01,34.516,23.319,153.558,23.319C224.406,486.85,224.406,486.85,224.408,486.85z"}),n.createElement("path",{style:{fill:"#73A1FB"},d:"M439.013,456.578c-1.652-0.764-3.604-0.378-4.836,0.952c-0.171,0.185-17.74,18.556-70.564,29.344 c-20.223,4.052-58.183,6.107-112.826,6.107c-54.745,0-106.838-2.154-107.357-2.176c-2.176-0.106-4.037,1.476-4.333,3.618 c-0.297,2.14,1.083,4.158,3.184,4.658c0.542,0.128,55.135,12.918,129.779,12.918c35.801,0,70.639-2.907,103.548-8.645 c61.361-10.757,65.657-41.183,65.81-42.473C441.632,459.078,440.662,457.342,439.013,456.578z"})),M||(M=n.createElement("g",null)),S||(S=n.createElement("g",null)),P||(P=n.createElement("g",null)),z||(z=n.createElement("g",null)),I||(I=n.createElement("g",null)),L||(L=n.createElement("g",null)),A||(A=n.createElement("g",null)),B||(B=n.createElement("g",null)),H||(H=n.createElement("g",null)),F||(F=n.createElement("g",null)),R||(R=n.createElement("g",null)),_||(_=n.createElement("g",null)),T||(T=n.createElement("g",null)),D||(D=n.createElement("g",null)),W||(W=n.createElement("g",null)))}var X,G,Y=n.forwardRef(V),K=(c.p,["title","titleId"]);function Q(){return(Q=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var c=arguments[t];for(var n in c)Object.prototype.hasOwnProperty.call(c,n)&&(e[n]=c[n])}return e}).apply(this,arguments)}function Z(e,t){if(null==e)return{};var c,n,l=function(e,t){if(null==e)return{};var c,n,l={},i=Object.keys(e);for(n=0;n<i.length;n++)c=i[n],t.indexOf(c)>=0||(l[c]=e[c]);return l}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)c=i[n],t.indexOf(c)>=0||Object.prototype.propertyIsEnumerable.call(e,c)&&(l[c]=e[c])}return l}function $(e,t){var c=e.title,l=e.titleId,i=Z(e,K);return n.createElement("svg",Q({viewBox:"0 0 256 256",xmlns:"http://www.w3.org/2000/svg",preserveAspectRatio:"xMinYMin meet",ref:t,"aria-labelledby":l},i),c?n.createElement("title",{id:l},c):null,X||(X=n.createElement("path",{d:"M0 0h256v256H0V0z",fill:"#F7DF1E"})),G||(G=n.createElement("path",{d:"M67.312 213.932l19.59-11.856c3.78 6.701 7.218 12.371 15.465 12.371 7.905 0 12.89-3.092 12.89-15.12v-81.798h24.057v82.138c0 24.917-14.606 36.259-35.916 36.259-19.245 0-30.416-9.967-36.087-21.996M152.381 211.354l19.588-11.341c5.157 8.421 11.859 14.607 23.715 14.607 9.969 0 16.325-4.984 16.325-11.858 0-8.248-6.53-11.17-17.528-15.98l-6.013-2.58c-17.357-7.387-28.87-16.667-28.87-36.257 0-18.044 13.747-31.792 35.228-31.792 15.294 0 26.292 5.328 34.196 19.247L210.29 147.43c-4.125-7.389-8.591-10.31-15.465-10.31-7.046 0-11.514 4.468-11.514 10.31 0 7.217 4.468 10.14 14.778 14.608l6.014 2.577c20.45 8.765 31.963 17.7 31.963 37.804 0 21.654-17.012 33.51-39.867 33.51-22.339 0-36.774-10.654-43.819-24.574"})))}var ee,te=n.forwardRef($),ce=(c.p,["title","titleId"]);function ne(){return(ne=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var c=arguments[t];for(var n in c)Object.prototype.hasOwnProperty.call(c,n)&&(e[n]=c[n])}return e}).apply(this,arguments)}function le(e,t){if(null==e)return{};var c,n,l=function(e,t){if(null==e)return{};var c,n,l={},i=Object.keys(e);for(n=0;n<i.length;n++)c=i[n],t.indexOf(c)>=0||(l[c]=e[c]);return l}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)c=i[n],t.indexOf(c)>=0||Object.prototype.propertyIsEnumerable.call(e,c)&&(l[c]=e[c])}return l}function ie(e,t){var c=e.title,l=e.titleId,i=le(e,ce);return n.createElement("svg",ne({xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 48 48",width:"96px",height:"96px",ref:t,"aria-labelledby":l},i),c?n.createElement("title",{id:l},c):null,ee||(ee=n.createElement("path",{fill:"#f06292",d:"M39.867,25.956c-1.538,0.008-2.87,0.377-3.986,0.928c-0.408-0.815-0.822-1.532-0.891-2.065 c-0.081-0.622-0.175-0.994-0.077-1.735c0.098-0.741,0.527-1.791,0.521-1.87c-0.006-0.079-0.096-0.456-0.983-0.463 c-0.887-0.006-1.646,0.171-1.735,0.405c-0.089,0.234-0.26,0.761-0.366,1.311c-0.155,0.804-1.771,3.673-2.688,5.173 c-0.3-0.586-0.555-1.102-0.608-1.51c-0.081-0.622-0.175-0.994-0.077-1.735c0.098-0.741,0.527-1.791,0.521-1.87 c-0.006-0.079-0.096-0.456-0.983-0.463c-0.887-0.006-1.646,0.171-1.735,0.405c-0.089,0.234-0.185,0.781-0.366,1.311 c-0.182,0.529-2.329,5.314-2.892,6.555c-0.287,0.632-0.536,1.14-0.712,1.486c-0.001-0.001-0.001-0.002-0.001-0.002 s-0.011,0.023-0.029,0.062c-0.151,0.295-0.24,0.458-0.24,0.458s0.001,0.002,0.003,0.006c-0.12,0.217-0.248,0.418-0.311,0.418 c-0.044,0-0.133-0.577,0.019-1.369c0.32-1.66,1.087-4.248,1.08-4.338c-0.004-0.046,0.143-0.497-0.501-0.733 c-0.626-0.229-0.849,0.153-0.906,0.154c-0.055,0.001-0.096,0.135-0.096,0.135s0.697-2.911-1.33-2.911 c-1.268,0-3.024,1.387-3.889,2.644c-0.546,0.298-1.715,0.936-2.954,1.617c-0.476,0.262-0.962,0.529-1.423,0.783 c-0.031-0.035-0.063-0.069-0.095-0.104c-2.459-2.623-7.003-4.478-6.811-8.005c0.07-1.282,0.516-4.658,8.733-8.752 c6.731-3.354,12.12-2.431,13.051-0.386c1.33,2.923-2.88,8.354-9.87,9.138c-2.663,0.299-4.066-0.734-4.415-1.118 c-0.367-0.405-0.422-0.423-0.559-0.347c-0.223,0.124-0.082,0.481,0,0.694c0.209,0.543,1.065,1.506,2.525,1.986 c1.285,0.422,4.412,0.653,8.193-0.81c4.236-1.638,7.543-6.196,6.571-10.005c-0.988-3.874-7.412-5.148-13.492-2.988 C12.44,9.332,8.523,11.35,5.706,13.984c-3.349,3.132-3.883,5.859-3.663,6.998c0.782,4.048,6.361,6.684,8.595,8.637 c-0.11,0.061-0.214,0.118-0.308,0.17c-1.12,0.554-5.373,2.78-6.437,5.131c-1.207,2.667,0.192,4.581,1.118,4.839 c2.869,0.798,5.813-0.638,7.396-2.998c1.582-2.359,1.389-5.432,0.663-6.834c-0.009-0.017-0.019-0.034-0.028-0.052 c0.289-0.171,0.584-0.345,0.876-0.517c0.57-0.335,1.13-0.647,1.615-0.911c-0.272,0.744-0.471,1.637-0.574,2.926 c-0.122,1.514,0.499,3.471,1.311,4.241c0.358,0.339,0.788,0.347,1.06,0.347c0.945,0,1.376-0.786,1.851-1.716 c0.582-1.14,1.099-2.468,1.099-2.468s-0.648,3.586,1.118,3.586c0.644,0,1.291-0.835,1.58-1.26c0.001,0.005,0.001,0.007,0.001,0.007 s0.017-0.028,0.05-0.083c0.067-0.102,0.105-0.167,0.105-0.167s0.001-0.007,0.003-0.019c0.259-0.449,0.833-1.473,1.693-3.162 c1.112-2.182,2.178-4.916,2.178-4.916s0.099,0.668,0.424,1.774c0.191,0.65,0.597,1.369,0.918,2.059 c-0.258,0.358-0.416,0.563-0.416,0.563s0.001,0.004,0.004,0.011c-0.206,0.274-0.437,0.569-0.679,0.857 c-0.878,1.045-1.923,2.239-2.063,2.583c-0.165,0.406-0.126,0.704,0.193,0.945c0.233,0.175,0.647,0.203,1.08,0.174 c0.789-0.053,1.343-0.249,1.617-0.368c0.427-0.151,0.924-0.388,1.39-0.731c0.861-0.633,1.38-1.538,1.33-2.738 c-0.028-0.661-0.238-1.316-0.505-1.934c0.078-0.112,0.156-0.226,0.235-0.34c1.357-1.984,2.41-4.164,2.41-4.164 s0.099,0.668,0.424,1.774c0.164,0.559,0.489,1.17,0.781,1.768c-1.276,1.037-2.067,2.242-2.342,3.032 c-0.508,1.462-0.11,2.124,0.636,2.275c0.338,0.068,0.816-0.087,1.175-0.239c0.447-0.148,0.984-0.395,1.486-0.764 c0.861-0.633,1.689-1.519,1.639-2.718c-0.023-0.546-0.171-1.088-0.372-1.608c1.082-0.451,2.482-0.701,4.266-0.493 c3.827,0.447,4.577,2.836,4.434,3.836c-0.144,1-0.946,1.55-1.215,1.716c-0.268,0.166-0.35,0.224-0.328,0.347 c0.033,0.179,0.157,0.173,0.386,0.134c0.315-0.053,2.009-0.813,2.082-2.659C46.089,28.509,43.844,25.935,39.867,25.956z M10.37,35.9 c-1.268,1.383-3.038,1.905-3.798,1.465c-0.82-0.475-0.495-2.511,1.06-3.979c0.948-0.894,2.172-1.718,2.984-2.225 c0.185-0.111,0.456-0.274,0.786-0.472c0.055-0.031,0.086-0.048,0.086-0.048l-0.001-0.002c0.064-0.038,0.129-0.077,0.196-0.118 C12.25,32.61,11.701,34.449,10.37,35.9z M19.605,29.623c-0.441,1.076-1.365,3.83-1.928,3.682c-0.483-0.127-0.777-2.22-0.096-4.28 c0.342-1.037,1.074-2.276,1.504-2.757c0.692-0.774,1.454-1.027,1.639-0.713C20.959,25.955,19.882,28.948,19.605,29.623z M27.234,33.263c-0.187,0.098-0.359,0.159-0.438,0.112c-0.059-0.035,0.077-0.164,0.077-0.164s0.954-1.027,1.33-1.494 c0.219-0.272,0.472-0.595,0.748-0.955c0.002,0.036,0.003,0.072,0.003,0.107C28.952,32.099,27.764,32.929,27.234,33.263z M33.111,31.923c-0.14-0.099-0.116-0.42,0.343-1.421c0.18-0.393,0.592-1.054,1.306-1.686c0.083,0.26,0.133,0.509,0.132,0.741 C34.883,31.105,33.779,31.683,33.111,31.923z"})))}var re,ae,se,oe,je,de,me,ue,be,he,pe,fe,Oe,ge,xe,ve=n.forwardRef(ie),we=(c.p,["title","titleId"]);function ye(){return(ye=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var c=arguments[t];for(var n in c)Object.prototype.hasOwnProperty.call(c,n)&&(e[n]=c[n])}return e}).apply(this,arguments)}function ke(e,t){if(null==e)return{};var c,n,l=function(e,t){if(null==e)return{};var c,n,l={},i=Object.keys(e);for(n=0;n<i.length;n++)c=i[n],t.indexOf(c)>=0||(l[c]=e[c]);return l}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)c=i[n],t.indexOf(c)>=0||Object.prototype.propertyIsEnumerable.call(e,c)&&(l[c]=e[c])}return l}function Ee(e,t){var c=e.title,l=e.titleId,i=ke(e,we);return n.createElement("svg",ye({id:"Layer_1",xmlns:"http://www.w3.org/2000/svg",xmlnsXlink:"http://www.w3.org/1999/xlink",x:"0px",y:"0px",viewBox:"0 0 512 512",style:{enableBackground:"new 0 0 512 512"},xmlSpace:"preserve",ref:t,"aria-labelledby":l},i),c?n.createElement("title",{id:l},c):null,n.createElement("path",{style:{fill:"#FB8028"},d:"M46.917,10.199c-4.518,0-7.885,3.682-7.484,8.182l38.091,427.247c0.401,4.5,4.29,9.171,8.646,10.381 l161.636,44.879c4.354,1.21,11.478,1.21,15.833,0.003l162.127-44.953c4.354-1.208,8.248-5.879,8.649-10.377l38.153-427.179 c0.404-4.5-2.966-8.182-7.484-8.182L46.917,10.199L46.917,10.199z M183.083,292.6c4.518,0,8.542,3.682,8.946,8.182l2.413,27.042 c0.401,4.5,4.296,9.144,8.66,10.322l44.723,12.078c4.36,1.178,7.945,2.143,7.965,2.143c0.019,0,3.603-0.966,7.965-2.144 l44.803-12.107c4.36-1.178,8.259-5.825,8.663-10.322l4.858-54.178c0.404-4.5-2.962-8.182-7.48-8.182H142.478 c-4.518,0-8.542-3.684-8.943-8.182l-13.305-149.064c-0.357-4.013,3.046-7.298,7.565-7.298h256.091c4.516,0,7.921,3.284,7.563,7.299 l-4.313,47.103h-199.89c-4.518,0-7.885,3.682-7.484,8.182l3.521,39.357c0.401,4.499,4.427,8.182,8.946,8.182h182.716 c4.024,0,7.02,3.284,6.656,7.298l-13.85,155.14c-0.225,2.525-3.969,5.58-8.323,6.787l-95.51,26.483 c-4.354,1.206-7.972,2.205-8.039,2.219c-0.067,0.015-3.684-0.963-8.039-2.17l-95.612-26.531c-4.354-1.208-8.244-5.879-8.646-10.379 l-6.154-69.078c-0.401-4.5,2.969-8.182,7.487-8.182L183.083,292.6L183.083,292.6z"}),n.createElement("g",null,n.createElement("path",{style:{fill:"#C63F00"},d:"M255.727,512c-3.784,0-7.567-0.428-10.65-1.285l-161.635-44.88 c-8.393-2.331-15.304-10.629-16.076-19.305L29.274,19.286c-0.444-4.991,1.209-9.936,4.533-13.57C37.131,2.084,41.909,0,46.917,0 h418.166c5.011,0,9.793,2.086,13.117,5.723c3.324,3.636,4.973,8.583,4.525,13.572l-38.153,427.173 c-0.774,8.673-7.687,16.97-16.082,19.298l-162.127,44.953C263.28,511.573,259.502,512,255.727,512z M49.852,20.398l37.831,424.324 c0.104,0.395,0.846,1.286,1.31,1.49l161.541,44.848c2.569,0.715,7.807,0.714,10.383,0.001l162.124-44.952 c0.36-0.169,1.081-1.028,1.221-1.527l37.884-424.184H49.852z M256.031,419.198c-1.541,0-3.752-0.614-10.918-2.602L149.5,390.065 c-8.391-2.326-15.304-10.623-16.077-19.3l-6.155-69.078c-0.445-4.988,1.208-9.933,4.531-13.568 c3.325-3.634,8.104-5.719,13.114-5.719h38.168c9.835,0,18.226,7.674,19.103,17.471l2.408,26.972 c0.135,0.467,0.802,1.261,1.238,1.475l44.651,12.057c2.036,0.55,3.901,1.053,5.303,1.43c1.403-0.377,3.27-0.881,5.308-1.432 l44.73-12.088c0.439-0.215,1.109-1.013,1.244-1.482l4.589-51.175H142.479c-9.838,0-18.228-7.676-19.102-17.475l-13.305-149.063 c-0.415-4.675,1.109-9.162,4.29-12.641c3.351-3.662,8.248-5.762,13.433-5.762h256.091c0.001,0,0.003,0,0.004,0 c5.181,0,10.075,2.101,13.426,5.762c3.183,3.478,4.707,7.968,4.292,12.64l-4.316,47.13c-0.48,5.249-4.883,9.269-10.156,9.269 H190.182l3.161,35.323h181.603c4.775,0,9.331,1.991,12.502,5.461c3.172,3.474,4.743,8.197,4.311,12.958l-13.851,155.126 c-0.715,8.029-8.427,13.675-15.754,15.708l-95.512,26.484c-8.159,2.26-8.246,2.278-8.566,2.351 C257.274,419.075,256.719,419.198,256.031,419.198z M155.022,370.429l95.545,26.511c2.186,0.606,3.959,1.091,5.243,1.439 c1.424-0.393,3.321-0.917,5.384-1.489l95.509-26.483c0.418-0.115,0.799-0.273,1.119-0.432l13.28-148.765H192.229 c-9.84,0-18.233-7.677-19.105-17.477l-3.52-39.353c-0.446-4.992,1.207-9.937,4.53-13.572c3.324-3.634,8.102-5.718,13.111-5.718 h190.582l3.115-34.005H130.73l12.865,144.145H314.6c5.01,0,9.79,2.086,13.113,5.721s4.973,8.583,4.525,13.573l-4.859,54.176 c-0.78,8.701-7.729,16.98-16.163,19.258l-44.801,12.106c-9.246,2.498-9.246,2.498-10.625,2.498c-1.382,0-1.382,0-10.623-2.495 l-44.723-12.077c-8.437-2.279-15.384-10.56-16.159-19.265l-2.315-25.929h-34.121l5.887,66.084 C153.871,369.371,154.567,370.207,155.022,370.429z"}),n.createElement("path",{style:{fill:"#C63F00"},d:"M190.727,55.077H77.517c-5.632,0-10.199-4.567-10.199-10.199s4.567-10.199,10.199-10.199h113.21 c5.632,0,10.199,4.567,10.199,10.199S196.36,55.077,190.727,55.077z"}),n.createElement("path",{style:{fill:"#C63F00"},d:"M232.543,55.077h-4.08c-5.632,0-10.199-4.567-10.199-10.199s4.567-10.199,10.199-10.199h4.08 c5.632,0,10.199,4.567,10.199,10.199S238.176,55.077,232.543,55.077z"})),re||(re=n.createElement("g",null)),ae||(ae=n.createElement("g",null)),se||(se=n.createElement("g",null)),oe||(oe=n.createElement("g",null)),je||(je=n.createElement("g",null)),de||(de=n.createElement("g",null)),me||(me=n.createElement("g",null)),ue||(ue=n.createElement("g",null)),be||(be=n.createElement("g",null)),he||(he=n.createElement("g",null)),pe||(pe=n.createElement("g",null)),fe||(fe=n.createElement("g",null)),Oe||(Oe=n.createElement("g",null)),ge||(ge=n.createElement("g",null)),xe||(xe=n.createElement("g",null)))}var Ne,Ce,Me,Se,Pe,ze,Ie=n.forwardRef(Ee),Le=(c.p,["title","titleId"]);function Ae(){return(Ae=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var c=arguments[t];for(var n in c)Object.prototype.hasOwnProperty.call(c,n)&&(e[n]=c[n])}return e}).apply(this,arguments)}function Be(e,t){if(null==e)return{};var c,n,l=function(e,t){if(null==e)return{};var c,n,l={},i=Object.keys(e);for(n=0;n<i.length;n++)c=i[n],t.indexOf(c)>=0||(l[c]=e[c]);return l}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)c=i[n],t.indexOf(c)>=0||Object.prototype.propertyIsEnumerable.call(e,c)&&(l[c]=e[c])}return l}function He(e,t){var c=e.title,l=e.titleId,i=Be(e,Le);return n.createElement("svg",Ae({width:"256px",height:"256px",viewBox:"0 0 3618.6 3618.6",id:"Layer_2",xmlns:"http://www.w3.org/2000/svg",ref:t,"aria-labelledby":l},i),c?n.createElement("title",{id:l},c):null,Ne||(Ne=n.createElement("style",null,".st0{fill:#222}.st1{fill:#00d8ff}.st2{fill:none;stroke:#00d8ff;stroke-width:144.7456;stroke-miterlimit:10}")),Ce||(Ce=n.createElement("path",{className:"st0",d:"M0 0h3618.6v3618.6H0z"})),Me||(Me=n.createElement("circle",{className:"st1",cx:1806.5,cy:1807.1,r:302.6})),Se||(Se=n.createElement("path",{className:"st2",d:"M1806.5 1191.9c406.2 0 783.6 58.3 1068.1 156.2 342.8 118 553.6 296.9 553.6 458.9 0 168.8-223.4 358.9-591.5 480.8-278.3 92.2-644.6 140.4-1030.2 140.4-395.4 0-769.7-45.2-1051.2-141.4-356.1-121.7-570.6-314.2-570.6-479.8 0-160.7 201.3-338.2 539.3-456 285.6-99.5 672.3-159.1 1082.5-159.1z"})),Pe||(Pe=n.createElement("path",{className:"st2",d:"M1271 1501.3c202.9-351.9 442-649.7 669-847.2 273.5-238 533.8-331.2 674.1-250.3 146.2 84.3 199.3 372.8 121 752.7-59.2 287.2-200.4 628.5-393.1 962.6-197.5 342.5-423.7 644.2-647.6 840-283.3 247.7-557.3 337.3-700.7 254.6-139.2-80.3-192.4-343.3-125.7-695 56.4-297.4 198-662.1 403-1017.4z"})),ze||(ze=n.createElement("path",{className:"st2",d:"M1271.5 2119.8c-203.5-351.6-342.1-707.4-399.9-1002.7-69.6-355.8-20.4-627.9 119.8-709 146.1-84.6 422.5 13.5 712.5 271 219.3 194.7 444.4 487.5 637.6 821.3 198.1 342.2 346.6 688.8 404.3 980.5 73.1 369.2 13.9 651.3-129.4 734.2-139.1 80.5-393.5-4.7-664.9-238.2-229.2-197.3-474.5-502.1-680-857.1z"})))}var Fe,Re=n.forwardRef(He),_e=(c.p,["title","titleId"]);function Te(){return(Te=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var c=arguments[t];for(var n in c)Object.prototype.hasOwnProperty.call(c,n)&&(e[n]=c[n])}return e}).apply(this,arguments)}function De(e,t){if(null==e)return{};var c,n,l=function(e,t){if(null==e)return{};var c,n,l={},i=Object.keys(e);for(n=0;n<i.length;n++)c=i[n],t.indexOf(c)>=0||(l[c]=e[c]);return l}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)c=i[n],t.indexOf(c)>=0||Object.prototype.propertyIsEnumerable.call(e,c)&&(l[c]=e[c])}return l}function We(e,t){var c=e.title,l=e.titleId,i=De(e,_e);return n.createElement("svg",Te({xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 48 48",width:"96px",height:"96px",ref:t,"aria-labelledby":l},i),c?n.createElement("title",{id:l},c):null,Fe||(Fe=n.createElement("path",{fill:"#F4511E",d:"M42.2,22.1L25.9,5.8C25.4,5.3,24.7,5,24,5c0,0,0,0,0,0c-0.7,0-1.4,0.3-1.9,0.8l-3.5,3.5l4.1,4.1c0.4-0.2,0.8-0.3,1.3-0.3c1.7,0,3,1.3,3,3c0,0.5-0.1,0.9-0.3,1.3l4,4c0.4-0.2,0.8-0.3,1.3-0.3c1.7,0,3,1.3,3,3s-1.3,3-3,3c-1.7,0-3-1.3-3-3c0-0.5,0.1-0.9,0.3-1.3l-4-4c-0.1,0-0.2,0.1-0.3,0.1v10.4c1.2,0.4,2,1.5,2,2.8c0,1.7-1.3,3-3,3s-3-1.3-3-3c0-1.3,0.8-2.4,2-2.8V18.8c-1.2-0.4-2-1.5-2-2.8c0-0.5,0.1-0.9,0.3-1.3l-4.1-4.1L5.8,22.1C5.3,22.6,5,23.3,5,24c0,0.7,0.3,1.4,0.8,1.9l16.3,16.3c0,0,0,0,0,0c0.5,0.5,1.2,0.8,1.9,0.8s1.4-0.3,1.9-0.8l16.3-16.3c0.5-0.5,0.8-1.2,0.8-1.9C43,23.3,42.7,22.6,42.2,22.1z"})))}var Je=n.forwardRef(We),Ue=(c.p,c.p+"static/media/CV-Foto-Farg.5550b8e5.jpeg");function qe(){return Object(j.jsxs)("div",{className:"aboutMe",id:"aboutMe",children:[Object(j.jsx)(N.a,{duration:"3000",children:Object(j.jsx)("h2",{children:"About me"})}),Object(j.jsxs)("div",{className:"bottom",children:[Object(j.jsx)("div",{className:"bottomleft",children:Object(j.jsx)("div",{className:"right",children:Object(j.jsx)(N.a,{duration:"3000",children:Object(j.jsx)("img",{src:Ue,alt:""})})})}),Object(j.jsx)("div",{className:"bottomright",children:Object(j.jsxs)("div",{className:"border",children:[Object(j.jsx)("div",{className:"topbottomright"}),Object(j.jsxs)("div",{className:"botbottomright",children:[Object(j.jsx)(N.a,{duration:"3000",children:Object(j.jsxs)("div",{className:"info",children:[Object(j.jsx)("p",{children:"I am a front end developer with a passion for creating and coding. I do mostly frontend but I'm always willing to expand my knowledge in unknown areas. Feel free to look at my projects if you scroll down or if you have seen enough"}),Object(j.jsx)("a",{href:"#contact",className:"CTA",children:"Lets Talk"})]})}),Object(j.jsxs)("div",{className:"techstack",children:[Object(j.jsxs)("div",{className:"javas",children:[Object(j.jsx)(Y,{className:"Ikon"}),"Java"]}),Object(j.jsxs)("div",{className:"jss",children:[Object(j.jsx)(te,{className:"Ikon"}),"JavaScript"]}),Object(j.jsxs)("div",{className:"htmls",children:[Object(j.jsx)(Ie,{className:"Ikon"}),"HTML5"]}),Object(j.jsxs)("div",{className:"reacts",children:[Object(j.jsx)(Re,{className:"Ikon"}),"React"]}),Object(j.jsxs)("div",{className:"sass",children:[Object(j.jsx)(ve,{className:"Ikon"}),"SASS"]}),Object(j.jsxs)("div",{className:"git",children:[Object(j.jsx)(Je,{className:"Ikon"}),"Git"]})]})]})]})})]}),Object(j.jsx)("a",{href:"#designs",children:Object(j.jsx)(u.a,{className:"icon"})})]})}c(41);var Ve,Xe,Ge,Ye,Ke,Qe,Ze,$e,et,tt,ct,nt,lt,it,rt,at,st=["title","titleId"];function ot(){return(ot=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var c=arguments[t];for(var n in c)Object.prototype.hasOwnProperty.call(c,n)&&(e[n]=c[n])}return e}).apply(this,arguments)}function jt(e,t){if(null==e)return{};var c,n,l=function(e,t){if(null==e)return{};var c,n,l={},i=Object.keys(e);for(n=0;n<i.length;n++)c=i[n],t.indexOf(c)>=0||(l[c]=e[c]);return l}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)c=i[n],t.indexOf(c)>=0||Object.prototype.propertyIsEnumerable.call(e,c)&&(l[c]=e[c])}return l}function dt(e,t){var c=e.title,l=e.titleId,i=jt(e,st);return n.createElement("svg",ot({id:"Capa_1",xmlns:"http://www.w3.org/2000/svg",xmlnsXlink:"http://www.w3.org/1999/xlink",x:"0px",y:"0px",viewBox:"0 0 58.561 58.561",style:{enableBackground:"new 0 0 58.561 58.561"},xmlSpace:"preserve",ref:t,"aria-labelledby":l},i),c?n.createElement("title",{id:l},c):null,Ve||(Ve=n.createElement("g",null,n.createElement("path",{d:"M57.688,30.369l-2.85-2.85c-1.164-1.164-3.057-1.162-4.221,0L35.226,42.91l-2.121,7.779l-0.519,0.519 c-0.388,0.388-0.389,1.014-0.006,1.405l-0.005,0.02l0.019-0.005c0.194,0.191,0.446,0.288,0.699,0.288 c0.256,0,0.512-0.098,0.707-0.293l0.52-0.52l7.778-2.121l15.39-15.391C58.852,33.427,58.852,31.533,57.688,30.369z M37.535,43.43 l10.243-10.243l4.243,4.243L41.778,47.673L37.535,43.43z M36.633,45.356l3.22,3.22l-4.428,1.207L36.633,45.356z M56.274,33.177 l-2.839,2.839l-4.243-4.242l2.839-2.839c0.385-0.385,1.01-0.384,1.394-0.001l2.85,2.85C56.658,32.167,56.658,32.793,56.274,33.177z "}),n.createElement("path",{d:"M29,44.646H3.879c4.548-3.604,14.801-11.781,20.069-16.403l1.421,1.255c1.001,0.894,2.317,1.341,3.632,1.341 c1.313,0,2.627-0.446,3.625-1.337L56,8.863v15.782c0,0.553,0.448,1,1,1s1-0.447,1-1v-18c0-0.008-0.004-0.014-0.005-0.022 c-0.002-0.111-0.019-0.223-0.06-0.331c-0.003-0.007-0.008-0.012-0.011-0.019c-0.011-0.027-0.029-0.048-0.041-0.073 c-0.041-0.081-0.09-0.156-0.15-0.222c-0.026-0.028-0.053-0.052-0.082-0.077c-0.062-0.055-0.13-0.1-0.204-0.137 c-0.033-0.017-0.063-0.034-0.097-0.047C57.24,5.675,57.124,5.646,57,5.646H1c-0.124,0-0.24,0.029-0.351,0.071 C0.614,5.73,0.584,5.747,0.552,5.764C0.478,5.802,0.41,5.847,0.348,5.901C0.319,5.927,0.292,5.95,0.266,5.978 c-0.06,0.066-0.108,0.14-0.15,0.222C0.104,6.226,0.086,6.247,0.075,6.273C0.072,6.28,0.067,6.285,0.064,6.292 C0.024,6.4,0.007,6.512,0.005,6.623C0.004,6.631,0,6.638,0,6.646v39c0,0.003,0.002,0.005,0.002,0.009 c0.001,0.107,0.017,0.214,0.053,0.319c0.004,0.012,0.013,0.021,0.018,0.033c0.014,0.035,0.035,0.065,0.052,0.098 c0.038,0.073,0.082,0.141,0.136,0.201c0.028,0.031,0.056,0.058,0.087,0.085c0.061,0.053,0.127,0.097,0.199,0.134 c0.034,0.018,0.065,0.037,0.101,0.051C0.759,46.617,0.876,46.646,1,46.646h28c0.552,0,1-0.447,1-1S29.552,44.646,29,44.646z  M2,43.582V8.863l20.437,18.046C16.881,31.763,6.086,40.349,2,43.582z M54.357,7.646l-23.058,20.36 c-1.267,1.132-3.33,1.132-4.602-0.004l-1.979-1.747c-0.006-0.007-0.007-0.015-0.013-0.021c-0.022-0.025-0.053-0.035-0.077-0.057 L3.643,7.646H54.357z"}))),Xe||(Xe=n.createElement("g",null)),Ge||(Ge=n.createElement("g",null)),Ye||(Ye=n.createElement("g",null)),Ke||(Ke=n.createElement("g",null)),Qe||(Qe=n.createElement("g",null)),Ze||(Ze=n.createElement("g",null)),$e||($e=n.createElement("g",null)),et||(et=n.createElement("g",null)),tt||(tt=n.createElement("g",null)),ct||(ct=n.createElement("g",null)),nt||(nt=n.createElement("g",null)),lt||(lt=n.createElement("g",null)),it||(it=n.createElement("g",null)),rt||(rt=n.createElement("g",null)),at||(at=n.createElement("g",null)))}var mt=n.forwardRef(dt);c.p;function ut(){return Object(j.jsxs)("div",{className:"contact",id:"contact",children:[Object(j.jsx)("div",{className:"left",children:Object(j.jsx)(mt,{className:"icon"})}),Object(j.jsxs)("div",{className:"right",children:[Object(j.jsx)("h2",{children:"Get in Touch"}),Object(j.jsx)("div",{id:"contact-form",children:Object(j.jsxs)("form",{action:"https://formspree.io/f/mrgryjgj",method:"POST",children:[Object(j.jsx)("input",{type:"hidden",name:"_subject",value:"Contact request from Portfolio Website"}),Object(j.jsx)("input",{type:"name",name:"_name",placeholder:"Your name",required:!0}),Object(j.jsx)("input",{type:"email",name:"_replyto",placeholder:"Your email",required:!0}),Object(j.jsx)("textarea",{name:"message",placeholder:"Type your message",required:!0}),Object(j.jsx)("button",{type:"submit",children:"Send"})]})})]})]})}c(42),c(43);function bt(e){var t=e.menuOpen,c=e.setMenuOpen;return Object(j.jsx)("div",{className:"menu "+(t&&"active"),children:Object(j.jsxs)("ul",{children:[Object(j.jsx)("li",{onClick:function(){return c(!1)},children:Object(j.jsx)("a",{href:"#intro",children:"Home"})}),Object(j.jsx)("li",{onClick:function(){return c(!1)},children:Object(j.jsx)("a",{href:"#aboutMe",children:"About me"})}),Object(j.jsx)("li",{onClick:function(){return c(!1)},children:Object(j.jsx)("a",{href:"#designs",children:"Designs"})}),Object(j.jsx)("li",{onClick:function(){return c(!1)},children:Object(j.jsx)("a",{href:"#projects",children:"Projects"})}),Object(j.jsx)("li",{onClick:function(){return c(!1)},children:Object(j.jsx)("a",{href:"#contact",children:"Contact"})}),Object(j.jsxs)("li",{children:[Object(j.jsx)(s.a,{className:"icon git",onClick:function(){window.open("https://www.github.com/aritonkaramani","_blank")}}),Object(j.jsx)(o.a,{className:"icon linkedIn",onClick:function(){window.open("https://www.linkedin.com/in/aritonkaramani","_blank")}})]})]})})}c(44);var ht=c(22),pt=c.n(ht),ft=c(23),Ot=c.n(ft),gt=c(63),xt=c(64),vt=c(62),wt=c(65);function yt(){var e=Object(n.useState)(0),t=Object(a.a)(e,2),c=t[0],l=t[1],i=[{id:"1",icon:Object(j.jsx)(vt.a,{}),title:"My Portfolio",desc:"The portfolio website currently being browsed. Made using Javascript, SASS, React, HTML and Material UI ",img:f,git:"https://github.com/aritonkaramani/portfolio",preview:"https://aritonkaramani.github.io/portfolio"},{id:"2",icon:Object(j.jsx)(gt.a,{}),title:"Pharmacy Landing Page",desc:"A pharmacy landing page I made for a local pharmacy, the page utilizes SASS, React, HTML, Javascript and Material UI",img:O,git:"https://github.com/aritonkaramani/apotekjoni",preview:"https://aritonkaramani.github.io/apotekjoni"},{id:"3",icon:Object(j.jsx)(xt.a,{}),title:"React To-DO list",desc:"A TO-DO list created with React. Utilizes SASS, JavaScript",img:v,git:"https://github.com/aritonkaramani/to-do-list",preview:"https://aritonkaramani.github.io/to-do-list"}],r=function(e){l("left"===e?c>0?c-1:2:c<i.length-1?c+1:0)};return Object(j.jsxs)("div",{className:"testimonials",id:"projects",children:[Object(j.jsx)("div",{className:"slider",style:{transform:"translateX(-".concat(100*c,"vw)")},children:i.map((function(e){return Object(j.jsx)(N.a,{duration:"3000",children:Object(j.jsx)("div",{className:"container",children:Object(j.jsxs)("div",{className:"item",children:[Object(j.jsx)("div",{className:"left",children:Object(j.jsxs)("div",{className:"leftContainer",children:[Object(j.jsx)("div",{className:"imgContainer",children:e.icon}),Object(j.jsx)("h2",{children:e.title}),Object(j.jsx)("p",{children:e.desc}),Object(j.jsxs)("span",{children:[Object(j.jsx)(s.a,{className:"iconLink",onClick:function(t){window.open(e.git,"_blank")}}),Object(j.jsx)(wt.a,{className:"iconLink",onClick:function(t){window.open(e.preview,"_blank")}})]})]})}),Object(j.jsx)("div",{className:"right",children:Object(j.jsx)("img",{src:e.img,alt:""})})]})})})}))}),Object(j.jsx)(pt.a,{className:"arrow Left",onClick:function(){return r("left")}}),Object(j.jsx)(Ot.a,{className:"arrow Right",onClick:function(){return r("right")}}),Object(j.jsx)("a",{href:"#contact",children:Object(j.jsx)(u.a,{className:"icon"})})]})}var kt=c(18),Et=c.n(kt);c(45);var Nt=function(){Object(n.useEffect)((function(){Et.a.init({duration:3e3}),Et.a.refresh()}));var e=Object(n.useState)(!1),t=Object(a.a)(e,2),c=t[0],l=t[1];return Object(j.jsxs)("div",{className:"app",children:[Object(j.jsx)(d,{menuOpen:c,setMenuOpen:l}),Object(j.jsx)(bt,{menuOpen:c,setMenuOpen:l}),Object(j.jsxs)("div",{className:"sections",children:[Object(j.jsx)(h,{}),Object(j.jsx)(qe,{}),Object(j.jsx)(C,{}),Object(j.jsx)(yt,{}),Object(j.jsx)(ut,{})]})]})};r.a.render(Object(j.jsx)(l.a.StrictMode,{children:Object(j.jsx)(Nt,{})}),document.getElementById("root"))}},[[46,1,2]]]);
//# sourceMappingURL=main.d4978a0d.chunk.js.map