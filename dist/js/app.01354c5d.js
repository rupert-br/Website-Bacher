(function(e){function t(t){for(var a,c,n=t[0],l=t[1],s=t[2],u=0,b=[];u<n.length;u++)c=n[u],Object.prototype.hasOwnProperty.call(r,c)&&r[c]&&b.push(r[c][0]),r[c]=0;for(a in l)Object.prototype.hasOwnProperty.call(l,a)&&(e[a]=l[a]);d&&d(t);while(b.length)b.shift()();return o.push.apply(o,s||[]),i()}function i(){for(var e,t=0;t<o.length;t++){for(var i=o[t],a=!0,n=1;n<i.length;n++){var l=i[n];0!==r[l]&&(a=!1)}a&&(o.splice(t--,1),e=c(c.s=i[0]))}return e}var a={},r={app:0},o=[];function c(t){if(a[t])return a[t].exports;var i=a[t]={i:t,l:!1,exports:{}};return e[t].call(i.exports,i,i.exports,c),i.l=!0,i.exports}c.m=e,c.c=a,c.d=function(e,t,i){c.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:i})},c.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},c.t=function(e,t){if(1&t&&(e=c(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var i=Object.create(null);if(c.r(i),Object.defineProperty(i,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var a in e)c.d(i,a,function(t){return e[t]}.bind(null,a));return i},c.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return c.d(t,"a",t),t},c.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},c.p="/Website-Bacher/";var n=window["webpackJsonp"]=window["webpackJsonp"]||[],l=n.push.bind(n);n.push=t,n=n.slice();for(var s=0;s<n.length;s++)t(n[s]);var d=l;o.push([0,"chunk-vendors"]),i()})({0:function(e,t,i){e.exports=i("56d7")},"3ef8":function(e,t,i){"use strict";i("70df")},"56d7":function(e,t,i){"use strict";i.r(t);i("e260"),i("e6cf"),i("cca6"),i("a79d");var a=i("7a23");function r(e,t,i,r,o,c){var n=Object(a["w"])("Navbar"),l=Object(a["w"])("router-view"),s=Object(a["w"])("Contact"),d=Object(a["w"])("Footer");return Object(a["r"])(),Object(a["e"])(a["a"],null,[Object(a["i"])(n),Object(a["i"])(l),Object(a["i"])(s),Object(a["i"])(d)],64)}var o={class:"navbar navbar-expand-lg navbar-light bg-primary"},c={class:"container-fluid p-0"},n=Object(a["f"])("button",{class:"navbar-toggler ms-4",type:"button","data-bs-toggle":"collapse","data-bs-target":"#navbar-collapse","aria-controls":"navbarTogglerDemo03","aria-expanded":"false","aria-label":"Toggle navigation"},[Object(a["f"])("span",{class:"navbar-toggler-icon"})],-1),l=Object(a["f"])("div",{class:"p-4 p-lg-0"},[Object(a["f"])("svg",{width:"82",height:"82",viewBox:"0 0 80 80",fill:"none",xmlns:"http://www.w3.org/2000/svg"},[Object(a["f"])("path",{d:"M80 80H54.6624C51.6368 79.996 48.7363 78.7914 46.5964 76.6503C44.4566 74.5092 43.2521 71.6063 43.2469 68.5777C43.2469 63.1513 47.0399 57.9467 51.895 56.7439C53.98 56.2104 56.1856 56.4209 58.1323 57.3392L58.1596 57.3529C58.9879 57.7558 59.9089 57.9293 60.8269 57.8556C63.347 57.6551 65.5849 55.1614 65.5197 52.6236C65.4741 50.8771 64.4986 49.2551 62.907 48.2861C61.147 47.2139 58.1869 44.7156 58.1444 40.041C58.1562 37.4902 57.2194 35.0262 55.5162 33.1288C53.813 31.2314 51.4654 30.0362 48.9304 29.776L47.1522 29.5922L46.8275 27.826C46.5376 26.2515 45.7057 24.8285 44.4764 23.8044C43.247 22.7803 41.698 22.2198 40.0986 22.2204C34.4303 22.2204 33.2711 25.8987 33.2711 31.4238V33.8143H30.88C25.1403 33.8143 20.4703 38.46 20.4703 44.1704V49.1974L18.7498 49.7001C15.9141 50.5262 13.4486 53.5075 14.406 56.8836C14.7217 58.0453 15.3904 59.0801 16.3195 59.8447C17.2486 60.6093 18.3921 61.0658 19.5919 61.1512C20.099 61.1886 20.6089 61.161 21.1091 61.0692C24.0677 60.5179 26.9549 60.8231 29.4538 61.95C30.3843 62.369 31.3936 62.5839 32.4139 62.5803C34.3387 62.5783 36.1841 61.812 37.5452 60.4496C38.9063 59.0872 39.6718 57.24 39.6738 55.3132H44.4515C44.4479 58.5078 43.1785 61.5706 40.9218 63.8295C38.6651 66.0885 35.6054 67.3591 32.4139 67.3627C30.7185 67.3657 29.0421 67.0064 27.4966 66.3088C25.8868 65.5843 23.9812 65.3975 21.9845 65.7696C21.0805 65.938 20.1585 65.9891 19.2414 65.9215C14.7519 65.5919 11.0484 62.5575 9.81035 58.1927C8.25671 52.7177 11.4596 47.8503 15.6926 45.7802V44.1704C15.6926 36.6057 21.2866 30.3197 28.5677 29.2065C28.7847 26.2586 29.4568 23.9168 30.6069 22.0913C32.552 19.0037 35.7457 17.4379 40.0986 17.4379C42.5178 17.4377 44.8767 18.1932 46.8464 19.5991C48.816 21.005 50.2983 22.9911 51.0863 25.2806C54.4449 26.0103 57.452 27.8709 59.6057 30.5518C61.7593 33.2328 62.9294 36.572 62.9207 40.0122C62.9404 42.234 64.274 43.5158 65.3892 44.1947C68.3735 46.0172 70.2079 49.1169 70.2943 52.4945C70.4248 57.5792 66.2616 62.2143 61.2032 62.6167C59.4408 62.7575 57.6729 62.424 56.0825 61.6508C55.1338 61.2082 54.0602 61.112 53.0481 61.379C50.2792 62.0685 48.0261 65.2958 48.0261 68.5716C48.0281 70.3336 48.7283 72.0229 49.9729 73.2688C51.2176 74.5147 52.9052 75.2155 54.6655 75.2175H75.2238V4.78244H4.77773V75.2175H35.3467V70.8315H40.1244V80H0V0H80V80Z",fill:"#0F301C"})])],-1),s={class:"collapse navbar-collapse border-header mx-md-auto ps-md-4",id:"navbar-collapse"},d={class:"nav navbar-nav"},u={class:"nav-item"},b=Object(a["h"])("Philosophie"),m={class:"nav-item"},p=Object(a["h"])("Projekte"),f={class:"nav-item abs-center-x"},v=Object(a["h"])("Bacher"),h=Object(a["f"])("li",{class:"nav-item px-5 ms-lg-auto d-lg-none pb-3"},[Object(a["f"])("a",{class:"nav-link",href:"mailto:office@hans-bacher.at"},"Kontakt")],-1),j=Object(a["f"])("ul",{class:"nav navbar-nav ms-auto"},[Object(a["f"])("li",{class:"nav-item px-5 contact-navbar"},[Object(a["f"])("a",{class:"nav-link",href:"mailto:office@hans-bacher.at"},"Kontakt")])],-1);function g(e,t,i,r,g,O){var x=Object(a["w"])("router-link");return Object(a["r"])(),Object(a["e"])("nav",o,[Object(a["f"])("div",c,[n,Object(a["i"])(x,{to:"/"},{default:Object(a["B"])((function(){return[l]})),_:1}),Object(a["f"])("div",s,[Object(a["f"])("ul",d,[Object(a["f"])("li",u,[Object(a["i"])(x,{to:"/philosophie",class:"nav-link"},{default:Object(a["B"])((function(){return[b]})),_:1})]),Object(a["f"])("li",m,[Object(a["i"])(x,{to:"/projekte",class:"nav-link"},{default:Object(a["B"])((function(){return[p]})),_:1})]),Object(a["f"])("li",f,[Object(a["i"])(x,{to:"/",class:"nav-link company-name-header fw-bold"},{default:Object(a["B"])((function(){return[v]})),_:1})]),h]),j])])])}var O={},x=i("6b0d"),w=i.n(x);const y=w()(O,[["render",g]]);var C=y,k={class:"container-fluid bg-primary text-dark"},L=Object(a["g"])('<footer class="footer-container"><h2 class="pb-3 pt-2">Kontakt</h2><div class="footer-grid"><div class="footer-grid-container"><div class="footer-grid-item-header subheader-footer">Tischlerei Hans Bacher</div><div class="footer-grid-item-content-left"> Hintere Lendstraße 19<br> 5730 Mittersill</div><div class="footer-grid-item-content-right"> T: +43 660 4436236<br> E: <a class="footer-mail" href="mailto:office@hansbacher.at">office@hansbacher.at</a></div></div><div class="footer-grid-container"><div class="footer-grid-item-header subheader-footer">Rechtliches</div><div class="footer-grid-item-content-left"> Geschäftsbedingungen<br> Impressum </div><div class="footer-grid-item-content-right"> Datenschutz<br> Cookies </div></div></div></footer>',1),H=[L];function P(e,t){return Object(a["r"])(),Object(a["e"])("div",k,H)}const B={},T=w()(B,[["render",P]]);var E=T,q={class:"container-fluid bg-primary-light text-dark text-center p-3 p-md-5"},M=Object(a["g"])('<div class="container contact-box col-md-8"><h2>Lern uns kennen</h2><div class="contact-box-content"> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet. </div><div class="fw-bold d-flex justify-content-center align-items-center"><a class="contact-link p-2" href="mailto:office@hansbacher.at"> Kontakt <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="currentColor" class="bi bi-arrow-right mb-1" viewBox="0 0 16 16"><path fill-rule="evenodd" d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8z"></path></svg></a></div></div>',1),_=[M];function A(e,t){return Object(a["r"])(),Object(a["e"])("div",q,_)}const S={},z=w()(S,[["render",A]]);var N=z,R={components:{Navbar:C,Footer:E,Contact:N}};i("3ef8");const D=w()(R,[["render",r]]);var V=D,I=(i("b0c0"),i("d3b7"),i("6c02")),F=i("f1ac"),K=i.n(F),U=Object(a["f"])("div",{class:"container-fluid bg-primary extra-ws p-4 p-md-5"},[Object(a["f"])("div",{class:"row my-5 mx-auto px-md-5 py-md-5"},[Object(a["f"])("div",{class:"col-lg-5 my-auto"},[Object(a["f"])("div",{class:"h1 header-alpina text-center row"}," Handwerk, einzigartig "),Object(a["f"])("div",{class:"row px-md-5 mx-md-5"}," Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ")]),Object(a["f"])("div",{class:"col-lg-7 text-center"},[Object(a["f"])("div",{class:"img"},[Object(a["f"])("img",{src:K.a,width:"646px",class:"img-fluid",alt:"Responsive image"})])])])],-1),W={class:"container-fluid bg-primary-light p-md-5"},G={class:"row mx-auto px-5 py-5"},J=Object(a["f"])("div",{class:"col-lg-7"},[Object(a["f"])("h2",null,"Es sind die kleinen Dinge, die das Ganze zu etwas besonderem machen."),Object(a["f"])("div",null,"HANS BACHER")],-1),Z={class:"col-lg-5"},Q={class:"mt-lg-5 mx-lg-5 px-lg-5 pt-lg-5"},X=Object(a["h"])(" Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. "),Y={class:"fw-bold pt-3"},$=Object(a["h"])(" Philosphie "),ee=Object(a["f"])("svg",{xmlns:"http://www.w3.org/2000/svg",width:"18",height:"18",fill:"currentColor",class:"bi bi-arrow-right mb-1",viewBox:"0 0 16 16"},[Object(a["f"])("path",{"fill-rule":"evenodd",d:"M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8z"})],-1),te={class:"container-fluid bg-primary-extra-light p-md-5"},ie={class:"row mx-auto px-5 py-5 mb-4 col-md-10"},ae={class:"col-lg-6 px-md-5"},re=Object(a["f"])("div",null,"UNSER STECKENPFERD",-1),oe=Object(a["f"])("h2",null,"Hotellerie",-1),ce=Object(a["f"])("div",{class:"col-md-8 mb-3"},"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",-1),ne=Object(a["h"])(" Projekte Hotellerie "),le=Object(a["f"])("svg",{xmlns:"http://www.w3.org/2000/svg",width:"18",height:"18",fill:"currentColor",class:"bi bi-arrow-right mb-1",viewBox:"0 0 16 16"},[Object(a["f"])("path",{"fill-rule":"evenodd",d:"M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8z"})],-1),se=Object(a["f"])("div",{class:"col-lg-6 px-md-5"},"Image",-1),de={class:"row mx-auto px-5 landing-box mb-4 col-md-10"},ue=Object(a["f"])("div",{class:"col-lg-6 px-md-5"},"Image",-1),be={class:"col-lg-6 px-md-5"},me=Object(a["f"])("div",null,"UNSERE LEIDENSCHAFT",-1),pe=Object(a["f"])("h2",null,"Privaträume",-1),fe=Object(a["f"])("div",{class:"col-md-8 mb-3"},"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",-1),ve=Object(a["h"])(" Projekte Privat "),he=Object(a["f"])("svg",{xmlns:"http://www.w3.org/2000/svg",width:"18",height:"18",fill:"currentColor",class:"bi bi-arrow-right mb-1",viewBox:"0 0 16 16"},[Object(a["f"])("path",{"fill-rule":"evenodd",d:"M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8z"})],-1),je={class:"row mx-auto px-5 py-5 mb-5 col-md-10"},ge={class:"col-lg-6 px-md-5"},Oe=Object(a["f"])("div",null,"UNSERE SPEZIALITÄT",-1),xe=Object(a["f"])("h2",null,"Türen",-1),we=Object(a["f"])("div",{class:"col-md-8 mb-3"},"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",-1),ye=Object(a["h"])(" Projekte Türen "),Ce=Object(a["f"])("svg",{xmlns:"http://www.w3.org/2000/svg",width:"18",height:"18",fill:"currentColor",class:"bi bi-arrow-right mb-1",viewBox:"0 0 16 16"},[Object(a["f"])("path",{"fill-rule":"evenodd",d:"M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8z"})],-1),ke=Object(a["f"])("div",{class:"col-lg-6 px-md-5"},"Image",-1);function Le(e,t,i,r,o,c){var n=Object(a["w"])("router-link");return Object(a["r"])(),Object(a["e"])(a["a"],null,[U,Object(a["f"])("div",W,[Object(a["f"])("div",G,[J,Object(a["f"])("div",Z,[Object(a["f"])("div",Q,[X,Object(a["f"])("div",Y,[Object(a["i"])(n,{class:"contact-link text-dark",to:"/philosophie"},{default:Object(a["B"])((function(){return[$,ee]})),_:1})])])])])]),Object(a["f"])("div",te,[Object(a["f"])("div",ie,[Object(a["f"])("div",ae,[re,oe,ce,Object(a["i"])(n,{class:"contact-link text-dark",to:{path:"/projekte",query:{name:"hotel"}}},{default:Object(a["B"])((function(){return[ne,le]})),_:1})]),se]),Object(a["f"])("div",de,[ue,Object(a["f"])("div",be,[me,pe,fe,Object(a["i"])(n,{class:"contact-link text-dark",to:{path:"/projekte",query:{name:"privat"}}},{default:Object(a["B"])((function(){return[ve,he]})),_:1})])]),Object(a["f"])("div",je,[Object(a["f"])("div",ge,[Oe,xe,we,Object(a["i"])(n,{class:"contact-link text-dark",to:{path:"/projekte",query:{name:"tueren"}}},{default:Object(a["B"])((function(){return[ye,Ce]})),_:1})]),ke])])],64)}var He={created:function(){document.title="Hans Bacher Tischlerei"}};const Pe=w()(He,[["render",Le]]);var Be=Pe,Te={class:"container"},Ee=Object(a["f"])("h1",null,"This is an about page",-1),qe=[Ee];function Me(e,t){return Object(a["r"])(),Object(a["e"])("div",Te,qe)}const _e={},Ae=w()(_e,[["render",Me]]);var Se=Ae,ze=(i("4de4"),Object(a["f"])("div",{class:"container-fluid bg-primary extra-ws p-4 p-md-5"},[Object(a["f"])("div",{class:"row my-5 mx-auto px-md-5 py-md-5"},[Object(a["f"])("div",{class:"col-lg-5 my-auto"},[Object(a["f"])("div",{class:"h1 header-alpina text-center row"}," Projekte aus Leidenschaft "),Object(a["f"])("div",{class:"row px-md-5 mx-md-5"}," Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ")]),Object(a["f"])("div",{class:"col-lg-7 text-center"},[Object(a["f"])("div",{class:"img"},[Object(a["f"])("img",{src:K.a,width:"646px",class:"img-fluid",alt:"Responsive image"})])])])],-1)),Ne={class:"container-fluid bg-primary-extra-light"},Re={class:"container-fluid p-5"},De={class:"container-fluid p-5 grid-container"},Ve={key:0,class:"p-5 grid-item"},Ie=Object(a["f"])("div",null,[Object(a["h"])("Mehr "),Object(a["f"])("svg",{xmlns:"http://www.w3.org/2000/svg",width:"18",height:"18",fill:"currentColor",class:"bi bi-arrow-right mb-1",viewBox:"0 0 16 16"},[Object(a["f"])("path",{"fill-rule":"evenodd",d:"M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8z"})])],-1);function Fe(e,t,i,r,o,c){var n=Object(a["w"])("router-link");return Object(a["r"])(),Object(a["e"])(a["a"],null,[ze,Object(a["f"])("div",Ne,[Object(a["f"])("div",Re,[Object(a["f"])("button",{class:"btn btn-secondary mx-2 border h3 p-3",onClick:t[0]||(t[0]=function(e){return c.filter("all")})},"ALLE"),Object(a["f"])("button",{class:"btn btn-secondary mx-2 border h3 p-3",onClick:t[1]||(t[1]=function(e){return c.filter("hotel")})},"HOTELLERIE"),Object(a["f"])("button",{class:"btn btn-secondary mx-2 border h3 p-3",onClick:t[2]||(t[2]=function(e){return c.filter("privat")})},"PRIVAT"),Object(a["f"])("button",{class:"btn btn-secondary mx-2 border h3 p-3",onClick:t[3]||(t[3]=function(e){return c.filter("tueren")})},"TÜREN")]),Object(a["f"])("div",De,[(Object(a["r"])(!0),Object(a["e"])(a["a"],null,Object(a["v"])(o.projects,(function(e){return Object(a["r"])(),Object(a["e"])(a["a"],{key:e.index},[o.selected==e.type||"all"==o.selected?(Object(a["r"])(),Object(a["e"])("div",Ve,[Object(a["f"])("span",null,Object(a["y"])(e.year),1),Object(a["f"])("h3",null,Object(a["y"])(e.title),1),Object(a["i"])(n,{class:"contact-link",to:"/projekte/".concat(e.id)},{default:Object(a["B"])((function(){return[Ie]})),_:2},1032,["to"])])):Object(a["d"])("",!0)],64)})),128))])])],64)}var Ke={props:["name"],created:function(){document.title="Projekte - Hans Bacher Tischlerei",void 0===this.name?this.selected="all":this.selected=this.name},data:function(){return{selected:"all",projects:[{id:1,title:"Hotel Falkensteiner",content:"Das ist Projekt 1.",type:"hotel",year:"2017"},{id:2,title:"Hotel xyz",content:"Das ist Projekt 2.",type:"hotel",year:"2018"},{id:3,title:"Privat Mustermann",content:"Das ist Projekt 3.",type:"privat",year:"2020"},{id:4,title:"Haus Mustermann",content:"Das ist ein Projekt mit Türen.",type:"tueren",year:"2021"}]}},methods:{filter:function(e){this.selected=e}}};const Ue=w()(Ke,[["render",Fe]]);var We=Ue,Ge=Object(a["g"])('<div class="container-fluid bg-primary p-4 p-md-5"><div class="h1 header-alpina text-center m-5 p-5 col-md-8 mx-auto"> Kreation die auf Werten basiert. </div></div><div class="container-fluid bg-primary-extra-light py-5"><div class="col-md-6 p-2 mx-auto"> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </div></div><div class="container-fluid bg-dark p-5"> Placeholder </div><div class="container-fluid bg-primary-extra-light py-5"><div class="col-md-8 p-2 mx-auto my-5"><h2 class="mb-2 mt-5">Unsere Werte</h2><div class="row pb-5"><div class="col-md-6"> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </div><div class="col-md-6"> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </div></div></div></div>',4);function Je(e,t,i,a,r,o){return Ge}var Ze={created:function(){document.title="Philosophie - Hans Bacher Tischlerei"}};const Qe=w()(Ze,[["render",Je]]);var Xe=Qe,Ye={class:"container-fluid bg-primary-extra-light"};function $e(e,t){return Object(a["r"])(),Object(a["e"])("div",Ye," This a details page ")}const et={},tt=w()(et,[["render",$e]]);var it=tt,at={class:"container p-5"},rt=Object(a["f"])("h1",null,"404 - Not found",-1),ot=[rt];function ct(e,t){return Object(a["r"])(),Object(a["e"])("div",at,ot)}const nt={},lt=w()(nt,[["render",ct]]);var st=lt,dt=[{path:"/",name:"Home",component:Be,meta:{title:"Home Page - Example App",metaTags:[{name:"description",content:"The home page of our example app."},{property:"og:description",content:"The home page of our example app."}]}},{path:"/about",name:"About",component:Se},{path:"/projekte",name:"projekte",component:We,props:function(e){return{name:e.query.name}}},{path:"/projekte/:id",name:"ProjectDetail",component:it},{path:"/philosophie",name:"Philosophie",component:Xe},{path:"/:pathMatch(.*)*",name:"Not Found",component:st}],ut=Object(I["a"])({history:Object(I["b"])("/Website-Bacher/"),routes:dt,scrollBehavior:function(e,t,i){return new Promise((function(e,t){setTimeout((function(){e({left:0,top:0})}),100)}))}}),bt=ut,mt=i("5502"),pt=Object(mt["a"])({state:{},mutations:{},actions:{},modules:{}});i("78a7"),i("7b17");Object(a["c"])(V).use(pt).use(bt).mount("#app")},"70df":function(e,t,i){},"78a7":function(e,t,i){},f1ac:function(e,t,i){e.exports=i.p+"img/forest.c95c6fa4.jpg"}});
//# sourceMappingURL=app.01354c5d.js.map