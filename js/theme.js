(function(){
var KEY='st-theme';
function setTheme(l){
var root=document.documentElement;
if(l){root.classList.add('light')}else{root.classList.remove('light')}
try{localStorage.setItem(KEY,l?'1':'')}catch(e){}
var btn=document.getElementById('theme-toggle');
if(btn)btn.textContent=l?'\uD83C\uDF19':'\u2600\uFE0F';
}
function toggle(){setTheme(!document.documentElement.classList.contains('light'))}
function init(){
var s=(function(){try{return localStorage.getItem(KEY)}catch(e){}})();
if(s==='1'||(s===null&&window.matchMedia('(prefers-color-scheme:light)').matches))setTheme(true);
var btn=document.getElementById('theme-toggle');
if(btn)btn.onclick=toggle;
}
if(document.readyState==='loading'){document.addEventListener('DOMContentLoaded',init)}else{init()}
})();
