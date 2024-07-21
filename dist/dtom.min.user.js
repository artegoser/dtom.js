// ==UserScript==
// @name         dtom.js
// @namespace    http://tampermonkey.net/
// @version      1.1.0
// @description  tampermonkey script for removing unnecessary functions on websites 
// @author       artegoser
// @homepage     https://github.com/artegoser/dtom.js#readme
// @updateURL    https://github.com/artegoser/dtom.js/dist/dtom.min.user.js
// @downloadURL  https://github.com/artegoser/dtom.js/dist/dtom.min.user.js
// @match        *://*/*
// @icon         https://www.google.com/s2/favicons?sz=64&domain=github.com
// @grant        none
// ==/UserScript==
document.addEventListener("copy",(e=>{e.stopImmediatePropagation()}),!0),document.addEventListener("paste",(e=>{e.stopImmediatePropagation()}),!0),function(e,n,t){const o=window.location.hostname,a=window.location.pathname;o.includes(e)&&a.includes(n)&&t()}("google.com","/search",(()=>{!function(){for(let e of document.querySelectorAll("a")){let n=document.createElement("a");n.href=e.href,n.innerHTML=e.innerHTML,e.className&&(n.className=e.className),e.replaceWith(n)}}()}));
