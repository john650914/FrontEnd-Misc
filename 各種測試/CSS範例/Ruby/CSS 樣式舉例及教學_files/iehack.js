if ($.browser.msie && $.browser.version <= 6) {
	$("#ydfloder").remove();
	$("#layout_banner").append('<span style="display:inline-block; filter: progid:DXImageTransform.Microsoft.AlphaImageLoader(src=\'../global/floder_ufo_test.png\', sizingMethod=\'scale\'); height:55px; width:496px;" id="ydfloder"><img style="height:55px; width:496px;" src="../global/spacer.gif" id="ieydfloder" usemap="#folder"/></span>');
}