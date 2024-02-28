(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[618],{5775:function(e,t,a){"use strict";var n,s=a(7294);function _extends(){return(_extends=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e}).apply(this,arguments)}t.Z=function(e){return s.createElement("svg",_extends({xmlns:"http://www.w3.org/2000/svg",width:16,height:10,fill:"none",className:"EyeIcon_svg__-ml-4"},e),n||(n=s.createElement("path",{fill:"currentColor",d:"M8 9.999a8.787 8.787 0 0 1-4.537-1.278A9.326 9.326 0 0 1 .14 5.244L0 5l.14-.245A9.299 9.299 0 0 1 3.46 1.274 8.76 8.76 0 0 1 8-.001c1.594 0 3.16.44 4.539 1.275a9.298 9.298 0 0 1 3.321 3.481L16 5l-.14.244a9.326 9.326 0 0 1-3.323 3.477A8.787 8.787 0 0 1 8 9.999Zm-6.918-5A8.324 8.324 0 0 0 4.043 7.95 7.863 7.863 0 0 0 8 9.024c1.385 0 2.746-.37 3.957-1.074A8.324 8.324 0 0 0 14.918 5a8.324 8.324 0 0 0-2.961-2.951A7.863 7.863 0 0 0 8 .975c-1.385 0-2.747.37-3.957 1.074a8.324 8.324 0 0 0-2.961 2.95ZM8 8.418a3.16 3.16 0 0 1-1.813-.576 3.389 3.389 0 0 1-1.202-1.534 3.568 3.568 0 0 1-.186-1.974 3.47 3.47 0 0 1 .893-1.75 3.22 3.22 0 0 1 1.671-.935 3.127 3.127 0 0 1 1.886.194 3.3 3.3 0 0 1 1.464 1.259c.359.562.55 1.223.55 1.899 0 .906-.343 1.775-.955 2.416A3.19 3.19 0 0 1 8 8.417Zm0-5.859c-.461 0-.912.144-1.295.412a2.42 2.42 0 0 0-.859 1.095 2.548 2.548 0 0 0-.132 1.41c.09.474.312.91.638 1.25a2.3 2.3 0 0 0 1.193.669c.452.094.921.046 1.347-.14.426-.184.79-.497 1.046-.898.256-.402.393-.874.393-1.356 0-.648-.246-1.269-.683-1.727A2.279 2.279 0 0 0 8 2.558Z"})))}},2871:function(e,t,a){(window.__NEXT_P=window.__NEXT_P||[]).push(["/account/reset-password",function(){return a(6821)}])},7517:function(e,t,a){"use strict";a.d(t,{MB:function(){return useUpdateAvatar},_v:function(){return useAccountSignin},h3:function(){return useAccountResendVerification},hP:function(){return useAccountSignup},mW:function(){return useAccountForgotPassword},nW:function(){return useAccountResetPassword}});var n=a(8981),s=a(9473),o=a(1563),l=a(4595),i=a(8767);let useAccountSignin=()=>{let e=(0,s.I0)(),t=(0,i.useMutation)({mutationFn:e=>(0,o.be)({method:"post",data:e,url:"".concat("https://api.caffeine.tv","/v2/account/signin")}),onSuccess:t=>{let{data:a}=t;(null==a?void 0:a.caid)&&(null==a?void 0:a.access_token)&&(e((0,n.JS)(a)),(0,l.Cz)(a.credentials))}});return t},useAccountSignup=()=>{let e=(0,s.I0)(),t=(0,i.useMutation)({mutationFn:e=>(0,o.be)({method:"post",data:e,url:"/api/account"}),onSuccess:t=>{let{data:a}=t;(null==a?void 0:a.access_token)&&(0,o.be)({headers:{authorization:"Bearer ".concat(a.access_token),"x-client-version":"nexus"},method:"post",url:"/api/legal-acceptance"}),(null==a?void 0:a.caid)&&(null==a?void 0:a.access_token)&&(e((0,n.JS)(a)),(0,l.Cz)(a.credentials))}});return t},useAccountForgotPassword=e=>{let{onSuccess:t}=e||{},a=(0,i.useMutation)({mutationFn:e=>(0,o.be)({method:"post",data:{email:e},url:"/api/account/forgot-password"}),onSuccess:t});return a},useAccountResetPassword=()=>{let e=(0,i.useMutation)({mutationFn:e=>(0,o.be)({method:"post",data:e,url:"/api/account/reset-password"})});return e},useAccountResendVerification=()=>{let e=(0,s.v9)(e=>e.auth),{credential:t,credentials:a}=e,n=(null==a?void 0:a.access_token)||t,{mutateAsync:l,isLoading:c}=(0,i.useMutation)({mutationFn:()=>(0,o.be)({headers:{authorization:"Bearer ".concat(n)},method:"post",url:"/api/account/resend-verification"})});return{mutateAsync:l,isLoading:c}},useUpdateAvatar=()=>{let e=(0,s.v9)(e=>e.auth),t=(0,s.v9)(e=>e.user),{credential:a,credentials:l}=e,c=(null==l?void 0:l.access_token)||a,u=(0,s.I0)(),{isLoading:d,mutateAsync:f}=(0,i.useMutation)({mutationFn:e=>{let t=new FormData;return t.append("avatar",e),(0,o.be)({headers:{authorization:"Bearer ".concat(c),"content-type":"multipart/form-data"},data:t,method:"put",url:"/api/upload/avatar"})},onSuccess:e=>{let{data:a}=e;u((0,n.Nq)({...t,avatar_image_path:a.avatar_image_path}))}});return{isLoading:d,mutateAsync:f}}},4013:function(e,t,a){"use strict";a.d(t,{z:function(){return Button}});var n=a(5893),s=a(512);let Button=e=>{let{as:t="button",border:a,className:o,disabled:l,fullWidth:i,variant:c,tabIndex:u,...d}=e,f=(0,s.Z)("font-pop-label-caption-1 flex items-center justify-center px-3.5 py-3 uppercase",{"bg-ax-blue":!c||"ax-blue-primary"===c,"bg-white text-black":"primary"===c,"w-full":i,"rounded-full":"rounded"===a,"bg-dark-quinary text-dark-tertiary":"disabled"===c},o);return(0,n.jsx)(t,{className:f,disabled:"disabled"===c||l,tabIndex:u,...d})}},2578:function(e,t,a){"use strict";a.d(t,{t:function(){return PasswordToggle}});var n,s,o,l=a(5893),i=a(5775),c=a(7294);function _extends(){return(_extends=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e}).apply(this,arguments)}var ViewHiddenIcon=function(e){return c.createElement("svg",_extends({xmlns:"http://www.w3.org/2000/svg",width:20,height:15,fill:"none"},e),n||(n=c.createElement("path",{fill:"#fff",fillOpacity:.55,d:"M3.764 3.878a11.376 11.376 0 0 0-3.59 3.83L0 8l.175.293a11.406 11.406 0 0 0 4.154 4.172A11.329 11.329 0 0 0 10 14a11.32 11.32 0 0 0 3.367-.519l-.945-.945a10.131 10.131 0 0 1-7.368-.994A10.21 10.21 0 0 1 1.352 8a10.214 10.214 0 0 1 3.257-3.278l-.845-.845Z"})),s||(s=c.createElement("path",{fill:"#fff",fillOpacity:.55,d:"M6.257 6.37a4.116 4.116 0 0 0 1.477 5.04 4.063 4.063 0 0 0 3.907.345L6.257 6.371ZM13.742 9.633 8.357 4.247a4.063 4.063 0 0 1 5.035 1.475 4.117 4.117 0 0 1 .35 3.91Z"})),o||(o=c.createElement("path",{fill:"#fff",fillOpacity:.55,d:"M15.389 11.28A10.215 10.215 0 0 0 18.648 8a10.21 10.21 0 0 0-3.702-3.54 10.144 10.144 0 0 0-7.37-.994l-.95-.95a11.284 11.284 0 0 1 9.048 1.014 11.371 11.371 0 0 1 4.151 4.178L20 8l-.175.293a11.413 11.413 0 0 1-3.596 3.826l-.84-.84ZM2.71 0 17 14.29l-.706.708L2.003.708 2.71 0Z"})))};let PasswordToggle=e=>{let{show:t,onClick:a}=e;return(0,l.jsx)("div",{className:"absolute bottom-[0.5rem] right-[0.25rem] cursor-pointer",onClick:a,children:t?(0,l.jsx)(i.Z,{className:"h-[16px] w-[20px]",viewBox:"0 0 16 8"}):(0,l.jsx)(ViewHiddenIcon,{})})}},6680:function(e,t,a){"use strict";a.d(t,{n:function(){return TextField}});var n=a(5893),s=a(7536),o=a(7333);let TextField=e=>{let{autoFocus:t,className:a,control:l,fieldType:i,name:c,placeholder:u,disabled:d,register:f,type:p,onKeyDown:m,...h}=e,v="font-pop-subhead font-semibold autofill-bg-black w-full border-b-2 border-solid border-b-dark-quaternary bg-black text-white focus:outline-none active:outline-none ".concat(a||"");return(0,n.jsx)(n.Fragment,{children:"date"===i?(0,n.jsx)(s.Qr,{control:l,name:c,render:e=>{let{field:{onChange:a,name:s,value:l}}=e;return(0,n.jsx)(o.HH,{autoFocus:t,className:v,format:"##/##/####",name:s,onChange:a,onKeyDown:m,placeholder:"MM/DD/YYYY",spellCheck:"false",type:"text",value:l})}}):"zipCode"===i?(0,n.jsx)(s.Qr,{control:l,name:c,render:e=>{let{field:{onChange:a,name:s,value:l}}=e;return(0,n.jsx)(o.HH,{autoFocus:t,className:v,format:"#####",name:s,onChange:a,onKeyDown:m,placeholder:u,spellCheck:"false",type:"text",value:l})}}):"number"===p?(0,n.jsx)(s.Qr,{control:l,name:c,render:e=>{let{field:{onChange:a,name:s,value:l}}=e;return(0,n.jsx)(o.h3,{allowNegative:!1,autoFocus:t,className:v,decimalScale:0,name:s,onChange:a,onKeyDown:m,value:l})}}):(0,n.jsx)("input",{autoFocus:t,className:v,...f,disabled:d,name:c,onKeyDown:m,placeholder:u,spellCheck:"false",type:p||"text",...h})})}},6821:function(e,t,a){"use strict";a.r(t),a.d(t,{ResetPassword:function(){return ResetPassword},default:function(){return h}});var n,s=a(5893),o=a(7536),l=a(4013),i=a(7294);function _extends(){return(_extends=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e}).apply(this,arguments)}var CaffeineLogoIcon=function(e){return i.createElement("svg",_extends({width:40,height:30,viewBox:"0 0 38 34"},e),n||(n=i.createElement("path",{fill:"#FFF",stroke:"#FFF",d:"m28.427 22.444 7.282-4.206-7.282 12.617v-8.411zm-6.533 3.773 5.087 5.876H11.718l10.176-5.876zm-12.32-7.115v11.753L1.941 17.633l7.631 1.469zm0-7.546L2.29 15.762 9.573 3.145v8.411zm6.532-3.773L11.02 1.907h15.263L16.106 7.783zm12.32 7.115V3.145l7.632 13.222-7.631-1.469zm0 6.499v-5.576l7.242 1.394-7.241 4.182zm-.906 1.57v8.364l-4.827-5.576 4.827-2.788zm-10.083-2.352 9.257 1.783-4.924 2.843-.002.001-.003.002-10.5 6.064 6.172-10.693zm-6.957-1.888v-5.693l6.172 7.128-6.172 10.693V18.727zm-.907-6.124v5.576l-7.24-1.394 7.24-4.182zm.907-1.57V2.669l4.827 5.576-4.827 2.788zm10.083 2.352-9.257-1.783 4.93-2.846.003-.002 10.496-6.062-6.172 10.693zm6.957 1.888v5.693l-6.171-7.128L27.52 3.145v12.128zm-10.075 4.42-6.22-7.183 9.33 1.796 6.22 7.184-9.33-1.796zm19.952-2.647.002-.01v-.014a.45.45 0 0 0 0-.02l.001-.011v-.014a.44.44 0 0 0-.002-.017l-.001-.013-.002-.014a.687.687 0 0 0-.003-.016l-.002-.014-.004-.013a.512.512 0 0 0-.004-.015l-.004-.015-.004-.012a.547.547 0 0 0-.006-.016l-.006-.014a.256.256 0 0 0-.013-.026.35.35 0 0 0-.007-.014l-.003-.005-8.973-15.546c0-.002-.002-.003-.003-.004a.569.569 0 0 0-.018-.03l-.007-.008-.01-.014-.01-.012-.008-.01-.011-.01a.46.46 0 0 0-.01-.011l-.012-.01-.01-.01a.396.396 0 0 0-.012-.01l-.013-.01-.009-.006a.473.473 0 0 0-.014-.01l-.015-.009-.004-.002-.004-.002-.016-.009-.015-.007-.01-.005-.016-.006a.384.384 0 0 0-.014-.006l-.012-.004-.015-.004a.639.639 0 0 0-.014-.004l-.015-.004-.013-.002a.494.494 0 0 0-.015-.003l-.017-.002-.011-.001A.415.415 0 0 0 27.978 1H10.006l-.019.002h-.01l-.016.003a.517.517 0 0 0-.017.003l-.012.002-.015.004a.416.416 0 0 0-.015.004l-.013.003-.014.005a.447.447 0 0 0-.014.006l-.013.005-.013.006a.427.427 0 0 0-.015.007l-.012.006-.01.007a.556.556 0 0 0-.017.01l-.011.007-.009.006a.484.484 0 0 0-.016.013l-.011.008-.004.004-.004.003a.459.459 0 0 0-.025.024l-.008.009a.37.37 0 0 0-.046.06.45.45 0 0 0-.01.015l-.003.005L.661 16.773l-.003.005a.539.539 0 0 0-.015.03l-.006.012a.431.431 0 0 0-.028.09v.004l-.002.005-.002.014a.426.426 0 0 0-.002.02l-.002.011v.033l-.001.012v.013l.002.018.001.013.002.014.003.016.002.014.004.013.004.015.004.015.004.011.006.017.006.014.005.01.008.016.007.014.003.005 8.973 15.546.002.004a.43.43 0 0 0 .021.032l.01.014.005.006a.44.44 0 0 0 .03.033l.005.006.008.008.018.015.014.012.01.008a.448.448 0 0 0 .01.007l.023.015.01.006.005.004a.402.402 0 0 0 .047.022l.003.001.005.002c.014.006.028.01.043.015l.016.004a.492.492 0 0 0 .036.007l.018.003.044.003h17.959l.04-.002.01-.001.012-.002a.435.435 0 0 0 .021-.003l.017-.004.012-.003.012-.003.018-.006a.452.452 0 0 0 .022-.008l.006-.002a.436.436 0 0 0 .033-.016l.015-.007.005-.003.017-.01.016-.011.01-.007.01-.009.014-.01.004-.004.01-.01.003-.002.01-.009.006-.006.014-.016.015-.017.004-.005.01-.014a.494.494 0 0 0 .022-.033l.002-.004 8.969-15.538v-.001l.004-.007c.002-.002.002-.005.004-.006a.45.45 0 0 0 .02-.044c.003-.006.006-.01.008-.017l.003-.009a.492.492 0 0 0 .006-.017l.004-.013.002-.01a.365.365 0 0 0 .005-.02l.001-.005v-.006l.003-.013a.432.432 0 0 0 .002-.02z"})))},c=a(1664),u=a.n(c),d=a(2578),f=a(6680),p=a(7517),m=a(1163);let ResetPasswordContent=()=>{var e,t,a,n,c;let{handleSubmit:h,register:v,formState:{errors:x},setError:g,clearErrors:w,watch:b}=(0,o.cI)(),j=(0,m.useRouter)(),[y,N]=(0,i.useState)(!1),[_,P]=(0,i.useState)(!1),[A,k]=(0,i.useState)(!1),{code:z}=j.query,{isLoading:F,mutateAsync:C}=(0,p.nW)(),S=!b("password")||!b("confirmPassword")||!!(null===(e=x.confirmPassword)||void 0===e?void 0:e.message)||F,onSubmit=async e=>{let{password:t,confirmPassword:a}=e;if(t!==a){g("confirmPassword",{message:"Passwords provided do not match. Try again?"});return}try{z&&(await C({code:z.toString(),password:t}),k(!0))}catch(t){var n,s;let e=null==t?void 0:null===(s=t.response)||void 0===s?void 0:null===(n=s.data)||void 0===n?void 0:n.errors;e&&(e=Object.values(e)[0]),Array.isArray(e)?g("confirmPassword",{message:e[0]}):g("confirmPassword",{message:"Something went wrong, please try again later."})}};return(0,s.jsx)("div",{className:"flex h-screen items-center justify-center px-8 text-white",children:(0,s.jsxs)("div",{className:"flex w-80 flex-col gap-12",children:[(0,s.jsxs)("header",{className:"flex items-center gap-4",children:[(0,s.jsx)(CaffeineLogoIcon,{height:56,width:56}),(0,s.jsx)("h1",{className:"font-osw-large-title-1 uppercase",children:A?"All good to go":"Reset Password"})]}),A?(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)("h2",{className:"font-pop-caption text-center text-lg",children:"Your password has been successfully reset."}),(0,s.jsx)(u(),{className:"font-pop-label-caption-1 w-52 self-center rounded-full bg-ax-blue px-3.5 py-3 text-center uppercase",href:"/?reg=login",children:"Log into Caffeine"})]}):(0,s.jsxs)("form",{className:"relative flex flex-col gap-8",onSubmit:h(onSubmit),children:[(0,s.jsxs)("div",{className:"flex flex-col gap-2",children:[(0,s.jsx)("h2",{className:"font-pop-label-caption-1 uppercase text-dark-tertiary",children:"New Password"}),(0,s.jsxs)("div",{className:"relative",children:[(0,s.jsx)(f.n,{autoFocus:!0,className:"!border-b bg-transparent",name:"password",register:v("password",{required:{value:!0,message:"Required"},onChange:()=>{w("confirmPassword")}}),type:"".concat(y?"text":"password")}),(0,s.jsx)(d.t,{onClick:()=>{N(!y)},show:y})]}),(null==x?void 0:x.password)&&(0,s.jsx)("p",{className:"font-pop-subhead text-error",children:null==x?void 0:null===(a=x.password)||void 0===a?void 0:null===(t=a.message)||void 0===t?void 0:t.toString()})]}),(0,s.jsxs)("div",{className:"flex flex-col gap-2",children:[(0,s.jsx)("h2",{className:"font-pop-label-caption-1 uppercase text-dark-tertiary",children:"Confirm Password"}),(0,s.jsxs)("div",{className:"relative",children:[(0,s.jsx)(f.n,{className:"!border-b bg-transparent",name:"confirmPassword",register:v("confirmPassword",{required:{value:!0,message:"Required"},onChange:()=>{w("confirmPassword")}}),type:"".concat(_?"text":"password")}),(0,s.jsx)(d.t,{onClick:()=>{P(!_)},show:_})]}),(null==x?void 0:x.confirmPassword)&&(0,s.jsx)("p",{className:"font-pop-subhead text-error",children:null==x?void 0:null===(c=x.confirmPassword)||void 0===c?void 0:null===(n=c.message)||void 0===n?void 0:n.toString()})]}),(0,s.jsx)("div",{className:"w-full gap-y-4 uppercase text-white",children:(0,s.jsx)(l.z,{disabled:S,fullWidth:!0,children:"Reset Password"})})]})]})})},ResetPassword=()=>(0,s.jsx)("main",{children:(0,s.jsx)(ResetPasswordContent,{})});var h=ResetPassword},512:function(e,t,a){"use strict";t.Z=function(){for(var e,t,a=0,n="";a<arguments.length;)(e=arguments[a++])&&(t=function r(e){var t,a,n="";if("string"==typeof e||"number"==typeof e)n+=e;else if("object"==typeof e){if(Array.isArray(e))for(t=0;t<e.length;t++)e[t]&&(a=r(e[t]))&&(n&&(n+=" "),n+=a);else for(t in e)e[t]&&(n&&(n+=" "),n+=t)}return n}(e))&&(n&&(n+=" "),n+=t);return n}}},function(e){e.O(0,[409,774,888,179],function(){return e(e.s=2871)}),_N_E=e.O()}]);