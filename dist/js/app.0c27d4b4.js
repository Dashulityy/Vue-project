(function(){"use strict";var e={4435:function(e,t,n){var r={};n.r(r),n.d(r,{exit:function(){return U},fork:function(){return ve},home:function(){return O},logo:function(){return j},star:function(){return ee},triangle:function(){return ae}});var s=n(9963),i=n(6252);function o(e,t,n,r,s,o){const a=(0,i.up)("router-view");return(0,i.wg)(),(0,i.j4)(a)}var a={name:"App"},l=n(3744);const d=(0,l.Z)(a,[["render",o]]);var c=d,u=n(3907),p=(n(6229),n(7330),n(2062),n(6154));const g="https://api.github.com",v=({url:e,method:t="get",data:n={},headers:r={}})=>(0,p.Z)({url:e,method:t,data:n,baseURL:g,headers:r}),m=e=>e<10?`0${e}`:e,C=(e="javascript")=>{const t=new URLSearchParams,n=6048e5,r=new Date(Date.now()-n),s=[r.getFullYear(),m(r.getMonth()+1),m(r.getDate())].join("-");return t.append("order","desc"),t.append("sort","stars"),t.append("per_page",10),t.append("q",`language:${e} created:>${s}`),v({url:`/search/repositories?${t}`})},_=({owner:e,repo:t})=>{const n="application/vnd.github.v3.html+json";return v({url:`/repos/${e}/${t}/readme`,headers:{accept:n}})};var h={namespased:!0,state:{data:[]},mutations:{SET_TRENDINGS:(e,t)=>{e.data=t},SET_README:(e,t)=>{e.data=e.data.map((e=>(t.id===e.id&&(e.readme=t.content),e)))}},getters:{getRepoById:e=>t=>e.data.find((e=>e.id===t))},actions:{async fetchTrendings({state:e,commit:t,rootState:n}){try{const{data:e}=await C();t("SET_TRENDINGS",e.items)}catch(r){throw console.log(r),r}},async fetchReadme({commit:e,getters:t},{id:n,owner:r,repo:s}){const i=t.getRepoById(n);if(void 0===i.readme)try{const{data:t}=await _({owner:r,repo:s});console.log(t),e("SET_README",{id:n,content:t})}catch(o){throw console.log(o),o}}}},f=(0,u.MT)({modules:{trendings:h}}),w=n(2201);n(7658);const b={class:"c-stories"},y={class:"header"},L={class:"x-container"},S={class:"content"};function x(e,t,n,r,s,o){const a=(0,i.up)("icon"),l=(0,i.up)("slider");return(0,i.wg)(),(0,i.iD)("div",b,[(0,i._)("header",y,[(0,i._)("div",L,[(0,i._)("button",{class:"logo",onClick:t[0]||(t[0]=t=>e.$router.push("/"))},[(0,i.Wm)(a,{name:"logo"})]),(0,i._)("button",{class:"close-btn",onClick:t[1]||(t[1]=t=>e.$router.push("/"))},[(0,i.Wm)(a,{name:"exit"})])])]),(0,i._)("div",S,[(0,i.Wm)(l,{initialSlide:Number(e.$route.params.initialSlide)},null,8,["initialSlide"])])])}function D(e,t,n,r,s,o){return(0,i.wg)(),(0,i.j4)((0,i.LL)(n.name))}const Z={preserveAspectRatio:"none",viewBox:"0 0 24 26",fill:"none",xmlns:"http://www.w3.org/2000/svg"},V=(0,i._)("path",{d:"M10.0692 1.06704C11.1853 0.128491 12.8147 0.128491 13.9308 1.06704L22.9308 8.63522C23.6087 9.20524 24 10.0456 24 10.9313V23.5C24 24.6046 23.1046 25.5 22 25.5H16.5C15.3954 25.5 14.5 24.6046 14.5 23.5V16.5H9.5V23.5C9.5 24.6046 8.60457 25.5 7.5 25.5H2C0.895431 25.5 0 24.6046 0 23.5V10.9313C0 10.0456 0.391346 9.20524 1.0692 8.63522L10.0692 1.06704Z",fill:"currentColor"},null,-1),H=[V];function k(e,t){return(0,i.wg)(),(0,i.iD)("svg",Z,H)}const M={},T=(0,l.Z)(M,[["render",k]]);var O=T;const I={preserveAspectRatio:"none",viewBox:"0 0 175 41",fill:"none",xmlns:"http://www.w3.org/2000/svg"},W=(0,i.uE)('<path d="M18.6664 14.4756H24.3009C23.5838 9.28933 19.0122 5.63971 13.0832 5.63971C6.15528 5.63971 0.815308 10.6339 0.815308 19.1369C0.815308 27.435 5.80953 32.5829 13.1984 32.5829C19.819 32.5829 24.5443 28.3954 24.5443 21.4931V18.1893H13.5698V22.3639H19.2043C19.1274 25.6166 16.9121 27.6783 13.224 27.6783C9.06217 27.6783 6.43701 24.5665 6.43701 19.0857C6.43701 13.6305 9.16462 10.5443 13.1728 10.5443C16.0285 10.5443 17.9621 12.0169 18.6664 14.4756Z" fill="currentColor"></path><path d="M28.5773 32.2243H34.0325V12.5548H28.5773V32.2243ZM31.3177 10.0193C32.944 10.0193 34.2758 8.7771 34.2758 7.25322C34.2758 5.74215 32.944 4.5 31.3177 4.5C29.7042 4.5 28.3724 5.74215 28.3724 7.25322C28.3724 8.7771 29.7042 10.0193 31.3177 10.0193Z" fill="currentColor"></path><path d="M47.6026 12.5548H43.9017V7.84229H38.4465V12.5548H35.7573V16.6526H38.4465V26.8972C38.4209 30.7517 41.046 32.6597 45.003 32.4932C46.4116 32.442 47.4105 32.1603 47.9611 31.981L47.1031 27.9216C46.8342 27.9728 46.258 28.1009 45.7457 28.1009C44.6572 28.1009 43.9017 27.6911 43.9017 26.18V16.6526H47.6026V12.5548Z" fill="currentColor"></path><path d="M58.5699 32.6085C64.5373 32.6085 68.251 28.5235 68.251 22.4664C68.251 16.3709 64.5373 12.2987 58.5699 12.2987C52.6024 12.2987 48.8888 16.3709 48.8888 22.4664C48.8888 28.5235 52.6024 32.6085 58.5699 32.6085ZM58.5955 28.3826C55.8422 28.3826 54.4336 25.8599 54.4336 22.428C54.4336 18.996 55.8422 16.4605 58.5955 16.4605C61.2975 16.4605 62.7061 18.996 62.7061 22.428C62.7061 25.8599 61.2975 28.3826 58.5955 28.3826Z" fill="currentColor"></path><path d="M79.3975 40.0102C85.0192 40.0102 89.0146 37.449 89.0146 32.4164V12.5548H83.5978V15.8586H83.3929C82.663 14.2579 81.0623 12.2987 77.7712 12.2987C73.4557 12.2987 69.8061 15.6538 69.8061 22.3511C69.8061 28.8948 73.3533 31.9426 77.784 31.9426C80.9214 31.9426 82.6758 30.3675 83.3929 28.7412H83.6234V32.3396C83.6234 35.0416 81.8947 36.0916 79.5256 36.0916C77.1181 36.0916 75.9016 35.0416 75.4534 33.8506L70.4079 34.5293C71.061 37.6283 74.096 40.0102 79.3975 40.0102ZM79.5128 27.8448C76.8364 27.8448 75.3766 25.719 75.3766 22.3255C75.3766 18.9832 76.8108 16.6398 79.5128 16.6398C82.1636 16.6398 83.649 18.8808 83.649 22.3255C83.649 25.7959 82.138 27.8448 79.5128 27.8448Z" fill="currentColor"></path><path d="M92.0936 32.2243H97.5488V21.0962C97.5488 18.6759 99.316 17.0112 101.723 17.0112C102.479 17.0112 103.516 17.1392 104.029 17.3057V12.4651C103.542 12.3499 102.863 12.2731 102.313 12.2731C100.11 12.2731 98.3044 13.5536 97.5873 15.9867H97.3824V12.5548H92.0936V32.2243Z" fill="currentColor"></path><path d="M110.632 32.5957C113.539 32.5957 115.422 31.3279 116.382 29.4967H116.536V32.2243H121.709V18.9576C121.709 14.2707 117.739 12.2987 113.36 12.2987C108.647 12.2987 105.548 14.5525 104.793 18.1381L109.838 18.5478C110.21 17.2417 111.375 16.2812 113.334 16.2812C115.191 16.2812 116.254 17.2161 116.254 18.8296V18.9064C116.254 20.1742 114.909 20.3406 111.49 20.6736C107.597 21.0321 104.101 22.3383 104.101 26.7307C104.101 30.6236 106.88 32.5957 110.632 32.5957ZM112.195 28.8308C110.517 28.8308 109.313 28.0497 109.313 26.5514C109.313 25.0147 110.581 24.2592 112.502 23.9903C113.693 23.8238 115.639 23.5421 116.292 23.1067V25.194C116.292 27.2557 114.589 28.8308 112.195 28.8308Z" fill="currentColor"></path><path d="M124.679 32.2243H130.135V20.4175C130.135 18.2405 131.518 16.7935 133.336 16.7935C135.129 16.7935 136.333 18.0228 136.333 19.9565V32.2243H141.621V20.2126C141.621 18.1765 142.787 16.7935 144.771 16.7935C146.513 16.7935 147.819 17.8819 147.819 20.0717V32.2243H153.262V18.996C153.262 14.7317 150.726 12.2987 147.064 12.2987C144.182 12.2987 141.941 13.7713 141.135 16.0251H140.93C140.302 13.7457 138.292 12.2987 135.59 12.2987C132.939 12.2987 130.929 13.7073 130.109 16.0251H129.878V12.5548H124.679V32.2243Z" fill="currentColor"></path><path d="M174.815 4.76892H170.116L161.664 36.1685H166.364L174.815 4.76892Z" fill="currentColor"></path>',9),$=[W];function R(e,t){return(0,i.wg)(),(0,i.iD)("svg",I,$)}const F={},N=(0,l.Z)(F,[["render",R]]);var j=N;const q={preserveAspectRatio:"none",viewBox:"0 0 32 33",fill:"none",xmlns:"http://www.w3.org/2000/svg"},A=(0,i._)("path",{d:"M16 6.94273V14.625L16.0007 15.2562L25.3025 15.255L23.1495 13.1003C22.8167 12.7674 22.7865 12.2466 23.0589 11.8796L23.1497 11.7745C23.4826 11.4417 24.0034 11.4116 24.3704 11.6839L24.4755 11.7747L28.2213 15.5218C28.5538 15.8544 28.5842 16.3746 28.3125 16.7416L28.2219 16.8467L24.4762 20.601C24.1105 20.9676 23.5169 20.9683 23.1503 20.6026C22.8171 20.2701 22.7863 19.7493 23.0582 19.382L23.1488 19.2767L25.29 17.13L16.0007 17.1312L16 25.5625C16 26.1455 15.4735 26.5871 14.8994 26.4857L4.27444 24.6091C3.82651 24.53 3.5 24.1408 3.5 23.6859V8.68752C3.5 8.22839 3.83252 7.83681 4.28558 7.76241L14.9106 6.01762C15.4813 5.92389 16 6.36432 16 6.94273ZM11.6277 15.875C10.9358 15.875 10.375 16.4359 10.375 17.1277C10.375 17.8196 10.9358 18.3804 11.6277 18.3804C12.3195 18.3804 12.8804 17.8196 12.8804 17.1277C12.8804 16.4359 12.3195 15.875 11.6277 15.875ZM17.25 24.6266L18.2064 24.6268L18.3338 24.6183C18.7919 24.556 19.1447 24.163 19.1439 23.6878L19.135 18.375H17.25V24.6266ZM17.2525 14L17.25 12.4067V7.75002L18.1816 7.75002C18.6556 7.75002 19.0476 8.10192 19.1103 8.55891L19.1191 8.68597L19.1275 14H17.2525Z",fill:"currentColor"},null,-1),E=[A];function B(e,t){return(0,i.wg)(),(0,i.iD)("svg",q,E)}const P={},z=(0,l.Z)(P,[["render",B]]);var U=z;const Y={preserveAspectRatio:"none",viewBox:"0 0 16 18",fill:"none",xmlns:"http://www.w3.org/2000/svg"},K=(0,i._)("path",{"fill-rule":"evenodd","clip-rule":"evenodd",d:"M8.00004 1.25C8.14006 1.24991 8.2773 1.28901 8.39624 1.36289C8.51518 1.43676 8.61106 1.54245 8.67304 1.668L10.555 5.483L14.765 6.095C14.9035 6.11511 15.0336 6.17355 15.1405 6.26372C15.2475 6.35388 15.3272 6.47218 15.3704 6.60523C15.4137 6.73829 15.4189 6.8808 15.3854 7.01665C15.352 7.1525 15.2812 7.27628 15.181 7.374L12.135 10.344L12.854 14.536C12.8777 14.6739 12.8624 14.8157 12.8097 14.9454C12.757 15.0751 12.6691 15.1874 12.5559 15.2697C12.4427 15.352 12.3087 15.401 12.1691 15.4111C12.0295 15.4212 11.8899 15.3921 11.766 15.327L8.00004 13.347L4.23404 15.327C4.11023 15.392 3.97071 15.4211 3.83123 15.411C3.69176 15.4009 3.55788 15.352 3.44472 15.2699C3.33157 15.1877 3.24363 15.0755 3.19086 14.946C3.13808 14.8165 3.12255 14.6749 3.14604 14.537L3.86604 10.343L0.818042 7.374C0.717608 7.27632 0.646541 7.15247 0.612894 7.01647C0.579246 6.88047 0.584364 6.73777 0.627666 6.60453C0.670969 6.47129 0.750725 6.35284 0.857898 6.26261C0.96507 6.17238 1.09537 6.11397 1.23404 6.094L5.44404 5.483L7.32704 1.668C7.38902 1.54245 7.48491 1.43676 7.60385 1.36289C7.72279 1.28901 7.86003 1.24991 8.00004 1.25ZM8.00004 3.695L6.61504 6.5C6.56126 6.6089 6.48183 6.70311 6.38359 6.77453C6.28534 6.84595 6.17122 6.89244 6.05104 6.91L2.95404 7.36L5.19404 9.544C5.28119 9.62886 5.3464 9.73365 5.38403 9.84933C5.42166 9.96501 5.43059 10.0881 5.41004 10.208L4.88204 13.292L7.65104 11.836C7.75867 11.7794 7.87845 11.7499 8.00004 11.7499C8.12164 11.7499 8.24141 11.7794 8.34904 11.836L11.119 13.292L10.589 10.208C10.5685 10.0881 10.5774 9.96501 10.615 9.84933C10.6527 9.73365 10.7179 9.62886 10.805 9.544L13.045 7.361L9.94904 6.911C9.82886 6.89344 9.71474 6.84695 9.6165 6.77553C9.51825 6.70411 9.43883 6.6099 9.38504 6.501L8.00004 3.694V3.695Z",fill:"currentColor"},null,-1),G=[K];function J(e,t){return(0,i.wg)(),(0,i.iD)("svg",Y,G)}const X={},Q=(0,l.Z)(X,[["render",J]]);var ee=Q;const te={preserveAspectRatio:"none",viewBox:"0 0 16 16",fill:"none",xmlns:"http://www.w3.org/2000/svg"},ne=(0,i._)("path",{d:"M12.7996 10.2603C12.5177 10.5639 12.0432 10.5814 11.7397 10.2996L8 6.77348L4.26033 10.2996C3.9568 10.5814 3.48225 10.5639 3.2004 10.2603C2.91855 9.9568 2.93612 9.48225 3.23966 9.2004L7.48966 5.2004C7.77742 4.9332 8.22257 4.9332 8.51033 5.2004L12.7603 9.2004C13.0639 9.48225 13.0814 9.9568 12.7996 10.2603Z",fill:"currentColor"},null,-1),re=[ne];function se(e,t){return(0,i.wg)(),(0,i.iD)("svg",te,re)}const ie={},oe=(0,l.Z)(ie,[["render",se]]);var ae=oe;const le={preserveAspectRatio:"none",viewBox:"0 0 16 16",fill:"none",xmlns:"http://www.w3.org/2000/svg"},de=(0,i._)("g",{id:"repo-forked"},[(0,i._)("path",{id:"Vector","fill-rule":"evenodd","clip-rule":"evenodd",d:"M5 3.25001C5 3.44892 4.92099 3.63969 4.78033 3.78034C4.63968 3.92099 4.44892 4.00001 4.25 4.00001C4.05109 4.00001 3.86033 3.92099 3.71967 3.78034C3.57902 3.63969 3.5 3.44892 3.5 3.25001C3.5 3.05109 3.57902 2.86033 3.71967 2.71968C3.86033 2.57902 4.05109 2.50001 4.25 2.50001C4.44892 2.50001 4.63968 2.57902 4.78033 2.71968C4.92099 2.86033 5 3.05109 5 3.25001ZM5 5.37201C5.50042 5.19509 5.92217 4.84696 6.19073 4.38915C6.45929 3.93134 6.55735 3.39333 6.4676 2.87021C6.37785 2.34709 6.10605 1.87253 5.70025 1.53043C5.29445 1.18832 4.78077 1.00069 4.25 1.00069C3.71924 1.00069 3.20556 1.18832 2.79976 1.53043C2.39396 1.87253 2.12216 2.34709 2.03241 2.87021C1.94265 3.39333 2.04072 3.93134 2.30928 4.38915C2.57784 4.84696 2.99959 5.19509 3.5 5.37201V6.25001C3.5 6.84674 3.73706 7.41904 4.15901 7.841C4.58097 8.26295 5.15327 8.50001 5.75 8.50001H7.25V10.628C6.74932 10.8049 6.3273 11.1532 6.05855 11.6112C5.78981 12.0692 5.69164 12.6075 5.78139 13.1309C5.87115 13.6543 6.14306 14.1291 6.54905 14.4714C6.95504 14.8136 7.46897 15.0014 8 15.0014C8.53104 15.0014 9.04497 14.8136 9.45096 14.4714C9.85695 14.1291 10.1289 13.6543 10.2186 13.1309C10.3084 12.6075 10.2102 12.0692 9.94146 11.6112C9.67271 11.1532 9.25069 10.8049 8.75 10.628V8.50001H10.25C10.8467 8.50001 11.419 8.26295 11.841 7.841C12.263 7.41904 12.5 6.84674 12.5 6.25001V5.37201C13.0004 5.19509 13.4222 4.84696 13.6907 4.38915C13.9593 3.93134 14.0574 3.39333 13.9676 2.87021C13.8778 2.34709 13.6061 1.87253 13.2002 1.53043C12.7944 1.18832 12.2808 1.00069 11.75 1.00069C11.2192 1.00069 10.7056 1.18832 10.2998 1.53043C9.89396 1.87253 9.62216 2.34709 9.53241 2.87021C9.44265 3.39333 9.54072 3.93134 9.80928 4.38915C10.0778 4.84696 10.4996 5.19509 11 5.37201V6.25001C11 6.44892 10.921 6.63969 10.7803 6.78034C10.6397 6.92099 10.4489 7.00001 10.25 7.00001H5.75C5.55109 7.00001 5.36033 6.92099 5.21967 6.78034C5.07902 6.63969 5 6.44892 5 6.25001V5.37201ZM8.75 12.75C8.75 12.9489 8.67099 13.1397 8.53033 13.2803C8.38968 13.421 8.19892 13.5 8 13.5C7.80109 13.5 7.61033 13.421 7.46967 13.2803C7.32902 13.1397 7.25 12.9489 7.25 12.75C7.25 12.5511 7.32902 12.3603 7.46967 12.2197C7.61033 12.079 7.80109 12 8 12C8.19892 12 8.38968 12.079 8.53033 12.2197C8.67099 12.3603 8.75 12.5511 8.75 12.75ZM11.75 4.00001C11.9489 4.00001 12.1397 3.92099 12.2803 3.78034C12.421 3.63969 12.5 3.44892 12.5 3.25001C12.5 3.05109 12.421 2.86033 12.2803 2.71968C12.1397 2.57902 11.9489 2.50001 11.75 2.50001C11.5511 2.50001 11.3603 2.57902 11.2197 2.71968C11.079 2.86033 11 3.05109 11 3.25001C11 3.44892 11.079 3.63969 11.2197 3.78034C11.3603 3.92099 11.5511 4.00001 11.75 4.00001Z",fill:"currentColor"})],-1),ce=[de];function ue(e,t){return(0,i.wg)(),(0,i.iD)("svg",le,ce)}const pe={},ge=(0,l.Z)(pe,[["render",ue]]);var ve=ge,me={name:"Icon",components:{...r},props:{name:{type:String,required:!0,validator(e){return Object.keys(r).includes(e)}}}};const Ce=(0,l.Z)(me,[["render",D]]);var _e=Ce,he=n(3577);const fe={class:"c-slider"},we={class:"c-slider__container"},be={class:"slider__items",ref:"slider"};function ye(e,t,n,r,s,o){const a=(0,i.up)("slide");return(0,i.wg)(),(0,i.iD)("div",fe,[(0,i._)("div",we,[(0,i._)("ul",be,[(0,i._)("pre",null,(0,he.zw)(e.trendings),1),((0,i.wg)(!0),(0,i.iD)(i.HY,null,(0,i.Ko)(e.trendings,((e,t)=>((0,i.wg)(),(0,i.iD)("li",{class:"slider__item slide",key:e.id,ref_for:!0,ref:"item"},[(0,i.Wm)(a,{data:o.getStoryData(e),active:s.slideNdx===t,loading:s.slideNdx===t&&s.loading,btnsShown:o.activeBtns,onNext:e=>o.handleSlide(t+1),onPrev:e=>o.handleSlide(t-1),onOnFinish:e=>o.handleSlide(t+1)},null,8,["data","active","loading","btnsShown","onNext","onPrev","onOnFinish"])])))),128))],512)])])}const Le={class:"slide__head"},Se={class:"slide__progress"},xe={class:"slide__user"},De={class:"slide__body"},Ze={key:0,class:"loader"},Ve={key:1,class:"content"},He=["innerHTML"],ke={key:1,class:"slide__content"},Me={class:"slide__footer"},Te={class:"icon"},Oe={class:"icon"};function Ie(e,t,n,r,s,o){const a=(0,i.up)("progressBar"),l=(0,i.up)("users"),d=(0,i.up)("spinner"),c=(0,i.up)("slideContent"),u=(0,i.up)("xbutton"),p=(0,i.up)("icon");return(0,i.wg)(),(0,i.iD)(i.HY,null,[(0,i._)("div",{class:(0,he.C_)(["c-slide",{active:n.active}])},[(0,i._)("div",Le,[(0,i._)("div",Se,[(0,i.Wm)(a,{active:n.active,onOnFinish:t[0]||(t[0]=t=>e.$emit("onFinish"))},null,8,["active"])]),(0,i._)("div",xe,[(0,i.Wm)(l,{login:n.data.userLogin,src:n.data.userAvatar},null,8,["login","src"])])]),(0,i._)("div",De,[n.loading?((0,i.wg)(),(0,i.iD)("div",Ze,[(0,i.Wm)(d)])):((0,i.wg)(),(0,i.iD)("div",Ve,[n.data.content?.length?((0,i.wg)(),(0,i.iD)("div",{key:0,class:"slide__text",innerHTML:n.data.content},null,8,He)):((0,i.wg)(),(0,i.iD)("div",ke,[(0,i.Wm)(c)]))]))]),(0,i._)("div",Me,[(0,i.Wm)(u)])],2),(0,i._)("template",null,[n.btnsShown.includes("next")?((0,i.wg)(),(0,i.iD)("button",{key:0,class:"btn btn-next",onClick:t[1]||(t[1]=t=>e.$emit("next"))},[(0,i._)("span",Te,[(0,i.Wm)(p,{name:"arrow"})])])):(0,i.kq)("",!0),n.btnsShown.includes("prev")?((0,i.wg)(),(0,i.iD)("button",{key:1,class:"btn btn-prev",onClick:t[2]||(t[2]=t=>e.$emit("prev"))},[(0,i._)("span",Oe,[(0,i.Wm)(p,{name:"arrow"})])])):(0,i.kq)("",!0)])],64)}const We={class:"c-users"},$e={class:"users__avatar"},Re=["src"],Fe={class:"users__login"};function Ne(e,t,n,r,s,o){return(0,i.wg)(),(0,i.iD)("div",We,[(0,i._)("div",$e,[(0,i._)("img",{src:n.avatarUrl,alt:"user avatar",class:"users__img"},null,8,Re)]),(0,i._)("div",Fe,(0,he.zw)(n.login),1)])}var je={name:"users",props:{avatarUrl:{type:String,required:!0,default:"https://p-hold.com/people/300/300"},login:{type:String,required:!0,default:"user_login"}}};const qe=(0,l.Z)(je,[["render",Ne],["__scopeId","data-v-e5b3ac34"]]);var Ae=qe;function Ee(e,t,n,r,s,o){return(0,i.wg)(),(0,i.iD)("button",{class:(0,he.C_)(["button",{follow:!s.isFollow}]),onClick:t[0]||(t[0]=(...e)=>o.follow&&o.follow(...e))},(0,he.zw)(s.isFollow?"Unfollow":"Follow"),3)}var Be={data(){return{isFollow:!1}},methods:{follow(){this.isFollow=!this.isFollow}}};const Pe=(0,l.Z)(Be,[["render",Ee],["__scopeId","data-v-6e9fcadf"]]);var ze=Pe;const Ue={ref:"indicator",class:"indicator"};function Ye(e,t,n,r,s,o){return(0,i.wg)(),(0,i.iD)("div",{class:(0,he.C_)([{active:s.active},"c-progress"])},[(0,i._)("div",Ue,null,512)],2)}var Ke={name:"progress",data(){return{active:!1}},emits:["onFinish"],methods:{emitOnFinish(){this.$emit("onFinish")}},mounted(){this.$nextTick((()=>{this.active=!0})),this.$refs.indicator.addEventListener("transitionend",this.emitOnFinish)},beforeUnmount(){this.$refs.indicator.removeEventListener("transitionend",this.emitOnFinish)}};const Ge=(0,l.Z)(Ke,[["render",Ye],["__scopeId","data-v-6767ad3d"]]);var Je=Ge;const Xe={class:"slide__content"},Qe={class:"slide__img"},et=["src"],tt={class:"slide__text"};function nt(e,t,n,r,s,o){return(0,i.wg)(),(0,i.iD)("div",Xe,[(0,i._)("div",Qe,[(0,i._)("img",{src:n.slideImg,alt:"slide image"},null,8,et)]),(0,i._)("div",tt,(0,he.zw)(n.slideText),1)])}var rt={props:{slideImg:{type:String,default:"https://p-hold.com/people/400/400"},slideText:{type:String,default:"The easiest way to get .NET 6 Preview 4 is to install the maui-check dotnet tool from CLI and follow the instructions. For running on Mac you'll currently use your favorite text editor and terminal to edit and run apps. We expect Visual Studio for Mac .NET 6 support to begin arriving mid-year."}}};const st=(0,l.Z)(rt,[["render",nt],["__scopeId","data-v-2e21f35a"]]);var it=st,ot={components:{users:Ae,xbutton:ze,progressBar:Je,slideContent:it,icon:_e},data(){return{}},props:{active:Boolean,loading:Boolean,data:{type:Object,required:!0,default:()=>({})},btnsShown:{type:Array,default:()=>["next","prev"],validator(e){return e.every((e=>"next"===e||"prev"===e))}}},created(){console.log(this.data)}};const at=(0,l.Z)(ot,[["render",Ie],["__scopeId","data-v-68c7a34a"]]);var lt=at,dt={name:"slider",components:{slide:lt},props:{initialSlide:{type:Number}},data(){return{slideNdx:0,sliderPosition:0,loading:!1,btnsShown:!0}},computed:{...(0,u.rn)({trendings:e=>e.trendings.data}),activeBtns(){return!1===this.btnsShown?[]:0===this.slideNdx?["next"]:this.slideNdx===this.trendings.length-1?["prev"]:["next","prev"]}},methods:{...(0,u.nv)({fetchTrendings:"trendings/fetchTrendings",fetchReadme:"trendings/fetchReadme"}),getStoryData(e){return{id:e.id,userAvatar:e.owner?.avatar_url,userLogin:e.owner?.login,content:e.readme,loading:e.loading}},async fetchReadmeForActiveSlide(){console.log(this.trendings);const{id:e,owner:t,name:n}=this.trendings[this.slideNdx];await this.fetchReadme({id:e,owner:t.login,repo:n})},moveSlider(e){const{slider:t,item:n}=this.$refs,r=parseInt(getComputedStyle(n).getPropertyValue("width"),10);this.slideNdx=e,this.sliderPosition=-r*e,t.style.transform=`translateX(${this.sliderPosition}px)`},async loadReadme(){this.loading=!0,this.btnsShown=!1;try{await this.fetchReadmeForActiveSlide()}catch(e){throw console.log(e),e}finally{this.loading=!1,this.btnsShown=!0}},async handleSlide(e){this.moveSlider(e),await this.loadReadme()}},async mounted(){if(this.initialSlide){const e=this.trendings.findIndex((e=>e.id===this.initialSlide));await this.handleSlide(e)}},async created(){await this.fetchTrendings(),await this.loadReadme()}};const ct=(0,l.Z)(dt,[["render",ye]]);var ut=ct,pt={name:"stories",components:{icon:_e,slider:ut},methods:{goToFeeds(){this.$router.push("/")}}};const gt=(0,l.Z)(pt,[["render",x],["__scopeId","data-v-120a73fa"]]);var vt=gt;const mt={class:"topline"},Ct={class:"logo"},_t={class:"navigation"},ht={class:"stories"},ft=["id"],wt={class:"container"},bt={class:"post-list"};function yt(e,t,n,r,s,o){const a=(0,i.up)("logo"),l=(0,i.up)("headerNav"),d=(0,i.up)("user-stories"),c=(0,i.up)("topline"),u=(0,i.up)("post");return(0,i.wg)(),(0,i.iD)(i.HY,null,[(0,i._)("div",mt,[(0,i.Wm)(c,null,{headline:(0,i.w5)((()=>[(0,i._)("div",Ct,[(0,i.Wm)(a)]),(0,i._)("div",_t,[(0,i.Wm)(l)])])),content:(0,i.w5)((()=>[(0,i._)("ul",ht,[((0,i.wg)(!0),(0,i.iD)(i.HY,null,(0,i.Ko)(s.items,(t=>((0,i.wg)(),(0,i.iD)("li",{class:"stories__item",key:t.id,id:t.id},[(0,i.Wm)(d,{data:o.getStoryData(t),onOnPress:n=>e.$router.push({name:"stories",params:{initialSlide:t.id}})},null,8,["data","onOnPress"])],8,ft)))),128))])])),_:1})]),(0,i._)("div",wt,[(0,i._)("ul",bt,[((0,i.wg)(),(0,i.iD)(i.HY,null,(0,i.Ko)(3,(e=>(0,i._)("li",{class:"post__item",key:e},[(0,i.Wm)(u)]))),64))])])],64)}const Lt={class:"c-topline"},St={class:"x-container"},xt={class:"headline"},Dt={key:0,class:"content"};function Zt(e,t){return(0,i.wg)(),(0,i.iD)("div",Lt,[(0,i._)("div",St,[(0,i._)("div",xt,[(0,i.WI)(e.$slots,"headline",{},void 0,!0)]),e.$slots.content?((0,i.wg)(),(0,i.iD)("div",Dt,[(0,i.WI)(e.$slots,"content",{},void 0,!0)])):(0,i.kq)("",!0)])])}const Vt={},Ht=(0,l.Z)(Vt,[["render",Zt],["__scopeId","data-v-531e4c16"]]);var kt=Ht;const Mt={class:"avatar"},Tt=["src"],Ot={class:"username"};function It(e,t,n,r,s,o){return(0,i.wg)(),(0,i.iD)("button",{class:"c-user-stories",onClick:t[0]||(t[0]=(...e)=>o.goToStories&&o.goToStories(...e))},[(0,i._)("div",Mt,[(0,i._)("img",{src:n.data.userAvatar,class:"img",alt:"username avatar"},null,8,Tt)]),(0,i._)("div",Ot,(0,he.zw)(n.data.userLogin),1)])}var Wt={name:"userStories",props:{data:{type:Object,required:!0,default:()=>({})}},methods:{goToStories(){this.$router.push(`/stories/${this.data.id}`)}}};const $t=(0,l.Z)(Wt,[["render",It],["__scopeId","data-v-424d5d4d"]]);var Rt=$t;const Ft=e=>((0,i.dD)("data-v-00eb4624"),e=e(),(0,i.Cn)(),e),Nt={class:"c-post"},jt={class:"post__user"},qt={class:"post__card"},At={class:"comments"},Et=Ft((()=>(0,i._)("div",{class:"date"},"15 MAY",-1)));function Bt(e,t,n,r,s,o){const a=(0,i.up)("users"),l=(0,i.up)("card"),d=(0,i.up)("feed");return(0,i.wg)(),(0,i.iD)("div",Nt,[(0,i._)("div",jt,[(0,i.Wm)(a)]),(0,i._)("div",qt,[(0,i.Wm)(l)]),(0,i._)("div",At,[(0,i.Wm)(d)]),Et])}const Pt={class:"c-feed"},zt={key:0,class:"comments"},Ut={class:"comments-list"};function Yt(e,t,n,r,s,o){const a=(0,i.up)("toggler"),l=(0,i.up)("comment");return(0,i.wg)(),(0,i.iD)("div",Pt,[(0,i.Wm)(a,{onOnToggle:o.toggle},null,8,["onOnToggle"]),s.shown?((0,i.wg)(),(0,i.iD)("div",zt,[(0,i._)("ul",Ut,[((0,i.wg)(!0),(0,i.iD)(i.HY,null,(0,i.Ko)(s.commentsData,(e=>((0,i.wg)(),(0,i.iD)("li",{class:"comments__item",key:e.id},[(0,i.Wm)(l,{username:e.username,text:e.text},null,8,["username","text"])])))),128))])])):(0,i.kq)("",!0)])}const Kt={class:"text"},Gt={class:"icon"};function Jt(e,t,n,r,s,o){const a=(0,i.up)("icon");return(0,i.wg)(),(0,i.iD)("button",{class:(0,he.C_)(["button",{active:s.isOpened}]),onClick:t[0]||(t[0]=(...e)=>o.toggle&&o.toggle(...e))},[(0,i._)("span",Kt,(0,he.zw)(s.isOpened?"Hide issues":"View issues"),1),(0,i._)("span",Gt,[(0,i.Wm)(a,{name:"triangle"})])],2)}var Xt={components:{icon:_e},data(){return{isOpened:!1}},methods:{toggle(){this.isOpened=!this.isOpened,this.$emit("onToggle",this.isOpened)}}};const Qt=(0,l.Z)(Xt,[["render",Jt],["__scopeId","data-v-b3ba2e8c"]]);var en=Qt;const tn={class:"c-comment"},nn={class:"username"},rn={class:"text"};function sn(e,t,n,r,s,o){return(0,i.wg)(),(0,i.iD)("div",tn,[(0,i._)("p",null,[(0,i._)("span",nn,(0,he.zw)(n.username),1),(0,i._)("span",rn,(0,he.zw)(n.text),1)])])}var on={name:"Comment",props:{username:{type:String,required:!0},text:{type:String,required:!0}}};const an=(0,l.Z)(on,[["render",sn],["__scopeId","data-v-557d8476"]]);var ln=an,dn=JSON.parse('[{"id":0,"username":"joshua_l","text":"Enable performance measuring in production, at the user\'s request"},{"id":1,"username":"Camille","text":"It\'s Impossible to Rename an Inherited Slot"},{"id":2,"username":"Marselle","text":"transition-group with flex parent causes removed items to fly"}]'),cn={name:"feed-item",components:{toggler:en,comment:ln},data(){return{commentsData:dn,shown:!1}},methods:{toggle(e){this.shown=e}}};const un=(0,l.Z)(cn,[["render",Yt],["__scopeId","data-v-6d7ba670"]]);var pn=un;const gn={class:"c-card"},vn={class:"card__title"},mn={class:"card__desc"},Cn={class:"card__desc--title"},_n={class:"card__rating"};function hn(e,t,n,r,s,o){const a=(0,i.up)("rating");return(0,i.wg)(),(0,i.iD)("div",gn,[(0,i._)("div",vn,(0,he.zw)(n.cardTitle),1),(0,i._)("div",mn,[(0,i._)("span",Cn,(0,he.zw)(n.cardDescTitle),1),(0,i.Uk)((0,he.zw)(n.cardDesc),1)]),(0,i._)("div",_n,[(0,i.Wm)(a)])])}const fn=e=>((0,i.dD)("data-v-9b9671da"),e=e(),(0,i.Cn)(),e),wn={class:"c-rating"},bn={class:"rating__border rating__border--left rating__border--gray"},yn={class:"rating__icon"},Ln=fn((()=>(0,i._)("span",{class:"rating__title"},"Star",-1))),Sn={class:"rating__border rating__border--center rating__border--white"},xn={class:"rating__value"},Dn={class:"rating__border rating__border--center rating__border--gray"},Zn={class:"rating__icon"},Vn=fn((()=>(0,i._)("span",{class:"rating__title"},"Fork",-1))),Hn={class:"rating__border rating__border--right"},kn={class:"rating__value"};function Mn(e,t,n,r,s,o){const a=(0,i.up)("icon");return(0,i.wg)(),(0,i.iD)("div",wn,[(0,i._)("div",bn,[(0,i._)("div",yn,[(0,i.Wm)(a,{name:"star"})]),Ln]),(0,i._)("div",Sn,[(0,i._)("span",xn,(0,he.zw)(n.star),1)]),(0,i._)("div",Dn,[(0,i._)("div",Zn,[(0,i.Wm)(a,{name:"fork"})]),Vn]),(0,i._)("div",Hn,[(0,i._)("span",kn,(0,he.zw)(n.fork),1)])])}var Tn={name:"rating",props:{star:{type:String,required:!0,default:"156k"},fork:{type:Number,required:!0,default:4}},components:{icon:_e}};const On=(0,l.Z)(Tn,[["render",Mn],["__scopeId","data-v-9b9671da"]]);var In=On,Wn={name:"card",props:{cardTitle:{type:String,required:!0,default:"Vue.js"},cardDescTitle:{type:String,required:!0,default:"JavaScript "},cardDesc:{type:String,required:!0,default:"framework for building interactive web applications ⚡"}},components:{rating:In}};const $n=(0,l.Z)(Wn,[["render",hn],["__scopeId","data-v-778f3b4e"]]);var Rn=$n,Fn={name:"post",components:{users:Ae,feed:pn,card:Rn}};const Nn=(0,l.Z)(Fn,[["render",Bt],["__scopeId","data-v-00eb4624"]]);var jn=Nn;const qn={class:"c-header-nav"},An={class:"icon-button"},En={class:"icon-button icon-button--avatar"},Bn=["src"],Pn={class:"icon-button"};function zn(e,t,n,r,s,o){const a=(0,i.up)("icon");return(0,i.wg)(),(0,i.iD)("div",qn,[(0,i._)("button",An,[(0,i.Wm)(a,{name:"home"})]),(0,i._)("button",En,[(0,i._)("img",{class:"avatar",src:n.avatarUrl},null,8,Bn)]),(0,i._)("button",Pn,[(0,i.Wm)(a,{name:"exit"})])])}var Un={name:"headerNav",components:{icon:_e},props:{avatarUrl:{type:String,required:!0,default:"https://p-hold.com/people/300/300"}}};const Yn=(0,l.Z)(Un,[["render",zn],["__scopeId","data-v-7ce36cf0"]]);var Kn=Yn,Gn={name:"feeds",components:{topline:kt,logo:j,userStories:Rt,post:jn,headerNav:Kn},computed:{...(0,u.rn)({trendings:e=>e.trendings.data})},data(){return{items:[]}},methods:{...(0,u.nv)({fetchTrendings:"trendings/fetchTrendings"}),getStoryData(e){return{id:e.id,userAvatar:e.owner?.avatar_url,userLogin:e.owner?.login,content:e.readme}}},async created(){try{await this.fetchTrendings();const{data:e}=await C();this.items=e.items}catch(e){console.log(e)}}};const Jn=(0,l.Z)(Gn,[["render",yt],["__scopeId","data-v-0e186eac"]]);var Xn=Jn,Qn=[{path:"/",component:Xn,name:Xn},{path:"/stories/:id",component:vt,name:vt}],er=(0,w.p7)({routes:Qn,history:(0,w.r5)()});(0,s.ri)(c).use(er).use(f).mount("#app")}},t={};function n(r){var s=t[r];if(void 0!==s)return s.exports;var i=t[r]={exports:{}};return e[r].call(i.exports,i,i.exports,n),i.exports}n.m=e,function(){var e=[];n.O=function(t,r,s,i){if(!r){var o=1/0;for(c=0;c<e.length;c++){r=e[c][0],s=e[c][1],i=e[c][2];for(var a=!0,l=0;l<r.length;l++)(!1&i||o>=i)&&Object.keys(n.O).every((function(e){return n.O[e](r[l])}))?r.splice(l--,1):(a=!1,i<o&&(o=i));if(a){e.splice(c--,1);var d=s();void 0!==d&&(t=d)}}return t}i=i||0;for(var c=e.length;c>0&&e[c-1][2]>i;c--)e[c]=e[c-1];e[c]=[r,s,i]}}(),function(){n.d=function(e,t){for(var r in t)n.o(t,r)&&!n.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:t[r]})}}(),function(){n.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()}(),function(){n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)}}(),function(){n.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})}}(),function(){var e={143:0};n.O.j=function(t){return 0===e[t]};var t=function(t,r){var s,i,o=r[0],a=r[1],l=r[2],d=0;if(o.some((function(t){return 0!==e[t]}))){for(s in a)n.o(a,s)&&(n.m[s]=a[s]);if(l)var c=l(n)}for(t&&t(r);d<o.length;d++)i=o[d],n.o(e,i)&&e[i]&&e[i][0](),e[i]=0;return n.O(c)},r=self["webpackChunkvue_project"]=self["webpackChunkvue_project"]||[];r.forEach(t.bind(null,0)),r.push=t.bind(null,r.push.bind(r))}();var r=n.O(void 0,[998],(function(){return n(4435)}));r=n.O(r)})();
//# sourceMappingURL=app.0c27d4b4.js.map