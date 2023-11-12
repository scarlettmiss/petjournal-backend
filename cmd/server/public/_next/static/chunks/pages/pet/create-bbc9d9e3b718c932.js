(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[60],{74324:function(t,e,r){(window.__NEXT_P=window.__NEXT_P||[]).push(["/pet/create",function(){return r(83868)}])},81280:function(t,e,r){"use strict";r.d(e,{Z:function(){return a}});class a{static isEmpty(t){return!t||""===t.trim()}static isNotEmpty(t){return!a.isEmpty(t)}static valueOrEmpty(t,e){return a.isEmpty(t)?e:t}static isEmailValid(t){return!!t.trim()&&/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(t)}static PasswordError(t){let e="";t.length<8&&(e="Password should be at least 8 characters long");let r=/[a-z]+/.test(t);return r||(e="Password should contain at least one lowercase character"),(r=/[A-Z]+/.test(t))||(e="Password should contain at least one uppercase character"),(r=/[0-9]+/.test(t))||(e="Password should contain at least one digit"),(r=/[!@#$%^&*.?-]+/.test(t))||(e="Password should contain at least one special character"),e}}},77546:function(t,e,r){"use strict";r.d(e,{Z:function(){return n}});var a=r(85893);r(67294);var s=r(25675),i=r.n(s);function n(t){var e,r,s,n;let o=null!==(e=t.size)&&void 0!==e?e:90;return t.avatar?(0,a.jsx)(i(),{unoptimized:!0,src:t.avatar,alt:"Avatar",width:o,height:o,style:{objectFit:"cover"},className:"rounded-full aspect-square ".concat(null!==(r=t.className)&&void 0!==r?r:""),onClick:t.onCLick}):(0,a.jsx)("div",{style:{height:o,width:o},className:"aspect-square flex items-center justify-center bg-indigo-100 text-indigo-600 rounded-full text-center ".concat(null!==(s=t.textStyle)&&void 0!==s?s:"text-3xl"," font-bold ring-2 ring-indigo-500 ").concat(null!==(n=t.className)&&void 0!==n?n:""),onClick:t.onCLick,children:t.icon?t.icon:t.avatarTitle})}},31730:function(t,e,r){"use strict";var a=r(67294),s=r(33356);class i extends a.Component{constructor(...t){super(...t),this.cookies=new s.Z,this.logout=t=>{this.cookies.remove("token"),void 0!==t&&t()}}}e.Z=i},43067:function(t,e,r){"use strict";r.d(e,{Z:function(){return n}});var a=r(85893),s=r(83365),i=r.n(s);function n(t){var e;let r="full"===t.width?i().btnFull:"",s=e=>{e.preventDefault(),t.onClick&&t.onClick()};return(0,a.jsx)("button",{type:t.type,className:"".concat(i().btn," ").concat(r," ").concat((()=>{if("primary"===t.variant)return t.disabled?i().btnPrimaryDisabled:i().btnPrimary;if("secondary"===t.variant)return t.disabled?i().btnSecondaryDisabled:i().btnSecondary;if("group"===t.variant){let e=t.selected?i().btnPrimary:i().btnSecondary;return"".concat(i().btnGroup," ").concat(e)}return""})()," ").concat(null!==(e=t.className)&&void 0!==e?e:""),onClick:s,disabled:t.disabled,children:t.title},t.title)}},84639:function(t,e,r){"use strict";r.d(e,{Z:function(){return i}});var a=r(85893);r(67294);var s=r(81280);function i(t){return s.Z.isNotEmpty(t.message)?(0,a.jsxs)("div",{className:"p-4 mb-4 text-sm text-red-800 rounded-lg bg-red-50 dark:bg-slate-700 dark:text-red-400 ".concat(t.className?t.className:""),role:"alert",children:[(0,a.jsx)("span",{className:"font-medium",children:"Error :"})," ",t.message]}):(0,a.jsx)(a.Fragment,{})}},95546:function(t,e,r){"use strict";r.d(e,{Z:function(){return n}});var a=r(85893);r(67294);var s=r(83815),i=r.n(s);function n(t){var e;let r="full"===t.width?i().textInputFull:"",s=e=>{let r=e.currentTarget.value;t.onInput(r)};return(0,a.jsxs)("div",{className:i().textInputContainer,children:[(0,a.jsx)("label",{htmlFor:t.id,className:t.showLabel?i().label:"sr-only",children:t.placeholder}),(0,a.jsx)("input",{required:t.required,id:t.id,name:t.name,type:t.type,max:t.max,min:t.min,autoComplete:t.autoComplete,className:"".concat(i().textInput," ").concat(r," ").concat(null!==(e=t.classNames)&&void 0!==e?e:""," ").concat(t.hasError&&i().errorHighlight),placeholder:t.placeholder,value:t.value,onInput:s,disabled:t.disabled,onBlur:t.onBlur,autoFocus:t.autoFocus,style:{colorScheme:"dark"}}),(0,a.jsx)("span",{className:i().errorMessage,children:t.hasError?t.errorMessage:""})]})}},94962:function(t,e,r){"use strict";var a,s;r.d(e,{e:function(){return i}}),(s=a||(a={})).M="M",s.F="F";class i{static getAll(){return Object.values(a)}static getEnum(t){return a[t]}static getTitle(t){let e;switch(t){case a.M:e="Male";break;case a.F:e="Female";break;default:e=""}return e}}},26585:function(t,e,r){"use strict";r.d(e,{H:function(){return a},U:function(){return s}});let a="petMinWeight",s="petMaxWeight"},10445:function(t,e,r){"use strict";function a(t,e){return fetch("".concat("http://localhost:8080/api","/pet"),{method:"POST",headers:{"Content-Type":"application/json",Authorization:"Bearer ".concat(e)},body:JSON.stringify(t.fields)})}function s(t,e){return fetch("".concat("http://localhost:8080/api","/pet/").concat(t),{method:"GET",headers:{Authorization:"Bearer ".concat(e)}})}function i(t,e,r){return fetch("".concat("http://localhost:8080/api","/pet/").concat(e),{method:"PATCH",headers:{"Content-Type":"application/json",Authorization:"Bearer ".concat(r)},body:JSON.stringify(t.fields)})}function n(t,e){return fetch("".concat("http://localhost:8080/api","/pet/").concat(t),{method:"DELETE",headers:{Authorization:"Bearer ".concat(e)}})}function o(t){return fetch("".concat("http://localhost:8080/api","/pets"),{method:"GET",headers:{Authorization:"Bearer ".concat(t)}})}r.d(e,{cu:function(){return o},jL:function(){return n},lI:function(){return s},mF:function(){return i},u8:function(){return a}})},43432:function(t,e,r){"use strict";function a(t){return fetch("".concat("http://localhost:8080/api","/auth/login"),{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(t)})}function s(t){return fetch("".concat("http://localhost:8080/api","/auth/register"),{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(t.fields)})}function i(t,e){return fetch("".concat("http://localhost:8080/api","/user"),{method:"PATCH",headers:{"Content-Type":"application/json",Authorization:"Bearer ".concat(e)},body:JSON.stringify(t.fields)})}function n(t){return fetch("".concat("http://localhost:8080/api","/user"),{method:"GET",headers:{Authorization:"Bearer ".concat(t)}})}function o(t){return fetch("".concat("http://localhost:8080/api","/user"),{method:"DELETE",headers:{Authorization:"Bearer ".concat(t)}})}function h(){return fetch("".concat("http://localhost:8080/api","/vets"),{method:"GET",headers:{"Content-Type":"application/json"}})}r.d(e,{HN:function(){return a},iD:function(){return i},l5:function(){return o},lx:function(){return s},ui:function(){return h},wB:function(){return n}})},83868:function(t,e,r){"use strict";r.r(e),r.d(e,{default:function(){return E}});var a=r(85893),s=r(43067);r(67294),r(79319);var i=r(95546),n=r(83815),o=r.n(n),h=r(11163),l=r(84639),c=r(81280),d=r(26585);class u{get stringify(){return JSON.stringify(this)}validate(){this.checkName(),this.checkDateOfBirth(),this.checkGender(),this.checkBreedName(),this._valid=c.Z.isEmpty(this.nameError)&&c.Z.isEmpty(this.dateOfBirthError)&&c.Z.isEmpty(this.genderError)&&c.Z.isEmpty(this.breedNameError)}get isValid(){return this._valid}get avatar(){return this._avatar}set avatar(t){this._avatar=t}get name(){return this._name}set name(t){this._name=t}get dateOfBirth(){return this._dateOfBirth}set dateOfBirth(t){this._dateOfBirth=t}get gender(){return this._gender}set gender(t){this._gender=t}get breedName(){return this._breedName}set breedName(t){this._breedName=t}get colors(){return this._colors}set colors(t){this._colors=t}get description(){return this._description}set description(t){this._description=t}get pedigree(){return this._pedigree}set pedigree(t){this._pedigree=t}get microchip(){return this._microchip}set microchip(t){this._microchip=t}get weightMin(){return Number(this._metas.get(d.H))}set weightMin(t){this._metas.set(d.H,t.toString())}get weightMax(){return Number(this._metas.get(d.U))}set weightMax(t){this._metas.set(d.U,t.toString())}get vetId(){return this._vetId}set vetId(t){this._vetId=t}get fields(){return{avatar:this._avatar,name:this._name,dateOfBirth:new Date(this._dateOfBirth).getTime(),gender:this._gender,breedName:this._breedName,colors:this._colors,description:this._description,pedigree:this._pedigree,microchip:this._microchip,vetId:this._vetId,metas:this._metas}}constructor(){this._avatar="",this._name="",this._dateOfBirth="",this._gender="",this._breedName="",this._colors=[],this._description="",this._pedigree="",this._microchip="",this._vetId="",this._metas=new Map,this.nameError="",this.dateOfBirthError="",this.genderError="",this.breedNameError="",this.hasNameError=!1,this.hasDateOfBirthError=!1,this.hasGenderError=!1,this.hasBreedNameError=!1,this._valid=!1,this.checkDateOfBirth=()=>{let t=c.Z.isEmpty(this._dateOfBirth);this.dateOfBirthError=t?"The date of birth is required":"",this.hasDateOfBirthError=t},this.checkGender=()=>{let t=c.Z.isEmpty(this._gender);this.genderError=t?"Pet gender is required":"",this.hasGenderError=t},this.checkName=()=>{let t=c.Z.isEmpty(this._name);this.nameError=t?"Name is required":"",this.hasNameError=t},this.checkBreedName=()=>{let t=c.Z.isEmpty(this._breedName);this.breedNameError=t?"Please provide a breed name":"",this.hasBreedNameError=t}}}var m=r(10445),p=r(94962),g=r(43432),f=r(5152),v=r.n(f),x=r(77546),b=r(51094),_=r(74201),N=r(31730);let y=r(68207),C=v()(()=>Promise.all([r.e(664),r.e(626)]).then(r.bind(r,62472)),{loadableGenerated:{webpack:()=>[62472]},ssr:!1});class w extends N.Z{componentDidMount(){this.getVets().catch(t=>{console.error("Could not get Vets",t),this.setState({serverError:"Could not get Vets"})})}render(){let t=this.state.vm;return(0,a.jsx)(C,{hideNav:!0,init:this.initPage,className:"bg-[url('/register-bg-dark.jpg')] bg-contain bg-center",children:(0,a.jsx)("div",{className:"container items-center mx-auto my-auto bg-white dark:bg-slate-800 max-w-sm lg:max-w-xl border rounded-md border-indigo-600",children:(0,a.jsxs)("div",{className:"shadow-sm px-4 py-4",children:[(0,a.jsx)("h2",{className:" pb-4 text-center text-3xl font-bold tracking-tight text-gray-900 dark:text-indigo-100",children:"Create a Pet profile"}),(0,a.jsxs)("form",{className:"space-y-1 mb-3",method:"POST",onSubmit:this.onSubmit,children:[(0,a.jsxs)("div",{className:"flex py-2",children:[this.state.vm.avatar&&(0,a.jsx)(b.r,{src:this.state.vm.avatar,getColors:this.getAvatarColors}),(0,a.jsx)("div",{className:"mx-auto",children:(0,a.jsx)(x.Z,{avatarTitle:"Add Image",avatar:this.state.vm.avatar,onCLick:()=>{var t;null===(t=this.imageInputRef)||void 0===t||t.click()},size:90,textStyle:"text-lg"})}),(0,a.jsx)("input",{ref:t=>this.imageInputRef=t,className:"sr-only",multiple:!1,type:"file",id:"avatar",name:"avatar",accept:"image/png, image/jpeg",onChange:this.onImageChange})]}),(0,a.jsx)(i.Z,{autoFocus:!1,id:"name",name:"name",type:"text",autoComplete:"off",required:!0,width:"full",classNames:"rounded-md",placeholder:"Name",value:t.name,onInput:this.onNameChange,onBlur:this.checkName,hasError:t.hasNameError,errorMessage:t.nameError,showLabel:!0}),(0,a.jsx)(i.Z,{id:"dateOfBirth",name:"dateOfBirth",type:"date",max:(0,_.Z)(new Date,"yyyy-MM-dd"),autoComplete:"off",required:!0,width:"full",classNames:"rounded-md",placeholder:"Date of Birth",value:t.dateOfBirth,onInput:this.onDateOfBirthChange,onBlur:this.checkDateOfBirth,hasError:t.hasDateOfBirthError,errorMessage:t.dateOfBirthError,showLabel:!0}),(0,a.jsxs)("div",{children:[(0,a.jsx)("label",{htmlFor:"gender",className:o().label,children:"Gender"}),(0,a.jsxs)("select",{value:t.gender,id:"gender",name:"gender",onChange:this.onGenderChange,onBlur:this.checkGender,className:"".concat(o().textInput," ").concat(o().textInputFull," ").concat(t.hasGenderError&&o().errorHighlight," rounded-md"),children:[(0,a.jsx)("option",{value:"",children:"Choose a Gender"}),p.e.getAll().map(t=>{let e=p.e.getTitle(t);return(0,a.jsx)("option",{value:t,children:e},e)})]}),(0,a.jsx)("span",{className:o().errorMessage,children:t.hasGenderError?t.genderError:""})]}),(0,a.jsx)(i.Z,{id:"breedName",name:"breedName",type:"text",autoComplete:"off",required:!0,width:"full",classNames:"rounded-md",placeholder:"Breed Name",value:t.breedName,onInput:this.onBreedNameChange,onBlur:this.checkBreedName,hasError:t.hasBreedNameError,errorMessage:t.breedNameError,showLabel:!0}),(0,a.jsxs)("div",{children:[(0,a.jsx)("label",{htmlFor:"colors",className:o().label,children:"Colors"}),(0,a.jsxs)("div",{className:"flex flex-row gap-2 items-center flex-wrap",children:[t.colors.map((t,e)=>(0,a.jsxs)("div",{children:[(0,a.jsx)("div",{style:{backgroundColor:t},onClick:()=>this.onRemoveColor(e),className:"rounded-full h-[35px] w-[35px] text-center text-xl font-bold ring-1 ring-slate-600",children:(0,a.jsx)("span",{style:{color:y.mostReadable(t,["#fff","#000"],{includeFallbackColors:!0}).toHexString()},className:"opacity-0 hover:opacity-100",children:t?"x":""})}),(0,a.jsx)("input",{ref:t=>this.colorsRefs[e]=t,onInput:t=>this.onColorInput(t,e),type:"color",value:t,className:"sr-only"})]},e)),this.state.vm.colors.length<10&&(0,a.jsx)("button",{type:"button",className:"bg-white text-black rounded-full h-[35px] w-[35px]",onClick:this.onAddColor,children:(0,a.jsx)("div",{className:"text-xl text-center pb-1 font-bold",children:"+"})})]})]}),(0,a.jsxs)("div",{children:[(0,a.jsx)("label",{htmlFor:"description",className:o().label,children:"Description"}),(0,a.jsx)("textarea",{className:"".concat(o().textInput," rounded-md w-full resize-none"),id:"description",name:"description",rows:1,placeholder:"Description",value:t.description,onInput:this.onDescriptionChange})]}),(0,a.jsx)(i.Z,{id:"microchip",name:"microchip",type:"text",autoComplete:"off",width:"full",classNames:"rounded-md",placeholder:"Microchip",value:t.microchip,onInput:this.onMicrochipChange,showLabel:!0}),(0,a.jsx)(i.Z,{id:"pedigree",name:"pedigree",type:"text",autoComplete:"off",width:"full",classNames:"rounded-md",placeholder:"Pedigree",value:t.pedigree,onInput:this.onPedigreeChange,showLabel:!0}),(0,a.jsxs)("div",{className:"w-full align-center inline-flex rounded-md shadow-sm ",children:[(0,a.jsx)(i.Z,{id:"minWeight",name:"minWeight",type:"text",autoComplete:"off",width:"full",classNames:"rounded-s-md ",placeholder:"Min Weight",value:t.weightMin?t.weightMin.toString():void 0,onInput:this.onMinWeightChange,showLabel:!0}),(0,a.jsx)(i.Z,{id:"maxWeight",name:"maxWeight",type:"text",autoComplete:"off",width:"full",classNames:"rounded-e-md",placeholder:"Max Weight",value:t.weightMax?t.weightMax.toString():void 0,onInput:this.onMaxWeightChange,showLabel:!0})]}),(0,a.jsxs)("div",{children:[(0,a.jsx)("label",{htmlFor:"vetId",className:o().label,children:"Share with vet"}),(0,a.jsxs)("select",{value:t.vetId,id:"vetId",name:"vetId",onChange:this.onVetIdChange,className:"".concat(o().textInput," ").concat(o().textInputFull," ").concat(t.hasGenderError&&o().errorHighlight," rounded-md"),children:[(0,a.jsx)("option",{value:"",children:"Choose a Vet"}),this.state.vets.map(t=>(0,a.jsxs)("option",{value:t.id,children:[t.name," ",t.surname," (",t.email,")"]},t.id))]})]}),(0,a.jsx)(l.Z,{message:this.state.serverError},"errorMessage")]}),(0,a.jsxs)("div",{className:"w-full align-center inline-flex rounded-md shadow-sm gap-2",children:[(0,a.jsx)(s.Z,{variant:"secondary",type:"button",title:"Cancel",width:"full",onClick:()=>this.props.router.back()},"Cancel"),(0,a.jsx)(s.Z,{variant:"primary",type:"submit",title:"Create",width:"full",onClick:this.onSubmit},"submit")]})]})})})}constructor(t){super(t),this.colorsRefs=[],this.imageInputRef=null,this.getVets=async()=>{let t=await (0,g.ui)(),e=await t.json();if(t.ok)this.setState({vets:e.filter(t=>void 0!==t.id)});else throw Error(e.error)},this.initPage=t=>{this.setState({token:t})},this.onNameChange=t=>{let e=this.state.vm;e.name=t,this.setState({vm:e})},this.onDateOfBirthChange=t=>{let e=this.state.vm;e.dateOfBirth=t,this.setState({vm:e})},this.onGenderChange=t=>{let e=this.state.vm;e.gender=t.currentTarget.value,this.setState({vm:e})},this.onBreedNameChange=t=>{let e=this.state.vm;e.breedName=t,this.setState({vm:e})},this.onDescriptionChange=t=>{let e=this.state.vm;e.description=t.currentTarget.value,this.setState({vm:e})},this.onPedigreeChange=t=>{let e=this.state.vm;e.pedigree=t,this.setState({vm:e})},this.onMicrochipChange=t=>{let e=this.state.vm;e.microchip=t,this.setState({vm:e})},this.onMinWeightChange=t=>{let e=this.state.vm;e.weightMin=Number(t),this.setState({vm:e})},this.onMaxWeightChange=t=>{let e=this.state.vm;e.weightMax=Number(t),this.setState({vm:e})},this.onVetIdChange=t=>{let e=this.state.vm;e.vetId=t.currentTarget.value,this.setState({vm:e})},this.navigateToPetPage=t=>{this.props.router.replace("/pet/".concat(t))},this.onSubmit=async()=>{if(this.state.vm.validate(),!this.state.vm.isValid||!this.state.token){this.forceUpdate();return}let t=await (0,m.u8)(this.state.vm,this.state.token),e=await t.json();if(t.ok)this.navigateToPetPage(e.id);else if(401===t.status)this.logout(()=>this.props.router.replace("/auth/login"));else{var r;this.setState({serverError:null!==(r=e.error)&&void 0!==r?r:""})}},this.checkName=()=>{this.state.vm.checkName(),this.forceUpdate()},this.checkDateOfBirth=()=>{this.state.vm.checkDateOfBirth(),this.forceUpdate()},this.checkGender=()=>{this.state.vm.checkGender(),this.forceUpdate()},this.checkBreedName=()=>{this.state.vm.checkBreedName(),this.forceUpdate()},this.onColorInput=(t,e)=>{let r=this.state.vm.colors;r[e]=t.currentTarget.value,this.setState({vm:this.state.vm})},this.onAddColor=()=>{let t=this.state.vm.colors;t.push(""),this.setState({vm:this.state.vm},()=>{setTimeout(()=>{var t;return null===(t=this.colorsRefs[this.state.vm.colors.length-1])||void 0===t?void 0:t.click()},0)})},this.onRemoveColor=t=>{let e=this.state.vm;e.colors.splice(t,1),this.setState({vm:e})},this.onImageChange=t=>{this.uploadImage(t).catch(t=>console.error(t))},this.convertBase64=t=>new Promise((e,r)=>{let a=new FileReader;a.readAsDataURL(t),a.onload=()=>{e(a.result)},a.onerror=t=>{r(t)}}),this.uploadImage=async t=>{let e=t.target.files[0];try{let t=await this.convertBase64(e),r=this.state.vm;r.avatar=t,this.setState({vm:r})}catch(t){console.error(t)}},this.getAvatarColors=t=>{let e=this.state.vm;e.colors=e.colors.filter(t=>!this.state.avatarColors.includes(t)),e.colors.push(...t),this.setState({vm:e,avatarColors:t})},this.state={vm:new u,vets:[],focusColor:!1,avatarColors:[]}}}var E=(0,h.withRouter)(w)},83365:function(t){t.exports={btn:"button_btn__w__d1",btnFull:"button_btnFull__Q8iU8",btnPrimary:"button_btnPrimary__b_fGY",btnSecondary:"button_btnSecondary__Vaxi0",btnGroup:"button_btnGroup__zeRjm",btnPrimaryDisabled:"button_btnPrimaryDisabled__9IQhk",btnSecondaryDisabled:"button_btnSecondaryDisabled__eLBdY"}},83815:function(t){t.exports={textInput:"textInput_textInput__rwYXO",textInputText:"textInput_textInputText__RbFSM",label:"textInput_label__IpSov",textInputFull:"textInput_textInputFull__BtdFB",errorHighlight:"textInput_errorHighlight__6WM_d",errorMessage:"textInput_errorMessage__2Uw_U",textInputContainer:"textInput_textInputContainer__hcS5_",phoneInput:"textInput_phoneInput__ILwRV",phoneInputFull:"textInput_phoneInputFull__VL9NH"}}},function(t){t.O(0,[675,706,961,201,126,255,94,774,888,179],function(){return t(t.s=74324)}),_N_E=t.O()}]);