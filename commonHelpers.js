import{i as c}from"./assets/vendor-ad859c2f.js";(function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))e(r);new MutationObserver(r=>{for(const t of r)if(t.type==="childList")for(const i of t.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&e(i)}).observe(document,{childList:!0,subtree:!0});function o(r){const t={};return r.integrity&&(t.integrity=r.integrity),r.referrerPolicy&&(t.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?t.credentials="include":r.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function e(r){if(r.ep)return;r.ep=!0;const t=o(r);fetch(r.href,t)}})();function l(n){const o=`https://pixabay.com/api/?key=43543363-2c3a057550dcf1951d3e0c854&q=${n}&image_type=photo&orientation=horizontal&safesearch=true`;return fetch(o).then(e=>{if(!e.ok)throw new Error("Network response was not ok");return e.json()}).then(e=>{if(e.hits.length===0)c.show({position:"topRight",backgroundColor:"#EF4040",message:"Sorry, there are no images matching your search query. Please try again!",messageColor:"#fff"});else return e}).catch(e=>{console.error("There was a problem with your fetch operation:",e)})}function u(n){const s=document.querySelector(".gallery");s.textContent="";const o=n.map(e=>(console.log(e),`<li class="gallery-item">
	          <img class="gallery-img" src="${e.previewURL}">
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
	        </li>`)).join("");s.insertAdjacentHTML("beforeend",o)}const a=document.querySelector(".search");a.addEventListener("submit",p);function p(n){n.preventDefault();const s=document.querySelector(".search-field").value;s.trim()===""?a.reset():l(s).then(o=>{u(o.hits)})}
//# sourceMappingURL=commonHelpers.js.map
