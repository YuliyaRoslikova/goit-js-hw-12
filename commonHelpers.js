import{S as d,i as c}from"./assets/vendor-5b791d57.js";(function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))n(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const o of t.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&n(o)}).observe(document,{childList:!0,subtree:!0});function i(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function n(e){if(e.ep)return;e.ep=!0;const t=i(e);fetch(e.href,t)}})();function p(r){const s="https://pixabay.com",i="/api",n="/?key=42320739-3511db631b1999bc59ca675c6",e=`&q=${r}&image_type=photo&orientation=horizontal&safesearch=true`,t=s+i+n+e;return fetch(t).then(o=>o.json()).catch(o=>{throw new Error(o.status)})}function g(r){return r.map(({webformatURL:s,largeImageURL:i,tags:n,likes:e,views:t,comments:o,downloads:u})=>`
    <li class="gallery-item">
      <a class="gallery-link" href="${i}">
        <img 
          class="gallery-img"
          src="${s}"
          alt="${n}"
        />
        <div class="descriptions">
          <div class="img-descriptions">
            <p class="img-title">Likes</p>
            <p class="img-content">${e}</p>
          </div>
          <div class="img-description">
            <p class="img-title">Views</p>
            <p class="img-content">${t}</p>
          </div>
          <div class="img-description">
            <p class="img-title">Comments</p>
            <p class="img-content">${o}</p>
          </div>
          <div class="img-description">
            <p class="img-title">Downloads</p>
            <p class="img-content">${u}</p>
          </div>
        </div>
      </a>
    </li>`).join("")}const f=document.querySelector(".form"),a=document.querySelector(".loader"),m=document.querySelector(".gallery"),l={backgroundColor:"red",messageColor:"white",messageSize:"14",position:"topRight",timeout:3e3},h=new d(".gallery a",{captions:!0,captionDelay:250,captionsData:"alt"});f.addEventListener("submit",y);function y(r){r.preventDefault(),m.innerHTML="";const s=r.target.elements.query.value.trim();if(s===""){c.show({...l,message:"Fill out the search form!"});return}a.classList.remove("is-hidden"),p(s).then(i=>{i.totalHits===0?c.show({...l,message:"Sorry, there are no images matching your search query. Please try again!"}):v(i.hits),r.target.reset()}).catch(i=>console.log(i)).finally(()=>{a.classList.add("is-hidden")})}function v(r){const s=g(r);m.insertAdjacentHTML("beforeend",s),h.refresh()}
//# sourceMappingURL=commonHelpers.js.map
