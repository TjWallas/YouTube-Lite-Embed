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
(function(b){var e=b(document);e.on("click",".lite > a",function(){var a=this.parentNode;b(a).replaceWith('<embed src="http://www.youtube.com/v/'+a.id+'?version=3&autoplay=1" type="application/x-shockwave-flash" width="'+a.style.width+'" height="'+a.style.height+'" allowscriptaccess="always"></embed>');return!1});e.ready(function(){YTLiteEmbed();b("img.lazy").lazyload({effect:"fadeIn"});b(this).trigger("scroll")})})(jQuery);
function YTLiteEmbed(){for(var b=$(".lite"),e,a,f,c,g,d,h=0;h<b.length;h++)c=b[h],e=c.id,a=c.style.width,f=c.style.height,g=$(document.createElement("img")),g.attr({"class":"lazy","data-original":"http://img.youtube.com/vi/"+e+"/0.jpg",width:a,height:f}),a=$(document.createElement("a")),a.href="#",d=document.createElement("img"),d.setAttribute("class","lite"),d.src="http://lh4.googleusercontent.com/-QCeB6REIFlE/TuGUlY3N46I/AAAAAAAAAaI/9-urEUtpKcI/s800/youtube-play-button.png",d.style.position="absolute",
d.style.top=Math.round((c.clientHeight-51)/2)+"px",d.style.left=Math.round((c.clientWidth-71)/2)+"px",$(c).append(a.append(g,d)),$.ajax({url:"http://gdata.youtube.com/feeds/api/videos/"+e+"?v=2&fields=id,title&alt=json",dataType:"json",success:function(a){$(document.getElementById(a.entry.id.$t.split(":")[3])).append('<div style="position:relative;margin:-'+f+' 5px;padding:5px;background-color:rgba(0,0,0,0.3);-moz-border-radius:7px;-webkit-border-radius:7px;border-radius:7px"><span style="font-weight:bold;font-size:16px;color:#ffffff;font-family:sans-serif;text-align:left;">'+
a.entry.title.$t+"</span></div>")}});return!1};
