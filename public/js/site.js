$(function(){function t(t,e){t.find(".active").removeClass("active"),e.addClass("active")}function e(){function e(e){t(i,e),n(e)}function n(t){var e=t.position().left+parseInt(t.css("paddingLeft"))+.5;a.css({width:t.width(),transform:"translate("+e+"px,0)"})}var i=$(".header .nav"),o=i.find(".active"),a=i.find(".slideblock");n(o),setTimeout(function(){a.addClass("animation").removeClass("hidden")},0),i.find("a").hover(function(){e($(this))},function(){e(o)}),$(window).resize(function(){clearTimeout(this.timer),this.timer=setTimeout(function(){n(i.find(".active"))},400)})}function n(t,e){var n=document.createElement("script");n.onload=e,n.src=t,document.getElementsByTagName("head")[0].appendChild(n)}function i(t,e){var n=document.createElement("link");n.onload=e,n.href=t,n.rel="stylesheet",document.getElementsByTagName("head")[0].appendChild(n)}e(),$("#open").click(function(){d.open()}),$("#pause").click(function(){d.pause()}),i("//cdn.bootcss.com/prettify/r298/prettify.min.css"),n("//cdn.bootcss.com/prettify/r298/prettify.min.js",function(){$(".prettyprint").length?prettyPrint():$(".quick-getting").length&&"import use use-method config-default".split(" ").forEach(function(t){$.get("/code-demo/"+t+".html",function(e){$("."+t).text(e).addClass("prettyprint"),prettyPrint()})})}),/\/examples\/quick-getting/i.test(location.href)?window.localStorage.setItem("read",!0):window.localStorage.getItem("read")||$(".eg-container >.menu >h5:eq(1)").append('<i class="essential pa">必读</i>')});
//# sourceMappingURL=map/site.js.map
