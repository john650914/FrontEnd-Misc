(function (global) {
	const pageLoadingHTML = '<style>.ui-hide-overflow{overflow:hidden;}.ui-page-loading{width:100%;height:100%;background:url(https://tw.hicdn.beanfun.com/beanfun/beanfun/common_assets/images/loading/type1.gif) 50% 50% rgba(0,0,0,.75) no-repeat;position:fixed;left:0;top:0;z-index:2147483648;display:none;}</style><div id="pageLoading" class="ui-page-loading"></div>';

	document.body.insertAdjacentHTML('beforeend', pageLoadingHTML);

	function showLoading() {
		document.body.classList.add('ui-hide-overflow');
		document.querySelector('.ui-page-loading').style.display = 'block';
	}
	function hideLoading() {
		document.body.classList.remove('ui-hide-overflow');
		document.querySelector('.ui-page-loading').style.display = 'none';
	}

	//////////////////////// 取得所有圖片 ////////////////////////
	function getAllMediaUrls() {
		const urls = new Set();

		// <img> 和 <picture>
		document.querySelectorAll('img').forEach(img => {
			if (img.src) urls.add(img.src);
			if (img.srcset) {
				img.srcset.split(',').forEach(src => {
					const trimmed = src.trim().split(' ')[0];
					if (trimmed) urls.add(trimmed);
				});
			}
		});
		document.querySelectorAll('picture source').forEach(source => {
			if (source.srcset) {
				source.srcset.split(',').forEach(src => {
					const trimmed = src.trim().split(' ')[0];
					if (trimmed) urls.add(trimmed);
				});
			}
		});

		// <video src> 和 <source src>
		document.querySelectorAll('video').forEach(video => {
			if (video.src) urls.add(video.src);
			video.querySelectorAll('source').forEach(source => {
				if (source.src) urls.add(source.src);
			});
		});

		// 抓取背景圖片樣式
		document.querySelectorAll('*').forEach(el => {
			const styles = getComputedStyle(el);
			extractUrlsFromCss(styles.backgroundImage).forEach(url => urls.add(url));

			['::before', '::after'].forEach(pseudo => {
				const pseudoStyle = getComputedStyle(el, pseudo);
				extractUrlsFromCss(pseudoStyle.backgroundImage).forEach(url => urls.add(url));
			});
		});
		console.log(urls);
		return [...urls];
	}
	function extractUrlsFromCss(cssValue) {
		const urls = [];
		const regex = /url\(["']?([^"')]+)["']?\)/g;
		let match;
		while ((match = regex.exec(cssValue)) !== null) {
			urls.push(match[1]);
		}
		return urls;
	}

	//////////////////////// 主要程式 ////////////////////////
	function pageLoading({onProgress, onComplete, autoHide=true, showOnStart=true, detectVideo=true, videoEvent='loadeddata'}) {
		showOnStart && showLoading();

		const urls = getAllMediaUrls();
		let loadedCount = 0;
		const total = urls.length;

		const update = () => {
			loadedCount++;
			onProgress?.(loadedCount, total);
			if (loadedCount === total) {
				autoHide && hideLoading();
				onComplete?.();
			}
		};

		urls.forEach(url => {
			const isVideo = /\.(mp4|webm|ogg)(\?.*)?$/.test(url);

			if (isVideo && detectVideo) {
				const video = document.createElement('video');
				video.preload = 'auto';
				video.src = url;

				const timeout = setTimeout(() => {
					console.warn('video timeout:', url);
					update();
				}, 8000);

				video.addEventListener(videoEvent, () => {
					clearTimeout(timeout);
					update();
				});

				video.addEventListener('error', () => {
					clearTimeout(timeout);
					console.warn('video load error:', url);
					update();
				});
			} else {
				const img = new Image();
				img.src = url;
				img.onload = () => update();
				img.onerror = () => {
					console.warn('image load error:', url);
					update();
				};
			}
		});

		// 避免發生意外loading蓋在網頁上就不能瀏覽了
		if(autoHide){
			setTimeout(()=>{
				if (loadedCount < total) {
					console.warn('⚠️ 資源載入超時，自動隱藏 loading 畫面');
					hideLoading();
					onComplete?.();
				}
			}, 15000);
		}
	}

	// 全域使用
	global.pageLoading = pageLoading;
})(window);

/* {
	onProgress: fn,			// 載入中的function
	onComplete: fn,			// 載入完成的function
	autoHide: true,         // 所有資源載入完畢後自動關閉 loading 畫面（預設 true）
	showOnStart: true,      // 一進來就顯示 loading 畫面（預設 true）
	detectVideo: true,      // 是否偵測影片資源（預設 true）
	videoEvent: 'loadeddata'// 可自定影片的觸發事件（預設 loadeddata）
} */