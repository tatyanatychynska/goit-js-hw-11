import{a as y,S as p,i as a}from"./assets/vendor-BkC4bTqC.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))n(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const i of t.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&n(i)}).observe(document,{childList:!0,subtree:!0});function s(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function n(e){if(e.ep)return;e.ep=!0;const t=s(e);fetch(e.href,t)}})();async function g(o){const n="https://pixabay.com"+"/api/",e={key:"55157705-9f4ed22218599416e91cc1d5e",q:o};return(await y.get(n,{params:e})).data}const u=document.querySelector(".gallery"),h=new p(".gallery a");function b(o){const r=o.map(({webformatURL:s,largeImageURL:n,tags:e,likes:t,views:i,comments:f,downloads:m})=>`
        <li class="gallery-item">
            <a href="${n}">
                <img src="${s}" alt="${e}" loading="lazy" />
            </a>
            <ul class="gallery-info">
                <li><b>Likes</b> ${t}</li>
                <li><b>Views</b> ${i}</li>
                <li><b>Comments</b> ${f}</li>
                <li><b>Downloads</b> ${m}</li>
            </ul>
        </li>
    `).join("");u.insertAdjacentHTML("beforeend",r),h.refresh()}function L(){u.innerHTML=""}const d=document.querySelector(".loader");function w(){d.classList.remove("hidden")}function l(){d.classList.add("hidden")}const S=document.querySelector('input[name="search-text"]'),q=document.querySelector(".form");let c;q.addEventListener("submit",async o=>{o.preventDefault(),L(),w(),c=S.value;try{const r=await g(c);if(r.total===0){a.show({title:"Try again",message:"Sorry, there are no images matching your search query. Please try again!",color:"blue"}),l();return}b(r.hits)}catch{a.show({title:"Error",message:"Something went wrong in createGallery",color:"red"})}finally{l()}});
//# sourceMappingURL=index.js.map
