(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[472,626,182,678],{77546:function(e,t,a){"use strict";a.d(t,{Z:function(){return i}});var n=a(85893);a(67294);var r=a(25675),s=a.n(r);function i(e){var t,a,r;return e.avatar?(0,n.jsx)(s(),{unoptimized:!0,src:e.avatar,alt:"Avatar",width:90,height:90,style:{objectFit:"cover"},className:"rounded-full aspect-square ".concat(null!==(t=e.className)&&void 0!==t?t:""),onClick:e.onCLick}):(0,n.jsx)("div",{className:"aspect-square flex items-center justify-center bg-indigo-100 text-indigo-600 rounded-full text-center ".concat(null!==(a=e.textStyle)&&void 0!==a?a:"text-3xl"," font-bold ring-2 ring-indigo-500 ").concat(null!==(r=e.className)&&void 0!==r?r:""),onClick:e.onCLick,children:e.icon?e.icon:e.avatarTitle})}},27888:function(e,t,a){"use strict";a.d(t,{Z:function(){return _}});var n=a(85893),r=a(67294),s=a(41664),i=a.n(s),o=a(25675),l=a.n(o);class c{constructor(e,t){this.href=e,this.title=t}}var h=a(91580),d=a.n(h),p=a(77546),u=a(2078),g=a(11163);let v=r.forwardRef(function({title:e,titleId:t,...a},n){return r.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",strokeWidth:1.5,stroke:"currentColor","aria-hidden":"true",ref:n,"aria-labelledby":t},a),e?r.createElement("title",{id:t},e):null,r.createElement("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M15.75 9V5.25A2.25 2.25 0 0013.5 3h-6a2.25 2.25 0 00-2.25 2.25v13.5A2.25 2.25 0 007.5 21h6a2.25 2.25 0 002.25-2.25V15M12 9l-3 3m0 0l3 3m-3-3h12.75"}))});var f=a(31730);class x extends f.Z{get pages(){let e=[];return this.props.hideAllPages||(e.push(new c("/","Pets")),e.push(new c("/agenda","Agenda")),this.props.pages&&e.push(...this.props.pages)),e}render(){return(0,n.jsx)("nav",{className:d().navbar,children:(0,n.jsxs)("div",{className:d().container,children:[(0,n.jsx)("div",{className:d().rightSideContainer,children:(0,n.jsxs)(i(),{href:"/",className:d().logoContainer,children:[(0,n.jsx)(l(),{src:"/logo.png",width:33,height:35,className:d().logo,alt:"Pet Journal Logo"}),(0,n.jsx)("span",{className:d().logoTitle,children:"Pet Journal"})]})}),(0,n.jsxs)("div",{className:d().leftSideContainer,children:[(0,n.jsx)("div",{className:d().pagesContainer,children:this.pages.map(e=>(0,n.jsx)(i(),{href:e.href,className:d().pageContainer,children:(0,n.jsx)("span",{className:"".concat(d().pageLink," ").concat(this.props.router.pathname===e.href?d().pageSelected:""),children:e.title})},e.title))}),!this.props.hideAllPages&&(0,n.jsxs)("div",{className:"flex flex-row gap-2 items-center",children:[(0,n.jsx)(p.Z,{icon:(0,n.jsx)(u.Z,{className:"flex p-1"}),onCLick:()=>this.props.router.push("/account"),className:"hover:bg-indigo-200 hover:text-indigo-700 h-[30px] w-[30px]"}),(0,n.jsx)(v,{className:"h-10 w-10 text-slate-300 p-2 rounded-full hover:bg-gray-600",onClick:()=>this.logout(()=>this.props.router.replace("/auth/login"))})]}),this.props.buttons&&(0,n.jsx)("div",{className:d().buttonsContainer,children:this.props.buttons})]})]})})}constructor(e){super(e),this.state={}}}var _=(0,g.withRouter)(x)},62472:function(e,t,a){"use strict";a.r(t);var n=a(85893);a(67294);var r=a(27888),s=a(81280),i=a(31730),o=a(11163);class l extends i.Z{componentDidMount(){let e=this.cookies.get("token");void 0!==e?(this.setState({token:e}),this.initInterval=setInterval(()=>{this.props.router.isReady&&(this.props.init&&this.props.init(e),clearInterval(this.initInterval))},1)):this.logout(()=>this.props.router.replace("/auth/login"))}render(){return s.Z.isNotEmpty(this.state.token)?(0,n.jsxs)("div",{className:"flex flex-col h-screen bg-slate-700",children:[!this.props.hideNav&&(0,n.jsx)(r.Z,{}),(0,n.jsx)("span",{className:"flex flex-col grow overflow-y-auto ".concat(this.props.className),children:this.props.children})]}):(0,n.jsx)(n.Fragment,{})}constructor(e){super(e),this.state={}}}t.default=(0,o.withRouter)(l)},91580:function(e){e.exports={navbar:"navbar_navbar__2a9Wu",rightSideContainer:"navbar_rightSideContainer__rDPEf",container:"navbar_container__EaLw0",logoContainer:"navbar_logoContainer__cUW1d",logo:"navbar_logo__VRcP0",logoTitle:"navbar_logoTitle__fVGI4",leftSideContainer:"navbar_leftSideContainer__hgHrN",pagesContainer:"navbar_pagesContainer__fbAl_",pageContainer:"navbar_pageContainer__DnRsw",pageLink:"navbar_pageLink__GOJ7T",pageSelected:"navbar_pageSelected__Or1V9",buttonsContainer:"navbar_buttonsContainer__yEhcw"}},2078:function(e,t,a){"use strict";var n=a(67294);let r=n.forwardRef(function({title:e,titleId:t,...a},r){return n.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",fill:"currentColor","aria-hidden":"true",ref:r,"aria-labelledby":t},a),e?n.createElement("title",{id:t},e):null,n.createElement("path",{d:"M10 8a3 3 0 100-6 3 3 0 000 6zM3.465 14.493a1.23 1.23 0 00.41 1.412A9.957 9.957 0 0010 18c2.31 0 4.438-.784 6.131-2.1.43-.333.604-.903.408-1.41a7.002 7.002 0 00-13.074.003z"}))});t.Z=r}}]);