(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{112:function(e,t,a){var l=a(113);"string"==typeof l&&(l=[[e.i,l,""]]);var o={insert:"head",singleton:!1};a(14)(l,o);l.locals&&(e.exports=l.locals)},113:function(e,t,a){t=e.exports=a(13)(!1);var l=a(23),o=l(a(31)),n=l(a(58)),i=l(a(73));t.push([e.i,"@font-face{font-family:'Regular';src:url("+o+")}@font-face{font-family:'Bold';src:url("+n+")}@font-face{font-family:'BoldItalic';src:url("+i+")}#blog{padding:9rem 0 3rem}#blog p{font-family:'Regular';text-align:center}#blog p.title{font-family:\"Bold\";text-transform:initial;font-size:1.5rem;text-align:center;color:#000}#blog .blog{background-color:#fff;position:relative;margin:1rem 0;-webkit-box-shadow:0px 0px 110px -70px rgba(0,0,0,0.75);box-shadow:0px 0px 110px -70px rgba(0,0,0,0.75)}#blog .blog figure{margin-bottom:0}#blog .blog .blog_text{padding:1rem 1rem  0 0}#blog .blog .blog_text p{text-align:left;font-family:'Bold';margin-bottom:.5rem}#blog .blog .blog_text p+p{font-family:'Regular'}#blog .blog .blog_text .btn_tuvan{font-family:'Regular';font-size:1rem;padding:5px 30px}#blog .blog .blog_text .author{position:absolute;bottom:5px;right:30px}#blog .author{font-family:'Regular';font-size:.8rem}#blog .author span{font-family:'BoldItalic'}#blog .news{background-color:#fff;margin:1rem 0;padding:1rem;-webkit-box-shadow:0px 0px 110px -70px rgba(0,0,0,0.75);box-shadow:0px 0px 110px -70px rgba(0,0,0,0.75)}#blog .news .title{font-family:'Bold';width:-webkit-fit-content;width:-moz-fit-content;width:fit-content}#blog .news .title hr{border:2px solid #27bfdb;margin-top:0rem}#blog .news p{font-family:'Bold';text-align:left}#blog .blog_detail{background-color:#fff;-webkit-box-shadow:0px 0px 110px -70px rgba(0,0,0,0.75);box-shadow:0px 0px 110px -70px rgba(0,0,0,0.75);padding:1rem 0;margin-top:1rem}#blog .blog_detail .blog_detail_title{font-family:\"Bold\";text-transform:initial;font-size:1.5rem;text-align:left;color:#000;padding-left:1rem}#blog .blog_detail .blog_detail_desc_title{font-family:'Regular';text-align:left;font-size:.9rem;padding:0 1rem;margin-top:1rem}#blog .blog_detail .blog_detail_desc{font-family:'Regular';text-align:left;padding:0 1rem}#blog .blog_detail .author{text-align:left;padding-left:1rem}#blog .form{background-color:transparent;position:fixed;bottom:calc(-345.19px + 59.19px);right:0;width:500px;z-index:20;transition:0.5s all ease;-webkit-transition:0.5s all ease;-moz-transition:0.5s all ease;-ms-transition:0.5s all ease;-o-transition:0.5s all ease;cursor:pointer}#blog .form .form_title{background:-webkit-gradient(linear, left top, right top, from(#27bee0), to(#2ac5b1));background:linear-gradient(to right, #27bee0 0%, #2ac5b1 100%);padding:.6rem;text-align:center;text-transform:uppercase;width:80%;border-top-left-radius:100px;font-family:'Bold';color:#fff;margin-left:auto;margin-right:0}#blog .form .form_title img{width:40px;-webkit-filter:invert(1);filter:invert(1)}#blog .form form{width:100%;background-color:#fff;padding:1rem 1rem 1rem 3rem;border-top-left-radius:30px;border-bottom-left-radius:30px}#blog .form form .select2-container .select2-selection--single{background-color:transparent !important;border-bottom:1px solid #2ac5b1 !important;border-radius:0 !important;-webkit-border-radius:0 !important;-moz-border-radius:0 !important;-ms-border-radius:0 !important;-o-border-radius:0 !important;padding:5px 15px}#blog .form form .select2-container .select2-selection--single .select2-selection__rendered{text-align:right;padding-right:0  !important}#blog .form form .select2-container .select2-selection--single .select2-selection__arrow{display:none}#blog .form form input{width:100%;background-color:transparent;border-bottom:1px solid #2ac5b1;border-top:none;border-left:none;border-right:none;margin-bottom:1rem;padding:5px 15px;text-align:right}\n",""])},123:function(e,t,a){"use strict";a.r(t);var l=a(0),o=a.n(l);a(112);function n(e){return(n="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function i(e,t){for(var a=0;a<t.length;a++){var l=t[a];l.enumerable=l.enumerable||!1,l.configurable=!0,"value"in l&&(l.writable=!0),Object.defineProperty(e,l.key,l)}}function r(e,t){return!t||"object"!==n(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function m(e){return(m=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function s(e,t){return(s=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}var c=function(e){function t(){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),r(this,m(t).apply(this,arguments))}var a,l,n;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&s(e,t)}(t,e),a=t,(l=[{key:"componentDidMount",value:function(){var e=document.querySelectorAll(".blog_title"),t=document.querySelectorAll(".blog_desc");e.forEach((function(t,a){if(e[a].innerHTML.trim().length>=70){var l=e[a].innerHTML.trim().slice(0,70);e[a].innerHTML=l+" ..."}})),t.forEach((function(e,a){if(t[a].innerHTML.trim().length>=130){var l=t[a].innerHTML.trim().slice(0,110);t[a].innerHTML=l+" ..."}}))}},{key:"render",value:function(){return o.a.createElement("section",{id:"blog"},o.a.createElement("div",{className:"container-fluid"},o.a.createElement("div",{className:"row"},o.a.createElement("div",{className:"col-md-10 offset-md-1"},o.a.createElement("div",{className:"row"},o.a.createElement("div",{className:"col-md-12"},o.a.createElement("p",{className:"title"},"Lorem ipsum dolor sit amet, consectetur adipiscing elit"),o.a.createElement("p",null,"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. da."))),o.a.createElement("div",{className:"row"},o.a.createElement("div",{className:"col-md-8"},o.a.createElement("div",{className:"blog"},o.a.createElement("div",{className:"row"},o.a.createElement("div",{className:"col-md-4"},o.a.createElement("figure",null,o.a.createElement("img",{src:"/assets/images/blog1.jpg",alt:"",className:"img-fluid d-block mx-auto"}))),o.a.createElement("div",{className:"col-md-8"},o.a.createElement("div",{className:"blog_text"},o.a.createElement("p",{className:"blog_title"},"Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna"),o.a.createElement("p",{className:"blog_desc"},"Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna"),o.a.createElement("div",{className:"btn_tuvan"},"Đọc thêm"),o.a.createElement("div",{className:"author"},o.a.createElement("i",null,"21 Feb 2019 by")," ",o.a.createElement("span",null,"Author")))))),o.a.createElement("div",{className:"blog"},o.a.createElement("div",{className:"row"},o.a.createElement("div",{className:"col-md-4"},o.a.createElement("figure",null,o.a.createElement("img",{src:"/assets/images/blog2.jpg",alt:"",className:"img-fluid d-block mx-auto"}))),o.a.createElement("div",{className:"col-md-8"},o.a.createElement("div",{className:"blog_text"},o.a.createElement("p",{className:"blog_title"},"Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna"),o.a.createElement("p",{className:"blog_desc"},"Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna"),o.a.createElement("div",{className:"btn_tuvan"},"Đọc thêm"),o.a.createElement("div",{className:"author"},o.a.createElement("i",null,"21 Feb 2019 by")," ",o.a.createElement("span",null,"Author")))))),o.a.createElement("div",{className:"blog"},o.a.createElement("div",{className:"row"},o.a.createElement("div",{className:"col-md-4"},o.a.createElement("figure",null,o.a.createElement("img",{src:"/assets/images/blog3.jpg",alt:"",className:"img-fluid d-block mx-auto"}))),o.a.createElement("div",{className:"col-md-8"},o.a.createElement("div",{className:"blog_text"},o.a.createElement("p",{className:"blog_title"},"Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna"),o.a.createElement("p",{className:"blog_desc"},"Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna"),o.a.createElement("div",{className:"btn_tuvan"},"Đọc thêm"),o.a.createElement("div",{className:"author"},o.a.createElement("i",null,"21 Feb 2019 by")," ",o.a.createElement("span",null,"Author")))))),o.a.createElement("div",{className:"blog"},o.a.createElement("div",{className:"row"},o.a.createElement("div",{className:"col-md-4"},o.a.createElement("figure",null,o.a.createElement("img",{src:"/assets/images/blog4.jpg",alt:"",className:"img-fluid d-block mx-auto"}))),o.a.createElement("div",{className:"col-md-8"},o.a.createElement("div",{className:"blog_text"},o.a.createElement("p",{className:"blog_title"},"Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna"),o.a.createElement("p",{className:"blog_desc"},"Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna"),o.a.createElement("div",{className:"btn_tuvan"},"Đọc thêm"),o.a.createElement("div",{className:"author"},o.a.createElement("i",null,"21 Feb 2019 by")," ",o.a.createElement("span",null,"Author"))))))),o.a.createElement("div",{className:"col-md-4"},o.a.createElement("div",{className:"news"},o.a.createElement("div",{className:"title"},"Tin nổi bật",o.a.createElement("hr",null)),o.a.createElement("div",{className:"row mt-20"},o.a.createElement("div",{className:"col-md-4"},o.a.createElement("figure",null,o.a.createElement("img",{src:"/assets/images/tin1.jpg",alt:"",className:"img-fluid d-block mx-auto"}))),o.a.createElement("div",{className:"col-md-8 my-auto"},o.a.createElement("div",{className:"tin"},o.a.createElement("p",null,"Lorem ipsum dolor sit amet, consectetuer adipiscing elit,"),o.a.createElement("div",{className:"author"},o.a.createElement("i",null,"21 Feb 2019 by")," ",o.a.createElement("span",null,"Author"))))),o.a.createElement("div",{className:"row mt-20"},o.a.createElement("div",{className:"col-md-4"},o.a.createElement("figure",null,o.a.createElement("img",{src:"/assets/images/tin2.jpg",alt:"",className:"img-fluid d-block mx-auto"}))),o.a.createElement("div",{className:"col-md-8 my-auto"},o.a.createElement("div",{className:"tin"},o.a.createElement("p",null,"Lorem ipsum dolor sit amet, consectetuer adipiscing elit,"),o.a.createElement("div",{className:"author"},o.a.createElement("i",null,"21 Feb 2019 by")," ",o.a.createElement("span",null,"Author")))))),o.a.createElement("div",{className:"news"},o.a.createElement("div",{className:"title"},"Xem nhiều nhất",o.a.createElement("hr",null)),o.a.createElement("div",{className:"row mt-20"},o.a.createElement("div",{className:"col-md-4"},o.a.createElement("figure",null,o.a.createElement("img",{src:"/assets/images/tin1.jpg",alt:"",className:"img-fluid d-block mx-auto"}))),o.a.createElement("div",{className:"col-md-8 my-auto"},o.a.createElement("div",{className:"tin"},o.a.createElement("p",null,"Lorem ipsum dolor sit amet, consectetuer adipiscing elit,"),o.a.createElement("div",{className:"author"},o.a.createElement("i",null,"21 Feb 2019 by")," ",o.a.createElement("span",null,"Author"))))),o.a.createElement("div",{className:"row mt-20"},o.a.createElement("div",{className:"col-md-4"},o.a.createElement("figure",null,o.a.createElement("img",{src:"/assets/images/tin2.jpg",alt:"",className:"img-fluid d-block mx-auto"}))),o.a.createElement("div",{className:"col-md-8 my-auto"},o.a.createElement("div",{className:"tin"},o.a.createElement("p",null,"Lorem ipsum dolor sit amet, consectetuer adipiscing elit,"),o.a.createElement("div",{className:"author"},o.a.createElement("i",null,"21 Feb 2019 by")," ",o.a.createElement("span",null,"Author"))))))))))))}}])&&i(a.prototype,l),n&&i(a,n),t}(l.Component);t.default=c},58:function(e,t,a){e.exports=a.p+"assets/fonts/NunitoSans-Bold.ttf"},73:function(e,t,a){e.exports=a.p+"assets/fonts/NunitoSans-BoldItalic.ttf"}}]);
//# sourceMappingURL=8.chunk.js.map