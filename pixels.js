(function (w, d, s, l, i) {
  w[l] = w[l] || [];
  w[l].push({ "gtm.start": new Date().getTime(), event: "gtm.js" });
  var f = d.getElementsByTagName(s)[0],
    j = d.createElement(s),
    dl = l != "dataLayer" ? "&l=" + l : "";
  j.async = true;
  j.src = "https://www.googletagmanager.com/gtm.js?id=" + i + dl;
  f.parentNode.insertBefore(j, f);
})(window, document, "script", "dataLayer", "GTM-NG7HJD8");

(function (window) {
  (window.heap = window.heap || []),
    (heap.load = function (e, t) {
      (window.heap.appid = e), (window.heap.config = t = t || {});
      var r = document.createElement("script");
      (r.type = "text/javascript"),
        (r.async = !0),
        (r.src = "https://cdn.heapanalytics.com/js/heap-" + e + ".js");
      var a = document.getElementsByTagName("script")[0];
      a.parentNode.insertBefore(r, a);
      for (
        var n = function (e) {
            return function () {
              heap.push([e].concat(Array.prototype.slice.call(arguments, 0)));
            };
          },
          p = [
            "addEventProperties",
            "addUserProperties",
            "clearEventProperties",
            "identify",
            "resetIdentity",
            "removeEventProperty",
            "setEventProperties",
            "track",
            "unsetEventProperty",
          ],
          o = 0;
        o < p.length;
        o++
      )
        heap[p[o]] = n(p[o]);
    });
  heap.load("3813730374");
})(window);

window.smartlook||(function(d) {
          var o=smartlook=function(){ o.api.push(arguments)},h=d.getElementsByTagName('head')[0];
          var c=d.createElement('script');o.api=new Array();c.async=true;c.type='text/javascript';
          c.charset='utf-8';c.src='https://sl.otterize.com/recorder.js';h.appendChild(c);
      })(document);
          smartlook('init', 'AVDuQpVtULYnfhdkFGuKORIUPNZndDfkclCFF6lc', { host: 'https://sl.otterize.com' });