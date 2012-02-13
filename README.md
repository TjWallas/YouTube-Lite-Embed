Overview
========
Designed with performance in mind, "YouTube Lite Embed" is a jQuery library that allows you to embed YouTube videos in a light-weight fashion that has minimum impact on the page initial load speed. This library is definitely aimed at YouTube embed freaks and targets pages that contain loads of embedded YouTube content.

Functionality
=============
HTML embedded content *especially* flash content, takes a significant time to load which decreases the overall page load speed. As more embedded objects are added to the page, this could literally spell page load chaos. This library addresses this issue by not directly loading YouTube embedded content. Instead, video thumbnails and titles are fetched using the [YouTube Data API](http://code.google.com/apis/youtube/2.0/reference.html) then placed in such a way that makes it look like the YouTube embedded player layout. Moreover with the aid of the [jQuery lazy load plugin](http://www.appelsiini.net/projects/lazyload), these fetched thumbnails are only rendered using Ajax when the user scrolls to see them thus, the thumbnails loading time is also eliminated.

Usage
=====
1.	import "jQuery" & the "lazy load" plugin if you haven't:

        <script type="text/javascript" src="http://ajax.googleapis.com/ajax/libs/jquery/1.7.1/jquery.min.js"></script>
	    <script type="text/javascript" src="jquery.lazyload.min.js"></script>

2.	import the "YouTube Lite Embed" Plugin:

		<script type="text/javascript" src="lite-youtube-min.js"></script>

3.	Add the following CSS Rules:

    	<style>
			div.lite {
				position: relative; left: 0; top: 0
			}
			img.lite:hover {
				background:url(http://lh5.googleusercontent.com/-oBFjswrosz4/TuHqainRc3I/AAAAAAAAAbE/t3rMQuSJdLA/s800/youtube-play-button-hover.png)
			}
		</style>

4.	Finally, you can simply embed a youtube video anywhere using the following markup:

		<div class="lite" id="youtube_video_id" style="width:my_width;height:my_height;"></div>
   	Where:
	* `youtube_video_id` is the id of that video. (Typically, the value after 'v=' in the URL)
	* `my_width` and `my_height` are the width and height of the embedded player in either pixels (Ex: 360px) or percetage (Ex: 50%).

    **Alternatively, you can install [this chrome extension](https://github.com/TjWallas/YouTube-Lite-Embed/raw/master/Chrome%20Extension/YouTube%20Minified%20Embed.crx) that I coded which will automatically copy the aforementioned special markup code to your clipboard whenever you click it's icon whilst being at a youtube video page.**

Demos
=====
*    A demo page consisting of 10 YouTube videos while using the lite embed library can be found [here (fast embed demo)](http://eminemvirus2010.mypagerocks.com/demo-fast.html)
*    An equivalent demo page to it **WITHOUT** the library can be found [here (slow embed demo)](http://eminemvirus2010.mypagerocks.com/demo-slow.html)

Benchmarks
==========
The best way to test it out is to check the demos above. You'll instantly feel the difference especially if you are a *nix user.

> "There are three types of lies: lies, damned lies and benchmarks"

That being said, let's get down to the results =)

Without the lite embed library, the page took **7.539s** to fully load *without caching*. On the other hand, the page took only **4.437s** to load using the library under the same benchmark configuration. This is almost **1.7x** performance speedup. (PS: this was only tested on a page that has 10 videos. Try it with more videos and be impressed)

*    Benchmark summary *using the library*:

     <table id="tableResults" class="pretty" align="center" border="1" cellpadding="10" cellspacing="0">
                    <tr>
                    <th align="center" class="empty" valign="middle" style="border:1px white solid;"></th>
                    <th align="center" class="empty" valign="middle" colspan="3"></th>
                    <th align="center" class="border" valign="middle" colspan="3">Document Complete</th>
                    <th align="center" class="border" valign="middle" colspan="3">Fully Loaded</th>
                    </tr>
                    <tr>
                    <th align="center" class="empty" valign="middle"></th>
                    <th align="center" valign="middle">Load Time</th>
                    <th align="center" valign="middle">First Byte</th>
                    <th align="center" valign="middle">Start Render</th>                                                                                                
                    <th align="center" class="border" valign="middle">Time</th>
                    <th align="center" valign="middle">Requests</th>
                    <th align="center" valign="middle">Bytes In</th>
                    <th align="center" class="border" valign="middle">Time</th>
                    <th align="center" valign="middle">Requests</th>
                    <th align="center" valign="middle">Bytes In</th>
                    </tr>
                    <tr>
                        <td align="left" valign="middle">First View
                         </td><td id="fvLoadTime" valign="middle">1.437s</td>
<td id="fvTTFB" valign="middle">0.216s</td>
<td id="fvStartRender" valign="middle">1.050s</td>
<td id="fvDocComplete" class="border" valign="middle">1.437s</td>
<td id="fvRequestsDoc" valign="middle">17</td>
<td id="fvBytesDoc" valign="middle">75 KB</td>
<td id="fvFullyLoaded" class="border" valign="middle">4.437s</td>
<td id="fvRequests" valign="middle">19</td>
<td id="fvBytes" valign="middle">76 KB</td>
                    </tr>
                                        <tr>
                        <td align="left" class="even" valign="middle">Repeat View
                         </td><td id="rvLoadTime" class="even" valign="middle">0.589s</td>
<td id="rvTTFB" class="even" valign="middle">0.215s</td>
<td id="rvStartRender" class="even" valign="middle">0.581s</td>
<td id="rvDocComplete" class="even border" valign="middle">0.589s</td>
<td id="rvRequestsDoc" class="even" valign="middle">4</td>
<td id="rvBytesDoc" class="even" valign="middle">3 KB</td>
<td id="rvFullyLoaded" class="even border" valign="middle">0.880s</td>
<td id="rvRequests" class="even" valign="middle">12</td>
<td id="rvBytes" class="even" valign="middle">5 KB</td>
                    </tr>
                                        </table>

*    Benchmark summary *without the library*:

     <table id="tableResults" class="pretty" align="center" border="1" cellpadding="10" cellspacing="0">
         <tr>
         <th align="center" class="empty" valign="middle" style="border:1px white solid;"></th>
         <th align="center" class="empty" valign="middle" colspan="3"></th>
         <th align="center" class="border" valign="middle" colspan="3">Document Complete</th>
         <th align="center" class="border" valign="middle" colspan="3">Fully Loaded</th>
         </tr>
         <tr>
         <th align="center" class="empty" valign="middle"></th>
         <th align="center" valign="middle">Load Time</th>
         <th align="center" valign="middle">First Byte</th>
         <th align="center" valign="middle">Start Render</th>                                     
         <th align="center" class="border" valign="middle">Time</th>
         <th align="center" valign="middle">Requests</th>
         <th align="center" valign="middle">Bytes In</th>
         <th align="center" class="border" valign="middle">Time</th>
         <th align="center" valign="middle">Requests</th>
         <th align="center" valign="middle">Bytes In</th>
         </tr>
         <tr>
                        <td align="left" valign="middle">First View
                         </td><td id="fvLoadTime" valign="middle">1.345s</td>
<td id="fvTTFB" valign="middle">0.215s</td>
<td id="fvStartRender" valign="middle">0.000s</td>
<td id="fvDocComplete" class="border" valign="middle">1.345s</td>
<td id="fvRequestsDoc" valign="middle">2</td>
<td id="fvBytesDoc" valign="middle">38 KB</td>
<td id="fvFullyLoaded" class="border" valign="middle">7.539s</td>
<td id="fvRequests" valign="middle">28</td>
<td id="fvBytes" valign="middle">602 KB</td>
                    </tr>
                                        <tr>
                        <td align="left" class="even" valign="middle">Repeat View
                         </td><td id="rvLoadTime" class="even" valign="middle">0.700s</td>
<td id="rvTTFB" class="even" valign="middle">0.115s</td>
<td id="rvStartRender" class="even" valign="middle">0.000s</td>
<td id="rvDocComplete" class="even border" valign="middle">0.700s</td>
<td id="rvRequestsDoc" class="even" valign="middle">1</td>
<td id="rvBytesDoc" class="even" valign="middle">5 KB</td>
<td id="rvFullyLoaded" class="even border" valign="middle">4.472s</td>
<td id="rvRequests" class="even" valign="middle">13</td>
<td id="rvBytes" class="even" valign="middle">41 KB</td>
                    </tr>
                                        </table>

*    Detailed results can be fount at [link1](http://www.webpagetest.org/result/120213_7Z_37AS0/) and [link2](http://www.webpagetest.org/result/120213_YK_37AM7/) for the "Using the library" and "Without the library" scenarios respectively.


