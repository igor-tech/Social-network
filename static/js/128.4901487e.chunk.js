"use strict";(self.webpackChunksamurai_way=self.webpackChunksamurai_way||[]).push([[128],{4128:function(n,e,r){r.r(e),r.d(e,{default:function(){return q}});var t=r(7853),o=r(4531),s=r(8932),i=r(2587),u=r(2791),a=r(7375),c=r(5732),l=r(2789),f="users_background__TFcJY",p="users_photo__RFmif",g="users_users__ifirT",d="users_avatar__+YYf5",h="users_info__6PrRY",v="users_btn__syCil",y="users_selectedPage__qokSd",m=r(8987),P=r(2426);var w=r(184),j=function(n){var e=n.pageSize,r=n.currentPage,t=n.onPageChanged,o=n.totalUsersCount,s=function(n){for(var e=n.pageSize,r=n.currentPage,t=n.totalUsersCount,o=Math.ceil(t/e),s=[],i=1;i<=o;i++)s.push(i);var u=r-4<0?0:r-4,a=r>4?r+4:8;return s.slice(u,a)}({pageSize:e,currentPage:r,totalUsersCount:o});return(0,w.jsx)("div",{children:s.map((function(n,e){return(0,w.jsxs)("span",{style:{cursor:"pointer"},className:r===n?y:"",onClick:function(){t(n)},children:[" ",n," "]},e)}))})},x=function(n){var e=n.follow,r=n.onPageChanged,t=n.followingInProgress,o=n.unfollow,s=n.users,i=n.pageSize,u=n.currentPage,a=n.totalUsersCount;return(0,w.jsxs)("div",{className:f,children:[s.map((function(n){return(0,w.jsx)("div",{children:(0,w.jsxs)("div",{className:g,children:[(0,w.jsxs)("div",{className:d,children:[(0,w.jsx)("div",{children:(0,w.jsx)(P.OL,{to:"/profile/"+n.id,children:(0,w.jsx)("img",{className:p,src:n.photos.small?n.photos.small:m,alt:"photoURL"})})}),(0,w.jsx)("div",{children:n.followed?(0,w.jsx)("button",{disabled:t.some((function(e){return e===n.id})),onClick:function(){o(n.id)},children:"Unfollow"}):(0,w.jsx)("button",{disabled:t.some((function(e){return e===n.id})),onClick:function(){e(n.id)},children:"Follow"})})]}),(0,w.jsxs)("div",{className:h,children:[(0,w.jsxs)("div",{children:[(0,w.jsx)("div",{children:n.name}),(0,w.jsx)("div",{children:n.status})]}),(0,w.jsxs)("div",{children:[(0,w.jsx)("div",{children:"u.location.country"}),(0,w.jsx)("div",{children:"u.location.city"})]})]})]})},n.id)})),(0,w.jsxs)("div",{style:{display:"flex",position:"relative",justifyContent:"end"},children:[(0,w.jsx)("button",{onClick:function(){},className:v,children:"...More"}),(0,w.jsx)(j,{onPageChanged:r,currentPage:u,pageSize:i,totalUsersCount:a})]})]})},C=r(7045),_=r(4461),k="NOT_FOUND";var b=function(n,e){return n===e};function U(n,e){var r="object"===typeof e?e:{equalityCheck:e},t=r.equalityCheck,o=void 0===t?b:t,s=r.maxSize,i=void 0===s?1:s,u=r.resultEqualityCheck,a=function(n){return function(e,r){if(null===e||null===r||e.length!==r.length)return!1;for(var t=e.length,o=0;o<t;o++)if(!n(e[o],r[o]))return!1;return!0}}(o),c=1===i?function(n){var e;return{get:function(r){return e&&n(e.key,r)?e.value:k},put:function(n,r){e={key:n,value:r}},getEntries:function(){return e?[e]:[]},clear:function(){e=void 0}}}(a):function(n,e){var r=[];function t(n){var t=r.findIndex((function(r){return e(n,r.key)}));if(t>-1){var o=r[t];return t>0&&(r.splice(t,1),r.unshift(o)),o.value}return k}return{get:t,put:function(e,o){t(e)===k&&(r.unshift({key:e,value:o}),r.length>n&&r.pop())},getEntries:function(){return r},clear:function(){r=[]}}}(i,a);function l(){var e=c.get(arguments);if(e===k){if(e=n.apply(null,arguments),u){var r=c.getEntries(),t=r.find((function(n){return u(n.value,e)}));t&&(e=t.value)}c.put(arguments,e)}return e}return l.clearCache=function(){return c.clear()},l}function F(n){var e=Array.isArray(n[0])?n[0]:n;if(!e.every((function(n){return"function"===typeof n}))){var r=e.map((function(n){return"function"===typeof n?"function "+(n.name||"unnamed")+"()":typeof n})).join(", ");throw new Error("createSelector expects all input-selectors to be functions, but received the following types: ["+r+"]")}return e}function z(n){for(var e=arguments.length,r=new Array(e>1?e-1:0),t=1;t<e;t++)r[t-1]=arguments[t];var o=function(){for(var e=arguments.length,t=new Array(e),o=0;o<e;o++)t[o]=arguments[o];var s,i=0,u={memoizeOptions:void 0},a=t.pop();if("object"===typeof a&&(u=a,a=t.pop()),"function"!==typeof a)throw new Error("createSelector expects an output function after the inputs, but received: ["+typeof a+"]");var c=u,l=c.memoizeOptions,f=void 0===l?r:l,p=Array.isArray(f)?f:[f],g=F(t),d=n.apply(void 0,[function(){return i++,a.apply(null,arguments)}].concat(p)),h=n((function(){for(var n=[],e=g.length,r=0;r<e;r++)n.push(g[r].apply(null,arguments));return s=d.apply(null,n)}));return Object.assign(h,{resultFunc:a,memoizedResultFunc:d,dependencies:g,lastResult:function(){return s},recomputations:function(){return i},resetRecomputations:function(){return i=0}}),h};return o}var S=z(U),I=function(n){return n.usersPage.users},N=(S(I,(function(n){return n.filter((function(n){return!0}))})),function(n){return n.usersPage.pageSize}),R=function(n){return n.usersPage.totalUsersCount},A=function(n){return n.usersPage.currentPage},Z=function(n){return n.usersPage.isFetching},E=function(n){return n.usersPage.followingInProgress},O=function(n){(0,s.Z)(r,n);var e=(0,i.Z)(r);function r(){var n;(0,t.Z)(this,r);for(var o=arguments.length,s=new Array(o),i=0;i<o;i++)s[i]=arguments[i];return(n=e.call.apply(e,[this].concat(s))).onPageChanged=function(e){n.props.toggleIsFetching(!0),n.props.setCurrentPage(e),_.h3.getUsers(e,n.props.pageSize).then((function(e){n.props.setUsers(e.items),n.props.toggleIsFetching(!1)}))},n}return(0,o.Z)(r,[{key:"componentDidMount",value:function(){this.props.getUsers(this.props.currentPage,this.props.pageSize)}},{key:"render",value:function(){return(0,w.jsxs)(w.Fragment,{children:[this.props.isFetching?(0,w.jsx)(C.Z,{}):"",(0,w.jsx)(x,{users:this.props.users,onPageChanged:this.onPageChanged,currentPage:this.props.currentPage,pageSize:this.props.pageSize,totalUsersCount:this.props.totalUsersCount,follow:this.props.follow,unfollow:this.props.unfollow,followingInProgress:this.props.followingInProgress,toggleFollowingProgress:this.props.toggleFollowingProgress})]})}}]),r}(u.Component);var q=(0,l.qC)((0,a.$j)((function(n){return{users:I(n),pageSize:N(n),totalUsersCount:R(n),currentPage:A(n),isFetching:Z(n),followingInProgress:E(n)}}),(function(n){return{follow:function(e){n((0,c.iR)(e))},unfollow:function(e){n((0,c.Ky)(e))},setUsers:function(e){n((0,c.fv)(e))},setCurrentPage:function(e){n((0,c.Io)(e))},toggleIsFetching:function(e){n((0,c.ZR)(e))},toggleFollowingProgress:function(e,r){n((0,c.Gn)(e,r))},getUsers:function(e,r){n((0,c.Zw)(e,r))}}})))(O)},8987:function(n,e,r){n.exports=r.p+"static/media/avatar.9dc92b0a1003b149f6c9.png"}}]);
//# sourceMappingURL=128.4901487e.chunk.js.map