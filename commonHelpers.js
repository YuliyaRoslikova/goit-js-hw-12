import{a as S,S as M,i as q}from"./assets/vendor-5401a4b0.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))o(s);new MutationObserver(s=>{for(const r of s)if(r.type==="childList")for(const n of r.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&o(n)}).observe(document,{childList:!0,subtree:!0});function i(s){const r={};return s.integrity&&(r.integrity=s.integrity),s.referrerPolicy&&(r.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?r.credentials="include":s.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function o(s){if(s.ep)return;s.ep=!0;const r=i(s);fetch(s.href,r)}})();const $=S.create({baseURL:"https://pixabay.com/api"}),P="/?key=42320739-3511db631b1999bc59ca675c6";async function h(e,t,i){const o=`&q=${e}&image_type=photo&orientation=horizontal&safesearch=true&page=${t}&per_page=${i}`,s=P+o;try{return(await $.get(s)).data}catch(r){throw new Error(r.message)}}function C(e){return e.map(({webformatURL:t,largeImageURL:i,tags:o,likes:s,views:r,comments:n,downloads:w})=>`
    <li class="gallery-item">
      <a class="gallery-link" href="${i}">
        <img 
          class="gallery-img"
          src="${t}"
          alt="${o}"
        />
        <div class="descriptions">
          <div class="img-descriptions">
            <p class="img-title">Likes</p>
            <p class="img-content">${s}</p>
          </div>
          <div class="img-description">
            <p class="img-title">Views</p>
            <p class="img-content">${r}</p>
          </div>
          <div class="img-description">
            <p class="img-title">Comments</p>
            <p class="img-content">${n}</p>
          </div>
          <div class="img-description">
            <p class="img-title">Downloads</p>
            <p class="img-content">${w}</p>
          </div>
        </div>
      </a>
    </li>`).join("")}const O=document.querySelector(".form"),y=document.querySelector(".loader"),d=document.querySelector(".gallery"),p=document.querySelector("#loadMore"),k=new M(".gallery a",{captions:!0,captionDelay:250,captionsData:"alt"});let l,c,u;const m=15;O.addEventListener("submit",I);p.addEventListener("click",A);async function I(e){if(e.preventDefault(),d.innerHTML="",l=e.target.elements.query.value.trim(),c=1,f(),b(),l===""){a("Fill out the search form!"),g();return}try{const t=await h(l,c,m);u=Math.ceil(t.total/m),t.totalHits===0?a("Sorry, there are no images matching your search query. Please try again!"):(L(t.hits),v())}catch(t){a(t.message),u=0,d.innerHTML=""}g(),e.target.reset()}async function A(){c+=1,b(),f();try{const e=await h(l,c,m);g(),v(),L(e.hits),E()}catch(e){a(e.message)}}function L(e){const t=C(e);d.insertAdjacentHTML("beforeend",t),k.refresh()}function B(){p.classList.remove("is-hidden")}function f(){p.classList.add("is-hidden")}function b(){y.classList.remove("is-hidden")}function g(){y.classList.add("is-hidden")}function v(){c>=u?(f(),a("We're sorry, but you've reached the end of search results.",{backgroundColor:"lightblue",messageColor:"black"})):B()}function a(e,t={}){const i={backgroundColor:"red",messageColor:"white",messageSize:"14",position:"topRight",timeout:3e3};q.show({...i,...t,message:e})}function E(){const e=document.querySelector("li.gallery-item");if(e){const t=e.getBoundingClientRect();window.scrollBy(0,t.height*2)}}
//# sourceMappingURL=commonHelpers.js.map
