"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[387],{1757:function(n,t,e){e.d(t,{KS:function(){return p},TW:function(){return h},es:function(){return l},hG:function(){return d},r1:function(){return o},z1:function(){return f}});var r=e(5861),a=e(7757),u=e.n(a),c=e(4569),i=e.n(c);i().defaults.baseURL="https://api.themoviedb.org/3/";var o="https://image.tmdb.org/t/p/w500",s="a2d752373b5fc20ba7d7c26c66d25d31",p=function(){var n=(0,r.Z)(u().mark((function n(){var t;return u().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,i().get("/trending/all/day?api_key=".concat(s));case 2:return t=n.sent,n.abrupt("return",t.data);case 4:case"end":return n.stop()}}),n)})));return function(){return n.apply(this,arguments)}}(),f=function(){var n=(0,r.Z)(u().mark((function n(t){var e;return u().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,i().get("/search/movie?api_key=".concat(s,"&language=en-US&query=").concat(t,"&page=1&include_adult=false"));case 2:return e=n.sent,n.abrupt("return",e.data);case 4:case"end":return n.stop()}}),n)})));return function(t){return n.apply(this,arguments)}}(),d=function(){var n=(0,r.Z)(u().mark((function n(t){var e;return u().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,i().get("/movie/".concat(t,"?api_key=").concat(s,"&language=en-US"));case 2:return e=n.sent,n.abrupt("return",e.data);case 4:case"end":return n.stop()}}),n)})));return function(t){return n.apply(this,arguments)}}(),h=function(){var n=(0,r.Z)(u().mark((function n(t){var e;return u().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,i().get("/movie/".concat(t,"/credits?api_key=").concat(s,"&language=en-US"));case 2:return e=n.sent,n.abrupt("return",e.data);case 4:case"end":return n.stop()}}),n)})));return function(t){return n.apply(this,arguments)}}(),l=function(){var n=(0,r.Z)(u().mark((function n(t){var e;return u().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,i().get("/movie/".concat(t,"/reviews?api_key=").concat(s,"&language=en-US&page=1"));case 2:return e=n.sent,n.abrupt("return",e.data);case 4:case"end":return n.stop()}}),n)})));return function(t){return n.apply(this,arguments)}}()},4387:function(n,t,e){e.r(t),e.d(t,{default:function(){return o}});var r=e(885),a=e(1757),u=e(2791),c=e(6871),i=e(184);function o(){var n=(0,c.UO)().movieId,t=(0,u.useState)([]),e=(0,r.Z)(t,2),o=e[0],s=e[1];return(0,u.useEffect)((function(){(0,a.TW)(n).then((function(n){return s(n.cast)}))}),[n]),(0,i.jsxs)(i.Fragment,{children:[console.log(o),(0,i.jsx)("ul",{children:o.map((function(n){return(0,i.jsxs)("li",{children:[(0,i.jsx)("img",{src:a.r1+n.profile_path,alt:n.name,width:"100",height:"150"}),(0,i.jsx)("p",{children:n.name}),(0,i.jsx)("p",{children:n.character})]},n.id)}))})]})}}}]);
//# sourceMappingURL=387.fa0cb602.chunk.js.map