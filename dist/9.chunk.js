(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{116:function(e,t,a){var n=a(117);"string"==typeof n&&(n=[[e.i,n,""]]);var o={insert:"head",singleton:!1};a(14)(n,o);n.locals&&(e.exports=n.locals)},117:function(e,t,a){t=e.exports=a(13)(!1);var n=a(23),o=n(a(58)),i=n(a(31)),m=n(a(73));t.push([e.i,"@font-face{font-family:'Bold';src:url("+o+")}@font-face{font-family:'Regular';src:url("+i+")}@font-face{font-family:'BoldItalic';src:url("+m+")}#document{padding:9rem 0 3rem}#document p{font-family:'Regular';text-align:center}#document p.title{font-family:\"Bold\";text-transform:initial;font-size:1.5rem;text-align:center;color:#000}#document .document{background-color:#fff;position:relative;margin:1rem 0;-webkit-box-shadow:0px 0px 110px -70px rgba(0,0,0,0.75);box-shadow:0px 0px 110px -70px rgba(0,0,0,0.75)}#document .document figure{margin-bottom:0}#document .document .document_text{padding:1rem 1rem  0 0}#document .document .document_text p{text-align:left;font-family:'Bold';margin-bottom:.5rem}#document .document .document_text p+p{font-family:'Regular'}#document .document .document_text .btn_tuvan{font-family:'Regular';font-size:1rem;padding:5px 30px}#document .document .document_text .author{position:absolute;bottom:5px;right:30px}#document .author{font-family:'Regular';font-size:.8rem}#document .author span{font-family:'BoldItalic'}#document .news{background-color:#fff;margin:1rem 0;padding:1rem;-webkit-box-shadow:0px 0px 110px -70px rgba(0,0,0,0.75);box-shadow:0px 0px 110px -70px rgba(0,0,0,0.75)}#document .news .title{font-family:'Bold';width:-webkit-fit-content;width:-moz-fit-content;width:fit-content}#document .news .title hr{border:2px solid #27bfdb;margin-top:0rem}#document .news p{font-family:'Bold';text-align:left}#document .form{background-color:transparent;position:fixed;bottom:calc(-345.19px + 59.19px);right:0;width:500px;z-index:20;transition:0.5s all ease;-webkit-transition:0.5s all ease;-moz-transition:0.5s all ease;-ms-transition:0.5s all ease;-o-transition:0.5s all ease;cursor:pointer}#document .form .form_title{background:-webkit-gradient(linear, left top, right top, from(#27bee0), to(#2ac5b1));background:linear-gradient(to right, #27bee0 0%, #2ac5b1 100%);padding:.6rem;text-align:center;text-transform:uppercase;width:70%;border-top-left-radius:100px;font-family:'Bold';color:#fff;margin-left:auto;margin-right:0}#document .form .form_title img{width:40px;-webkit-filter:invert(1);filter:invert(1)}#document .form form{width:100%;background-color:#fff;padding:1rem 1rem 1rem 3rem;border-top-left-radius:30px;border-bottom-left-radius:30px}#document .form form .select2-container .select2-selection--single{background-color:transparent !important;border-bottom:1px solid #2ac5b1 !important;border-radius:0 !important;-webkit-border-radius:0 !important;-moz-border-radius:0 !important;-ms-border-radius:0 !important;-o-border-radius:0 !important;padding:5px 15px}#document .form form .select2-container .select2-selection--single .select2-selection__rendered{text-align:right;padding-right:0  !important}#document .form form .select2-container .select2-selection--single .select2-selection__arrow{display:none}#document .form form input{width:100%;background-color:transparent;border-bottom:1px solid #2ac5b1;border-top:none;border-left:none;border-right:none;margin-bottom:1rem;padding:5px 15px;text-align:right}\n",""])},125:function(e,t,a){"use strict";a.r(t);var n=a(0),o=a.n(n);a(116);function i(e){return(i="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function m(e,t){for(var a=0;a<t.length;a++){var n=t[a];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function r(e,t){return!t||"object"!==i(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function l(e){return(l=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function c(e,t){return(c=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}var s=function(e){function t(){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),r(this,l(t).apply(this,arguments))}var a,n,i;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&c(e,t)}(t,e),a=t,(n=[{key:"componentDidMount",value:function(){var e=document.querySelectorAll(".document_title"),t=document.querySelectorAll(".document_desc");e.forEach((function(t,a){if(e[a].innerHTML.trim().length>=70){var n=e[a].innerHTML.trim().slice(0,70);e[a].innerHTML=n+" ..."}})),t.forEach((function(e,a){if(t[a].innerHTML.trim().length>=140){var n=t[a].innerHTML.trim().slice(0,140);t[a].innerHTML=n+" ..."}}))}},{key:"render",value:function(){return o.a.createElement("section",{id:"document"},o.a.createElement("div",{className:"container-fluid"},o.a.createElement("div",{className:"row"},o.a.createElement("div",{className:"col-md-10 offset-md-1"},o.a.createElement("div",{className:"row"},o.a.createElement("div",{className:"col-md-12"},o.a.createElement("p",{className:"title"},"Lorem ipsum dolor sit amet, consectetur adipiscing elit"),o.a.createElement("p",null,"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. da."))),o.a.createElement("div",{className:"row"},o.a.createElement("div",{className:"col-md-8"},o.a.createElement("div",{className:"document"},o.a.createElement("div",{className:"row"},o.a.createElement("div",{className:"col-md-4"},o.a.createElement("figure",null,o.a.createElement("img",{src:"/assets/images/blog1.jpg",alt:"",className:"img-fluid d-block mx-auto"}))),o.a.createElement("div",{className:"col-md-8"},o.a.createElement("div",{className:"document_text"},o.a.createElement("p",{className:"document_title"},"Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna"),o.a.createElement("p",{className:"document_desc"},"Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna"),o.a.createElement("div",{className:"btn_tuvan"},"Đọc thêm"),o.a.createElement("div",{className:"author"},o.a.createElement("i",null,"21 Feb 2019 by")," ",o.a.createElement("span",null,"Author")))))),o.a.createElement("div",{className:"document"},o.a.createElement("div",{className:"row"},o.a.createElement("div",{className:"col-md-4"},o.a.createElement("figure",null,o.a.createElement("img",{src:"/assets/images/blog2.jpg",alt:"",className:"img-fluid d-block mx-auto"}))),o.a.createElement("div",{className:"col-md-8"},o.a.createElement("div",{className:"document_text"},o.a.createElement("p",{className:"document_title"},"Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna"),o.a.createElement("p",{className:"document_desc"},"Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna"),o.a.createElement("div",{className:"btn_tuvan"},"Đọc thêm"),o.a.createElement("div",{className:"author"},o.a.createElement("i",null,"21 Feb 2019 by")," ",o.a.createElement("span",null,"Author")))))),o.a.createElement("div",{className:"document"},o.a.createElement("div",{className:"row"},o.a.createElement("div",{className:"col-md-4"},o.a.createElement("figure",null,o.a.createElement("img",{src:"/assets/images/blog3.jpg",alt:"",className:"img-fluid d-block mx-auto"}))),o.a.createElement("div",{className:"col-md-8"},o.a.createElement("div",{className:"document_text"},o.a.createElement("p",{className:"document_title"},"Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna"),o.a.createElement("p",{className:"document_desc"},"Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna"),o.a.createElement("div",{className:"btn_tuvan"},"Đọc thêm"),o.a.createElement("div",{className:"author"},o.a.createElement("i",null,"21 Feb 2019 by")," ",o.a.createElement("span",null,"Author")))))),o.a.createElement("div",{className:"document"},o.a.createElement("div",{className:"row"},o.a.createElement("div",{className:"col-md-4"},o.a.createElement("figure",null,o.a.createElement("img",{src:"/assets/images/blog4.jpg",alt:"",className:"img-fluid d-block mx-auto"}))),o.a.createElement("div",{className:"col-md-8"},o.a.createElement("div",{className:"document_text"},o.a.createElement("p",{className:"document_title"},"Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna"),o.a.createElement("p",{className:"document_desc"},"Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna"),o.a.createElement("div",{className:"btn_tuvan"},"Đọc thêm"),o.a.createElement("div",{className:"author"},o.a.createElement("i",null,"21 Feb 2019 by")," ",o.a.createElement("span",null,"Author"))))))),o.a.createElement("div",{className:"col-md-4"},o.a.createElement("div",{className:"news"},o.a.createElement("div",{className:"title"},"Bài mới nhất",o.a.createElement("hr",null)),o.a.createElement("div",{className:"row mt-20"},o.a.createElement("div",{className:"col-md-4"},o.a.createElement("figure",null,o.a.createElement("img",{src:"/assets/images/tin1.jpg",alt:"",className:"img-fluid d-block mx-auto"}))),o.a.createElement("div",{className:"col-md-8 my-auto"},o.a.createElement("div",{className:"tin"},o.a.createElement("p",null,"Lorem ipsum dolor sit amet, consectetuer adipiscing elit,"),o.a.createElement("div",{className:"author"},o.a.createElement("i",null,"21 Feb 2019 by")," ",o.a.createElement("span",null,"Author"))))),o.a.createElement("div",{className:"row mt-20"},o.a.createElement("div",{className:"col-md-4"},o.a.createElement("figure",null,o.a.createElement("img",{src:"/assets/images/tin2.jpg",alt:"",className:"img-fluid d-block mx-auto"}))),o.a.createElement("div",{className:"col-md-8 my-auto"},o.a.createElement("div",{className:"tin"},o.a.createElement("p",null,"Lorem ipsum dolor sit amet, consectetuer adipiscing elit,"),o.a.createElement("div",{className:"author"},o.a.createElement("i",null,"21 Feb 2019 by")," ",o.a.createElement("span",null,"Author")))))),o.a.createElement("div",{className:"news"},o.a.createElement("div",{className:"title"},"Xem nhiều nhất",o.a.createElement("hr",null)),o.a.createElement("div",{className:"row mt-20"},o.a.createElement("div",{className:"col-md-4"},o.a.createElement("figure",null,o.a.createElement("img",{src:"/assets/images/tin1.jpg",alt:"",className:"img-fluid d-block mx-auto"}))),o.a.createElement("div",{className:"col-md-8 my-auto"},o.a.createElement("div",{className:"tin"},o.a.createElement("p",null,"Lorem ipsum dolor sit amet, consectetuer adipiscing elit,"),o.a.createElement("div",{className:"author"},o.a.createElement("i",null,"21 Feb 2019 by")," ",o.a.createElement("span",null,"Author"))))),o.a.createElement("div",{className:"row mt-20"},o.a.createElement("div",{className:"col-md-4"},o.a.createElement("figure",null,o.a.createElement("img",{src:"/assets/images/tin2.jpg",alt:"",className:"img-fluid d-block mx-auto"}))),o.a.createElement("div",{className:"col-md-8 my-auto"},o.a.createElement("div",{className:"tin"},o.a.createElement("p",null,"Lorem ipsum dolor sit amet, consectetuer adipiscing elit,"),o.a.createElement("div",{className:"author"},o.a.createElement("i",null,"21 Feb 2019 by")," ",o.a.createElement("span",null,"Author"))))))))))))}}])&&m(a.prototype,n),i&&m(a,i),t}(n.Component);t.default=s},58:function(e,t,a){e.exports=a.p+"assets/fonts/NunitoSans-Bold.ttf"},73:function(e,t,a){e.exports=a.p+"assets/fonts/NunitoSans-BoldItalic.ttf"}}]);
//# sourceMappingURL=9.chunk.js.map