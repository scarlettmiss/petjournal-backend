(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[546],{81280:function(t,e,s){"use strict";s.d(e,{Z:function(){return r}});class r{static isEmpty(t){return!t||""===t.trim()}static isNotEmpty(t){return!r.isEmpty(t)}static valueOrEmpty(t,e){return r.isEmpty(t)?e:t}static isEmailValid(t){return!!t.trim()&&/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(t)}static PasswordError(t){let e="";t.length<8&&(e="Password should be at least 8 characters long");let s=/[a-z]+/.test(t);return s||(e="Password should contain at least one lowercase character"),(s=/[A-Z]+/.test(t))||(e="Password should contain at least one uppercase character"),(s=/[0-9]+/.test(t))||(e="Password should contain at least one digit"),(s=/[!@#$%^&*.?-]+/.test(t))||(e="Password should contain at least one special character"),e}}},31730:function(t,e,s){"use strict";var r=s(67294),a=s(33356);class i extends r.Component{constructor(...t){super(...t),this.cookies=new a.Z,this.logout=t=>{this.cookies.remove("token"),void 0!==t&&t()}}}e.Z=i},43067:function(t,e,s){"use strict";s.d(e,{Z:function(){return n}});var r=s(85893),a=s(83365),i=s.n(a);function n(t){var e;let s="full"===t.width?i().btnFull:"",a=e=>{e.preventDefault(),t.onClick&&t.onClick()};return(0,r.jsx)("button",{type:t.type,className:"".concat(i().btn," ").concat(s," ").concat((()=>{if("primary"===t.variant)return t.disabled?i().btnPrimaryDisabled:i().btnPrimary;if("secondary"===t.variant)return t.disabled?i().btnSecondaryDisabled:i().btnSecondary;if("group"===t.variant){let e=t.selected?i().btnPrimary:i().btnSecondary;return"".concat(i().btnGroup," ").concat(e)}return""})()," ").concat(null!==(e=t.className)&&void 0!==e?e:""),onClick:a,disabled:t.disabled,children:t.title},t.title)}},58699:function(t,e,s){"use strict";s.d(e,{Z:function(){return u}});var r=s(85893),a=s(67294),i=s(96827),n=s(95826),o=s(84912),h=s(84037),c=s(584),l=s(20466),d=s(74201);class u extends a.Component{render(){let t={"en-US":n.Z,"el-GR":o.Z},e=(0,i.lD)({format:d.Z,parse:h.Z,startOfWeek:c.Z,getDay:l.Z,locales:t});return(0,r.jsx)(i.f,{style:{flex:1},views:this.props.views,defaultView:this.props.defaultView,localizer:e,events:this.props.events,startAccessor:"start",endAccessor:"end",onSelectEvent:this.props.onSelectEvent,onRangeChange:this.props.updateEvents,popup:!0})}constructor(t){super(t),this.state={}}}},84639:function(t,e,s){"use strict";s.d(e,{Z:function(){return i}});var r=s(85893);s(67294);var a=s(81280);function i(t){return a.Z.isNotEmpty(t.message)?(0,r.jsxs)("div",{className:"p-4 mb-4 text-sm text-red-800 rounded-lg bg-red-50 dark:bg-slate-700 dark:text-red-400 ".concat(t.className?t.className:""),role:"alert",children:[(0,r.jsx)("span",{className:"font-medium",children:"Error :"})," ",t.message]}):(0,r.jsx)(r.Fragment,{})}},37914:function(t,e,s){"use strict";s.d(e,{AR:function(){return i},h8:function(){return n},ZP:function(){return N}});var r,a,i,n,o=s(85893),h=s(67294),c=s(25652),l=s(43067),d=s(86428),u=s(95546),p=s(74201),m=s(77349),y=s(42699),E=s(313),x=s(77378),_=s(83815),v=s.n(_),g=s(81280);class T{get stringify(){return JSON.stringify(this.fields)}validate(t){switch(this._valid=!1,t){case n.LINEDATA:this.checkDate(),this.checkNumberResult(),this.checkType(),this._valid=g.Z.isEmpty(this.dateError)&&g.Z.isEmpty(this.resultError)&&g.Z.isEmpty(this.recordTypeError);break;case n.BASE:this.checkName(),this.checkDate(),this.checkType(),this._valid=g.Z.isEmpty(this.nameError)&&g.Z.isEmpty(this.dateError)&&g.Z.isEmpty(this.recordTypeError);break;case n.EXTRA_INFO:this._valid=!0;break;case n.NEXT_DATE:this.checkNextDate(),this._valid=g.Z.isEmpty(this.nextDateError)}}get recordType(){return this._recordType}set recordType(t){this._recordType=t}get isValid(){return this._valid}get hasNextDate(){return this._hasNextDate}set hasNextDate(t){this._hasNextDate=t}get name(){return this._name}set name(t){this._name=t}get nextDate(){return this._nextDate}set nextDate(t){this._nextDate=t}get notes(){return this._notes}set notes(t){this._notes=t}get description(){return this._description}set description(t){this._description=t}get result(){return this._result}set result(t){this._result=t}get lot(){return this._lot}set lot(t){this._lot=t}get date(){return this._date}set date(t){this._date=t}get fields(){return{recordType:this._recordType,name:this._name,date:new Date(this._date).getTime(),lot:this._lot,result:this._result,description:this._description,notes:this._notes,nextDate:this.hasNextDate?new Date(this._nextDate).getTime():0}}constructor(){this._recordType="",this._name="",this._date="",this._lot="",this._result="",this._description="",this._notes="",this._hasNextDate=!1,this._nextDate="",this.nameError="",this.dateError="",this.recordTypeError="",this.nextDateError="",this.resultError="",this.hasNameError=!1,this.hasDateError=!1,this.hasRecordTypeError=!1,this.hasNextDateError=!1,this.hasResultError=!1,this._valid=!1,this.checkDate=()=>{let t=g.Z.isEmpty(this._date);this.dateError=t?"The date is required":"",this.hasDateError=t},this.checkNextDate=()=>{let t=g.Z.isEmpty(this._nextDate);this.nextDateError=t?"The date is required":"",this.hasNextDateError=t},this.checkType=()=>{let t=g.Z.isEmpty(this._recordType);this.recordTypeError=t?"The record type is required":"",this.hasRecordTypeError=t},this.checkName=()=>{let t=g.Z.isEmpty(this._name);this.nameError=t?"Name is required":"",this.hasNameError=t},this.checkNumberResult=()=>{let t=g.Z.isEmpty(this._result)||!Number.isFinite(Number(this._result));this.resultError=t?"The value is required":"",this.hasResultError=t}}}(r=i||(i={})).CREATE="CREATE",r.UPDATE="UPDATE",(a=n||(n={})).BASE="BASE",a.EXTRA_INFO="EXTRA_INFO",a.NEXT_DATE="NEXT_DATE",a.LINEDATA="LINEDATA";class N extends h.Component{get primaryButtonTitle(){if(this.state.step===n.BASE)return"Add Extra Information";if(this.state.vm.hasNextDate&&this.state.step===n.EXTRA_INFO)return"Schedule Next Date";switch(this.state.mode){case i.CREATE:return"Create Record";case i.UPDATE:return"Update Record"}}get secondaryButtonTitle(){return this.state.step!==n.BASE?"Back":"Cancel"}get formBody(){let t=this.state.vm;return(0,o.jsxs)(o.Fragment,{children:[this.state.step===n.BASE&&(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(u.Z,{autoFocus:!1,id:"name",name:"name",type:"text",autoComplete:"off",required:!0,width:"full",classNames:"rounded-md",placeholder:"Name",value:t.name,onInput:this.onNameChange,onBlur:this.checkName,hasError:t.hasNameError,errorMessage:t.nameError,showLabel:!0}),(0,o.jsxs)("div",{children:[(0,o.jsx)("label",{htmlFor:"recordType",className:v().label,children:"Record Type"}),(0,o.jsxs)("select",{value:t.recordType,id:"recordType",name:"recordType",onChange:this.onRecordTypeChange,onBlur:this.checkType,className:"".concat(v().textInput," ").concat(v().textInputFull," ").concat(t.hasRecordTypeError&&v().errorHighlight," rounded-md capitalize"),children:[(0,o.jsx)("option",{value:"",children:"Choose a Record Type"}),x.q.getAll().map(t=>{let e=x.q.getTitle(t);return(0,o.jsx)("option",{value:t,className:"capitalize",children:e},e)})]}),(0,o.jsx)("span",{className:v().errorMessage,children:t.hasRecordTypeError?t.recordTypeError:""})]}),(0,o.jsx)(u.Z,{id:"date",name:"date",type:"date",max:(0,p.Z)(new Date,"yyyy-MM-dd"),autoComplete:"off",required:!0,width:"full",classNames:"rounded-md",placeholder:"Administration Date",value:t.date,onInput:this.onDateChange,onBlur:this.checkDate,hasError:t.hasDateError,errorMessage:t.dateError,showLabel:!0})]}),this.state.step===n.EXTRA_INFO&&(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(u.Z,{id:"lot",name:"lot",type:"text",autoComplete:"off",required:!0,width:"full",classNames:"rounded-md",placeholder:"Lot Number",value:t.lot,onInput:this.onLotChange,showLabel:!0}),(0,o.jsx)(u.Z,{id:"result",name:"result",type:"text",autoComplete:"off",required:!0,width:"full",classNames:"rounded-md",placeholder:"Result",value:t.result,onInput:this.onResultChange,showLabel:!0}),(0,o.jsx)(u.Z,{id:"description",name:"description",type:"text",autoComplete:"off",required:!0,width:"full",classNames:"rounded-md",placeholder:"Description",value:t.description,onInput:this.onDescriptionChange,showLabel:!0}),(0,o.jsx)(u.Z,{id:"notes",name:"notes",type:"text",autoComplete:"off",required:!0,width:"full",classNames:"rounded-md",placeholder:"Notes",value:t.notes,onInput:this.onNotesChange,showLabel:!0}),(0,o.jsxs)("div",{children:[(0,o.jsx)("input",{id:"link-checkbox",type:"checkbox",value:"",checked:t.hasNextDate,onChange:this.onHasNextDateChange,className:"w-4 h-4 text-indigo-600 rounded focus:ring-indigo-600 ring-offset-gray-800 focus:ring-2 bg-gray-700 border-gray-600"}),(0,o.jsx)("label",{htmlFor:"link-checkbox",className:"ml-2 text-sm font-medium text-gray-900 dark:text-gray-300",children:"Is recurring"})]})]}),this.state.step===n.NEXT_DATE&&(0,o.jsx)(u.Z,{id:"date",name:"date",type:"date",autoComplete:"off",required:!0,width:"full",min:(0,p.Z)((0,m.Z)(new Date,1),"yyyy-MM-dd"),classNames:"rounded-md",placeholder:"Schedule Next Occurance",value:t.nextDate,onInput:this.onNextDateChange,onBlur:this.checkNextDate,hasError:t.hasNextDateError,errorMessage:t.dateError,showLabel:!0})]})}render(){var t;return(0,o.jsx)("div",{id:"defaultModal",tabIndex:-1,className:"fixed flex grow ".concat((null===(t=this.state)||void 0===t?void 0:t.show)?"":"hidden"," z-50 h-screen w-full"),children:(0,o.jsx)("div",{className:"relative self-center mx-auto w-full max-w-2xl max-h-full",children:(0,o.jsxs)("div",{className:"relative bg-white rounded-lg shadow dark:bg-gray-700",children:[(0,o.jsxs)("div",{className:"flex items-start justify-between p-4 border-b rounded-t dark:border-gray-600",children:[(0,o.jsx)("h3",{className:"text-xl font-semibold text-gray-900 dark:text-white text-center",children:this.state.title}),(0,o.jsxs)("button",{type:"button",className:"text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ml-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white",onClick:this.props.onDismiss,children:[(0,o.jsx)(c.Z,{className:"h-6 w-6"}),(0,o.jsx)("span",{className:"sr-only",children:"Close modal"})]})]}),(0,o.jsx)("div",{className:"px-12 py-4 space-y-4 max-h-96 overflow-y-auto justify-center",children:(0,o.jsx)("div",{className:"shadow-sm px-4 py-4",children:(0,o.jsx)("form",{className:"space-y-1 mb-3",method:"POST",onSubmit:this.props.onDismiss,children:this.formBody})})}),(0,o.jsxs)("div",{className:"flex items-center p-6 justify-end space-x-2 border-t border-gray-200 rounded-b dark:border-gray-600",children:[(0,o.jsx)(l.Z,{className:"right-0",title:this.secondaryButtonTitle,variant:"secondary",type:"button",onClick:this.secondButtonPress}),(0,o.jsx)(l.Z,{className:"right-0",title:this.primaryButtonTitle,variant:"primary",type:"button",onClick:this.primaryButtonPress})]})]})})})}constructor(t){var e;super(t),this.setDataForCreation=t=>{var e,s,r,a,i,o,h;let c=new d.Z;c.name=null!==(e=t.name)&&void 0!==e?e:"",c.recordType=null!==(s=t.recordType)&&void 0!==s?s:"",c.name=null!==(r=t.name)&&void 0!==r?r:"",c.lot=null!==(a=t.lot)&&void 0!==a?a:"",c.result=null!==(i=t.result)&&void 0!==i?i:"",c.description=null!==(o=t.description)&&void 0!==o?o:"",c.notes=null!==(h=t.notes)&&void 0!==h?h:"",this.setCreate(),this.setState({step:n.BASE,vm:c,title:"Create Record"},()=>setTimeout(()=>{var t;return null===(t=null==document?void 0:document.getElementById("date"))||void 0===t?void 0:t.focus()},1))},this.setDataForCreationWithDate=(t,e)=>{var s,r,a,i,o,h,c;let l=new d.Z;l.name=null!==(s=t.name)&&void 0!==s?s:"",l.recordType=null!==(r=t.recordType)&&void 0!==r?r:"",l.name=null!==(a=t.name)&&void 0!==a?a:"",l.lot=null!==(i=t.lot)&&void 0!==i?i:"",l.result=null!==(o=t.result)&&void 0!==o?o:"",l.description=null!==(h=t.description)&&void 0!==h?h:"",l.notes=null!==(c=t.notes)&&void 0!==c?c:"",l.date=(0,p.Z)(e,"yyyy-MM-dd"),this.setCreate(),this.setState({step:n.BASE,vm:l,title:"Create Record"},()=>setTimeout(()=>{var t;return null===(t=null==document?void 0:document.getElementById("date"))||void 0===t?void 0:t.focus()},1))},this.setDataForUpdate=t=>{var e,s,r,a,i,o,h;let c=new T;c.name=null!==(e=t.name)&&void 0!==e?e:"",c.date=t.date?(0,p.Z)(new Date(t.date),"yyyy-MM-dd"):"",c.recordType=null!==(s=t.recordType)&&void 0!==s?s:"",c.name=null!==(r=t.name)&&void 0!==r?r:"",c.lot=null!==(a=t.lot)&&void 0!==a?a:"",c.result=null!==(i=t.result)&&void 0!==i?i:"",c.description=null!==(o=t.description)&&void 0!==o?o:"",c.notes=null!==(h=t.notes)&&void 0!==h?h:"",c.hasNextDate=void 0!==t.nextDate,c.nextDate=t.nextDate?(0,p.Z)(new Date(t.nextDate),"yyyy-MM-dd"):"",this.setState({step:n.BASE,vm:c,title:"Update Record"})},this.hide=()=>{this.setState({show:!1,vm:new d.Z})},this.show=()=>{this.setState({show:!0})},this.setCreate=()=>{this.setState({mode:i.CREATE,step:n.BASE})},this.setUpdate=()=>{this.setState({mode:i.UPDATE})},this.onNameChange=t=>{let e=this.state.vm;e.name=t,this.setState({vm:e})},this.onLotChange=t=>{let e=this.state.vm;e.lot=t,this.setState({vm:e})},this.onResultChange=t=>{let e=this.state.vm;e.result=t,this.setState({vm:e})},this.onDescriptionChange=t=>{let e=this.state.vm;e.description=t,this.setState({vm:e})},this.onNotesChange=t=>{let e=this.state.vm;e.notes=t,this.setState({vm:e})},this.onDateChange=t=>{let e=this.state.vm;e.date=(0,y.Z)(new Date(t),new Date)?(0,p.Z)(new Date,"yyyy-MM-dd").toString():t,this.setState({vm:e})},this.onRecordTypeChange=t=>{let e=this.state.vm;e.recordType=t.currentTarget.value,this.setState({vm:e})},this.onHasNextDateChange=()=>{let t=this.state.vm;t.hasNextDate=!t.hasNextDate,this.setState({vm:t})},this.onNextDateChange=t=>{let e=this.state.vm,s=(0,m.Z)(new Date,1);e.nextDate=(0,E.Z)(new Date(t),s)?(0,p.Z)(s,"yyyy-MM-dd").toString():t,this.setState({vm:e})},this.checkName=()=>{this.state.vm.checkName(),this.forceUpdate()},this.checkDate=()=>{this.state.vm.checkDate(),this.forceUpdate()},this.checkNextDate=()=>{this.state.vm.checkNextDate(),this.forceUpdate()},this.checkType=()=>{this.state.vm.checkType(),this.forceUpdate()},this.primaryButtonPress=()=>{if(this.state.vm.validate(this.state.step),!this.state.vm.isValid){this.forceUpdate();return}if(this.state.step===n.BASE){this.setState({step:n.EXTRA_INFO});return}if(this.state.vm.hasNextDate&&this.state.step===n.EXTRA_INFO){this.setState({step:n.NEXT_DATE});return}switch(this.state.mode){case i.CREATE:return this.props.onCreate(this.state.vm);case i.UPDATE:return this.props.onUpdate(this.state.vm)}},this.secondButtonPress=()=>{if(this.state.step===n.BASE){this.props.onDismiss();return}if(this.state.step==n.EXTRA_INFO){this.setState({step:n.BASE});return}if(this.state.step==n.NEXT_DATE){this.setState({step:n.EXTRA_INFO});return}},this.state={title:"Create Record",vm:new d.Z,show:!1,mode:null!==(e=t.mode)&&void 0!==e?e:i.CREATE,step:n.BASE}}}},95546:function(t,e,s){"use strict";s.d(e,{Z:function(){return n}});var r=s(85893);s(67294);var a=s(83815),i=s.n(a);function n(t){var e;let s="full"===t.width?i().textInputFull:"",a=e=>{let s=e.currentTarget.value;t.onInput(s)};return(0,r.jsxs)("div",{className:i().textInputContainer,children:[(0,r.jsx)("label",{htmlFor:t.id,className:t.showLabel?i().label:"sr-only",children:t.placeholder}),(0,r.jsx)("input",{required:t.required,id:t.id,name:t.name,type:t.type,max:t.max,min:t.min,autoComplete:t.autoComplete,className:"".concat(i().textInput," ").concat(s," ").concat(null!==(e=t.classNames)&&void 0!==e?e:""," ").concat(t.hasError&&i().errorHighlight),placeholder:t.placeholder.replace("*",""),value:t.value,onInput:a,disabled:t.disabled,onBlur:t.onBlur,autoFocus:t.autoFocus,style:{colorScheme:"dark"}}),(0,r.jsx)("span",{className:i().errorMessage,children:t.hasError?t.errorMessage:""})]})}},77378:function(t,e,s){"use strict";var r,a;s.d(e,{o:function(){return r},q:function(){return i}}),(a=r||(r={})).VACCINE="vaccine",a.WEIGHT="weight",a.TEMPERATURE="temperature",a.SURGERY="surgery",a.MEDICINE="medicine",a.ENDOPARASITE="endoparasite",a.ECTOPARASITE="ectoparasite",a.EXAMINATION="examination",a.MICROCHIP="microchip",a.DIAGNOSTIC="diagnostic",a.DENTAL="dental",a.OTHER="other";class i{static getAll(){return Object.values(r).filter(t=>t!==r.WEIGHT&&t!==r.TEMPERATURE)}static getEnum(t){return r[t]}static getTitle(t){return t}}},17663:function(t,e,s){"use strict";s.d(e,{Z:function(){return r}}),s(67294);class r{constructor(t,e,s,r,a,i){this.allDay=t,this.title=e,this.start=s,this.end=r,this.resource=a,this.isEvent=i}}},22815:function(t,e,s){"use strict";function r(t,e,s){return fetch("".concat("https://petjournal-app-aeqg2.ondigitalocean.app/api","/pet/").concat(e,"/record"),{method:"POST",headers:{"Content-Type":"application/json",Authorization:"Bearer ".concat(s)},body:t.stringify})}function a(t,e,s,r){return fetch("".concat("https://petjournal-app-aeqg2.ondigitalocean.app/api","/pet/").concat(s,"/record/").concat(e),{method:"PATCH",headers:{"Content-Type":"application/json",Authorization:"Bearer ".concat(r)},body:t.stringify})}function i(t,e,s){return fetch("".concat("https://petjournal-app-aeqg2.ondigitalocean.app/api","/pet/").concat(e,"/record/").concat(t),{method:"DELETE",headers:{"Content-Type":"application/json",Authorization:"Bearer ".concat(s)}})}function n(t,e){return fetch("".concat("https://petjournal-app-aeqg2.ondigitalocean.app/api","/pet/").concat(t,"/records"),{method:"GET",headers:{"Content-Type":"application/json",Authorization:"Bearer ".concat(e)}})}function o(t){return fetch("".concat("https://petjournal-app-aeqg2.ondigitalocean.app/api","/records"),{method:"GET",headers:{"Content-Type":"application/json",Authorization:"Bearer ".concat(t)}})}s.d(e,{A1:function(){return o},FR:function(){return i},W6:function(){return a},ct:function(){return r},lv:function(){return n}})},86428:function(t,e,s){"use strict";s.d(e,{Z:function(){return i}});var r=s(81280),a=s(37914);class i{get stringify(){return JSON.stringify(this.fields)}validate(t){switch(this._valid=!1,t){case a.h8.LINEDATA:this.checkDate(),this.checkNumberResult(),this.checkType(),this._valid=r.Z.isEmpty(this.dateError)&&r.Z.isEmpty(this.resultError)&&r.Z.isEmpty(this.recordTypeError);break;case a.h8.BASE:this.checkName(),this.checkDate(),this.checkType(),this._valid=r.Z.isEmpty(this.nameError)&&r.Z.isEmpty(this.dateError)&&r.Z.isEmpty(this.recordTypeError);break;case a.h8.EXTRA_INFO:this._valid=!0;break;case a.h8.NEXT_DATE:this.checkNextDate(),this._valid=r.Z.isEmpty(this.nextDateError)}}get recordType(){return this._recordType}set recordType(t){this._recordType=t}get isValid(){return this._valid}get hasNextDate(){return this._hasNextDate}set hasNextDate(t){this._hasNextDate=t}get name(){return this._name}set name(t){this._name=t}get nextDate(){return this._nextDate}set nextDate(t){this._nextDate=t}get notes(){return this._notes}set notes(t){this._notes=t}get description(){return this._description}set description(t){this._description=t}get result(){return this._result}set result(t){this._result=t}get lot(){return this._lot}set lot(t){this._lot=t}get date(){return this._date}set date(t){this._date=t}get fields(){return{recordType:this._recordType,name:this._name,date:new Date(this._date).getTime(),lot:this._lot,result:this._result,description:this._description,notes:this._notes,nextDate:this.hasNextDate?new Date(this._nextDate).getTime():0}}constructor(){this._recordType="",this._name="",this._date="",this._lot="",this._result="",this._description="",this._notes="",this._hasNextDate=!1,this._nextDate="",this.nameError="",this.dateError="",this.recordTypeError="",this.nextDateError="",this.resultError="",this.hasNameError=!1,this.hasDateError=!1,this.hasRecordTypeError=!1,this.hasNextDateError=!1,this.hasResultError=!1,this._valid=!1,this.checkDate=()=>{let t=r.Z.isEmpty(this._date);this.dateError=t?"The date is required":"",this.hasDateError=t},this.checkNextDate=()=>{let t=r.Z.isEmpty(this._nextDate);this.nextDateError=t?"The date is required":"",this.hasNextDateError=t},this.checkType=()=>{let t=r.Z.isEmpty(this._recordType);this.recordTypeError=t?"The record type is required":"",this.hasRecordTypeError=t},this.checkName=()=>{let t=r.Z.isEmpty(this._name);this.nameError=t?"Name is required":"",this.hasNameError=t},this.checkNumberResult=()=>{let t=r.Z.isEmpty(this._result)||!Number.isFinite(Number(this._result));this.resultError=t?"The value is required":"",this.hasResultError=t}}}},83365:function(t){t.exports={btn:"button_btn__w__d1",btnFull:"button_btnFull__Q8iU8",btnPrimary:"button_btnPrimary__b_fGY",btnSecondary:"button_btnSecondary__Vaxi0",btnGroup:"button_btnGroup__zeRjm",btnPrimaryDisabled:"button_btnPrimaryDisabled__9IQhk",btnSecondaryDisabled:"button_btnSecondaryDisabled__eLBdY"}},83815:function(t){t.exports={textInput:"textInput_textInput__rwYXO",textInputText:"textInput_textInputText__RbFSM",label:"textInput_label__IpSov",textInputFull:"textInput_textInputFull__BtdFB",errorHighlight:"textInput_errorHighlight__6WM_d",errorMessage:"textInput_errorMessage__2Uw_U",textInputContainer:"textInput_textInputContainer__hcS5_",phoneInput:"textInput_phoneInput__ILwRV",phoneInputFull:"textInput_phoneInputFull__VL9NH"}}}]);