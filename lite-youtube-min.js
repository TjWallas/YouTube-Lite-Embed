/*
 * YouTube Lite Embed - jQuery plugin to embed light-weight YouTube videos
 *
 * Copyright (c) 2012 Amr Tj. Wallas
 *
 * Licensed under the Creative Commons Attribution-NonCommercial-ShareAlike 3.0 Unported License:
 *   http://creativecommons.org/licenses/by-nc-sa/3.0/
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
(function(a){function b(){var b=a(".lite");for(var c=0;c<b.length;c++){var d=b[c];var e=d.id;var f=d.style.width;var g=d.style.height;var h=a(document.createElement("img"));h.attr({"class":"lazy","data-original":"http://img.youtube.com/vi/"+e+"/0.jpg",width:f,height:g});h.css({position:"relative",top:"0",left:"0"});h.lazyload();var i=a(document.createElement("a"));i.href="#";a(d).append(i.append(h,'<img class="lite" src="http://lh4.googleusercontent.com/-QCeB6REIFlE/TuGUlY3N46I/AAAAAAAAAaI/9-urEUtpKcI/s800/youtube-play-button.png" style="position: absolute; top: 50%; left: 45%;" />'));a.ajax({url:"http://gdata.youtube.com/feeds/api/videos/"+e+"?v=2&fields=id,title&alt=json",dataType:"json",success:function(b){a(document.getElementById(b.entry.id.$t.split(":")[3])).append('<div style="position:relative;margin:-'+g+' 5px;padding:5px;background-color:rgba(0,0,0,0.3);-moz-border-radius:7px;-webkit-border-radius:7px;border-radius:7px"><span style="font-weight:bold;font-size:16px;color:#ffffff;font-family:sans-serif;text-align:left;">'+b.entry.title.$t+"</span></div>")}})}return false}var c=a(document);c.on("click",".lite > a",function(){var b=this.parentNode;a(b).replaceWith('<embed src="http://www.youtube.com/v/'+b.id+'?version=3&autoplay=1" type="application/x-shockwave-flash" width="'+b.style.width+'" height="'+b.style.height+'" allowscriptaccess="always"></embed>');return false});c.ready(function(){b()})})(jQuery)
