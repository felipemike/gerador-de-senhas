(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))i(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const s of t.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&i(s)}).observe(document,{childList:!0,subtree:!0});function n(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerpolicy&&(t.referrerPolicy=e.referrerpolicy),e.crossorigin==="use-credentials"?t.credentials="include":e.crossorigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function i(e){if(e.ep)return;e.ep=!0;const t=n(e);fetch(e.href,t)}})();let l=(o=21)=>crypto.getRandomValues(new Uint8Array(o)).reduce((r,n)=>(n&=63,n<36?r+=n.toString(36):n<62?r+=(n-26).toString(36).toUpperCase():n>62?r+="-":r+="_",r),"");const c=document.getElementById("btn"),u=document.getElementById("pass");c.addEventListener("click",()=>{const o=l();u.innerHTML=o});
