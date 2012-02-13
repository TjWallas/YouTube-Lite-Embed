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
(function($){ 

function YTLiteEmbed() {
$('div.lite').each(function() {	
	myDiv = this;
	vid = this.id;
	w = this.style.width;
	h = this.style.height;

	img = $(document.createElement('img'));
	img.attr({'class': 'lazy',
			'data-original': 'http://img.youtube.com/vi/'+vid+'/0.jpg',
			'width': w,
			'height':h,			
	});
	img.css({'position': 'relative', 'top': '0', 'left': '0' });
	img.lazyload({ 
    	effect : "fadeIn"
	});

	a = $(document.createElement('a'));
	a.href='#';
	a.click(function(){
		$(this).replaceWith("<embed src=\"http://www.youtube.com/v/"+vid+"?version=3&autoplay=1\" type=\"application/x-shockwave-flash\" width=\""+w+"\" height=\""+h+"\" allowscriptaccess=\"always\"></embed>");return false;
	});

	$(myDiv).append(a.append(img,'<img class="lite" src="http://lh4.googleusercontent.com/-QCeB6REIFlE/TuGUlY3N46I/AAAAAAAAAaI/9-urEUtpKcI/s800/youtube-play-button.png" style="position: absolute; top: 50%; left: 45%;" />'));	

	$.getJSON('http://gdata.youtube.com/feeds/api/videos/'+vid+'?v=2&fields=id,title&alt=json', function(data) {		
		this.innerHTML+='<div style="position:relative;margin:-'+h+' 5px;padding:5px;background-color:rgba(0,0,0,0.3);-moz-border-radius:7px;-webkit-border-radius:7px;border-radius:7px"><span style="font-weight:bold;font-size:16px;color:#ffffff;font-family:sans-serif;text-align:left;">'+data.entry.title.$t+'</span></div>';		
		});
	});
	return false;
}

$(document).ready(function() {
	YTLiteEmbed();
});
})(jQuery);

