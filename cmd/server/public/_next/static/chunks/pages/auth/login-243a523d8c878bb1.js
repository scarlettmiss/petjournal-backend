(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[344],{40163:function(e,s,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/auth/login",function(){return t(24561)}])},24561:function(e,s,t){"use strict";t.r(s),t.d(s,{default:function(){return x}});var a=t(85893),i=t(43067),r=t(41664),n=t.n(r);t(67294);class o{constructor(){this.email="",this.password=""}}var l=t(95546),d=t(11163),h=t(27888),c=t(43432),m=t(84639),u=t(31730),p=t(96245);class g extends u.Z{render(){return(0,a.jsxs)("main",{className:"flex flex-col grow h-screen",children:[(0,a.jsx)(h.Z,{hideAllPages:!0,buttons:(0,a.jsx)(i.Z,{title:"Sign Up",variant:"primary",onClick:this.navigateToSignUp})}),(0,a.jsx)("div",{className:"flex items-center justify-center h-full bg-[url('/register-bg.jpg')] dark:bg-[url('/register-bg-dark.jpg')] bg-contain bg-center",children:(0,a.jsx)("div",{className:"container items-center mx-auto bg-white dark:bg-slate-800 max-w-sm lg:max-w-md border rounded-md border-indigo-600  px-4 py-12 sm:px-6 lg:px-8",children:(0,a.jsxs)("div",{className:"w-full max-w-md space-y-8",children:[(0,a.jsxs)("div",{children:[(0,a.jsx)("h2",{className:"mt-6 text-center text-3xl font-bold tracking-tight text-gray-900 dark:text-white",children:"Sign in to your account"}),(0,a.jsxs)("p",{className:"mt-2 text-center text-sm text-gray-600 dark:text-gray-300",children:["Or"," ",(0,a.jsx)(n(),{href:"/auth/signup",className:"font-medium text-indigo-600 dark:text-indigo-400 hover:text-indigo-500 dark:hover:text-indigo-300 ",children:"Create a new account"})]})]}),(0,a.jsxs)("form",{className:"mt-8 space-y-6",method:"POST",onSubmit:this.onSubmit,children:[(0,a.jsx)("input",{type:"hidden",name:"remember",defaultValue:"true"}),(0,a.jsxs)("div",{className:"shadow-sm",children:[(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)("label",{htmlFor:"email-address",className:"sr-only",children:"Email address"}),(0,a.jsx)(l.Z,{id:"email-address",name:"email",type:"email",autoComplete:"email",required:!0,width:"full",classNames:"rounded-t-md",placeholder:"Email address",value:this.state.vm.email,onInput:this.onEmailChange})]}),(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)("label",{htmlFor:"password",className:"sr-only",children:"Password"}),(0,a.jsx)(l.Z,{id:"password",name:"password",type:"password",width:"full",autoComplete:"current-password",required:!0,classNames:"rounded-b-md",placeholder:"Password",value:this.state.vm.password,onInput:this.onPasswordChange})]})]}),(0,a.jsx)(m.Z,{message:this.state.serverError}),(0,a.jsx)(i.Z,{variant:"primary",type:"submit",title:"LogIn",width:"full",onClick:this.onSubmit})]})]})})})]})}constructor(e){super(e),this.onEmailChange=e=>{let s=this.state.vm;s.email=e,this.setState({vm:s})},this.onPasswordChange=e=>{let s=this.state.vm;s.password=e,this.setState({vm:s})},this.onLoginSuccess=e=>{let s=(0,p.Z)(e);this.cookies.set("token",e,{expires:(null==s?void 0:s.exp)>Date.now()?new Date(null==s?void 0:s.exp):void 0}),this.props.router.replace("/")},this.onFail=e=>{console.error("Login failed",e),this.setState({serverError:e}),this.logout()},this.onSubmit=async()=>{try{let e=await (0,c.HN)(this.state.vm),s=await e.json();e.ok?this.onLoginSuccess(s.token):this.onFail(s.error)}catch(e){this.onFail(e.message)}},this.navigateToSignUp=()=>{this.props.router.push("/auth/signup")},this.state={vm:new o}}}var x=(0,d.withRouter)(g)}},function(e){e.O(0,[675,664,318,774,888,179],function(){return e(e.s=40163)}),_N_E=e.O()}]);