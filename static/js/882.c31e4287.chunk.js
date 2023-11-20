"use strict";(self.webpackChunkrent_a_car=self.webpackChunkrent_a_car||[]).push([[882],{9882:(e,a,t)=>{t.r(a),t.d(a,{default:()=>z});var r=t(2791),n=t(5218),l=t(4192),i=t(8090),s=t(1754);const o=e=>{let{carsArr:a,make:t="All makers",rentalPrice:r="To $",from:n,to:l}=e;if("All makers"===t&&"To $"===r&&!n&&!l)return[...a];return a.filter((e=>{const a="All makers"===t||t===e.make,i="To $"===r||parseInt(r)>=parseInt(e.rentalPrice.replace(/\D/g,"")),s=!n||parseInt(n)<=e.mileage,o=!l||parseInt(l)>=e.mileage;return a&&i&&s&&o}))},c=e=>{const[a,t]=(0,r.useState)(!1);return(0,r.useEffect)((()=>{const r=window.matchMedia(e);r.matches!==a&&t(r.matches);const n=()=>t(r.matches);return window.addEventListener("resize",n),()=>window.removeEventListener("resize",n)}),[a,e]),a};var d=t(3510),p=t(9686),m=t(184);const u=e=>{let{carsData:a}=e;return(0,m.jsx)(m.Fragment,{children:(0,m.jsx)("ul",{className:p.Z["card-list"],children:a.map((e=>(0,m.jsx)("li",{className:p.Z["card-list-item"],children:(0,m.jsx)(d.Z,{data:e})},e.id)))})})};var g=t(7689),h=t(5068);const x=e=>{let{inputName:a,selectOpt:t,handleSelectChange:n,defaultValue:l,isLoading:i=!1,styles:s}=e;const[o,c]=(0,r.useState)(l);(0,r.useEffect)((()=>{l||(c(t[0].label),n({name:a,value:t[0].label}))}),[t,l,n,a]);return(0,m.jsx)(h.ZP,{name:a,"aria-label":"".concat(a," select input"),value:{label:o},isLoading:i,onChange:(e,a)=>{let{name:t}=a;c(e.label),n({name:t,value:e.label})},options:t,isSearchable:!1,styles:s,openMenuOnFocus:!0})};var b=t(9736);const f=e=>[{label:"All makers"},...[...e].sort(((e,a)=>e.localeCompare(a))).map((e=>({value:e,label:e})))],v=e=>0===e.length?0:e.reduce(((e,a)=>{const t=parseInt(a.rentalPrice.replace(/\D/g,""));return t>e?t:e}),0),w=e=>0===e.length?0:e.reduce(((e,a)=>{const t=parseInt(a.rentalPrice.replace(/\D/g,""));return t<e?t:e}),1e5),k=10,S=e=>{const a=Math.ceil((v(e)-k)/k)*k+k,t=[];for(let r=Math.ceil((w(e)-k)/k)*k+k;r<=a;r+=10)t.push({value:"".concat(r),label:"".concat(r)});return[{label:"To $"},...t]},C="CatalogFilters_form__b42xo",_="CatalogFilters_form-wrap__M-IRi",j="CatalogFilters_label__kBR0+",y="CatalogFilters_label-txt__x43H-",P="CatalogFilters_input__StWLk",F="CatalogFilters_from__2m71+",N="CatalogFilters_to__Rt-OF",Z="CatalogFilters_inputs-wrap__Nc1+J",L="CatalogFilters_modal-btn__vvpZk",R={container:e=>({...e,display:"inline-block"}),control:e=>({...e,minHeight:"40px",height:"40px",with:"100%",backgroundColor:"var(--select-bg-cl)",border:"none",boxShadow:"none",cursor:"pointer",borderRadius:"10px",padding:"0 18px","@media screen and (min-width: 768px)":{...e["@media screen and (min-width: 768px)"],height:"48px",minWidth:"230px",borderRadius:"14px",padding:"0 18px"}}),dropdownIndicator:(e,a)=>{let{selectProps:t}=a;return{...e,padding:0,transform:t.menuIsOpen?"rotate(180deg)":"rotate(0)",color:"var(--secondary-txt-cl)"}},valueContainer:e=>({...e,padding:0}),input:e=>({...e,padding:0,margin:0,height:0}),indicatorSeparator:e=>({...e,display:"none"}),singleValue:e=>({...e,padding:0,marginLeft:0,color:"var(--secondary-txt-cl)",fontSize:"14px",fontWeight:"500",lineHeight:"1.11",overflow:"visible","@media screen and (min-width: 768px)":{...e["@media screen and (min-width: 768px)"],marginRight:"30px",fontSize:"18px"}}),menu:e=>({...e,top:45,right:0,padding:"7px 2px 7px 10px",margin:0,fontSize:"14px",fontStyle:"normal",fontWeight:"500",lineHeight:"1.25",color:"var(--tags-txt-cl)",borderRadius:"10px",backgroundColor:"var(--select-bg-cl)","@media screen and (min-width: 768px)":{...e["@media screen and (min-width: 768px)"],top:55,padding:"14px 10px 14px 18px",fontSize:"18px",borderRadius:"14px"}}),menuList:e=>({...e,padding:0,"&::-webkit-scrollbar":{width:"8px"},"&::-webkit-scrollbar-thumb":{background:"#434d67",borderRadius:"20px"}}),option:(e,a)=>({...e,padding:"10px 0",color:a.getValue()[0].label===a.data.label?"var(--secondary-txt-cl)":"#a8a8a8",background:"none","&:hover":{backgroundColor:"var(--tags-txt-cl)",color:"var(--secondary-txt-cl)"},"&:active":{color:"var(--secondary-txt-cl)",backgroundColor:"var(--tags-txt-cl)"},cursor:"pointer","@media screen and (min-width: 1440px)":{...e["@media screen and (min-width: 1440px)"],padding:"5px 0"}}),loadingIndicator:e=>({...e,color:"var(--secondary-txt-cl)"})},E=()=>({...R,control:e=>({...e,minHeight:"40px",height:"40px",with:"100%",backgroundColor:"var(--select-bg-cl)",border:"none",boxShadow:"none",cursor:"pointer",borderRadius:"10px",padding:"0 18px","@media screen and (min-width: 768px)":{...e["@media screen and (min-width: 768px)"],height:"48px",minWidth:"130px",borderRadius:"14px",padding:"0 18px"}})});var I=t(1057);const M=e=>{let{props:{setCurrentPage:a,handleSearch:t,currentPage:n,limit:i}}=e;const{data:s,isLoading:o}=(0,b.i)(),{data:c}=(0,l.he)(),[d,p]=(0,r.useState)("All makers"),[u,h]=(0,r.useState)("To $"),[v,w]=(0,r.useState)([]),[k,M]=(0,r.useState)([]),[T,A]=(0,r.useState)(""),[z,D]=(0,r.useState)(""),O=(0,g.s0)();(0,r.useEffect)((()=>{s&&c&&(w(f(s)),M(S(c)))}),[c,s,n,i]),(0,r.useEffect)((()=>{const e=e=>{if(e.clientY<0){const e=window.location.pathname;O(e)}};return window.addEventListener("unload",e),()=>{window.removeEventListener("unload",e)}}),[O]);const H=e=>{const{name:a,value:t}=e;switch(a){case"makesCategoty":return void p(t);case"priceFilter":return void h(t);default:return}},V=e=>{const{value:a,name:t}=e.target;switch(t){case"from":return void A(a);case"to":return void D(a);default:return}};return(0,m.jsxs)("form",{className:C,autoComplete:"off",onSubmit:e=>{e.preventDefault(),a(1),t({make:d,rentalPrice:u,from:T,to:z})},children:[(0,m.jsxs)("div",{className:_,children:[(0,m.jsxs)("label",{className:j,children:[(0,m.jsx)("span",{className:y,children:"Car brand"}),(0,m.jsx)(x,{inputName:"makesCategoty",selectOpt:v,handleSelectChange:H,defaultValue:d,isLoading:o,styles:R})]}),(0,m.jsxs)("label",{className:j,children:[(0,m.jsx)("span",{className:y,children:"Price/ 1 hour"}),(0,m.jsx)(x,{inputName:"priceFilter",selectOpt:k,handleSelectChange:H,defaultValue:u,isLoading:o,styles:E()})]}),(0,m.jsxs)("div",{className:j,children:[(0,m.jsx)("label",{className:y,htmlFor:"from",children:"\u0421ar mileage / km"}),(0,m.jsxs)("div",{className:Z,children:[(0,m.jsx)("input",{className:"".concat(P," ").concat(F),placeholder:"From",type:"text",name:"from",value:T,onChange:V}),(0,m.jsx)("input",{className:"".concat(P," ").concat(N),placeholder:"To",type:"text",name:"to",value:z,onChange:V})]})]})]}),(0,m.jsx)(I.Z,{type:"submit",btnTitle:"Search",styles:L})]})};var T=t(2112),A=t(4290);const z=()=>{const[e,a]=(0,r.useState)(1),[t,d]=(0,r.useState)(9),[g,h]=(0,r.useState)(0),[x,b]=(0,r.useState)([]),[f,v]=(0,r.useState)({}),[w,k]=(0,r.useState)(!1),[S,C]=(0,r.useState)([]),{data:_,isLoading:j,isFetching:y}=(0,l.he)(),P=c("(min-width: 1440px)");(0,r.useEffect)((()=>{if(_)if(d(6),P&&d(12),w){const a=(0,i.Z)({arr:S,limit:t,currentPage:e});b(a),h(Math.ceil(S.length/t))}else{const a=(0,i.Z)({arr:_,limit:t,currentPage:e});b(a),h(Math.ceil(_.length/t))}}),[_,e,t,w,S,P]),(0,r.useEffect)((()=>{(0,s.Z)({arr:x,limit:t})}),[x,t]);return(0,m.jsxs)(m.Fragment,{children:[(0,m.jsx)(M,{props:{setCurrentPage:a,handleSearch:e=>{let{make:a,rentalPrice:t,from:r,to:l}=e;if(a===f.make&&t===f.rentalPrice&&r===f.from&&l===f.to)return;v({make:a,rentalPrice:t,from:r,to:l}),k(!0);const i=o({carsArr:_,make:a,rentalPrice:t,from:r,to:l});i.length>0?(0,n.ZP)("".concat(i.length," cars found"),{icon:"\ud83d\udd0d"}):n.ZP.error("There is no match"),C(i)},currentPage:e,limit:t}}),j||y?(0,m.jsx)(A.Z,{size:15,margin:10,position:{marginTop:"100px",marginLeft:"auto",marginRight:"auto",textAlign:"center"}}):0!==x.length?(0,m.jsx)(u,{carsData:x}):(0,m.jsx)(T.Z,{noContMess:"Sorry, we couldn't find any vehicles"}),e<g&&(0,m.jsx)(I.Z,{className:p.Z["load-btn"],onMainBtnClick:()=>{a((e=>e+1))},btnTitle:"Load More",styles:p.Z["load-btn"]})]})}}}]);
//# sourceMappingURL=882.c31e4287.chunk.js.map