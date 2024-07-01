/*------------------------------------------------------------------
此 CSS 檔符合 W3C 標準。如果閣下對魚蛋村使用的 CSS 有興趣，歡迎查看及學習其運作。
但閣下不可以複製本站的設計及技術（圖像、運用、色彩、排版等），版權歸魚蛋村所有
------------------------------------------------------------------*/
* {margin:0; padding:0; font-size:9pt; font-family:verdana,"新細明體";}
a, a * {text-decoration:none; cursor:pointer; color:#784}
a:hover, a:hover * {color:red}
body {text-align:center; background:#abb985; color:#555}
b {color:red; font-weight:normal}
b.g {color:green; font-weight:normal}
small {font-size:8pt}
.hr {clear:both;}
ul, ol {list-style:none;}
i {color:gray;}
img {border:0}
.sicon img {position:relative; top:4px; left:-3px;}
.to_left {float:left}
.to_right {float:right}
h1 {display:block; border:1px #999 solid; padding:1px; background:#fff;}
h1 span {display:block; background:url("win.gif") 6px 4px no-repeat #ccc; color:#333; font-size:12px; font-weight:normal; padding:1px 5px 1px 22px ;}
h1 a {color:#555}
.h1block {border:1px #ddd solid; border-top:0; padding:6px; margin-bottom:6px; background:#fff url("fire.gif") no-repeat bottom right;}
.center {text-align:center}
.right {text-align:right}
.ablock a {display:block;}

#bg_top {background:url("bg_top.png") repeat-x top center;}
#bg_bottom {background:#fff url("bg_bottom.png") repeat-x bottom center;}
#white_border {background:#fff; width:986px; margin:auto; text-align:center;}
#whole_container {width:980px; margin:auto; text-align:left;}
#layout_interaction {border-bottom:1px solid #ccc; background:#eee; height:24px; padding:0 3px 0 7px;}
#layout_interaction a {color:#555;}
#layout_interaction a:hover {position:relative; top:1px; left:1px}
#layout_banner {height:80px; border-top:3px solid #fff; border-bottom:3px solid #fff; background:url("layout_banner.png"); padding-right:9px; overflow:hidden;}
#banner_home {height:55px; width:150px; margin:10px 0 0 8px;}

#ydfloder {margin:12px 0 0 0; z-index:2; float:right}
#ieydfloder {position:relative; z-index:3;}
#ydfloder li {display:block; float:left; text-indent:9999px; z-index:2; position:relative}
#ydfloder li a {width:62px; height:55px; display:block; overflow:hidden; background:url("layout_banner_folder.png") no-repeat;}

#ydfloder #ydfloder_javascript a {background-position:0px 0px;}
#ydfloder #ydfloder_css a {background-position:-62px 0px;}
#ydfloder #ydfloder_html a {background-position:-124px 0px;}
#ydfloder #ydfloder_music a {background-position:-186px 0px;}
#ydfloder #ydfloder_sozai a {background-position:-248px 0px;}
#ydfloder #ydfloder_fonts a {background-position:-310px 0px;}
#ydfloder #ydfloder_games a {background-position:-372px 0px;}
#ydfloder #ydfloder_teachings a {background-position:-434px 0px;}

#ydfloder #ydfloder_javascript a:hover {background-position:0px -55px;}
#ydfloder #ydfloder_css a:hover {background-position:-62px -55px;}
#ydfloder #ydfloder_html a:hover {background-position:-124px -55px;}
#ydfloder #ydfloder_music a:hover {background-position:-186px -55px;}
#ydfloder #ydfloder_sozai a:hover {background-position:-248px -55px;}
#ydfloder #ydfloder_fonts a:hover {background-position:-310px -55px;}
/*#ydfloder #ydfloder_games a:hover {background-position:-372px -55px;}*/
/*#ydfloder #ydfloder_teachings a:hover {background-position:-434px -55px;}*/

#hovercontainer {float:right; position:relative; top:-60px; z-index:1; width:496px}
#ydfloderhover {margin-left:550px; margin-top:5px;  display:none;}

body#ydjavascript #ydfloder_javascript a, body#ydjavascript #ydfloder_javascript a:hover {background-position:0px -110px;}
body#ydcss #ydfloder_css a, body#ydcss #ydfloder_css a:hover {background-position:-62px -110px;}
body#ydhtml #ydfloder_html a, body#ydhtml #ydfloder_html a:hover {background-position:-124px -110px;}
body#ydmusic #ydfloder_music a, body#ydmusic #ydfloder_music a:hover {background-position:-186px -110px;}
body#ydsozai #ydfloder_sozai a, body#ydsozai #ydfloder_sozai a:hover {background-position:-248px -110px;}
body#ydfonts #ydfloder_fonts a, body#ydfonts #ydfloder_fonts a:hover {background-position:-310px -110px;}
body#ydgames #ydfloder_games a, body#ydgames #ydfloder_games a:hover {background-position:-372px -110px;}
body#ydteachings #ydfloder_teachings a, body#ydteachings #ydfloder_teachings a:hover {background-position:-434px -110px;}

#layout_navigation {height:25px; background:url("layout_navigation.png"); color:#fff; padding:0px 8px 0px 10px;}
#layout_navigation a {color:#fff; line-height:25px}
#layout_contentbig {padding:6px; border-right:3px solid #ccd5a7; border-left:3px solid #ccd5a7; border-bottom:9px solid #ccd5a7; background:#f1ffe1; line-height:20px; min-height:640px; height:auto;}
* html #layout_contentbig {height:640px;}

#layout_menu {float:left; width:120px;}
#layout_menu_in {background:url("layout_menubody.png") no-repeat; padding:8px 5px 8px 8px}
#layout_menu_list li {list-style-type:none; padding-left:18px; background:url("win.gif") 2px 35% no-repeat;}
#layout_menu_list a {color:#fff;}
#layout_menu_list .menu_current a {color:#ff0;}
.layout_menubody {width:120px; height:50px; background:url("layout_menuheader.png") no-repeat; margin-bottom:1px}
.layout_menu_javascript {background-position:0px 0px}
.layout_menu_css {background-position:0px -50px}
.layout_menu_html {background-position:0px -100px}
.layout_menu_music {background-position:0px -150px}
.layout_menu_sozai {background-position:0px -200px}
.layout_menu_fonts {background-position:0px -250px}
.layout_menu_games {background-position:0px -300px}
.layout_menu_teachings {background-position:0px -350px}
#layout_menu_bottom {height:54px; background:url("layout_menufooter.png") no-repeat;}

#layout_content {float:right; width:836px; padding-left:6px}
#layout_advertisement {margin:3px 0; background-color:#fff; text-align:center} /*#EFF2E4*/
#layout_footer {background-color:#AAB883; text-align:center; padding:8px; color:#fff}
#layout_footer a {color:#fff;}
#layout_footer a:hover {position:relative; top:1px; left:1px;}

#layout_home_cutl {float:left; width:700px}
#layout_home_cutr {float:right; width:120px}
.cut_two li {width:333px; float:left; border-bottom:#bbb 1px dotted; margin:0 0 5px 0; padding:0 0 5px 0}
.cut_two img, .menu_intro {padding:5px; border:1px solid #E3E3E3; float:left; margin:0 7px 0 0;}
.cut_two a {color:#784; display:block}
.cut_two a:hover {color:#f00;}

.scrollgeneric {line-height: 1px; font-size: 1px; position: absolute; top: 0; left: 0;}

.vscrollerbar {width:15px; background:#fff url("scroll.png") -15px 0px repeat-y;}
.vscrollerbarbeg {width:15px; background:#fff url("scroll.png") -45px -25px no-repeat; height:5px !important;}
.vscrollerbarend {width:15px; background:#fff url("scroll.png") -45px 0px no-repeat; height:5px;}
.vscrollerbase {width:15px; background:#fff url("scroll.png") 0px 0px repeat-y;}
.vscrollerbasebeg {width:15px; background:url("scroll.png") -30px 0px no-repeat; height:15px !important;}
.vscrollerbaseend {width:15px; background:url("scroll.png") -30px -15px no-repeat; height:15px;}
.vscrollerbar {padding:17px; z-index:2;}

.scroll {border:1px #ddd solid; border-top:0; padding:6px; margin-bottom:6px; background:#fff;}
.setscroll {height: 450px; overflow:auto; position:relative; padding-right:6px; background:#fff; text-align:left;}

.sicon li {padding-left:20px; background-position:0px 2px; line-height:20px;}
.sicon_bullet_black, .sicon_bullet_black li {background:url("sicon/bullet_black.gif") no-repeat;}
.sicon_bullet_red, .sicon_bullet_red li {background:url("sicon/bullet_red.gif") no-repeat;}
.sicon_bullet_orange, .sicon_bullet_orange li {background:url("sicon/bullet_orange.gif") no-repeat;}
.sicon_bullet_yellow, .sicon_bullet_yellow li {background:url("sicon/bullet_yellow.gif") no-repeat;}
.sicon_bullet_green, .sicon_bullet_green li {background:url("sicon/bullet_green.gif") no-repeat;}
.sicon_bullet_skyblue, .sicon_bullet_skyblue li {background:url("sicon/bullet_skyblue.gif") no-repeat;}
.sicon_bullet_blue, .sicon_bullet_blue li {background:url("sicon/bullet_blue.gif") no-repeat;}
.sicon_page_black, .sicon_page_black li {background:url("sicon/page_black.gif") no-repeat;}
.sicon_page_red, .sicon_page_red li {background:url("sicon/page_red.gif") no-repeat;}
.sicon_page_orange, .sicon_page_orange li {background:url("sicon/page_orange.gif") no-repeat;}
.sicon_page_yellow, .sicon_page_yellow li {background:url("sicon/page_yellow.gif") no-repeat;}
.sicon_page_green, .sicon_page_green li {background:url("sicon/page_green.gif") no-repeat;}
.sicon_page_skyblue, .sicon_page_skyblue li {background:url("sicon/page_skyblue.gif") no-repeat;}
.sicon_page_blue, .sicon_page_blue li {background:url("sicon/page_blue.gif") no-repeat;}
.sicon_tick, .sicon_tick li {background:url("sicon/tick.gif") no-repeat;}
.sicon_cross, .sicon_cross li {background:url("sicon/cross.gif") no-repeat;}
.sicon_tn, .sicon_tn li {background:url("sicon/tn.gif") no-repeat;}
.sicon_deprecated, .sicon_deprecated li {background:url("sicon/deprecated.gif") no-repeat;}
.sicon_bin, .sicon_bin li {background:url("sicon/bin.gif") no-repeat;}
.sicon_bubbles, .sicon_bubbles li {background:url("sicon/bubbles.gif") no-repeat;}
.sicon_find, .sicon_find li {background:url("sicon/find.gif") no-repeat;}
.sicon_zoom, .sicon_zoom li {background:url("sicon/zoom.gif") no-repeat;}
.sicon_information, .sicon_information li {background:url("sicon/information.gif") no-repeat;}
.sicon_chart_bar, .sicon_chart_bar li {background:url("sicon/chart_bar.gif") no-repeat;}
.sicon_talk, .sicon_talk li {background:url("sicon/talk.gif") no-repeat;}
.sicon_connect, .sicon_connect li {background:url("sicon/connect.gif") no-repeat;}
.sicon_bbs, .sicon_bbs li {background:url("sicon/bbs.gif") no-repeat;}
.sicon_num_1, .sicon_num_1 li {background:url("sicon/num_1.gif") no-repeat;}
.sicon_num_2, .sicon_num_2 li {background:url("sicon/num_2.gif") no-repeat;}
.sicon_num_3, .sicon_num_3 li {background:url("sicon/num_3.gif") no-repeat;}
.sicon_num_4, .sicon_num_4 li {background:url("sicon/num_4.gif") no-repeat;}
.sicon_num_5, .sicon_num_5 li {background:url("sicon/num_5.gif") no-repeat;}
.sicon_num_6, .sicon_num_6 li {background:url("sicon/num_6.gif") no-repeat;}
.sicon_num_7, .sicon_num_7 li {background:url("sicon/num_7.gif") no-repeat;}
.sicon_num_8, .sicon_num_8 li {background:url("sicon/num_8.gif") no-repeat;}
.sicon_num_9, .sicon_num_9 li {background:url("sicon/num_9.gif") no-repeat;}
.sicon_num_10, .sicon_num_10 li {background:url("sicon/num_10.gif") no-repeat;}
.sicon_num_11, .sicon_num_11 li {background:url("sicon/num_11.gif") no-repeat;}
.sicon_num_12, .sicon_num_12 li {background:url("sicon/num_12.gif") no-repeat;}
.sicon_num_13, .sicon_num_13 li {background:url("sicon/num_13.gif") no-repeat;}
.sicon_num_14, .sicon_num_14 li {background:url("sicon/num_14.gif") no-repeat;}
.sicon_num_15, .sicon_num_15 li {background:url("sicon/num_15.gif") no-repeat;}


.sicon_people1, .sicon_people1 li {background:url("sicon/people1.gif") no-repeat;}
.sicon_people2, .sicon_people4 li {background:url("sicon/people2.gif") no-repeat;}
.sicon_people3, .sicon_people4 li {background:url("sicon/people3.gif") no-repeat;}
.sicon_people4, .sicon_people4 li {background:url("sicon/people4.gif") no-repeat;}
.sicon_people5, .sicon_people4 li {background:url("sicon/people5.gif") no-repeat;}
.sicon_people6, .sicon_people4 li {background:url("sicon/people6.gif") no-repeat;}
.sicon_added, .sicon_added li {background:url("sicon/added.gif") no-repeat;}
.sicon_event, .sicon_event li {background:url("sicon/event.gif") no-repeat;}
.sicon_error, .sicon_error li {background:url("sicon/error.gif") no-repeat;}
.sicon_debug, .sicon_debug li {background:url("sicon/debug.gif") no-repeat;}
.sicon_renew, .sicon_renew li {background:url("sicon/renew.gif") no-repeat;}

.li_float li {float:left; margin:0 7px}
.listheader, .listheader * {color:blue; font-size:10pt}
.fontc_blue {color:blue;}
.fontc_red {color:red;}
.fontc_green {color:green;}
.fontc_yellow {color:#982;}
.fontc_lightgreen {color:#784;}
.fontc_linkgreen {color:#563;}
.fontc_lightgray {color:#888;}

.bottom_dash_whole {padding-bottom:5px; margin-bottom:5px; border-bottom:1px #bbb dotted;}
.bottom_dash_each li {border-bottom:1px #bbb dotted;}

.msgbox_skyblue {background:#E5EDF7; padding:2px 8px; text-align:center; margin-bottom:6px}
.msgbox_pink {background:#F7E0E0; padding:2px 8px; text-align:center; margin-bottom:6px}

.pagebutton {float:right; list-style-type:none; padding:0; margin:0;}
.pagebutton li {display:block; float:left; padding-left:0px; text-align:center; line-height:22px; height:22px;}
.pagebutton li.mbb {background:url("page/blank.gif") no-repeat 0 3px; width:29px; margin-right:2px; cursor:pointer}
.pagebutton li.mbb_over {background:url("page/blank_over.gif") no-repeat 0 3px; width:29px; margin-right:2px; cursor:pointer}
.pagebutton li.mbb_on {background:url("page/blank_on.gif") no-repeat 0 3px; width:29px; margin-right:2px; cursor:default}
.pagebutton li.hide {background:url("page/hide.gif") no-repeat 0 3px; width:29px; margin-right:2px; cursor:default}
.pagebutton .mbpback, .pagebutton .mbpnext {cursor:pointer}
