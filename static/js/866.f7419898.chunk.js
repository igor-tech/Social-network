"use strict";(self.webpackChunksamurai_way=self.webpackChunksamurai_way||[]).push([[866],{3866:function(e,s,n){n.r(s),n.d(s,{default:function(){return k}});var r=n(8281),a=(n(2791),"Dialogs_dialogs__6VEpv"),i="Dialogs_dialogsItems__IiE2E",t="Dialogs_active__mPJqg",l="Dialogs_messages__MZRhX",o="Dialogs_message__vZwS5",d="Dialogs_avatar__Qpnxb",u="Dialogs_name__qsMLw",c=n(2426),g=n(184);var m=function(e){var s="/dialogs/"+e.id;return(0,g.jsxs)("div",{className:a+" "+t,children:[(0,g.jsx)("img",{className:d,src:e.link,alt:""}),(0,g.jsx)(c.OL,{className:u,to:s,children:e.name})]})};var f=function(e){return(0,g.jsx)("div",{className:o,children:e.message})},x=n(6834),h=n(1117);var _=function(e){var s=(0,x.cI)(),n=s.register,r=s.reset,a=s.handleSubmit,i=s.formState.errors;return(0,g.jsxs)("form",{onSubmit:a((function(s){e.sendMessageBody(s.newMessageBody),r()})),style:{display:"flex",flexDirection:"column",gap:"10px",width:"200px"},children:[(0,g.jsx)(h.W,{register:n,placeholder:"enter your message",label:"newMessageBody",errors:i.newMessageBody}),(0,g.jsx)("button",{type:"submit",children:"Send"})]})},v=function(e){var s=e.messagesPage,n=s.dialogs.map((function(e){return(0,g.jsx)(m,{name:e.name,id:e.id,link:e.link},e.id)})),r=s.messages.map((function(e){return(0,g.jsx)(f,{message:e.message},e.id)}));return(0,g.jsxs)("div",{className:a,children:[(0,g.jsx)("div",{className:i,children:n}),(0,g.jsxs)("div",{className:l,children:[(0,g.jsx)("div",{children:r}),(0,g.jsx)("div",{children:(0,g.jsx)(_,{sendMessageBody:function(s){return e.sendMessageBody(s)}})})]})]})},j=n(7375),p=n(2789),y=n(8489),w=n(3738),b=n(9723),M=["isAuth"],D=function(e){return{isAuth:e.auth.isAuth}};var k=(0,p.qC)((0,j.$j)((function(e){return{messagesPage:e.messagesPage}}),(function(e){return{sendMessageBody:function(s){e((0,r.d)(s))}}})),(function(e){return(0,j.$j)(D)((function(s){var n=s.isAuth,r=(0,w.Z)(s,M);return n?(0,g.jsx)(e,(0,y.Z)({},r)):(0,g.jsx)(b.l_,{to:"/login"})}))}))(v)},1117:function(e,s,n){n.d(s,{W:function(){return i}});var r=n(8489),a=(n(2791),n(184)),i=function(e){var s=e.placeholder,n=e.label,i=e.register,t=e.errors;return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)("textarea",(0,r.Z)((0,r.Z)({},i(n,{required:"field is required"})),{},{placeholder:s})),t&&(0,a.jsx)("div",{style:{color:"red",fontSize:"14px"},children:t.message})]})}}}]);
//# sourceMappingURL=866.f7419898.chunk.js.map