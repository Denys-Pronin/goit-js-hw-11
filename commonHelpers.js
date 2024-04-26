import{i as u,S as d}from"./assets/vendor-8c59ed88.js";(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))e(r);new MutationObserver(r=>{for(const t of r)if(t.type==="childList")for(const a of t.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&e(a)}).observe(document,{childList:!0,subtree:!0});function s(r){const t={};return r.integrity&&(t.integrity=r.integrity),r.referrerPolicy&&(t.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?t.credentials="include":r.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function e(r){if(r.ep)return;r.ep=!0;const t=s(r);fetch(r.href,t)}})();function p(n){const s=`https://pixabay.com/api/?key=43543363-2c3a057550dcf1951d3e0c854&q=${n}&image_type=photo&orientation=horizontal&safesearch=true&`;return fetch(s).then(e=>{if(!e.ok)throw new Error("Network response was not ok");return e.json()}).then(e=>{if(e.hits.length===0)u.show({position:"topRight",backgroundColor:"#EF4040",message:"Sorry, there are no images matching your search query. Please try again!",messageColor:"#fff"});else return e}).catch(e=>{console.error("There was a problem with your fetch operation:",e)})}function f(n){const o=document.querySelector(".gallery");o.textContent="";const s=n.map(e=>(console.log(e),`<li class="gallery-item">
	          <div class="gallery-img">
            <a href="${e.largeImageURL}"><img src="${e.webformatURL}"></a>
            </div>
	          <div class="property-wrapper">
            <div class="property">
            Likes
            <span class="value">${e.likes}</span>
            </div>
	          <div class ="property">
            Views
            <span class="value">${e.views}</span>
            </div>
	          <div class ="property">
            Comments
            <span class="value">${e.comments}</span>
            </div>
	          <div class ="property">
            Downloads
            <span class="value">${e.downloads}</span>
            </div>
            </div>
	        </li>`)).join("");o.insertAdjacentHTML("beforeend",s)}const l=document.querySelector(".search"),i=document.querySelector(".loader");l.addEventListener("submit",h);function h(n){n.preventDefault();const o=document.querySelector(".search-field").value;o.trim()===""?l.reset():(i.style.display="block",p(o).then(s=>{f(s.hits),i.style.display="none",c.refresh()}))}let c=new d(".gallery-img a",{});c.on("show.simplelightbox",function(){});
//# sourceMappingURL=commonHelpers.js.map
