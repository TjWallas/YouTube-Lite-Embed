/*
 * YouTube Lite Embed - jQuery plugin to embed light-weight YouTube videos
 *
 * Copyright (c) 2012 Amr Tj. Wallas
 *
 * Licensed under the MIT license:
 *   http://www.opensource.org/licenses/mit-license.php
 *
 * Project Home:
 *   https://github.com/TjWallas/YouTube-Lite-Embed
 * 
 * Website:
 *	 http://tjwallas.weebly.com
 *
 * Version:  1.0
 *
 */
(function(a){function b(){a("div.lite").each(function(){var b=this;var c=this.id;var d=this.style.width;var e=this.style.height;var f=a(document.createElement("img"));f.attr({"class":"lazy","data-original":"http://img.youtube.com/vi/"+c+"/0.jpg",width:d,height:e});f.css({position:"relative",top:"0",left:"0"});f.lazyload({effect:"fadeIn"});var g=a(document.createElement("a"));g.href="#";g.click(function(){a(this).replaceWith('<embed src="http://www.youtube.com/v/'+c+'?version=3&autoplay=1" type="application/x-shockwave-flash" width="'+d+'" height="'+e+'" allowscriptaccess="always"></embed>');return false});a(b).append(g.append(f,'<img class="lite" src="http://lh4.googleusercontent.com/-QCeB6REIFlE/TuGUlY3N46I/AAAAAAAAAaI/9-urEUtpKcI/s800/youtube-play-button.png" style="position: absolute; top: 50%; left: 45%;" />'));a.getJSON("http://gdata.youtube.com/feeds/api/videos/"+c+"?v=2&fields=id,title&alt=json",function(c){a(b).append('<div style="position:relative;margin:-'+e+' 5px;padding:5px;background-color:rgba(0,0,0,0.3);-moz-border-radius:7px;-webkit-border-radius:7px;border-radius:7px"><span style="font-weight:bold;font-size:16px;color:#ffffff;font-family:sans-serif;text-align:left;">'+c.entry.title.$t+"</span></div>")})});return false}a(document).ready(function(){b()})})(jQuery)
