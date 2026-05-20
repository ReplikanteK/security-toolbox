(function() {
  var KEY = 'st-theme';
  var LIGHT = 'light';
  function setTheme(t) {
    document.documentElement.classList.toggle(LIGHT, t === LIGHT);
    try { localStorage.setItem(KEY, t); } catch (e) {}
    var btn = document.getElementById('theme-toggle');
    if (btn) btn.textContent = t === LIGHT ? '\uD83C\uDF19' : '\u2600\uFE0F';
  }
  function toggle() { setTheme(document.documentElement.classList.contains(LIGHT) ? '' : LIGHT); }
  var saved = (function(){ try { return localStorage.getItem(KEY); } catch (e) {} })();
  if (saved === LIGHT || (saved === null && window.matchMedia('(prefers-color-scheme: light)').matches)) {
    setTheme(LIGHT);
  }
  window.toggleTheme = toggle;
})();
