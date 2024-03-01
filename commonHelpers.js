import{S as u,i as f}from"./assets/vendor-5b791d57.js";(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))i(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const n of t.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&i(n)}).observe(document,{childList:!0,subtree:!0});function s(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function i(e){if(e.ep)return;e.ep=!0;const t=s(e);fetch(e.href,t)}})();function d(r){const i=`https://pixabay.com/api/?key=42531560-9f80359c55485b48c70b7f04a&q=${r}&image_type=photo&orientation=horizontal&safesearch=true`;return fetch(i).then(e=>e.json())}function m({webformatURL:r,largeImageURL:o,tags:s,likes:i,views:e,comments:t,downloads:n}){return`<a href="${o}" class="gallery-item">
                <img src="${r}" alt="" title="${s}">
                <div class="info-block">
                    <div class="info-item likes">
                        <span>Likes</span>${i}
                    </div>
                    <div class="info-item views">
                        <span>Views</span>${e}
                    </div>
                    <div class="info-item comments">
                        <span>Comments</span>${t}
                    </div>
                    <div class="info-item downloads">
                        <span>Downloads</span>${n}
                    </div>
                </div>
            </a>`}function p(r){return r.map(m).join("")}function h(r,o){const s=p(o);r.insertAdjacentHTML("afterbegin",s)}const l=document.querySelector(".search-form"),a=document.querySelector(".items-wrap"),c=document.querySelector(".gallery");l.addEventListener("submit",g);function g(r){r.preventDefault(),c.innerHTML="";const o=l.elements.searchField.value.trim();o&&(a.classList.add("loading"),d(o).then(s=>{a.classList.remove("loading"),s.hits.length!==0?(h(c,s.hits),y()):v()}).catch(s=>{console.log(s),a.classList.remove("loading")}))}function y(){new u(".gallery a").refresh()}function v(){f.error({message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight",messageColor:"#FAFAFB",backgroundColor:"#EF4040"})}
//# sourceMappingURL=commonHelpers.js.map
