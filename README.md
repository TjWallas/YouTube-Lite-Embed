Overview
========
Designed with performance in mind, "YouTube Lite Embed" is a jQuery library that allows you to embed YouTube videos in a light-weight fashion that has minimum impact on the page initial load speed. This library is definitely aimed at YouTube embed freaks and targets pages that contain loads of embedded YouTube content.

Functionality
=============
HTML embedded content *especially* flash content, takes a significant time to load which decreases the overall page load speed. As more embedded objects are added to the page, this could literally spell page load chaos. This library addresses this issue by not directly loading YouTube embedded content. Instead, video thumbnails and titles are fetched using the [YouTube Data API](http://code.google.com/apis/youtube/2.0/reference.html) then placed in such a way that makes it look like the YouTube embedded player layout. Moreover with the aid of the [jQuery lazy load plugin](http://www.appelsiini.net/projects/lazyload), these fetched thumbnails are only rendered using Ajax when the user scrolls to see them thus, the thumbnails loading time is also eliminated.

Usage
=====
1. import "jQuery" & the "lazy load" plugin if you haven't:
	<script type="text/javascript" src="http://ajax.googleapis.com/ajax/libs/jquery/1.7.1/jquery.min.js"></script>
	<script type="text/javascript" src="jquery.lazyload.min.js"></script>

2. Add the following CSS Rules:
	<style>
		div.lite {
			position: relative; left: 0; top: 0
		}

		img.lite:hover {
			background:url(http://lh5.googleusercontent.com/-oBFjswrosz4/TuHqainRc3I/AAAAAAAAAbE/t3rMQuSJdLA/s800/youtube-play-button-hover.png)
		}
	</style>

3. import the "YouTube Lite Embed Plugin":
	<script type="text/javascript" src="lite-youtube.js"></script>

4. Finally, you can simply embed a youtube video anywhere using the following markup:
	<div class="lite" id="youtube_video_id" style="width:my_width;height:my_height;"></div>
   Where:
		* `youtube_video_id` is the id of that video. (Typically, the value after 'v=' in the URL)
		* `my_width` and `my_height` are the width and height of the embedded player in either pixels (Ex: 360px) or percetage (Ex: 50%).
