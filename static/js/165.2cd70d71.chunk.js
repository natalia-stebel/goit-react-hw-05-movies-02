"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[165],{1138:function(e,t,r){r.d(t,{Z:function(){return u}});r(2791);var n=r(501),s=r(6871),a="MovieGallery_galleryList__M2SqI",i="MovieGallery_galleryItem__1rxQO",o="MovieGallery_movieName__+MnuX",c=r(184);function u(e){var t=e.movies,r=(0,s.TH)();return(0,c.jsx)(c.Fragment,{children:(0,c.jsxs)("ul",{className:a,children:[t&&t.map((function(e){var t=e.title,s=e.id,a=e.poster_path;return(0,c.jsx)("li",{className:i,children:(0,c.jsxs)(n.rU,{to:"/movies/".concat(s),state:{from:r},className:o,children:[(0,c.jsx)("img",{src:"https://image.tmdb.org/t/p/w500".concat(a),alt:t}),(0,c.jsx)("p",{children:t})]})},s)})),(0,c.jsx)(s.j3,{})]})})}},1757:function(e,t,r){r.d(t,{KS:function(){return _},TW:function(){return f},es:function(){return m},hG:function(){return v},r1:function(){return c},z1:function(){return l}});var n=r(5861),s=r(7757),a=r.n(s),i=r(4569),o=r.n(i);o().defaults.baseURL="https://api.themoviedb.org/3/";var c="https://image.tmdb.org/t/p/w500",u="a2d752373b5fc20ba7d7c26c66d25d31",_=function(){var e=(0,n.Z)(a().mark((function e(){var t;return a().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,o().get("/trending/all/day?api_key=".concat(u));case 2:return t=e.sent,e.abrupt("return",t.data);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),l=function(){var e=(0,n.Z)(a().mark((function e(t){var r;return a().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,o().get("/search/movie?api_key=".concat(u,"&language=en-US&query=").concat(t,"&page=1&include_adult=false"));case 2:return r=e.sent,e.abrupt("return",r.data);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),v=function(){var e=(0,n.Z)(a().mark((function e(t){var r;return a().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,o().get("/movie/".concat(t,"?api_key=").concat(u,"&language=en-US"));case 2:return r=e.sent,e.abrupt("return",r.data);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),f=function(){var e=(0,n.Z)(a().mark((function e(t){var r;return a().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,o().get("/movie/".concat(t,"/credits?api_key=").concat(u,"&language=en-US"));case 2:return r=e.sent,e.abrupt("return",r.data);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),m=function(){var e=(0,n.Z)(a().mark((function e(t){var r;return a().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,o().get("/movie/".concat(t,"/reviews?api_key=").concat(u,"&language=en-US&page=1"));case 2:return r=e.sent,e.abrupt("return",r.data);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()},7165:function(e,t,r){r.r(t),r.d(t,{default:function(){return m}});var n=r(885),s=r(2791),a=r(1757),i=r(6409),o=(r(5462),r(1138)),c="idle",u="pending",_="resolved",l="rejected",v=r(4234),f=r(184);function m(){var e=(0,s.useState)([]),t=(0,n.Z)(e,2),r=t[0],m=t[1],p=(0,s.useState)("pending"),d=(0,n.Z)(p,2),y=d[0],h=d[1];if((0,s.useEffect)((function(){h(u),a.KS().then((function(e){m(e.results),h(_)})).catch((function(e){h(l)}))}),[]),y!==c&&y!==u)return y===_?(0,f.jsxs)("div",{children:[(0,f.jsx)("h2",{className:v.Z.titleHome,children:"Trending today"}),r&&(0,f.jsx)(o.Z,{movies:r})]}):y===y.REJECTED?i.Am.error(":( Try again",{position:"top-center"}):void i.Ix}},4234:function(e,t){t.Z={titleHome:"styles_titleHome__er7Fh",ReviewList:"styles_ReviewList__J+W9j",Author:"styles_Author__7HNNc",Review:"styles_Review__R9WUI",Person:"styles_Person__NLklt",Info:"styles_Info__r4DAm",Name:"styles_Name__sMrZr",castList:"styles_castList__GFHAf",castName:"styles_castName__2OLoW",movieTitle:"styles_movieTitle__UFhtV",movieScore:"styles_movieScore__ix+f2",link:"styles_link__0P6R1",moviePoster:"styles_moviePoster__NEKfF",movieOverview:"styles_movieOverview__X6gVW",movieOverviewText:"styles_movieOverviewText__V-Wo8",movieGenres:"styles_movieGenres__m9ilC",movieOverviewCont:"styles_movieOverviewCont__Nxg41",moviesSection:"styles_moviesSection__S9P3K",listGenre:"styles_listGenre__TRMyN",castCard:"styles_castCard__Xro7Y",reviewAuthor:"styles_reviewAuthor__0b83B"}}}]);
//# sourceMappingURL=165.2cd70d71.chunk.js.map