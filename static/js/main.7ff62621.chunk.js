(this["webpackJsonpglassmass-example"]=this["webpackJsonpglassmass-example"]||[]).push([[0],{11:function(e,t,r){"use strict";r.r(t);r(4);var o=r(0),n=r.n(o),a=r(2),l=r.n(a),i=r(1);function c(e){var t=e.children,r=e.onClick,a=void 0===r?null:r,l=Object(o.useState)(!1),i=l[0],c=l[1],d={padding:"0.5rem 1rem",backgroundColor:"rgba(255,255,255,0.4)",backgroundSize:"150%",backgroundPositionX:i?"100%":"0",WebkitBackdropFilter:"blur(10px)",backdropFilter:"blur(10px)",color:"#111",border:"none",borderRadius:"0.2rem",overflow:"hidden",cursor:"pointer",position:"relative",transition:"300ms",boxShadow:i?"5px 5px 5px rgba(0,0,0,0.25)":"3px 3px 3px rgba(0,0,0, 0.25)"};return n.a.createElement("button",{onClick:a,onMouseEnter:function(){return c(!0)},onMouseLeave:function(){return c(!1)},style:d},t)}function d(){return(d=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var o in r)Object.prototype.hasOwnProperty.call(r,o)&&(e[o]=r[o])}return e}).apply(this,arguments)}function u(e){var t=e.children,r=e.style,o=d({padding:"0.5rem",position:"relative",zIndex:10,backgroundColor:"rgba(255, 255, 255, 0.5)",WebkitBackdropFilter:"blur(10px)",backdropFilter:"blur(10px)"},void 0===r?null:r);return n.a.createElement("div",{style:o},t)}function s(e){var t=e.option,r=e.update_title,a=e.index,l=Object(o.useState)(0),i=l[0],c=l[1],d=Object(o.useState)(!1),u=d[0],s=d[1],b=30*a,p={boxSizing:"border-box",width:"100%",padding:"0.5rem",backgroundColor:u?"rgba(255,255,255, 0.7)":"rgba(255,255,255, 0.5)",WebkitBackdropFilter:"blur(10px)",backdropFilter:"blur(10px)",opacity:i,transition:"300ms"};return Object(o.useEffect)((function(){setTimeout((function(){c(1)}),b)}),[]),n.a.createElement("div",{onClick:function(){return r(t)},onMouseEnter:function(){return s(!0)},onMouseLeave:function(){return s(!1)},style:p,value:t},t)}function b(e){var t=e.options,r=void 0===t?[1,2,3]:t,a=e.value,l=void 0===a?"title":a,i=e.onChange,c=Object(o.useState)(!1),d=c[0],u=c[1],b=Object(o.useState)(l),p=b[0],m=b[1],g=function(e){m(e),u(!1)};Object(o.useEffect)((function(){i(p)}),[p]);return n.a.createElement("div",{style:{width:"7rem",position:"relative",boxSizing:"border-box",cursor:"pointer",borderRadius:"0.2rem",overflow:"hidden",boxShadow:"3px 3px 3px rgba(0,0,0, 0.25)",borderTop:"1px solid rgba(255,255,255,0.4)",borderBottom:"1px solid rgba(255,255,255,0.4)"}},n.a.createElement("div",{onClick:function(){return u(!d)},style:{boxSizing:"border-box",width:"100%",height:"2rem",padding:"0.5rem",border:"1px solid rgba(255,255,255, 0.3)",listStyle:"none",backgroundColor:"rgba(255,255,255, 0.5)",WebkitBackdropFilter:"blur(10px)",backdropFilter:"blur(10px)",position:"relative",display:"flex",alignItems:"center",justifyContent:"flex-start"}},n.a.createElement("h4",null,p)),n.a.createElement("div",null,d&&r.map((function(e,t){return n.a.createElement(s,{key:e,index:t,option:e,update_title:g})}))))}function p(e){var t,r=e.checked,o=void 0!==r&&r,a=e.onChange,l=void 0===a?null:a,i=e.color,c=void 0===i?"#4fc3f7":i,d=((t={display:"inline-grid",width:"1.5rem",height:"1.5rem",borderRadius:"0.25rem",backgroundColor:"blue",transition:"300ms"}).backgroundColor="rgba(255,255,255, 0.5)",t.WebkitBackdropFilter="blur(10px)",t.backdropFilter="blur(10px)",t.boxShadow="3px 3px 3px rgba(0,0,0, 0.25)",t.borderTop="1px solid rgba(255,255,255,0.4)",t.borderBottom="1px solid rgba(255,255,255,0.4)",t.boxSizing="border-box",t),u={transition:"300ms",transform:o?"scale(1.1) translate(5px, -5px)":"scale(0)"};return n.a.createElement("label",{style:{display:"flex",gap:"1rem",alignItems:"center",fontSize:"2rem",color:"#000"}},n.a.createElement("span",{className:"cheflexx__input"},n.a.createElement("input",{style:{opacity:"0",width:"1em",height:"1em"},checked:o,onChange:l,type:"checkbox",name:"checkbox"}),n.a.createElement("span",{style:d},n.a.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24","aria-hidden":"true",focusable:"false",style:u},n.a.createElement("path",{fill:"none",stroke:c,strokeWidth:"3",d:"M1.73 12.91l6.37 6.37L22.79 4.59"})))),n.a.createElement("span",{className:"radio__label"},"Checkbox"))}function m(e){var t=e.text,r=void 0===t?"option":t,o=e.value,a=void 0===o?"":o,l=e.onChange,i=void 0===l?null:l,c=e.checked,d=void 0===c?null:c,u=e.color,s=void 0===u?"#4FC3F7":u,b=e.name,p=void 0===b?"name":b,m={width:"0.5rem",height:"0.5rem",backgroundColor:d?s:"rgba(100,100,100,0.8)",borderRadius:"50%",transition:"300ms",boxShadow:"inset 2px 2px 2px rgba(0,0,0, 0.25)"};return n.a.createElement("label",{style:{display:"flex",alignItems:"center",gap:"0.2rem"}},n.a.createElement("input",{style:{width:"1rem",height:"1rem",opacity:0},type:"radio",checked:d,onChange:i,value:a,name:p,id:""}),n.a.createElement("div",{style:{boxSizing:"border-box",width:"1.5rem",height:"1.5rem",borderTop:"1px solid rgba(255,255,255,0.4)",borderBottom:"1px solid rgba(255,255,255,0.4)",borderRadius:"50%",backgroundColor:"rgba(255,255,255,0.5)",display:"flex",alignItems:"center",justifyContent:"center",transition:"300ms",boxShadow:"3px 3px 3px rgba(0,0,0, 0.25)"}},n.a.createElement("div",{style:m})),r)}function g(e){var t=e.title,r=e.children;return n.a.createElement("div",{style:{display:"flex",flexDirection:"column"}},n.a.createElement("h4",null,t),n.a.createElement("div",{style:{display:"flex"}},r))}function x(e){var t=e.type,r=void 0===t?"text":t,a=e.placeholder,l=void 0===a?"":a,i=e.title,c=void 0===i?"":i,u=e.value,s=void 0===u?"":u,b=e.onChange,p=void 0===b?function(){}:b,m=e.required,g=void 0!==m&&m,x=e.readOnly,h=void 0!==x&&x,v=e.autoFocus,f=void 0!==v&&v,k=e.color,y=void 0===k?"#4fc3f7":k,E=e.error,C=void 0!==E&&E,S=e.errorColor,w=void 0===S?"red":S,F=e.errorMsg,O=void 0===F?"Something went wrong":F,j=e.style,B=void 0===j?null:j,z=Object(o.useState)(!1),M=z[0],T=z[1],R=d({padding:"0.3rem",backgroundColor:"rgba(255,255,255, 0.5)",WebkitBackdropFilter:"blur(10px)",backdropFilter:"blur(10px)",boxShadow:"3px 3px 3px rgba(0,0,0, 0.25)",border:"none",borderTop:"1px solid rgba(255,255,255,0.4)",borderBottom:C?"2px solid "+w:"1px solid rgba(255,255,255,0.4)",boxSizing:"border-box",outline:"none",position:"relative"},B),W={width:M?"100%":0,height:M?3:0,backgroundColor:C?w:y,borderRadius:"1rem",position:"absolute",bottom:-8,left:0,transition:"300ms"},I={fontSize:"0.8rem",color:w,transform:"translateY(-10px)"};return n.a.createElement("label",{style:{position:"relative"}},n.a.createElement("h4",{style:{transform:"translateY(10px)"}},c),n.a.createElement("input",{style:R,type:r,placeholder:l,value:s,onChange:p,required:g,onFocus:function(){return T(!0)},onBlur:function(){return T(!1)},autoFocus:f,readOnly:h}),n.a.createElement("div",{style:W}),C&&n.a.createElement("p",{style:I},O))}function h(e){var t=e.title,r=void 0===t?"Title":t,a=e.cols,l=void 0===a?"30":a,i=e.rows,c=void 0===i?"10":i,u=e.placeholder,s=e.value,b=void 0===s?"":s,p=e.onChange,m=void 0===p?function(){}:p,g=e.required,x=void 0!==g&&g,h=e.readOnly,v=void 0!==h&&h,f=e.autoFocus,k=void 0!==f&&f,y=e.color,E=void 0===y?"#4fc3f7":y,C=e.error,S=void 0!==C&&C,w=e.errorColor,F=void 0===w?"red":w,O=e.errorMsg,j=void 0===O?"Something went wrong":O,B=e.style,z=void 0===B?null:B,M=Object(o.useState)(!1),T=(M[0],M[1]),R=d({padding:"0.3rem",backgroundColor:"rgba(255,255,255, 0.5)",WebkitBackdropFilter:"blur(10px)",backdropFilter:"blur(10px)",boxShadow:"3px 3px 3px rgba(0,0,0, 0.25)",border:"none",borderTop:"1px solid rgba(255,255,255,0.4)",borderBottom:S?"2px solid "+F:"1px solid rgba(255,255,255,0.4)",boxSizing:"border-box",outline:"none",position:"relative"},z),W={width:0,height:0,backgroundColor:S?F:E,borderRadius:"1rem",position:"absolute",bottom:3,left:"-11rem",transition:"300ms"},I={fontSize:"0.8rem",color:F,transform:"translateY(-10px)"};return n.a.createElement("label",{style:{position:"relative"}},n.a.createElement("h4",{style:{transform:"translateY(10px)"}},r),n.a.createElement("textarea",{style:R,name:"",id:"",cols:l,rows:c,placeholder:u,value:b,onChange:m,required:x,onFocus:function(){return T(!0)},onBlur:function(){return T(!1)},autoFocus:k,readOnly:v}),n.a.createElement("div",{style:W}),S&&n.a.createElement("p",{style:I},j))}var v=function(){var e=Object(o.useState)(""),t=Object(i.a)(e,2),r=t[0],a=t[1],l=Object(o.useState)(!1),d=Object(i.a)(l,2),s=d[0],v=d[1],f=Object(o.useState)("male"),k=Object(i.a)(f,2),y=k[0],E=k[1],C=function(e){return E(e)},S=Object(o.useState)(""),w=Object(i.a)(S,2),F=w[0],O=w[1],j=Object(o.useState)(""),B=Object(i.a)(j,2),z=B[0],M=B[1];return n.a.createElement("div",{style:{padding:"1rem 2rem"}},n.a.createElement(u,null,n.a.createElement("h1",{className:"test"},"heheh"),n.a.createElement(c,{onClick:function(){console.log("Some Shit")}},"Lick Me")),n.a.createElement(b,{title:"Pick one",onChange:function(e){a(e)},options:["Apple","Banana","Strawberry"]}),n.a.createElement("h1",null,r),n.a.createElement(p,{checked:s,onChange:function(){return v(!s)}}),n.a.createElement("p",null,"Checkbox is ",s?"checked":"NOT checked"),n.a.createElement("div",{style:{background:"#ff00ff",width:300,height:300,position:"absolute",zIndex:-1,left:"5%",top:150,transform:"rotate(45deg)"}}),n.a.createElement(g,{title:"Gender"},n.a.createElement(m,{name:"gender",onChange:function(){return C("male")},checked:"male"===y,value:"male",text:"Male",color:"#4FC3F7"}),n.a.createElement(m,{name:"gender",onChange:function(){return C("female")},checked:"female"===y,value:"female",text:"Female",color:"#4FC3F7"}),n.a.createElement(m,{name:"gender",onChange:function(){return C("other")},checked:"other"===y,value:"other",text:"Other",color:"#4FC3F7"})),n.a.createElement("p",null,"Radio value is: ",y),n.a.createElement(x,{type:"number",title:"Enter Your Name",value:F,onChange:function(e){return function(e){return O(e.target.value)}(e)}}),n.a.createElement(h,{title:"Your Story",value:z,onChange:function(e){return function(e){return M(e.target.value)}(e)}}),n.a.createElement("p",null,"Text above is: ",z))};l.a.render(n.a.createElement(v,null),document.getElementById("root"))},3:function(e,t,r){e.exports=r(11)},4:function(e,t,r){}},[[3,1,2]]]);
//# sourceMappingURL=main.7ff62621.chunk.js.map