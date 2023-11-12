"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[551],{6244:function(e,t,r){var a=r(67294);let n=a.forwardRef(function({title:e,titleId:t,...r},n){return a.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",strokeWidth:1.5,stroke:"currentColor","aria-hidden":"true",ref:n,"aria-labelledby":t},r),e?a.createElement("title",{id:t},e):null,a.createElement("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126zM12 15.75h.007v.008H12v-.008z"}))});t.Z=n},73439:function(e,t,r){let a;/*!
 * Chart.js v3.9.1
 * https://www.chartjs.org
 * (c) 2022 Chart.js Contributors
 * Released under the MIT License
 */function n(){}function i(e){if(Array.isArray&&Array.isArray(e))return!0;let t=Object.prototype.toString.call(e);return"[object"===t.slice(0,7)&&"Array]"===t.slice(-6)}function f(e){return null!==e&&"[object Object]"===Object.prototype.toString.call(e)}function s(e,t,r,a){if(-1!==["__proto__","prototype","constructor"].indexOf(e))return;let n=t[e],s=r[e];f(n)&&f(s)?o(n,s,a):t[e]=function e(t){if(i(t))return t.map(e);if(f(t)){let r=Object.create(null),a=Object.keys(t),n=a.length,i=0;for(;i<n;++i)r[a[i]]=e(t[a[i]]);return r}return t}(s)}function o(e,t,r){let a=i(t)?t:[t],n=a.length;if(!f(e))return e;r=r||{};let o=r.merger||s;for(let i=0;i<n;++i){if(!f(t=a[i]))continue;let n=Object.keys(t);for(let a=0,i=n.length;a<i;++a)o(n[a],e,t,r)}return e}r.d(t,{ZT:function(){return n}});let c=Math.PI,u=2*c,l=c/2;"undefined"!=typeof window&&window.requestAnimationFrame;let d=e=>0===e||1===e,b=(e,t,r)=>-(Math.pow(2,10*(e-=1))*Math.sin((e-t)*u/r)),h=(e,t,r)=>Math.pow(2,-10*e)*Math.sin((e-t)*u/r)+1,g={linear:e=>e,easeInQuad:e=>e*e,easeOutQuad:e=>-e*(e-2),easeInOutQuad:e=>(e/=.5)<1?.5*e*e:-.5*(--e*(e-2)-1),easeInCubic:e=>e*e*e,easeOutCubic:e=>(e-=1)*e*e+1,easeInOutCubic:e=>(e/=.5)<1?.5*e*e*e:.5*((e-=2)*e*e+2),easeInQuart:e=>e*e*e*e,easeOutQuart:e=>-((e-=1)*e*e*e-1),easeInOutQuart:e=>(e/=.5)<1?.5*e*e*e*e:-.5*((e-=2)*e*e*e-2),easeInQuint:e=>e*e*e*e*e,easeOutQuint:e=>(e-=1)*e*e*e*e+1,easeInOutQuint:e=>(e/=.5)<1?.5*e*e*e*e*e:.5*((e-=2)*e*e*e*e+2),easeInSine:e=>-Math.cos(e*l)+1,easeOutSine:e=>Math.sin(e*l),easeInOutSine:e=>-.5*(Math.cos(c*e)-1),easeInExpo:e=>0===e?0:Math.pow(2,10*(e-1)),easeOutExpo:e=>1===e?1:-Math.pow(2,-10*e)+1,easeInOutExpo:e=>d(e)?e:e<.5?.5*Math.pow(2,10*(2*e-1)):.5*(-Math.pow(2,-10*(2*e-1))+2),easeInCirc:e=>e>=1?e:-(Math.sqrt(1-e*e)-1),easeOutCirc:e=>Math.sqrt(1-(e-=1)*e),easeInOutCirc:e=>(e/=.5)<1?-.5*(Math.sqrt(1-e*e)-1):.5*(Math.sqrt(1-(e-=2)*e)+1),easeInElastic:e=>d(e)?e:b(e,.075,.3),easeOutElastic:e=>d(e)?e:h(e,.075,.3),easeInOutElastic:e=>d(e)?e:e<.5?.5*b(2*e,.1125,.45):.5+.5*h(2*e-1,.1125,.45),easeInBack:e=>e*e*(2.70158*e-1.70158),easeOutBack:e=>(e-=1)*e*(2.70158*e+1.70158)+1,easeInOutBack(e){let t=1.70158;return(e/=.5)<1?.5*(e*e*(((t*=1.525)+1)*e-t)):.5*((e-=2)*e*(((t*=1.525)+1)*e+t)+2)},easeInBounce:e=>1-g.easeOutBounce(1-e),easeOutBounce:e=>e<.36363636363636365?7.5625*e*e:e<.7272727272727273?7.5625*(e-=.5454545454545454)*e+.75:e<.9090909090909091?7.5625*(e-=.8181818181818182)*e+.9375:7.5625*(e-=.9545454545454546)*e+.984375,easeInOutBounce:e=>e<.5?.5*g.easeInBounce(2*e):.5*g.easeOutBounce(2*e-1)+.5};/*!
 * @kurkle/color v0.2.1
 * https://github.com/kurkle/color#readme
 * (c) 2022 Jukka Kurkela
 * Released under the MIT License
 */function p(e){return e+.5|0}let v=(e,t,r)=>Math.max(Math.min(e,r),t);function m(e){return v(p(2.55*e),0,255)}function w(e){return v(p(255*e),0,255)}function y(e){return v(p(e/2.55)/100,0,1)}function O(e){return v(p(100*e),0,100)}let x={0:0,1:1,2:2,3:3,4:4,5:5,6:6,7:7,8:8,9:9,A:10,B:11,C:12,D:13,E:14,F:15,a:10,b:11,c:12,d:13,e:14,f:15},M=[..."0123456789ABCDEF"],k=e=>M[15&e],_=e=>M[(240&e)>>4]+M[15&e],Y=e=>(240&e)>>4==(15&e),E=e=>Y(e.r)&&Y(e.g)&&Y(e.b)&&Y(e.a),F=(e,t)=>e<255?t(e):"",I=/^(hsla?|hwb|hsv)\(\s*([-+.e\d]+)(?:deg)?[\s,]+([-+.e\d]+)%[\s,]+([-+.e\d]+)%(?:[\s,]+([-+.e\d]+)(%)?)?\s*\)$/;function S(e,t,r){let a=t*Math.min(r,1-r),n=(t,n=(t+e/30)%12)=>r-a*Math.max(Math.min(n-3,9-n,1),-1);return[n(0),n(8),n(4)]}function j(e,t,r){let a=(a,n=(a+e/60)%6)=>r-r*t*Math.max(Math.min(n,4-n,1),0);return[a(5),a(3),a(1)]}function A(e,t,r){let a;let n=S(e,1,.5);for(t+r>1&&(a=1/(t+r),t*=a,r*=a),a=0;a<3;a++)n[a]*=1-t-r,n[a]+=t;return n}function C(e){let t,r,a;let n=e.r/255,i=e.g/255,f=e.b/255,s=Math.max(n,i,f),o=Math.min(n,i,f),c=(s+o)/2;return s!==o&&(a=s-o,r=c>.5?a/(2-s-o):a/(s+o),t=60*(t=n===s?(i-f)/a+(i<f?6:0):i===s?(f-n)/a+2:(n-i)/a+4)+.5),[0|t,r||0,c]}function X(e,t,r,a){return(Array.isArray(t)?e(t[0],t[1],t[2]):e(t,r,a)).map(w)}function R(e){return(e%360+360)%360}let T={x:"dark",Z:"light",Y:"re",X:"blu",W:"gr",V:"medium",U:"slate",A:"ee",T:"ol",S:"or",B:"ra",C:"lateg",D:"ights",R:"in",Q:"turquois",E:"hi",P:"ro",O:"al",N:"le",M:"de",L:"yello",F:"en",K:"ch",G:"arks",H:"ea",I:"ightg",J:"wh"},Z={OiceXe:"f0f8ff",antiquewEte:"faebd7",aqua:"ffff",aquamarRe:"7fffd4",azuY:"f0ffff",beige:"f5f5dc",bisque:"ffe4c4",black:"0",blanKedOmond:"ffebcd",Xe:"ff",XeviTet:"8a2be2",bPwn:"a52a2a",burlywood:"deb887",caMtXe:"5f9ea0",KartYuse:"7fff00",KocTate:"d2691e",cSO:"ff7f50",cSnflowerXe:"6495ed",cSnsilk:"fff8dc",crimson:"dc143c",cyan:"ffff",xXe:"8b",xcyan:"8b8b",xgTMnPd:"b8860b",xWay:"a9a9a9",xgYF:"6400",xgYy:"a9a9a9",xkhaki:"bdb76b",xmagFta:"8b008b",xTivegYF:"556b2f",xSange:"ff8c00",xScEd:"9932cc",xYd:"8b0000",xsOmon:"e9967a",xsHgYF:"8fbc8f",xUXe:"483d8b",xUWay:"2f4f4f",xUgYy:"2f4f4f",xQe:"ced1",xviTet:"9400d3",dAppRk:"ff1493",dApskyXe:"bfff",dimWay:"696969",dimgYy:"696969",dodgerXe:"1e90ff",fiYbrick:"b22222",flSOwEte:"fffaf0",foYstWAn:"228b22",fuKsia:"ff00ff",gaRsbSo:"dcdcdc",ghostwEte:"f8f8ff",gTd:"ffd700",gTMnPd:"daa520",Way:"808080",gYF:"8000",gYFLw:"adff2f",gYy:"808080",honeyMw:"f0fff0",hotpRk:"ff69b4",RdianYd:"cd5c5c",Rdigo:"4b0082",ivSy:"fffff0",khaki:"f0e68c",lavFMr:"e6e6fa",lavFMrXsh:"fff0f5",lawngYF:"7cfc00",NmoncEffon:"fffacd",ZXe:"add8e6",ZcSO:"f08080",Zcyan:"e0ffff",ZgTMnPdLw:"fafad2",ZWay:"d3d3d3",ZgYF:"90ee90",ZgYy:"d3d3d3",ZpRk:"ffb6c1",ZsOmon:"ffa07a",ZsHgYF:"20b2aa",ZskyXe:"87cefa",ZUWay:"778899",ZUgYy:"778899",ZstAlXe:"b0c4de",ZLw:"ffffe0",lime:"ff00",limegYF:"32cd32",lRF:"faf0e6",magFta:"ff00ff",maPon:"800000",VaquamarRe:"66cdaa",VXe:"cd",VScEd:"ba55d3",VpurpN:"9370db",VsHgYF:"3cb371",VUXe:"7b68ee",VsprRggYF:"fa9a",VQe:"48d1cc",VviTetYd:"c71585",midnightXe:"191970",mRtcYam:"f5fffa",mistyPse:"ffe4e1",moccasR:"ffe4b5",navajowEte:"ffdead",navy:"80",Tdlace:"fdf5e6",Tive:"808000",TivedBb:"6b8e23",Sange:"ffa500",SangeYd:"ff4500",ScEd:"da70d6",pOegTMnPd:"eee8aa",pOegYF:"98fb98",pOeQe:"afeeee",pOeviTetYd:"db7093",papayawEp:"ffefd5",pHKpuff:"ffdab9",peru:"cd853f",pRk:"ffc0cb",plum:"dda0dd",powMrXe:"b0e0e6",purpN:"800080",YbeccapurpN:"663399",Yd:"ff0000",Psybrown:"bc8f8f",PyOXe:"4169e1",saddNbPwn:"8b4513",sOmon:"fa8072",sandybPwn:"f4a460",sHgYF:"2e8b57",sHshell:"fff5ee",siFna:"a0522d",silver:"c0c0c0",skyXe:"87ceeb",UXe:"6a5acd",UWay:"708090",UgYy:"708090",snow:"fffafa",sprRggYF:"ff7f",stAlXe:"4682b4",tan:"d2b48c",teO:"8080",tEstN:"d8bfd8",tomato:"ff6347",Qe:"40e0d0",viTet:"ee82ee",JHt:"f5deb3",wEte:"ffffff",wEtesmoke:"f5f5f5",Lw:"ffff00",LwgYF:"9acd32"},P=/^rgba?\(\s*([-+.\d]+)(%)?[\s,]+([-+.e\d]+)(%)?[\s,]+([-+.e\d]+)(%)?(?:[\s,/]+([-+.e\d]+)(%)?)?\s*\)$/,B=e=>e<=.0031308?12.92*e:1.055*Math.pow(e,1/2.4)-.055,$=e=>e<=.04045?e/12.92:Math.pow((e+.055)/1.055,2.4);function L(e,t,r){if(e){let a=C(e);a[t]=Math.max(0,Math.min(a[t]+a[t]*r,0===t?360:1)),a=X(S,a,void 0,void 0),e.r=a[0],e.g=a[1],e.b=a[2]}}function Q(e,t){return e?Object.assign(t||{},e):e}function H(e){var t={r:0,g:0,b:0,a:255};return Array.isArray(e)?e.length>=3&&(t={r:e[0],g:e[1],b:e[2],a:255},e.length>3&&(t.a=w(e[3]))):(t=Q(e,{r:0,g:0,b:0,a:1})).a=w(t.a),t}class q{constructor(e){let t;if(e instanceof q)return e;let r=typeof e;if("object"===r)t=H(e);else if("string"===r){var n,i;i=e.length,"#"===e[0]&&(4===i||5===i?n={r:255&17*x[e[1]],g:255&17*x[e[2]],b:255&17*x[e[3]],a:5===i?17*x[e[4]]:255}:(7===i||9===i)&&(n={r:x[e[1]]<<4|x[e[2]],g:x[e[3]]<<4|x[e[4]],b:x[e[5]]<<4|x[e[6]],a:9===i?x[e[7]]<<4|x[e[8]]:255})),t=n||function(e){a||((a=function(){let e,t,r,a,n;let i={},f=Object.keys(Z),s=Object.keys(T);for(e=0;e<f.length;e++){for(t=0,a=n=f[e];t<s.length;t++)r=s[t],n=n.replace(r,T[r]);r=parseInt(Z[a],16),i[n]=[r>>16&255,r>>8&255,255&r]}return i}()).transparent=[0,0,0,0]);let t=a[e.toLowerCase()];return t&&{r:t[0],g:t[1],b:t[2],a:4===t.length?t[3]:255}}(e)||("r"===e.charAt(0)?function(e){let t,r,a;let n=P.exec(e),i=255;if(n){if(n[7]!==t){let e=+n[7];i=n[8]?m(e):v(255*e,0,255)}return t=+n[1],r=+n[3],a=+n[5],{r:t=255&(n[2]?m(t):v(t,0,255)),g:r=255&(n[4]?m(r):v(r,0,255)),b:a=255&(n[6]?m(a):v(a,0,255)),a:i}}}(e):function(e){let t;let r=I.exec(e),a=255;if(!r)return;r[5]!==t&&(a=r[6]?m(+r[5]):w(+r[5]));let n=R(+r[2]),i=+r[3]/100,f=+r[4]/100;return{r:(t="hwb"===r[1]?X(A,n,i,f):"hsv"===r[1]?X(j,n,i,f):X(S,n,i,f))[0],g:t[1],b:t[2],a:a}}(e))}this._rgb=t,this._valid=!!t}get valid(){return this._valid}get rgb(){var e=Q(this._rgb);return e&&(e.a=y(e.a)),e}set rgb(e){this._rgb=H(e)}rgbString(){var e;return this._valid?(e=this._rgb)&&(e.a<255?`rgba(${e.r}, ${e.g}, ${e.b}, ${y(e.a)})`:`rgb(${e.r}, ${e.g}, ${e.b})`):void 0}hexString(){var e,t;return this._valid?(t=E(e=this._rgb)?k:_,e?"#"+t(e.r)+t(e.g)+t(e.b)+F(e.a,t):void 0):void 0}hslString(){return this._valid?function(e){if(!e)return;let t=C(e),r=t[0],a=O(t[1]),n=O(t[2]);return e.a<255?`hsla(${r}, ${a}%, ${n}%, ${y(e.a)})`:`hsl(${r}, ${a}%, ${n}%)`}(this._rgb):void 0}mix(e,t){if(e){let r;let a=this.rgb,n=e.rgb,i=t===r?.5:t,f=2*i-1,s=a.a-n.a,o=((f*s==-1?f:(f+s)/(1+f*s))+1)/2;r=1-o,a.r=255&o*a.r+r*n.r+.5,a.g=255&o*a.g+r*n.g+.5,a.b=255&o*a.b+r*n.b+.5,a.a=i*a.a+(1-i)*n.a,this.rgb=a}return this}interpolate(e,t){return e&&(this._rgb=function(e,t,r){let a=$(y(e.r)),n=$(y(e.g)),i=$(y(e.b));return{r:w(B(a+r*($(y(t.r))-a))),g:w(B(n+r*($(y(t.g))-n))),b:w(B(i+r*($(y(t.b))-i))),a:e.a+r*(t.a-e.a)}}(this._rgb,e._rgb,t)),this}clone(){return new q(this.rgb)}alpha(e){return this._rgb.a=w(e),this}clearer(e){let t=this._rgb;return t.a*=1-e,this}greyscale(){let e=this._rgb,t=p(.3*e.r+.59*e.g+.11*e.b);return e.r=e.g=e.b=t,this}opaquer(e){let t=this._rgb;return t.a*=1+e,this}negate(){let e=this._rgb;return e.r=255-e.r,e.g=255-e.g,e.b=255-e.b,this}lighten(e){return L(this._rgb,2,e),this}darken(e){return L(this._rgb,2,-e),this}saturate(e){return L(this._rgb,1,e),this}desaturate(e){return L(this._rgb,1,-e),this}rotate(e){var t,r;return(r=C(t=this._rgb))[0]=R(r[0]+e),r=X(S,r,void 0,void 0),t.r=r[0],t.g=r[1],t.b=r[2],this}}function W(e){return!function(e){if(e&&"object"==typeof e){let t=e.toString();return"[object CanvasPattern]"===t||"[object CanvasGradient]"===t}return!1}(e)?new q(e).saturate(.5).darken(.1).hexString():e}let N=Object.create(null),U=Object.create(null);function V(e,t){if(!t)return e;let r=t.split(".");for(let t=0,a=r.length;t<a;++t){let a=r[t];e=e[a]||(e[a]=Object.create(null))}return e}function K(e,t,r){return"string"==typeof t?o(V(e,t),r):o(V(e,""),t)}new class{constructor(e){this.animation=void 0,this.backgroundColor="rgba(0,0,0,0.1)",this.borderColor="rgba(0,0,0,0.1)",this.color="#666",this.datasets={},this.devicePixelRatio=e=>e.chart.platform.getDevicePixelRatio(),this.elements={},this.events=["mousemove","mouseout","click","touchstart","touchmove"],this.font={family:"'Helvetica Neue', 'Helvetica', 'Arial', sans-serif",size:12,style:"normal",lineHeight:1.2,weight:null},this.hover={},this.hoverBackgroundColor=(e,t)=>W(t.backgroundColor),this.hoverBorderColor=(e,t)=>W(t.borderColor),this.hoverColor=(e,t)=>W(t.color),this.indexAxis="x",this.interaction={mode:"nearest",intersect:!0,includeInvisible:!1},this.maintainAspectRatio=!0,this.onHover=null,this.onClick=null,this.parsing=!0,this.plugins={},this.responsive=!0,this.scale=void 0,this.scales={},this.showLine=!0,this.drawActiveElementsOnTop=!0,this.describe(e)}set(e,t){return K(this,e,t)}get(e){return V(this,e)}describe(e,t){return K(U,e,t)}override(e,t){return K(N,e,t)}route(e,t,r,a){let n=V(this,e),i=V(this,r),s="_"+t;Object.defineProperties(n,{[s]:{value:n[t],writable:!0},[t]:{enumerable:!0,get(){let e=this[s],t=i[a];return f(e)?Object.assign({},t,e):void 0===e?t:e},set(e){this[s]=e}}})}}({_scriptable:e=>!e.startsWith("on"),_indexable:e=>"events"!==e,hover:{_fallback:"interaction"},interaction:{_scriptable:!1,_indexable:!1}}),function(){try{let e={get passive(){return!1}};window.addEventListener("test",null,e),window.removeEventListener("test",null,e)}catch(e){}}()}}]);