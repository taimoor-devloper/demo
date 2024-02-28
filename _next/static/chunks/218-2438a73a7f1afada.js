"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[218],{6833:function(e,t,a){var l,o=a(7294);function _extends(){return(_extends=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var l in a)Object.prototype.hasOwnProperty.call(a,l)&&(e[l]=a[l])}return e}).apply(this,arguments)}t.Z=function(e){return o.createElement("svg",_extends({width:24,height:24,fill:"#fff",viewBox:"0 0 18 18"},e),l||(l=o.createElement("g",{transform:"translate(-1 -1)"},o.createElement("rect",{width:2,height:24,x:9,y:-2,rx:1,transform:"rotate(45 10 10)"}),o.createElement("rect",{width:2,height:24,x:9,y:-2,rx:1,transform:"scale(-1 1) rotate(45 0 -14.142)"}))))}},4013:function(e,t,a){a.d(t,{z:function(){return Button}});var l=a(5893),o=a(512);let Button=e=>{let{as:t="button",border:a,className:r,disabled:n,fullWidth:i,variant:s,tabIndex:c,...d}=e,u=(0,o.Z)("font-pop-label-caption-1 flex items-center justify-center px-3.5 py-3 uppercase",{"bg-ax-blue":!s||"ax-blue-primary"===s,"bg-white text-black":"primary"===s,"w-full":i,"rounded-full":"rounded"===a,"bg-dark-quinary text-dark-tertiary":"disabled"===s},r);return(0,l.jsx)(t,{className:u,disabled:"disabled"===s||n,tabIndex:c,...d})}},4218:function(e,t,a){a.r(t),a.d(t,{WelcomeModal:function(){return WelcomeModal}});var l=a(5893),o=a(1355),r=a(2545),n=a(7294),i=a(8981),s=a(2466),c=a(2886),d=a(9473),u=a(347),m=a(4013),p=a(6833),b=a(7005),h=a(5289),f=a(5675),g=a.n(f);let WelcomeModalImage=e=>{let{activity:t}=e,{broadcast_info:a,user:o}=t||{};return(0,l.jsxs)("div",{className:"mr-4",children:[(0,l.jsxs)("div",{className:"relative mb-2 bg-black",children:[(null==a?void 0:a.preview_image_path)&&(0,l.jsx)(g(),{alt:"preview",className:"aspect-video w-[215px] min-w-[182px] flex-1 rounded-lg bg-black object-cover opacity-50",height:101,priority:!0,src:"".concat("https://api-sam.caffeine.tv","/thumb").concat(null==a?void 0:a.preview_image_path,"?format=webp&width=360"),unoptimized:!0,width:180}),(null==o?void 0:o.avatar_image_path)&&(0,l.jsx)(g(),{alt:"avatar",className:"absolute left-1/2 top-1/2 h-14 w-14 flex-1 -translate-x-1/2 -translate-y-1/2 rounded-full bg-black object-cover",height:56,priority:!0,src:"".concat("https://api-sam.caffeine.tv","/thumb").concat(null==o?void 0:o.avatar_image_path,"?format=webp&width=84&height=84"),style:{boxShadow:"0px 3.571px 3.571px 0px rgba(0, 0, 0, 0.25)"},unoptimized:!0,width:56})]}),(0,l.jsxs)("div",{className:"flex items-center justify-center",children:[(0,l.jsx)("p",{className:"font-pop-footnote text-center font-bold",children:null==o?void 0:o.username}),(null==o?void 0:o.badge)&&(0,l.jsx)(h.C,{badge:null==o?void 0:o.badge})]})]})};var v=a(3300);let CreatorsMarquee=e=>{let{creatorsList:t,recentActivityList:a,welcomeShow:o}=e,r=(0,d.I0)(),{isMobile:n}=(0,v.h)(),handleOnClick=e=>{let t=(0,c.Qe)(null==e?void 0:e.tags);if((0,s.oj)("modal_action",{modal_name:"category_welcome",action_type:"creator_tap",broadcaster_username:null==e?void 0:e.username.toLowerCase(),web_presentation:n?"mobile":"desktop"}),n){let e=(0,c.RM)(t);(0,s.zT)("modal:welcome",e),location.assign(e)}else r((0,i.z2)(!1)),r((0,i.AK)(!0))};return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)("div",{className:"bg-black",children:(0,l.jsx)(b.Z,{play:o,speed:20,children:(0,l.jsx)("ul",{className:"mb-4 flex",children:null==t?void 0:t.map((e,t)=>{let o=a&&a[t];return(0,l.jsx)("li",{className:"cursor-pointer",onClick:()=>handleOnClick(o),children:(0,l.jsx)(WelcomeModalImage,{activity:o})},"top-".concat(null==o?void 0:o.activity_id,"-").concat(t))})})})}),(0,l.jsx)("div",{className:"mt-1 bg-black max-[375px]:hidden",children:(0,l.jsx)(b.Z,{className:"[&>*]:relative [&>*]:left-[-100px]",play:o,speed:20,children:(0,l.jsx)("ul",{className:"flex",children:(()=>{let e=(null==t?void 0:t.slice(0,t.length/2))||[],o=(null==t?void 0:t.slice(t.length/2))||[];return[...o,...e].map((e,t)=>{let o=a&&a.find(t=>{var a;return(null==t?void 0:null===(a=t.user)||void 0===a?void 0:a.username)===e});return(0,l.jsx)("li",{className:"cursor-pointer",onClick:()=>handleOnClick(o),children:(0,l.jsx)(WelcomeModalImage,{activity:o})},"bottom-".concat(null==o?void 0:o.activity_id,"-").concat(t))})})()})})})]})};var x=a(337),S=a(1563),W=a(6948),j=a(9910),y=a(3882),w=a(3645);let getCategories=()=>({actionsports:{title:"action sports",tag:"actionsports",metaData:[{url:"/brand-studio/WelcomeScreen/WS-ActionSports-XGames.jpg",creator:"X Games"},{url:"/brand-studio/WelcomeScreen/WS-ActionSports-WorldSurfLeague.jpg",creator:"World Surf League"},{url:"/brand-studio/WelcomeScreen/WS-ActionSports-NaturalSelection.jpg",creator:"NaturalSelection"},{url:"/brand-studio/WelcomeScreen/WS-ActionSports-TMPST.jpg",creator:"TMPST"}]},baseball:{title:"baseball",tag:"baseball",metaData:[{url:"/brand-studio/WelcomeScreen/WS-Baseball-AWAWiffle.jpg",creator:"AWA Wiffle"},{url:"/brand-studio/WelcomeScreen/WS-Baseball-NoFilterNetwork.jpg",creator:"No Filter Network"},{url:"/brand-studio/WelcomeScreen/WS-Baseball-FlippinBatsPod.jpg",creator:"Flippin Bats Pod"},{url:"/brand-studio/WelcomeScreen/WS-Baseball-BarstoolBaseball.jpg",creator:"Barstool Baseball"}]},basketball:{title:"basketball",tag:"basketball",metaData:[{url:"/brand-studio/WelcomeScreen/WS-Basketball-VeniceBall.jpg",creator:"Venice Ball"},{url:"/brand-studio/WelcomeScreen/WS-Basketball-BELAV.jpg",creator:"BLEAV"}]},battlerap:{title:"battle rap",tag:"battlerap",metaData:[{url:"/brand-studio/WelcomeScreen/WS-BattleRap-URLTV.jpg",creator:"URLTV"},{url:"/brand-studio/WelcomeScreen/WS-BattleRap-ShirleysTemple.jpg",creator:"Shirleys Temple"},{url:"/brand-studio/WelcomeScreen/WS-BattleRap-DNAGMDW.jpg",creator:"DNAGMDW"},{url:"/brand-studio/WelcomeScreen/WS-BattleRap-GatesOfTheGarden-v02.jpg",creator:"GatesOfTheGarden"},{url:"/brand-studio/WelcomeScreen/WS-BattleRap-micmasters801.jpg",creator:"micmasters801"}]},dance:{title:"dance",tag:"dance",metaData:[{url:"/brand-studio/WelcomeScreen/WS-Dance-BboyCityTV.jpg",creator:"BboyCityTV"},{url:"/brand-studio/WelcomeScreen/WS-Dance-BattleFest.jpg",creator:"BattleFest"}]},football:{title:"football",tag:"football",metaData:[{url:"/brand-studio/WelcomeScreen/WS-Football-A7FL.jpg",creator:"A7FL"},{url:"/brand-studio/WelcomeScreen/WS-Football-NumberOneCFBShow.jpg",creator:"Number One CFB Show"},{url:"/brand-studio/WelcomeScreen/WS-Football-WNFC.jpg",creator:"WNFC"},{url:"/brand-studio/WelcomeScreen/WS-Football-BELAV.jpg",creator:"BLEAV"},{url:"/brand-studio/WelcomeScreen/WS-Football-RuffinoandJoeShow.jpg",creator:"RuffinoandJoeShow"},{url:"/brand-studio/WelcomeScreen/WS-Football-StayHotPod.jpg",creator:"Stay Hot Pod"}]},default:{metaData:[{url:"/brand-studio/WelcomeScreen/WS-ActionSports-NaturalSelection.jpg",creator:"Natural Selection"},{url:"/brand-studio/WelcomeScreen/WS-ActionSports-XGames.jpg",creator:"X Games"},{url:"/brand-studio/WelcomeScreen/WS-Football-BELAV.jpg",creator:"BLEAV"},{url:"/brand-studio/WelcomeScreen/WS-BattleRap-URLTV.jpg",creator:"URLTV"},{url:"/brand-studio/WelcomeScreen/WS-Dance-BattleFest.jpg",creator:"BattleFest"},{url:"/brand-studio/WelcomeScreen/WS-Baseball-BarstoolBaseball.jpg",creator:"Barstool Baseball"}]}});var N=a(8767);let useSocialRecommendSuggestedUsersAPI=e=>{let{enabled:t,onSuccess:a,target:l,username:o}=e,{data:r}=(0,N.useQuery)({refetchOnWindowFocus:!1,queryKey:["social recommend suggested-users",o],queryFn:async()=>{let e=await (0,S.be)({params:{target:l},url:"".concat("https://api.caffeine.tv","/social/public/recommend/user/").concat(o,"/suggested-users")});return e.data},enabled:!!t&&!!o,onSuccess:a});return{data:r}},_="welcomeData",useWelcomeModal=e=>{var t;let{autoLoad:a,username:l,video:o}=e,r=(0,d.I0)(),{tags:s}=o||{},[c,u]=(0,n.useState)(null),[m,p]=(0,n.useState)(!1),b=(0,d.v9)(e=>e.ui),h=(0,d.v9)(e=>e.user),{modals:{registrationShow:f}}=b,g=getCategories(),v=(0,n.useCallback)(()=>{if(!a)return!0;let e=localStorage.getItem(_);if(!e)return!0;let t=JSON.parse(e),l=function(e,t,a){(0,y.Z)(2,arguments);var l=(0,j.Z)(e,t)/W.vh;return(0,w.u)(null==a?void 0:a.roundingMethod)(l)}(new Date,new Date(t.lastViewed));return l>1},[a]),{data:x}=useSocialRecommendSuggestedUsersAPI({target:"welcome",username:!l||m?"a":l||(null==o?void 0:o.username),enabled:!1===h.isSignin&&null===c&&v(),onSuccess:e=>{(null==e?void 0:e.length)<5&&p(!0)}}),S=null==s?void 0:s.find(e=>!!g[e]),N=null==x?void 0:null===(t=x.slice(0,7))||void 0===t?void 0:t.map(e=>e.username);!l||(null==N?void 0:N.includes(l))||null==N||N.push(l);let setWelcomeData=()=>{localStorage.setItem(_,JSON.stringify({lastViewed:new Date}))},B=useFetchRecentSocialFeeds({enabled:!1===h.isSignin&&null===c&&v(),creatorsList:N});return(0,n.useEffect)(()=>{let{data:e}=B||{};!c&&e&&(null==e?void 0:e.length)>0&&u(e)},[B,c]),(0,n.useEffect)(()=>{if(!1!==h.isSignin||f||!v()||!a)return;let e=setTimeout(()=>{!f&&a&&(r((0,i.z2)(!0)),setWelcomeData())},6e3);return()=>{clearTimeout(e)}},[a,r,f,v,h.isSignin]),{categories:g,creatorsList:N,firstCategoryFromTags:m?null:S,recentActivityList:c}},useFetchRecentSocialFeeds=e=>{let{creatorsList:t,enabled:a}=e,l=(0,d.v9)(e=>e.auth),{credential:o,credentials:r}=l,n=(null==r?void 0:r.access_token)||o,i=(0,N.useQueries)((null==t?void 0:t.map(e=>({queryKey:["social feeds vods",e],queryFn:async()=>await (0,S.be)({url:"".concat("https://api.caffeine.tv","/social/feeds/").concat(e,"/vods"),headers:{"x-credential":n},params:{limit:1}}),enabled:!!a&&!!e&&!!n})))||[]);if(null==i?void 0:i.every(e=>"success"===e.status))return{data:null==i?void 0:i.map(e=>{var t,a;let{data:l}=e;return(null==l?void 0:null===(t=l.data)||void 0===t?void 0:t.vod_activities)&&(null==l?void 0:null===(a=l.data)||void 0===a?void 0:a.vod_activities[0])})}},WelcomeModal=e=>{let{autoLoad:t=!0,video:a}=e,b=(0,d.I0)(),{isMobile:h}=(0,v.h)(),f=(0,d.v9)(e=>e.ui),{tags:g,username:S}=a||{},{modals:{welcomeShow:W}}=f,j=(0,c.Qe)(g),y=(0,c.RM)(j),{categories:w,creatorsList:N,firstCategoryFromTags:_,recentActivityList:B}=useWelcomeModal({username:S,video:a,autoLoad:t}),handleClose=()=>{b((0,i.z2)(!1)),(0,s.oj)("modal_action",{modal_name:"category_welcome",action_type:"dismiss",web_presentation:h?"mobile":"desktop"})},handleRegistration=e=>{b((0,i.z2)(!1)),b((0,i.AK)(!0)),(0,s.oj)("modal_action",{modal_name:"category_welcome",action_type:null==e?void 0:e.toLowerCase().replace(" ","_"),web_presentation:h?"mobile":"desktop"})},k=_?w[_]:w.default,F="".concat(h?"Download the free app":"Signup","\n  to watch ");return(0,n.useEffect)(()=>{try{var e,t;let a=document.querySelector("iframe"),l=a&&(null==a?void 0:null===(t=a.contentWindow)||void 0===t?void 0:null===(e=t.document)||void 0===e?void 0:e.body.querySelector("hls-video"));l&&(W?null==l||l.pause():null==l||l.play())}catch(e){}},[W]),(0,n.useEffect)(()=>{W&&(0,s.oj)("modal_view",{modal_name:"category_welcome",web_presentation:h?"mobile":"desktop",category:_||"generic"})},[_,h,W]),(0,l.jsx)(o.u,{appear:!0,as:n.Fragment,show:W,children:(0,l.jsx)(r.V,{onClose:handleClose,children:(0,l.jsx)("div",{className:"inset-0 min-h-screen md:bg-black/80",children:(0,l.jsx)(o.u.Child,{as:n.Fragment,...x.Py,children:(0,l.jsx)("div",{className:"fixed bottom-0 h-full w-full bg-black/80 transition-all",children:(0,l.jsx)("div",{className:"h-full w-full flex-col items-center justify-center text-white md:flex",children:(0,l.jsxs)(r.V.Panel,{className:"relative max-md:h-full md:max-h-[80%] md:w-[500px] md:border md:border-dark-quinary md:py-12",children:[(0,l.jsx)("div",{className:"absolute inset-0 z-[-1] h-full w-full bg-black",children:(0,l.jsx)(u.Z,{className:"h-full w-full"})}),(0,l.jsx)("div",{className:"absolute right-3 top-3 cursor-pointer p-3.5 md:right-0 md:top-0",onClick:handleClose,children:(0,l.jsx)(p.Z,{height:20,onClick:handleClose,width:20})}),(0,l.jsxs)("div",{className:"flex flex-col max-md:h-full",children:[(0,l.jsxs)("div",{className:"mb-4 max-md:p-6 min-[428px]:mb-12 md:px-16",children:[(0,l.jsx)("header",{className:"mb-4 flex items-baseline max-md:mr-10",children:(0,l.jsx)(r.V.Title,{className:"font-pop-title-3 min-[428px]:font-pop-title-2",children:_&&S?"Watch ".concat(S," and more ").concat(k.title," on Caffeine"):S?"Watch more ".concat(S," on Caffeine"):"Watch live sports on Caffeine"})}),(0,l.jsxs)(r.V.Description,{className:"font-pop-footnote min-[428px]:font-pop-subhead-sm text-white min-[428px]:font-medium",children:[F,S&&(0,l.jsxs)("span",{className:"font-bold",children:[S," "]}),"live and never miss a show."]})]}),(0,l.jsx)(CreatorsMarquee,{creatorsList:N,recentActivityList:B,welcomeShow:W}),(0,l.jsx)("div",{className:"pointer-events-none z-20 flex h-32 w-full flex-col justify-end max-md:absolute max-md:bottom-0 max-md:right-0 max-md:mt-auto",style:{background:"linear-gradient(180deg, rgba(0, 0, 0, 0.0001) 0%, #000000 100%)"},children:(0,l.jsxs)("div",{className:"flex flex-col gap-y-3 bg-black pt-2 max-md:px-6 max-md:pb-6 md:px-16",children:[h?(0,l.jsx)(m.z,{as:"a",className:"pointer-events-auto rounded-[38px]",fullWidth:!0,href:y,onClick:()=>{(0,s.oj)("modal_action",{modal_name:"category_welcome",action_type:"get_the_app",web_presentation:"mobile"}),(0,s.zT)("modal:welcome:footer",y)},children:"Download Caffeine"}):(0,l.jsx)(m.z,{className:"pointer-events-auto",fullWidth:!0,onClick:()=>handleRegistration("Sign up"),type:"button",children:"Sign up"}),(0,l.jsx)(m.z,{className:"pointer-events-auto",fullWidth:!0,onClick:()=>handleRegistration(h?"Sign up":"Log in"),type:"button",variant:"tertiary",children:h?"Sign up":"Log in"})]})})]})]})})})})})})})}},337:function(e,t,a){a.d(t,{Py:function(){return r},mA:function(){return l},rh:function(){return n},vJ:function(){return i},wL:function(){return o}});let l=200,o=300,r={className:"transition-all duration-".concat(l," overflow-hidden"),enter:"ease-out duration-".concat(l),enterFrom:"opacity-0",enterTo:"opacity-100",leave:"ease-in duration-".concat(l),leaveFrom:"opacity-100",leaveTo:"opacity-0"},n={enter:"ease-out duration-".concat(l),enterFrom:"opacity-0 scale-95",enterTo:"opacity-100 scale-100",leave:"ease-in duration-".concat(l),leaveFrom:"opacity-100 scale-95",leaveTo:"opacity-0 scale-95"},i={className:"duration-".concat(o),enter:"ease-out duration-".concat(o),enterFrom:"translate-y-full",enterTo:"translate-y-0",leave:"ease-in duration-".concat(o),leaveFrom:"translate-y-0",leaveTo:"translate-y-full"}}}]);