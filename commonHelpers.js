import{a as S,S as E,i as P}from"./assets/vendor-5401a4b0.js";(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))n(e);new MutationObserver(e=>{for(const s of e)if(s.type==="childList")for(const i of s.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&n(i)}).observe(document,{childList:!0,subtree:!0});function r(e){const s={};return e.integrity&&(s.integrity=e.integrity),e.referrerPolicy&&(s.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?s.credentials="include":e.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function n(e){if(e.ep)return;e.ep=!0;const s=r(e);fetch(e.href,s)}})();async function h(t,o,r){const n="42531560-9f80359c55485b48c70b7f04a",e="https://pixabay.com/api/",s={key:n,q:t,image_type:"photo",orientation:"horizontal",safesearch:!0,per_page:o,page:r};return(await S.get(e,{params:s})).data}function q({webformatURL:t,largeImageURL:o,tags:r,likes:n,views:e,comments:s,downloads:i}){return`<a href="${o}" class="gallery-item">
                <img src="${t}" alt="" title="${r}">
                <div class="info-block">
                    <div class="info-item likes">
                        <span>Likes</span>${n}
                    </div>
                    <div class="info-item views">
                        <span>Views</span>${e}
                    </div>
                    <div class="info-item comments">
                        <span>Comments</span>${s}
                    </div>
                    <div class="info-item downloads">
                        <span>Downloads</span>${i}
                    </div>
                </div>
            </a>`}function x(t){return t.map(q).join("")}function g(t,o){const r=x(o);t.insertAdjacentHTML("beforeend",r)}const u=document.querySelector(".search-form"),y=document.querySelector(".items-wrap"),l=document.querySelector(".gallery"),d=document.querySelector(".load-more");let c,a,f;const m=15;let p;u.addEventListener("submit",B);d.addEventListener("click",I);async function B(t){if(t.preventDefault(),l.innerHTML="",a=1,f=1,d.classList.add("hidden"),c=u.elements.searchField.value.trim(),c){L();try{const o=await h(c,m,a);o.hits.length!==0?(f=Math.ceil(o.totalHits/m),g(l,o.hits),M(),C()):b({message:"Sorry, there are no images matching your search query. Please try again!",bgColor:"#EF4040",progressColor:"#B51B1B"})}catch(o){console.log(o)}v()}w(),u.reset()}async function I(){a+=1,L();const t=await h(c,m,a);g(l,t.hits),p.refresh(),v(),C(),w(),$()}function M(){p=new E(".gallery a"),p.refresh()}function L(){y.classList.add("loading")}function v(){y.classList.remove("loading")}function $(){const t=l.firstElementChild.getBoundingClientRect().height*2;window.scrollBy({behavior:"smooth",top:t})}function b({message:t,bgColor:o,progressColor:r}){P.error({message:t,messageColor:"#fff",backgroundColor:o,theme:"dark",position:"topRight",timeout:3e3,progressBarColor:r,animateInside:!1,transitionIn:"fadeIn"})}function w(){a>=f?d.classList.add("hidden"):d.classList.remove("hidden")}function C(){a>=f&&b({message:"We're sorry, but you've reached the end of search results.",bgColor:"#2db4cf",progressColor:"#40666e"})}
//# sourceMappingURL=commonHelpers.js.map
