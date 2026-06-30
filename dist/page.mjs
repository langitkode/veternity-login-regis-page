"use server";
import { getKindeCSRF, getKindeRequiredCSS, getKindeRequiredJS, getKindeWidget, getSVGFaviconUrl } from "@kinde/infrastructure";
import "react";
import { jsx, jsxs } from "react/jsx-runtime";
import { renderToString } from "react-dom/server.browser";
//#region kindeSrc/components/widget.tsx
var Widget = ({ heading, description }) => {
	return /* @__PURE__ */ jsx("article", {
		className: "widget-article",
		children: /* @__PURE__ */ jsx("main", {
			className: "widget-main",
			children: /* @__PURE__ */ jsxs("div", {
				className: "widget-container",
				children: [
					/* @__PURE__ */ jsx("h1", {
						className: "widget-heading",
						children: heading
					}),
					/* @__PURE__ */ jsx("p", {
						className: "widget-description",
						children: description
					}),
					getKindeWidget()
				]
			})
		})
	});
};
//#endregion
//#region kindeSrc/components/footer.tsx
var Footer = () => {
	return /* @__PURE__ */ jsxs("div", {
		className: "footer",
		children: [/* @__PURE__ */ jsx("p", { children: "By continuing, you agree to our policies" }), /* @__PURE__ */ jsxs("div", {
			className: "footer-links",
			children: [
				/* @__PURE__ */ jsx("a", {
					className: "footer-link",
					href: "#",
					children: "Privacy Policy"
				}),
				"·",
				/* @__PURE__ */ jsx("a", {
					className: "footer-link",
					href: "#",
					children: "Terms of Service"
				})
			]
		})]
	});
};
//#endregion
//#region kindeSrc/layouts/default.tsx
var DefaultLayout = ({ children }) => /* @__PURE__ */ jsx("section", {
	className: "layout-section",
	children: /* @__PURE__ */ jsxs("main", {
		className: "layout-main",
		id: "main",
		children: [/* @__PURE__ */ jsxs("div", {
			className: "layout-row",
			children: [/* @__PURE__ */ jsx("div", {
				className: "layout-image-wrapper",
				children: /* @__PURE__ */ jsx("img", {
					src: "https://lh3.googleusercontent.com/d/1A17sCx42_kMubJ4_S0AxlPTEefSBTxgV",
					className: "layout-image",
					alt: "Icon"
				})
			}), /* @__PURE__ */ jsx("div", {
				className: "layout-content",
				children
			})]
		}), /* @__PURE__ */ jsx(Footer, {})]
	})
});
//#endregion
//#region kindeSrc/styles/styles.ts
var getStyles = () => `@import url('https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;500;600;700&family=Sora:wght@400;600;700;800&display=swap');
    :root {
      --kinde-heading-font-family: "Sora", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
      --kinde-base-font-family: "Plus Jakarta Sans", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
      --kinde-base-color: #ffffff;
      --kinde-button-primary-background-color: #a855f7; 
      --kinde-button-primary-color: #ffffff;
      --kinde-button-primary-border-radius: 14px;
      --kinde-button-primary-font-weight: 600;
      --kinde-button-secondary-background-color: #ffffff;
      --kinde-button-secondary-color: #0f172a; /* Slate-900 */
      --kinde-button-secondary-border-radius: 14px;
    }`;
//#endregion
//#region kindeSrc/root.tsx
var Root = ({ children, context, request }) => {
	return /* @__PURE__ */ jsxs("html", {
		dir: request.locale.isRtl ? "rtl" : "ltr",
		lang: request.locale.lang,
		children: [/* @__PURE__ */ jsxs("head", { children: [
			/* @__PURE__ */ jsx("meta", { charSet: "utf-8" }),
			/* @__PURE__ */ jsx("meta", {
				content: "width=device-width, initial-scale=1.0",
				name: "viewport"
			}),
			/* @__PURE__ */ jsx("meta", {
				content: "noindex",
				name: "robots"
			}),
			/* @__PURE__ */ jsx("meta", {
				content: getKindeCSRF(),
				name: "csrf-token"
			}),
			/* @__PURE__ */ jsx("meta", {
				content: "light",
				name: "color-scheme"
			}),
			/* @__PURE__ */ jsx("meta", {
				content: "nopagereadaloud",
				name: "google"
			}),
			/* @__PURE__ */ jsx("title", { children: context.widget.content.page_title }),
			/* @__PURE__ */ jsx("link", {
				href: getSVGFaviconUrl(),
				rel: "icon",
				type: "image/svg+xml"
			}),
			getKindeRequiredCSS(),
			getKindeRequiredJS(),
			/* @__PURE__ */ jsx("style", { children: getStyles() })
		] }), /* @__PURE__ */ jsx("body", {
			className: "kinde-root",
			style: {
				margin: 0,
				padding: 0
			},
			children: /* @__PURE__ */ jsx("div", {
				"data-kinde-root": "true",
				children
			})
		})]
	});
};
//#endregion
//#region kindeSrc/environment/pages/(kinde)/(login)/page.tsx
var DefaultPage = ({ context, request }) => {
	return /* @__PURE__ */ jsx(Root, {
		context,
		request,
		children: /* @__PURE__ */ jsx(DefaultLayout, { children: /* @__PURE__ */ jsx(Widget, {
			heading: context.widget.content.heading,
			description: context.widget.content.description
		}) })
	});
};
async function Page(event) {
	return renderToString(await DefaultPage(event));
}
//#endregion
export { Page as default };
