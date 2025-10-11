// icon.js
// 小工具：把屬性物件轉為字串
const attrs = (o = {}) =>
	Object.entries(o)
		.filter(([, v]) => v !== undefined && v !== null && v !== false)
		.map(([k, v]) => `${k}="${String(v).replace(/"/g, "&quot;")}"`)
		.join(" ");

// 預設樣式（可被覆蓋）
const baseProps = {
	xmlns: "http://www.w3.org/2000/svg",
	viewBox: "0 0 24 24",
	fill: "none",
	stroke: "currentColor",
	"stroke-width": 2,
	"stroke-linecap": "round",
	"stroke-linejoin": "round",
};

// 讓 size 同時設定 width/height（可傳 24 或 "1.25rem"）
function withSize(props = {}) {
	const size = props.size ?? 24;
	const w = props.width ?? size;
	const h = props.height ?? size;
	const { size: _omit, ...rest } = props;
	return { width: w, height: h, ...rest };
}

// 你的 icon 目錄：每個 icon 都是一個函式，回傳 <svg> 的字串
export const icons = {
	"arrow-left": (props = {}) => {
		props = withSize(props);
		return `<svg ${attrs({ ...baseProps, ...props })}>
      <path d="M19 12H6"></path>
      <path d="M12 19l-7-7 7-7"></path>
    </svg>`;
	},

	"chevron-left": (props = {}) => {
		props = withSize(props);
		return `<svg ${attrs({ ...baseProps, ...props })}>
      <path d="M15 18l-6-6 6-6"></path>
    </svg>`;
	},

	"x": (props = {}) => {
		props = withSize(props);
		return `<svg ${attrs({ ...baseProps, ...props })}>
      <path d="M18 6L6 18"></path>
      <path d="M6 6l12 12"></path>
    </svg>`;
	},

	"check": (props = {}) => {
		props = withSize(props);
		return `<svg ${attrs({ ...baseProps, ...props })}>
      <path d="M20 6L9 17l-5-5"></path>
    </svg>`;
	},

	"info": (props = {}) => {
		props = withSize(props);
		return `<svg ${attrs({ ...baseProps, ...props })}>
      <circle cx="12" cy="12" r="10"></circle>
      <path d="M12 16v-4"></path>
      <path d="M12 8h.01"></path>
    </svg>`;
	},

	// 旋轉中的 loading（用 CSS 加動畫）
	"spinner": (props = {}) => {
		props = withSize(props);
		const cls = (props.class || "") + " icon-spin";
		return `<svg ${attrs({ ...baseProps, ...props, class: cls.trim() })}>
      <circle cx="12" cy="12" r="10" stroke-opacity="0.2"></circle>
      <path d="M22 12a10 10 0 0 0-10-10" stroke="currentColor"></path>
    </svg>`;
	},
};

// 回傳 SVG Element（非字串），方便 append
export function createIcon(name, props = {}) {
	const maker = icons[name];
	if (!maker) throw new Error(`Icon not found: ${name}`);
	const tpl = document.createElement("template");
	tpl.innerHTML = maker(props).trim();
	return tpl.content.firstElementChild;
}

// 直接拿字串（要插到 innerHTML 時用）
export function iconHTML(name, props = {}) {
	const maker = icons[name];
	if (!maker) throw new Error(`Icon not found: ${name}`);
	return maker(props);
}

// 批次掃描 data-icon 的元素並替換
export function hydrateIcons(selector = "[data-icon]") {
	document.querySelectorAll(selector).forEach(el => {
		const name = el.getAttribute("data-icon");
		const size = el.getAttribute("data-size");
		const strokeWidth = el.getAttribute("data-stroke");
		const fill = el.getAttribute("data-fill");
		const cls = el.getAttribute("data-class");
		const svg = createIcon(name, {
			size: size ? (/\d$/.test(size) ? Number(size) : size) : undefined,
			"stroke-width": strokeWidth ? Number(strokeWidth) : undefined,
			fill: fill ?? undefined,
			class: cls ?? undefined,
			"aria-hidden": "true",
			focusable: "false",
		});
		el.replaceWith(svg);
	});
}
