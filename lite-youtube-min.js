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
function YTLiteEmbed(){var e=$(".lite");var t,n,r,i,s,o,u;for(var a=0;a<e.length;a++){i=e[a];t=i.id;n=i.style.width;r=i.style.height;s=$(document.createElement("img"));s.attr({"class":"lazy","data-original":"http://img.youtube.com/vi/"+t+"/0.jpg",width:n,height:r});o=$(document.createElement("a"));o.href="#";u=document.createElement("img");u.class="lite";u.src="//lh4.googleusercontent.com/-QCeB6REIFlE/TuGUlY3N46I/AAAAAAAAAaI/9-urEUtpKcI/s800/youtube-play-button.png";u.style.position="absolute";u.style.top=Math.round((i.clientHeight-51)/2)+"px";u.style.left=Math.round((i.clientWidth-71)/2)+"px";$(i).append(o.append(s,u));$.ajax({url:"http://gdata.youtube.com/feeds/api/videos/"+t+"?v=2&fields=id,title&alt=json",dataType:"json",success:function(e){$(document.getElementById(e.entry.id.$t.split(":")[3])).append('<div style="position:relative;margin:-'+r+' 5px;padding:5px;background-color:rgba(0,0,0,0.3);-moz-border-radius:7px;-webkit-border-radius:7px;border-radius:7px"><span style="font-weight:bold;font-size:16px;color:#ffffff;font-family:sans-serif;text-align:left;">'+e.entry.title.$t+"</span></div>")}})}return false}(function(e){var t=e(document);t.on("click",".lite > a",function(){var t=this.parentNode;e(t).replaceWith('<embed src="http://www.youtube.com/v/'+t.id+'?version=3&autoplay=1" type="application/x-shockwave-flash" width="'+t.style.width+'" height="'+t.style.height+'" allowscriptaccess="always"></embed>');return false});t.ready(function(){YTLiteEmbed();e("img.lazy").lazyload({effect:"fadeIn"});e(this).trigger("scroll")})})(jQuery)
