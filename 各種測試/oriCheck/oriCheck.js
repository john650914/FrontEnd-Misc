/**
 * @description oriCheck.js
 * @param {Object} options 設定
 * @param {Function} options.oriChange 回呼函式
 * @param {Boolean} options.runOnce 是否只執行一次
 * @param {Boolean} options.blockPortraitContent 擋掉直式內容
 * @param {Boolean} options.blockLandscapeContent 擋掉橫式內容
 *
 * 執行時機：
 * 初次執行、裝置長寬比例改變時
 * 判斷方式為 matchMedia事件，若不符合則以resize事件判斷
 *
 **/
;(function () {
	// 註冊事件
	function deepExtend(out) {
		out = out || {};
		for (var i = 1; i < arguments.length; i++) {
			var obj = arguments[i];
			if (!obj) continue;
			for (var key in obj) {
				if (obj.hasOwnProperty(key)) {
					var rawType = Object.prototype.toString.call(obj[key]);
					if (rawType === '[object Object]') {
						out[key] = deepExtend(out[key], obj[key]);
					} else if (rawType === '[object Array]') {
						out[key] = deepExtend(new Array(obj[key].length), obj[key]);
					} else {
						out[key] = obj[key];
					}
				}
			}
		}
		return out;
	};
	function extend(out) {
		out = out || {};
		for (var i = 1; i < arguments.length; i++) {
			if (!arguments[i]) continue;
			for (var key in arguments[i]) {
				if (arguments[i].hasOwnProperty(key)) out[key] = arguments[i][key];
			}
		}
		return out;
	};
	// isMobile
	if (typeof isMobile == 'undefined') {
		(function () { var f = {}; var g = /iPhone/i, i = /iPod/i, j = /iPad/i, k = /\biOS-universal(?:.+)Mac\b/i, h = /\bAndroid(?:.+)Mobile\b/i, m = /Android/i, c = /(?:SD4930UR|\bSilk(?:.+)Mobile\b)/i, d = /Silk/i, b = /Windows Phone/i, n = /\bWindows(?:.+)ARM\b/i, p = /BlackBerry/i, q = /BB10/i, s = /Opera Mini/i, t = /\b(CriOS|Chrome)(?:.+)Mobile/i, u = /Mobile(?:.+)Firefox\b/i, v = function (l) { return void 0 !== l && "MacIntel" === l.platform && "number" == typeof l.maxTouchPoints && l.maxTouchPoints > 1 && "undefined" == typeof MSStream }; function w(l) { return function ($) { return $.test(l) } } function x(l) { var $ = { userAgent: "", platform: "", maxTouchPoints: 0 }; l || "undefined" == typeof navigator ? "string" == typeof l ? $.userAgent = l : l && l.userAgent && ($ = { userAgent: l.userAgent, platform: l.platform, maxTouchPoints: l.maxTouchPoints || 0 }) : $ = { userAgent: navigator.userAgent, platform: navigator.platform, maxTouchPoints: navigator.maxTouchPoints || 0 }; var a = $.userAgent, e = a.split("[FBAN"); void 0 !== e[1] && (a = e[0]), void 0 !== (e = a.split("Twitter"))[1] && (a = e[0]); var r = w(a), o = { apple: { phone: r(g) && !r(b), ipod: r(i), tablet: !r(g) && (r(j) || v($)) && !r(b), universal: r(k), device: (r(g) || r(i) || r(j) || r(k) || v($)) && !r(b) }, amazon: { phone: r(c), tablet: !r(c) && r(d), device: r(c) || r(d) }, android: { phone: !r(b) && r(c) || !r(b) && r(h), tablet: !r(b) && !r(c) && !r(h) && (r(d) || r(m)), device: !r(b) && (r(c) || r(d) || r(h) || r(m)) || r(/\bokhttp\b/i) }, windows: { phone: r(b), tablet: r(n), device: r(b) || r(n) }, other: { blackberry: r(p), blackberry10: r(q), opera: r(s), firefox: r(u), chrome: r(t), device: r(p) || r(q) || r(s) || r(u) || r(t) }, any: !1, phone: !1, tablet: !1 }; return o.any = o.apple.device || o.android.device || o.windows.device || o.other.device, o.phone = o.apple.phone || o.android.phone || o.windows.phone, o.tablet = o.apple.tablet || o.android.tablet || o.windows.tablet, o } f = x(); if (typeof exports === "object" && typeof module !== "undefined") { module.exports = f } else if (typeof define === "function" && define.amd) { define(function () { return f }) } else { this["isMobile"] = f } })();
	};
	// oriCheck
	function oriCheck(options) {
		/* 初始 */
		let defaults = {
			runOnce: false,        // true：只執行一次，false：持續執行
			oriChange: function(object){},
			blockPortraitContent: false,
			blockLandscapeContent: false,
		};
		let settings = deepExtend({}, defaults, options);
		/* 參數 */
		// 內部切換
		let innerObj = {
			orientation: 0, //  1: 'landscape' || 2: 'portrait'
			device: 0, // 1: 'mobile' || 2: 'desktop'
		};
		let onceController = false;
		// 取用參數
		let newOptions = {
			// 執行模式
			runOnce: (settings.runOnce === true)? true : false,
			blockPortraitContent: (settings.blockPortraitContent === true)? true : false,
			blockLandscapeContent: (settings.blockLandscapeContent === true)? true : false,
		};
		/* 裝置判斷 */
		function detectDevice() {
			let nowObj = {...innerObj};
			if(!isMobile.any) {
				innerObj.device = 2;
			}else{
				innerObj.device = 1;
			}
			detectMode(nowObj);
		};
		/* 狀態判斷 */
		function detectMode(nowObj) {
			if(window.matchMedia("(orientation: portrait)").matches) {
				innerObj.orientation = 2;
			}else if(window.matchMedia("(orientation: landscape)").matches) {
				innerObj.orientation = 1;
			}else{
				detectSize();
			}
			// 執行
			detectCallback(nowObj);
		};
		/* 寬高判斷 */
		function detectSize() {
			var winH = window.innerHeight;
			var winW = window.innerWidth;
			if(winW < winH) {
				innerObj.orientation = 2;
			}else {
				innerObj.orientation = 1;
			}
		}
		/* 內部執行(判斷) */
		function objOrientation(type) {
			switch (type) {
				case 1:
					return 'landscape';
				case 2:
					return 'portrait';
				default:
					return undefined;
			}
		};
		function objDevice(type) {
			switch (type) {
				case 1:
					return 'mobile';
				case 2:
					return 'desktop';
				default:
					return undefined;
			}
		};
		/* 內部執行 */
		function detectCallback(nowObj) {
			// 只執行一次
			if(onceController) {
				if(document.querySelector('.blockPortraitContent, .blockLandscapeContent')){
					document.querySelector('.blockPortraitContent, .blockLandscapeContent').remove();
				}
				return
			};
			// 執行
			if(nowObj.orientation !== innerObj.orientation) {
				runCallback();
			}
			// 執行一次關閉
			if (newOptions.runOnce === true) {
				onceController = true;
			}
		};
		function runCallback() {
			if(objOrientation(innerObj.orientation) === 'portrait' && newOptions.blockPortraitContent === true && objDevice(innerObj.device) === 'mobile') {
				document.body.insertAdjacentHTML('beforeend', '<div class="blockPortraitContent" style="position: fixed; top: 0; left: 0; width: 100%; height: 100%; background:url(https://tw.hicdn.beanfun.com/plugins/oriCheck/img/rotate_your_device_to_landscape.png) 50% 50%/auto 40vw no-repeat rgba(0,0,0,.85); z-index: 9999;"></div>');
			}else if(objOrientation(innerObj.orientation) === 'landscape') {
				let blockPortraitContent = document.querySelector('.blockPortraitContent');
				if(blockPortraitContent) {
					blockPortraitContent.remove();
				}
			}
			if(objOrientation(innerObj.orientation) === 'landscape' && newOptions.blockLandscapeContent === true && objDevice(innerObj.device) === 'mobile') {
				document.body.insertAdjacentHTML('beforeend', '<div class="blockLandscapeContent" style="position: fixed; top: 0; left: 0; width: 100%; height: 100%; background:url(https://tw.hicdn.beanfun.com/plugins/oriCheck/img/rotate_your_device_to_portrait.png) 50% 50%/40vh auto no-repeat rgba(0,0,0,.85); z-index: 9999;"></div>');
			}else if(objOrientation(innerObj.orientation) === 'portrait') {
				let blockLandscapeContent = document.querySelector('.blockLandscapeContent');
				if(blockLandscapeContent) {
					blockLandscapeContent.remove();
				}
			}
			
			let outputObj = {
				orientation: objOrientation(innerObj.orientation),
				device: objDevice(innerObj.device),
			};
			newOptions.oriChange = (typeof settings.oriChange === 'function') ? settings.oriChange(outputObj) : defaults.oriChange(outputObj);
		};
		/* 外部執行 */
		document.addEventListener('DOMContentLoaded', detectDevice);
		window.addEventListener('resize', detectDevice, true);
		/* 移除執行 */
		function destroyOri() {
			newOptions = defaults;
			detectDevice();
			// 外部執行
			document.removeEventListener('DOMContentLoaded', detectDevice);
			window.removeEventListener('resize', detectDevice, true);
		};
		this.destroy = destroyOri;
		/* RETURN */
		return this;
	};
	// 輸出 oriCheck
	window.oriCheck = oriCheck;
})();